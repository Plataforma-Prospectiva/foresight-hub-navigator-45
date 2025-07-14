import type { LucideIcon } from 'lucide-react';

export interface MethodologyStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface BibliographicSource {
  type: 'book' | 'article' | 'report' | 'guide' | 'methodological' | 'theoretical' | 'institutional';
  title: string;
  authors?: string[];
  year: number;
  publisher?: string;
  journal?: string;
  institution?: string;
  url?: string;
}

export interface Technique {
  id: string;
  name: string;
  icon: LucideIcon;
  complexity: number; // 1-5 scale
  category: string;
  description: string;
  objectives: string[];
  applications: string[];
  methodology: MethodologyStep[];
  advantages: string[];
  limitations: string[];
  timeHorizon: string;
  participants: string;
  bibliographicSources: BibliographicSource[];
}

export interface StudyProfile {
  id: string;
  title: string;
  description: string;
  country: string;
  stateLevel: 'national' | 'regional' | 'local' | 'municipal';
  territoryName?: string;
  scope: 'public' | 'private' | 'mixed';
  estimatedTime: string;
  studyObjective: string;
  timeHorizon: string;
  objectiveComplexity: 'low' | 'medium' | 'high';
  availableResources: {
    budget: 'limited' | 'medium' | 'extensive';
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
  teamExperience: 'beginner' | 'intermediate' | 'expert';
  recommendedTechniques: {
    techniqueId: string;
    justification: string;
    sequenceOrder: number;
  }[];
  estimatedDuration?: string;
  createdAt: Date;
}

export interface ResourceOption {
  id: string;
  name: string;
  description: string;
  category: 'financial' | 'human' | 'technical' | 'institutional' | 'informational';
}