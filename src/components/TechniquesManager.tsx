import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, BookOpen, Brain, Plus, Settings } from "lucide-react";
import { useTechniques } from "@/context/TechniqueContext";
import { TechniqueCard } from "./TechniqueCard";
import { StudyAnalyzer } from "./StudyAnalyzer";
import { ComplexityPyramid } from "./ComplexityPyramid";
export const TechniquesManager = () => {
  const {
    techniques
  } = useTechniques();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedComplexity, setSelectedComplexity] = useState("all");
  const [expandedTechnique, setExpandedTechnique] = useState<string | null>(null);
  const categories = ["all", ...Array.from(new Set(techniques.map(t => t.category)))];
  const complexities = ["all", "básico", "intermedio", "avanzado"];
  const filteredTechniques = techniques.filter(technique => {
    const matchesSearch = technique.name.toLowerCase().includes(searchTerm.toLowerCase()) || technique.description.toLowerCase().includes(searchTerm.toLowerCase()) || technique.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || technique.category === selectedCategory;
    const matchesComplexity = selectedComplexity === "all" || technique.complexity === selectedComplexity;
    return matchesSearch && matchesCategory && matchesComplexity;
  });
  const getComplexityStats = () => {
    const stats = {
      básico: 0,
      intermedio: 0,
      avanzado: 0
    };
    techniques.forEach(t => stats[t.complexity]++);
    return stats;
  };
  const stats = getComplexityStats();
  const scrollToSettings = () => {
    // Buscar el botón de configuración en el header y hacer click
    const settingsButton = document.querySelector('[data-settings-button]') as HTMLButtonElement;
    if (settingsButton) {
      settingsButton.click();
    }
  };
  return <div className="space-y-6">
      {/* Header con estadísticas */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Base de Datos de Técnicas Prospectivas
              </CardTitle>
              <CardDescription>
                Gestiona y explora metodologías para estudios de prospectiva estratégica
              </CardDescription>
            </div>
            
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Resumen General</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{techniques.length}</div>
                  <div className="text-sm text-gray-600">Total Técnicas</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">{categories.length - 1}</div>
                  <div className="text-sm text-gray-600">Categorías</div>
                </div>
              </div>
            </div>
            <ComplexityPyramid basicCount={stats.básico} intermediateCount={stats.intermedio} advancedCount={stats.avanzado} />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="browse" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="browse" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Explorar Técnicas
          </TabsTrigger>
          <TabsTrigger value="analyze" className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Análisis Inteligente
          </TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          {/* Filtros y búsqueda */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filtros y Búsqueda
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Buscar</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Buscar técnicas..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Categoría</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => <SelectItem key={category} value={category}>
                          {category === "all" ? "Todas las categorías" : category}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Complejidad</label>
                  <Select value={selectedComplexity} onValueChange={setSelectedComplexity}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {complexities.map(complexity => <SelectItem key={complexity} value={complexity}>
                          {complexity === "all" ? "Todas las complejidades" : complexity}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Resultados</label>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{filteredTechniques.length} técnicas</Badge>
                    {(searchTerm || selectedCategory !== "all" || selectedComplexity !== "all") && <Button variant="ghost" size="sm" onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedComplexity("all");
                  }}>
                        Limpiar
                      </Button>}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de técnicas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTechniques.map(technique => <TechniqueCard key={technique.id} technique={technique} isExpanded={expandedTechnique === technique.id} onToggleExpand={() => setExpandedTechnique(prev => prev === technique.id ? null : technique.id)} />)}
          </div>

          {filteredTechniques.length === 0 && <Card>
              <CardContent className="text-center py-8">
                <div className="text-gray-500 mb-4">
                  No se encontraron técnicas que coincidan con los filtros aplicados.
                </div>
                <Button variant="outline" onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
              setSelectedComplexity("all");
            }}>
                  Limpiar filtros
                </Button>
              </CardContent>
            </Card>}
        </TabsContent>

        <TabsContent value="analyze">
          <StudyAnalyzer />
        </TabsContent>
      </Tabs>
    </div>;
};