import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { 
  Brain, 
  ChevronRight, 
  Users, 
  Target, 
  BarChart3, 
  Lightbulb, 
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";

export const HelpPage = () => {
  const algorithmSteps = [
    {
      step: 1,
      title: "Análisis de Complejidad",
      description: "Evalúa la complejidad del objetivo del estudio",
      factors: ["Objetivos múltiples (+15 pts)", "Alcance amplio (+10 pts)", "Factores de incertidumbre (+5 pts)"]
    },
    {
      step: 2,
      title: "Experiencia del Equipo", 
      description: "Considera la experiencia previa del equipo",
      factors: ["Experiencia alta: técnicas complejas (+20 pts)", "Experiencia media: técnicas intermedias (+10 pts)", "Sin experiencia: técnicas básicas (+15 pts)"]
    },
    {
      step: 3,
      title: "Alcance del Proyecto",
      description: "Analiza el alcance geográfico y temporal",
      factors: ["Alcance público: técnicas participativas (+10 pts)", "Nivel local: talleres más efectivos (+10 pts)", "Proyectos a largo plazo: métodos estructurales"]
    },
    {
      step: 4,
      title: "Recursos Disponibles",
      description: "Evalúa los recursos técnicos y humanos",
      factors: ["Acceso a expertos: técnicas avanzadas (+15 pts)", "Sin expertos: técnicas básicas (+10 pts)", "Recursos limitados: métodos simplificados"]
    }
  ];

  const methodologyFeatures = [
    {
      icon: Brain,
      title: "Análisis Heurístico",
      description: "Sistema de puntuación basado en reglas predefinidas que evalúa múltiples factores del proyecto",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Factores Contextuales",
      description: "Considera experiencia del equipo, recursos disponibles y características del proyecto",
      color: "text-green-600"
    },
    {
      icon: Target,
      title: "Secuenciación Metodológica",
      description: "Ordena las técnicas recomendadas según su tipo y complejidad para un flujo lógico",
      color: "text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Puntuación Adaptativa",
      description: "Asigna puntuaciones dinámicas basadas en la compatibilidad con el perfil del estudio",
      color: "text-orange-600"
    }
  ];

  const sequenceTypes = [
    { order: 1, category: "Exploratorias", description: "Técnicas para exploración inicial y mapeo de tendencias" },
    { order: 2, category: "Estructurales", description: "Métodos para análisis estructural y de factores clave" },
    { order: 3, category: "Participativas", description: "Técnicas que involucran stakeholders y expertos" },
    { order: 4, category: "Validación", description: "Métodos para validar y refinar escenarios" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
                    <Home className="w-4 h-4" />
                    Inicio
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary-foreground">Ayuda</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-5xl font-bold mb-4">Centro de Ayuda</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Guía completa sobre la metodología de análisis inteligente y secuencias metodológicas
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Metodología de Análisis Inteligente */}
        <section className="mb-16">
          <Card className="mb-8 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Brain className="w-8 h-8 text-primary" />
                Metodología de Análisis Inteligente
              </CardTitle>
              <CardDescription className="text-lg">
                Sistema heurístico para la recomendación automática de técnicas prospectivas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/50 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">
                  ¿Qué es el Algoritmo Heurístico?
                </h3>
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                  Nuestro sistema utiliza un algoritmo heurístico basado en reglas predefinidas que evalúa las características 
                  de tu proyecto prospectivo y recomienda las técnicas más adecuadas. No utiliza inteligencia artificial 
                  externa, sino un sistema de puntuación interno que analiza múltiples factores contextuales.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {methodologyFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card key={index} className="hover-lift">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-secondary/50`}>
                            <IconComponent className={`w-6 h-6 ${feature.color}`} />
                          </div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Proceso de Evaluación */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Proceso de Evaluación</h2>
          <div className="grid gap-6">
            {algorithmSteps.map((step, index) => (
              <Card key={index} className="hover-lift shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {step.factors.map((factor, factorIndex) => (
                      <Badge key={factorIndex} variant="secondary" className="text-xs">
                        {factor}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Secuenciación Metodológica */}
        <section className="mb-16">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <ArrowRight className="w-8 h-8 text-primary" />
                Secuenciación Metodológica
              </CardTitle>
              <CardDescription className="text-lg">
                Orden lógico de aplicación de técnicas prospectivas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 dark:bg-green-950/50 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-200">
                  Flujo Metodológico Recomendado
                </h3>
                <p className="text-green-700 dark:text-green-300 leading-relaxed mb-4">
                  El sistema organiza automáticamente las técnicas recomendadas en una secuencia lógica 
                  que optimiza el proceso de análisis prospectivo.
                </p>
              </div>

              <div className="space-y-4">
                {sequenceTypes.map((seq, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                      {seq.order}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{seq.category}</h4>
                      <p className="text-muted-foreground text-sm">{seq.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Limitaciones y Alcances */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                  <AlertCircle className="w-5 h-5" />
                  Limitaciones Actuales
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 dark:text-amber-300 space-y-2 text-sm">
                <p>• No utiliza IA externa (GPT, Claude, etc.)</p>
                <p>• Justificaciones predefinidas y limitadas</p>
                <p>• Análisis basado en reglas fijas</p>
                <p>• Sin aprendizaje automático</p>
                <p>• Recomendaciones no personalizadas</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50 dark:bg-green-950/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                  <CheckCircle className="w-5 h-5" />
                  Fortalezas del Sistema
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-700 dark:text-green-300 space-y-2 text-sm">
                <p>• Evaluación rápida y consistente</p>
                <p>• Secuenciación metodológica lógica</p>
                <p>• Análisis multifactorial objetivo</p>
                <p>• Recomendaciones fundamentadas</p>
                <p>• Sin dependencia de servicios externos</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interpretación de Resultados */}
        <section>
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Lightbulb className="w-8 h-8 text-primary" />
                Interpretación de Resultados
              </CardTitle>
              <CardDescription className="text-lg">
                Cómo entender y utilizar las recomendaciones del sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-purple-50 dark:bg-purple-950/50 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">
                  Guía de Interpretación
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                    <div>
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">Puntuación de Compatibilidad</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">Mayor puntuación indica mejor ajuste a las características de tu proyecto</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                    <div>
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">Justificación Contextual</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">Explica por qué la técnica es recomendada para tu caso específico</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                    <div>
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">Orden de Secuencia</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">Indica el momento óptimo para aplicar cada técnica en el proceso</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};