
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";

export const DocumentationModal = () => {
  const docSections = [
    {
      title: "Introducción",
      description: "Aprende los conceptos básicos de la prospectiva estratégica",
      content: "La prospectiva es una disciplina que analiza futuros posibles y probables para ayudar en la toma de decisiones estratégicas."
    },
    {
      title: "Análisis Inteligente",
      description: "Metodología del algoritmo heurístico de recomendación",
      content: "Sistema de puntuación basado en reglas que evalúa complejidad del proyecto, experiencia del equipo, alcance y recursos disponibles para recomendar técnicas prospectivas optimizadas."
    },
    {
      title: "Secuencias Metodológicas", 
      description: "Ordenamiento lógico de técnicas prospectivas",
      content: "Las técnicas se organizan en 4 fases: 1) Exploratorias (mapeo inicial), 2) Estructurales (análisis de factores), 3) Participativas (consulta a stakeholders), 4) Validación (refinamiento de escenarios)."
    },
    {
      title: "Herramientas de Mapeo",
      description: "Guía para usar las herramientas de mapeo de tendencias",
      content: "Utiliza estas herramientas para visualizar conexiones entre factores de cambio y identificar señales débiles."
    },
    {
      title: "Desarrollo de Escenarios",
      description: "Metodología para crear escenarios futuros coherentes",
      content: "Los escenarios son narrativas coherentes sobre futuros posibles que ayudan a explorar incertidumbres."
    },
    {
      title: "Metodología Delphi",
      description: "Consulta estructurada a expertos",
      content: "El método Delphi facilita el consenso mediante rondas iterativas de consulta a expertos."
    }
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-slate-600 hover:text-blue-600 transition-colors">
          Documentación
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[600px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Documentación
          </SheetTitle>
          <SheetDescription>
            Guías y recursos para usar efectivamente la Plataforma Prospectiva.
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {docSections.map((section, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">{section.content}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Documentación Completa
                </Button>
              </CardContent>
            </Card>
          ))}
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">¿Necesitas ayuda?</CardTitle>
              <CardDescription className="text-blue-600">
                Contacta con nuestro equipo de soporte para asistencia personalizada.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Contactar Soporte
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};
