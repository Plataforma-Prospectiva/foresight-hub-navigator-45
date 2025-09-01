import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Clock, Users, Target, Zap, CheckCircle2, Brain, BarChart3 } from "lucide-react";
import { StudyProfile, Technique } from "@/types/technique";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useLanguage } from "@/context/LanguageContext";

interface SequenceFlowVisualizationProps {
  results: StudyProfile;
  techniques: Technique[];
}

export const SequenceFlowVisualization = ({ results, techniques }: SequenceFlowVisualizationProps) => {
  const { language } = useLanguage();

  const exportToPDF = async () => {
    const element = document.getElementById('sequence-flow-content');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      pdf.setFontSize(20);
      pdf.setTextColor(51, 51, 51);
      pdf.text('Secuencia Metodológica - Análisis IA', 20, 30);
      
      pdf.setFontSize(12);
      pdf.text(`Estudio: ${results.title}`, 20, 45);
      pdf.text(`País: ${results.country}`, 20, 55);
      pdf.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 65);
      
      const imgWidth = 170;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 20, 75, imgWidth, imgHeight);
      
      pdf.save(`secuencia-metodologica-${results.title.replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } catch (error) {
      console.error('Error al generar PDF:', error);
    }
  };

  const getPhaseColor = (order: number) => {
    const colors = [
      'bg-emerald-500',
      'bg-blue-500', 
      'bg-purple-500',
      'bg-orange-500',
      'bg-rose-500',
      'bg-teal-500',
      'bg-indigo-500',
      'bg-amber-500'
    ];
    return colors[(order - 1) % colors.length];
  };

  const getPhaseGradient = (order: number) => {
    const gradients = [
      'from-emerald-400 to-emerald-600',
      'from-blue-400 to-blue-600', 
      'from-purple-400 to-purple-600',
      'from-orange-400 to-orange-600',
      'from-rose-400 to-rose-600',
      'from-teal-400 to-teal-600',
      'from-indigo-400 to-indigo-600',
      'from-amber-400 to-amber-600'
    ];
    return gradients[(order - 1) % gradients.length];
  };

  const getPhaseLabel = (order: number) => {
    const labels = language === 'es' ? [
      'Preparación',
      'Análisis', 
      'Exploración',
      'Construcción',
      'Validación',
      'Implementación',
      'Seguimiento',
      'Evaluación'
    ] : [
      'Preparation',
      'Analysis',
      'Exploration', 
      'Construction',
      'Validation',
      'Implementation',
      'Monitoring',
      'Evaluation'
    ];
    return labels[(order - 1) % labels.length] || `${language === 'es' ? 'Fase' : 'Phase'} ${order}`;
  };

  const sortedTechniques = results.recommendedTechniques
    .sort((a, b) => a.sequenceOrder - b.sequenceOrder)
    .map(rec => {
      const technique = techniques.find(t => t.id === rec.techniqueId);
      return { ...rec, technique };
    });

  const totalDuration = sortedTechniques.reduce((total, item) => {
    if (item.technique?.timeHorizon) {
      // Extraer números del horizonte temporal
      const match = item.technique.timeHorizon.match(/\d+/);
      if (match) {
        return total + parseInt(match[0]);
      }
    }
    return total + 1; // Duración por defecto
  }, 0);

  const text = {
    es: {
      title: "Secuencia Metodológica Inteligente",
      subtitle: "Visualización gráfica de la secuencia optimizada por IA",
      aiAnalysis: "Análisis Inteligente",
      aiDescription: "La IA ha diseñado una secuencia optimizada considerando recursos, objetivos y complejidad del estudio.",
      sequenceFlow: "Flujo de la Secuencia",
      justification: "Justificación IA:",
      complexity: "Complejidad:",
      participants: "Participantes:",
      duration: "Duración:",
      summary: "Resumen Ejecutivo",
      techniques: "Técnicas",
      phases: "Fases",
      estimatedTime: "Tiempo Estimado",
      totalDuration: "Duración Total",
      exportPdf: "Exportar PDF"
    },
    en: {
      title: "Intelligent Methodological Sequence",
      subtitle: "Graphic visualization of AI-optimized sequence",
      aiAnalysis: "Intelligent Analysis",
      aiDescription: "AI has designed an optimized sequence considering resources, objectives and study complexity.",
      sequenceFlow: "Sequence Flow",
      justification: "AI Justification:",
      complexity: "Complexity:",
      participants: "Participants:",
      duration: "Duration:",
      summary: "Executive Summary",
      techniques: "Techniques",
      phases: "Phases",
      estimatedTime: "Estimated Time",
      totalDuration: "Total Duration",
      exportPdf: "Export PDF"
    }
  }[language];

  return (
    <Card className="border-2 border-violet-200 bg-gradient-to-br from-violet-50 via-white to-indigo-50 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-violet-100 to-indigo-100 border-b border-violet-200">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl text-violet-800">
              <Brain className="w-6 h-6 text-violet-600" />
              {text.title}
            </CardTitle>
            <p className="text-sm text-violet-600 mt-1">{text.subtitle}</p>
          </div>
          <Button onClick={exportToPDF} variant="outline" className="flex items-center gap-2 border-violet-300 hover:bg-violet-50">
            <Download className="w-4 h-4" />
            {text.exportPdf}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6" id="sequence-flow-content">
        <div className="space-y-8">
          {/* Análisis IA */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-blue-900 mb-1">{text.aiAnalysis}</div>
                <div className="text-sm text-blue-800">
                  {text.aiDescription}
                </div>
              </div>
            </div>
          </div>

          {/* Flujo de Secuencia */}
          <div className="space-y-6">
            <h4 className="font-semibold text-slate-700 flex items-center gap-2 text-lg">
              <Target className="w-5 h-5" />
              {text.sequenceFlow}
            </h4>
            
            {/* Timeline visual */}
            <div className="relative">
              {/* Línea de tiempo vertical */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-violet-300 to-indigo-300"></div>
              
              <div className="space-y-8">
                {sortedTechniques.map((item, index) => {
                  const { technique, justification, sequenceOrder } = item;
                  const nextItem = sortedTechniques[index + 1];
                  
                  return (
                    <div key={technique?.id || index} className="relative">
                      {/* Nodo de la fase */}
                      <div className="flex items-start gap-6">
                        <div className="relative z-10 flex flex-col items-center">
                          <div 
                            className={`w-16 h-16 rounded-full bg-gradient-to-br ${getPhaseGradient(sequenceOrder)} shadow-lg flex items-center justify-center border-4 border-white`}
                          >
                            <span className="text-white font-bold text-lg">{sequenceOrder}</span>
                          </div>
                          <Badge 
                            variant="secondary" 
                            className="mt-2 text-xs px-3 py-1 bg-white shadow-sm"
                          >
                            {getPhaseLabel(sequenceOrder)}
                          </Badge>
                        </div>

                        {/* Contenido de la técnica */}
                        <div className="flex-1 pb-4">
                          <Card className={`shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${getPhaseColor(sequenceOrder).replace('bg-', 'border-')}`}>
                            <CardContent className="p-5">
                              <div className="space-y-4">
                                {/* Header de la técnica */}
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h5 className="font-bold text-slate-800 text-lg mb-1">
                                      {technique?.name || 'Técnica no encontrada'}
                                    </h5>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                      {technique?.description || 'Descripción no disponible'}
                                    </p>
                                  </div>
                                  
                                  {/* Métricas rápidas */}
                                  <div className="flex flex-col gap-2 ml-4">
                                    <Badge 
                                      variant="outline" 
                                      className="text-xs bg-amber-50 border-amber-200 text-amber-700"
                                    >
                                      {text.complexity} {technique?.complexity || 'N/A'}
                                    </Badge>
                                    <Badge 
                                      variant="outline" 
                                      className="text-xs bg-green-50 border-green-200 text-green-700"
                                    >
                                      {technique?.participants || 'Variable'}
                                    </Badge>
                                  </div>
                                </div>

                                {/* Iconos informativos */}
                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{technique?.timeHorizon || 'Variable'}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    <span>{technique?.participants || 'Flexible'}</span>
                                  </div>
                                </div>

                                {/* Justificación IA */}
                                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400">
                                  <div className="flex items-start gap-2">
                                    <Brain className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="text-xs font-semibold text-blue-900 mb-1">
                                        {text.justification}
                                      </div>
                                      <div className="text-sm text-blue-800 leading-relaxed">
                                        {justification}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Objetivos clave */}
                                {technique?.objectives && technique.objectives.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {technique.objectives.slice(0, 3).map((objective, idx) => (
                                      <Badge key={idx} variant="secondary" className="text-xs bg-slate-100">
                                        <CheckCircle2 className="w-3 h-3 mr-1" />
                                        {objective}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Conector hacia siguiente fase */}
                      {nextItem && (
                        <div className="relative left-8 flex items-center justify-center py-2">
                          <div className="flex items-center gap-2 text-slate-400">
                            <ArrowRight className="w-5 h-5 animate-pulse" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Resumen Ejecutivo */}
          <Card className="bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 border-2 border-emerald-200 shadow-md">
            <CardContent className="p-6">
              <h5 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-600" />
                {text.summary}
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">
                    {results.recommendedTechniques.length}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{text.techniques}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {results.recommendedTechniques.length}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{text.phases}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {totalDuration}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{text.totalDuration}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-orange-600 mb-1 capitalize">
                    {results.teamExperience}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Nivel Requerido</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};