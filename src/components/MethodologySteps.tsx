import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, PlayCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

interface MethodologyStepsProps {
  methodology: string;
  techniqueId: string;
}

export const MethodologySteps = ({ methodology, techniqueId }: MethodologyStepsProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = methodology.split('→').map(step => step.trim());

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  const toggleStepCompletion = (index: number) => {
    setCompletedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getStepStatus = (index: number) => {
    if (completedSteps.includes(index)) return 'completed';
    if (index === currentStep) return 'current';
    return 'pending';
  };

  const getStepColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500 text-white border-green-500';
      case 'current': return 'bg-blue-500 text-white border-blue-500';
      default: return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <PlayCircle className="w-5 h-5 text-blue-600" />
        <h4 className="font-semibold text-slate-700">Metodología Paso a Paso</h4>
        <Badge variant="outline" className="text-xs">
          {completedSteps.length}/{steps.length} completados
        </Badge>
      </div>

      {/* Vista gráfica interactiva */}
      <div className="grid grid-cols-1 gap-3">
        {steps.map((step, index) => {
          const status = getStepStatus(index);
          return (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                status === 'current' ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
              onClick={() => handleStepClick(index)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div 
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all ${getStepColor(status)}`}
                    >
                      {completedSteps.includes(index) ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`font-medium ${
                      status === 'current' ? 'text-blue-700' : 
                      status === 'completed' ? 'text-green-700' : 'text-gray-700'
                    }`}>
                      Paso {index + 1}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {step}
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant={completedSteps.includes(index) ? "default" : "outline"}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStepCompletion(index);
                    }}
                    className="ml-2"
                  >
                    {completedSteps.includes(index) ? 'Completado' : 'Marcar'}
                  </Button>
                </div>

                {status === 'current' && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="text-sm font-medium text-blue-900 mb-1">
                      Paso Actual en Detalle
                    </div>
                    <div className="text-sm text-blue-800">
                      {step} - Enfócate en esta etapa para avanzar en la implementación de la técnica.
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Barra de progreso general */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progreso General</span>
            <span className="text-sm font-bold text-blue-600">
              {Math.round((completedSteps.length / steps.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
            />
          </div>
          <div className="text-xs text-gray-600 mt-2">
            {completedSteps.length === steps.length 
              ? "¡Metodología completada! 🎉" 
              : `${steps.length - completedSteps.length} pasos restantes`
            }
          </div>
        </CardContent>
      </Card>
    </div>
  );
};