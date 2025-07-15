
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, X, BookOpen } from "lucide-react";
import { useTechniques } from "@/context/TechniqueContext";
import { Technique } from "@/types/technique";

export const AddTechniqueModal = () => {
  const { addTechnique } = useTechniques();
  const [isOpen, setIsOpen] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    timeHorizon: "",
    participants: "",
    complexity: 1 as number,
  });

  const [listFields, setListFields] = useState({
    objectives: [] as string[],
    applications: [] as string[],
    advantages: [] as string[],
    limitations: [] as string[],
  });

  const [methodologySteps, setMethodologySteps] = useState([
    { step: 1, title: "", description: "", duration: "" }
  ]);

  const [bibliographicSources, setBibliographicSources] = useState([
    { type: 'book' as const, title: "", authors: [], year: new Date().getFullYear(), institution: "" }
  ]);

  const [currentInput, setCurrentInput] = useState("");
  const [currentField, setCurrentField] = useState<keyof typeof listFields>("objectives");

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
      name: formData.name,
      icon: BookOpen, // Default icon
      complexity: formData.complexity,
      category: formData.category,
      description: formData.description,
      objectives: listFields.objectives,
      applications: listFields.applications,
      methodology: methodologySteps,
      advantages: listFields.advantages,
      limitations: listFields.limitations,
      timeHorizon: formData.timeHorizon,
      participants: formData.participants,
      bibliographicSources: bibliographicSources.filter(source => source.title.trim() !== ""),
    };

    addTechnique(newTechnique);
    
    // Clear form
    setFormData({
      name: "",
      category: "",
      description: "",
      timeHorizon: "",
      participants: "",
      complexity: 1,
    });
    
    setListFields({
      objectives: [],
      applications: [],
      advantages: [],
      limitations: [],
    });
    
    setMethodologySteps([
      { step: 1, title: "", description: "", duration: "" }
    ]);
    
    setBibliographicSources([
      { type: 'book', title: "", authors: [], year: new Date().getFullYear(), institution: "" }
    ]);
    
    setIsOpen(false);
  };

  const fieldLabels = {
    objectives: "Objectives",
    applications: "Applications",
    advantages: "Advantages",
    limitations: "Limitations"
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Technique
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Prospective Technique</DialogTitle>
          <DialogDescription>
            Complete the information for the new methodological technique.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Technique Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
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
              <Label htmlFor="timeHorizon">Time Horizon</Label>
              <Input
                id="timeHorizon"
                value={formData.timeHorizon}
                onChange={(e) => handleInputChange("timeHorizon", e.target.value)}
                placeholder="e.g., Short-term, Medium-term"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="participants">Participants</Label>
              <Input
                id="participants"
                value={formData.participants}
                onChange={(e) => handleInputChange("participants", e.target.value)}
                placeholder="e.g., 5-10 participants"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="complexity">Complexity (1-5)</Label>
              <Select value={formData.complexity.toString()} onValueChange={(value) => handleInputChange("complexity", parseInt(value) as any)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 - Basic</SelectItem>
                  <SelectItem value="2">2 - Easy</SelectItem>
                  <SelectItem value="3">3 - Intermediate</SelectItem>
                  <SelectItem value="4">4 - Advanced</SelectItem>
                  <SelectItem value="5">5 - Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Lists section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Additional Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Field to add</Label>
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
                <Label>Add element</Label>
                <div className="flex gap-2">
                  <Input
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    placeholder={`Add ${fieldLabels[currentField].toLowerCase()}`}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToList(currentField))}
                  />
                  <Button type="button" onClick={() => addToList(currentField)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Show added elements */}
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
              Cancel
            </Button>
            <Button type="submit">
              Add Technique
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
