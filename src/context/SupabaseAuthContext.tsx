import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  signUp: (email: string, password: string, displayName?: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const SupabaseAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      // Create admin user if it doesn't exist
      await createAdminUserIfNeeded();
      
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
    };

    initAuth();
  }, []);

  const createAdminUserIfNeeded = async () => {
    try {
      // Try to sign up the admin user - if it already exists, this will fail silently
      await supabase.auth.signUp({
        email: 'admin@admin.com',
        password: 'Perrito',
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            display_name: 'Admin'
          }
        }
      });
    } catch (error) {
      // Admin user might already exist, that's fine
      console.log('Admin user creation attempt:', error);
    }
  };

  const signUp = async (email: string, password: string, displayName?: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          display_name: displayName || email
        }
      }
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('¡Registro exitoso! Revisa tu email para confirmar tu cuenta.');
    }

    return { error };
  };

  const signIn = async (email: string, password: string) => {
    // Special handling for admin user - confirm email automatically if needed
    if (email === 'admin@admin.com') {
      try {
        // First, try to confirm the admin user if not confirmed
        await supabase.auth.admin.updateUserById(
          'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 
          { email_confirm: true }
        );
      } catch (error) {
        // Continue with normal login if admin confirmation fails
        console.log('Admin confirmation attempt:', error);
      }
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('¡Sesión iniciada exitosamente!');
    }

    return { error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Error al cerrar sesión');
    } else {
      toast.success('Sesión cerrada');
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      signUp,
      signIn,
      signOut,
      loading
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