-- Add English techniques to the database
-- First, let's add some that might be missing in English

-- Insert all English techniques (if they don't already exist)
INSERT INTO techniques (
  id, name, icon_name, complexity, category, description, objectives, applications, methodology, 
  advantages, limitations, time_horizon, participants, bibliographic_sources, language, is_active
) VALUES 

-- Scenario Planning
('scenario-planning-en', 'Scenario Planning', 'Map', 4, 'exploratory', 
'Systematic method for creating multiple plausible visions of the future to improve decision-making under uncertainty.',
'["Develop multiple plausible futures", "Explore key uncertainties and implications", "Improve strategic planning", "Prepare for different possible futures"]',
'["Business strategic planning", "Public policy and government planning", "Risk management", "Product and service development"]',
'[{"step": 1, "title": "Problem Definition", "description": "Clarify focal question and establish time horizon for study.", "duration": "1 week"}, {"step": 2, "title": "Driving Forces Identification", "description": "Identify and analyze key factors influencing system future.", "duration": "2-3 weeks"}, {"step": 3, "title": "Uncertainty Analysis", "description": "Evaluate uncertainty level and impact of each driving force.", "duration": "1-2 weeks"}, {"step": 4, "title": "Scenario Construction", "description": "Develop coherent narratives combining different states of driving forces.", "duration": "2-3 weeks"}, {"step": 5, "title": "Implications Analysis", "description": "Evaluate implications of each scenario for decision-making.", "duration": "1-2 weeks"}]',
'["Addresses multiple possible futures", "Improves preparedness for uncertainty", "Facilitates creative thinking", "Provides framework for strategy evaluation"]',
'["Intensive in time and resources", "Requires expert facilitation", "May result in analysis paralysis", "Difficulty assigning probabilities"]',
'5-30 years', '6-15 participants',
'[{"type": "book", "title": "The Art of the Long View", "authors": ["Peter Schwartz"], "year": 1991, "publisher": "Doubleday"}]',
'en', true),

-- Setting the Space
('setting-the-space-en', 'Setting the Space', 'Settings', 1, 'preparation',
'Intentional design of workshop physical space to create welcoming atmosphere that establishes expectations and facilitates collaborative speculation.',
'["Create welcoming and stimulating environment", "Establish speculative tone", "Facilitate group interaction", "Prepare materials and resources"]',
'["Speculation workshops", "Collaborative design sessions", "Creative workshops", "Group facilitation", "Participatory events"]',
'[{"step": 1, "title": "Space Planning", "description": "Design layout facilitating movement and group work, considering acoustics and lighting.", "duration": "30 minutes"}, {"step": 2, "title": "Object Selection", "description": "Choose objects, images, or materials that illustrate theme and stimulate creativity.", "duration": "15 minutes"}, {"step": 3, "title": "Sensory Environment", "description": "Configure music, scents, temperature, and other appropriate sensory elements.", "duration": "10 minutes"}, {"step": 4, "title": "Material Preparation", "description": "Organize and distribute work materials, tools, and necessary resources.", "duration": "15 minutes"}, {"step": 5, "title": "Final Check", "description": "Review everything is in order and adjust elements based on specific needs.", "duration": "5 minutes"}]',
'["Establishes appropriate expectations", "Reduces participant anxiety", "Stimulates creativity from start", "Facilitates natural engagement"]',
'["Requires preparation time", "Depends on available resources", "May be culturally sensitive", "Limited by spatial constraints"]',
'Workshop duration', 'Facilitators and organizers',
'[{"type": "guide", "title": "Co-Creating Futures", "authors": ["Kristin Werner", "Antje Nestler"], "year": 2025}]',
'en', true),

-- Speculation Groups
('speculation-groups-en', 'Speculation Groups', 'Users2', 1, 'group-dynamics',
'Strategic formation of small groups of 3-5 participants to facilitate effective collaborative speculation and equitable participation.',
'["Optimize group dynamics", "Facilitate equitable participation", "Create diversity of perspectives", "Maintain productive focus"]',
'["Participatory workshops", "Brainstorming sessions", "Design workshops", "Citizen consultations", "Collaborative processes"]',
'[{"step": 1, "title": "Size Determination", "description": "Establish groups of 3-5 people to balance diversity and decisional efficiency.", "duration": "5 minutes"}, {"step": 2, "title": "Grouping Criteria", "description": "Decide method: self-selection, random, by expertise, or by interest topic.", "duration": "10 minutes"}, {"step": 3, "title": "Group Assignment", "description": "Implement chosen method using techniques like colored labels or symbols.", "duration": "10 minutes"}, {"step": 4, "title": "Spatial Arrangement", "description": "Organize physical spaces allowing intimate group work without interference.", "duration": "5 minutes"}, {"step": 5, "title": "Balance Verification", "description": "Review group composition and make adjustments if necessary for balance.", "duration": "5 minutes"}]',
'["Optimal size for participation", "Facilitates decision-making", "Reduces social intimidation", "Allows multiple perspectives"]',
'["May create fragmentation", "Some groups may dominate", "Requires multiple facilitation", "Dynamics may vary significantly"]',
'Process duration', '3-5 people per group',
'[{"type": "guide", "title": "Co-Creating Futures", "authors": ["Kristin Werner", "Antje Nestler"], "year": 2025}]',
'en', true),

-- Speculative Introductions
('speculative-introductions-en', 'Speculative Introductions', 'Presentation', 1, 'icebreaker',
'Introduction activity that activates participants in speculative mode, sharing personal perspectives and establishing thematic connections.',
'["Activate speculative thinking", "Establish personal connections", "Introduce diverse perspectives", "Create atmosphere of openness"]',
'["Workshop opening", "Start of participatory processes", "Integration activities", "Collaborative design sessions", "Interdisciplinary encounters"]',
'[{"step": 1, "title": "Question Preparation", "description": "Design speculative questions connecting personal with workshop theme.", "duration": "10 minutes"}, {"step": 2, "title": "Clear Instructions", "description": "Explain format and establish time limit for each presentation.", "duration": "5 minutes"}, {"step": 3, "title": "Introduction Round", "description": "Each participant introduces themselves using speculative questions as guide.", "duration": "2-3 minutes per person"}, {"step": 4, "title": "Connection Identification", "description": "Facilitator highlights common themes or interesting contrasts between presentations.", "duration": "10 minutes"}, {"step": 5, "title": "Theme Transition", "description": "Connect insights from presentations with main workshop objectives.", "duration": "5 minutes"}]',
'["Activates speculative mindset", "Reveals perspective diversity", "Creates common base for work", "Reduces social barriers"]',
'["May consume considerable time", "Some participants may resist", "Requires skillful facilitation", "May generate initial anxiety"]',
'Process beginning', 'All participants',
'[{"type": "guide", "title": "Co-Creating Futures", "authors": ["Kristin Werner", "Antje Nestler"], "year": 2025}]',
'en', true),

-- Impromptu Exhibition
('impromptu-exhibition-en', 'Impromptu Exhibition', 'Camera', 2, 'display',
'Quick creation of temporary exhibition space where groups display prototypes and speculations for informal public exploration.',
'["Create accessible exhibition space", "Facilitate informal exploration", "Generate sense of accomplishment", "Allow visual documentation"]',
'["Workshop closure", "Community events", "Participatory processes", "Educational workshops", "Progress celebrations"]',
'[{"step": 1, "title": "Quick Space Preparation", "description": "Organize display area with improvised tables, walls, or pedestals.", "duration": "15-20 minutes"}, {"step": 2, "title": "Work Installation", "description": "Groups install prototypes, sketches, and materials with identification labels.", "duration": "20-30 minutes"}, {"step": 3, "title": "Informal Opening", "description": "Invite free exploration with creators available to explain.", "duration": "30-45 minutes"}, {"step": 4, "title": "Collective Documentation", "description": "Take photos of installation and allow participants to document.", "duration": "15 minutes"}, {"step": 5, "title": "Closing Reflection", "description": "Gather group for final reflections on exhibition experience.", "duration": "15 minutes"}]',
'["Celebrates tangible achievements", "Creates memorable experience", "Facilitates natural documentation", "Generates participant pride"]',
'["Requires adequate space", "Variable exhibition quality", "May feel amateur", "Limited by available materials"]',
'Process end', 'All participants',
'[{"type": "guide", "title": "Co-Creating Futures", "authors": ["Kristin Werner", "Antje Nestler"], "year": 2025}]',
'en', true),

-- Three Horizons Framework
('three-horizons-en', 'Three Horizons Framework', 'Layers3', 3, 'transition',
'Analyze transitions between present and emerging futures, identifying tensions between established, declining, and emerging systems.',
'["Understand transition dynamics", "Identify tensions between systems", "Integrate multiple temporal perspectives", "Facilitate transformative change"]',
'["Territorial planning", "Innovation public policies", "Organizational strategies"]',
'[{"step": 1, "title": "Horizon 1 Mapping", "description": "Identify and characterize current dominant system.", "duration": "1 hour"}, {"step": 2, "title": "Horizon 3 Visualization", "description": "Define long-term transformative vision.", "duration": "1 hour"}, {"step": 3, "title": "Horizon 2 Exploration", "description": "Analyze innovation and conflict zones between H1 and H3.", "duration": "1.5 hours"}, {"step": 4, "title": "Transition Pathways", "description": "Discuss interactions and possible change paths.", "duration": "1 hour"}]',
'["Facilitates transition understanding", "Integrates short, medium, and long term", "Visualizes change dynamics"]',
'["Requires expert facilitation", "May oversimplify complex realities", "Does not quantify change speeds"]',
'10-30 years', '5-20 participants',
'[{"type": "book", "title": "Three Horizons: The Patterning of Hope", "authors": ["B. Sharpe"], "year": 2013}]',
'en', true),

-- Futures Literacy Labs
('futures-literacy-labs-en', 'Futures Literacy Labs (UNESCO)', 'GraduationCap', 4, 'participatory',
'Develop people\'s capacity to use the future as a resource in present decision-making.',
'["Develop futures literacy", "Empower participants", "Generate transformative learning", "Confront future perceptions"]',
'["Educational and community processes", "Public policies", "Social innovation"]',
'[{"step": 1, "title": "Perception Diagnosis", "description": "Identify implicit assumptions about the future.", "duration": "2 hours"}, {"step": 2, "title": "Confrontational Exercises", "description": "Challenge established conceptions through dynamics.", "duration": "4 hours"}, {"step": 3, "title": "Futures Co-creation", "description": "Build new ways of imagining the future.", "duration": "3 hours"}, {"step": 4, "title": "Learning Synthesis", "description": "Consolidate new developed capacities.", "duration": "1 hour"}]',
'["Empowers participants", "Generates transformative learning", "UNESCO-validated methodology"]',
'["High logistical demand", "Requires accredited facilitators", "Intensive and complex process"]',
'10-50 years', '20-40 participants',
'[{"type": "institutional", "title": "Futures Literacy", "institution": "UNESCO", "year": 2018}]',
'en', true),

-- Wild Cards Analysis
('wild-cards-analysis-en', 'Wild Cards Analysis', 'AlertTriangle', 3, 'risk',
'Identify improbable but high-impact events that could disruptively alter the future.',
'["Strengthen resilience", "Broaden range of considered futures", "Prepare for disruptions", "Identify black swans"]',
'["Risk management", "Strategic planning", "Disruption exploration"]',
'[{"step": 1, "title": "Event Brainstorming", "description": "Generate list of improbable but impactful events.", "duration": "2 hours"}, {"step": 2, "title": "Probability and Impact Assessment", "description": "Analyze each event according to these criteria.", "duration": "1 day"}, {"step": 3, "title": "Scenario Development", "description": "Create detailed narratives of selected events.", "duration": "1 week"}, {"step": 4, "title": "Preparation Strategies", "description": "Design responses and preventive measures.", "duration": "2-3 days"}]',
'["Strengthens resilience", "Broadens range of considered futures", "Improves response capacity"]',
'["Difficult to quantify", "May generate excessive fear", "Biases in event selection"]',
'5-30 years', '10-25 participants',
'[{"type": "book", "title": "Out of the Blue: How to Anticipate Big Future Surprises", "authors": ["J. Petersen"], "year": 1997}]',
'en', true)

ON CONFLICT (id) DO NOTHING;