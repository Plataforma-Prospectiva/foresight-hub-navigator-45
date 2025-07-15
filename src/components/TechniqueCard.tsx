
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { ComplexityIndicator } from './ComplexityIndicator';
import { MethodologySteps } from './MethodologySteps';
import { Technique } from "@/types/technique";
import { Clock, Users, Target, BookOpen, Lightbulb, AlertTriangle, HelpCircle, Brain, ExternalLink, FileText } from "lucide-react";

interface TechniqueCardProps {
  technique: Technique;
  onEdit?: () => void;
  onDelete?: () => void;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  studyContext?: {
    title: string;
    recommendation: {
      techniqueId: string;
      justification: string;
      sequenceOrder: number;
    };
  };
}

const complexityColors = {
  1: '#22c55e',
  2: '#84cc16',
  3: '#f59e0b', 
  4: '#f97316',
  5: '#ef4444'
};

const getComplexityCount = (complexity: number) => {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  counts[complexity] = 1;
  return counts;
};

const getResourcesData = (technique: Technique) => [
  { name: 'Time Horizon', value: technique.timeHorizon.includes('Short') ? 2 : 
    technique.timeHorizon.includes('Medium') ? 5 : 8 },
  { name: 'Participants', value: parseInt(technique.participants) || 5 },
  { name: 'Complexity', value: technique.complexity },
  { name: 'Applications', value: technique.applications.length }
];

export const TechniqueCard = ({ technique, onEdit, onDelete, isExpanded, onToggleExpand, studyContext }: TechniqueCardProps) => {
  return (
    <TooltipProvider>
      <Card className="w-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-xl font-bold text-slate-800">
                  {technique.name}
                </CardTitle>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-4 h-4 text-blue-500 hover:text-blue-700" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-sm">
                      <strong>Técnica Prospectiva:</strong> Esta es una ficha básica informativa que describe 
                      la metodología, recursos y aplicación de la técnica. Para herramientas interactivas 
                      y software especializado, consulta la sección de Herramientas.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            <CardDescription className="text-slate-600 mb-3">
              {technique.objectives.join('. ')}
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                {technique.category}
              </Badge>
              <Badge 
                variant="outline" 
                style={{ backgroundColor: complexityColors[technique.complexity], color: 'white' }}
              >
                Level {technique.complexity}
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
            <span className="text-sm font-medium">Time: {technique.timeHorizon}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium">Participants: {technique.participants}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium">Complexity: Level {technique.complexity}</span>
          </div>
        </div>

        {isExpanded ? (
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
              <TabsTrigger value="resources">Applications</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="bibliography">Sources</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" /> Advantages
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
                    <AlertTriangle className="w-4 h-4" /> Limitations
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
                <h4 className="font-semibold text-slate-700 mb-2">Applications</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  {technique.applications.map((application, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="methodology" className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Interactive Methodology
                </h4>
                <MethodologySteps methodology={technique.methodology} techniqueId={technique.id} />
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Applications in Practice</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  {technique.applications.map((application, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>

              {studyContext && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Brain className="w-4 h-4 text-amber-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-amber-800 mb-1">
                        AI Suggested Application for Your Study
                      </div>
                      <div className="text-sm text-amber-700">
                        For "{studyContext.title}": This technique is recommended in phase {studyContext.recommendation.sequenceOrder} 
                        of the analysis. {studyContext.recommendation.justification}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">Complexity Analysis</h4>
                  <ComplexityIndicator complexity={technique.complexity} interactive={true} />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-3">Resource Analysis</h4>
                  <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={getResourcesData(technique)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" fontSize={12} />
                      <YAxis fontSize={12} />
                      <RechartsTooltip />
                      <Bar dataKey="value" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bibliography" className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Bibliographic Sources
                </h4>
                
                {technique.bibliographicSources && technique.bibliographicSources.length > 0 ? (
                  <div className="space-y-4">
                    {technique.bibliographicSources.map((source, index) => (
                      <Card key={index} className="p-4 bg-slate-50">
                        <div className="space-y-2">
                          <div className="flex items-start justify-between">
                            <Badge variant="outline" className="text-xs">
                              {source.type}
                            </Badge>
                            <span className="text-xs text-slate-500">{source.year}</span>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-slate-800 text-sm mb-1">
                              {source.title}
                            </h5>
                            {source.authors && source.authors.length > 0 && (
                              <p className="text-xs text-slate-600">
                                <strong>Authors:</strong> {source.authors.join(', ')}
                              </p>
                            )}
                            {source.institution && (
                              <p className="text-xs text-slate-600">
                                <strong>Institution:</strong> {source.institution}
                              </p>
                            )}
                          </div>
                          
                          {source.url && (
                            <a 
                              href={source.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              View source
                            </a>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-gray-50 rounded-lg text-center">
                    <p className="text-sm text-gray-600">
                      Bibliographic sources being updated.
                    </p>
                  </div>
                )}
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
            {isExpanded ? 'Show less' : 'Show full details'}
          </Button>
        </div>
      </CardContent>
    </Card>
    </TooltipProvider>
  );
};
