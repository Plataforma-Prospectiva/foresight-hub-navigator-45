import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Technique, MethodologyStep, BibliographicSource } from '@/types/technique';
import { getTechniques } from '@/data/techniques';
import {
  TrendingUp, BarChart3, GitBranch, Network, Brain, Target,
  Search, Users, Map, Layers, Activity, Zap, TreePine, Shuffle,
  Lightbulb, ChevronRight, Timer, Building, Globe, Compass,
  FileText, PieChart, LineChart, Microscope, Calculator, 
  FlaskConical, Grid3x3, ArrowUpDown, ArrowLeftRight, Workflow,
  Scale, Gauge, Eye, Crosshair, UserCheck, Shapes, Palette,
  Settings, Presentation, Camera, Clock, Sparkles, Heart,
  MessageSquare, Layers3, Puzzle, TestTube, Rocket, Users2,
  HelpCircle
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface DatabaseTechnique {
  id: string;
  technique_id: string;
  name: string;
  icon_name: string | null;
  complexity: number;
  category: string;
  description: string | null;
  objectives: string | null;
  applications: string | null;
  methodology: string | null;
  advantages: string | null;
  limitations: string | null;
  time_horizon: string | null;
  participants_min: number | null;
  participants_max: number | null;
  technique_references: string | null;
  language: string;
  is_active: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  TrendingUp, BarChart3, GitBranch, Network, Brain, Target,
  Search, Users, Map, Layers, Activity, Zap, TreePine, Shuffle,
  Lightbulb, ChevronRight, Timer, Building, Globe, Compass,
  FileText, PieChart, LineChart, Microscope, Calculator, 
  FlaskConical, Grid3x3, ArrowUpDown, ArrowLeftRight, Workflow,
  Scale, Gauge, Eye, Crosshair, UserCheck, Shapes, Palette,
  Settings, Presentation, Camera, Clock, Sparkles, Heart,
  MessageSquare, Layers3, Puzzle, TestTube, Rocket, Users2,
  HelpCircle
};

const getIconByName = (iconName: string | null): LucideIcon => {
  if (!iconName) return HelpCircle;
  return iconMap[iconName] || HelpCircle;
};

const parseJsonSafe = <T>(jsonString: string | null, defaultValue: T): T => {
  if (!jsonString) return defaultValue;
  try {
    return JSON.parse(jsonString) as T;
  } catch {
    return defaultValue;
  }
};

const mapDatabaseToTechnique = (dbTech: DatabaseTechnique): Technique => {
  const participantsText = dbTech.participants_min && dbTech.participants_max
    ? `${dbTech.participants_min}-${dbTech.participants_max} participantes`
    : dbTech.participants_min 
      ? `${dbTech.participants_min}+ participantes`
      : 'Variable';

  return {
    id: dbTech.technique_id,
    name: dbTech.name,
    icon: getIconByName(dbTech.icon_name),
    complexity: dbTech.complexity,
    category: dbTech.category,
    description: dbTech.description || '',
    objectives: parseJsonSafe<string[]>(dbTech.objectives, []),
    applications: parseJsonSafe<string[]>(dbTech.applications, []),
    methodology: parseJsonSafe<MethodologyStep[]>(dbTech.methodology, []),
    advantages: parseJsonSafe<string[]>(dbTech.advantages, []),
    limitations: parseJsonSafe<string[]>(dbTech.limitations, []),
    timeHorizon: dbTech.time_horizon || '',
    participants: participantsText,
    bibliographicSources: parseJsonSafe<BibliographicSource[]>(dbTech.technique_references, []),
  };
};

export const useTechniquesFromDB = (language: 'es' | 'en') => {
  const [techniques, setTechniques] = useState<Technique[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFromDatabase, setIsFromDatabase] = useState(false);

  const fetchTechniques = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: dbError } = await supabase
        .from('techniques')
        .select('*')
        .eq('language', language)
        .eq('is_active', true)
        .order('name');

      if (dbError) throw dbError;

      if (data && data.length > 0) {
        const mappedTechniques = data.map(mapDatabaseToTechnique);
        setTechniques(mappedTechniques);
        setIsFromDatabase(true);
      } else {
        // Fallback to static data if database is empty
        const staticTechniques = getTechniques(language);
        setTechniques(staticTechniques);
        setIsFromDatabase(false);
      }
    } catch (err) {
      console.error('Error fetching techniques from database:', err);
      // Fallback to static data on error
      const staticTechniques = getTechniques(language);
      setTechniques(staticTechniques);
      setIsFromDatabase(false);
      setError(err instanceof Error ? err.message : 'Error loading techniques');
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  useEffect(() => {
    fetchTechniques();
  }, [fetchTechniques]);

  const refetch = useCallback(() => {
    fetchTechniques();
  }, [fetchTechniques]);

  return {
    techniques,
    isLoading,
    error,
    isFromDatabase,
    refetch,
  };
};

export const mapTechniqueToDatabase = (technique: Technique, language: string): Omit<DatabaseTechnique, 'id'> => {
  // Extract icon name from the component
  const iconName = technique.icon?.displayName || technique.icon?.name || 'HelpCircle';
  
  // Parse participants string to get min/max
  const participantsMatch = technique.participants.match(/(\d+)(?:-(\d+))?/);
  const participantsMin = participantsMatch ? parseInt(participantsMatch[1], 10) : null;
  const participantsMax = participantsMatch && participantsMatch[2] ? parseInt(participantsMatch[2], 10) : null;

  return {
    technique_id: technique.id,
    name: technique.name,
    icon_name: iconName,
    complexity: technique.complexity,
    category: technique.category,
    description: technique.description,
    objectives: JSON.stringify(technique.objectives),
    applications: JSON.stringify(technique.applications),
    methodology: JSON.stringify(technique.methodology),
    advantages: JSON.stringify(technique.advantages),
    limitations: JSON.stringify(technique.limitations),
    time_horizon: technique.timeHorizon,
    participants_min: participantsMin,
    participants_max: participantsMax,
    technique_references: JSON.stringify(technique.bibliographicSources),
    language,
    is_active: true,
  };
};
