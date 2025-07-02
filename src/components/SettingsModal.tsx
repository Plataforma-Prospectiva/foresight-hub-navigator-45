
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Settings, MapPin, TrendingUp, Users, Brain, Target, Zap, BarChart3, Activity, Lightbulb } from "lucide-react";
import { tools } from "@/data/tools";

const availableIcons = {
  MapPin,
  TrendingUp,
  Users,
  Brain,
  Target,
  Zap,
  BarChart3,
  Activity,
  Lightbulb
};

interface SettingsModalProps {
  onIconChange: (toolId: string, newIcon: keyof typeof availableIcons) => void;
  onAddTool: (newTool: any) => void;
}

export const SettingsModal = ({ onIconChange, onAddTool }: SettingsModalProps) => {
  const [selectedTool, setSelectedTool] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof availableIcons>("MapPin");
  
  // Estados para nueva herramienta
  const [newToolName, setNewToolName] = useState("");
  const [newToolDescription, setNewToolDescription] = useState("");
  const [newToolUrl, setNewToolUrl] = useState("");
  const [newToolCategory, setNewToolCategory] = useState("");
  const [newToolIcon, setNewToolIcon] = useState<keyof typeof availableIcons>("MapPin");
  const [newToolComplexity, setNewToolComplexity] = useState<"básico" | "intermedio" | "avanzado">("básico");
  const [newToolTime, setNewToolTime] = useState("");

  const handleIconChange = () => {
    if (selectedTool && selectedIcon) {
      onIconChange(selectedTool, selectedIcon);
    }
  };

  const handleAddTool = () => {
    if (newToolName && newToolDescription) {
      const newTool = {
        id: newToolName.toLowerCase().replace(/\s+/g, '-'),
        name: newToolName,
        description: newToolDescription,
        icon: availableIcons[newToolIcon],
        url: newToolUrl || "#",
        category: newToolCategory || "mapping",
        status: "active" as const,
        estimatedTime: newToolTime || "30 min",
        complexity: newToolComplexity,
      };
      
      onAddTool(newTool);
      
      // Limpiar formulario
      setNewToolName("");
      setNewToolDescription("");
      setNewToolUrl("");
      setNewToolCategory("");
      setNewToolIcon("MapPin");
      setNewToolComplexity("básico");
      setNewToolTime("");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Configuración</SheetTitle>
          <SheetDescription>
            Personaliza la apariencia y configuración de la plataforma.
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Cambiar Iconos */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Cambiar Iconos de Herramientas</h3>
            
            <div className="space-y-2">
              <Label htmlFor="tool-select">Seleccionar Herramienta</Label>
              <Select value={selectedTool} onValueChange={setSelectedTool}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una herramienta" />
                </SelectTrigger>
                <SelectContent>
                  {tools.map((tool) => (
                    <SelectItem key={tool.id} value={tool.id}>
                      {tool.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="icon-select">Seleccionar Icono</Label>
              <Select value={selectedIcon} onValueChange={(value) => setSelectedIcon(value as keyof typeof availableIcons)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un icono" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(availableIcons).map((iconName) => {
                    const Icon = availableIcons[iconName as keyof typeof availableIcons];
                    return (
                      <SelectItem key={iconName} value={iconName}>
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          {iconName}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleIconChange} className="w-full">
              Cambiar Icono
            </Button>
          </div>

          {/* Agregar Nueva Herramienta */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Agregar Nueva Herramienta</h3>
            
            <div className="space-y-2">
              <Label htmlFor="new-tool-name">Nombre</Label>
              <Input
                id="new-tool-name"
                value={newToolName}
                onChange={(e) => setNewToolName(e.target.value)}
                placeholder="Nombre de la herramienta"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-tool-description">Descripción</Label>
              <Textarea
                id="new-tool-description"
                value={newToolDescription}
                onChange={(e) => setNewToolDescription(e.target.value)}
                placeholder="Descripción detallada de la herramienta"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-tool-url">URL</Label>
              <Input
                id="new-tool-url"
                value={newToolUrl}
                onChange={(e) => setNewToolUrl(e.target.value)}
                placeholder="https://..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-tool-category">Categoría</Label>
              <Select value={newToolCategory} onValueChange={setNewToolCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mapping">Mapeo</SelectItem>
                  <SelectItem value="scenarios">Escenarios</SelectItem>
                  <SelectItem value="consensus">Consenso</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-tool-icon">Icono</Label>
              <Select value={newToolIcon} onValueChange={(value) => setNewToolIcon(value as keyof typeof availableIcons)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un icono" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(availableIcons).map((iconName) => {
                    const Icon = availableIcons[iconName as keyof typeof availableIcons];
                    return (
                      <SelectItem key={iconName} value={iconName}>
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          {iconName}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new-tool-complexity">Complejidad</Label>
                <Select value={newToolComplexity} onValueChange={(value) => setNewToolComplexity(value as any)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="básico">Básico</SelectItem>
                    <SelectItem value="intermedio">Intermedio</SelectItem>
                    <SelectItem value="avanzado">Avanzado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-tool-time">Tiempo Estimado</Label>
                <Input
                  id="new-tool-time"
                  value={newToolTime}
                  onChange={(e) => setNewToolTime(e.target.value)}
                  placeholder="30-45 min"
                />
              </div>
            </div>

            <Button onClick={handleAddTool} className="w-full">
              Agregar Herramienta
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
