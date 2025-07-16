import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // Header translations
  'header.title': {
    en: 'Prospective Platform',
    es: 'Plataforma Prospectiva'
  },
  'header.subtitle': {
    en: 'Strategic Tools Suite',
    es: 'Suite de Herramientas Estratégicas'
  },
  
  // Navigation and buttons
  'button.add': {
    en: 'Add',
    es: 'Agregar'
  },
  'button.edit': {
    en: 'Edit',
    es: 'Editar'
  },
  'button.delete': {
    en: 'Delete',
    es: 'Eliminar'
  },
  'button.save': {
    en: 'Save',
    es: 'Guardar'
  },
  'button.cancel': {
    en: 'Cancel',
    es: 'Cancelar'
  },
  'button.close': {
    en: 'Close',
    es: 'Cerrar'
  },
  'button.search': {
    en: 'Search',
    es: 'Buscar'
  },
  'button.filter': {
    en: 'Filter',
    es: 'Filtrar'
  },
  'button.reset': {
    en: 'Reset',
    es: 'Reiniciar'
  },
  'button.analyze': {
    en: 'Analyze',
    es: 'Analizar'
  },
  'button.generate': {
    en: 'Generate',
    es: 'Generar'
  },
  'button.export': {
    en: 'Export',
    es: 'Exportar'
  },
  
  // Common terms
  'common.name': {
    en: 'Name',
    es: 'Nombre'
  },
  'common.description': {
    en: 'Description',
    es: 'Descripción'
  },
  'common.category': {
    en: 'Category',
    es: 'Categoría'
  },
  'common.complexity': {
    en: 'Complexity',
    es: 'Complejidad'
  },
  'common.objectives': {
    en: 'Objectives',
    es: 'Objetivos'
  },
  'common.applications': {
    en: 'Applications',
    es: 'Aplicaciones'
  },
  'common.methodology': {
    en: 'Methodology',
    es: 'Metodología'
  },
  'common.advantages': {
    en: 'Advantages',
    es: 'Ventajas'
  },
  'common.limitations': {
    en: 'Limitations',
    es: 'Limitaciones'
  },
  'common.timeHorizon': {
    en: 'Time Horizon',
    es: 'Horizonte Temporal'
  },
  'common.participants': {
    en: 'Participants',
    es: 'Participantes'
  },
  'common.duration': {
    en: 'Duration',
    es: 'Duración'
  },
  'common.step': {
    en: 'Step',
    es: 'Paso'
  },
  'common.references': {
    en: 'References',
    es: 'Referencias'
  },
  'common.resources': {
    en: 'Resources',
    es: 'Recursos'
  },
  'common.prerequisites': {
    en: 'Prerequisites',
    es: 'Prerrequisitos'
  },
  'common.examples': {
    en: 'Examples',
    es: 'Ejemplos'
  },
  'common.relatedTechniques': {
    en: 'Related Techniques',
    es: 'Técnicas Relacionadas'
  },
  
  // Complexity levels
  'complexity.low': {
    en: 'Low',
    es: 'Baja'
  },
  'complexity.medium': {
    en: 'Medium',
    es: 'Media'
  },
  'complexity.high': {
    en: 'High',
    es: 'Alta'
  },
  
  // Experience levels
  'experience.beginner': {
    en: 'Beginner',
    es: 'Principiante'
  },
  'experience.intermediate': {
    en: 'Intermediate',
    es: 'Intermedio'
  },
  'experience.expert': {
    en: 'Expert',
    es: 'Experto'
  },
  
  // Scope types
  'scope.public': {
    en: 'Public',
    es: 'Público'
  },
  'scope.private': {
    en: 'Private',
    es: 'Privado'
  },
  'scope.mixed': {
    en: 'Mixed',
    es: 'Mixto'
  },
  
  // State levels
  'stateLevel.national': {
    en: 'National',
    es: 'Nacional'
  },
  'stateLevel.regional': {
    en: 'Regional',
    es: 'Regional'
  },
  'stateLevel.local': {
    en: 'Local',
    es: 'Local'
  },
  'stateLevel.municipal': {
    en: 'Municipal',
    es: 'Municipal'
  },
  
  // Categories
  'category.exploratory': {
    en: 'Exploratory',
    es: 'Exploratoria'
  },
  'category.normative': {
    en: 'Normative',
    es: 'Normativa'
  },
  'category.structural': {
    en: 'Structural',
    es: 'Estructural'
  },
  'category.participatory': {
    en: 'Participatory',
    es: 'Participativa'
  },
  'category.analytical': {
    en: 'Analytical',
    es: 'Analítica'
  },
  'category.creative': {
    en: 'Creative',
    es: 'Creativa'
  },
  'category.quantitative': {
    en: 'Quantitative',
    es: 'Cuantitativa'
  },
  'category.qualitative': {
    en: 'Qualitative',
    es: 'Cualitativa'
  },
  
  // Search and filter
  'search.placeholder': {
    en: 'Search techniques...',
    es: 'Buscar técnicas...'
  },
  'filter.category': {
    en: 'Filter by category',
    es: 'Filtrar por categoría'
  },
  'filter.complexity': {
    en: 'Filter by complexity',
    es: 'Filtrar por complejidad'
  },
  'filter.all': {
    en: 'All',
    es: 'Todas'
  },
  'filter.clear': {
    en: 'Clear filters',
    es: 'Limpiar filtros'
  },
  
  // Technique management
  'technique.add': {
    en: 'Add Technique',
    es: 'Agregar Técnica'
  },
  'technique.edit': {
    en: 'Edit Technique',
    es: 'Editar Técnica'
  },
  'technique.delete': {
    en: 'Delete Technique',
    es: 'Eliminar Técnica'
  },
  'technique.deleteConfirm': {
    en: 'Are you sure you want to delete this technique?',
    es: '¿Estás seguro de que quieres eliminar esta técnica?'
  },
  'technique.notFound': {
    en: 'No techniques found',
    es: 'No se encontraron técnicas'
  },
  
  // Study analyzer
  'study.title': {
    en: 'Study Analyzer',
    es: 'Analizador de Estudios'
  },
  'study.create': {
    en: 'Create Study Profile',
    es: 'Crear Perfil de Estudio'
  },
  'study.analyze': {
    en: 'Analyze Study',
    es: 'Analizar Estudio'
  },
  'study.recommendations': {
    en: 'Recommendations',
    es: 'Recomendaciones'
  },
  'study.profile': {
    en: 'Study Profile',
    es: 'Perfil de Estudio'
  },
  'study.objective': {
    en: 'Study Objective',
    es: 'Objetivo del Estudio'
  },
  'study.country': {
    en: 'Country',
    es: 'País'
  },
  'study.territory': {
    en: 'Territory Name',
    es: 'Nombre del Territorio'
  },
  'study.estimatedTime': {
    en: 'Estimated Time',
    es: 'Tiempo Estimado'
  },
  'study.availableResources': {
    en: 'Available Resources',
    es: 'Recursos Disponibles'
  },
  'study.teamExperience': {
    en: 'Team Experience',
    es: 'Experiencia del Equipo'
  },
  'study.objectiveComplexity': {
    en: 'Objective Complexity',
    es: 'Complejidad del Objetivo'
  },
  
  // Messages
  'message.saved': {
    en: 'Successfully saved',
    es: 'Guardado exitosamente'
  },
  'message.deleted': {
    en: 'Successfully deleted',
    es: 'Eliminado exitosamente'
  },
  'message.error': {
    en: 'An error occurred',
    es: 'Ocurrió un error'
  },
  'message.loading': {
    en: 'Loading...',
    es: 'Cargando...'
  },
  'message.noResults': {
    en: 'No results found',
    es: 'No se encontraron resultados'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string, fallback?: string): string => {
    const translation = translations[key];
    if (translation) {
      return translation[language];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};