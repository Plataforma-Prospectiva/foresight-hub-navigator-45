-- Add new prospective techniques in Spanish and English

-- Spanish techniques
INSERT INTO techniques (
  technique_id, name, icon_name, complexity, category, description, objectives, applications, advantages, limitations, time_horizon, participants, methodology, bibliographic_sources, language
) VALUES 
-- 1. Environmental Analysis (STEEPV)
('environmental-analysis', 'Análisis de Entornos (STEEPV)', 'Globe', 2, 'analytical', 
'Examinar y describir el entorno para identificar la influencia de factores sociales, tecnológicos, económicos, ecológicos, políticos y de valores.',
ARRAY['Identificar factores de cambio relevantes', 'Evaluar influencias externas', 'Estructurar el análisis del entorno', 'Crear base para estudios prospectivos'],
ARRAY['Etapa inicial de estudios prospectivos', 'Análisis estratégico organizacional', 'Evaluación de contextos', 'Planificación sectorial'],
ARRAY['Identificación amplia de factores', 'Enfoque sistemático y estructurado', 'Base sólida para análisis posteriores', 'Marco comprehensivo de análisis'],
ARRAY['Requiere expertise multidisciplinario', 'Puede generar exceso de información', 'Análisis subjetivo', 'Requiere actualización constante'],
'No específico', 'No especificado', 
'[{"step": 1, "title": "Definición del Sistema", "description": "Establecer límites y alcance del análisis", "duration": "1 semana"}, {"step": 2, "title": "Identificación de Factores", "description": "Identificar factores STEEPV relevantes", "duration": "2-3 semanas"}, {"step": 3, "title": "Evaluación de Impactos", "description": "Evaluar influencia de cada factor", "duration": "1-2 semanas"}, {"step": 4, "title": "Síntesis de Resultados", "description": "Consolidar hallazgos y conclusiones", "duration": "1 semana"}]'::jsonb,
'[{"type": "methodological", "title": "Análisis STEEPV Metodología", "authors": ["LISA Institute"], "year": 2020}]'::jsonb, 'es'),

-- 2. Environmental Monitoring
('environmental-monitoring', 'Monitoreo del Entorno', 'Radar', 3, 'analytical',
'Seguimiento continuo de eventos científicos, socioeconómicos y tendencias importantes para una organización.',
ARRAY['Identificar eventos relevantes', 'Proporcionar alerta temprana', 'Monitorear cambios del entorno', 'Informar toma de decisiones'],
ARRAY['Inteligencia competitiva', 'Vigilancia tecnológica', 'Seguimiento de políticas', 'Análisis de mercados'],
ARRAY['Gran cantidad de información', 'Capacidad de alerta temprana', 'Proceso continuo', 'Múltiples fuentes'],
ARRAY['Información del pasado y presente', 'Requiere análisis experto', 'Posible sobrecarga informativa', 'Necesita filtros efectivos'],
'Proceso continuo', '2-5 participantes',
'[{"step": 1, "title": "Definición de Ámbitos", "description": "Establecer temas y fuentes a monitorear", "duration": "1 semana"}, {"step": 2, "title": "Configuración del Sistema", "description": "Establecer herramientas y procesos", "duration": "2 semanas"}, {"step": 3, "title": "Recolección Continua", "description": "Monitoreo sistemático de fuentes", "duration": "Continuo"}, {"step": 4, "title": "Análisis y Síntesis", "description": "Procesar y analizar información", "duration": "Semanal"}, {"step": 5, "title": "Reportes de Alerta", "description": "Comunicar hallazgos relevantes", "duration": "Según necesidad"}]'::jsonb,
'[{"type": "book", "title": "Competitive Intelligence", "authors": ["Larry Kahaner"], "year": 1997}]'::jsonb, 'es'),

-- 3. Literature Review
('literature-review', 'Revisión Bibliográfica', 'BookOpen', 2, 'preparation',
'Examen sistemático de la literatura existente y datos estadísticos sobre el tema de estudio.',
ARRAY['Obtener información relevante', 'Establecer base de conocimiento', 'Identificar antecedentes', 'Desarrollar marco teórico'],
ARRAY['Fase inicial de estudios', 'Investigación académica', 'Desarrollo de propuestas', 'Análisis de antecedentes'],
ARRAY['Base sólida de conocimiento', 'Punto de partida sistemático', 'Identificación de brechas', 'Fundamento teórico'],
ARRAY['Limitado a información existente', 'Puede ser extenso', 'Requiere habilidades de síntesis', 'Información puede estar desactualizada'],
'No específico', 'No especificado',
'[{"step": 1, "title": "Definición de Criterios", "description": "Establecer parámetros de búsqueda", "duration": "3-5 días"}, {"step": 2, "title": "Búsqueda Sistemática", "description": "Recopilar fuentes relevantes", "duration": "1-3 semanas"}, {"step": 3, "title": "Evaluación de Fuentes", "description": "Valorar calidad y relevancia", "duration": "1-2 semanas"}, {"step": 4, "title": "Síntesis y Análisis", "description": "Integrar hallazgos principales", "duration": "1-2 semanas"}, {"step": 5, "title": "Reporte Final", "description": "Documentar resultados", "duration": "1 semana"}]'::jsonb,
'[{"type": "book", "title": "Systematic Reviews and Meta-Analysis", "authors": ["Mark Petticrew", "Helen Roberts"], "year": 2006}]'::jsonb, 'es'),

-- 4. Benchmarking
('benchmarking', 'Benchmarking', 'BarChart3', 2, 'analytical',
'Evaluar productos, servicios y procesos de organizaciones líderes para realizar mejoras.',
ARRAY['Identificar mejores prácticas', 'Evaluar desempeño relativo', 'Generar ideas de mejora', 'Establecer objetivos realistas'],
ARRAY['Mejora organizacional', 'Análisis competitivo', 'Desarrollo de estrategias', 'Evaluación de procesos'],
ARRAY['Reduce incertidumbre', 'Identifica oportunidades', 'Basado en práctica real', 'Orienta mejoras concretas'],
ARRAY['Requiere acceso a información', 'Contextos pueden diferir', 'Análisis puede ser superficial', 'Requiere adaptación local'],
'No específico', 'No especificado',
'[{"step": 1, "title": "Definición de Objetivos", "description": "Establecer qué se va a comparar", "duration": "1 semana"}, {"step": 2, "title": "Selección de Referencias", "description": "Identificar organizaciones modelo", "duration": "1-2 semanas"}, {"step": 3, "title": "Recolección de Datos", "description": "Obtener información comparativa", "duration": "2-4 semanas"}, {"step": 4, "title": "Análisis Comparativo", "description": "Evaluar diferencias y brechas", "duration": "1-2 semanas"}, {"step": 5, "title": "Plan de Mejoras", "description": "Desarrollar acciones de mejora", "duration": "1-2 semanas"}]'::jsonb,
'[{"type": "book", "title": "Benchmarking for Best Practices", "authors": ["Robert Camp"], "year": 1995}]'::jsonb, 'es'),

-- 5. Regnier Abacus
('regnier-abacus', 'Ábaco de Régnier', 'Palette', 2, 'group-dynamics',
'Medir el grado de acuerdo o desacuerdo de un grupo sobre proposiciones mediante escala cromática.',
ARRAY['Medir consenso grupal', 'Reducir incertidumbre', 'Facilitar debate estructurado', 'Visualizar opiniones divergentes'],
ARRAY['Consulta a expertos', 'Talleres de decisión', 'Evaluación de propuestas', 'Construcción de consenso'],
ARRAY['Eficaz y rápido', 'Elimina influencia dominante', 'Permite expresión de divergencias', 'Visual e intuitivo'],
ARRAY['Método poco conocido', 'Puede restar protagonismo', 'Requiere facilitación experta', 'No profundiza en razones'],
'Presente/inmediato', '1 facilitador + 8-30 participantes',
'[{"step": 1, "title": "Preparación de Proposiciones", "description": "Definir statements a evaluar", "duration": "1 día"}, {"step": 2, "title": "Explicación del Método", "description": "Presentar escala cromática", "duration": "30 min"}, {"step": 3, "title": "Votación Anónima", "description": "Recoger opiniones con colores", "duration": "30-60 min"}, {"step": 4, "title": "Análisis de Resultados", "description": "Visualizar patrones de consenso", "duration": "30 min"}, {"step": 5, "title": "Debate Estructurado", "description": "Discutir áreas de disenso", "duration": "1-2 horas"}]'::jsonb,
'[{"type": "methodological", "title": "El Ábaco de Régnier", "authors": ["François Régnier"], "year": 1989}]'::jsonb, 'es'),

-- English versions
('environmental-analysis-en', 'Environmental Analysis (STEEPV)', 'Globe', 2, 'analytical', 
'Examine and describe the environment to identify the influence of social, technological, economic, ecological, political and values factors.',
ARRAY['Identify relevant change factors', 'Evaluate external influences', 'Structure environmental analysis', 'Create foundation for prospective studies'],
ARRAY['Initial stage of prospective studies', 'Organizational strategic analysis', 'Context evaluation', 'Sectoral planning'],
ARRAY['Broad factor identification', 'Systematic and structured approach', 'Solid foundation for further analysis', 'Comprehensive analytical framework'],
ARRAY['Requires multidisciplinary expertise', 'May generate information overload', 'Subjective analysis', 'Requires constant updating'],
'Not specific', 'Not specified', 
'[{"step": 1, "title": "System Definition", "description": "Establish boundaries and scope of analysis", "duration": "1 week"}, {"step": 2, "title": "Factor Identification", "description": "Identify relevant STEEPV factors", "duration": "2-3 weeks"}, {"step": 3, "title": "Impact Assessment", "description": "Evaluate influence of each factor", "duration": "1-2 weeks"}, {"step": 4, "title": "Results Synthesis", "description": "Consolidate findings and conclusions", "duration": "1 week"}]'::jsonb,
'[{"type": "methodological", "title": "STEEPV Analysis Methodology", "authors": ["LISA Institute"], "year": 2020}]'::jsonb, 'en'),

('environmental-monitoring-en', 'Environmental Monitoring', 'Radar', 3, 'analytical',
'Continuous tracking of scientific, socioeconomic events and trends important to an organization.',
ARRAY['Identify relevant events', 'Provide early warning', 'Monitor environmental changes', 'Inform decision making'],
ARRAY['Competitive intelligence', 'Technology monitoring', 'Policy tracking', 'Market analysis'],
ARRAY['Large amount of information', 'Early warning capability', 'Continuous process', 'Multiple sources'],
ARRAY['Past and present information', 'Requires expert analysis', 'Possible information overload', 'Needs effective filters'],
'Continuous process', '2-5 participants',
'[{"step": 1, "title": "Scope Definition", "description": "Establish topics and sources to monitor", "duration": "1 week"}, {"step": 2, "title": "System Setup", "description": "Establish tools and processes", "duration": "2 weeks"}, {"step": 3, "title": "Continuous Collection", "description": "Systematic monitoring of sources", "duration": "Continuous"}, {"step": 4, "title": "Analysis and Synthesis", "description": "Process and analyze information", "duration": "Weekly"}, {"step": 5, "title": "Alert Reports", "description": "Communicate relevant findings", "duration": "As needed"}]'::jsonb,
'[{"type": "book", "title": "Competitive Intelligence", "authors": ["Larry Kahaner"], "year": 1997}]'::jsonb, 'en'),

('literature-review-en', 'Literature Review', 'BookOpen', 2, 'preparation',
'Systematic examination of existing literature and statistical data on the study topic.',
ARRAY['Obtain relevant information', 'Establish knowledge base', 'Identify background', 'Develop theoretical framework'],
ARRAY['Initial phase of studies', 'Academic research', 'Proposal development', 'Background analysis'],
ARRAY['Solid knowledge foundation', 'Systematic starting point', 'Gap identification', 'Theoretical foundation'],
ARRAY['Limited to existing information', 'Can be extensive', 'Requires synthesis skills', 'Information may be outdated'],
'Not specific', 'Not specified',
'[{"step": 1, "title": "Criteria Definition", "description": "Establish search parameters", "duration": "3-5 days"}, {"step": 2, "title": "Systematic Search", "description": "Collect relevant sources", "duration": "1-3 weeks"}, {"step": 3, "title": "Source Evaluation", "description": "Assess quality and relevance", "duration": "1-2 weeks"}, {"step": 4, "title": "Synthesis and Analysis", "description": "Integrate main findings", "duration": "1-2 weeks"}, {"step": 5, "title": "Final Report", "description": "Document results", "duration": "1 week"}]'::jsonb,
'[{"type": "book", "title": "Systematic Reviews and Meta-Analysis", "authors": ["Mark Petticrew", "Helen Roberts"], "year": 2006}]'::jsonb, 'en'),

('benchmarking-en', 'Benchmarking', 'BarChart3', 2, 'analytical',
'Evaluate products, services and processes of leading organizations to make improvements.',
ARRAY['Identify best practices', 'Evaluate relative performance', 'Generate improvement ideas', 'Establish realistic goals'],
ARRAY['Organizational improvement', 'Competitive analysis', 'Strategy development', 'Process evaluation'],
ARRAY['Reduces uncertainty', 'Identifies opportunities', 'Based on real practice', 'Guides concrete improvements'],
ARRAY['Requires access to information', 'Contexts may differ', 'Analysis can be superficial', 'Requires local adaptation'],
'Not specific', 'Not specified',
'[{"step": 1, "title": "Objective Definition", "description": "Establish what will be compared", "duration": "1 week"}, {"step": 2, "title": "Reference Selection", "description": "Identify model organizations", "duration": "1-2 weeks"}, {"step": 3, "title": "Data Collection", "description": "Obtain comparative information", "duration": "2-4 weeks"}, {"step": 4, "title": "Comparative Analysis", "description": "Evaluate differences and gaps", "duration": "1-2 weeks"}, {"step": 5, "title": "Improvement Plan", "description": "Develop improvement actions", "duration": "1-2 weeks"}]'::jsonb,
'[{"type": "book", "title": "Benchmarking for Best Practices", "authors": ["Robert Camp"], "year": 1995}]'::jsonb, 'en'),

('regnier-abacus-en', 'Regnier Abacus', 'Palette', 2, 'group-dynamics',
'Measure the degree of agreement or disagreement of a group on propositions using a chromatic scale.',
ARRAY['Measure group consensus', 'Reduce uncertainty', 'Facilitate structured debate', 'Visualize divergent opinions'],
ARRAY['Expert consultation', 'Decision workshops', 'Proposal evaluation', 'Consensus building'],
ARRAY['Effective and fast', 'Eliminates dominant influence', 'Allows expression of divergences', 'Visual and intuitive'],
ARRAY['Little-known method', 'May reduce prominence', 'Requires expert facilitation', 'Does not deepen reasoning'],
'Present/immediate', '1 facilitator + 8-30 participants',
'[{"step": 1, "title": "Proposition Preparation", "description": "Define statements to evaluate", "duration": "1 day"}, {"step": 2, "title": "Method Explanation", "description": "Present chromatic scale", "duration": "30 min"}, {"step": 3, "title": "Anonymous Voting", "description": "Collect opinions with colors", "duration": "30-60 min"}, {"step": 4, "title": "Results Analysis", "description": "Visualize consensus patterns", "duration": "30 min"}, {"step": 5, "title": "Structured Debate", "description": "Discuss areas of dissent", "duration": "1-2 hours"}]'::jsonb,
'[{"type": "methodological", "title": "The Regnier Abacus", "authors": ["François Régnier"], "year": 1989}]'::jsonb, 'en');