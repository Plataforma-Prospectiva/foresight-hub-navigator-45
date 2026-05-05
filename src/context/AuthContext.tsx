
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, updates: Partial<User>) => void;
  deleteUser: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const loadUser = async (id: string, email?: string | null) => {
    const [{ data: profile }, { data: roles }] = await Promise.all([
      supabase.from('profiles').select('display_name').eq('id', id).maybeSingle(),
      supabase.from('user_roles').select('role').eq('user_id', id),
    ]);

    const role = roles?.some(item => item.role === 'admin') ? 'admin' : 'user';
    const resolvedUser: User = {
      id,
      email: email || '',
      name: profile?.display_name || email?.split('@')[0] || 'Usuario',
      role,
    };

    setUser(resolvedUser);
    setUsers(prev => prev.some(item => item.id === id) ? prev.map(item => item.id === id ? resolvedUser : item) : [resolvedUser, ...prev]);
    return resolvedUser;
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        void loadUser(session.user.id, session.user.email);
      } else {
        setUser(null);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        void loadUser(session.user.id, session.user.email);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) {
      console.log('Credenciales incorrectas', error?.message);
      return false;
    }

    await loadUser(data.user.id, data.user.email);
    console.log('Sesión iniciada exitosamente:', data.user.email);
    return true;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: name },
        emailRedirectTo: window.location.origin,
      },
    });

    if (error) {
      console.log('Error registrando usuario:', error.message);
      return false;
    }

    if (data.user) await loadUser(data.user.id, data.user.email);
    return true;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    console.log('Sesión cerrada');
  };

  const addUser = (userData: Omit<User, 'id'>) => {
    const newUser: User = {
      ...userData,
      id: Date.now().toString()
    };
    setUsers(prev => [...prev, newUser]);
  };

  const updateUser = (id: string, updates: Partial<User>) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, ...updates } : u));
    if (user?.id === id) {
      setUser(prev => prev ? { ...prev, ...updates } : null);
    }
  };

  const deleteUser = (id: string) => {
    if (user?.id === id) return; // No se puede eliminar a sí mismo
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <AuthContext.Provider value={{
      user,
      users,
      login,
      register,
      logout,
      addUser,
      updateUser,
      deleteUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
