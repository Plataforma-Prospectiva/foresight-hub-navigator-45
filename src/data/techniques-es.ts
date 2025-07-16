import type { Technique } from '../types/technique';
import { 
  TrendingUp, BarChart3, GitBranch, Network, Brain, Target,
  Search, Users, Map, Layers, Activity, Zap, TreePine, Shuffle,
  Lightbulb, ChevronRight, Timer, Building, Globe, Compass,
  FileText, PieChart, LineChart, Microscope, Calculator, 
  FlaskConical, Grid3x3, ArrowUpDown, ArrowLeftRight, Workflow,
  Scale, Gauge, Eye, Crosshair
} from 'lucide-react';

export const techniquesES: Technique[] = [
  {
    id: 'trend-analysis',
    name: 'Análisis de Tendencias',
    icon: TrendingUp,
    complexity: 3,
    category: 'exploratory',
    description: 'Estudio sistemático de patrones y cambios a lo largo del tiempo para identificar tendencias emergentes y sus posibles trayectorias futuras.',
    objectives: [
      'Identificar y analizar tendencias actuales',
      'Proyectar la evolución de tendencias en el tiempo',
      'Evaluar el impacto e implicaciones de las tendencias',
      'Detectar señales débiles y patrones emergentes'
    ],
    applications: [
      'Pronóstico tecnológico',
      'Investigación de mercado y comportamiento del consumidor',
      'Cambios sociales y demográficos',
      'Análisis de indicadores económicos'
    ],
    methodology: [
      {
        step: 1,
        title: 'Recolección de Datos',
        description: 'Recopilar datos cuantitativos y cualitativos de múltiples fuentes durante períodos prolongados.',
        duration: '2-4 semanas'
      },
      {
        step: 2,
        title: 'Reconocimiento de Patrones',
        description: 'Identificar patrones recurrentes, ciclos y anomalías en los datos usando métodos estadísticos.',
        duration: '1-2 semanas'
      },
      {
        step: 3,
        title: 'Extrapolación de Tendencias',
        description: 'Proyectar tendencias identificadas hacia el futuro usando modelos matemáticos y juicio experto.',
        duration: '1-2 semanas'
      },
      {
        step: 4,
        title: 'Evaluación de Impacto',
        description: 'Evaluar las posibles consecuencias e implicaciones de la continuación o disrupción de tendencias.',
        duration: '1 semana'
      },
      {
        step: 5,
        title: 'Sistema de Monitoreo',
        description: 'Establecer indicadores y métricas para rastrear la evolución de tendencias y validar proyecciones.',
        duration: '1 semana'
      }
    ],
    advantages: [
      'Basado en datos empíricos y evidencia histórica',
      'Fundamento cuantitativo para la toma de decisiones',
      'Detección temprana de cambios emergentes',
      'Proporciona línea base para desarrollo de escenarios'
    ],
    limitations: [
      'Asume continuidad de patrones actuales',
      'Puede perder cambios discontinuos o rupturas',
      'La calidad depende de la disponibilidad y confiabilidad de datos',
      'Vulnerable al sesgo de confirmación'
    ],
    timeHorizon: '1-10 años',
    participants: '3-8 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Strategic Foresight: The Power of Standing in the Future',
        authors: ['Patricia Lustig'],
        year: 2015,
        publisher: 'Triarchy Press'
      },
      {
        type: 'article',
        title: 'Trend Analysis and Strategic Planning',
        authors: ['John Naisbitt'],
        journal: 'Strategic Management Journal',
        year: 2019
      },
      {
        type: 'report',
        title: 'Manual de Prospectiva PNUD',
        authors: ['Equipo PNUD'],
        institution: 'Programa de las Naciones Unidas para el Desarrollo',
        year: 2018
      }
    ]
  },
  {
    id: 'scenario-planning',
    name: 'Planificación de Escenarios',
    icon: Map,
    complexity: 4,
    category: 'exploratory',
    description: 'Método sistemático para crear múltiples visiones plausibles del futuro para mejorar la toma de decisiones bajo incertidumbre.',
    objectives: [
      'Desarrollar múltiples futuros plausibles',
      'Explorar incertidumbres clave y sus implicaciones',
      'Mejorar la planificación estratégica',
      'Prepararse para diferentes futuros posibles'
    ],
    applications: [
      'Planificación estratégica empresarial',
      'Política pública y planificación gubernamental',
      'Gestión de riesgos',
      'Desarrollo de productos y servicios'
    ],
    methodology: [
      {
        step: 1,
        title: 'Definición del Problema',
        description: 'Clarificar la pregunta focal y establecer el horizonte temporal del estudio.',
        duration: '1 semana'
      },
      {
        step: 2,
        title: 'Identificación de Fuerzas Motrices',
        description: 'Identificar y analizar factores clave que influyen en el futuro del sistema.',
        duration: '2-3 semanas'
      },
      {
        step: 3,
        title: 'Análisis de Incertidumbres',
        description: 'Evaluar el nivel de incertidumbre e impacto de cada fuerza motriz.',
        duration: '1-2 semanas'
      },
      {
        step: 4,
        title: 'Construcción de Escenarios',
        description: 'Desarrollar narrativas coherentes combinando diferentes estados de las fuerzas motrices.',
        duration: '2-3 semanas'
      },
      {
        step: 5,
        title: 'Análisis de Implicaciones',
        description: 'Evaluar las implicaciones de cada escenario para la toma de decisiones.',
        duration: '1-2 semanas'
      }
    ],
    advantages: [
      'Aborda múltiples futuros posibles',
      'Mejora la preparación para la incertidumbre',
      'Facilita el pensamiento creativo',
      'Proporciona marco para evaluación de estrategias'
    ],
    limitations: [
      'Intensivo en tiempo y recursos',
      'Requiere facilitación experta',
      'Puede resultar en parálisis por análisis',
      'Dificultad para asignar probabilidades'
    ],
    timeHorizon: '5-30 años',
    participants: '6-15 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'The Art of the Long View',
        authors: ['Peter Schwartz'],
        year: 1991,
        publisher: 'Doubleday'
      },
      {
        type: 'book',
        title: 'Scenario Planning: The Link Between Future and Strategy',
        authors: ['Mats Lindgren', 'Hans Bandhold'],
        year: 2003,
        publisher: 'Palgrave Macmillan'
      }
    ]
  },
  {
    id: 'cross-impact-analysis',
    name: 'Análisis de Impactos Cruzados',
    icon: Network,
    complexity: 4,
    category: 'structural',
    description: 'Técnica que evalúa las interrelaciones y dependencias mutuas entre diferentes factores o eventos para entender sistemas complejos.',
    objectives: [
      'Mapear interrelaciones sistémicas',
      'Identificar factores clave e influyentes',
      'Evaluar efectos de retroalimentación',
      'Optimizar intervenciones estratégicas'
    ],
    applications: [
      'Análisis de sistemas complejos',
      'Planificación de políticas públicas',
      'Gestión de proyectos interdependientes',
      'Análisis de riesgos sistémicos'
    ],
    methodology: [
      {
        step: 1,
        title: 'Definición del Sistema',
        description: 'Identificar componentes y límites del sistema a analizar.',
        duration: '1 semana'
      },
      {
        step: 2,
        title: 'Construcción de Matriz',
        description: 'Crear matriz de impactos cruzados entre todos los factores identificados.',
        duration: '2-3 semanas'
      },
      {
        step: 3,
        title: 'Evaluación de Relaciones',
        description: 'Cuantificar la fuerza y dirección de las relaciones entre factores.',
        duration: '1-2 semanas'
      },
      {
        step: 4,
        title: 'Análisis de Influencia',
        description: 'Calcular indicadores de influencia y dependencia para cada factor.',
        duration: '1 semana'
      },
      {
        step: 5,
        title: 'Interpretación de Resultados',
        description: 'Analizar las implicaciones y desarrollar recomendaciones estratégicas.',
        duration: '1 semana'
      }
    ],
    advantages: [
      'Revela interdependencias ocultas',
      'Enfoque sistémico integral',
      'Identifica puntos de apalancamiento',
      'Cuantifica relaciones complejas'
    ],
    limitations: [
      'Complejidad computacional alta',
      'Requiere juicio experto para evaluaciones',
      'Puede resultar en sobrecomplicación',
      'Sensible a calidad de datos de entrada'
    ],
    timeHorizon: '1-5 años',
    participants: '4-12 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Structural Analysis with the MICMAC Method',
        authors: ['Michel Godet'],
        year: 2001,
        publisher: 'AC/UNU Millennium Project'
      },
      {
        type: 'methodological',
        title: 'Cross-Impact Analysis Methodology',
        authors: ['LIPSOR'],
        institution: 'Conservatoire National des Arts et Métiers',
        year: 2005
      }
    ]
  },
  {
    id: 'delphi-method',
    name: 'Método Delphi',
    icon: Users,
    complexity: 3,
    category: 'participatory',
    description: 'Técnica de consenso estructurado que utiliza rondas iterativas de consultas a expertos para convergir hacia juicios colectivos informados.',
    objectives: [
      'Generar consenso experto',
      'Reducir sesgos individuales',
      'Integrar conocimiento diverso',
      'Evaluar incertidumbres futuras'
    ],
    applications: [
      'Evaluación de tecnologías emergentes',
      'Pronósticos de tendencias',
      'Formulación de políticas',
      'Investigación prospectiva'
    ],
    methodology: [
      {
        step: 1,
        title: 'Diseño del Estudio',
        description: 'Definir objetivos, seleccionar expertos y diseñar cuestionarios.',
        duration: '2-3 semanas'
      },
      {
        step: 2,
        title: 'Primera Ronda',
        description: 'Administrar cuestionario inicial y recopilar respuestas abiertas.',
        duration: '2-4 semanas'
      },
      {
        step: 3,
        title: 'Análisis y Síntesis',
        description: 'Analizar respuestas y preparar retroalimentación para segunda ronda.',
        duration: '1-2 semanas'
      },
      {
        step: 4,
        title: 'Rondas Iterativas',
        description: 'Conducir rondas adicionales hasta lograr consenso o estabilidad.',
        duration: '4-8 semanas'
      },
      {
        step: 5,
        title: 'Reporte Final',
        description: 'Sintetizar resultados y presentar conclusiones consensuadas.',
        duration: '1-2 semanas'
      }
    ],
    advantages: [
      'Elimina sesgos de dominancia grupal',
      'Preserva anonimato de expertos',
      'Permite participación remota',
      'Genera consenso estructurado'
    ],
    limitations: [
      'Proceso lento y laborioso',
      'Requiere coordinación intensiva',
      'Posible pérdida de participantes',
      'Consenso puede ser artificial'
    ],
    timeHorizon: '1-20 años',
    participants: '10-50 expertos',
    bibliographicSources: [
      {
        type: 'book',
        title: 'The Delphi Method: Techniques and Applications',
        authors: ['Harold Linstone', 'Murray Turoff'],
        year: 2002,
        publisher: 'Addison-Wesley'
      },
      {
        type: 'article',
        title: 'The Delphi Technique in Futures Research',
        authors: ['Ziglio Eugenio'],
        journal: 'Futures',
        year: 1996
      }
    ]
  },
  {
    id: 'morphological-analysis',
    name: 'Análisis Morfológico',
    icon: Grid3x3,
    complexity: 4,
    category: 'structural',
    description: 'Método sistemático para explorar todas las combinaciones posibles de un problema multidimensional mediante descomposición en parámetros.',
    objectives: [
      'Explorar espacio completo de soluciones',
      'Identificar configuraciones innovadoras',
      'Estructurar problemas complejos',
      'Generar opciones exhaustivas'
    ],
    applications: [
      'Desarrollo de productos',
      'Planificación estratégica',
      'Análisis de escenarios',
      'Innovación tecnológica'
    ],
    methodology: [
      {
        step: 1,
        title: 'Definición del Problema',
        description: 'Formular claramente el problema a analizar y sus límites.',
        duration: '1 semana'
      },
      {
        step: 2,
        title: 'Identificación de Parámetros',
        description: 'Descomponer el problema en parámetros independientes relevantes.',
        duration: '1-2 semanas'
      },
      {
        step: 3,
        title: 'Definición de Valores',
        description: 'Establecer valores posibles para cada parámetro identificado.',
        duration: '1-2 semanas'
      },
      {
        step: 4,
        title: 'Construcción de Caja Morfológica',
        description: 'Crear matriz multidimensional con todas las combinaciones posibles.',
        duration: '1 semana'
      },
      {
        step: 5,
        title: 'Evaluación de Configuraciones',
        description: 'Analizar consistencia y viabilidad de configuraciones prometedoras.',
        duration: '2-3 semanas'
      }
    ],
    advantages: [
      'Exploración sistemática y exhaustiva',
      'Revela soluciones no obvias',
      'Estructura problemas complejos',
      'Facilita pensamiento creativo'
    ],
    limitations: [
      'Explosión combinatorial',
      'Requiere independencia de parámetros',
      'Puede generar configuraciones irrealizables',
      'Intensivo en análisis'
    ],
    timeHorizon: '1-10 años',
    participants: '3-8 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'General Morphological Analysis',
        authors: ['Tom Ritchey'],
        year: 2011,
        publisher: 'Swedish Morphological Society'
      },
      {
        type: 'methodological',
        title: 'Morphological Analysis Methodology',
        authors: ['Vincent Lamblin'],
        institution: 'Futuribles International',
        year: 2020
      }
    ]
  },
  {
    id: 'weak-signals',
    name: 'Análisis de Señales Débiles',
    icon: Crosshair,
    complexity: 3,
    category: 'exploratory',
    description: 'Técnica para detectar indicios tempranos de cambios emergentes que podrían tener impactos significativos en el futuro.',
    objectives: [
      'Detectar cambios emergentes tempranamente',
      'Identificar discontinuidades potenciales',
      'Anticipar disrupciones futuras',
      'Informar vigilancia estratégica'
    ],
    applications: [
      'Inteligencia competitiva',
      'Vigilancia tecnológica',
      'Análisis de riesgos emergentes',
      'Planificación estratégica'
    ],
    methodology: [
      {
        step: 1,
        title: 'Configuración del Sistema',
        description: 'Definir dominio de búsqueda y criterios de relevancia.',
        duration: '1 semana'
      },
      {
        step: 2,
        title: 'Exploración de Fuentes',
        description: 'Identificar y monitorear fuentes diversas de información.',
        duration: '2-4 semanas'
      },
      {
        step: 3,
        title: 'Detección de Señales',
        description: 'Identificar indicios de cambios emergentes o eventos atípicos.',
        duration: 'Continuo'
      },
      {
        step: 4,
        title: 'Evaluación de Impacto',
        description: 'Evaluar el potencial impacto y relevancia de señales detectadas.',
        duration: '1-2 semanas'
      },
      {
        step: 5,
        title: 'Seguimiento y Actualización',
        description: 'Monitorear evolución de señales y actualizar evaluaciones.',
        duration: 'Continuo'
      }
    ],
    advantages: [
      'Alerta temprana de cambios',
      'Ventaja competitiva anticipada',
      'Reduce sorpresas estratégicas',
      'Informa adaptación proactiva'
    ],
    limitations: [
      'Alto ruido-señal',
      'Requiere monitoreo continuo',
      'Difícil discriminar relevancia',
      'Puede generar falsas alarmas'
    ],
    timeHorizon: '1-5 años',
    participants: '2-6 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Weak Signals for Strategic Intelligence',
        authors: ['Ilkka Kuusi'],
        year: 2002,
        publisher: 'Committee for the Future'
      },
      {
        type: 'methodological',
        title: 'Weak Signals Analysis Methodology',
        authors: ['Kimberly Wheaton'],
        institution: 'Futuribles International',
        year: 2020
      }
    ]
  },
  {
    id: 'backcasting',
    name: 'Backcasting',
    icon: ChevronRight,
    complexity: 3,
    category: 'normative',
    description: 'Método de planificación que parte de una visión futura deseable y trabaja hacia atrás para identificar pasos necesarios para alcanzarla.',
    objectives: [
      'Desarrollar visión futura deseable',
      'Identificar senderos hacia objetivos',
      'Planificar acciones estratégicas',
      'Alinear esfuerzos hacia meta común'
    ],
    applications: [
      'Planificación de sostenibilidad',
      'Desarrollo de visión organizacional',
      'Política pública',
      'Transformación social'
    ],
    methodology: [
      {
        step: 1,
        title: 'Definición de Visión',
        description: 'Articular claramente el futuro deseable a alcanzar.',
        duration: '1-2 semanas'
      },
      {
        step: 2,
        title: 'Análisis de Brechas',
        description: 'Identificar diferencias entre estado actual y visión futura.',
        duration: '1-2 semanas'
      },
      {
        step: 3,
        title: 'Identificación de Hitos',
        description: 'Establecer puntos de referencia intermedios hacia la visión.',
        duration: '1-2 semanas'
      },
      {
        step: 4,
        title: 'Mapeo de Senderos',
        description: 'Desarrollar secuencias de acciones para alcanzar cada hito.',
        duration: '2-3 semanas'
      },
      {
        step: 5,
        title: 'Plan de Implementación',
        description: 'Crear plan detallado con responsabilidades y cronograma.',
        duration: '1-2 semanas'
      }
    ],
    advantages: [
      'Orientación hacia objetivos claros',
      'Motiva acción coordinada',
      'Identifica pasos concretos',
      'Facilita planificación estratégica'
    ],
    limitations: [
      'Requiere visión bien definida',
      'Puede ser rígido ante cambios',
      'Asume viabilidad de la visión',
      'Limitado por conocimiento actual'
    ],
    timeHorizon: '5-50 años',
    participants: '5-20 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Backcasting: A Framework for Strategic Planning',
        authors: ['John Robinson'],
        year: 1990,
        publisher: 'Technological Forecasting and Social Change'
      },
      {
        type: 'article',
        title: 'Backcasting for Sustainable Development',
        authors: ['Henrik Carlsson-Kanyama'],
        journal: 'Natural Resources Forum',
        year: 2008
      }
    ]
  },
  {
    id: 'causal-layered-analysis',
    name: 'Análisis Causal por Capas (CLA)',
    icon: Layers,
    complexity: 4,
    category: 'analytical',
    description: 'Marco analítico que examina problemas en cuatro niveles: litany, sistemas, cosmovisión y mito/metáfora para entendimiento profundo.',
    objectives: [
      'Análisis profundo multinivel',
      'Identificar causas fundamentales',
      'Cuestionar supuestos básicos',
      'Desarrollar soluciones transformadoras'
    ],
    applications: [
      'Análisis de problemas complejos',
      'Desarrollo de políticas',
      'Transformación organizacional',
      'Investigación social'
    ],
    methodology: [
      {
        step: 1,
        title: 'Nivel Litany',
        description: 'Identificar tendencias superficiales y síntomas visibles del problema.',
        duration: '1 semana'
      },
      {
        step: 2,
        title: 'Nivel Sistemas',
        description: 'Analizar estructuras sociales y causas sistémicas subyacentes.',
        duration: '2-3 semanas'
      },
      {
        step: 3,
        title: 'Nivel Cosmovisión',
        description: 'Examinar marcos conceptuales y paradigmas que sostienen el sistema.',
        duration: '2-3 semanas'
      },
      {
        step: 4,
        title: 'Nivel Mito/Metáfora',
        description: 'Explorar narrativas profundas y arquetipos que dan forma a la realidad.',
        duration: '2-3 semanas'
      },
      {
        step: 5,
        title: 'Integración y Síntesis',
        description: 'Integrar insights de todos los niveles para desarrollar soluciones.',
        duration: '1-2 semanas'
      }
    ],
    advantages: [
      'Análisis profundo y holístico',
      'Revela causas fundamentales',
      'Cuestiona supuestos básicos',
      'Facilita transformación genuina'
    ],
    limitations: [
      'Complejo y tiempo-intensivo',
      'Requiere facilitación experta',
      'Puede ser abstracto',
      'Difícil implementación práctica'
    ],
    timeHorizon: '1-20 años',
    participants: '4-12 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Questioning the Future: Methods and Tools for Organizational and Societal Transformation',
        authors: ['Sohail Inayatullah'],
        year: 2007,
        publisher: 'Tamkang University Press'
      },
      {
        type: 'article',
        title: 'Causal Layered Analysis: Poststructuralism as Method',
        authors: ['Sohail Inayatullah'],
        journal: 'Futures',
        year: 1998
      }
    ]
  },
  {
    id: 'x-curve',
    name: 'Curva X',
    icon: Activity,
    complexity: 2,
    category: 'analytical',
    description: 'Herramienta visual para representar la evolución de variables a lo largo del tiempo, mostrando puntos de inflexión y cambios de tendencia.',
    objectives: [
      'Visualizar evolución temporal',
      'Identificar puntos de inflexión',
      'Comunicar cambios de tendencia',
      'Facilitar análisis comparativo'
    ],
    applications: [
      'Análisis de ciclos de vida',
      'Evolución tecnológica',
      'Cambios sociales',
      'Presentación de resultados'
    ],
    methodology: [
      {
        step: 1,
        title: 'Definición de Variables',
        description: 'Identificar variables clave y período temporal de análisis.',
        duration: '1 semana'
      },
      {
        step: 2,
        title: 'Recopilación de Datos',
        description: 'Recopilar datos históricos y proyecciones para las variables.',
        duration: '1-2 semanas'
      },
      {
        step: 3,
        title: 'Construcción de Curvas',
        description: 'Crear representaciones gráficas de la evolución temporal.',
        duration: '1 semana'
      },
      {
        step: 4,
        title: 'Análisis de Patrones',
        description: 'Identificar tendencias, ciclos y puntos de inflexión.',
        duration: '1 semana'
      },
      {
        step: 5,
        title: 'Interpretación y Comunicación',
        description: 'Desarrollar narrativas explicativas y presentar resultados.',
        duration: '1 semana'
      }
    ],
    advantages: [
      'Visualización clara e intuitiva',
      'Facilita comunicación',
      'Identifica patrones temporales',
      'Herramienta simple y accesible'
    ],
    limitations: [
      'Simplificación puede perder matices',
      'Requiere datos de calidad',
      'Limitado a variables cuantificables',
      'Puede ser subjetivo'
    ],
    timeHorizon: '1-20 años',
    participants: '2-6 participantes',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Shaping Tomorrow: A Comprehensive Guide to Futures Thinking',
        authors: ['Shaping Tomorrow Team'],
        institution: 'Shaping Tomorrow',
        year: 2010
      },
      {
        type: 'methodological',
        title: 'Visual Tools for Futures Studies',
        authors: ['Various'],
        institution: 'World Future Society',
        year: 2008
      }
    ]
  },
  {
    id: 'analysis-competing-hypotheses',
    name: 'Análisis de Hipótesis Competitivas (ACH)',
    icon: Scale,
    complexity: 3,
    category: 'analytical',
    description: 'Método estructurado para evaluar múltiples hipótesis explicativas confrontando evidencia disponible de manera sistemática.',
    objectives: [
      'Evaluar hipótesis alternativas',
      'Reducir sesgos cognitivos',
      'Identificar evidencia crítica',
      'Mejorar calidad de juicios'
    ],
    applications: [
      'Análisis de inteligencia',
      'Investigación científica',
      'Diagnóstico médico',
      'Resolución de problemas complejos'
    ],
    methodology: [
      {
        step: 1,
        title: 'Formulación de Hipótesis',
        description: 'Desarrollar conjunto completo de hipótesis explicativas plausibles.',
        duration: '1 semana'
      },
      {
        step: 2,
        title: 'Recopilación de Evidencia',
        description: 'Reunir toda la evidencia relevante disponible.',
        duration: '1-2 semanas'
      },
      {
        step: 3,
        title: 'Matriz de Consistencia',
        description: 'Crear matriz evaluando consistencia de evidencia con cada hipótesis.',
        duration: '1 semana'
      },
      {
        step: 4,
        title: 'Análisis de Consistencia',
        description: 'Evaluar qué hipótesis son más consistentes con la evidencia.',
        duration: '1 semana'
      },
      {
        step: 5,
        title: 'Identificación de Evidencia Crítica',
        description: 'Identificar qué evidencia adicional sería más discriminatoria.',
        duration: '1 semana'
      }
    ],
    advantages: [
      'Reduce sesgos de confirmación',
      'Evaluación sistemática',
      'Transparencia en el proceso',
      'Identifica brechas de información'
    ],
    limitations: [
      'Requiere formulación exhaustiva',
      'Puede ser laborioso',
      'Subjetividad en evaluaciones',
      'Limitado por calidad de evidencia'
    ],
    timeHorizon: '1-3 años',
    participants: '3-8 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Psychology of Intelligence Analysis',
        authors: ['Richards Heuer'],
        year: 1999,
        publisher: 'CIA Center for Intelligence Studies'
      },
      {
        type: 'methodological',
        title: 'Analysis of Competing Hypotheses Methodology',
        authors: ['Kimberly Wheaton'],
        institution: 'Futuribles International',
        year: 2020
      }
    ]
  }
];