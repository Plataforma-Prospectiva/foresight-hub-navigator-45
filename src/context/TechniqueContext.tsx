
import { createContext, useContext, useState, ReactNode } from 'react';
import { Technique, StudyProfile, ResourceOption } from '@/types/technique';
import { initialTechniques } from '@/data/techniques';

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
  const [techniques, setTechniques] = useState<Technique[]>(initialTechniques);
  const [studyProfiles, setStudyProfiles] = useState<StudyProfile[]>([]);
  const [resourceOptions, setResourceOptions] = useState<ResourceOption[]>(defaultResourceOptions);

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
    // Análisis avanzado con IA que incluye justificaciones y secuencias
    const compatibilityScores: { [key: string]: { score: number; justification: string; sequenceOrder: number } } = {};
    
    techniques.forEach(technique => {
      let score = 0;
      let justification = "";
      let sequenceOrder = 0;
      
      // Complexity analysis
      if (profile.objectiveComplexity === 'high' && technique.complexity >= 4) {
        score += 30;
        justification += "High complexity requires advanced techniques. ";
      }
      if (profile.objectiveComplexity === 'medium' && technique.complexity === 3) {
        score += 25;
        justification += "Medium complexity aligns with intermediate techniques. ";
      }
      if (profile.objectiveComplexity === 'low' && technique.complexity <= 2) {
        score += 20;
        justification += "Low complexity allows for effective basic techniques. ";
      }
      
      // Team experience analysis
      if (profile.teamExperience === 'expert' && technique.complexity >= 4) {
        score += 25;
        justification += "Expert team can handle advanced techniques. ";
      }
      if (profile.teamExperience === 'intermediate' && technique.complexity <= 3) {
        score += 20;
        justification += "Intermediate experience fits well with this technique. ";
      }
      if (profile.teamExperience === 'beginner' && technique.complexity <= 2) {
        score += 25;
        justification += "Appropriate technique for beginner teams. ";
      }
      
      // Scope and level analysis
      if (profile.scope === 'public' && technique.category.includes('participativ')) {
        score += 15;
        justification += "Public scope favors participatory techniques. ";
      }
      if (profile.stateLevel === 'local' && technique.name.toLowerCase().includes('taller')) {
        score += 10;
        justification += "Nivel local permite talleres más efectivos. ";
      }
      
      // Available resources analysis
      if (profile.availableResources.expertAccess && technique.complexity >= 4) {
        score += 15;
        justification += "Expert access enables more sophisticated techniques. ";
      }
      if (!profile.availableResources.expertAccess && technique.complexity <= 2) {
        score += 10;
        justification += "Without expert access, basic techniques are more viable. ";
      }
      
      // Determinar orden de secuencia basado en la categoría y complejidad
      if (technique.category.includes('explorator')) sequenceOrder = 1;
      else if (technique.category.includes('estructurant')) sequenceOrder = 2;
      else if (technique.category.includes('participativ')) sequenceOrder = 3;
      else if (technique.category.includes('validación')) sequenceOrder = 4;
      else sequenceOrder = Math.floor(score / 20) + 1;
      
      compatibilityScores[technique.id] = { score, justification: justification.trim(), sequenceOrder };
    });
    
    // Ordenar por puntuación y retornar los mejores con sus justificaciones
    const sortedTechniques = Object.entries(compatibilityScores)
      .sort(([,a], [,b]) => b.score - a.score)
      .slice(0, 5)
      .map(([techniqueId, data]) => ({
        techniqueId,
        justification: data.justification || "Technique recommended based on general study profile analysis.",
        sequenceOrder: data.sequenceOrder
      }));
    
    return sortedTechniques;
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
    }}>
      {children}
    </TechniqueContext.Provider>
  );
};

export const useTechniques = () => {
  const context = useContext(TechniqueContext);
  if (!context) {
    throw new Error('useTechniques debe ser usado dentro de un TechniqueProvider');
  }
  return context;
};
