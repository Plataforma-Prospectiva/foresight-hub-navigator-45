import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, PieChart, TrendingUp, Users, Clock, Target } from "lucide-react";
import Plot from 'react-plotly.js';
import { useLanguage } from "@/context/LanguageContext";
import { useTechniques } from "@/context/TechniqueContext";

export const TechniqueStatistics = () => {
  const { language, t } = useLanguage();
  const { techniques } = useTechniques();

  // Category distribution
  const categoryStats = techniques.reduce((acc, technique) => {
    acc[technique.category] = (acc[technique.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categoryData = [{
    labels: Object.keys(categoryStats),
    values: Object.values(categoryStats),
    type: 'pie',
    marker: {
      colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#84CC16']
    },
    textinfo: 'label+percent',
    textposition: 'auto',
  }];

  // Complexity distribution
  const complexityStats = techniques.reduce((acc, technique) => {
    const level = technique.complexity;
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const complexityData = [{
    x: Object.keys(complexityStats).map(k => `${t('level')} ${k}`),
    y: Object.values(complexityStats),
    type: 'bar',
    marker: {
      color: ['#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6'],
      opacity: 0.8
    },
    text: Object.values(complexityStats),
    textposition: 'auto',
  }];

  // Team size distribution (using participants field)
  const teamStats = techniques.reduce((acc, technique) => {
    const participants = technique.participants || '';
    const range = participants.includes('5-10') ? '5-10' : 
                  participants.includes('10+') ? '10+' : 
                  participants.includes('3-8') ? '3-8' : '1-5';
    acc[range] = (acc[range] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const teamData = [{
    x: Object.keys(teamStats),
    y: Object.values(teamStats),
    type: 'bar',
    marker: {
      color: '#06B6D4',
      opacity: 0.8
    },
    text: Object.values(teamStats),
    textposition: 'auto',
  }];

  // Time horizon distribution
  const timeStats = techniques.reduce((acc, technique) => {
    acc[technique.timeHorizon] = (acc[technique.timeHorizon] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const timeData = [{
    labels: Object.keys(timeStats),
    values: Object.values(timeStats),
    type: 'pie',
    hole: 0.4,
    marker: {
      colors: ['#84CC16', '#F59E0B', '#EF4444']
    },
    textinfo: 'label+percent',
    textposition: 'auto',
  }];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold text-slate-800">{t('techniqueStatistics')}</h3>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">{techniques.length}</div>
            <div className="text-sm text-slate-600">{t('totalTechniques')}</div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <PieChart className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">{Object.keys(categoryStats).length}</div>
            <div className="text-sm text-slate-600">{t('categories')}</div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">
              5-8
            </div>
            <div className="text-sm text-slate-600">{t('avgTeamSize')}</div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">
              {Math.round(techniques.reduce((sum, t) => sum + t.complexity, 0) / techniques.length * 10) / 10}
            </div>
            <div className="text-sm text-slate-600">{t('avgComplexity')}</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              {t('categoryDistribution')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Plot
              data={categoryData}
              layout={{
                height: 400,
                showlegend: true,
                plot_bgcolor: 'rgba(0,0,0,0)',
                paper_bgcolor: 'rgba(0,0,0,0)',
                font: { size: 12 }
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </Card>

        {/* Complexity Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              {t('complexityDistribution')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Plot
              data={complexityData}
              layout={{
                height: 400,
                xaxis: { title: t('complexityLevel') },
                yaxis: { title: t('numberOfTechniques') },
                plot_bgcolor: 'rgba(0,0,0,0)',
                paper_bgcolor: 'rgba(0,0,0,0)',
                font: { size: 12 }
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </Card>

        {/* Team Size Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              {t('teamSizeDistribution')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Plot
              data={teamData}
              layout={{
                height: 400,
                xaxis: { title: t('teamSize') },
                yaxis: { title: t('numberOfTechniques') },
                plot_bgcolor: 'rgba(0,0,0,0)',
                paper_bgcolor: 'rgba(0,0,0,0)',
                font: { size: 12 }
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </Card>

        {/* Time Horizon Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {t('timeHorizonDistribution')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Plot
              data={timeData}
              layout={{
                height: 400,
                showlegend: true,
                plot_bgcolor: 'rgba(0,0,0,0)',
                paper_bgcolor: 'rgba(0,0,0,0)',
                font: { size: 12 }
              }}
              config={{ responsive: true, displayModeBar: false }}
              style={{ width: '100%' }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};