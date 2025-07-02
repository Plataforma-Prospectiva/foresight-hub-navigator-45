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
import { Brain, Target, Clock, Users, Zap, MapPin, Building, FileText, ArrowDown } from "lucide-react";
import { useTechniques } from "@/context/TechniqueContext";
import { StudyProfile } from "@/types/technique";
import { TechniqueCard } from "./TechniqueCard";

export const StudyAnalyzer = () => {
  const { createStudyProfile, getRecommendedTechniques } = useTechniques();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<StudyProfile | null>(null);
  const [expandedTechnique, setExpandedTechnique] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    country: "",
    stateLevel: "nacional" as "nacional" | "regional" | "local" | "municipal",
    territoryName: "",
    scope: "público" as "público" | "privado" | "mixto",
    estimatedTime: "",
    studyObjective: "",
    timeHorizon: "",
    objectiveComplexity: "media" as "baja" | "media" | "alta",
    availableResources: {
      budget: "medio" as "limitado" | "medio" | "amplio",
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
    teamExperience: "intermedio" as "principiante" | "intermedio" | "experto",
  });

  const [customResource, setCustomResource] = useState("");

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
            <Brain className="w-5 h-5 text-blue-600" />
            Análisis Inteligente de Estudio Prospectivo
          </CardTitle>
          <CardDescription>
            Describe tu estudio en detalle y obtén recomendaciones personalizadas con justificaciones y secuencia de aplicación.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
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
                  <SelectItem value="nacional">Nacional</SelectItem>
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
                  <SelectItem value="público">Público</SelectItem>
                  <SelectItem value="privado">Privado</SelectItem>
                  <SelectItem value="mixto">Mixto</SelectItem>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <Label htmlFor="objectiveComplexity">Complejidad del Objetivo</Label>
              <Select value={formData.objectiveComplexity} onValueChange={(value) => handleInputChange("objectiveComplexity", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="baja">Baja</SelectItem>
                  <SelectItem value="media">Media</SelectItem>
                  <SelectItem value="alta">Alta</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamExperience">Experiencia del Equipo</Label>
              <Select value={formData.teamExperience} onValueChange={(value) => handleInputChange("teamExperience", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="principiante">Principiante</SelectItem>
                  <SelectItem value="intermedio">Intermedio</SelectItem>
                  <SelectItem value="experto">Experto</SelectItem>
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
                  <SelectItem value="limitado">Limitado</SelectItem>
                  <SelectItem value="medio">Medio</SelectItem>
                  <SelectItem value="amplio">Amplio</SelectItem>
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

          {/* Esquema de secuencia */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Secuencia de Aplicación Recomendada
              </CardTitle>
              <CardDescription>
                Orden sugerido para la implementación de las técnicas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4">
                {results.recommendedTechniques
                  .sort((a, b) => a.sequenceOrder - b.sequenceOrder)
                  .map((rec, index) => {
                    const technique = getRecommendedTechniques(results).find(t => t.id === rec.techniqueId);
                    if (!technique) return null;
                    
                    return (
                      <div key={rec.techniqueId} className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full ${getSequenceColor(rec.sequenceOrder)} text-white flex items-center justify-center text-sm font-bold`}>
                          {rec.sequenceOrder}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {technique.name}
                        </Badge>
                        {index < results.recommendedTechniques.length - 1 && (
                          <ArrowDown className="w-4 h-4 text-gray-400 rotate-90" />
                        )}
                      </div>
                    );
                  })}
              </div>
            </CardContent>
          </Card>

          {/* Técnicas recomendadas con justificaciones */}
          <Card>
            <CardHeader>
              <CardTitle>
                Técnicas Recomendadas con Justificación ({getRecommendedTechniques(results).length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {getRecommendedTechniques(results)
                  .sort((a, b) => {
                    const recA = getTechniqueRecommendation(a.id);
                    const recB = getTechniqueRecommendation(b.id);
                    return (recA?.sequenceOrder || 0) - (recB?.sequenceOrder || 0);
                  })
                  .map((technique) => {
                    const recommendation = getTechniqueRecommendation(technique.id);
                    if (!recommendation) return null;
                    
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
