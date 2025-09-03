-- Add remaining new prospective techniques from the Google Docs document

-- Spanish techniques
INSERT INTO techniques (
  technique_id, name, icon_name, complexity, category, description, objectives, applications, advantages, limitations, time_horizon, participants, methodology, bibliographic_sources, language
) VALUES 
-- 1. Time Series Analysis
('time-series-analysis', 'Análisis de Series de Tiempo', 'LineChart', 3, 'analytical', 
'Analizar datos históricos a intervalos regulares para identificar patrones, tendencias y proyecciones cuantitativas.',
ARRAY['Identificar patrones temporales', 'Detectar tendencias y ciclos', 'Hacer predicciones informadas', 'Analizar estacionalidad'],
ARRAY['Previsión cuantitativa', 'Análisis de demanda', 'Planificación de inventarios', 'Evaluación de tendencias'],
ARRAY['Predicciones basadas en datos', 'Útil para proyecciones corto plazo', 'Análisis sistemático', 'Base cuantitativa sólida'],
ARRAY['Asume continuidad del pasado', 'Requiere datos consistentes', 'Vulnerable a rupturas', 'Series históricas largas necesarias'],
'Corto plazo', 'No especificado',
'[{"step": 1, "title": "Recolección de Datos", "description": "Obtener series temporales completas", "duration": "1-2 semanas"}, {"step": 2, "title": "Análisis Exploratorio", "description": "Identificar patrones básicos", "duration": "3-5 días"}, {"step": 3, "title": "Selección de Modelo", "description": "Elegir método analítico apropiado", "duration": "1 semana"}, {"step": 4, "title": "Aplicación y Diagnóstico", "description": "Ejecutar análisis y validar", "duration": "1 semana"}, {"step": 5, "title": "Proyección e Interpretación", "description": "Generar predicciones y conclusiones", "duration": "3-5 días"}]'::jsonb,
'[{"type": "book", "title": "Time Series Analysis and Forecasting", "authors": ["Bowerman", "O\'Connell"], "year": 2003}]'::jsonb, 'es'),

-- 2. Regression Analysis  
('regression-analysis', 'Análisis de Regresión', 'Calculator', 3, 'analytical',
'Identificar relaciones entre variables dependientes e independientes para predecir valores desconocidos.',
ARRAY['Identificar relaciones causales', 'Predecir valores futuros', 'Evaluar factores explicativos', 'Cuantificar influencias'],
ARRAY['Predicción de emisiones', 'Análisis económico', 'Evaluación de políticas', 'Modelado predictivo'],
ARRAY['Determina variables relevantes', 'Cuantifica relaciones', 'Permite predicciones', 'Base estadística rigurosa'],
ARRAY['Requiere linealidad', 'Datos aleatorios necesarios', 'Evitar colinealidad', 'Calidad de datos crítica'],
'No específico', 'No especificado',
'[{"step": 1, "title": "Definición de Variables", "description": "Identificar dependientes e independientes", "duration": "1 semana"}, {"step": 2, "title": "Recolección de Datos", "description": "Obtener datos de calidad", "duration": "2-3 semanas"}, {"step": 3, "title": "Análisis Exploratorio", "description": "Evaluar distribuciones y relaciones", "duration": "1 semana"}, {"step": 4, "title": "Construcción del Modelo", "description": "Aplicar técnicas de regresión", "duration": "1-2 semanas"}, {"step": 5, "title": "Validación y Predicción", "description": "Verificar modelo y proyectar", "duration": "1 semana"}]'::jsonb,
'[{"type": "book", "title": "Applied Linear Regression", "authors": ["Sanford Weisberg"], "year": 2005}]'::jsonb, 'es'),

-- 3. MICMAC Structural Analysis
('structural-analysis-micmac', 'Análisis Estructural (MICMAC)', 'Network', 4, 'structural',
'Identificar variables clave influyentes y dependientes esenciales para la evolución de un sistema mediante análisis de impactos cruzados.',
ARRAY['Identificar variables clave', 'Clasificar por influencia/dependencia', 'Revelar relaciones indirectas', 'Estructurar reflexión colectiva'],
ARRAY['Diagnóstico prospectivo', 'Construcción de base analítica', 'Planificación estratégica', 'Análisis de sistemas complejos'],
ARRAY['Estimula reflexión grupal', 'Clasifica variables sistemáticamente', 'Revela relaciones ocultas', 'Marco estructurado de análisis'],
ARRAY['Análisis subjetivo', 'No representa realidad exacta', 'Requiere expertise grupal', 'Interpretación requiere cuidado'],
'No específico', 'Grupo de trabajo',
'[{"step": 1, "title": "Listado de Variables", "description": "Identificar variables del sistema", "duration": "1-2 semanas"}, {"step": 2, "title": "Definición de Variables", "description": "Describir cada variable claramente", "duration": "1 semana"}, {"step": 3, "title": "Llenado de Matriz", "description": "Evaluar influencias cruzadas", "duration": "2-3 semanas"}, {"step": 4, "title": "Identificación de Variables Clave", "description": "Analizar influencia y dependencia", "duration": "1 semana"}, {"step": 5, "title": "Interpretación de Resultados", "description": "Extraer conclusiones estratégicas", "duration": "1 semana"}]'::jsonb,
'[{"type": "methodological", "title": "Análisis Estructural MICMAC", "authors": ["Michel Godet"], "institution": "LIPSOR", "year": 2000}]'::jsonb, 'es'),

-- 4. MACTOR Method
('mactor-method', 'Método MACTOR', 'Users2', 4, 'analytical',
'Determinar motivaciones, conflictos y posibles alianzas estratégicas entre actores clave del sistema.',
ARRAY['Analizar juego de actores', 'Identificar conflictos y alianzas', 'Evaluar relaciones de poder', 'Construir estrategias de influencia'],
ARRAY['Planificación empresarial', 'Política pública', 'Gestión de stakeholders', 'Análisis de viabilidad'],
ARRAY['Analiza complejidad de actores', 'Prevé conflictos potenciales', 'Facilita construcción de alianzas', 'Orienta plan de acción'],
ARRAY['Requiere información detallada', 'Análisis puede ser complejo', 'Dinámicas pueden cambiar', 'Subjetividad en evaluaciones'],
'No específico', 'No especificado',
'[{"step": 1, "title": "Identificación de Actores", "description": "Listar actores relevantes del sistema", "duration": "1 semana"}, {"step": 2, "title": "Identificación de Objetivos", "description": "Definir objetivos estratégicos", "duration": "1 semana"}, {"step": 3, "title": "Matriz de Influencias", "description": "Evaluar influencias entre actores", "duration": "2 semanas"}, {"step": 4, "title": "Matriz de Posiciones", "description": "Evaluar posiciones ante objetivos", "duration": "1-2 semanas"}, {"step": 5, "title": "Análisis de Convergencias", "description": "Identificar alianzas y conflictos", "duration": "1 semana"}]'::jsonb,
'[{"type": "methodological", "title": "Método MACTOR", "authors": ["Michel Godet", "François Bourse"], "institution": "LIPSOR", "year": 2005}]'::jsonb, 'es'),

-- 5. Focus Groups
('focus-groups', 'Grupos Focales', 'MessageSquare', 3, 'participatory',
'Explorar percepciones y actitudes de un grupo de participantes sobre un tema específico mediante entrevista grupal dirigida.',
ARRAY['Explorar percepciones grupales', 'Generar información cualitativa', 'Entender motivaciones', 'Evaluar reacciones'],
ARRAY['Investigación de mercado', 'Evaluación de políticas', 'Desarrollo de productos', 'Análisis de opinión pública'],
ARRAY['Rica fuente de información', 'Interacción genera ideas', 'Comprensión profunda', 'Feedback inmediato'],
ARRAY['Dinámicas pueden sesgar', 'Personalidades dominantes', 'Transcripción compleja', 'Análisis interpretativo'],
'No específico', 'Moderador + participantes',
'[{"step": 1, "title": "Diseño del Estudio", "description": "Definir objetivos y guía de discusión", "duration": "1 semana"}, {"step": 2, "title": "Reclutamiento", "description": "Seleccionar participantes representativos", "duration": "1-2 semanas"}, {"step": 3, "title": "Conducción de Sesiones", "description": "Facilitar discusiones grupales", "duration": "1-3 días"}, {"step": 4, "title": "Transcripción", "description": "Documentar discusiones completas", "duration": "1 semana"}, {"step": 5, "title": "Análisis Temático", "description": "Identificar patrones y temas", "duration": "2-3 semanas"}]'::jsonb,
'[{"type": "book", "title": "Focus Groups: A Practical Guide", "authors": ["Richard Krueger"], "year": 2000}]'::jsonb, 'es'),

-- English versions
('time-series-analysis-en', 'Time Series Analysis', 'LineChart', 3, 'analytical', 
'Analyze historical data at regular intervals to identify patterns, trends and quantitative projections.',
ARRAY['Identify temporal patterns', 'Detect trends and cycles', 'Make informed predictions', 'Analyze seasonality'],
ARRAY['Quantitative forecasting', 'Demand analysis', 'Inventory planning', 'Trend evaluation'],
ARRAY['Data-based predictions', 'Useful for short-term projections', 'Systematic analysis', 'Solid quantitative foundation'],
ARRAY['Assumes past continuity', 'Requires consistent data', 'Vulnerable to breaks', 'Long historical series needed'],
'Short term', 'Not specified',
'[{"step": 1, "title": "Data Collection", "description": "Obtain complete time series", "duration": "1-2 weeks"}, {"step": 2, "title": "Exploratory Analysis", "description": "Identify basic patterns", "duration": "3-5 days"}, {"step": 3, "title": "Model Selection", "description": "Choose appropriate analytical method", "duration": "1 week"}, {"step": 4, "title": "Application and Diagnosis", "description": "Execute analysis and validate", "duration": "1 week"}, {"step": 5, "title": "Projection and Interpretation", "description": "Generate predictions and conclusions", "duration": "3-5 days"}]'::jsonb,
'[{"type": "book", "title": "Time Series Analysis and Forecasting", "authors": ["Bowerman", "O\'Connell"], "year": 2003}]'::jsonb, 'en'),

('regression-analysis-en', 'Regression Analysis', 'Calculator', 3, 'analytical',
'Identify relationships between dependent and independent variables to predict unknown values.',
ARRAY['Identify causal relationships', 'Predict future values', 'Evaluate explanatory factors', 'Quantify influences'],
ARRAY['Emissions prediction', 'Economic analysis', 'Policy evaluation', 'Predictive modeling'],
ARRAY['Determines relevant variables', 'Quantifies relationships', 'Enables predictions', 'Rigorous statistical foundation'],
ARRAY['Requires linearity', 'Random data necessary', 'Avoid collinearity', 'Data quality critical'],
'Not specific', 'Not specified',
'[{"step": 1, "title": "Variable Definition", "description": "Identify dependent and independent", "duration": "1 week"}, {"step": 2, "title": "Data Collection", "description": "Obtain quality data", "duration": "2-3 weeks"}, {"step": 3, "title": "Exploratory Analysis", "description": "Evaluate distributions and relationships", "duration": "1 week"}, {"step": 4, "title": "Model Construction", "description": "Apply regression techniques", "duration": "1-2 weeks"}, {"step": 5, "title": "Validation and Prediction", "description": "Verify model and project", "duration": "1 week"}]'::jsonb,
'[{"type": "book", "title": "Applied Linear Regression", "authors": ["Sanford Weisberg"], "year": 2005}]'::jsonb, 'en'),

('structural-analysis-micmac-en', 'Structural Analysis (MICMAC)', 'Network', 4, 'structural',
'Identify key influential and dependent variables essential for system evolution through cross-impact analysis.',
ARRAY['Identify key variables', 'Classify by influence/dependence', 'Reveal indirect relationships', 'Structure collective reflection'],
ARRAY['Prospective diagnosis', 'Analytical base construction', 'Strategic planning', 'Complex systems analysis'],
ARRAY['Stimulates group reflection', 'Systematically classifies variables', 'Reveals hidden relationships', 'Structured analysis framework'],
ARRAY['Subjective analysis', 'Does not represent exact reality', 'Requires group expertise', 'Interpretation requires care'],
'Not specific', 'Working group',
'[{"step": 1, "title": "Variable Listing", "description": "Identify system variables", "duration": "1-2 weeks"}, {"step": 2, "title": "Variable Definition", "description": "Describe each variable clearly", "duration": "1 week"}, {"step": 3, "title": "Matrix Filling", "description": "Evaluate cross influences", "duration": "2-3 weeks"}, {"step": 4, "title": "Key Variable Identification", "description": "Analyze influence and dependence", "duration": "1 week"}, {"step": 5, "title": "Results Interpretation", "description": "Extract strategic conclusions", "duration": "1 week"}]'::jsonb,
'[{"type": "methodological", "title": "MICMAC Structural Analysis", "authors": ["Michel Godet"], "institution": "LIPSOR", "year": 2000}]'::jsonb, 'en'),

('mactor-method-en', 'MACTOR Method', 'Users2', 4, 'analytical',
'Determine motivations, conflicts and possible strategic alliances between key system actors.',
ARRAY['Analyze actor dynamics', 'Identify conflicts and alliances', 'Evaluate power relationships', 'Build influence strategies'],
ARRAY['Business planning', 'Public policy', 'Stakeholder management', 'Viability analysis'],
ARRAY['Analyzes actor complexity', 'Foresees potential conflicts', 'Facilitates alliance building', 'Guides action plan'],
ARRAY['Requires detailed information', 'Analysis can be complex', 'Dynamics may change', 'Subjectivity in evaluations'],
'Not specific', 'Not specified',
'[{"step": 1, "title": "Actor Identification", "description": "List relevant system actors", "duration": "1 week"}, {"step": 2, "title": "Objective Identification", "description": "Define strategic objectives", "duration": "1 week"}, {"step": 3, "title": "Influence Matrix", "description": "Evaluate influences between actors", "duration": "2 weeks"}, {"step": 4, "title": "Position Matrix", "description": "Evaluate positions on objectives", "duration": "1-2 weeks"}, {"step": 5, "title": "Convergence Analysis", "description": "Identify alliances and conflicts", "duration": "1 week"}]'::jsonb,
'[{"type": "methodological", "title": "MACTOR Method", "authors": ["Michel Godet", "François Bourse"], "institution": "LIPSOR", "year": 2005}]'::jsonb, 'en'),

('focus-groups-en', 'Focus Groups', 'MessageSquare', 3, 'participatory',
'Explore perceptions and attitudes of a group of participants on a specific topic through guided group interview.',
ARRAY['Explore group perceptions', 'Generate qualitative information', 'Understand motivations', 'Evaluate reactions'],
ARRAY['Market research', 'Policy evaluation', 'Product development', 'Public opinion analysis'],
ARRAY['Rich information source', 'Interaction generates ideas', 'Deep understanding', 'Immediate feedback'],
ARRAY['Dynamics can bias', 'Dominant personalities', 'Complex transcription', 'Interpretative analysis'],
'Not specific', 'Moderator + participants',
'[{"step": 1, "title": "Study Design", "description": "Define objectives and discussion guide", "duration": "1 week"}, {"step": 2, "title": "Recruitment", "description": "Select representative participants", "duration": "1-2 weeks"}, {"step": 3, "title": "Session Facilitation", "description": "Facilitate group discussions", "duration": "1-3 days"}, {"step": 4, "title": "Transcription", "description": "Document complete discussions", "duration": "1 week"}, {"step": 5, "title": "Thematic Analysis", "description": "Identify patterns and themes", "duration": "2-3 weeks"}]'::jsonb,
'[{"type": "book", "title": "Focus Groups: A Practical Guide", "authors": ["Richard Krueger"], "year": 2000}]'::jsonb, 'en');