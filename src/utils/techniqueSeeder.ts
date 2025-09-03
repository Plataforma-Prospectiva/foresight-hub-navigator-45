import { supabase } from '@/integrations/supabase/client';
import { techniquesES } from '@/data/techniques-es';
import type { Technique } from '@/types/technique';

// Mapear los iconos de Lucide a strings para almacenamiento en la base de datos
const getIconName = (iconComponent: any): string => {
  // Mapeo manual de componentes de Lucide a nombres de string
  const iconMap: Record<string, string> = {
    'TrendingUp': 'TrendingUp',
    'BarChart3': 'BarChart3', 
    'GitBranch': 'GitBranch',
    'Network': 'Network',
    'Brain': 'Brain',
    'Target': 'Target',
    'Search': 'Search',
    'Users': 'Users',
    'Map': 'Map',
    'Layers': 'Layers',
    'Activity': 'Activity',
    'Zap': 'Zap',
    'TreePine': 'TreePine',
    'Shuffle': 'Shuffle',
    'Lightbulb': 'Lightbulb',
    'ChevronRight': 'ChevronRight',
    'Timer': 'Timer',
    'Building': 'Building',
    'Globe': 'Globe',
    'Compass': 'Compass',
    'FileText': 'FileText',
    'PieChart': 'PieChart',
    'LineChart': 'LineChart',
    'Microscope': 'Microscope',
    'Calculator': 'Calculator',
    'FlaskConical': 'FlaskConical',
    'Grid3x3': 'Grid3x3',
    'ArrowUpDown': 'ArrowUpDown',
    'ArrowLeftRight': 'ArrowLeftRight',
    'Workflow': 'Workflow',
    'Scale': 'Scale',
    'Gauge': 'Gauge',
    'Eye': 'Eye',
    'Crosshair': 'Crosshair',
    'UserCheck': 'UserCheck',
    'Shapes': 'Shapes',
    'Palette': 'Palette',
    'Settings': 'Settings',
    'Presentation': 'Presentation',
    'Camera': 'Camera',
    'Clock': 'Clock',
    'Sparkles': 'Sparkles',
    'Heart': 'Heart',
    'MessageSquare': 'MessageSquare',
    'Layers3': 'Layers3',
    'Puzzle': 'Puzzle',
    'TestTube': 'TestTube',
    'Rocket': 'Rocket',
    'Users2': 'Users2',
    'History': 'History',
    'CloudDrizzle': 'CloudDrizzle',
    'ArrowDown': 'ArrowDown',
    'Telescope': 'Telescope',
    'GraduationCap': 'GraduationCap',
    'UserSquare': 'UserSquare',
    'DollarSign': 'DollarSign',
    'Shield': 'Shield',
    'Route': 'Route',
    'Crown': 'Crown',
    'Gamepad2': 'Gamepad2',
    'Brush': 'Brush',
    'Navigation': 'Navigation',
    'BookOpen': 'BookOpen',
    'AlertTriangle': 'AlertTriangle',
    'TrendingDown': 'TrendingDown',
    'Handshake': 'Handshake',
    'Boxes': 'Boxes',
    'Wrench': 'Wrench',
    'Megaphone': 'Megaphone'
  };

  const iconName = iconComponent?.name || iconComponent?.displayName || 'Lightbulb';
  return iconMap[iconName] || 'Lightbulb';
};

export const seedTechniquesToDatabase = async (): Promise<{ success: boolean; message: string; count?: number }> => {
  try {
    console.log('Iniciando migración de técnicas a la base de datos...');
    
    // Verificar si ya existen técnicas en la base de datos
    const { data: existingTechniques, error: checkError } = await supabase
      .from('techniques')
      .select('technique_id');
    
    if (checkError) {
      console.error('Error verificando técnicas existentes:', checkError);
      return { success: false, message: 'Error verificando técnicas existentes' };
    }

    const existingIds = new Set(existingTechniques?.map(t => t.technique_id) || []);
    
    // Preparar las técnicas para insertar
    const techniquesToInsert = techniquesES
      .filter(technique => !existingIds.has(technique.id))
      .map(technique => ({
        technique_id: technique.id,
        name: technique.name,
        icon_name: getIconName(technique.icon),
        complexity: technique.complexity,
        category: technique.category,
        description: technique.description,
        objectives: technique.objectives,
        applications: technique.applications,
        methodology: JSON.parse(JSON.stringify(technique.methodology)),
        advantages: technique.advantages,
        limitations: technique.limitations,
        time_horizon: technique.timeHorizon,
        participants: technique.participants,
        bibliographic_sources: JSON.parse(JSON.stringify(technique.bibliographicSources)),
        language: 'es',
        is_active: true
      }));

    if (techniquesToInsert.length === 0) {
      return { 
        success: true, 
        message: 'Todas las técnicas ya existen en la base de datos',
        count: existingTechniques?.length || 0
      };
    }

    console.log(`Insertando ${techniquesToInsert.length} técnicas nuevas...`);

    // Insertar las técnicas en lotes de 50 para evitar límites
    const batchSize = 50;
    let totalInserted = 0;

    for (let i = 0; i < techniquesToInsert.length; i += batchSize) {
      const batch = techniquesToInsert.slice(i, i + batchSize);
      
      const { data, error } = await supabase
        .from('techniques')
        .insert(batch);

      if (error) {
        console.error(`Error insertando lote ${i / batchSize + 1}:`, error);
        return { 
          success: false, 
          message: `Error insertando técnicas: ${error.message}`,
          count: totalInserted
        };
      }

      totalInserted += batch.length;
      console.log(`Lote ${i / batchSize + 1} insertado exitosamente (${batch.length} técnicas)`);
    }

    return { 
      success: true, 
      message: `Se insertaron ${totalInserted} técnicas exitosamente en la base de datos`,
      count: totalInserted
    };

  } catch (error) {
    console.error('Error general en seedTechniquesToDatabase:', error);
    return { 
      success: false, 
      message: `Error inesperado: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

export const getTechniquesFromDatabase = async (language: 'en' | 'es' = 'es') => {
  try {
    const { data, error } = await supabase
      .from('techniques')
      .select('*')
      .eq('language', language)
      .eq('is_active', true)
      .order('name');

    if (error) {
      console.error('Error obteniendo técnicas de la base de datos:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error inesperado obteniendo técnicas:', error);
    return null;
  }
};