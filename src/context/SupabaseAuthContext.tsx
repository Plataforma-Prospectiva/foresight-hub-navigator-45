import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  authRateLimiter, 
  validatePasswordStrength, 
  validateEmail, 
  sanitizeInput, 
  logSecurityEvent,
  validateSession
} from '@/utils/security';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  signUp: (email: string, password: string, displayName?: string) => Promise<{ error: any; rateLimited?: boolean; passwordWeak?: boolean }>;
  signIn: (email: string, password: string) => Promise<{ error: any; rateLimited?: boolean; remainingAttempts?: number }>;
  signOut: () => Promise<void>;
  loading: boolean;
  validatePasswordStrength: (password: string) => ReturnType<typeof validatePasswordStrength>;
  isRateLimited: (email: string) => boolean;
  getRemainingAttempts: (email: string) => number;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const SupabaseAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, displayName?: string) => {
    // Input validation and sanitization
    const sanitizedEmail = sanitizeInput(email).toLowerCase();
    const sanitizedDisplayName = displayName ? sanitizeInput(displayName) : undefined;
    
    // Validate email format
    const emailValidation = validateEmail(sanitizedEmail);
    if (!emailValidation.isValid) {
      const errorMsg = emailValidation.errors.join(', ');
      toast.error(`Email inválido: ${errorMsg}`);
      await logSecurityEvent({
        type: 'auth_failure',
        email: sanitizedEmail,
        details: 'Invalid email format during signup'
      });
      return { error: { message: errorMsg } };
    }

    // Check rate limiting
    if (authRateLimiter.isBlocked(sanitizedEmail)) {
      const blockedUntil = authRateLimiter.getBlockedUntil(sanitizedEmail);
      const remainingTime = blockedUntil ? Math.ceil((blockedUntil - Date.now()) / 60000) : 30;
      toast.error(`Demasiados intentos. Intenta de nuevo en ${remainingTime} minutos.`);
      await logSecurityEvent({
        type: 'rate_limit',
        email: sanitizedEmail,
        details: 'Signup rate limit exceeded'
      });
      return { error: { message: 'Rate limited' }, rateLimited: true };
    }

    // Validate password strength
    const passwordValidation = validatePasswordStrength(password);
    if (!passwordValidation.isValid) {
      toast.error(`Contraseña débil: ${passwordValidation.feedback.join(', ')}`);
      await logSecurityEvent({
        type: 'auth_failure',
        email: sanitizedEmail,
        details: 'Weak password during signup'
      });
      return { error: { message: 'Weak password' }, passwordWeak: true };
    }

    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email: sanitizedEmail,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            display_name: sanitizedDisplayName || sanitizedEmail
          }
        }
      });

      // Record attempt
      authRateLimiter.recordAttempt(sanitizedEmail, !error);

      if (error) {
        toast.error(error.message);
        await logSecurityEvent({
          type: 'auth_failure',
          email: sanitizedEmail,
          details: `Signup failed: ${error.message}`
        });
      } else {
        toast.success('¡Registro exitoso! Revisa tu email para confirmar tu cuenta.');
        await logSecurityEvent({
          type: 'auth_success',
          email: sanitizedEmail,
          details: 'Successful signup'
        });
      }

      return { error };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      await logSecurityEvent({
        type: 'auth_failure',
        email: sanitizedEmail,
        details: `Signup exception: ${errorMessage}`
      });
      return { error: { message: errorMessage } };
    }
  };

  const signIn = async (email: string, password: string) => {
    // Input validation and sanitization
    const sanitizedEmail = sanitizeInput(email).toLowerCase();
    
    // Validate email format
    const emailValidation = validateEmail(sanitizedEmail);
    if (!emailValidation.isValid) {
      const errorMsg = emailValidation.errors.join(', ');
      toast.error(`Email inválido: ${errorMsg}`);
      await logSecurityEvent({
        type: 'auth_failure',
        email: sanitizedEmail,
        details: 'Invalid email format during signin'
      });
      return { error: { message: errorMsg } };
    }

    // Check rate limiting
    if (authRateLimiter.isBlocked(sanitizedEmail)) {
      const blockedUntil = authRateLimiter.getBlockedUntil(sanitizedEmail);
      const remainingTime = blockedUntil ? Math.ceil((blockedUntil - Date.now()) / 60000) : 30;
      toast.error(`Demasiados intentos fallidos. Intenta de nuevo en ${remainingTime} minutos.`);
      await logSecurityEvent({
        type: 'rate_limit',
        email: sanitizedEmail,
        details: 'Signin rate limit exceeded'
      });
      return { error: { message: 'Rate limited' }, rateLimited: true };
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: sanitizedEmail,
        password
      });

      // Record attempt result
      const result = authRateLimiter.recordAttempt(sanitizedEmail, !error);

      if (error) {
        toast.error(`Error de autenticación. Intentos restantes: ${result.remainingAttempts}`);
        await logSecurityEvent({
          type: 'auth_failure',
          email: sanitizedEmail,
          details: `Signin failed: ${error.message}`,
          metadata: { remainingAttempts: result.remainingAttempts }
        });
        return { 
          error, 
          remainingAttempts: result.remainingAttempts,
          rateLimited: result.blocked 
        };
      } else {
        toast.success('¡Sesión iniciada exitosamente!');
        await logSecurityEvent({
          type: 'auth_success',
          email: sanitizedEmail,
          details: 'Successful signin'
        });
        return { error };
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      await logSecurityEvent({
        type: 'auth_failure',
        email: sanitizedEmail,
        details: `Signin exception: ${errorMessage}`
      });
      return { error: { message: errorMessage } };
    }
  };

  const signOut = async () => {
    try {
      const currentUser = user;
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast.error('Error al cerrar sesión');
        await logSecurityEvent({
          type: 'suspicious_activity',
          userId: currentUser?.id,
          details: `Signout failed: ${error.message}`
        });
      } else {
        toast.success('Sesión cerrada');
        await logSecurityEvent({
          type: 'auth_success',
          userId: currentUser?.id,
          details: 'Successful signout'
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      await logSecurityEvent({
        type: 'suspicious_activity',
        details: `Signout exception: ${errorMessage}`
      });
    }
  };

  // Additional security utilities
  const isRateLimited = (email: string) => {
    return authRateLimiter.isBlocked(sanitizeInput(email).toLowerCase());
  };

  const getRemainingAttempts = (email: string) => {
    return authRateLimiter.getRemainingAttempts(sanitizeInput(email).toLowerCase());
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      signUp,
      signIn,
      signOut,
      loading,
      validatePasswordStrength,
      isRateLimited,
      getRemainingAttempts
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useSupabaseAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useSupabaseAuth debe ser usado dentro de un SupabaseAuthProvider');
  }
  return context;
};