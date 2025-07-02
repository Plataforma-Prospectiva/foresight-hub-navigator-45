
export interface Technique {
  id: string;
  name: string;
  objective: string;
  recommendedUse: string;
  requiredInputs: string[];
  applicationTime: string;
  requiredPeople: string;
  complexity: 'básico' | 'intermedio' | 'avanzado';
  category: string;
  description: string;
  advantages: string[];
  limitations: string[];
  methodology: string;
  expectedOutputs: string[];
  resources: string[];
  prerequisites: string[];
  examples: string[];
  relatedTechniques: string[];
  references: string[];
}

export interface StudyProfile {
  id: string;
  title: string;
  description: string;
  scope: 'público' | 'privado' | 'mixto';
  estimatedTime: string;
  studyObjective: string;
  timeHorizon: string;
  objectiveComplexity: 'baja' | 'media' | 'alta';
  availableResources: string[];
  teamExperience: 'principiante' | 'intermedio' | 'experto';
  recommendedTechniques: string[];
  createdAt: Date;
}
