
import { createContext, useContext, useState, ReactNode } from 'react';
import { Technique, StudyProfile } from '@/types/technique';
import { initialTechniques } from '@/data/techniques';

interface TechniqueContextType {
  techniques: Technique[];
  studyProfiles: StudyProfile[];
  addTechnique: (technique: Omit<Technique, 'id'>) => void;
  updateTechnique: (id: string, updates: Partial<Technique>) => void;
  deleteTechnique: (id: string) => void;
  createStudyProfile: (profile: Omit<StudyProfile, 'id' | 'createdAt' | 'recommendedTechniques'>) => Promise<StudyProfile>;
  getRecommendedTechniques: (profile: StudyProfile) => Technique[];
}

const TechniqueContext = createContext<TechniqueContextType | null>(null);

export const TechniqueProvider = ({ children }: { children: ReactNode }) => {
  const [techniques, setTechniques] = useState<Technique[]>(initialTechniques);
  const [studyProfiles, setStudyProfiles] = useState<StudyProfile[]>([]);

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

  const analyzeStudyWithAI = async (profile: Omit<StudyProfile, 'id' | 'createdAt' | 'recommendedTechniques'>): Promise<string[]> => {
    // Simulación de análisis con IA - en un entorno real usarías una API como OpenAI
    const compatibilityScores: { [key: string]: number } = {};
    
    techniques.forEach(technique => {
      let score = 0;
      
      // Análisis por complejidad
      if (profile.objectiveComplexity === 'alta' && technique.complexity === 'avanzado') score += 30;
      if (profile.objectiveComplexity === 'media' && technique.complexity === 'intermedio') score += 25;
      if (profile.objectiveComplexity === 'baja' && technique.complexity === 'básico') score += 20;
      
      // Análisis por experiencia del equipo
      if (profile.teamExperience === 'experto' && technique.complexity === 'avanzado') score += 25;
      if (profile.teamExperience === 'intermedio' && technique.complexity !== 'avanzado') score += 20;
      if (profile.teamExperience === 'principiante' && technique.complexity === 'básico') score += 25;
      
      // Análisis por tiempo disponible
      const timeWords = profile.estimatedTime.toLowerCase();
      const techniqueTime = technique.applicationTime.toLowerCase();
      if (timeWords.includes('corto') && techniqueTime.includes('rápid')) score += 20;
      if (timeWords.includes('largo') && techniqueTime.includes('detallad')) score += 15;
      
      // Análisis por ámbito
      if (profile.scope === 'público' && technique.category.includes('participativ')) score += 15;
      if (profile.scope === 'privado' && technique.category.includes('estratégic')) score += 15;
      
      compatibilityScores[technique.id] = score;
    });
    
    // Ordenar por puntuación y retornar los mejores
    const sortedTechniques = Object.entries(compatibilityScores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([id]) => id);
    
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
    return techniques.filter(tech => profile.recommendedTechniques.includes(tech.id));
  };

  return (
    <TechniqueContext.Provider value={{
      techniques,
      studyProfiles,
      addTechnique,
      updateTechnique,
      deleteTechnique,
      createStudyProfile,
      getRecommendedTechniques,
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
