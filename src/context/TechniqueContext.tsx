
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Technique, StudyProfile, ResourceOption, MethodologyStep } from '@/types/technique';
import { getTechniques } from '@/data/techniques';
import { getTechniquesFromDatabase } from '@/utils/techniqueSeeder';
import { useLanguage } from './LanguageContext';
import { useSupabaseAuth } from '@/context/SupabaseAuthContext';
import { supabase } from '@/integrations/supabase/client';
import { 
  TrendingUp, BarChart3, GitBranch, Network, Brain, Target,
  Search, Users, Map, Layers, Activity, Zap, TreePine, Shuffle,
  Lightbulb, ChevronRight, Timer, Building, Globe, Compass,
  FileText, PieChart, LineChart, Microscope, Calculator, 
  FlaskConical, Grid3x3, ArrowUpDown, ArrowLeftRight, Workflow,
  Scale, Gauge, Eye, Crosshair, UserCheck, Shapes, Palette,
  Settings, Presentation, Camera, Clock, Sparkles, Heart,
  MessageSquare, Layers3, Puzzle, TestTube, Rocket, Users2,
  History, CloudDrizzle, ArrowDown, Telescope, GraduationCap,
  UserSquare, DollarSign, Shield, Route, Crown, Gamepad2,
  Brush, Navigation, BookOpen, AlertTriangle, TrendingDown,
  Handshake, Boxes, Wrench, Megaphone
} from 'lucide-react';

// Map icon names to icon components
const iconMap: Record<string, any> = {
  TrendingUp, BarChart3, GitBranch, Network, Brain, Target,
  Search, Users, Map, Layers, Activity, Zap, TreePine, Shuffle,
  Lightbulb, ChevronRight, Timer, Building, Globe, Compass,
  FileText, PieChart, LineChart, Microscope, Calculator, 
  FlaskConical, Grid3x3, ArrowUpDown, ArrowLeftRight, Workflow,
  Scale, Gauge, Eye, Crosshair, UserCheck, Shapes, Palette,
  Settings, Presentation, Camera, Clock, Sparkles, Heart,
  MessageSquare, Layers3, Puzzle, TestTube, Rocket, Users2,
  History, CloudDrizzle, ArrowDown, Telescope, GraduationCap,
  UserSquare, DollarSign, Shield, Route, Crown, Gamepad2,
  Brush, Navigation, BookOpen, AlertTriangle, TrendingDown,
  Handshake, Boxes, Wrench, Megaphone
};

interface TechniqueContextType {
  techniques: Technique[];
  studyProfiles: StudyProfile[];
  resourceOptions: ResourceOption[];
  addTechnique: (technique: Omit<Technique, 'id'>) => void;
  updateTechnique: (id: string, updates: Partial<Technique>) => void;
  deleteTechnique: (id: string) => void;
  createStudyProfile: (profile: Omit<StudyProfile, 'id' | 'createdAt' | 'recommendedTechniques'>) => Promise<StudyProfile>;
  getRecommendedTechniques: (profile: StudyProfile) => Technique[];
  addResourceOption: (resource: Omit<ResourceOption, 'id'>) => void;
  updateResourceOption: (id: string, updates: Partial<ResourceOption>) => void;
  deleteResourceOption: (id: string) => void;
  loadTechniquesFromDatabase: () => Promise<void>;
  syncTechniquesToDatabase: () => Promise<{ success: boolean; message: string; count?: number }>;
  useDatabase: boolean;
  setUseDatabase: (use: boolean) => void;
}

const defaultResourceOptions: ResourceOption[] = [
  { id: '1', name: 'Presupuesto limitado', description: 'Recursos financieros restringidos', category: 'financial' },
  { id: '2', name: 'Presupuesto medio', description: 'Recursos financieros moderados', category: 'financial' },
  { id: '3', name: 'Presupuesto amplio', description: 'Recursos financieros abundantes', category: 'financial' },
  { id: '4', name: 'Acceso a expertos', description: 'Posibilidad de consultar especialistas', category: 'human' },
  { id: '5', name: 'Personal de campo', description: 'Equipo para trabajo de terreno', category: 'human' },
  { id: '6', name: 'Infraestructura física', description: 'Espacios y equipamiento físico', category: 'technical' },
  { id: '7', name: 'Información actual', description: 'Datos recientes y actualizados', category: 'informational' },
  { id: '8', name: 'Información histórica', description: 'Series de tiempo y datos históricos', category: 'informational' },
  { id: '9', name: 'Herramientas para encuestas', description: 'Software para recolección de datos', category: 'technical' },
  { id: '10', name: 'Herramientas de procesamiento', description: 'Software para análisis de datos', category: 'technical' },
  { id: '11', name: 'Planes anteriores', description: 'Experiencias y documentos previos', category: 'informational' },
  { id: '12', name: 'Marco institucional', description: 'Estructura organizacional establecida', category: 'institutional' },
];

const TechniqueContext = createContext<TechniqueContextType | null>(null);

export const TechniqueProvider = ({ children }: { children: ReactNode }) => {
  const { language } = useLanguage();
  const { user } = useSupabaseAuth();
  const [techniques, setTechniques] = useState<Technique[]>(getTechniques(language));
  const [studyProfiles, setStudyProfiles] = useState<StudyProfile[]>([]);
  const [resourceOptions, setResourceOptions] = useState<ResourceOption[]>(defaultResourceOptions);
  const [useDatabase, setUseDatabase] = useState(true);

  const syncTechniquesToDatabase = async () => {
    try {
      const { seedTechniquesToDatabase } = await import('@/utils/techniqueSeeder');
      const result = await seedTechniquesToDatabase();
      if (result.success) {
        console.log('✅ Técnicas sincronizadas:', result.message);
        await loadTechniquesFromDatabase(); // Reload from database
        return result;
      } else {
        console.error('❌ Error sincronizando técnicas:', result.message);
        return result;
      }
    } catch (error) {
      console.error('❌ Error inesperado sincronizando técnicas:', error);
      return { success: false, message: 'Error inesperado' };
    }
  };

  // Helper to parse JSON strings to arrays
  const parseJsonField = (field: string | null): string[] => {
    if (!field) return [];
    try {
      const parsed = JSON.parse(field);
      return Array.isArray(parsed) ? parsed : [field];
    } catch {
      return [field];
    }
  };

  // Helper to parse methodology
  const parseMethodology = (field: string | null): MethodologyStep[] => {
    if (!field) return [];
    try {
      const parsed = JSON.parse(field);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  // Helper to create participants string
  const createParticipantsString = (min: number | null, max: number | null): string => {
    const minVal = min || 1;
    const maxVal = max || 100;
    return `${minVal}-${maxVal} participantes`;
  };

  // Function to load techniques from database and convert to Technique format
  const loadTechniquesFromDatabase = async () => {
    try {
      const dbTechniques = await getTechniquesFromDatabase(language);
      if (Array.isArray(dbTechniques) && dbTechniques.length > 0) {
        // Convert database techniques to Technique format
        const convertedTechniques: Technique[] = dbTechniques.map(dbTech => ({
          id: dbTech.technique_id,
          name: dbTech.name,
          icon: iconMap[dbTech.icon_name] || Lightbulb,
          complexity: dbTech.complexity,
          category: dbTech.category,
          description: dbTech.description,
          objectives: parseJsonField(dbTech.objectives),
          applications: parseJsonField(dbTech.applications),
          methodology: parseMethodology(dbTech.methodology),
          advantages: parseJsonField(dbTech.advantages),
          limitations: parseJsonField(dbTech.limitations),
          timeHorizon: dbTech.time_horizon,
          participants: createParticipantsString(dbTech.participants_min, dbTech.participants_max),
          bibliographicSources: dbTech.technique_references ? 
            [{
              type: 'guide' as const,
              title: dbTech.technique_references,
              year: new Date().getFullYear()
            }] : []
        }));
        setTechniques(convertedTechniques);
      } else {
        console.warn('No techniques found in database, falling back to file data.');
        setTechniques(getTechniques(language));
      }
    } catch (error) {
      console.error('Error loading techniques from database:', error);
      // Fallback to file techniques
      setTechniques(getTechniques(language));
    }
  };

  // Update techniques when language changes or when switching between file/database sources
  React.useEffect(() => {
    const loadAndSyncIfNeeded = async () => {
      if (useDatabase) {
        await loadTechniquesFromDatabase();
        
        try {
          // Check if problem-tree technique exists in database
          const { data: existingTechnique, error } = await supabase
            .from('techniques')
            .select('technique_id')
            .eq('technique_id', 'problem-tree')
            .eq('language', language);
          
          // If not found, sync with files to add it
          if (!error && existingTechnique && existingTechnique.length === 0) {
            console.log('🔄 Nueva técnica detectada en archivos, sincronizando...');
            const syncResult = await syncTechniquesToDatabase();
            if (syncResult.success) {
              console.log('✅ Sincronización exitosa:', syncResult.message);
              // Reload techniques after sync
              await loadTechniquesFromDatabase();
            }
          }
        } catch (error) {
          console.error('Error verificando técnicas:', error);
        }
      } else {
        setTechniques(getTechniques(language));
      }
    };
    
    loadAndSyncIfNeeded();
  }, [language, useDatabase]);

  const addTechnique = (techniqueData: Omit<Technique, 'id'>) => {
    const newTechnique: Technique = {
      ...techniqueData,
      id: Date.now().toString(),
    };
    setTechniques(prev => [...prev, newTechnique]);
  };

  const updateTechnique = (id: string, updates: Partial<Technique>) => {
    setTechniques(prev => 
      prev.map(tech => tech.id === id ? { ...tech, ...updates } : tech)
    );
  };

  const deleteTechnique = (id: string) => {
    setTechniques(prev => prev.filter(tech => tech.id !== id));
  };

  const addResourceOption = (resourceData: Omit<ResourceOption, 'id'>) => {
    const newResource: ResourceOption = {
      ...resourceData,
      id: Date.now().toString(),
    };
    setResourceOptions(prev => [...prev, newResource]);
  };

  const updateResourceOption = (id: string, updates: Partial<ResourceOption>) => {
    setResourceOptions(prev => 
      prev.map(resource => resource.id === id ? { ...resource, ...updates } : resource)
    );
  };

  const deleteResourceOption = (id: string) => {
    setResourceOptions(prev => prev.filter(resource => resource.id !== id));
  };

  const analyzeStudyWithAI = async (profile: Omit<StudyProfile, 'id' | 'createdAt' | 'recommendedTechniques'>): Promise<{ 
    recommendedTechniques: { techniqueId: string; justification: string; sequenceOrder: number }[];
    analysisDescription?: string;
    estimatedDuration?: string;
    aiQuery?: string;
    totalTechniquesConsidered?: number;
    filteredSimilarTechniques?: number;
    aiError?: string;
  }> => {
    try {
      console.log('Calling AI for sequence analysis...', profile.llmProvider);
      
      // Prepare simplified technique data for the AI
      const simplifiedTechniques = techniques.map(tech => ({
        id: tech.id,
        name: tech.name,
        complexity: tech.complexity,
        category: tech.category,
        description: tech.description,
        objectives: tech.objectives,
        applications: tech.applications,
        timeHorizon: tech.timeHorizon,
        participants: tech.participants
      }));

      const { data, error } = await supabase.functions.invoke('mistral-sequence-analyzer', {
        body: {
          profile,
          techniques: simplifiedTechniques,
          llmProvider: profile.llmProvider || 'mistral',
          customApiKey: profile.customLlmApiKey
        }
      });

      if (error) {
        console.error('Error calling AI function:', error);
        throw new Error('Failed to analyze with AI: ' + error.message);
      }

      if (!data || !data.recommendedTechniques) {
        console.error('Invalid response from AI:', data);
        throw new Error('Invalid AI response format');
      }

      console.log('AI analysis completed successfully with', profile.llmProvider, ':', data);
      
      // Sort by sequence order and return full analysis data
      return {
        recommendedTechniques: data.recommendedTechniques.sort((a, b) => a.sequenceOrder - b.sequenceOrder),
        analysisDescription: data.analysisDescription,
        estimatedDuration: data.estimatedDuration,
        aiQuery: data.aiQuery,
        totalTechniquesConsidered: data.totalTechniquesConsidered,
        filteredSimilarTechniques: data.filteredSimilarTechniques
      };
      
    } catch (error) {
      console.error('Error in AI analysis, falling back to heuristic method:', error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      
      // Fallback to simplified heuristic method
      const compatibilityScores = techniques.map(technique => {
        let score = 0;
        let sequenceOrder = 1;
        
        // Basic scoring based on complexity and experience
        if (profile.objectiveComplexity === 'high' && technique.complexity >= 4) score += 30;
        if (profile.objectiveComplexity === 'medium' && technique.complexity === 3) score += 25;
        if (profile.objectiveComplexity === 'low' && technique.complexity <= 2) score += 20;
        
        
        if (profile.teamExperience === 'expert' && technique.complexity >= 4) score += 25;
        if (profile.teamExperience === 'intermediate' && technique.complexity <= 3) score += 20;
        if (profile.teamExperience === 'beginner' && technique.complexity <= 2) score += 25;
        
        // Simple sequence ordering
        if (technique.category.includes('exploratory')) sequenceOrder = 1;
        else if (technique.category.includes('structural')) sequenceOrder = 2;
        else if (technique.category.includes('participatory')) sequenceOrder = 3;
        else sequenceOrder = 4;
        
        return {
          techniqueId: technique.id,
          score,
          justification: `Técnica recomendada basada en análisis heurístico (complejidad ${technique.complexity}/5, categoría ${technique.category}, información ${profile.informationDepth || 'media'})`,
          sequenceOrder
        };
      });
      
      // Return top 5 techniques sorted by score (fallback format)
      const fallbackTechniques = compatibilityScores
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .sort((a, b) => a.sequenceOrder - b.sequenceOrder)
        .map(({ techniqueId, justification, sequenceOrder }) => ({
          techniqueId,
          justification,
          sequenceOrder
        }));
      
      // Create simulated AI query for console display
      const simulatedQuery = `
**MÉTODO HEURÍSTICO DE RESPALDO APLICADO**

Perfil del Estudio Analizado:
- Ámbito: ${profile.scope}
- Nivel: ${profile.stateLevel}
- Territorio: ${profile.territoryName || 'No especificado'}
- Profundidad: ${profile.informationDepth}
- Complejidad: ${profile.objectiveComplexity}
- Experiencia del equipo: ${profile.teamExperience}
- Tiempo estimado: ${profile.estimatedTime}
- Horizonte temporal: ${profile.timeHorizon}
- Presupuesto: ${profile.availableResources.budget}
- Acceso a expertos: ${profile.availableResources.expertAccess ? 'Sí' : 'No'}
- Personal de campo: ${profile.availableResources.fieldPersonnel ? 'Sí' : 'No'}

Criterios heurísticos aplicados:
1. Filtrado por complejidad y experiencia del equipo
2. Puntuación basada en recursos disponibles y profundidad de información
3. Selección de 5 técnicas con mayor compatibilidad
4. Ordenación por secuencia metodológica

Total de técnicas consideradas: ${techniques.length}
`.trim();

      return {
        recommendedTechniques: fallbackTechniques,
        analysisDescription: 'Análisis realizado con método heurístico de respaldo debido a error en IA.',
        estimatedDuration: profile.estimatedTime,
        aiQuery: simulatedQuery,
        totalTechniquesConsidered: techniques.length,
        filteredSimilarTechniques: 0,
        aiError: errorMessage,
      };
    }
  };

  const createStudyProfile = async (profileData: Omit<StudyProfile, 'id' | 'createdAt' | 'recommendedTechniques'>): Promise<StudyProfile & { 
    analysisDescription?: string; 
    aiQuery?: string; 
    totalTechniquesConsidered?: number; 
    filteredSimilarTechniques?: number; 
    aiError?: string;
  }> => {
    const analysisResult = await analyzeStudyWithAI(profileData);
    
    const newProfile = {
      ...profileData,
      id: Date.now().toString(),
      createdAt: new Date(),
      recommendedTechniques: analysisResult.recommendedTechniques,
      estimatedDuration: analysisResult.estimatedDuration,
      analysisDescription: analysisResult.analysisDescription,
      aiQuery: analysisResult.aiQuery,
      totalTechniquesConsidered: analysisResult.totalTechniquesConsidered,
      filteredSimilarTechniques: analysisResult.filteredSimilarTechniques,
      aiError: analysisResult.aiError,
    };
    
    setStudyProfiles(prev => [...prev, newProfile as StudyProfile]);
    return newProfile;
  };

  const getRecommendedTechniques = (profile: StudyProfile): Technique[] => {
    return techniques.filter(tech => 
      profile.recommendedTechniques.some(rec => rec.techniqueId === tech.id)
    );
  };

  return (
    <TechniqueContext.Provider value={{
      techniques,
      studyProfiles,
      resourceOptions,
      addTechnique,
      updateTechnique,
      deleteTechnique,
      createStudyProfile,
      getRecommendedTechniques,
      addResourceOption,
      updateResourceOption,
      deleteResourceOption,
      loadTechniquesFromDatabase,
      syncTechniquesToDatabase,
      useDatabase,
      setUseDatabase,
    }}>
      {children}
    </TechniqueContext.Provider>
  );
};

export const useTechniques = () => {
  const context = useContext(TechniqueContext);
  if (!context) {
    throw new Error('useTechniques must be used within a TechniqueProvider');
  }
  return context;
};
