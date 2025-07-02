
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { User, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export const AuthModal = () => {
  const { user, login, register, logout } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      const success = login(email, password);
      if (!success) {
        setError("Credenciales incorrectas");
      }
    } else {
      if (!name.trim()) {
        setError("El nombre es requerido");
        return;
      }
      const success = register(name, email, password);
      if (!success) {
        setError("El email ya está registrado");
      }
    }

    if (!error) {
      setEmail("");
      setPassword("");
      setName("");
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (user) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm text-slate-600">
          {user.name} {user.role === 'admin' && '(Admin)'}
        </span>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <User className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{isLogin ? "Iniciar Sesión" : "Registrarse"}</SheetTitle>
          <SheetDescription>
            {isLogin 
              ? "Accede a tu cuenta para usar todas las funcionalidades." 
              : "Crea una nueva cuenta para comenzar."}
          </SheetDescription>
        </SheetHeader>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
              {error}
            </div>
          )}

          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre completo"
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            {isLogin ? "Iniciar Sesión" : "Registrarse"}
          </Button>
          
          <Button 
            type="button" 
            variant="ghost" 
            className="w-full"
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
          >
            {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
          </Button>

          {isLogin && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm">
              <strong>Usuario Admin:</strong><br />
              Email: admin@plataforma.com<br />
              Contraseña: admin123
            </div>
          )}
        </form>
      </SheetContent>
    </Sheet>
  );
};
