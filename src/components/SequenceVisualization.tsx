import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, FileText, Brain, Target } from "lucide-react";
import { StudyProfile } from "@/types/technique";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface SequenceVisualizationProps {
  results: StudyProfile;
  techniques: any[];
}

export const SequenceVisualization = ({ results, techniques }: SequenceVisualizationProps) => {
  const exportToPDF = async () => {
    const element = document.getElementById('sequence-content');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Título del documento
      pdf.setFontSize(20);
      pdf.setTextColor(51, 51, 51);
      pdf.text('Análisis de Secuencias - Estudio Prospectivo', 20, 30);
      
      // Información del estudio
      pdf.setFontSize(12);
      pdf.text(`Estudio: ${results.title}`, 20, 45);
      pdf.text(`País: ${results.country}`, 20, 55);
      pdf.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 65);
      
      // Imagen del análisis
      const imgWidth = 170;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 20, 75, imgWidth, imgHeight);
      
      // Nueva página con detalles
      pdf.addPage();
      pdf.setFontSize(16);
      pdf.text('Detalles de las Técnicas Recomendadas', 20, 30);
      
      let yPosition = 50;
      results.recommendedTechniques.forEach((rec, index) => {
        const technique = techniques.find(t => t.id === rec.techniqueId);
        if (technique) {
          pdf.setFontSize(12);
          pdf.setFont(undefined, 'bold');
          pdf.text(`${index + 1}. ${technique.name}`, 20, yPosition);
          
          pdf.setFont(undefined, 'normal');
          pdf.setFontSize(10);
          yPosition += 10;
          
          const justificationLines = pdf.splitTextToSize(rec.justification, 170);
          pdf.text(justificationLines, 20, yPosition);
          yPosition += justificationLines.length * 5 + 10;
          
          if (yPosition > 250) {
            pdf.addPage();
            yPosition = 30;
          }
        }
      });
      
      pdf.save(`analisis-secuencias-${results.title.replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } catch (error) {
      console.error('Error al generar PDF:', error);
    }
  };

  const getPhaseColor = (order: number) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500', 
      'bg-yellow-500',
      'bg-purple-500',
      'bg-red-500',
      'bg-indigo-500',
      'bg-pink-500'
    ];
    return colors[order - 1] || 'bg-gray-500';
  };

  const getPhaseLabel = (order: number) => {
    const labels = [
      'Preparación',
      'Análisis', 
      'Exploración',
      'Construcción',
      'Validación',
      'Implementación',
      'Seguimiento'
    ];
    return labels[order - 1] || `Fase ${order}`;
  };

  return (
    <Card className="border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Target className="w-6 h-6 text-indigo-600" />
            Analizador de Secuencias Metodológicas
          </CardTitle>
          <Button onClick={exportToPDF} variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exportar a PDF
          </Button>
        </div>
      </CardHeader>
      <CardContent id="sequence-content">
        <div className="space-y-6">
          {/* Descripción del análisis */}
          <div className="p-4 bg-indigo-100 rounded-lg border-l-4 border-indigo-500">
            <div className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-indigo-600 mt-0.5" />
              <div>
                <div className="font-medium text-indigo-900 mb-1">Análisis Inteligente de Secuencias</div>
                <div className="text-sm text-indigo-800">
                  La IA ha diseñado una secuencia optimizada de {results.recommendedTechniques.length} técnicas 
                  prospectivas basada en las características específicas de tu estudio, recursos disponibles y 
                  objetivos planteados.
                </div>
              </div>
            </div>
          </div>

          {/* Visualización de la secuencia */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-700 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Secuencia de Aplicación Recomendada
            </h4>
            
            <div className="grid gap-4">
              {results.recommendedTechniques
                .sort((a, b) => a.sequenceOrder - b.sequenceOrder)
                .map((rec, index) => {
                  const technique = techniques.find(t => t.id === rec.techniqueId);
                  const nextRec = results.recommendedTechniques
                    .sort((a, b) => a.sequenceOrder - b.sequenceOrder)[index + 1];
                  
                  return (
                    <div key={rec.techniqueId} className="space-y-2">
                      <Card className="shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            {/* Número de fase */}
                            <div className="flex flex-col items-center">
                              <div 
                                className={`w-12 h-12 rounded-full ${getPhaseColor(rec.sequenceOrder)} text-white flex items-center justify-center font-bold text-lg shadow-md`}
                              >
                                {rec.sequenceOrder}
                              </div>
                              <Badge 
                                variant="outline" 
                                className="mt-2 text-xs px-2 py-1"
                              >
                                {getPhaseLabel(rec.sequenceOrder)}
                              </Badge>
                            </div>

                            {/* Información de la técnica */}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h5 className="font-semibold text-slate-800">
                                  {technique?.name || 'Técnica no encontrada'}
                                </h5>
                                <Badge variant="secondary" className="text-xs">
                                  {technique?.complexity}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {technique?.applicationTime}
                                </Badge>
                              </div>
                              
                              <p className="text-sm text-slate-600 mb-3">
                                {technique?.objective}
                              </p>
                              
                              <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                                <div className="text-xs font-medium text-blue-900 mb-1">
                                  Justificación IA:
                                </div>
                                <div className="text-sm text-blue-800">
                                  {rec.justification}
                                </div>
                              </div>
                            </div>

                            {/* Métricas */}
                            <div className="text-center">
                              <div className="text-2xl font-bold text-slate-700">
                                {technique?.requiredPeople || 'N/A'}
                              </div>
                              <div className="text-xs text-slate-500">Personas</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Flecha de conexión */}
                      {nextRec && (
                        <div className="flex justify-center">
                          <div className="flex items-center gap-2 text-slate-400">
                            <div className="h-px bg-slate-300 w-8"></div>
                            <ArrowRight className="w-5 h-5" />
                            <div className="h-px bg-slate-300 w-8"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Resumen de la secuencia */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-4">
              <h5 className="font-semibold text-slate-700 mb-3">Resumen de la Secuencia</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {results.recommendedTechniques.length}
                  </div>
                  <div className="text-sm text-slate-600">Técnicas en Secuencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {results.estimatedTime || 'Variable'}
                  </div>
                  <div className="text-sm text-slate-600">Duración Estimada</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {results.teamExperience}
                  </div>
                  <div className="text-sm text-slate-600">Nivel Requerido</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};