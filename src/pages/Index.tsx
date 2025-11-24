import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { ToolsGrid } from "@/components/ToolsGrid";
import { ToolCategory } from "@/components/ToolCategory";
import { SearchBar } from "@/components/SearchBar";
import { AuthProvider } from "@/context/AuthContext";
import { tools as initialTools } from "@/data/tools";
import { MapPin, TrendingUp, Users, Brain, Target, Zap, BarChart3, Activity, Lightbulb, ChevronDown, Sparkles, TrendingUp as TrendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechniqueProvider } from "@/context/TechniqueContext";
import { TechniquesManager } from "@/components/TechniquesManager";
const iconMap = {
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
const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [tools, setTools] = useState(initialTools);
  const handleIconChange = (toolId: string, newIconName: string) => {
    const newIcon = iconMap[newIconName as keyof typeof iconMap];
    if (newIcon) {
      setTools(prevTools => prevTools.map(tool => tool.id === toolId ? {
        ...tool,
        icon: newIcon
      } : tool));
    }
  };
  const handleAddTool = (newTool: any) => {
    setTools(prevTools => [...prevTools, newTool]);
    console.log('Nueva herramienta agregada:', newTool);
  };
  return <AuthProvider>
      <TechniqueProvider>
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
          <Header onIconChange={handleIconChange} onAddTool={handleAddTool} />
          
          <main className="relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
              <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{
              animationDelay: '2s'
            }}></div>
              <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-float" style={{
              animationDelay: '4s'
            }}></div>
            </div>

            <div className="container mx-auto px-6 py-8 relative">
              {/* Enhanced Hero Section */}
              <section className="text-center mb-16 animate-fade-in">
                <div className="mb-8">
                  
                  <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
                    Plataforma Prospectiva
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                     Metodologias
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Button size="lg" className="px-8 py-4 text-lg font-semibold shadow-elegant hover:shadow-glow transition-all duration-300" onClick={() => document.getElementById('techniques-section')?.scrollIntoView({
                    behavior: 'smooth'
                  })}>
                      <TrendIcon className="w-5 h-5 mr-2" />
                      Explorar Técnicas
                    </Button>
                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold hover-lift" onClick={() => document.getElementById('tools-section')?.scrollIntoView({
                    behavior: 'smooth'
                  })}>
                      Ver Herramientas
                    </Button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up">
                  <Card className="hover-lift shadow-elegant border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                    
                  </Card>
                  
                  
                  
                  
                </div>

                {/* Scroll Indicator */}
                <div className="mt-16 animate-bounce">
                  
                </div>
              </section>

              {/* Techniques Manager Section */}
              <section id="techniques-section" className="mb-20 animate-slide-up">
                
                <TechniquesManager />
              </section>

              {/* Tools Section */}
              <section id="tools-section" className="animate-slide-up">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-primary mb-4">Desarrolladas para aplicar técnicas prospectivas</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Potencia tu análisis con herramientas especializadas para cada fase del proceso prospectivo
                  </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-8 space-y-6">
                  <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                  <ToolCategory selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
                </div>

                {/* Tools Grid */}
                <ToolsGrid searchTerm={searchTerm} selectedCategory={selectedCategory} tools={tools} />
              </section>
            </div>
          </main>

          {/* Enhanced Footer */}
          <footer className="relative mt-20 bg-gradient-to-r from-primary via-primary to-blue-600 text-primary-foreground py-12">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="container mx-auto px-6 relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Plataforma Prospectiva</h3>
                <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                  Transformando el análisis estratégico con metodologías de vanguardia para la construcción de futuros
                </p>
                <div className="flex justify-center space-x-6 text-sm text-primary-foreground/70">
                  <span>© 2024 Plataforma Prospectiva</span>
                  <span>•</span>
                  <span>Herramientas Profesionales</span>
                  <span>•</span>
                  <span>Análisis Estratégico</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </TechniqueProvider>
    </AuthProvider>;
};
export default Index;