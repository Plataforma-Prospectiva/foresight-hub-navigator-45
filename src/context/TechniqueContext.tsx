
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Technique, StudyProfile, ResourceOption } from '@/types/technique';
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
          objectives: dbTech.objectives,
          applications: dbTech.applications,
          methodology: dbTech.methodology as any,
          advantages: dbTech.advantages,
          limitations: dbTech.limitations,
          timeHorizon: dbTech.time_horizon,
          participants: dbTech.participants,
          bibliographicSources: dbTech.bibliographic_sources as any
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
    if (useDatabase) {
      loadTechniquesFromDatabase();
    } else {
      setTechniques(getTechniques(language));
    }
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

  const analyzeStudyWithAI = async (profile: Omit<StudyProfile, 'id' | 'createdAt' | 'recommendedTechniques'>): Promise<{ techniqueId: string; justification: string; sequenceOrder: number }[]> => {
    try {
      console.log('Calling Mistral AI for sequence analysis...');
      
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
          techniques: simplifiedTechniques
        }
      });

      if (error) {
        console.error('Error calling Mistral AI function:', error);
        throw new Error('Failed to analyze with AI: ' + error.message);
      }

      if (!data || !data.recommendedTechniques) {
        console.error('Invalid response from Mistral AI:', data);
        throw new Error('Invalid AI response format');
      }

      console.log('Mistral AI analysis completed successfully:', data);
      
      // Sort by sequence order and return
      return data.recommendedTechniques.sort((a, b) => a.sequenceOrder - b.sequenceOrder);
      
    } catch (error) {
      console.error('Error in AI analysis, falling back to heuristic method:', error);
      
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
          justification: `Técnica recomendada basada en análisis heurístico (complejidad ${technique.complexity}/5, categoría ${technique.category})`,
          sequenceOrder
        };
      });
      
      // Return top 5 techniques sorted by score
      return compatibilityScores
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .sort((a, b) => a.sequenceOrder - b.sequenceOrder)
        .map(({ techniqueId, justification, sequenceOrder }) => ({
          techniqueId,
          justification,
          sequenceOrder
        }));
    }
  };

  const createStudyProfile = async (profileData: Omit<StudyProfile, 'id' | 'createdAt' | 'recommendedTechniques'>): Promise<StudyProfile> => {
    const recommendedTechniques = await analyzeStudyWithAI(profileData);
    
    const newProfile: StudyProfile = {
      ...profileData,
      id: Date.now().toString(),
      createdAt: new Date(),
      recommendedTechniques,
    };
    
    setStudyProfiles(prev => [...prev, newProfile]);
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
