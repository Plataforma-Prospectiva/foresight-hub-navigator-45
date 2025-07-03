import { Card, CardContent } from "@/components/ui/card";
interface ComplexityPyramidProps {
  basicCount: number;
  intermediateCount: number;
  advancedCount: number;
}
export const ComplexityPyramid = ({
  basicCount,
  intermediateCount,
  advancedCount
}: ComplexityPyramidProps) => {
  const total = basicCount + intermediateCount + advancedCount;
  
  if (total === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No hay datos para mostrar
      </div>
    );
  }

  const basicPercent = (basicCount / total) * 100;
  const intermediatePercent = (intermediateCount / total) * 100;
  const advancedPercent = (advancedCount / total) * 100;

  return (
    <Card className="p-4">
      <div className="text-center mb-4">
        <h4 className="font-semibold text-slate-700">Distribución por Complejidad</h4>
      </div>
      
      <div className="flex flex-col items-center space-y-1">
        {/* Nivel Avanzado - Top */}
        {advancedCount > 0 && (
          <div className="flex items-center space-x-2 w-full max-w-[120px]">
            <div 
              className="bg-red-500 text-white text-xs px-2 py-1 rounded text-center flex-1"
              style={{ minHeight: '24px' }}
            >
              {advancedCount} Avanzado
            </div>
          </div>
        )}
        
        {/* Nivel Intermedio - Middle */}
        {intermediateCount > 0 && (
          <div className="flex items-center space-x-2 w-full max-w-[160px]">
            <div 
              className="bg-amber-500 text-white text-xs px-2 py-1 rounded text-center flex-1"
              style={{ minHeight: '24px' }}
            >
              {intermediateCount} Intermedio
            </div>
          </div>
        )}
        
        {/* Nivel Básico - Bottom */}
        {basicCount > 0 && (
          <div className="flex items-center space-x-2 w-full max-w-[200px]">
            <div 
              className="bg-green-500 text-white text-xs px-2 py-1 rounded text-center flex-1"
              style={{ minHeight: '24px' }}
            >
              {basicCount} Básico
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4 text-center text-xs text-muted-foreground">
        Total: {total} técnicas
      </div>
    </Card>
  );
};