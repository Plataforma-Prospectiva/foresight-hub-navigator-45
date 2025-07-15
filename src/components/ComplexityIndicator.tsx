import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ComplexityIndicatorProps {
  complexity: number;
  interactive?: boolean;
}

export const ComplexityIndicator = ({ complexity, interactive = false }: ComplexityIndicatorProps) => {
  const complexityData = {
    1: { 
      level: 1, 
      color: 'bg-green-500', 
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
      description: 'Basic technique, easy to implement',
      requirements: ['Basic knowledge', 'Minimal resources', 'Limited time'],
      progress: 20,
      label: 'Basic'
    },
    2: { 
      level: 2, 
      color: 'bg-lime-500', 
      textColor: 'text-lime-700',
      bgColor: 'bg-lime-50',
      description: 'Easy technique with some requirements',
      requirements: ['Some knowledge', 'Basic resources', 'Short time'],
      progress: 40,
      label: 'Easy'
    },
    3: { 
      level: 3, 
      color: 'bg-amber-500', 
      textColor: 'text-amber-700',
      bgColor: 'bg-amber-50',
      description: 'Requires moderate experience',
      requirements: ['Specialized knowledge', 'Moderate resources', 'Considerable time'],
      progress: 60,
      label: 'Intermediate'
    },
    4: { 
      level: 4, 
      color: 'bg-orange-500', 
      textColor: 'text-orange-700',
      bgColor: 'bg-orange-50',
      description: 'Advanced technique requiring expertise',
      requirements: ['Advanced knowledge', 'Significant resources', 'Extended time'],
      progress: 80,
      label: 'Advanced'
    },
    5: { 
      level: 5, 
      color: 'bg-red-500', 
      textColor: 'text-red-700',
      bgColor: 'bg-red-50',
      description: 'Expert-level technique, highly complex',
      requirements: ['Expert knowledge', 'Extensive resources', 'Long-term commitment'],
      progress: 100,
      label: 'Expert'
    }
  };

  const data = complexityData[complexity as keyof typeof complexityData] || complexityData[1];

  if (!interactive) {
    return (
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${data.color}`} />
        <span className="text-sm font-medium">Level {complexity} - {data.label}</span>
      </div>
    );
  }

  return (
    <Card className={`${data.bgColor} border-2 border-opacity-20`}>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className={`${data.textColor} border-current`}>
              Level {data.level} - {data.label}
            </Badge>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
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
              <span className="font-medium">Complexity</span>
              <span className={data.textColor}>{data.progress}%</span>
            </div>
            <Progress value={data.progress} className="h-2" />
          </div>

          <p className="text-sm text-gray-600">{data.description}</p>
          
          <div className="space-y-1">
            <div className="text-xs font-medium text-gray-700">Requirements:</div>
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