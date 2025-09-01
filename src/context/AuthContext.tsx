
import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'beta';
}

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, updates: Partial<User>) => void;
  deleteUser: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Usuarios por defecto
const defaultUsers: User[] = [
  {
    id: '1',
    name: 'Administrador',
    email: 'admin@plataforma.com',
    role: 'admin'
  },
  {
    id: '2',
    name: 'Usuario Beta',
    email: 'beta@plataforma.com',
    role: 'beta'
  }
];

// Contraseñas simuladas (en un app real estarían hasheadas)
const userPasswords: Record<string, string> = {
  'admin@plataforma.com': 'admin123',
  'beta@plataforma.com': 'beta123'
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(defaultUsers);

  const login = (email: string, password: string): boolean => {
    const foundUser = users.find(u => u.email === email);
    if (foundUser && userPasswords[email] === password) {
      setUser(foundUser);
      console.log('Sesión iniciada exitosamente:', foundUser);
      return true;
    }
    console.log('Credenciales incorrectas');
    return false;
  };

  const register = (name: string, email: string, password: string): boolean => {
    if (users.find(u => u.email === email)) {
      console.log('El email ya está registrado');
      return false;
    }

    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role: 'user'
    };

    setUsers(prev => [...prev, newUser]);
    userPasswords[email] = password;
    setUser(newUser);
    console.log('Usuario registrado exitosamente:', newUser);
    return true;
  };

  const logout = () => {
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
