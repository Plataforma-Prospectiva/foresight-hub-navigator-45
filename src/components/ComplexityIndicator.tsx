import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ComplexityIndicatorProps {
  complexity: 'básico' | 'intermedio' | 'avanzado';
  interactive?: boolean;
}

export const ComplexityIndicator = ({ complexity, interactive = false }: ComplexityIndicatorProps) => {
  const complexityData = {
    básico: { 
      level: 1, 
      color: 'bg-green-500', 
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
      description: 'Técnica de fácil implementación',
      requirements: ['Conocimientos básicos', 'Recursos mínimos', 'Tiempo limitado'],
      progress: 33
    },
    intermedio: { 
      level: 2, 
      color: 'bg-amber-500', 
      textColor: 'text-amber-700',
      bgColor: 'bg-amber-50',
      description: 'Requiere experiencia moderada',
      requirements: ['Conocimientos especializados', 'Recursos moderados', 'Tiempo considerable'],
      progress: 66
    },
    avanzado: { 
      level: 3, 
      color: 'bg-red-500', 
      textColor: 'text-red-700',
      bgColor: 'bg-red-50',
      description: 'Técnica compleja y especializada',
      requirements: ['Experiencia avanzada', 'Recursos significativos', 'Tiempo extenso'],
      progress: 100
    }
  };

  const data = complexityData[complexity];

  if (!interactive) {
    return (
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${data.color}`} />
        <span className="text-sm font-medium capitalize">{complexity}</span>
      </div>
    );
  }

  return (
    <Card className={`${data.bgColor} border-2 border-opacity-20`}>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className={`${data.textColor} border-current`}>
              Nivel {data.level} - {complexity.charAt(0).toUpperCase() + complexity.slice(1)}
            </Badge>
            <div className="flex gap-1">
              {[1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-full ${
                    level <= data.level ? data.color : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Complejidad</span>
              <span className={data.textColor}>{data.progress}%</span>
            </div>
            <Progress value={data.progress} className="h-2" />
          </div>

          <p className="text-sm text-gray-600">{data.description}</p>
          
          <div className="space-y-1">
            <div className="text-xs font-medium text-gray-700">Requisitos:</div>
            {data.requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                <div className={`w-1.5 h-1.5 rounded-full ${data.color}`} />
                {req}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};