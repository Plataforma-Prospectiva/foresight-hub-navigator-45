import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Clock, Users, FileText, ExternalLink } from "lucide-react";
import { StudyProfile } from "@/types/technique";

interface SimilarCase {
  id: string;
  title: string;
  description: string;
  country: string;
  scope: 'public' | 'private' | 'mixed';
  stateLevel: 'national' | 'regional' | 'local' | 'municipal';
  territoryName?: string;
  timeHorizon: string;
  estimatedTime: string;
  objectiveComplexity: 'low' | 'medium' | 'high';
  teamExperience: 'beginner' | 'intermediate' | 'expert';
  usedTechniques: string[];
  results: string;
  lessons: string[];
  similarity: number; // 0-1 score
}

interface SimilarCasesProps {
  profile: StudyProfile;
}

// Mock data - in a real application, this would come from a database or API
const generateSimilarCases = (profile: StudyProfile): SimilarCase[] => {
  const similarCases: SimilarCase[] = [
    {
      id: "case-1",
      title: "Plan Nacional de Movilidad Sostenible Portugal 2030",
      description: "Desarrollo de estrategia nacional para transformar el sistema de transporte portugués hacia la sostenibilidad, integrando tecnologías emergentes y participación ciudadana.",
      country: "Portugal",
      scope: "public",
      stateLevel: "national",
      timeHorizon: "2025-2030",
      estimatedTime: "10 meses",
      objectiveComplexity: "high",
      teamExperience: "expert",
      usedTechniques: ["Environmental Scanning", "Análisis de Tendencias", "Construcción de Escenarios", "Método Delphi"],
      results: "Plan estratégico adoptado por el Consejo de Ministros, con inversión aprobada de €2.3B para implementación de infraestructura de movilidad eléctrica y sistemas de transporte inteligente.",
      lessons: [
        "La participación temprana de municipios fue clave para el éxito", 
        "Los escenarios climáticos extremos requirieron revisión de infraestructura", 
        "La resistencia inicial del sector privado se superó con incentivos fiscales"
      ],
      similarity: 0.92
    },
    {
      id: "case-2",
      title: "Futuro del Transporte Urbano - Medellín 2035",
      description: "Estudio prospectivo para rediseñar el sistema de movilidad de Medellín, enfocado en reducción de emisiones y mejora de la conectividad entre comunas.",
      country: "Colombia",
      scope: "public",
      stateLevel: "municipal",
      territoryName: "Área Metropolitana de Medellín",
      timeHorizon: "2025-2035",
      estimatedTime: "7 meses",
      objectiveComplexity: "high",
      teamExperience: "intermediate",
      usedTechniques: ["Mapeo de Stakeholders", "Análisis de Fuerzas Motrices", "Talleres de Futuro", "Backcasting"],
      results: "Implementación del Plan Maestro de Movilidad con 15 proyectos prioritarios. Reducción del 25% en tiempos de viaje y 30% en emisiones proyectadas para 2030.",
      lessons: [
        "Los talleres ciudadanos generaron 80% de las propuestas implementadas",
        "La integración con el sistema de cable aéreo fue factor diferenciador",
        "El análisis de género en movilidad reveló brechas importantes"
      ],
      similarity: 0.88
    },
    {
      id: "case-3",
      title: "Estrategia de Movilidad Verde - Ciudad de México 2040",
      description: "Desarrollo de política integral de transporte sustentable para la ZMVM, con enfoque en electromovilidad y reducción de la huella de carbono del sector transporte.",
      country: "México",
      scope: "mixed",
      stateLevel: "regional",
      territoryName: "Zona Metropolitana del Valle de México",
      timeHorizon: "2025-2040",
      estimatedTime: "12 meses",
      objectiveComplexity: "high",
      teamExperience: "expert",
      usedTechniques: ["Systems Mapping", "Cross-Impact Analysis", "Wind Tunneling", "Método Delphi"],
      results: "Programa de Electromovilidad aprobado con meta de 40% de flota eléctrica para 2035. Creación de Fondo Verde de $500M USD para infraestructura de carga.",
      lessons: [
        "La coordinación intermunicipal requirió marcos legales específicos",
        "Los modelos de financiamiento mixto público-privado fueron esenciales",
        "La resistencia social se mitigó con programas de capacitación laboral"
      ],
      similarity: 0.85
    }
  ];

  // Filter and sort by similarity based on profile characteristics
  return similarCases
    .filter(caseItem => {
      // Basic filtering logic - in real app this would be more sophisticated
      return caseItem.objectiveComplexity === profile.objectiveComplexity || 
             caseItem.scope === profile.scope ||
             caseItem.stateLevel === profile.stateLevel;
    })
    .sort((a, b) => b.similarity - a.similarity);
};

export const SimilarCases = ({ profile }: SimilarCasesProps) => {
  const similarCases = generateSimilarCases(profile);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScopeIcon = (scope: string) => {
    switch (scope) {
      case 'public': return <Building className="w-4 h-4" />;
      case 'private': return <Users className="w-4 h-4" />;
      case 'mixed': return <FileText className="w-4 h-4" />;
      default: return <Building className="w-4 h-4" />;
    }
  };

  if (similarCases.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Casos Similares
          </CardTitle>
          <CardDescription>
            No se encontraron casos similares para tu perfil de estudio específico.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Casos Similares Identificados</h3>
        <Badge variant="outline">
          {similarCases.length} casos encontrados
        </Badge>
      </div>
      
      <div className="grid gap-6">
        {similarCases.map((caseItem) => (
          <Card key={caseItem.id} className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-lg">{caseItem.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {caseItem.country}
                      {caseItem.territoryName && ` - ${caseItem.territoryName}`}
                    </div>
                    <div className="flex items-center gap-1">
                      {getScopeIcon(caseItem.scope)}
                      {caseItem.scope}
                    </div>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <Badge className="bg-primary/10 text-primary">
                    {Math.round(caseItem.similarity * 100)}% similar
                  </Badge>
                  <div className="flex gap-2">
                    <Badge variant="outline" className={getComplexityColor(caseItem.objectiveComplexity)}>
                      {caseItem.objectiveComplexity}
                    </Badge>
                    <Badge variant="outline">
                      <Clock className="w-3 h-3 mr-1" />
                      {caseItem.estimatedTime}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{caseItem.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-sm mb-2">Técnicas Utilizadas</h5>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.usedTechniques.map((technique, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {technique}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-sm mb-2">Resultados Obtenidos</h5>
                  <p className="text-sm text-muted-foreground">{caseItem.results}</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-sm mb-2">Lecciones Aprendidas</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {caseItem.lessons.map((lesson, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <div className="text-xs text-muted-foreground">
                  Horizonte: {caseItem.timeHorizon} | Nivel: {caseItem.stateLevel}
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  Ver caso completo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};