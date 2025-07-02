
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
import { useTechniques } from "@/context/TechniqueContext";
import { Technique } from "@/types/technique";

export const AddTechniqueModal = () => {
  const { addTechnique } = useTechniques();
  const [isOpen, setIsOpen] = useState(false);
  
  // Estados del formulario
  const [formData, setFormData] = useState({
    name: "",
    objective: "",
    recommendedUse: "",
    applicationTime: "",
    requiredPeople: "",
    complexity: "básico" as "básico" | "intermedio" | "avanzado",
    category: "",
    description: "",
    methodology: "",
  });

  const [listFields, setListFields] = useState({
    requiredInputs: [] as string[],
    advantages: [] as string[],
    limitations: [] as string[],
    expectedOutputs: [] as string[],
    resources: [] as string[],
    prerequisites: [] as string[],
    examples: [] as string[],
    relatedTechniques: [] as string[],
    references: [] as string[],
  });

  const [currentInput, setCurrentInput] = useState("");
  const [currentField, setCurrentField] = useState<keyof typeof listFields>("requiredInputs");

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addToList = (field: keyof typeof listFields) => {
    if (currentInput.trim()) {
      setListFields(prev => ({
        ...prev,
        [field]: [...prev[field], currentInput.trim()]
      }));
      setCurrentInput("");
    }
  };

  const removeFromList = (field: keyof typeof listFields, index: number) => {
    setListFields(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTechnique: Omit<Technique, 'id'> = {
      ...formData,
      ...listFields,
    };

    addTechnique(newTechnique);
    
    // Limpiar formulario
    setFormData({
      name: "",
      objective: "",
      recommendedUse: "",
      applicationTime: "",
      requiredPeople: "",
      complexity: "básico",
      category: "",
      description: "",
      methodology: "",
    });
    
    setListFields({
      requiredInputs: [],
      advantages: [],
      limitations: [],
      expectedOutputs: [],
      resources: [],
      prerequisites: [],
      examples: [],
      relatedTechniques: [],
      references: [],
    });
    
    setIsOpen(false);
  };

  const fieldLabels = {
    requiredInputs: "Insumos Requeridos",
    advantages: "Ventajas",
    limitations: "Limitaciones",
    expectedOutputs: "Resultados Esperados",
    resources: "Recursos Necesarios",
    prerequisites: "Prerrequisitos",
    examples: "Ejemplos",
    relatedTechniques: "Técnicas Relacionadas",
    references: "Referencias"
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Nueva Técnica
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Agregar Nueva Técnica Prospectiva</DialogTitle>
          <DialogDescription>
            Complete la información de la nueva técnica metodológica.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre de la Técnica</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Categoría</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="objective">Objetivo</Label>
            <Textarea
              id="objective"
              value={formData.objective}
              onChange={(e) => handleInputChange("objective", e.target.value)}
              required
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              required
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="applicationTime">Tiempo de Aplicación</Label>
              <Input
                id="applicationTime"
                value={formData.applicationTime}
                onChange={(e) => handleInputChange("applicationTime", e.target.value)}
                placeholder="ej: 2-4 semanas"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requiredPeople">Personas Requeridas</Label>
              <Input
                id="requiredPeople"
                value={formData.requiredPeople}
                onChange={(e) => handleInputChange("requiredPeople", e.target.value)}
                placeholder="ej: 3-5 personas"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="complexity">Complejidad</Label>
              <Select value={formData.complexity} onValueChange={(value) => handleInputChange("complexity", value)}>
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="recommendedUse">Uso Recomendado</Label>
            <Textarea
              id="recommendedUse"
              value={formData.recommendedUse}
              onChange={(e) => handleInputChange("recommendedUse", e.target.value)}
              required
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="methodology">Metodología</Label>
            <Textarea
              id="methodology"
              value={formData.methodology}
              onChange={(e) => handleInputChange("methodology", e.target.value)}
              required
              rows={3}
            />
          </div>

          {/* Sección para listas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Información Adicional</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Campo a agregar</Label>
                <Select value={currentField} onValueChange={(value) => setCurrentField(value as keyof typeof listFields)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(fieldLabels).map(([key, label]) => (
                      <SelectItem key={key} value={key}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Agregar elemento</Label>
                <div className="flex gap-2">
                  <Input
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    placeholder={`Agregar ${fieldLabels[currentField].toLowerCase()}`}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToList(currentField))}
                  />
                  <Button type="button" onClick={() => addToList(currentField)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Mostrar elementos agregados */}
            {Object.entries(listFields).map(([field, items]) => (
              items.length > 0 && (
                <div key={field} className="space-y-2">
                  <Label>{fieldLabels[field as keyof typeof fieldLabels]}</Label>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {item}
                        <X 
                          className="w-3 h-3 cursor-pointer" 
                          onClick={() => removeFromList(field as keyof typeof listFields, index)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              Agregar Técnica
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
