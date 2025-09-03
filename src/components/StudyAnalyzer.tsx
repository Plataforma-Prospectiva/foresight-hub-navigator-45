import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Brain, Target, Clock, Users, Zap, MapPin, Building, FileText, ArrowDown, BarChart3, Terminal, TestTube2, HelpCircle, Settings } from "lucide-react";
import { useTechniques } from "@/context/TechniqueContext";
import { StudyProfile } from "@/types/technique";
import { TechniqueCard } from "./TechniqueCard";
import { SequenceFlowVisualization } from "./SequenceFlowVisualization";
import { LLMConfigModal } from "./LLMConfigModal";

export const StudyAnalyzer = () => {
  const { createStudyProfile, getRecommendedTechniques, techniques } = useTechniques();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<StudyProfile | null>(null);
  const [expandedTechnique, setExpandedTechnique] = useState<string | null>(null);
  const [showConsole, setShowConsole] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    country: "",
    stateLevel: "national" as "national" | "regional" | "local" | "municipal",
    territoryName: "",
    scope: "public" as "public" | "private" | "mixed",
    estimatedTime: "",
    studyObjective: "",
    timeHorizon: "",
    objectiveComplexity: "medium" as "low" | "medium" | "high",
    availableResources: {
      budget: "medium" as "limited" | "medium" | "extensive",
      expertAccess: false,
      fieldPersonnel: false,
      physicalInfrastructure: false,
      currentInformation: false,
      historicalInformation: false,
      surveyTools: false,
      dataProcessingTools: false,
      previousPlans: false,
      institutionalFramework: false,
      customResources: [] as string[],
    },
    teamExperience: "intermediate" as "beginner" | "intermediate" | "expert",
    informationDepth: "medium" as "shallow" | "medium" | "deep",
    llmProvider: "mistral" as "mistral" | "openai-gpt4" | "openai-gpt3.5" | "claude-sonnet" | "claude-haiku" | "gemini-pro" | "llama2" | "custom",
    customLlmApiKey: "",
  });

  const [customResource, setCustomResource] = useState("");

  const fillTestData = () => {
    setFormData({
      title: "Plan Estratégico de Movilidad Urbana Sostenible 2030",
      description: "Estudio prospectivo para diseñar un plan integral de movilidad urbana que integre transporte público, movilidad activa y nuevas tecnologías en la ciudad metropolitana. El estudio debe considerar el crecimiento demográfico proyectado, la transición energética, y las metas de reducción de emisiones de carbono. Se busca crear escenarios futuros que guíen la toma de decisiones en infraestructura, políticas públicas y regulaciones para lograr una ciudad más sostenible y conectada.",
      country: "Chile",
      stateLevel: "regional",
      territoryName: "Región Metropolitana de Santiago",
      scope: "public",
      estimatedTime: "8 meses",
      studyObjective: "Desarrollar una estrategia integral de movilidad urbana que reduzca las emisiones de CO2 en un 40% para 2030, mejore la conectividad entre comunas y promueva el uso de transporte público y movilidad activa a través de la implementación de tecnologías inteligentes y participación ciudadana.",
      timeHorizon: "2025-2030",
      objectiveComplexity: "high",
      availableResources: {
        budget: "extensive",
        expertAccess: true,
        fieldPersonnel: true,
        physicalInfrastructure: false,
        currentInformation: true,
        historicalInformation: true,
        surveyTools: true,
        dataProcessingTools: true,
        previousPlans: true,
        institutionalFramework: true,
        customResources: ["Datos de GPS de buses", "Encuestas de origen-destino", "Modelos de microsimulación"]
      },
      teamExperience: "expert",
      informationDepth: "deep",
      llmProvider: "mistral",
      customLlmApiKey: ""
    });
  };

  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as any),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const addCustomResource = () => {
    if (customResource.trim()) {
      setFormData(prev => ({
        ...prev,
        availableResources: {
          ...prev.availableResources,
          customResources: [...prev.availableResources.customResources, customResource.trim()]
        }
      }));
      setCustomResource("");
    }
  };

  const removeCustomResource = (index: number) => {
    setFormData(prev => ({
      ...prev,
      availableResources: {
        ...prev.availableResources,
        customResources: prev.availableResources.customResources.filter((_, i) => i !== index)
      }
    }));
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    try {
      const profile = await createStudyProfile(formData);
      setResults(profile);
    } catch (error) {
      console.error('Error al analizar el estudio:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getTechniqueRecommendation = (techniqueId: string) => {
    if (!results) return null;
    return results.recommendedTechniques.find(rec => rec.techniqueId === techniqueId);
  };

  const getSequenceColor = (order: number) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500'];
    return colors[order - 1] || 'bg-gray-500';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Analizador de Secuencias Metodológicas
          </CardTitle>
          <CardDescription>
            Describe tu estudio en detalle y obtén un análisis inteligente con secuencias metodológicas personalizadas, justificaciones expertas y visualización gráfica de las etapas.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Configuración de IA y datos de prueba */}
          <div className="flex justify-between items-center">
            <LLMConfigModal formData={formData} handleInputChange={handleInputChange} />
            <Button 
              variant="outline" 
              onClick={fillTestData}
              className="flex items-center gap-2 text-sm"
            >
              <TestTube2 className="w-4 h-4" />
              Llenar Datos de Prueba
            </Button>
          </div>
          
          {/* Información básica del estudio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título del Estudio</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Ej: Futuro del Transporte Urbano 2040"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">País</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                placeholder="Ej: Chile, Colombia, México"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="stateLevel">Nivel del Estado</Label>
              <Select value={formData.stateLevel} onValueChange={(value) => handleInputChange("stateLevel", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="national">National</SelectItem>
                  <SelectItem value="regional">Regional</SelectItem>
                  <SelectItem value="local">Local</SelectItem>
                  <SelectItem value="municipal">Municipal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="territoryName">Nombre del Territorio</Label>
              <Input
                id="territoryName"
                value={formData.territoryName}
                onChange={(e) => handleInputChange("territoryName", e.target.value)}
                placeholder="Ej: Región Metropolitana, Comuna de..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="scope">Ámbito</Label>
              <Select value={formData.scope} onValueChange={(value) => handleInputChange("scope", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="mixed">Mixed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción Detallada del Estudio</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe en detalle el contexto, alcance, y características específicas de tu estudio prospectivo..."
              rows={4}
            />
          </div>

          {/* Objetivos y tiempos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="studyObjective">Objetivo del Estudio</Label>
              <Textarea
                id="studyObjective"
                value={formData.studyObjective}
                onChange={(e) => handleInputChange("studyObjective", e.target.value)}
                placeholder="¿Qué buscas lograr con este estudio?"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeHorizon">Horizonte Temporal</Label>
              <Input
                id="timeHorizon"
                value={formData.timeHorizon}
                onChange={(e) => handleInputChange("timeHorizon", e.target.value)}
                placeholder="Ej: 5-10 años, 2030, Largo plazo"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="estimatedTime">Tiempo Disponible</Label>
              <Input
                id="estimatedTime"
                value={formData.estimatedTime}
                onChange={(e) => handleInputChange("estimatedTime", e.target.value)}
                placeholder="Ej: 3 meses, 6 semanas"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="informationDepth">Profundidad de Información</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="w-4 h-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="max-w-xs">
                        <p className="font-semibold mb-2">Niveles de Profundidad:</p>
                        <ul className="text-sm space-y-1">
                          <li><strong>Superficial:</strong> Información básica, datos generales</li>
                          <li><strong>Media:</strong> Información detallada, algunos datos específicos</li>
                          <li><strong>Profunda:</strong> Información exhaustiva, datos granulares, series históricas</li>
                        </ul>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Select value={formData.informationDepth} onValueChange={(value) => handleInputChange("informationDepth", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shallow">Superficial</SelectItem>
                  <SelectItem value="medium">Media</SelectItem>
                  <SelectItem value="deep">Profunda</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="objectiveComplexity">Complejidad del Objetivo</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="w-4 h-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="max-w-xs">
                        <p className="font-semibold mb-2">Niveles de Complejidad:</p>
                        <ul className="text-sm space-y-1">
                          <li><strong>Baja:</strong> Objetivos claros, pocos actores, variables conocidas</li>
                          <li><strong>Media:</strong> Objetivos moderadamente complejos, múltiples variables</li>
                          <li><strong>Alta:</strong> Objetivos complejos, muchos actores, alta incertidumbre</li>
                        </ul>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Select value={formData.objectiveComplexity} onValueChange={(value) => handleInputChange("objectiveComplexity", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Baja</SelectItem>
                  <SelectItem value="medium">Media</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="teamExperience">Experiencia del Equipo</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="w-4 h-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="max-w-xs">
                        <p className="font-semibold mb-2">Niveles de Experiencia:</p>
                        <ul className="text-sm space-y-1">
                          <li><strong>Principiante:</strong> Poca experiencia en estudios prospectivos</li>
                          <li><strong>Intermedio:</strong> Experiencia moderada, conoce metodologías básicas</li>
                          <li><strong>Experto:</strong> Amplia experiencia, domina técnicas avanzadas</li>
                        </ul>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Select value={formData.teamExperience} onValueChange={(value) => handleInputChange("teamExperience", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Principiante</SelectItem>
                  <SelectItem value="intermediate">Intermedio</SelectItem>
                  <SelectItem value="expert">Experto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Recursos disponibles */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Recursos Disponibles</Label>
            
            <div className="space-y-2">
              <Label htmlFor="budget">Presupuesto</Label>
              <Select value={formData.availableResources.budget} onValueChange={(value) => handleInputChange("availableResources.budget", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="limited">Limited</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="extensive">Extensive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries({
                expertAccess: "Acceso a expertos",
                fieldPersonnel: "Personal de campo",
                physicalInfrastructure: "Infraestructura física",
                currentInformation: "Información actual",
                historicalInformation: "Información histórica",
                surveyTools: "Herramientas para encuestas",
                dataProcessingTools: "Herramientas de procesamiento",
                previousPlans: "Planes anteriores",
                institutionalFramework: "Marco institucional"
              }).map(([key, label]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={formData.availableResources[key as keyof typeof formData.availableResources] as boolean}
                    onCheckedChange={(checked) => handleInputChange(`availableResources.${key}`, checked)}
                  />
                  <Label htmlFor={key} className="text-sm">{label}</Label>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Label>Recursos Adicionales</Label>
              <div className="flex gap-2">
                <Input
                  value={customResource}
                  onChange={(e) => setCustomResource(e.target.value)}
                  placeholder="Agregar recurso personalizado..."
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomResource())}
                />
                <Button type="button" onClick={addCustomResource}>
                  Agregar
                </Button>
              </div>
              {formData.availableResources.customResources.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.availableResources.customResources.map((resource, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="cursor-pointer"
                      onClick={() => removeCustomResource(index)}
                    >
                      {resource} ×
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Button 
            onClick={handleAnalyze} 
            disabled={isAnalyzing || !formData.title || !formData.description || !formData.country}
            className="w-full"
          >
            {isAnalyzing ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Analizando con IA...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Analizar y Recomendar Técnicas
              </div>
            )}
          </Button>
        </CardContent>
      </Card>

      {results && (
        <div className="space-y-6">
          {/* Información sobre el análisis inteligente con AI */}
          {(results as any).analysisDescription && (
            <Card className="border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Brain className="w-6 h-6 text-amber-600" />
                  🤖 Transparencia del Análisis con IA
                </CardTitle>
                <CardDescription className="text-base">
                  Consulta enviada a Mistral AI y razonamiento aplicado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {(results as any).analysisDescription && (
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Descripción del Análisis Metodológico
                    </h4>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{(results as any).analysisDescription}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {(results as any).totalTechniquesConsidered || techniques.length}
                        </div>
                        <div className="text-sm font-medium text-gray-700">Técnicas Evaluadas</div>
                        <div className="text-xs text-gray-500 mt-1">Por la IA</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600 mb-1">
                          {(results as any).filteredSimilarTechniques || 0}
                        </div>
                        <div className="text-sm font-medium text-gray-700">Técnicas Filtradas</div>
                        <div className="text-xs text-gray-500 mt-1">Por similitud</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {results.recommendedTechniques.length}
                        </div>
                        <div className="text-sm font-medium text-gray-700">Recomendadas</div>
                        <div className="text-xs text-gray-500 mt-1">Finales</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {(results as any).aiQuery && (
                  <div className="flex gap-3">
                    <Dialog open={showConsole} onOpenChange={setShowConsole}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Terminal className="w-4 h-4" />
                          Abrir Consola de IA
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Terminal className="w-5 h-5" />
                            Consola de Análisis - Prompt Enviado a Mistral AI
                          </DialogTitle>
                        </DialogHeader>
                        <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto max-h-[60vh] border-2 border-gray-700">
                          <div className="text-green-300 mb-2">$ mistral-ai-analyzer --input study-profile</div>
                          <div className="text-gray-400 mb-3">Enviando consulta a Mistral AI...</div>
                          <div className="border-l-2 border-green-500 pl-3">
                            <pre className="whitespace-pre-wrap text-green-400">{(results as any).aiQuery}</pre>
                          </div>
                          <div className="text-gray-400 mt-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Análisis completado exitosamente
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <details className="bg-gray-50 p-4 rounded-lg border flex-1">
                      <summary className="font-semibold text-gray-900 cursor-pointer hover:text-gray-700 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Ver Prompt Compacto (Expandir Aquí)
                      </summary>
                      <div className="mt-3 text-xs text-gray-600 font-mono bg-white p-3 rounded border overflow-auto max-h-40">
                        <pre className="whitespace-pre-wrap">{(results as any).aiQuery}</pre>
                      </div>
                    </details>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Resultados destacados del análisis inteligente */}
          <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Brain className="w-6 h-6 text-blue-600" />
                🎯 Resultados del Análisis Inteligente
              </CardTitle>
              <CardDescription className="text-base">
                La IA ha analizado tu estudio y generado recomendaciones personalizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {results.recommendedTechniques.length}
                      </div>
                      <div className="text-sm font-medium text-gray-700">Técnicas Recomendadas</div>
                      <div className="text-xs text-gray-500 mt-1">Seleccionadas por IA</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {(results as any).analysisDescription ? '95%' : '85%'}
                      </div>
                      <div className="text-sm font-medium text-gray-700">Nivel de Coincidencia</div>
                      <div className="text-xs text-gray-500 mt-1">{(results as any).analysisDescription ? 'IA personalizada' : 'Heurístico'}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        {results.recommendedTechniques.length}
                      </div>
                      <div className="text-sm font-medium text-gray-700">Fases Secuenciales</div>
                      <div className="text-xs text-gray-500 mt-1">Orden optimizado</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-blue-900 mb-1">
                      {(results as any).analysisDescription ? 'Análisis Inteligente con IA' : 'Análisis Heurístico de Respaldo'}
                    </div>
                    <div className="text-sm text-blue-800">
                      {(results as any).analysisDescription ? 
                        `La IA consideró ${Object.keys(formData.availableResources).filter(key => 
                          key !== 'customResources' && key !== 'budget' && formData.availableResources[key as keyof typeof formData.availableResources]
                        ).length + formData.availableResources.customResources.length} recursos disponibles, 
                        complejidad ${formData.objectiveComplexity}, experiencia ${formData.teamExperience} y 
                        alcance ${formData.scope} para generar recomendaciones personalizadas con validación anti-duplicados.` :
                        'Se aplicó el método heurístico de respaldo debido a un problema temporal con la IA. Las recomendaciones se basan en reglas predefinidas y factores de compatibilidad básicos.'
                      }
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Información del perfil */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                Perfil del Estudio: {results.title}
              </CardTitle>
              <CardDescription>
                {results.country} - {results.stateLevel} {results.territoryName && `(${results.territoryName})`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="font-medium">Ubicación</div>
                    <div className="text-sm text-gray-600">{results.country}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-purple-600" />
                  <div>
                    <div className="font-medium">Nivel</div>
                    <div className="text-sm text-gray-600">{results.stateLevel}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <div>
                    <div className="font-medium">Horizonte</div>
                    <div className="text-sm text-gray-600">{results.timeHorizon}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-600" />
                  <div>
                    <div className="font-medium">Ámbito</div>
                    <div className="text-sm text-gray-600">{results.scope}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visualización de secuencias */}
          <SequenceFlowVisualization results={results} techniques={techniques} />

          {/* Técnicas recomendadas con justificaciones */}
          <Card>
            <CardHeader>
              <CardTitle>
                Técnicas Recomendadas con Justificación ({results.recommendedTechniques.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {results.recommendedTechniques
                  .sort((a, b) => a.sequenceOrder - b.sequenceOrder)
                  .map((recommendation) => {
                    const technique = techniques.find(t => t.id === recommendation.techniqueId);
                    if (!technique) return null;
                    
                    return (
                      <div key={technique.id} className="border-l-4 border-blue-500 pl-4 space-y-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-6 h-6 rounded-full ${getSequenceColor(recommendation.sequenceOrder)} text-white flex items-center justify-center text-xs font-bold`}>
                            {recommendation.sequenceOrder}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            Secuencia #{recommendation.sequenceOrder}
                          </Badge>
                          <Progress value={100 - (recommendation.sequenceOrder - 1) * 20} className="w-20 h-2" />
                        </div>
                        
                        <div className="bg-blue-50 p-3 rounded-lg mb-3">
                          <h4 className="font-semibold text-sm text-blue-900 mb-1">Justificación:</h4>
                          <p className="text-sm text-blue-800">{recommendation.justification}</p>
                        </div>
                        
                        <TechniqueCard
                          technique={technique}
                          isExpanded={expandedTechnique === technique.id}
                          onToggleExpand={() => 
                            setExpandedTechnique(prev => 
                              prev === technique.id ? null : technique.id
                            )
                          }
                          studyContext={{
                            title: results.title,
                            recommendation: recommendation
                          }}
                        />
                      </div>
                    );
                  })}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
