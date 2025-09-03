import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Brain, Key, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";

interface LLMConfigModalProps {
  formData: {
    llmProvider: string;
    customLlmApiKey: string;
  };
  handleInputChange: (field: string, value: any) => void;
}

export const LLMConfigModal = ({ formData, handleInputChange }: LLMConfigModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const llmOptions = [
    {
      id: "mistral",
      name: "Mistral AI",
      description: "Modelo francés especializado en análisis metodológico (Por defecto)",
      status: "available",
      badge: "Incluido",
      badgeVariant: "default" as const,
      features: ["Análisis metodológico", "Secuencias inteligentes", "Justificaciones expertas"]
    },
    {
      id: "openai-gpt4",
      name: "OpenAI GPT-4",
      description: "Modelo de OpenAI más avanzado para razonamiento complejo",
      status: "key_required",
      badge: "Requiere API Key",
      badgeVariant: "secondary" as const,
      features: ["Razonamiento avanzado", "Análisis profundo", "Creatividad metodológica"]
    },
    {
      id: "openai-gpt3.5",
      name: "OpenAI GPT-3.5 Turbo",
      description: "Modelo eficiente de OpenAI para análisis rápido",
      status: "key_required",
      badge: "Requiere API Key",
      badgeVariant: "secondary" as const,
      features: ["Análisis rápido", "Costo eficiente", "Recomendaciones sólidas"]
    },
    {
      id: "claude-sonnet",
      name: "Anthropic Claude Sonnet",
      description: "Claude de Anthropic optimizado para análisis estructurado",
      status: "key_required",
      badge: "Requiere API Key",
      badgeVariant: "secondary" as const,
      features: ["Análisis estructurado", "Precisión metodológica", "Razonamiento lógico"]
    },
    {
      id: "claude-haiku",
      name: "Anthropic Claude Haiku",
      description: "Claude rápido para análisis conciso",
      status: "key_required",
      badge: "Requiere API Key",
      badgeVariant: "secondary" as const,
      features: ["Análisis conciso", "Respuesta rápida", "Eficiencia energética"]
    },
    {
      id: "gemini-pro",
      name: "Google Gemini Pro",
      description: "Modelo multimodal de Google para análisis integral",
      status: "key_required",
      badge: "Requiere API Key",
      badgeVariant: "secondary" as const,
      features: ["Análisis multimodal", "Integración de datos", "Perspectiva holística"]
    },
    {
      id: "llama2",
      name: "Meta Llama 2",
      description: "Modelo open-source de Meta para análisis transparente",
      status: "key_required",
      badge: "Requiere API Key",
      badgeVariant: "secondary" as const,
      features: ["Open source", "Análisis transparente", "Personalizable"]
    },
    {
      id: "perplexity",
      name: "Perplexity AI",
      description: "IA conectada a internet para análisis con información actualizada",
      status: "key_required",
      badge: "Requiere API Key",
      badgeVariant: "secondary" as const,
      features: ["Información actualizada", "Búsqueda en tiempo real", "Análisis contextual"]
    },
    {
      id: "custom",
      name: "Modelo Personalizado",
      description: "Configura tu propio endpoint de IA",
      status: "custom",
      badge: "Personalizado",
      badgeVariant: "outline" as const,
      features: ["Configuración libre", "Control total", "Modelo propio"]
    }
  ];

  const selectedLLM = llmOptions.find(llm => llm.id === formData.llmProvider);
  const requiresApiKey = selectedLLM?.status === "key_required" || selectedLLM?.status === "custom";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Configurar IA ({selectedLLM?.name || "Mistral AI"})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Brain className="w-6 h-6 text-purple-600" />
            Configuración de Modelos de Inteligencia Artificial
          </DialogTitle>
          <DialogDescription>
            Selecciona y configura el modelo de IA para generar las recomendaciones metodológicas más precisas
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 overflow-auto pr-2">
          {/* Modelo actual seleccionado */}
          <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Modelo Actual: {selectedLLM?.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-700 mb-2">{selectedLLM?.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedLLM?.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Badge variant={selectedLLM?.badgeVariant || "default"}>
                  {selectedLLM?.badge}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Selector de modelo */}
          <div className="space-y-2">
            <Label htmlFor="llmProvider" className="text-base font-semibold">Seleccionar Modelo de IA</Label>
            <Select value={formData.llmProvider} onValueChange={(value) => handleInputChange("llmProvider", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {llmOptions.map((llm) => (
                  <SelectItem key={llm.id} value={llm.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{llm.name}</span>
                      {llm.status === "available" && (
                        <Badge variant="default" className="ml-2 text-xs">Incluido</Badge>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Campo para API Key */}
          {requiresApiKey && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-gray-500" />
                <Label htmlFor="customLlmApiKey" className="text-base font-semibold">
                  API Key para {selectedLLM?.name}
                </Label>
              </div>
              <Input
                id="customLlmApiKey"
                type="password"
                value={formData.customLlmApiKey}
                onChange={(e) => handleInputChange("customLlmApiKey", e.target.value)}
                placeholder={`Ingresa tu API Key de ${selectedLLM?.name}...`}
                className="font-mono text-sm"
              />
              <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-amber-800 mb-1">
                    <strong>Información importante:</strong> Tu API Key se almacena de forma segura y cifrada.
                  </p>
                  <p className="text-amber-700 text-xs">
                    Puedes obtener tu API Key desde la página oficial del proveedor.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Grid de opciones disponibles */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Modelos Disponibles</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-60 overflow-y-auto">
              {llmOptions.map((llm) => (
                <Card 
                  key={llm.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.llmProvider === llm.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                  }`}
                  onClick={() => handleInputChange("llmProvider", llm.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{llm.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{llm.description}</p>
                      </div>
                      <Badge variant={llm.badgeVariant} className="text-xs ml-2">
                        {llm.badge}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {llm.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {llm.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{llm.features.length - 2} más
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enlaces útiles */}
          <Card className="bg-gray-50 border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Enlaces Útiles para Obtener API Keys
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline flex items-center gap-1">
                  OpenAI Platform <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline flex items-center gap-1">
                  Anthropic Console <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline flex items-center gap-1">
                  Google AI Studio <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://www.perplexity.ai/settings/api" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline flex items-center gap-1">
                  Perplexity API <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cerrar
            </Button>
            <Button onClick={() => setIsOpen(false)} className="bg-purple-600 hover:bg-purple-700">
              Guardar Configuración
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};