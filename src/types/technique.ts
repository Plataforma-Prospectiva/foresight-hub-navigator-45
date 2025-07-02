
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
  sequenceOrder?: number;
  justification?: string;
}

export interface StudyProfile {
  id: string;
  title: string;
  description: string;
  country: string;
  stateLevel: 'nacional' | 'regional' | 'local' | 'municipal';
  territoryName?: string;
  scope: 'público' | 'privado' | 'mixto';
  estimatedTime: string;
  studyObjective: string;
  timeHorizon: string;
  objectiveComplexity: 'baja' | 'media' | 'alta';
  availableResources: {
    budget: 'limitado' | 'medio' | 'amplio';
    expertAccess: boolean;
    fieldPersonnel: boolean;
    physicalInfrastructure: boolean;
    currentInformation: boolean;
    historicalInformation: boolean;
    surveyTools: boolean;
    dataProcessingTools: boolean;
    previousPlans: boolean;
    institutionalFramework: boolean;
    customResources: string[];
  };
  teamExperience: 'principiante' | 'intermedio' | 'experto';
  recommendedTechniques: {
    techniqueId: string;
    justification: string;
    sequenceOrder: number;
  }[];
  createdAt: Date;
}

export interface ResourceOption {
  id: string;
  name: string;
  description: string;
  category: 'financial' | 'human' | 'technical' | 'institutional' | 'informational';
}
