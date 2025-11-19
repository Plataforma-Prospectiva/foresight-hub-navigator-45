// Security utilities and validation functions
import { supabase } from '@/integrations/supabase/client';

// Rate limiting for authentication attempts
class AuthRateLimiter {
  private attempts: Map<string, { count: number; lastAttempt: number; blockedUntil?: number }> = new Map();
  private readonly maxAttempts = 5;
  private readonly windowMs = 15 * 60 * 1000; // 15 minutes
  private readonly blockDurationMs = 30 * 60 * 1000; // 30 minutes

  isBlocked(identifier: string): boolean {
    const record = this.attempts.get(identifier);
    if (!record) return false;

    const now = Date.now();
    
    // Check if still blocked
    if (record.blockedUntil && now < record.blockedUntil) {
      return true;
    }

    // Reset if block period has expired
    if (record.blockedUntil && now >= record.blockedUntil) {
      this.attempts.delete(identifier);
      return false;
    }

    return false;
  }

  recordAttempt(identifier: string, success: boolean): { blocked: boolean; remainingAttempts: number; blockedUntil?: number } {
    const now = Date.now();
    const record = this.attempts.get(identifier) || { count: 0, lastAttempt: now };

    // Reset counter if window has expired
    if (now - record.lastAttempt > this.windowMs) {
      record.count = 0;
    }

    if (success) {
      // Clear attempts on success
      this.attempts.delete(identifier);
      return { blocked: false, remainingAttempts: this.maxAttempts };
    }

    // Increment failed attempts
    record.count++;
    record.lastAttempt = now;

    if (record.count >= this.maxAttempts) {
      record.blockedUntil = now + this.blockDurationMs;
      this.attempts.set(identifier, record);
      return { 
        blocked: true, 
        remainingAttempts: 0, 
        blockedUntil: record.blockedUntil 
      };
    }

    this.attempts.set(identifier, record);
    return { 
      blocked: false, 
      remainingAttempts: this.maxAttempts - record.count 
    };
  }

  getRemainingAttempts(identifier: string): number {
    const record = this.attempts.get(identifier);
    if (!record) return this.maxAttempts;
    
    const now = Date.now();
    if (now - record.lastAttempt > this.windowMs) {
      return this.maxAttempts;
    }

    return Math.max(0, this.maxAttempts - record.count);
  }

  getBlockedUntil(identifier: string): number | null {
    const record = this.attempts.get(identifier);
    return record?.blockedUntil || null;
  }
}

export const authRateLimiter = new AuthRateLimiter();

// Password strength validation
export interface PasswordValidation {
  isValid: boolean;
  score: number; // 0-4
  feedback: string[];
  requirements: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    special: boolean;
  };
}

export const validatePasswordStrength = (password: string): PasswordValidation => {
  const requirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  };

  const feedback: string[] = [];
  let score = 0;

  if (!requirements.length) {
    feedback.push('La contraseña debe tener al menos 8 caracteres');
  } else {
    score++;
  }

  if (!requirements.uppercase) {
    feedback.push('Incluye al menos una letra mayúscula');
  } else {
    score++;
  }

  if (!requirements.lowercase) {
    feedback.push('Incluye al menos una letra minúscula');
  } else {
    score++;
  }

  if (!requirements.number) {
    feedback.push('Incluye al menos un número');
  } else {
    score++;
  }

  if (!requirements.special) {
    feedback.push('Incluye al menos un carácter especial (!@#$%^&*)');
  } else {
    score++;
  }

  // Additional security checks
  if (password.length < 6) {
    feedback.push('Contraseña demasiado corta');
    score = Math.max(0, score - 2);
  }

  // Common password patterns
  const commonPatterns = [
    /^(password|contraseña|123456|qwerty|admin)/i,
    /^(.)\1{3,}$/, // Repeated characters
    /^(abc|123|qwe)/i
  ];

  if (commonPatterns.some(pattern => pattern.test(password))) {
    feedback.push('Evita contraseñas comunes o patrones simples');
    score = Math.max(0, score - 1);
  }

  const isValid = score >= 3 && password.length >= 8;

  return {
    isValid,
    score,
    feedback,
    requirements
  };
};

// Email validation with additional security checks
export const validateEmail = (email: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push('Formato de email inválido');
  }

  // Length checks
  if (email.length > 254) {
    errors.push('Email demasiado largo');
  }

  // Security: Check for suspicious patterns
  const suspiciousPatterns = [
    /[\u0000-\u001f\u007f-\u009f]/, // Control characters
    /[<>()[\]\\,;:\s@"]/g // Multiple special characters
  ];

  if (suspiciousPatterns.some(pattern => pattern.test(email))) {
    errors.push('Email contiene caracteres no permitidos');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[\u0000-\u001f\u007f-\u009f]/g, '') // Remove control characters
    .replace(/[<>]/g, '') // Remove potential XSS characters
    .slice(0, 500); // Limit length
};

// Security logging for authentication events
export const logSecurityEvent = async (event: {
  type: 'auth_attempt' | 'auth_success' | 'auth_failure' | 'rate_limit' | 'suspicious_activity';
  userId?: string;
  email?: string;
  details?: string;
  metadata?: Record<string, any>;
}) => {
  try {
    // Log to Supabase if user is authenticated or for critical events
    await supabase.from('access_logs').insert({
      action_type: 'security_event',
      user_agent: navigator.userAgent,
      ip_address: 'client', // Client-side, so we can't get real IP
      user_id: event.userId || null,
      page_url: window.location.href,
      session_id: 'security-log',
      device_type: /Mobile/.test(navigator.userAgent) ? 'mobile' : 'desktop',
      browser: navigator.userAgent.split(' ').pop() || 'unknown',
      os: navigator.platform,
      language: navigator.language,
      referer: document.referrer || '',
      additional_data: {
        security_event: event.type,
        details: event.details,
        email: event.email,
        timestamp: new Date().toISOString(),
        ...event.metadata
      }
    });
  } catch (error) {
    console.warn('Failed to log security event:', error);
  }
};

// Secure session validation
export const validateSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      await logSecurityEvent({
        type: 'suspicious_activity',
        details: 'Session validation error',
        metadata: { error: error.message }
      });
      return null;
    }

    // Additional session security checks
    if (session) {
      const now = Date.now() / 1000;
      const expiresAt = session.expires_at;
      
      if (expiresAt && expiresAt < now) {
        await logSecurityEvent({
          type: 'suspicious_activity',
          details: 'Expired session detected',
          userId: session.user?.id
        });
        return null;
      }
    }

    return session;
  } catch (error) {
    await logSecurityEvent({
      type: 'suspicious_activity',
      details: 'Session validation exception',
      metadata: { error: error instanceof Error ? error.message : 'Unknown error' }
    });
    return null;
  }
};

// CSRF protection utility
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Content Security Policy helper for dynamic content
export const sanitizeHTMLContent = (content: string): string => {
  // Basic HTML sanitization - remove script tags and dangerous attributes
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/g, '')
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/data:text\/html/gi, '');
};