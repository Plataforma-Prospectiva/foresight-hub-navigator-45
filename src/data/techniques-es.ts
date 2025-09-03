import type { Technique } from '../types/technique';
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
  },
  {
    id: 'setting-the-space',
    name: 'Configuración del Espacio',
    icon: Settings,
    complexity: 1,
    category: 'preparation',
    description: 'Diseño intencional del espacio físico de taller para crear una atmósfera acogedora que establezca expectativas y facilite la especulación colaborativa.',
    objectives: [
      'Crear ambiente acogedor y estimulante',
      'Establecer tono especulativo',
      'Facilitar interacción grupal',
      'Preparar materiales y recursos'
    ],
    applications: [
      'Talleres de especulación',
      'Sesiones de diseño colaborativo',
      'Workshops creativos',
      'Facilitación de grupos',
      'Eventos participativos'
    ],
    methodology: [
      {
        step: 1,
        title: 'Planificación del Espacio',
        description: 'Diseñar layout que facilite movimiento y trabajo grupal, considerando acústica y iluminación.',
        duration: '30 minutos'
      },
      {
        step: 2,
        title: 'Selección de Objetos',
        description: 'Elegir objetos, imágenes o materiales que ilustren el tema y estimulen la creatividad.',
        duration: '15 minutos'
      },
      {
        step: 3,
        title: 'Ambientación Sensorial',
        description: 'Configurar música, aromas, temperatura y otros elementos sensoriales apropiados.',
        duration: '10 minutos'
      },
      {
        step: 4,
        title: 'Preparación de Materiales',
        description: 'Organizar y distribuir materiales de trabajo, herramientas y recursos necesarios.',
        duration: '15 minutos'
      },
      {
        step: 5,
        title: 'Verificación Final',
        description: 'Revisar que todo esté en orden y ajustar elementos según necesidades específicas.',
        duration: '5 minutos'
      }
    ],
    advantages: [
      'Establece expectativas apropiadas',
      'Reduce ansiedad de participantes',
      'Estimula creatividad desde el inicio',
      'Facilita engagement natural'
    ],
    limitations: [
      'Requiere tiempo de preparación',
      'Depende de recursos disponibles',
      'Puede ser sensible culturalmente',
      'Limitado por restricciones espaciales'
    ],
    timeHorizon: 'Duración del taller',
    participants: 'Facilitadores y organizadores',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'speculation-groups',
    name: 'Grupos de Especulación',
    icon: Users2,
    complexity: 1,
    category: 'group-dynamics',
    description: 'Formación estratégica de grupos pequeños de 3-5 participantes para facilitar la especulación colaborativa efectiva y la participación equitativa.',
    objectives: [
      'Optimizar dinámicas grupales',
      'Facilitar participación equitativa',
      'Crear diversidad de perspectivas',
      'Mantener enfoque productivo'
    ],
    applications: [
      'Talleres participativos',
      'Sesiones de brainstorming',
      'Workshops de diseño',
      'Consultas ciudadanas',
      'Procesos colaborativos'
    ],
    methodology: [
      {
        step: 1,
        title: 'Determinación del Tamaño',
        description: 'Establecer grupos de 3-5 personas para equilibrar diversidad y eficiencia decisional.',
        duration: '5 minutos'
      },
      {
        step: 2,
        title: 'Criterios de Agrupación',
        description: 'Decidir método: auto-selección, aleatorio, por experticia o por tema de interés.',
        duration: '10 minutos'
      },
      {
        step: 3,
        title: 'Asignación de Grupos',
        description: 'Implementar método elegido usando técnicas como etiquetas de colores o símbolos.',
        duration: '10 minutos'
      },
      {
        step: 4,
        title: 'Acomodación Espacial',
        description: 'Organizar espacios físicos que permitan trabajo íntimo del grupo sin interferencias.',
        duration: '5 minutos'
      },
      {
        step: 5,
        title: 'Verificación de Balance',
        description: 'Revisar composición de grupos y hacer ajustes si es necesario para equilibrio.',
        duration: '5 minutos'
      }
    ],
    advantages: [
      'Tamaño óptimo para participación',
      'Facilita toma de decisiones',
      'Reduce intimidación social',
      'Permite múltiples perspectivas'
    ],
    limitations: [
      'Puede crear fragmentación',
      'Algunos grupos pueden dominar',
      'Requiere facilitación múltiple',
      'Dinámicas pueden variar significativamente'
    ],
    timeHorizon: 'Duración del proceso',
    participants: '3-5 personas por grupo',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'speculative-introductions',
    name: 'Introducciones Especulativas',
    icon: Presentation,
    complexity: 1,
    category: 'icebreaker',
    description: 'Actividad de presentación que introduce a los participantes en modo especulativo, compartiendo perspectivas personales y estableciendo conexiones temáticas.',
    objectives: [
      'Activar pensamiento especulativo',
      'Establecer conexiones personales',
      'Introducir perspectivas diversas',
      'Crear ambiente de apertura'
    ],
    applications: [
      'Apertura de talleres',
      'Inicio de procesos participativos',
      'Actividades de integración',
      'Sesiones de diseño colaborativo',
      'Encuentros interdisciplinarios'
    ],
    methodology: [
      {
        step: 1,
        title: 'Preparación de Preguntas',
        description: 'Diseñar preguntas especulativas que conecten lo personal con el tema del taller.',
        duration: '10 minutos'
      },
      {
        step: 2,
        title: 'Instrucciones Claras',
        description: 'Explicar el formato y establecer tiempo límite para cada presentación.',
        duration: '5 minutos'
      },
      {
        step: 3,
        title: 'Ronda de Presentaciones',
        description: 'Cada participante se presenta usando las preguntas especulativas como guía.',
        duration: '2-3 minutos por persona'
      },
      {
        step: 4,
        title: 'Identificación de Conexiones',
        description: 'Facilitador destaca temas comunes o contrastes interesantes entre presentaciones.',
        duration: '10 minutos'
      },
      {
        step: 5,
        title: 'Transición al Tema',
        description: 'Conectar insights de presentaciones con objetivos principales del taller.',
        duration: '5 minutos'
      }
    ],
    advantages: [
      'Activa mindset especulativo',
      'Revela diversidad de perspectivas',
      'Crea base común para trabajo',
      'Reduce barreras sociales'
    ],
    limitations: [
      'Puede consumir tiempo considerable',
      'Algunos participantes pueden resistirse',
      'Requiere facilitación hábil',
      'Puede generar ansiedad inicial'
    ],
    timeHorizon: 'Inicio del proceso',
    participants: 'Todos los participantes',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'futures-check-in',
    name: 'Check-in de Futuros',
    icon: UserCheck,
    complexity: 1,
    category: 'reflection',
    description: 'Reflexión inicial donde participantes identifican sus roles personales, intereses y valores, creando base para perspectivas especulativas auténticas.',
    objectives: [
      'Conectar identidad personal con proceso',
      'Clarificar perspectivas individuales',
      'Establecer relevancia personal',
      'Crear autoconciencia reflexiva'
    ],
    applications: [
      'Inicio de talleres especulativos',
      'Sesiones de reflexión',
      'Procesos de co-diseño',
      'Consultas participativas',
      'Workshops de futuros'
    ],
    methodology: [
      {
        step: 1,
        title: 'Distribución de Plantillas',
        description: 'Proporcionar formulario de check-in con espacios para nombre, roles e intereses.',
        duration: '5 minutos'
      },
      {
        step: 2,
        title: 'Reflexión Individual',
        description: 'Participantes completan reflexión sobre roles cotidianos y áreas de interés.',
        duration: '10-15 minutos'
      },
      {
        step: 3,
        title: 'Compartir en Grupos',
        description: 'Opcionalmente compartir reflexiones en grupos pequeños o con pareja.',
        duration: '10 minutos'
      },
      {
        step: 4,
        title: 'Conexión con Proceso',
        description: 'Facilitador conecta reflexiones personales con objetivos del taller.',
        duration: '5 minutos'
      },
      {
        step: 5,
        title: 'Referencia Continua',
        description: 'Invitar a participantes a retomar check-in durante proceso especulativo.',
        duration: 'Continuo'
      }
    ],
    advantages: [
      'Personaliza experiencia de aprendizaje',
      'Aumenta relevancia percibida',
      'Facilita autenticidad en especulación',
      'Crea base para facilitación'
    ],
    limitations: [
      'Puede sentirse abstracto inicialmente',
      'Requiere procesamiento adicional',
      'Algunos pueden resistir introspección',
      'Tiempo adicional necesario'
    ],
    timeHorizon: 'Duración del taller',
    participants: 'Individual o en grupos pequeños',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'research-storytelling',
    name: 'Narrativa de Investigación',
    icon: MessageSquare,
    complexity: 2,
    category: 'knowledge-transfer',
    description: 'Presentación narrativa de insights de investigación que conecta hallazgos científicos con experiencias humanas para inspirar especulación futura.',
    objectives: [
      'Hacer investigación accesible',
      'Conectar ciencia con experiencia cotidiana',
      'Inspirar especulación informada',
      'Nivelar conocimiento grupal'
    ],
    applications: [
      'Comunicación científica',
      'Talleres de co-diseño',
      'Consultas públicas',
      'Procesos participativos',
      'Educación científica'
    ],
    methodology: [
      {
        step: 1,
        title: 'Selección de Narrativas',
        description: 'Identificar aspectos de investigación que se prestan a narrativa humana compelling.',
        duration: '1-2 horas'
      },
      {
        step: 2,
        title: 'Desarrollo de Historia',
        description: 'Crear narrativa que conecte hallazgos técnicos con experiencias relacionables.',
        duration: '2-3 horas'
      },
      {
        step: 3,
        title: 'Preparación de Apoyos',
        description: 'Desarrollar visuales, objetos o demos que apoyen la narrativa sin dominarla.',
        duration: '1 hora'
      },
      {
        step: 4,
        title: 'Presentación Narrativa',
        description: 'Contar historia de manera engaging, enfocando aspectos humanos de la investigación.',
        duration: '10-15 minutos'
      },
      {
        step: 5,
        title: 'Diálogo Abierto',
        description: 'Facilitar preguntas y conexiones entre narrativa e intereses de participantes.',
        duration: '10-15 minutos'
      }
    ],
    advantages: [
      'Hace ciencia más accesible',
      'Crea conexión emocional',
      'Facilita retención de información',
      'Inspira especulación creativa'
    ],
    limitations: [
      'Puede simplificar excesivamente',
      'Requiere habilidades narrativas',
      'Riesgo de distorsión científica',
      'Tiempo de preparación intensivo'
    ],
    timeHorizon: 'Inmediato al proceso',
    participants: 'Investigador y audiencia',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'hands-on-experience',
    name: 'Experiencia Práctica',
    icon: TestTube,
    complexity: 2,
    category: 'experiential',
    description: 'Actividad práctica que permite a participantes experimentar directamente con conceptos, materiales o procesos de investigación para comprender de manera visceral.',
    objectives: [
      'Crear comprensión experiencial',
      'Facilitar aprendizaje kinestésico',
      'Generar insights viscerales',
      'Democratizar conocimiento especializado'
    ],
    applications: [
      'Talleres científicos',
      'Educación experiencial',
      'Procesos de co-diseño',
      'Consultas técnicas',
      'Workshops de innovación'
    ],
    methodology: [
      {
        step: 1,
        title: 'Diseño de Experiencia',
        description: 'Crear actividad hands-on que capte esencia de conceptos de investigación.',
        duration: '2-3 horas'
      },
      {
        step: 2,
        title: 'Preparación de Materiales',
        description: 'Organizar materiales, herramientas y espacios necesarios para experiencia segura.',
        duration: '1 hora'
      },
      {
        step: 3,
        title: 'Instrucciones Claras',
        description: 'Explicar actividad, objetivos de aprendizaje y medidas de seguridad necesarias.',
        duration: '5-10 minutos'
      },
      {
        step: 4,
        title: 'Experiencia Práctica',
        description: 'Participantes realizan actividad con apoyo y orientación según necesidad.',
        duration: '20-45 minutos'
      },
      {
        step: 5,
        title: 'Reflexión y Conexión',
        description: 'Procesar experiencia y conectar con conceptos más amplios de investigación.',
        duration: '15-20 minutos'
      }
    ],
    advantages: [
      'Comprensión profunda y memorable',
      'Compromete múltiples sentidos',
      'Nivela campo de conocimiento',
      'Genera engagement natural'
    ],
    limitations: [
      'Requiere preparación intensiva',
      'Limitaciones de seguridad',
      'Puede ser costoso en materiales',
      'No todos aprenden kinestésicamente'
    ],
    timeHorizon: 'Sesión específica',
    participants: 'Individual o grupos pequeños',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'brainwriting',
    name: 'Lluvia de Ideas Escrita',
    icon: Puzzle,
    complexity: 1,
    category: 'ideation',
    description: 'Técnica de generación de ideas donde participantes escriben ideas silenciosamente antes de compartir, permitiendo participación más equitativa e ideas más diversas.',
    objectives: [
      'Generar máximo número de ideas',
      'Evitar dominancia verbal',
      'Permitir reflexión antes de compartir',
      'Capturar ideas de participantes introvertidos'
    ],
    applications: [
      'Sesiones de brainstorming',
      'Procesos de especulación',
      'Talleres creativos',
      'Consultas participativas',
      'Workshops de innovación'
    ],
    methodology: [
      {
        step: 1,
        title: 'Preparación de Materiales',
        description: 'Distribuir papel, post-its o dispositivos digitales para escritura individual.',
        duration: '5 minutos'
      },
      {
        step: 2,
        title: 'Explicación de Reglas',
        description: 'Clarificar que fase inicial es silenciosa y que todas las ideas son bienvenidas.',
        duration: '5 minutos'
      },
      {
        step: 3,
        title: 'Escritura Silenciosa',
        description: 'Participantes escriben ideas individualmente sin discusión ni comentarios.',
        duration: '10-15 minutos'
      },
      {
        step: 4,
        title: 'Compartir Ideas',
        description: 'Cada persona comparte una idea por turno hasta agotar todas las ideas escritas.',
        duration: '15-20 minutos'
      },
      {
        step: 5,
        title: 'Agrupación y Desarrollo',
        description: 'Organizar ideas por temas y desarrollar las más prometedoras colaborativamente.',
        duration: '20-30 minutos'
      }
    ],
    advantages: [
      'Participación más equitativa',
      'Ideas más diversas y creativas',
      'Reduce influencia de personalidades dominantes',
      'Permite procesamiento reflexivo'
    ],
    limitations: [
      'Menos energía que brainstorming oral',
      'Puede sentirse artificial inicialmente',
      'Requiere habilidades de escritura',
      'Menos construcción inmediata sobre ideas'
    ],
    timeHorizon: 'Sesión específica',
    participants: 'Grupos de 4-12 personas',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'artifact-from-future',
    name: 'Artefacto del Futuro',
    icon: Rocket,
    complexity: 3,
    category: 'speculative-design',
    description: 'Creación de objetos tangibles que representan productos, servicios o sistemas que podrían existir en escenarios futuros especulados.',
    objectives: [
      'Hacer futuros tangibles y concretos',
      'Estimular imaginación especulativa',
      'Facilitar discusión sobre implicaciones',
      'Crear prototipos narrativos'
    ],
    applications: [
      'Diseño especulativo',
      'Workshops de futuros',
      'Procesos de innovación',
      'Consultas sobre tecnología',
      'Educación sobre futuros'
    ],
    methodology: [
      {
        step: 1,
        title: 'Definición de Escenario',
        description: 'Establecer contexto futuro específico con timeline y condiciones clave.',
        duration: '15-20 minutos'
      },
      {
        step: 2,
        title: 'Ideación de Artefacto',
        description: 'Imaginar objeto específico que existiría en ese futuro y su función.',
        duration: '20-30 minutos'
      },
      {
        step: 3,
        title: 'Creación Física',
        description: 'Construir representación física usando materiales disponibles de prototipado.',
        duration: '45-60 minutos'
      },
      {
        step: 4,
        title: 'Desarrollo de Narrativa',
        description: 'Crear historia sobre cómo se usa el artefacto y qué implica socialmente.',
        duration: '20-30 minutos'
      },
      {
        step: 5,
        title: 'Presentación y Crítica',
        description: 'Presentar artefacto a otros grupos para feedback y discusión.',
        duration: '30-45 minutos'
      }
    ],
    advantages: [
      'Hace especulación tangible',
      'Facilita comunicación de ideas complejas',
      'Estimula pensamiento divergente',
      'Crea objetos para discusión continua'
    ],
    limitations: [
      'Requiere tiempo y materiales significativos',
      'Habilidades de prototipado necesarias',
      'Puede enfocarse demasiado en objeto',
      'Limitado por materiales disponibles'
    ],
    timeHorizon: 'Horizonte del escenario especulado',
    participants: 'Grupos de 3-5 personas',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'speculation-sketch',
    name: 'Boceto de Especulación',
    icon: Palette,
    complexity: 2,
    category: 'visualization',
    description: 'Creación de representaciones visuales rápidas de ideas especulativas para capturar conceptos, comunicar visiones y facilitar iteración.',
    objectives: [
      'Capturar ideas especulativas visualmente',
      'Facilitar comunicación rápida',
      'Permitir iteración ágil de conceptos',
      'Crear documentación visual'
    ],
    applications: [
      'Workshops de especulación',
      'Sesiones de ideación',
      'Procesos de co-diseño',
      'Documentación de talleres',
      'Comunicación de conceptos'
    ],
    methodology: [
      {
        step: 1,
        title: 'Preparación de Materiales',
        description: 'Distribuir papel, marcadores y plantillas de boceto si están disponibles.',
        duration: '5 minutos'
      },
      {
        step: 2,
        title: 'Instrucciones de Boceto',
        description: 'Explicar que objetivo es capturar esencia, no crear arte perfecto.',
        duration: '5 minutos'
      },
      {
        step: 3,
        title: 'Boceto Individual/Grupal',
        description: 'Crear representaciones visuales de escenarios o artefactos especulativos.',
        duration: '15-30 minutos'
      },
      {
        step: 4,
        title: 'Anotación y Descripción',
        description: 'Agregar texto explicativo y detalles que clarifiquen la visión.',
        duration: '10-15 minutos'
      },
      {
        step: 5,
        title: 'Compartir y Refinar',
        description: 'Presentar bocetos a otros para feedback e iteración.',
        duration: '20-30 minutos'
      }
    ],
    advantages: [
      'Rápido y accesible',
      'No requiere habilidades artísticas',
      'Facilita comunicación visual',
      'Permite iteración rápida'
    ],
    limitations: [
      'Limitado por habilidades de dibujo',
      'Puede ser ambiguo sin explicación',
      'Menos detallado que prototipos',
      'Algunos se sienten cohibidos dibujando'
    ],
    timeHorizon: 'Sesión específica',
    participants: 'Individual o grupos pequeños',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'object-prototyping',
    name: 'Prototipado de Objetos',
    icon: Shapes,
    complexity: 3,
    category: 'prototyping',
    description: 'Construcción de modelos físicos tridimensionales que materializan ideas especulativas usando materiales diversos para exploración táctil.',
    objectives: [
      'Materializar conceptos especulativos',
      'Facilitar exploración táctil',
      'Crear objetos para discusión',
      'Desarrollar thinking a través del hacer'
    ],
    applications: [
      'Talleres de especulación',
      'Procesos de co-diseño',
      'Prototipado de conceptos',
      'Exhibiciones participativas',
      'Workshops de materiales'
    ],
    methodology: [
      {
        step: 1,
        title: 'Selección de Materiales',
        description: 'Proporcionar variedad de materiales: cartón, arcilla, textiles, elementos reciclados.',
        duration: '10 minutos'
      },
      {
        step: 2,
        title: 'Definición de Concepto',
        description: 'Clarificar qué aspecto de la especulación se materializará físicamente.',
        duration: '15 minutos'
      },
      {
        step: 3,
        title: 'Construcción Colaborativa',
        description: 'Crear prototipo físico como grupo, experimentando con formas y funciones.',
        duration: '45-60 minutos'
      },
      {
        step: 4,
        title: 'Documentación Fotográfica',
        description: 'Capturar múltiples ángulos del prototipo para preservación y comunicación.',
        duration: '10 minutos'
      },
      {
        step: 5,
        title: 'Reflexión sobre Proceso',
        description: 'Discutir qué insights surgieron durante construcción física.',
        duration: '15-20 minutos'
      }
    ],
    advantages: [
      'Engagement kinestésico profundo',
      'Revela aspectos inesperados',
      'Crea objetos duraderos para exhibición',
      'Facilita pensamiento no-verbal'
    ],
    limitations: [
      'Intensivo en tiempo y materiales',
      'Requiere espacio de trabajo adecuado',
      'Prototipos pueden ser frágiles',
      'No todos se sienten cómodos construyendo'
    ],
    timeHorizon: 'Sesión específica',
    participants: 'Grupos de 3-5 personas',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'future-pitch',
    name: 'Pitch de Futuro',
    icon: Presentation,
    complexity: 2,
    category: 'communication',
    description: 'Presentación estructurada donde grupos comunican sus escenarios especulativos de manera compelling y persuasiva a audiencia.',
    objectives: [
      'Comunicar visiones especulativas efectivamente',
      'Practicar advocacy de futuros',
      'Generar diálogo entre diferentes visiones',
      'Desarrollar habilidades de presentación'
    ],
    applications: [
      'Cierre de talleres especulativos',
      'Consultas públicas',
      'Procesos participativos',
      'Workshops de futuros',
      'Eventos de comunidad'
    ],
    methodology: [
      {
        step: 1,
        title: 'Preparación de Estructura',
        description: 'Definir formato de pitch: duración, elementos requeridos, criterios de evaluación.',
        duration: '10 minutos'
      },
      {
        step: 2,
        title: 'Desarrollo de Narrativa',
        description: 'Grupos crean narrativa compelling que conecte emocionalmente con audiencia.',
        duration: '30-45 minutos'
      },
      {
        step: 3,
        title: 'Preparación de Apoyos',
        description: 'Organizar prototipos, bocetos o props que apoyen la presentación.',
        duration: '15 minutos'
      },
      {
        step: 4,
        title: 'Presentaciones',
        description: 'Cada grupo presenta su visión futura con tiempo limitado para impacto.',
        duration: '5-10 minutos por grupo'
      },
      {
        step: 5,
        title: 'Q&A y Feedback',
        description: 'Audiencia hace preguntas y proporciona feedback constructivo.',
        duration: '5-10 minutos por grupo'
      }
    ],
    advantages: [
      'Desarrolla habilidades de comunicación',
      'Crea momento culminante',
      'Facilita comparación de visiones',
      'Genera engagement de audiencia'
    ],
    limitations: [
      'Puede crear competitividad no deseada',
      'Requiere habilidades de presentación',
      'Algunos grupos pueden dominar',
      'Presión de tiempo puede estresar'
    ],
    timeHorizon: 'Cierre de proceso',
    participants: 'Grupos presentando a audiencia',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'impromptu-exhibition',
    name: 'Exhibición Improvisada',
    icon: Camera,
    complexity: 2,
    category: 'display',
    description: 'Creación rápida de espacio expositivo temporal donde grupos muestran prototipos y especulaciones para exploración pública informal.',
    objectives: [
      'Crear espacio de exhibición accesible',
      'Facilitar exploración informal',
      'Generar sentimiento de logro',
      'Permitir documentación visual'
    ],
    applications: [
      'Cierre de talleres',
      'Eventos comunitarios',
      'Procesos participativos',
      'Workshops educativos',
      'Celebraciones de progreso'
    ],
    methodology: [
      {
        step: 1,
        title: 'Preparación Rápida del Espacio',
        description: 'Organizar área para display con mesas, paredes o pedestales improvisados.',
        duration: '15-20 minutos'
      },
      {
        step: 2,
        title: 'Instalación de Trabajos',
        description: 'Grupos instalan prototipos, bocetos y materiales con etiquetas identificatorias.',
        duration: '20-30 minutos'
      },
      {
        step: 3,
        title: 'Apertura Informal',
        description: 'Invitar a exploración libre con creadores disponibles para explicar.',
        duration: '30-45 minutos'
      },
      {
        step: 4,
        title: 'Documentación Colectiva',
        description: 'Tomar fotos de instalación y permitir que participantes documenten.',
        duration: '15 minutos'
      },
      {
        step: 5,
        title: 'Reflexión de Cierre',
        description: 'Reunir grupo para reflexiones finales sobre experiencia expositiva.',
        duration: '15 minutos'
      }
    ],
    advantages: [
      'Celebra logros tangibles',
      'Crea experiencia memorable',
      'Facilita documentación natural',
      'Genera orgullo en participantes'
    ],
    limitations: [
      'Requiere espacio adecuado',
      'Calidad variable de exhibición',
      'Puede sentirse amateur',
      'Limitado por materiales disponibles'
    ],
    timeHorizon: 'Final de proceso',
    participants: 'Todos los participantes',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'gallery-walk',
    name: 'Caminata de Galería',
    icon: Eye,
    complexity: 1,
    category: 'sharing',
    description: 'Actividad donde participantes circulan libremente explorando trabajos de otros grupos en formato de galería auto-dirigida.',
    objectives: [
      'Facilitar exploración auto-dirigida',
      'Permitir conversaciones naturales',
      'Crear oportunidad de aprendizaje peer-to-peer',
      'Generar ambiente de galería profesional'
    ],
    applications: [
      'Cierre de talleres',
      'Exhibiciones públicas',
      'Sesiones de reflexión',
      'Eventos de aprendizaje peer',
      'Showcases comunitarios'
    ],
    methodology: [
      {
        step: 1,
        title: 'Configuración de Display',
        description: 'Organizar prototipos y documentación alrededor del espacio para circulación fácil.',
        duration: '15 minutos'
      },
      {
        step: 2,
        title: 'Posicionamiento de Creadores',
        description: 'Creadores de grupos se posicionan cerca de sus displays para explicaciones.',
        duration: '5 minutos'
      },
      {
        step: 3,
        title: 'Exploración Libre',
        description: 'Participantes se mueven libremente por displays, examinando y discutiendo a su ritmo.',
        duration: '20-30 minutos'
      },
      {
        step: 4,
        title: 'Recolección de Reflexiones',
        description: 'Opcionalmente recoger comentarios escritos o reflexiones en materiales de display.',
        duration: '10 minutos'
      },
      {
        step: 5,
        title: 'Reconvocatoria Grupal',
        description: 'Reunir grupo para reflexiones finales y cierre después de exploración.',
        duration: '10-15 minutos'
      }
    ],
    advantages: [
      'Exploración a ritmo propio',
      'Facilita conversación natural',
      'Oportunidad de examen detallado',
      'Crea sentimiento de galería'
    ],
    limitations: [
      'Requiere espacio para circulación',
      'Algunos displays pueden perderse',
      'Aprendizaje menos estructurado',
      'Fatiga de creadores por explicaciones repetidas'
    ],
    timeHorizon: 'Marco temporal del taller',
    participants: 'Todos los participantes del taller',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'takeaways-reflection',
    name: 'Reflexión de Aprendizajes',
    icon: Heart,
    complexity: 1,
    category: 'reflection',
    description: 'Actividad de cierre donde participantes identifican y comparten insights clave, aprendizajes y compromisos del proceso especulativo.',
    objectives: [
      'Consolidar insights de aprendizaje',
      'Crear construcción personal de significado',
      'Planificar acciones futuras',
      'Generar cierre grupal'
    ],
    applications: [
      'Cierre de talleres',
      'Consolidación de aprendizaje',
      'Planificación de acciones',
      'Evaluación de programas',
      'Sesiones de reflexión'
    ],
    methodology: [
      {
        step: 1,
        title: 'Prompts de Reflexión',
        description: 'Proporcionar preguntas guía sobre insights, sorpresas e intenciones futuras.',
        duration: '5 minutos'
      },
      {
        step: 2,
        title: 'Reflexión Individual',
        description: 'Participantes reflexionan individualmente sobre su experiencia y aprendizajes clave.',
        duration: '10-15 minutos'
      },
      {
        step: 3,
        title: 'Compartir en Parejas',
        description: 'Compartir reflexiones en parejas o grupos pequeños para procesamiento más profundo.',
        duration: '10-15 minutos'
      },
      {
        step: 4,
        title: 'Cosecha Grupal',
        description: 'Recopilar insights clave y compromisos en sesión plenaria.',
        duration: '15-20 minutos'
      },
      {
        step: 5,
        title: 'Círculo de Cierre',
        description: 'Terminar con ronda de apreciación o ritual de cierre para marcar culminación.',
        duration: '10 minutos'
      }
    ],
    advantages: [
      'Consolida experiencia de aprendizaje',
      'Crea compromiso personal',
      'Permite apreciación grupal',
      'Proporciona datos de evaluación'
    ],
    limitations: [
      'Puede sentirse forzado o artificial',
      'Tiempo limitado para reflexión profunda',
      'Depende de apertura de participantes',
      'Riesgo de compartir superficial'
    ],
    timeHorizon: 'Presente/inmediato',
    participants: 'Todos los participantes del taller',
    bibliographicSources: [
      {
        type: 'guide',
        title: 'Co-Creating Futures: How can public engagement foster creative exchange between science and society?',
        authors: ['Kristin Werner', 'Antje Nestler'],
        year: 2025,
        institution: 'CollActive Materials',
        url: 'https://doi.org/10.18452/31342'
      }
    ]
  },
  {
    id: 'backward-scanning',
    name: 'Visión Retrospectiva (Backward Scanning)',
    icon: History,
    complexity: 2,
    category: 'exploratory',
    description: 'Comprender cómo los procesos históricos han configurado el presente e identificar patrones de continuidad o ruptura que influyen en los futuros posibles.',
    objectives: [
      'Reconstruir trayectorias históricas de tendencias',
      'Detectar dinámicas que podrían proyectarse al futuro',
      'Identificar patrones de continuidad o ruptura',
      'Comprender las raíces profundas de problemas actuales'
    ],
    applications: [
      'Análisis histórico de políticas públicas',
      'Evolución de sectores productivos',
      'Comprensión de dinámicas territoriales'
    ],
    methodology: [
      {
        step: 1,
        title: 'Revisión documental',
        description: 'Recopilar fuentes históricas relevantes y documentos de archivo.',
        duration: '2-3 semanas'
      },
      {
        step: 2,
        title: 'Construcción de líneas de tiempo',
        description: 'Crear cronologías detalladas de eventos y tendencias clave.',
        duration: '1-2 semanas'
      },
      {
        step: 3,
        title: 'Análisis de patrones',
        description: 'Identificar ciclos, rupturas y continuidades en los procesos históricos.',
        duration: '1 semana'
      },
      {
        step: 4,
        title: 'Proyección de dinámicas',
        description: 'Extrapolar patrones históricos hacia futuros posibles.',
        duration: '1 semana'
      }
    ],
    advantages: [
      'Amplía la perspectiva temporal',
      'Ayuda a identificar raíces profundas de problemas actuales',
      'Proporciona contexto histórico a las decisiones presentes'
    ],
    limitations: [
      'Riesgo de determinismo histórico',
      'Requiere acceso a fuentes confiables',
      'Puede ser difícil generalizar patrones únicos'
    ],
    timeHorizon: '10-50 años hacia atrás como insumo para proyección futura',
    participants: '1-5 investigadores',
    bibliographicSources: [
      {
        type: 'institutional',
        title: 'History and Foresight',
        institution: 'RAND Corporation',
        year: 2005
      },
      {
        type: 'book',
        title: 'Transforming the future',
        authors: ['R. Miller'],
        year: 2018
      }
    ]
  },
  {
    id: 'structured-day-dreaming',
    name: 'Structured Day-Dreaming',
    icon: CloudDrizzle,
    complexity: 2,
    category: 'creative',
    description: 'Explorar futuros posibles mediante imaginación guiada, estimulando creatividad e innovación en contextos de alta incertidumbre.',
    objectives: [
      'Estimular pensamiento divergente',
      'Romper inercias cognitivas',
      'Generar ideas disruptivas',
      'Explorar futuros creativos'
    ],
    applications: [
      'Generación de ideas disruptivas',
      'Educación prospectiva',
      'Procesos participativos ciudadanos'
    ],
    methodology: [
      {
        step: 1,
        title: 'Preparación del ambiente',
        description: 'Crear un espacio relajado y propicio para la imaginación.',
        duration: '30 minutos'
      },
      {
        step: 2,
        title: 'Inducción guiada',
        description: 'Facilitar visualizaciones y escenas mentales dirigidas.',
        duration: '45 minutos'
      },
      {
        step: 3,
        title: 'Compartir imaginarios',
        description: 'Los participantes comparten sus visiones e ideas.',
        duration: '1 hora'
      },
      {
        step: 4,
        title: 'Sistematización',
        description: 'Organizar y categorizar las ideas emergentes.',
        duration: '30 minutos'
      }
    ],
    advantages: [
      'Rompe inercias cognitivas',
      'Estimula pensamiento divergente',
      'Genera alta participación'
    ],
    limitations: [
      'Puede carecer de rigor si no se sistematiza',
      'Riesgo de dispersión en resultados',
      'Requiere facilitación especializada'
    ],
    timeHorizon: '5-30 años',
    participants: '8-20 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Future Workshops',
        authors: ['R. Jungk', 'N. Müllert'],
        year: 1987
      },
      {
        type: 'book',
        title: 'Six pillars of futures studies',
        authors: ['S. Inayatullah'],
        year: 2007
      }
    ]
  },
  {
    id: 'three-horizons',
    name: 'Método de los Tres Horizontes (3 Horizons Framework)',
    icon: Layers3,
    complexity: 3,
    category: 'transition',
    description: 'Analizar transiciones entre el presente y futuros emergentes, identificando tensiones entre lo establecido, lo declinante y lo emergente.',
    objectives: [
      'Comprender dinámicas de transición',
      'Identificar tensiones entre sistemas',
      'Integrar perspectivas temporales múltiples',
      'Facilitar cambio transformativo'
    ],
    applications: [
      'Planificación territorial',
      'Políticas públicas de innovación',
      'Estrategias organizacionales'
    ],
    methodology: [
      {
        step: 1,
        title: 'Mapeo del Horizonte 1',
        description: 'Identificar y caracterizar el sistema dominante actual.',
        duration: '1 hora'
      },
      {
        step: 2,
        title: 'Visualización del Horizonte 3',
        description: 'Definir la visión transformadora a largo plazo.',
        duration: '1 hora'
      },
      {
        step: 3,
        title: 'Exploración del Horizonte 2',
        description: 'Analizar zonas de innovación y conflicto entre H1 y H3.',
        duration: '1.5 horas'
      },
      {
        step: 4,
        title: 'Trayectorias de transición',
        description: 'Discutir interacciones y posibles caminos de cambio.',
        duration: '1 hora'
      }
    ],
    advantages: [
      'Facilita comprensión de transiciones',
      'Integra corto, mediano y largo plazo',
      'Visualiza dinámicas de cambio'
    ],
    limitations: [
      'Requiere facilitación experta',
      'Puede simplificar excesivamente realidades complejas',
      'No cuantifica velocidades de cambio'
    ],
    timeHorizon: '10-30 años',
    participants: '5-20 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Three Horizons: The Patterning of Hope',
        authors: ['B. Sharpe'],
        year: 2013
      },
      {
        type: 'article',
        title: 'Seeing in Multiple Horizons',
        authors: ['A. Curry', 'A. Hodgson'],
        year: 2008
      }
    ]
  },
  {
    id: 'sci-fi-prototyping',
    name: 'Sci-Fi Prototyping',
    icon: Rocket,
    complexity: 3,
    category: 'creative',
    description: 'Explorar futuros alternativos a través de relatos de ciencia ficción aplicados a problemas concretos de la sociedad o la tecnología.',
    objectives: [
      'Explorar innovaciones disruptivas',
      'Comunicar futuros complejos',
      'Generar narrativas vívidas',
      'Estimular imaginación tecnológica'
    ],
    applications: [
      'Innovación tecnológica',
      'Educación y comunicación de futuros',
      'Diseño de escenarios disruptivos'
    ],
    methodology: [
      {
        step: 1,
        title: 'Identificación de tema',
        description: 'Seleccionar la innovación o tendencia a explorar.',
        duration: '1 hora'
      },
      {
        step: 2,
        title: 'Desarrollo narrativo',
        description: 'Crear historias que describan transformaciones futuras.',
        duration: '2-3 semanas'
      },
      {
        step: 3,
        title: 'Revisión de plausibilidad',
        description: 'Evaluar la credibilidad científica y técnica del relato.',
        duration: '1 semana'
      },
      {
        step: 4,
        title: 'Análisis de implicaciones',
        description: 'Discutir consecuencias sociales, éticas y técnicas.',
        duration: '1-2 días'
      }
    ],
    advantages: [
      'Alta capacidad de comunicación',
      'Genera narrativas vívidas',
      'Estimula creatividad tecnológica'
    ],
    limitations: [
      'Riesgo de caer en ficción sin conexión con la realidad',
      'Requiere sistematización crítica posterior',
      'Puede ser percibido como poco serio'
    ],
    timeHorizon: '20-50 años',
    participants: '3-10 escritores o equipos multidisciplinarios',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Science Fiction Prototyping',
        authors: ['B. Johnson'],
        year: 2011
      },
      {
        type: 'book',
        title: 'Transforming the future',
        authors: ['R. Miller'],
        year: 2018
      }
    ]
  },
  {
    id: 'futures-literacy-labs',
    name: 'Futures Literacy Labs (UNESCO)',
    icon: GraduationCap,
    complexity: 4,
    category: 'participatory',
    description: 'Desarrollar la capacidad de las personas para usar el futuro como recurso en la toma de decisiones presentes.',
    objectives: [
      'Desarrollar alfabetización futura',
      'Empoderar a los participantes',
      'Generar aprendizaje transformador',
      'Confrontar percepciones de futuro'
    ],
    applications: [
      'Procesos educativos y comunitarios',
      'Políticas públicas',
      'Innovación social'
    ],
    methodology: [
      {
        step: 1,
        title: 'Diagnóstico de percepciones',
        description: 'Identificar supuestos implícitos sobre el futuro.',
        duration: '2 horas'
      },
      {
        step: 2,
        title: 'Ejercicios confrontacionales',
        description: 'Desafiar concepciones establecidas mediante dinámicas.',
        duration: '4 horas'
      },
      {
        step: 3,
        title: 'Co-creación de futuros',
        description: 'Construir nuevas formas de imaginar el porvenir.',
        duration: '3 horas'
      },
      {
        step: 4,
        title: 'Síntesis de aprendizajes',
        description: 'Consolidar nuevas capacidades desarrolladas.',
        duration: '1 hora'
      }
    ],
    advantages: [
      'Empodera a los participantes',
      'Genera aprendizaje transformador',
      'Metodología validada por UNESCO'
    ],
    limitations: [
      'Alta demanda logística',
      'Requiere facilitadores acreditados',
      'Proceso intensivo y complejo'
    ],
    timeHorizon: '10-50 años',
    participants: '20-40 participantes',
    bibliographicSources: [
      {
        type: 'institutional',
        title: 'Futures Literacy',
        institution: 'UNESCO',
        year: 2018
      },
      {
        type: 'book',
        title: 'Learning, the future, and complexity',
        authors: ['R. Miller'],
        year: 2015
      }
    ]
  },
  {
    id: 'future-personas',
    name: 'Future Personas',
    icon: UserSquare,
    complexity: 2,
    category: 'user-centered',
    description: 'Representar arquetipos de usuarios o ciudadanos futuros para explorar necesidades, comportamientos y aspiraciones.',
    objectives: [
      'Humanizar escenarios futuros',
      'Explorar necesidades futuras',
      'Facilitar comunicación con no expertos',
      'Centrar diseño en personas'
    ],
    applications: [
      'Diseño de políticas públicas centradas en ciudadanos futuros',
      'Innovación de servicios',
      'Planeación territorial'
    ],
    methodology: [
      {
        step: 1,
        title: 'Investigación de tendencias',
        description: 'Recopilar datos demográficos y proyecciones sociales.',
        duration: '1-2 semanas'
      },
      {
        step: 2,
        title: 'Construcción de arquetipos',
        description: 'Crear personajes ficticios basados en tendencias.',
        duration: '1 semana'
      },
      {
        step: 3,
        title: 'Desarrollo de narrativas',
        description: 'Describir comportamientos y necesidades de cada persona.',
        duration: '1 semana'
      },
      {
        step: 4,
        title: 'Validación y refinamiento',
        description: 'Revisar y ajustar personas con stakeholders.',
        duration: '2-3 días'
      }
    ],
    advantages: [
      'Humaniza los escenarios',
      'Facilita la comunicación con actores no expertos',
      'Genera empatía hacia futuros usuarios'
    ],
    limitations: [
      'Puede caer en estereotipos',
      'Requiere datos de calidad para su construcción',
      'Riesgo de simplificación excesiva'
    ],
    timeHorizon: '5-20 años',
    participants: '5-15 participantes',
    bibliographicSources: [
      {
        type: 'article',
        title: 'Advantages and disadvantages of scenario approaches',
        authors: ['D. Mietzner', 'G. Reger'],
        year: 2005
      },
      {
        type: 'guide',
        title: 'Foresight Manual',
        institution: 'UNDP',
        year: 2018
      }
    ]
  },
  {
    id: 'real-options-analysis',
    name: 'Real Options Analysis',
    icon: DollarSign,
    complexity: 5,
    category: 'analytical',
    description: 'Evaluar decisiones estratégicas en contextos de incertidumbre usando herramientas financieras adaptadas a políticas y planificación.',
    objectives: [
      'Cuantificar flexibilidad estratégica',
      'Gestionar incertidumbre',
      'Optimizar decisiones de inversión',
      'Valorar opciones futuras'
    ],
    applications: [
      'Inversiones en infraestructura',
      'Políticas de energía y cambio climático',
      'Gestión de proyectos de gran escala'
    ],
    methodology: [
      {
        step: 1,
        title: 'Identificación de opciones',
        description: 'Definir las opciones estratégicas disponibles.',
        duration: '1 semana'
      },
      {
        step: 2,
        title: 'Modelado financiero',
        description: 'Aplicar modelos de valoración de opciones reales.',
        duration: '2-3 semanas'
      },
      {
        step: 3,
        title: 'Análisis de sensibilidad',
        description: 'Evaluar cómo cambian los valores bajo diferentes escenarios.',
        duration: '1 semana'
      },
      {
        step: 4,
        title: 'Toma de decisiones',
        description: 'Seleccionar estrategias basadas en el análisis.',
        duration: '2-3 días'
      }
    ],
    advantages: [
      'Permite gestionar incertidumbre',
      'Cuantifica flexibilidad estratégica',
      'Base matemática rigurosa'
    ],
    limitations: [
      'Requiere conocimiento financiero avanzado',
      'Difícil de comunicar a actores no técnicos',
      'Asume comportamientos racionales'
    ],
    timeHorizon: '5-30 años',
    participants: 'Expertos analistas',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Investment under Uncertainty',
        authors: ['A. Dixit', 'R. Pindyck'],
        year: 1994
      },
      {
        type: 'institutional',
        title: 'Decision making under deep uncertainty',
        institution: 'OECD',
        year: 2015
      }
    ]
  },
  {
    id: 'robust-decision-making',
    name: 'Robust Decision Making (RDM)',
    icon: Shield,
    complexity: 5,
    category: 'analytical',
    description: 'Tomar decisiones que funcionen bajo una amplia gama de futuros posibles.',
    objectives: [
      'Reducir riesgo de fracaso',
      'Adaptarse a alta incertidumbre',
      'Evaluar múltiples estrategias',
      'Identificar decisiones robustas'
    ],
    applications: [
      'Políticas públicas de agua y energía',
      'Planificación climática',
      'Estrategias de largo plazo en gobiernos'
    ],
    methodology: [
      {
        step: 1,
        title: 'Definición de estrategias',
        description: 'Identificar opciones estratégicas a evaluar.',
        duration: '1 semana'
      },
      {
        step: 2,
        title: 'Generación de escenarios',
        description: 'Crear miles de escenarios mediante simulación.',
        duration: '2-3 semanas'
      },
      {
        step: 3,
        title: 'Evaluación de robustez',
        description: 'Analizar desempeño de estrategias en todos los escenarios.',
        duration: '1-2 semanas'
      },
      {
        step: 4,
        title: 'Selección de estrategias',
        description: 'Elegir las opciones más robustas.',
        duration: '1 semana'
      }
    ],
    advantages: [
      'Reduce riesgo de fracaso',
      'Se adapta a alta incertidumbre',
      'Metodología probada por RAND'
    ],
    limitations: [
      'Computacionalmente intensivo',
      'Requiere datos cuantitativos extensos',
      'Complejo de implementar'
    ],
    timeHorizon: '10-50 años',
    participants: 'Analistas expertos y decisores políticos',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Shaping the Next One Hundred Years',
        authors: ['R. Lempert', 'et al.'],
        year: 2003
      },
      {
        type: 'institutional',
        title: 'RDM Overview',
        institution: 'RAND Corporation',
        year: 2013
      }
    ]
  },
  {
    id: 'dynamic-adaptive-pathways',
    name: 'Dynamic Adaptive Policy Pathways (DAPP)',
    icon: Route,
    complexity: 4,
    category: 'adaptive',
    description: 'Diseñar políticas adaptativas que se ajustan a medida que cambian las condiciones futuras.',
    objectives: [
      'Incorporar flexibilidad en decisiones',
      'Reducir costos de decisiones erróneas',
      'Adaptarse a condiciones cambiantes',
      'Optimizar puntos de decisión'
    ],
    applications: [
      'Planificación de adaptación al cambio climático',
      'Gestión del agua y riesgos costeros',
      'Políticas urbanas resilientes'
    ],
    methodology: [
      {
        step: 1,
        title: 'Mapeo de rutas',
        description: 'Crear mapas que muestren trayectorias posibles.',
        duration: '2-3 semanas'
      },
      {
        step: 2,
        title: 'Identificación de puntos de decisión',
        description: 'Definir cuándo y cómo cambiar de estrategia.',
        duration: '1-2 semanas'
      },
      {
        step: 3,
        title: 'Diseño de señales de alerta',
        description: 'Establecer indicadores de cambio temprano.',
        duration: '1 semana'
      },
      {
        step: 4,
        title: 'Implementación adaptativa',
        description: 'Ejecutar con monitoreo y ajustes continuos.',
        duration: 'Continuo'
      }
    ],
    advantages: [
      'Incorpora flexibilidad',
      'Reduce costos de decisiones erróneas',
      'Permite adaptación continua'
    ],
    limitations: [
      'Requiere monitoreo constante',
      'Complejo de implementar en instituciones rígidas',
      'Demanda recursos continuos'
    ],
    timeHorizon: '20-100 años',
    participants: 'Equipos técnicos multidisciplinarios',
    bibliographicSources: [
      {
        type: 'article',
        title: 'Dynamic Adaptive Policy Pathways',
        authors: ['M. Haasnoot', 'et al.'],
        year: 2013
      },
      {
        type: 'institutional',
        title: 'Strategic Foresight',
        institution: 'OECD',
        year: 2019
      }
    ]
  },
  {
    id: 'dator-archetypes',
    name: 'Futuros Arquetípicos (Dator\'s Archetypes)',
    icon: Crown,
    complexity: 2,
    category: 'exploratory',
    description: 'Explorar cuatro arquetipos de futuro recurrentes: continuidad, colapso, disciplina y transformación.',
    objectives: [
      'Estructurar discusiones de escenarios',
      'Cubrir amplio rango de futuros',
      'Simplificar análisis complejo',
      'Facilitar pensamiento sistemático'
    ],
    applications: [
      'Diseño de escenarios exploratorios',
      'Educación en prospectiva',
      'Planificación territorial'
    ],
    methodology: [
      {
        step: 1,
        title: 'Presentación de arquetipos',
        description: 'Explicar los cuatro tipos de futuro de Dator.',
        duration: '1 hora'
      },
      {
        step: 2,
        title: 'Desarrollo por arquetipo',
        description: 'Crear narrativas específicas para cada tipo.',
        duration: '2 horas'
      },
      {
        step: 3,
        title: 'Análisis comparativo',
        description: 'Comparar implicaciones de cada arquetipo.',
        duration: '1 hora'
      },
      {
        step: 4,
        title: 'Síntesis integradora',
        description: 'Identificar elementos híbridos y conexiones.',
        duration: '30 minutos'
      }
    ],
    advantages: [
      'Sencillo de aplicar',
      'Cubre amplio rango de futuros',
      'Marco conceptual robusto'
    ],
    limitations: [
      'Puede simplificar excesivamente la complejidad',
      'No incluye matices híbridos',
      'Riesgo de encasillamiento'
    ],
    timeHorizon: '20-50 años',
    participants: '10-30 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Alternative Futures at the Manoa School',
        authors: ['J. Dator'],
        year: 2009
      },
      {
        type: 'book',
        title: 'Six pillars of futures studies',
        authors: ['S. Inayatullah'],
        year: 2007
      }
    ]
  },
  {
    id: 'gaming-futures',
    name: 'Gaming Futures (Serious Games)',
    icon: Gamepad2,
    complexity: 3,
    category: 'participatory',
    description: 'Simular futuros posibles mediante juegos de rol y dinámicas interactivas que involucran a múltiples actores.',
    objectives: [
      'Favorecer aprendizaje vivencial',
      'Generar alta participación',
      'Explorar decisiones colectivas',
      'Simular dinámicas complejas'
    ],
    applications: [
      'Planificación territorial participativa',
      'Políticas educativas y ambientales',
      'Entrenamiento organizacional'
    ],
    methodology: [
      {
        step: 1,
        title: 'Diseño del juego',
        description: 'Crear reglas, roles y mecánicas de simulación.',
        duration: '2-3 semanas'
      },
      {
        step: 2,
        title: 'Asignación de roles',
        description: 'Distribuir personajes y responsabilidades.',
        duration: '30 minutos'
      },
      {
        step: 3,
        title: 'Ejecución de la simulación',
        description: 'Desarrollar el juego con decisiones y consecuencias.',
        duration: '2-4 horas'
      },
      {
        step: 4,
        title: 'Reflexión final (debriefing)',
        description: 'Analizar aprendizajes y conexiones con la realidad.',
        duration: '1 hora'
      }
    ],
    advantages: [
      'Favorece el aprendizaje vivencial',
      'Alto nivel de participación',
      'Genera insights sobre dinámicas complejas'
    ],
    limitations: [
      'Diseño complejo',
      'Puede trivializar temas serios si no se estructura bien',
      'Requiere facilitación especializada'
    ],
    timeHorizon: '5-30 años',
    participants: '15-50 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'The Gaming of Policy and the Politics of Gaming',
        authors: ['I. Mayer'],
        year: 2009
      },
      {
        type: 'book',
        title: 'Serious Games',
        authors: ['C. Abt'],
        year: 1970
      }
    ]
  },
  {
    id: 'speculative-design',
    name: 'Design Futures / Speculative Design',
    icon: Brush,
    complexity: 3,
    category: 'speculative-design',
    description: 'Explorar futuros posibles a través de objetos, imágenes y prototipos que provocan reflexión crítica.',
    objectives: [
      'Concretar lo abstracto',
      'Generar alto impacto comunicativo',
      'Provocar reflexión crítica',
      'Cuestionar supuestos'
    ],
    applications: [
      'Innovación social',
      'Diseño de productos y servicios',
      'Exploración cultural de futuros'
    ],
    methodology: [
      {
        step: 1,
        title: 'Identificación de tema',
        description: 'Seleccionar el aspecto del futuro a explorar.',
        duration: '1-2 días'
      },
      {
        step: 2,
        title: 'Investigación especulativa',
        description: 'Explorar tendencias y posibilidades emergentes.',
        duration: '1 semana'
      },
      {
        step: 3,
        title: 'Creación de artefactos',
        description: 'Diseñar objetos, imágenes o prototipos del futuro.',
        duration: '2-3 semanas'
      },
      {
        step: 4,
        title: 'Exhibición y diálogo',
        description: 'Presentar creaciones y generar debate social.',
        duration: '1-2 días'
      }
    ],
    advantages: [
      'Concreta lo abstracto',
      'Genera alto impacto comunicativo',
      'Estimula imaginación'
    ],
    limitations: [
      'Puede percibirse como ficción artística',
      'Requiere facilitadores creativos',
      'Difícil de sistematizar resultados'
    ],
    timeHorizon: '10-50 años',
    participants: 'Equipos de diseño + stakeholders',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Speculative Everything',
        authors: ['A. Dunne', 'F. Raby'],
        year: 2013
      },
      {
        type: 'institutional',
        title: 'UNESCO Futures Literacy Labs',
        institution: 'UNESCO',
        year: 2018
      }
    ]
  },
  {
    id: 'futures-cartography',
    name: 'Futures Cartography',
    icon: Navigation,
    complexity: 2,
    category: 'visualization',
    description: 'Mapear de forma visual escenarios, tendencias e interrelaciones de futuros posibles.',
    objectives: [
      'Hacer visibles conexiones complejas',
      'Facilitar comunicación entre actores',
      'Visualizar relaciones sistémicas',
      'Estructurar información compleja'
    ],
    applications: [
      'Educación prospectiva',
      'Visualización estratégica',
      'Procesos participativos'
    ],
    methodology: [
      {
        step: 1,
        title: 'Identificación de elementos',
        description: 'Definir tendencias, actores y factores clave.',
        duration: '1-2 días'
      },
      {
        step: 2,
        title: 'Mapeo de relaciones',
        description: 'Establecer conexiones e interacciones.',
        duration: '2-3 días'
      },
      {
        step: 3,
        title: 'Diseño visual',
        description: 'Crear representaciones gráficas claras.',
        duration: '1 semana'
      },
      {
        step: 4,
        title: 'Validación participativa',
        description: 'Revisar mapas con stakeholders.',
        duration: '1-2 días'
      }
    ],
    advantages: [
      'Hace visibles conexiones complejas',
      'Facilita comunicación entre actores',
      'Herramienta versátil'
    ],
    limitations: [
      'Puede simplificar relaciones complejas',
      'Requiere diseño visual especializado',
      'Riesgo de sobrecarga visual'
    ],
    timeHorizon: 'Variable (corto a largo plazo)',
    participants: '5-20 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Transforming the Future',
        authors: ['R. Miller'],
        year: 2018
      },
      {
        type: 'book',
        title: 'Foresight Methodology',
        authors: ['R. Popper'],
        year: 2008
      }
    ]
  },
  {
    id: 'narrative-foresight',
    name: 'Narrative Foresight',
    icon: BookOpen,
    complexity: 2,
    category: 'cultural',
    description: 'Explorar y analizar futuros a través de narrativas y relatos que revelan imaginarios sociales.',
    objectives: [
      'Comprender marcos culturales',
      'Generar relatos accesibles y potentes',
      'Explorar imaginarios sociales',
      'Revelar supuestos culturales'
    ],
    applications: [
      'Investigación cultural',
      'Políticas públicas inclusivas',
      'Exploración de imaginarios sociales'
    ],
    methodology: [
      {
        step: 1,
        title: 'Recolección de narrativas',
        description: 'Compilar historias, cuentos y discursos existentes.',
        duration: '1-2 semanas'
      },
      {
        step: 2,
        title: 'Análisis de contenido',
        description: 'Identificar temas, valores y visiones de futuro.',
        duration: '1 semana'
      },
      {
        step: 3,
        title: 'Co-creación de relatos',
        description: 'Desarrollar nuevas narrativas participativamente.',
        duration: '2-3 días'
      },
      {
        step: 4,
        title: 'Validación cultural',
        description: 'Revisar relatos con comunidades relevantes.',
        duration: '1 semana'
      }
    ],
    advantages: [
      'Permite comprender marcos culturales',
      'Genera relatos accesibles y potentes',
      'Inclusivo culturalmente'
    ],
    limitations: [
      'Menor rigor cuantitativo',
      'Puede caer en subjetividad',
      'Difícil de generalizar'
    ],
    timeHorizon: '10-50 años',
    participants: 'Grupos diversos',
    bibliographicSources: [
      {
        type: 'article',
        title: 'Narrative Foresight',
        authors: ['A. Sools'],
        year: 2020
      },
      {
        type: 'book',
        title: 'Transforming the Future',
        authors: ['R. Miller'],
        year: 2018
      }
    ]
  },
  {
    id: 'wild-cards-analysis',
    name: 'Wild Cards Analysis',
    icon: AlertTriangle,
    complexity: 3,
    category: 'risk',
    description: 'Identificar eventos improbables pero de alto impacto que podrían alterar el futuro de manera disruptiva.',
    objectives: [
      'Fortalecer resiliencia',
      'Ampliar el rango de futuros considerados',
      'Prepararse para disrupciones',
      'Identificar cisnes negros'
    ],
    applications: [
      'Gestión de riesgos',
      'Planificación estratégica',
      'Exploración de disrupciones'
    ],
    methodology: [
      {
        step: 1,
        title: 'Brainstorming de eventos',
        description: 'Generar lista de eventos improbables pero impactantes.',
        duration: '2 horas'
      },
      {
        step: 2,
        title: 'Evaluación de probabilidad e impacto',
        description: 'Analizar cada evento según estos criterios.',
        duration: '1 día'
      },
      {
        step: 3,
        title: 'Desarrollo de escenarios',
        description: 'Crear narrativas detalladas de eventos seleccionados.',
        duration: '1 semana'
      },
      {
        step: 4,
        title: 'Estrategias de preparación',
        description: 'Diseñar respuestas y medidas preventivas.',
        duration: '2-3 días'
      }
    ],
    advantages: [
      'Fortalece resiliencia',
      'Amplía el rango de futuros considerados',
      'Mejora capacidad de respuesta'
    ],
    limitations: [
      'Difícil de cuantificar',
      'Puede generar miedo excesivo',
      'Sesgos en la selección de eventos'
    ],
    timeHorizon: '5-30 años',
    participants: '10-25 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Out of the Blue: How to Anticipate Big Future Surprises',
        authors: ['J. Petersen'],
        year: 1997
      },
      {
        type: 'guide',
        title: 'Foresight Manual',
        institution: 'UNDP',
        year: 2018
      }
    ]
  },
  {
    id: 'x-curve-analysis-new',
    name: 'X-Curve Analysis',
    icon: TrendingDown,
    complexity: 3,
    category: 'transition',
    description: 'Analizar dinámicas de transición entre sistemas que declinan y emergen.',
    objectives: [
      'Clarificar transiciones sistémicas',
      'Identificar oportunidades de intervención',
      'Visualizar cambios temporales',
      'Comprender dinámicas de sustitución'
    ],
    applications: [
      'Políticas de transición energética',
      'Innovación tecnológica',
      'Gestión de cambio institucional'
    ],
    methodology: [
      {
        step: 1,
        title: 'Identificación de sistemas',
        description: 'Definir el sistema en declive y el emergente.',
        duration: '1 día'
      },
      {
        step: 2,
        title: 'Mapeo temporal',
        description: 'Ubicar trayectorias en línea de tiempo.',
        duration: '2-3 días'
      },
      {
        step: 3,
        title: 'Análisis de intersección',
        description: 'Estudiar el momento de cruce entre ambas curvas.',
        duration: '1 día'
      },
      {
        step: 4,
        title: 'Identificación de intervenciones',
        description: 'Definir puntos clave para acelerar o moderar transición.',
        duration: '1-2 días'
      }
    ],
    advantages: [
      'Claridad visual de transiciones',
      'Identifica oportunidades de intervención',
      'Facilita comprensión de cambios'
    ],
    limitations: [
      'No cuantifica velocidades de cambio',
      'Puede ser demasiado simplista',
      'Asume transiciones lineales'
    ],
    timeHorizon: '10-30 años',
    participants: '5-15 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Transition Management',
        authors: ['D. Loorbach'],
        year: 2010
      },
      {
        type: 'book',
        title: 'Three Horizons',
        authors: ['B. Sharpe'],
        year: 2013
      }
    ]
  },
  {
    id: 'hands-on-futures',
    name: 'Hands-On Futures',
    icon: Handshake,
    complexity: 2,
    category: 'experiential',
    description: 'Vincular teoría y práctica mediante experiencias inmersivas y materiales tangibles.',
    objectives: [
      'Crear experiencias memorables',
      'Favorecer distintos estilos de aprendizaje',
      'Vincular teoría con práctica',
      'Generar comprensión táctil'
    ],
    applications: [
      'Educación prospectiva',
      'Procesos comunitarios',
      'Diseño colaborativo'
    ],
    methodology: [
      {
        step: 1,
        title: 'Diseño de actividades',
        description: 'Planificar experiencias manuales y prototipos.',
        duration: '1 semana'
      },
      {
        step: 2,
        title: 'Preparación de materiales',
        description: 'Reunir elementos tangibles para la actividad.',
        duration: '1-2 días'
      },
      {
        step: 3,
        title: 'Experiencia inmersiva',
        description: 'Desarrollar actividades prácticas con participantes.',
        duration: '2-4 horas'
      },
      {
        step: 4,
        title: 'Reflexión y síntesis',
        description: 'Conectar experiencias con conceptos teóricos.',
        duration: '1 hora'
      }
    ],
    advantages: [
      'Crea experiencias memorables',
      'Favorece distintos estilos de aprendizaje',
      'Alta participación'
    ],
    limitations: [
      'Puede requerir logística adicional',
      'Resultados difíciles de sistematizar',
      'Dependiente de facilitación'
    ],
    timeHorizon: 'Presente – corto plazo',
    participants: '10-30 participantes',
    bibliographicSources: [
      {
        type: 'institutional',
        title: 'UNESCO Futures Literacy Labs',
        institution: 'UNESCO',
        year: 2018
      },
      {
        type: 'book',
        title: 'Speculative Everything',
        authors: ['A. Dunne', 'F. Raby'],
        year: 2013
      }
    ]
  },
  {
    id: 'object-collage-prototyping',
    name: 'Object & Collage Prototyping',
    icon: Boxes,
    complexity: 2,
    category: 'creative',
    description: 'Construir prototipos visuales o materiales que representen escenarios de futuro.',
    objectives: [
      'Hacer tangibles ideas abstractas',
      'Estimular creatividad visual',
      'Facilitar comprensión colectiva',
      'Generar artefactos comunicativos'
    ],
    applications: [
      'Diseño participativo',
      'Visualización de escenarios',
      'Procesos creativos'
    ],
    methodology: [
      {
        step: 1,
        title: 'Conceptualización',
        description: 'Definir el escenario o idea a representar.',
        duration: '30 minutos'
      },
      {
        step: 2,
        title: 'Recolección de materiales',
        description: 'Reunir objetos, imágenes y elementos diversos.',
        duration: '30 minutos'
      },
      {
        step: 3,
        title: 'Construcción colaborativa',
        description: 'Crear prototipos usando collages y objetos.',
        duration: '1.5 horas'
      },
      {
        step: 4,
        title: 'Presentación e interpretación',
        description: 'Compartir creaciones y discutir significados.',
        duration: '45 minutos'
      }
    ],
    advantages: [
      'Accesible a todos los participantes',
      'Estimula creatividad visual',
      'Facilita expresión no verbal'
    ],
    limitations: [
      'Requiere facilitación artística',
      'Puede percibirse como informal',
      'Interpretación subjetiva'
    ],
    timeHorizon: 'Variable',
    participants: '5-20 participantes',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Speculative Everything',
        authors: ['A. Dunne', 'F. Raby'],
        year: 2013
      },
      {
        type: 'book',
        title: 'Transforming the Future',
        authors: ['R. Miller'],
        year: 2018
      }
    ]
  },
  {
    id: 'fmea-prospective',
    name: 'FMEA Prospectivo (Failure Mode and Effects Analysis)',
    icon: Wrench,
    complexity: 3,
    category: 'risk',
    description: 'Anticipar posibles fallas y sus efectos en sistemas futuros.',
    objectives: [
      'Prevenir errores tempranamente',
      'Aplicar metodología estructurada',
      'Identificar riesgos sistémicos',
      'Mejorar robustez de diseños'
    ],
    applications: [
      'Gestión de riesgos',
      'Diseño de políticas públicas',
      'Infraestructura crítica'
    ],
    methodology: [
      {
        step: 1,
        title: 'Identificación de componentes',
        description: 'Definir elementos clave del sistema a analizar.',
        duration: '1 día'
      },
      {
        step: 2,
        title: 'Análisis de modos de falla',
        description: 'Identificar formas en que cada componente puede fallar.',
        duration: '2-3 días'
      },
      {
        step: 3,
        title: 'Evaluación de efectos',
        description: 'Analizar consecuencias de cada tipo de falla.',
        duration: '1-2 días'
      },
      {
        step: 4,
        title: 'Medidas preventivas',
        description: 'Diseñar controles y acciones correctivas.',
        duration: '1 día'
      }
    ],
    advantages: [
      'Previene errores tempranamente',
      'Metodología estructurada',
      'Enfoque sistemático'
    ],
    limitations: [
      'Puede centrarse demasiado en lo técnico',
      'No siempre incorpora lo social o político',
      'Requiere expertise técnico'
    ],
    timeHorizon: 'Corto a mediano plazo',
    participants: 'Equipos técnicos multidisciplinarios',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Failure Mode and Effect Analysis',
        authors: ['D. Stamatis'],
        year: 2003
      },
      {
        type: 'article',
        title: 'Aplicaciones prospectivas recientes en ingeniería de políticas',
        year: 2020
      }
    ]
  },
  {
    id: 'crowdsourcing-prospective',
    name: 'Inteligencia Colectiva Online (Crowdsourcing Prospectivo)',
    icon: Megaphone,
    complexity: 3,
    category: 'digital',
    description: 'Aprovechar la inteligencia colectiva a través de plataformas digitales para anticipar tendencias y escenarios.',
    objectives: [
      'Ampliar base de conocimiento',
      'Generar alta legitimidad social',
      'Capturar diversidad de perspectivas',
      'Escalar participación ciudadana'
    ],
    applications: [
      'Consultas ciudadanas sobre el futuro',
      'Innovación abierta',
      'Prospectiva territorial participativa'
    ],
    methodology: [
      {
        step: 1,
        title: 'Diseño de plataforma',
        description: 'Crear herramientas digitales para la participación.',
        duration: '2-4 semanas'
      },
      {
        step: 2,
        title: 'Convocatoria masiva',
        description: 'Invitar participación ciudadana amplia.',
        duration: '1 semana'
      },
      {
        step: 3,
        title: 'Facilitación online',
        description: 'Moderar discusiones y recopilar contribuciones.',
        duration: '2-4 semanas'
      },
      {
        step: 4,
        title: 'Síntesis colaborativa',
        description: 'Procesar y consolidar insights colectivos.',
        duration: '1-2 semanas'
      }
    ],
    advantages: [
      'Amplia base de conocimiento',
      'Alta legitimidad social',
      'Escalabilidad digital'
    ],
    limitations: [
      'Difícil de moderar',
      'Puede sesgarse por grupos dominantes',
      'Calidad variable de contribuciones'
    ],
    timeHorizon: 'Variable',
    participants: 'Cientos o miles',
    bibliographicSources: [
      {
        type: 'book',
        title: 'The Wisdom of Crowds',
        authors: ['J. Surowiecki'],
        year: 2004
      },
      {
        type: 'institutional',
        title: 'Foresight & Crowdsourcing',
        institution: 'UNDP',
        year: 2021
      }
    ]
  }
];