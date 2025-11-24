import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Settings, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface LLMConfig {
  model: string;
  temperature: number;
  maxTokens: number;
}

interface LLMConfigModalProps {
  config: LLMConfig;
  onConfigChange: (config: LLMConfig) => void;
}

export const LLMConfigModal = ({ config, onConfigChange }: LLMConfigModalProps) => {
  const [localConfig, setLocalConfig] = useState(config);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    onConfigChange(localConfig);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings className="w-4 h-4 mr-2" />
          Configurar LLM
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            Configuración del Modelo de IA
          </DialogTitle>
          <DialogDescription>
            Ajusta los parámetros del modelo de lenguaje para el análisis
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="model">Modelo</Label>
            <Select 
              value={localConfig.model} 
              onValueChange={(value) => setLocalConfig({ ...localConfig, model: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google/gemini-2.5-flash">Gemini 2.5 Flash (Rápido)</SelectItem>
                <SelectItem value="google/gemini-2.5-pro">Gemini 2.5 Pro (Avanzado)</SelectItem>
                <SelectItem value="google/gemini-3-pro-preview">Gemini 3 Pro Preview (Experimental)</SelectItem>
                <SelectItem value="openai/gpt-5-mini">GPT-5 Mini (Equilibrado)</SelectItem>
                <SelectItem value="openai/gpt-5">GPT-5 (Potente)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Selecciona el modelo de IA que se usará para el análisis
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="temperature">Temperatura</Label>
              <span className="text-sm text-muted-foreground">{localConfig.temperature.toFixed(2)}</span>
            </div>
            <Slider
              id="temperature"
              min={0}
              max={2}
              step={0.1}
              value={[localConfig.temperature]}
              onValueChange={([value]) => setLocalConfig({ ...localConfig, temperature: value })}
            />
            <p className="text-xs text-muted-foreground">
              Controla la creatividad (0 = preciso, 2 = creativo)
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="maxTokens">Tokens Máximos</Label>
              <span className="text-sm text-muted-foreground">{localConfig.maxTokens}</span>
            </div>
            <Slider
              id="maxTokens"
              min={1000}
              max={8000}
              step={500}
              value={[localConfig.maxTokens]}
              onValueChange={([value]) => setLocalConfig({ ...localConfig, maxTokens: value })}
            />
            <p className="text-xs text-muted-foreground">
              Longitud máxima de la respuesta
            </p>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <div className="text-xs space-y-1">
                <p className="font-medium">Configuración actual:</p>
                <p className="text-muted-foreground">• Modelo: {localConfig.model.split('/')[1]}</p>
                <p className="text-muted-foreground">• Temperatura: {localConfig.temperature}</p>
                <p className="text-muted-foreground">• Tokens máx: {localConfig.maxTokens}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>
            Guardar Configuración
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
