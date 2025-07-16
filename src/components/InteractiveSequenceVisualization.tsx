import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, FileText, Brain, Target, Network, Workflow } from "lucide-react";
import { StudyProfile } from "@/types/technique";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Plot from 'react-plotly.js';
import { useLanguage } from "@/context/LanguageContext";

interface InteractiveSequenceVisualizationProps {
  results: StudyProfile;
  techniques: any[];
}

export const InteractiveSequenceVisualization = ({ results, techniques }: InteractiveSequenceVisualizationProps) => {
  const { language, t } = useLanguage();

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
      
      // Document title
      pdf.setFontSize(20);
      pdf.setTextColor(51, 51, 51);
      pdf.text(t('sequenceAnalysis'), 20, 30);
      
      // Study information
      pdf.setFontSize(12);
      pdf.text(`${t('study')}: ${results.title}`, 20, 45);
      pdf.text(`${t('country')}: ${results.country}`, 20, 55);
      pdf.text(`${t('date')}: ${new Date().toLocaleDateString()}`, 20, 65);
      
      // Analysis image
      const imgWidth = 170;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 20, 75, imgWidth, imgHeight);
      
      pdf.save(`${t('sequenceAnalysis').toLowerCase()}-${results.title.replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const getPhaseColor = (order: number) => {
    const colors = [
      'rgb(59, 130, 246)',   // blue
      'rgb(34, 197, 94)',    // green
      'rgb(234, 179, 8)',    // yellow
      'rgb(168, 85, 247)',   // purple
      'rgb(239, 68, 68)',    // red
      'rgb(99, 102, 241)',   // indigo
      'rgb(236, 72, 153)'    // pink
    ];
    return colors[order - 1] || 'rgb(107, 114, 128)';
  };

  const getPhaseLabel = (order: number) => {
    const labels = language === 'en' 
      ? ['Preparation', 'Analysis', 'Exploration', 'Construction', 'Validation', 'Implementation', 'Monitoring']
      : ['Preparación', 'Análisis', 'Exploración', 'Construcción', 'Validación', 'Implementación', 'Seguimiento'];
    return labels[order - 1] || `${language === 'en' ? 'Phase' : 'Fase'} ${order}`;
  };

  // Prepare data for timeline chart
  const timelineData = results.recommendedTechniques
    .sort((a, b) => a.sequenceOrder - b.sequenceOrder)
    .map((rec, index) => {
      const technique = techniques.find(t => t.id === rec.techniqueId);
      return {
        x: [index, index + 1],
        y: [`${rec.sequenceOrder}. ${technique?.name || 'Unknown'}`, `${rec.sequenceOrder}. ${technique?.name || 'Unknown'}`],
        mode: 'lines+markers',
        line: { 
          color: getPhaseColor(rec.sequenceOrder),
          width: 8
        },
        marker: { 
          size: 12,
          color: getPhaseColor(rec.sequenceOrder)
        },
        name: `${getPhaseLabel(rec.sequenceOrder)}`,
        type: 'scatter'
      };
    });

  // Network diagram data
  const networkData = [{
    x: results.recommendedTechniques.map((_, i) => Math.cos(2 * Math.PI * i / results.recommendedTechniques.length)),
    y: results.recommendedTechniques.map((_, i) => Math.sin(2 * Math.PI * i / results.recommendedTechniques.length)),
    mode: 'markers+text',
    marker: {
      size: results.recommendedTechniques.map(rec => 20 + rec.sequenceOrder * 5),
      color: results.recommendedTechniques.map(rec => getPhaseColor(rec.sequenceOrder)),
      line: { width: 2, color: 'white' }
    },
    text: results.recommendedTechniques.map((rec, i) => `${rec.sequenceOrder}`),
    textposition: 'middle center',
    textfont: { color: 'white', size: 12, family: 'Arial Black' },
    hovertemplate: results.recommendedTechniques.map(rec => {
      const technique = techniques.find(t => t.id === rec.techniqueId);
      return `<b>${technique?.name}</b><br>` +
             `${language === 'en' ? 'Phase' : 'Fase'}: ${rec.sequenceOrder}<br>` +
             `${language === 'en' ? 'Complexity' : 'Complejidad'}: ${technique?.complexity}<br>` +
             `<extra></extra>`;
    }),
    type: 'scatter'
  }];

  // Complexity distribution
  const complexityDistribution = results.recommendedTechniques.reduce((acc, rec) => {
    const technique = techniques.find(t => t.id === rec.techniqueId);
    const complexity = technique?.complexity || 1;
    acc[complexity] = (acc[complexity] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const complexityData = [{
    x: Object.keys(complexityDistribution).map(k => `${language === 'en' ? 'Level' : 'Nivel'} ${k}`),
    y: Object.values(complexityDistribution),
    type: 'bar',
    marker: {
      color: ['rgb(34, 197, 94)', 'rgb(234, 179, 8)', 'rgb(239, 68, 68)', 'rgb(168, 85, 247)', 'rgb(59, 130, 246)']
    }
  }];

  return (
    <Card className="border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Target className="w-6 h-6 text-indigo-600" />
            {t('methodologicalSequenceAnalyzer')}
          </CardTitle>
          <Button onClick={exportToPDF} variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            {t('exportToPDF')}
          </Button>
        </div>
      </CardHeader>
      <CardContent id="sequence-content">
        <div className="space-y-6">
          {/* AI Analysis Description */}
          <div className="p-4 bg-indigo-100 rounded-lg border-l-4 border-indigo-500">
            <div className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-indigo-600 mt-0.5" />
              <div>
                <div className="font-medium text-indigo-900 mb-1">{t('intelligentSequenceAnalysis')}</div>
                <div className="text-sm text-indigo-800">
                  {t('aiSequenceDescription', undefined, { count: results.recommendedTechniques.length })}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Timeline Visualization */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-700 flex items-center gap-2">
              <Workflow className="w-4 h-4" />
              {t('interactiveTimeline')}
            </h4>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Plot
                data={timelineData}
                layout={{
                  title: t('sequenceTimeline'),
                  xaxis: { title: t('progressionSteps') },
                  yaxis: { title: t('techniques') },
                  height: 400,
                  showlegend: false,
                  plot_bgcolor: 'rgba(0,0,0,0)',
                  paper_bgcolor: 'rgba(0,0,0,0)',
                }}
                config={{ responsive: true, displayModeBar: true }}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          {/* Network Visualization */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-700 flex items-center gap-2">
              <Network className="w-4 h-4" />
              {t('networkDiagram')}
            </h4>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Plot
                data={networkData}
                layout={{
                  title: t('techniqueNetwork'),
                  xaxis: { showgrid: false, showticklabels: false, zeroline: false },
                  yaxis: { showgrid: false, showticklabels: false, zeroline: false },
                  height: 400,
                  showlegend: false,
                  plot_bgcolor: 'rgba(0,0,0,0)',
                  paper_bgcolor: 'rgba(0,0,0,0)',
                }}
                config={{ responsive: true, displayModeBar: true }}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          {/* Complexity Distribution */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-700 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {t('complexityDistribution')}
            </h4>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Plot
                data={complexityData}
                layout={{
                  title: t('techniqueComplexity'),
                  xaxis: { title: t('complexityLevel') },
                  yaxis: { title: t('numberOfTechniques') },
                  height: 300,
                  plot_bgcolor: 'rgba(0,0,0,0)',
                  paper_bgcolor: 'rgba(0,0,0,0)',
                }}
                config={{ responsive: true, displayModeBar: true }}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          {/* Traditional Sequence Cards (kept for detail) */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-700 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {t('recommendedApplicationSequence')}
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
                            {/* Phase number */}
                            <div className="flex flex-col items-center">
                              <div 
                                className="w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-lg shadow-md"
                                style={{ backgroundColor: getPhaseColor(rec.sequenceOrder) }}
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

                            {/* Technique information */}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h5 className="font-semibold text-slate-800">
                                  {technique?.name || t('techniqueNotFound')}
                                </h5>
                                <Badge variant="secondary" className="text-xs">
                                  {t('complexityLevel')} {technique?.complexity}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {technique?.timeHorizon}
                                </Badge>
                              </div>
                              
                              <p className="text-sm text-slate-600 mb-3">
                                {language === 'en' ? technique?.objectives : technique?.objectives}
                              </p>
                              
                              <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                                <div className="text-xs font-medium text-blue-900 mb-1">
                                  {t('aiJustification')}:
                                </div>
                                <div className="text-sm text-blue-800">
                                  {rec.justification}
                                </div>
                              </div>
                            </div>

                            {/* Metrics */}
                            <div className="text-center">
                              <div className="text-2xl font-bold text-slate-700">
                                {technique?.team || 'N/A'}
                              </div>
                              <div className="text-xs text-slate-500">{t('people')}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Connection arrow */}
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

          {/* Sequence Summary */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-4">
              <h5 className="font-semibold text-slate-700 mb-3">{t('sequenceSummary')}</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {results.recommendedTechniques.length}
                  </div>
                  <div className="text-sm text-slate-600">{t('techniquesInSequence')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {results.estimatedTime || t('variable')}
                  </div>
                  <div className="text-sm text-slate-600">{t('estimatedDuration')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {t(results.teamExperience)}
                  </div>
                  <div className="text-sm text-slate-600">{t('requiredLevel')}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};