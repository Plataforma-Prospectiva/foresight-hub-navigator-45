
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ComplexityPyramid } from './ComplexityPyramid';
import { Technique } from "@/types/technique";
import { Clock, Users, Target, BookOpen, Lightbulb, AlertTriangle } from "lucide-react";

interface TechniqueCardProps {
  technique: Technique;
  onEdit?: () => void;
  onDelete?: () => void;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

const complexityColors = {
  básico: '#22c55e',
  intermedio: '#f59e0b', 
  avanzado: '#ef4444'
};

const getComplexityCount = (complexity: string) => {
  const counts = { básico: 0, intermedio: 0, avanzado: 0 };
  counts[complexity] = 1;
  return counts;
};

const getResourcesData = (technique: Technique) => [
  { name: 'Tiempo', value: technique.applicationTime.includes('semana') ? 
    parseInt(technique.applicationTime) * 7 : parseInt(technique.applicationTime) || 7 },
  { name: 'Personas', value: parseInt(technique.requiredPeople) || 3 },
  { name: 'Recursos', value: technique.resources.length * 2 },
  { name: 'Complejidad', value: technique.complexity === 'básico' ? 2 : 
    technique.complexity === 'intermedio' ? 5 : 8 }
];

export const TechniqueCard = ({ technique, onEdit, onDelete, isExpanded, onToggleExpand }: TechniqueCardProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-slate-800 mb-2">
              {technique.name}
            </CardTitle>
            <CardDescription className="text-slate-600 mb-3">
              {technique.objective}
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                {technique.category}
              </Badge>
              <Badge 
                variant="outline" 
                style={{ backgroundColor: complexityColors[technique.complexity], color: 'white' }}
              >
                {technique.complexity}
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            {onEdit && (
              <Button variant="ghost" size="sm" onClick={onEdit}>
                Editar
              </Button>
            )}
            {onDelete && (
              <Button variant="ghost" size="sm" onClick={onDelete}>
                Eliminar
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium">Tiempo: {technique.applicationTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium">Personas: {technique.requiredPeople}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium">Complejidad: {technique.complexity}</span>
          </div>
        </div>

        {isExpanded ? (
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="methodology">Metodología</TabsTrigger>
              <TabsTrigger value="resources">Recursos</TabsTrigger>
              <TabsTrigger value="analytics">Análisis</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" /> Ventajas
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {technique.advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Limitaciones
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {technique.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Uso Recomendado</h4>
                <p className="text-sm text-slate-600">{technique.recommendedUse}</p>
              </div>
            </TabsContent>

            <TabsContent value="methodology" className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Metodología
                </h4>
                <p className="text-sm text-slate-600 mb-4">{technique.methodology}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Insumos Requeridos</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {technique.requiredInputs.map((input, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {input}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Resultados Esperados</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {technique.expectedOutputs.map((output, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Recursos Necesarios</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {technique.resources.map((resource, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Prerrequisitos</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {technique.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Ejemplos de Aplicación</h4>
                <div className="flex flex-wrap gap-2">
                  {technique.examples.map((example, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">Nivel de Complejidad</h4>
                  <div className="h-[150px] flex items-center justify-center">
                    <ComplexityPyramid 
                      basicCount={getComplexityCount(technique.complexity).básico}
                      intermediateCount={getComplexityCount(technique.complexity).intermedio}
                      advancedCount={getComplexityCount(technique.complexity).avanzado}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">Análisis de Recursos</h4>
                  <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={getResourcesData(technique)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" fontSize={12} />
                      <YAxis fontSize={12} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Técnicas Relacionadas</h4>
                <div className="flex flex-wrap gap-2">
                  {technique.relatedTechniques.map((related, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {related}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-slate-600 line-clamp-2">
              {technique.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {technique.advantages.slice(0, 2).map((advantage, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {advantage}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleExpand}
            className="w-full"
          >
            {isExpanded ? 'Ver menos' : 'Ver detalles completos'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
