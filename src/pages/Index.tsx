import { useState } from "react";
import { Header } from "@/components/Header";
import { ToolsGrid } from "@/components/ToolsGrid";
import { ToolCategory } from "@/components/ToolCategory";
import { SearchBar } from "@/components/SearchBar";
import { AuthProvider } from "@/context/AuthContext";
import { tools as initialTools } from "@/data/tools";
import { MapPin, TrendingUp, Users, Brain, Target, Zap, BarChart3, Activity, Lightbulb } from "lucide-react";

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
      setTools(prevTools => 
        prevTools.map(tool => 
          tool.id === toolId 
            ? { ...tool, icon: newIcon }
            : tool
        )
      );
    }
  };

  const handleAddTool = (newTool: any) => {
    setTools(prevTools => [...prevTools, newTool]);
    console.log('Nueva herramienta agregada:', newTool);
  };

  return (
    <AuthProvider>
      <TechniqueProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Header onIconChange={handleIconChange} onAddTool={handleAddTool} />
          
          <main className="container mx-auto px-6 py-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-slate-800 mb-4">
                Plataforma Prospectiva
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Suite integral de herramientas especializadas para análisis prospectivo, 
                desarrollo de escenarios y toma de decisiones estratégicas
              </p>
            </div>

            {/* Techniques Manager Section */}
            <div className="mb-16">
              <TechniquesManager />
            </div>

            {/* Search and Filters */}
            <div className="mb-8">
              <SearchBar 
                searchTerm={searchTerm} 
                onSearchChange={setSearchTerm}
              />
              <ToolCategory 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {/* Tools Grid */}
            <ToolsGrid 
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              tools={tools}
            />
          </main>

          {/* Footer */}
          <footer className="bg-slate-800 text-white py-8 mt-16">
            <div className="container mx-auto px-6 text-center">
              <p className="text-slate-300">
                © 2024 Plataforma Prospectiva. Herramientas profesionales para análisis estratégico.
              </p>
            </div>
          </footer>
        </div>
      </TechniqueProvider>
    </AuthProvider>
  );
};

export default Index;
