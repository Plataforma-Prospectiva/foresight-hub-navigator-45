
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
}

export const SettingsModal = ({ onIconChange }: SettingsModalProps) => {
  const [selectedTool, setSelectedTool] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof availableIcons>("MapPin");

  const handleIconChange = () => {
    if (selectedTool && selectedIcon) {
      onIconChange(selectedTool, selectedIcon);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Configuración</SheetTitle>
          <SheetDescription>
            Personaliza la apariencia y configuración de la plataforma.
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
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

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Otras Configuraciones</h3>
            <div className="space-y-2">
              <Label htmlFor="theme">Tema</Label>
              <Select defaultValue="light">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Claro</SelectItem>
                  <SelectItem value="dark">Oscuro</SelectItem>
                  <SelectItem value="system">Sistema</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
