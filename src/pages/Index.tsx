import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechniqueProvider, useTechniques } from "@/context/TechniqueContext";
import { StudyAnalyzer } from "@/components/StudyAnalyzer";
const IndexContent = () => {
  const {
    techniques,
    syncTechniquesToDatabase
  } = useTechniques();

  // Auto-sync new techniques on component mount
  useEffect(() => {
    const autoSync = async () => {
      try {
        const result = await syncTechniquesToDatabase();
        if (result.success && result.count && result.count > 0) {
          console.log('🔄 Técnicas sincronizadas automáticamente:', result.message);
        }
      } catch (error) {
        console.log('No se requiere sincronización');
      }
    };
    autoSync();
  }, []);

  // Calculate statistics
  const totalTechniques = techniques.length;
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header onIconChange={() => {}} onAddTool={() => {}} />
      
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
                Creador de Metodologías Prospectivas
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">                                             x<span className="font-semibold text-primary">Análisis inteligente con IA</span> para generar secuencias metodológicas personalizadas 
                y casos similares para tu estudio prospectivo
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold shadow-elegant hover:shadow-glow transition-all duration-300" onClick={() => document.getElementById('methodology-section')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  <Brain className="w-5 h-5 mr-2" />
                  Crear Metodología
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="flex justify-center max-w-4xl mx-auto animate-slide-up">
              <Card className="hover-lift shadow-elegant border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-2">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">Análisis Inteligente</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <div className="text-3xl font-bold text-primary mb-1">{totalTechniques}</div>
                  <p className="text-sm text-muted-foreground">Técnicas disponibles</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Methodology Creation Section */}
          <section id="methodology-section" className="mb-20 animate-slide-up">
            <StudyAnalyzer />
          </section>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative mt-20 bg-gradient-to-r from-primary via-primary to-blue-600 text-primary-foreground py-12">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Creador de Metodologías Prospectivas</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Transformando el análisis estratégico con metodologías de vanguardia para la construcción de futuros
            </p>
            <div className="flex justify-center space-x-6 text-sm text-primary-foreground/70">
              <span>© 2024 Metodologías Prospectivas</span>
              <span>•</span>
              <span>Análisis Inteligente</span>
              <span>•</span>
              <span>Casos Similares</span>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
const Index = () => {
  return <TechniqueProvider>
      <IndexContent />
    </TechniqueProvider>;
};
export default Index;