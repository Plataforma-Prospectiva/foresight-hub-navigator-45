import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Brain, ArrowLeft, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { useSupabaseAuth } from "@/context/SupabaseAuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Auth() {
  const { signIn, signUp, user, loading, validatePasswordStrength, isRateLimited, getRemainingAttempts } = useSupabaseAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState<ReturnType<typeof validatePasswordStrength> | null>(null);
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);

  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (password) {
      const validation = validatePasswordStrength(password);
      setPasswordValidation(validation);
    } else {
      setPasswordValidation(null);
    }
  }, [password, validatePasswordStrength]);

  useEffect(() => {
    if (email) {
      setRemainingAttempts(getRemainingAttempts(email));
    }
  }, [email, getRemainingAttempts]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limiting before attempting
    if (isRateLimited(email)) {
      toast.error('Demasiados intentos fallidos. Intenta más tarde.');
      return;
    }

    setIsLoading(true);
    try {
      const result = await signIn(email, password);
      if (result.rateLimited) {
        // Additional UI feedback for rate limiting
        toast.error('Cuenta temporalmente bloqueada por seguridad');
      } else if (result.remainingAttempts !== undefined) {
        setRemainingAttempts(result.remainingAttempts);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limiting before attempting
    if (isRateLimited(email)) {
      toast.error('Demasiados intentos. Intenta más tarde.');
      return;
    }

    // Client-side password validation
    if (passwordValidation && !passwordValidation.isValid) {
      toast.error('La contraseña no cumple con los requisitos de seguridad');
      return;
    }

    setIsLoading(true);
    try {
      const result = await signUp(email, password, displayName);
      if (result.passwordWeak) {
        toast.error('Contraseña demasiado débil. Revisa los requisitos.');
      } else if (result.rateLimited) {
        toast.error('Demasiados intentos de registro. Intenta más tarde.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrengthColor = (score: number) => {
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getPasswordStrengthLabel = (score: number) => {
    if (score <= 1) return "Muy débil";
    if (score <= 2) return "Débil";
    if (score <= 3) return "Aceptable";
    return "Fuerte";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Brain className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Button>

        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg w-fit mx-auto mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold gradient-text">Plataforma Prospectiva</h1>
          <p className="text-muted-foreground mt-2">Accede a tu cuenta para usar todas las funcionalidades</p>
        </div>

        <Card className="shadow-elegant border-0">
          <CardHeader className="text-center">
            <CardTitle>Bienvenido</CardTitle>
            <CardDescription>
              Inicia sesión o crea una nueva cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="signin">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="signup">Registrarse</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  
                    <div className="space-y-2">
                      <Label htmlFor="signin-password">Contraseña</Label>
                      <Input
                        id="signin-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    {/* Rate limiting warning */}
                    {remainingAttempts !== null && remainingAttempts < 3 && (
                      <Alert className="border-orange-200 bg-orange-50">
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                        <AlertDescription className="text-orange-800">
                          Quedan {remainingAttempts} intentos antes del bloqueo temporal por seguridad.
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isLoading || isRateLimited(email)}
                    >
                      {isLoading ? (
                        <>
                          <Shield className="w-4 h-4 mr-2 animate-spin" />
                          Verificando...
                        </>
                      ) : (
                        "Iniciar Sesión"
                      )}
                    </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Nombre</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">
                        Contraseña
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="ml-2 h-auto p-0 text-xs text-blue-600"
                          onClick={() => setShowPasswordRequirements(!showPasswordRequirements)}
                        >
                          Ver requisitos
                        </Button>
                      </Label>
                      <Input
                        id="signup-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className={passwordValidation && !passwordValidation.isValid ? "border-red-300" : ""}
                      />
                      
                      {/* Password strength indicator */}
                      {passwordValidation && password && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Seguridad:</span>
                            <span className={`font-medium ${
                              passwordValidation.isValid ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {getPasswordStrengthLabel(passwordValidation.score)}
                            </span>
                          </div>
                          <Progress 
                            value={(passwordValidation.score / 4) * 100} 
                            className="h-2"
                          />
                        </div>
                      )}

                      {/* Password requirements */}
                      {showPasswordRequirements && (
                        <Alert className="text-xs">
                          <Shield className="h-3 w-3" />
                          <AlertDescription>
                            <div className="space-y-1">
                              <p className="font-medium">Requisitos de contraseña:</p>
                              <div className="grid grid-cols-1 gap-1 text-xs">
                                <div className={`flex items-center gap-1 ${
                                  passwordValidation?.requirements.length ? 'text-green-600' : 'text-gray-500'
                                }`}>
                                  {passwordValidation?.requirements.length ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                                  Al menos 8 caracteres
                                </div>
                                <div className={`flex items-center gap-1 ${
                                  passwordValidation?.requirements.uppercase ? 'text-green-600' : 'text-gray-500'
                                }`}>
                                  {passwordValidation?.requirements.uppercase ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                                  Una letra mayúscula
                                </div>
                                <div className={`flex items-center gap-1 ${
                                  passwordValidation?.requirements.lowercase ? 'text-green-600' : 'text-gray-500'
                                }`}>
                                  {passwordValidation?.requirements.lowercase ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                                  Una letra minúscula
                                </div>
                                <div className={`flex items-center gap-1 ${
                                  passwordValidation?.requirements.number ? 'text-green-600' : 'text-gray-500'
                                }`}>
                                  {passwordValidation?.requirements.number ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                                  Un número
                                </div>
                                <div className={`flex items-center gap-1 ${
                                  passwordValidation?.requirements.special ? 'text-green-600' : 'text-gray-500'
                                }`}>
                                  {passwordValidation?.requirements.special ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                                  Un carácter especial
                                </div>
                              </div>
                            </div>
                          </AlertDescription>
                        </Alert>
                      )}

                      {/* Password feedback */}
                      {passwordValidation && passwordValidation.feedback.length > 0 && (
                        <Alert className="border-red-200 bg-red-50">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                          <AlertDescription className="text-red-800 text-xs">
                            {passwordValidation.feedback.join('. ')}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isLoading || isRateLimited(email) || (passwordValidation && !passwordValidation.isValid)}
                    >
                      {isLoading ? (
                        <>
                          <Shield className="w-4 h-4 mr-2 animate-spin" />
                          Creando cuenta segura...
                        </>
                      ) : (
                        "Crear Cuenta"
                      )}
                    </Button>
                </form>
                  
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-blue-600" />
                      <div>
                        <div className="font-medium text-blue-900">Seguridad mejorada</div>
                        <div className="text-blue-800 text-xs mt-1">
                          • Protección contra ataques de fuerza bruta<br/>
                          • Validación de contraseñas seguras<br/>
                          • El primer usuario registrado será administrador
                        </div>
                      </div>
                    </div>
                  </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}