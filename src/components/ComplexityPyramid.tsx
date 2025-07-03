import { Card, CardContent } from "@/components/ui/card";

interface ComplexityPyramidProps {
  basicCount: number;
  intermediateCount: number;
  advancedCount: number;
}

export const ComplexityPyramid = ({ basicCount, intermediateCount, advancedCount }: ComplexityPyramidProps) => {
  const total = basicCount + intermediateCount + advancedCount;
  
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-lg font-semibold text-center mb-4">Distribución por Complejidad</h3>
          
          {/* Nivel Avanzado - Top */}
          <div className="relative w-full max-w-xs">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg flex items-center justify-center py-3 shadow-lg"
              style={{ width: '60%', margin: '0 auto' }}
            >
              <div className="text-center">
                <div className="text-xl font-bold">{advancedCount}</div>
                <div className="text-xs uppercase tracking-wide">Avanzado</div>
              </div>
            </div>
          </div>
          
          {/* Nivel Intermedio - Middle */}
          <div className="relative w-full max-w-xs">
            <div 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white flex items-center justify-center py-3 shadow-lg"
              style={{ width: '80%', margin: '0 auto' }}
            >
              <div className="text-center">
                <div className="text-xl font-bold">{intermediateCount}</div>
                <div className="text-xs uppercase tracking-wide">Intermedio</div>
              </div>
            </div>
          </div>
          
          {/* Nivel Básico - Bottom */}
          <div className="relative w-full max-w-xs">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-b-lg flex items-center justify-center py-3 shadow-lg"
              style={{ width: '100%' }}
            >
              <div className="text-center">
                <div className="text-xl font-bold">{basicCount}</div>
                <div className="text-xs uppercase tracking-wide">Básico</div>
              </div>
            </div>
          </div>
          
          {/* Total */}
          <div className="mt-4 text-center">
            <div className="text-2xl font-bold text-gray-700">{total}</div>
            <div className="text-sm text-gray-500">Total de Técnicas</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};