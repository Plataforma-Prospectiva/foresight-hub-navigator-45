import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, BookOpen, Brain, Plus, Settings, BookMarked, GitBranch, Database, Loader2, Cloud, HardDrive, Briefcase } from "lucide-react";
import { useTechniques } from "@/context/TechniqueContext";
import { TechniqueCard } from "./TechniqueCard";
import { StudyAnalyzer } from "./StudyAnalyzer";
import { ComplexityPyramid } from "./ComplexityPyramid";
import { DatabaseMigrationPanel } from "./DatabaseMigrationPanel";
import { TechniquesTable } from "./TechniquesTable";
import { ApplicationCasesPanel } from "./ApplicationCasesPanel";
import { useAuth } from "@/context/AuthContext";

export const TechniquesManager = () => {
  const {
    techniques,
    isLoading,
    isFromDatabase
  } = useTechniques();
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedComplexity, setSelectedComplexity] = useState("all");
  const [expandedTechnique, setExpandedTechnique] = useState<string | null>(null);
  const categories = ["all", ...Array.from(new Set(techniques.map(t => t.category)))];
  const complexities = ["all", "1", "2", "3", "4", "5"];
  const filteredTechniques = techniques.filter(technique => {
    const matchesSearch = technique.name.toLowerCase().includes(searchTerm.toLowerCase()) || technique.description.toLowerCase().includes(searchTerm.toLowerCase()) || technique.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || technique.category === selectedCategory;
    const matchesComplexity = selectedComplexity === "all" || technique.complexity.toString() === selectedComplexity;
    return matchesSearch && matchesCategory && matchesComplexity;
  });
  const getComplexityStats = () => {
    const stats = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };
    techniques.forEach(t => stats[t.complexity as keyof typeof stats]++);
    return {
      básico: stats[1] + stats[2],
      intermedio: stats[3],
      avanzado: stats[4] + stats[5]
    };
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
      {/* Data Source Indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isLoading ? (
            <Badge variant="outline" className="flex items-center gap-1">
              <Loader2 className="h-3 w-3 animate-spin" />
              Cargando técnicas...
            </Badge>
          ) : isFromDatabase ? (
            <Badge variant="default" className="flex items-center gap-1 bg-green-600">
              <Cloud className="h-3 w-3" />
              Datos desde base de datos
            </Badge>
          ) : (
            <Badge variant="secondary" className="flex items-center gap-1">
              <HardDrive className="h-3 w-3" />
              Datos desde archivos locales
            </Badge>
          )}
          <span className="text-sm text-muted-foreground">
            {techniques.length} técnicas disponibles
          </span>
        </div>
      </div>

      <Tabs defaultValue="browse" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="browse" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Explorar Técnicas
          </TabsTrigger>
          <TabsTrigger value="analyze" className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Análisis Inteligente
          </TabsTrigger>
          <TabsTrigger value="sequences" className="flex items-center gap-2">
            <GitBranch className="w-4 h-4" />
            Secuencias Metodológicas
          </TabsTrigger>
          <TabsTrigger value="bibliography" className="flex items-center gap-2">
            <BookMarked className="w-4 h-4" />
            Fuentes Bibliográficas
          </TabsTrigger>
          {isAdmin && (
            <TabsTrigger value="database" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              Base de Datos
            </TabsTrigger>
          )}
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
                          {complexity === "all" ? "All complexities" : `Level ${complexity}`}
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

        <TabsContent value="sequences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="w-5 h-5" />
                Rutas Metodológicas Recomendadas
              </CardTitle>
              <CardDescription>
                Secuencias estructuradas de técnicas para diferentes tipos de estudios prospectivos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Ruta para Estudios Explorativos */}
              <div className="border rounded-lg p-4 space-y-4">
                <h4 className="font-semibold text-lg">📊 Estudios Explorativos de Largo Plazo</h4>
                <p className="text-sm text-gray-600">Para explorar futuros posibles sin objetivos predefinidos</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800">1. Environmental Scanning</Badge>
                  <span>→</span>
                  <Badge className="bg-green-100 text-green-800">2. Análisis de Tendencias</Badge>
                  <span>→</span>
                  <Badge className="bg-purple-100 text-purple-800">3. Weak Signals Detection</Badge>
                  <span>→</span>
                  <Badge className="bg-orange-100 text-orange-800">4. Construcción de Escenarios</Badge>
                </div>
                <p className="text-xs text-gray-500">
                  <strong>Duración estimada:</strong> 12-16 semanas | <strong>Recursos:</strong> Alto
                </p>
              </div>

              {/* Ruta para Estudios de Transición */}
              <div className="border rounded-lg p-4 space-y-4">
                <h4 className="font-semibold text-lg">🔄 Análisis de Transiciones Sistémicas</h4>
                <p className="text-sm text-gray-600">Para entender y facilitar cambios transformativos</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800">1. Systems Mapping</Badge>
                  <span>→</span>
                  <Badge className="bg-green-100 text-green-800">2. Mapeo de Stakeholders</Badge>
                  <span>→</span>
                  <Badge className="bg-purple-100 text-purple-800">3. Curva X (X-Curve)</Badge>
                  <span>→</span>
                  <Badge className="bg-orange-100 text-orange-800">4. Talleres de Futuro</Badge>
                </div>
                <p className="text-xs text-gray-500">
                  <strong>Duración estimada:</strong> 8-12 semanas | <strong>Recursos:</strong> Medio-Alto
                </p>
              </div>

              {/* Ruta para Estudios Normativos */}
              <div className="border rounded-lg p-4 space-y-4">
                <h4 className="font-semibold text-lg">🎯 Estudios Normativos y Planificación</h4>
                <p className="text-sm text-gray-600">Para alcanzar objetivos específicos predefinidos</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800">1. Definición de Visión</Badge>
                  <span>→</span>
                  <Badge className="bg-green-100 text-green-800">2. Backcasting</Badge>
                  <span>→</span>
                  <Badge className="bg-purple-100 text-purple-800">3. Análisis de Fuerzas Motrices</Badge>
                  <span>→</span>
                  <Badge className="bg-orange-100 text-orange-800">4. Wind Tunneling</Badge>
                </div>
                <p className="text-xs text-gray-500">
                  <strong>Duración estimada:</strong> 6-10 semanas | <strong>Recursos:</strong> Medio
                </p>
              </div>

              {/* Ruta para Análisis de Riesgos */}
              <div className="border rounded-lg p-4 space-y-4">
                <h4 className="font-semibold text-lg">⚠️ Gestión de Riesgos y Incertidumbres</h4>
                <p className="text-sm text-gray-600">Para identificar y prepararse ante riesgos emergentes</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800">1. Horizon Scanning</Badge>
                  <span>→</span>
                  <Badge className="bg-green-100 text-green-800">2. Wild Cards Analysis</Badge>
                  <span>→</span>
                  <Badge className="bg-purple-100 text-purple-800">3. Cross-Impact Analysis</Badge>
                  <span>→</span>
                  <Badge className="bg-orange-100 text-orange-800">4. Análisis de Impactos Cruzados</Badge>
                </div>
                <p className="text-xs text-gray-500">
                  <strong>Duración estimada:</strong> 10-14 semanas | <strong>Recursos:</strong> Alto
                </p>
              </div>

              {/* Ruta para Consulta Participativa */}
              <div className="border rounded-lg p-4 space-y-4">
                <h4 className="font-semibold text-lg">👥 Consulta Participativa y Consenso</h4>
                <p className="text-sm text-gray-600">Para involucrar múltiples actores en la construcción de futuros</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800">1. Mapeo de Stakeholders</Badge>
                  <span>→</span>
                  <Badge className="bg-green-100 text-green-800">2. Método Delphi</Badge>
                  <span>→</span>
                  <Badge className="bg-purple-100 text-purple-800">3. Ábaco de Régnier</Badge>
                  <span>→</span>
                  <Badge className="bg-orange-100 text-orange-800">4. Talleres de Futuro</Badge>
                </div>
                <p className="text-xs text-gray-500">
                  <strong>Duración estimada:</strong> 8-16 semanas | <strong>Recursos:</strong> Medio-Alto
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bibliography" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="w-5 h-5" />
                Marco Bibliográfico y Fuentes de Referencia
              </CardTitle>
              <CardDescription>
                Fundamentos teóricos y metodológicos para la prospectiva estratégica
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Fuentes Fundamentales */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg border-b pb-2">📚 Fuentes Fundamentales de Prospectiva</h4>
                
                <div className="grid gap-4">
                  <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                    <h5 className="font-medium">Popper, R. (2008). How are foresight methods selected?</h5>
                    <p className="text-sm text-gray-600">
                      Fundamentos teóricos para la selección de métodos prospectivos según contexto, objetivos y recursos disponibles.
                    </p>
                    <Badge variant="outline" className="text-xs">Metodología</Badge>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 space-y-2">
                    <h5 className="font-medium">Godet, M. & Durance, P. (2011). Strategic Foresight for Corporate and Regional Development</h5>
                    <p className="text-sm text-gray-600">
                      Marco conceptual integral para la prospectiva estratégica con enfoque en desarrollo corporativo y regional.
                    </p>
                    <Badge variant="outline" className="text-xs">Estratégico</Badge>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 space-y-2">
                    <h5 className="font-medium">UNDP (2018). Foresight Manual: Empowered Futures for the 2030 Agenda</h5>
                    <p className="text-sm text-gray-600">
                      Manual práctico para aplicación de prospectiva en políticas públicas y desarrollo sostenible.
                    </p>
                    <Badge variant="outline" className="text-xs">Políticas Públicas</Badge>
                  </div>
                </div>
              </div>

              {/* Fuentes Específicas por Método */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg border-b pb-2">🔬 Fuentes Específicas por Método</h4>
                
                <div className="grid gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <h5 className="font-medium">Análisis de Transiciones</h5>
                    <ul className="text-sm space-y-2">
                      <li>• Silvestri, G., Diercks, G., & Matti, C. (2022). <em>X-Curve Booklet</em>. DRIFT & EIT Climate-KIC</li>
                      <li>• Geels, F.W. (2011). <em>The multi-level perspective on sustainability transitions</em></li>
                      <li>• Rotmans, J. & Loorbach, D. (2009). <em>Complexity and transition management</em></li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <h5 className="font-medium">Construcción de Escenarios</h5>
                    <ul className="text-sm space-y-2">
                      <li>• Shell International (2013). <em>New Lens Scenarios: A shift in perspective for a world in transition</em></li>
                      <li>• Van der Heijden, K. (2005). <em>Scenarios: The Art of Strategic Conversation</em></li>
                      <li>• Schwartz, P. (1996). <em>The Art of the Long View: Planning for the Future</em></li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <h5 className="font-medium">Métodos Participativos</h5>
                    <ul className="text-sm space-y-2">
                      <li>• Weisbord, M. & Janoff, S. (2007). <em>Future Search: Getting the whole system in the room</em></li>
                      <li>• Régnier, F. (1989). <em>L'abaque de Régnier: Une méthode de consultation</em></li>
                      <li>• Arnstein, S.R. (1969). <em>A Ladder of Citizen Participation</em></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Instituciones de Referencia */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg border-b pb-2">🏛️ Instituciones y Centros de Referencia</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 space-y-2">
                    <h5 className="font-medium">DRIFT (Países Bajos)</h5>
                    <p className="text-sm text-gray-600">Instituto líder en estudios de transiciones sostenibles</p>
                    <Badge variant="outline" className="text-xs">Transiciones</Badge>
                  </div>
                  
                  <div className="border rounded-lg p-4 space-y-2">
                    <h5 className="font-medium">UK Government Office for Science</h5>
                    <p className="text-sm text-gray-600">Foresight para políticas públicas gubernamentales</p>
                    <Badge variant="outline" className="text-xs">Políticas</Badge>
                  </div>
                  
                  <div className="border rounded-lg p-4 space-y-2">
                    <h5 className="font-medium">CNAM-LIPSOR (Francia)</h5>
                    <p className="text-sm text-gray-600">Desarrollo de métodos estructurales para prospectiva</p>
                    <Badge variant="outline" className="text-xs">Metodología</Badge>
                  </div>
                  
                  <div className="border rounded-lg p-4 space-y-2">
                    <h5 className="font-medium">EIT Climate-KIC</h5>
                    <p className="text-sm text-gray-600">Innovación y transiciones para el cambio climático</p>
                    <Badge variant="outline" className="text-xs">Clima</Badge>
                  </div>
                </div>
              </div>

              {/* Nota Metodológica */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-medium text-blue-900 mb-2">📋 Nota Metodológica</h5>
                <p className="text-sm text-blue-800">
                  Esta base bibliográfica se actualiza continuamente incorporando nuevas publicaciones y metodologías emergentes. 
                  Las referencias incluyen tanto fuentes académicas peer-reviewed como literatura gris de instituciones reconocidas 
                  en el campo de la prospectiva estratégica.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Database Management Tab - Admin Only */}
        {isAdmin && (
          <TabsContent value="database" className="space-y-6">
            <DatabaseMigrationPanel />
            <TechniquesTable />
          </TabsContent>
        )}
      </Tabs>
    </div>;
};