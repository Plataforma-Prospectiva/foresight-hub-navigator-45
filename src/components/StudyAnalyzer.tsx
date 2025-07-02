
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Target, Clock, Users, Zap } from "lucide-react";
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
    scope: "público" as "público" | "privado" | "mixto",
    estimatedTime: "",
    studyObjective: "",
    timeHorizon: "",
    objectiveComplexity: "media" as "baja" | "media" | "alta",
    availableResources: [] as string[],
    teamExperience: "intermedio" as "principiante" | "intermedio" | "experto",
  });

  const [resourceInput, setResourceInput] = useState("");

  const handleInputChange = (field: keyof typeof formData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addResource = () => {
    if (resourceInput.trim()) {
      setFormData(prev => ({
        ...prev,
        availableResources: [...prev.availableResources, resourceInput.trim()]
      }));
      setResourceInput("");
    }
  };

  const removeResource = (index: number) => {
    setFormData(prev => ({
      ...prev,
      availableResources: prev.availableResources.filter((_, i) => i !== index)
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

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'baja': return 'text-green-600';
      case 'media': return 'text-yellow-600';
      case 'alta': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getScopeColor = (scope: string) => {
    switch (scope) {
      case 'público': return 'text-blue-600';
      case 'privado': return 'text-purple-600';
      case 'mixto': return 'text-indigo-600';
      default: return 'text-gray-600';
    }
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
            Describe tu estudio en detalle y obtén recomendaciones personalizadas de técnicas prospectivas usando IA.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
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

          <div className="space-y-2">
            <Label>Recursos Disponibles</Label>
            <div className="flex gap-2">
              <Input
                value={resourceInput}
                onChange={(e) => setResourceInput(e.target.value)}
                placeholder="Ej: Presupuesto limitado, Acceso a expertos, Datos históricos..."
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addResource())}
              />
              <Button type="button" onClick={addResource}>
                Agregar
              </Button>
            </div>
            {formData.availableResources.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.availableResources.map((resource, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="cursor-pointer"
                    onClick={() => removeResource(index)}
                  >
                    {resource} ×
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <Button 
            onClick={handleAnalyze} 
            disabled={isAnalyzing || !formData.title || !formData.description}
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              Recomendaciones para: {results.title}
            </CardTitle>
            <CardDescription>
              Basado en el análisis de tu estudio, estas son las técnicas más adecuadas.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <div>
                  <div className="font-medium">Ámbito</div>
                  <div className={`text-sm ${getScopeColor(results.scope)}`}>
                    {results.scope}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600" />
                <div>
                  <div className="font-medium">Tiempo</div>
                  <div className="text-sm text-gray-600">{results.estimatedTime}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600" />
                <div>
                  <div className="font-medium">Complejidad</div>
                  <div className={`text-sm ${getComplexityColor(results.objectiveComplexity)}`}>
                    {results.objectiveComplexity}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-green-600" />
                <div>
                  <div className="font-medium">Experiencia</div>
                  <div className="text-sm text-gray-600">{results.teamExperience}</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Técnicas Recomendadas ({getRecommendedTechniques(results).length})
              </h3>
              <div className="space-y-4">
                {getRecommendedTechniques(results).map((technique, index) => (
                  <div key={technique.id} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        #{index + 1} Recomendada
                      </Badge>
                      <Progress value={(5 - index) * 20} className="w-20 h-2" />
                      <span className="text-xs text-gray-500">
                        {(5 - index) * 20}% compatibilidad
                      </span>
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
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
