import type { Technique } from '../types/technique';
import { 
  TrendingUp, BarChart3, GitBranch, Network, Brain, Target,
  Search, Users, Map, Layers, Activity, Zap, TreePine, Shuffle,
  Lightbulb, ChevronRight, Timer, Building, Globe, Compass,
  FileText, PieChart, LineChart, Microscope, Calculator, 
  FlaskConical, Grid3x3, ArrowUpDown, ArrowLeftRight, Workflow,
  Scale, Gauge, Eye, Crosshair, UserCheck, Shapes, Palette,
  Settings, Presentation, Camera, Clock, Sparkles, Heart,
  MessageSquare, Layers3, Puzzle, TestTube, Rocket, Users2
} from 'lucide-react';
import { techniquesES } from './techniques-es';

export const techniques: Technique[] = [
  {
    id: 'trend-analysis',
    name: 'Trend Analysis',
    icon: TrendingUp,
    complexity: 3,
    category: 'exploratory',
    description: 'Systematic study of patterns and changes over time to identify emerging trends and their potential future trajectories.',
    objectives: [
      'Identify and analyze current trends',
      'Project trend evolution over time',
      'Evaluate trend impact and implications',
      'Detect weak signals and emerging patterns'
    ],
    applications: [
      'Technology forecasting',
      'Market research and consumer behavior',
      'Social and demographic changes',
      'Economic indicators analysis'
    ],
    methodology: [
      {
        step: 1,
        title: 'Data Collection',
        description: 'Gather quantitative and qualitative data from multiple sources over extended time periods.',
        duration: '2-4 weeks'
      },
      {
        step: 2,
        title: 'Pattern Recognition',
        description: 'Identify recurring patterns, cycles, and anomalies in the data using statistical methods.',
        duration: '1-2 weeks'
      },
      {
        step: 3,
        title: 'Trend Extrapolation',
        description: 'Project identified trends into the future using mathematical models and expert judgment.',
        duration: '1-2 weeks'
      },
      {
        step: 4,
        title: 'Impact Assessment',
        description: 'Evaluate potential consequences and implications of trend continuation or disruption.',
        duration: '1 week'
      },
      {
        step: 5,
        title: 'Monitoring System',
        description: 'Establish indicators and metrics to track trend evolution and validate projections.',
        duration: '1 week'
      }
    ],
    advantages: [
      'Based on empirical data and historical evidence',
      'Quantitative foundation for decision-making',
      'Early detection of emerging changes',
      'Provides baseline for scenario development'
    ],
    limitations: [
      'Assumes continuity of current patterns',
      'May miss discontinuous changes or ruptures',
      'Quality depends on data availability and reliability',
      'Vulnerable to confirmation bias'
    ],
    timeHorizon: '1-10 years',
    participants: '3-8 participants',
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
        title: 'UNDP Foresight Manual',
        authors: ['UNDP Team'],
        institution: 'United Nations Development Programme',
        year: 2018
      }
    ]
  },
  {
    id: 'delphi-method',
    name: 'Delphi Method',
    icon: Users,
    complexity: 5,
    category: 'expert-consultation',
    description: 'Structured communication technique that relies on a panel of experts to converge on complex issues through iterative rounds of surveys.',
    objectives: [
      'Achieve expert consensus on complex topics',
      'Minimize bias from group dynamics',
      'Leverage collective expert knowledge',
      'Handle uncertain future scenarios'
    ],
    applications: [
      'Technology priority setting',
      'Policy development',
      'Risk assessment',
      'Future scenarios validation'
    ],
    methodology: [
      {
        step: 1,
        title: 'Expert Selection',
        description: 'Identify and recruit relevant experts with diverse backgrounds and expertise.',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'First Round Survey',
        description: 'Send initial open-ended questionnaire to gather broad perspectives on the topic.',
        duration: '2-3 weeks'
      },
      {
        step: 3,
        title: 'Analysis & Synthesis',
        description: 'Analyze responses and synthesize key themes for the second round.',
        duration: '1 week'
      },
      {
        step: 4,
        title: 'Second Round Survey',
        description: 'Send structured questionnaire based on first round results for rating and ranking.',
        duration: '2 weeks'
      },
      {
        step: 5,
        title: 'Consensus Analysis',
        description: 'Analyze convergence, prepare final report with expert consensus findings.',
        duration: '1-2 weeks'
      }
    ],
    advantages: [
      'Eliminates geographical constraints',
      'Reduces dominant personality effects',
      'Maintains expert anonymity',
      'Structured approach to complex problems'
    ],
    limitations: [
      'Time-consuming process',
      'Requires expert availability',
      'May lead to artificial consensus',
      'Quality depends on expert selection'
    ],
    timeHorizon: '1-20 years',
    participants: '1 facilitator + 10-30 experts',
    bibliographicSources: [
      {
        type: 'book',
        title: 'The Delphi Method: Techniques and Applications',
        authors: ['Harold A. Linstone', 'Murray Turoff'],
        year: 2011,
        publisher: 'Addison-Wesley'
      },
      {
        type: 'article',
        title: 'Expert Consultation in Foresight',
        authors: ['Theodore J. Gordon'],
        journal: 'Futures',
        year: 2009
      }
    ]
  },
  {
    id: 'morphological-analysis',
    name: 'Morphological Analysis',
    icon: Grid3x3,
    complexity: 4,
    category: 'scenario-building',
    description: 'Systematic method for exploring all possible solutions to a multi-dimensional problem by decomposing it into its fundamental parameters.',
    objectives: [
      'Explore comprehensive solution space',
      'Generate scenario combinations systematically',
      'Structure complex multi-dimensional problems',
      'Identify unexpected configurations'
    ],
    applications: [
      'Product development scenarios',
      'Technology configuration analysis',
      'Policy option exploration',
      'Strategic alternative generation'
    ],
    methodology: [
      {
        step: 1,
        title: 'Problem Definition',
        description: 'Clearly define the problem and establish the scope of analysis.',
        duration: '1-2 days'
      },
      {
        step: 2,
        title: 'Parameter Identification',
        description: 'Identify key parameters that characterize the problem space.',
        duration: '1 week'
      },
      {
        step: 3,
        title: 'Value Range Definition',
        description: 'Define possible values or states for each parameter dimension.',
        duration: '1 week'
      },
      {
        step: 4,
        title: 'Morphological Box Creation',
        description: 'Construct the multi-dimensional morphological box with all parameter combinations.',
        duration: '2-3 days'
      },
      {
        step: 5,
        title: 'Configuration Assessment',
        description: 'Evaluate feasibility and consistency of different parameter combinations.',
        duration: '1-2 weeks'
      },
      {
        step: 6,
        title: 'Scenario Development',
        description: 'Develop detailed scenarios from selected viable configurations.',
        duration: '1-2 weeks'
      }
    ],
    advantages: [
      'Systematic and comprehensive exploration',
      'Reveals unexpected combinations',
      'Structured approach to complexity',
      'Forces consideration of all dimensions'
    ],
    limitations: [
      'Can become computationally complex',
      'May generate many impractical combinations',
      'Requires careful parameter selection',
      'Does not indicate probability of outcomes'
    ],
    timeHorizon: '2-15 years',
    participants: '3-8 participants',
    bibliographicSources: [
      {
        type: 'methodological',
        title: 'Morphological Analysis: A Method for Building Futures Scenarios',
        authors: ['Véronique Lamblin'],
        year: 2020,
        institution: 'Futuribles International',
        url: 'https://www.futuribles.com/en/la-prospective/methodes-et-outils/la-toolbox/'
      },
      {
        type: 'book',
        title: 'General Morphological Analysis: A General Method for Non-Quantified Modelling',
        authors: ['Tom Ritchey'],
        year: 2011,
        publisher: 'Swedish Morphological Society'
      }
    ]
  },
  {
    id: 'competing-hypotheses',
    name: 'Analysis of Competing Hypotheses (ACH)',
    icon: Scale,
    complexity: 4,
    category: 'analytical',
    description: 'Analytical methodology for evaluating multiple plausible hypotheses by systematically testing available evidence against each hypothesis.',
    objectives: [
      'Reduce cognitive bias in analysis',
      'Systematically evaluate alternative explanations',
      'Provide transparent analytical reasoning',
      'Identify most consistent hypothesis with evidence'
    ],
    applications: [
      'Intelligence analysis',
      'Strategic decision making',
      'Risk assessment',
      'Future scenario validation',
      'Policy analysis'
    ],
    methodology: [
      {
        step: 1,
        title: 'Hypothesis Generation',
        description: 'Brainstorm and formulate mutually exclusive hypotheses for the question under analysis.',
        duration: '1-2 days'
      },
      {
        step: 2,
        title: 'Evidence Collection',
        description: 'Gather significant evidence and arguments for and against each hypothesis.',
        duration: '1-2 weeks'
      },
      {
        step: 3,
        title: 'Matrix Construction',
        description: 'Create matrix with hypotheses as columns and evidence as rows, analyze diagnosticity.',
        duration: '1-2 days'
      },
      {
        step: 4,
        title: 'Hypothesis Refinement',
        description: 'Review and refine hypotheses based on evidence pattern analysis.',
        duration: '1 day'
      },
      {
        step: 5,
        title: 'Likelihood Assessment',
        description: 'Evaluate relative likelihood by focusing on disproving rather than proving hypotheses.',
        duration: '1-2 days'
      },
      {
        step: 6,
        title: 'Sensitivity Analysis',
        description: 'Test sensitivity of conclusions to key pieces of evidence.',
        duration: '1 day'
      },
      {
        step: 7,
        title: 'Conclusion Reporting',
        description: 'Report relative likelihood of all hypotheses with supporting rationale.',
        duration: '1-2 days'
      },
      {
        step: 8,
        title: 'Milestone Setting',
        description: 'Identify future milestones that would indicate different outcomes.',
        duration: '1 day'
      }
    ],
    advantages: [
      'Reduces confirmation bias',
      'Structured and transparent process',
      'Forces consideration of alternatives',
      'Captures analytical reasoning for review'
    ],
    limitations: [
      'Limited to available evidence quality',
      'May not handle all types of uncertainty',
      'Requires trained analysts',
      'Time-intensive for complex problems'
    ],
    timeHorizon: 'Any timeframe',
    participants: '1-5 analysts',
    bibliographicSources: [
      {
        type: 'methodological',
        title: 'Analysis of Competing Hypotheses',
        authors: ['Kristan Wheaton'],
        year: 2018,
        institution: 'Futuribles International',
        url: 'https://www.futuribles.com/en/la-prospective/methodes-et-outils/la-toolbox/'
      },
      {
        type: 'book',
        title: 'Psychology of Intelligence Analysis',
        authors: ['Richards Heuer'],
        year: 1999,
        publisher: 'CIA Center for the Study of Intelligence'
      },
      {
        type: 'book',
        title: 'Structured Analytic Techniques for Intelligence Analysis',
        authors: ['Richards Heuer', 'Randolph Pherson'],
        year: 2014,
        publisher: 'CQ Press'
      }
    ]
  },
  {
    id: 'scenario-building',
    name: 'Scenario Building',
    icon: GitBranch,
    complexity: 5,
    category: 'scenario-building',
    description: 'Construction of multiple coherent and plausible future narratives to explore different possibilities and their implications.',
    objectives: [
      'Explore multiple future possibilities',
      'Prepare for uncertainty and change',
      'Challenge assumptions about the future',
      'Develop robust strategies'
    ],
    applications: [
      'Strategic planning',
      'Climate change planning',
      'Technology assessment',
      'Policy development',
      'Business strategy'
    ],
    methodology: [
      {
        step: 1,
        title: 'Focal Question Definition',
        description: 'Define clear focal question and temporal scope for scenario development.',
        duration: '1-2 days'
      },
      {
        step: 2,
        title: 'Driving Forces Identification',
        description: 'Identify key driving forces that will shape the future context.',
        duration: '1-2 weeks'
      },
      {
        step: 3,
        title: 'Critical Uncertainties Selection',
        description: 'Select the most critical and uncertain driving forces as scenario axes.',
        duration: '2-3 days'
      },
      {
        step: 4,
        title: 'Scenario Framework Development',
        description: 'Create scenario matrix or framework based on critical uncertainties.',
        duration: '1 day'
      },
      {
        step: 5,
        title: 'Scenario Narrative Development',
        description: 'Develop detailed, coherent narratives for each scenario.',
        duration: '2-3 weeks'
      },
      {
        step: 6,
        title: 'Implications Assessment',
        description: 'Analyze implications and strategic options for each scenario.',
        duration: '1-2 weeks'
      }
    ],
    advantages: [
      'Explores multiple future possibilities',
      'Challenges conventional thinking',
      'Improves strategic flexibility',
      'Facilitates robust decision-making'
    ],
    limitations: [
      'Resource intensive process',
      'Requires creative thinking skills',
      'No probability assignments',
      'May oversimplify complex realities'
    ],
    timeHorizon: '5-30 years',
    participants: '6-12 participants',
    bibliographicSources: [
      {
        type: 'book',
        title: 'The Art of the Long View',
        authors: ['Peter Schwartz'],
        year: 1996,
        publisher: 'Currency Doubleday'
      },
      {
        type: 'book',
        title: 'Scenario Planning: The Link Between Future and Strategy',
        authors: ['Mats Lindgren', 'Hans Bandhold'],
        year: 2009,
        publisher: 'Palgrave Macmillan'
      }
    ]
  },
  {
    id: 'cross-impact-analysis',
    name: 'Cross-Impact Analysis',
    icon: Network,
    complexity: 5,
    category: 'systems-analysis',
    description: 'Systematic approach to analyze interdependencies between different factors and their mutual influences in complex systems.',
    objectives: [
      'Understand system interdependencies',
      'Identify indirect effects and feedback loops',
      'Quantify relationships between variables',
      'Support scenario development with systemic view'
    ],
    applications: [
      'Complex systems modeling',
      'Technology impact assessment',
      'Policy analysis',
      'Economic forecasting',
      'Environmental systems analysis'
    ],
    methodology: [
      {
        step: 1,
        title: 'Variable Identification',
        description: 'Identify key variables and factors that compose the system under study.',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Impact Matrix Construction',
        description: 'Build matrix to evaluate how each variable influences every other variable.',
        duration: '1 week'
      },
      {
        step: 3,
        title: 'Impact Assessment',
        description: 'Assess direct impacts between variables using expert judgment or data.',
        duration: '2-3 weeks'
      },
      {
        step: 4,
        title: 'Indirect Effects Calculation',
        description: 'Calculate indirect effects and system-wide impacts using matrix multiplication.',
        duration: '1 week'
      },
      {
        step: 5,
        title: 'Sensitivity Analysis',
        description: 'Identify most influential variables and critical system leverage points.',
        duration: '1 week'
      }
    ],
    advantages: [
      'Captures system complexity',
      'Reveals indirect effects',
      'Quantifies relationships',
      'Identifies leverage points'
    ],
    limitations: [
      'Requires precise data',
      'Computationally intensive',
      'Difficult to validate',
      'May oversimplify relationships'
    ],
    timeHorizon: '2-15 years',
    participants: '4-8 participants',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Cross-Impact Analysis and Scenario Planning',
        authors: ['Theodore J. Gordon', 'Selwyn Enzer'],
        year: 1973,
        publisher: 'RAND Corporation'
      },
      {
        type: 'article',
        title: 'Systems Analysis in Foresight',
        authors: ['Michel Godet'],
        journal: 'Technological Forecasting and Social Change',
        year: 2000
      }
    ]
  },
  {
    id: 'stakeholder-mapping',
    name: 'Stakeholder Mapping',
    icon: Users,
    complexity: 2,
    category: 'actor-analysis',
    description: 'Systematic identification and analysis of relevant actors, their interests, influences, and interrelationships within a system.',
    objectives: [
      'Identify all relevant stakeholders',
      'Analyze stakeholder influence and interest',
      'Map relationships and power dynamics',
      'Develop engagement strategies'
    ],
    applications: [
      'Project management',
      'Policy development',
      'Change management',
      'Innovation ecosystems',
      'Community planning'
    ],
    methodology: [
      {
        step: 1,
        title: 'Stakeholder Identification',
        description: 'Brainstorm and systematically identify all potential stakeholders.',
        duration: '1 week'
      },
      {
        step: 2,
        title: 'Stakeholder Categorization',
        description: 'Categorize stakeholders by type, role, and relationship to the system.',
        duration: '2-3 days'
      },
      {
        step: 3,
        title: 'Influence-Interest Analysis',
        description: 'Assess each stakeholder\'s level of influence and interest in the issue.',
        duration: '1 week'
      },
      {
        step: 4,
        title: 'Relationship Mapping',
        description: 'Map relationships, alliances, and conflicts between stakeholders.',
        duration: '1 week'
      },
      {
        step: 5,
        title: 'Engagement Strategy',
        description: 'Develop targeted strategies for engaging different stakeholder groups.',
        duration: '1 week'
      }
    ],
    advantages: [
      'Comprehensive stakeholder view',
      'Identifies key influencers',
      'Guides engagement strategy',
      'Reveals hidden relationships'
    ],
    limitations: [
      'Static snapshot in time',
      'Subjective assessments',
      'Requires regular updates',
      'May miss emerging stakeholders'
    ],
    timeHorizon: '1-5 years',
    participants: '2-6 participants',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Stakeholder Theory: Impact and Prospects',
        authors: ['R. Edward Freeman'],
        year: 2010,
        publisher: 'Edward Elgar Publishing'
      },
      {
        type: 'guide',
        title: 'Stakeholder Analysis Guidelines',
        institution: 'World Bank',
        year: 2005
      }
    ]
  },
  {
    id: 'environmental-scanning',
    name: 'Environmental Scanning',
    icon: Search,
    complexity: 3,
    category: 'information-analysis',
    description: 'Systematic monitoring of external environment to identify emerging trends, issues, and weak signals that may impact the future.',
    objectives: [
      'Monitor external environment continuously',
      'Detect weak signals and emerging issues',
      'Identify opportunities and threats',
      'Support strategic planning and foresight'
    ],
    applications: [
      'Strategic intelligence',
      'Technology watch',
      'Competitive intelligence',
      'Risk management',
      'Innovation monitoring'
    ],
    methodology: [
      {
        step: 1,
        title: 'Scanning Framework Setup',
        description: 'Define scanning scope, categories (STEEP), and information sources.',
        duration: '1 week'
      },
      {
        step: 2,
        title: 'Information Collection',
        description: 'Systematically collect information from diverse sources using manual and automated methods.',
        duration: 'Ongoing'
      },
      {
        step: 3,
        title: 'Signal Identification',
        description: 'Filter and identify relevant signals, trends, and emerging issues.',
        duration: 'Weekly'
      },
      {
        step: 4,
        title: 'Impact Assessment',
        description: 'Assess potential impact and relevance of identified signals.',
        duration: 'Weekly'
      },
      {
        step: 5,
        title: 'Reporting & Dissemination',
        description: 'Prepare and distribute intelligence reports to stakeholders.',
        duration: 'Monthly'
      }
    ],
    advantages: [
      'Early warning capability',
      'Broad environmental awareness',
      'Continuous monitoring',
      'Supports proactive planning'
    ],
    limitations: [
      'Information overload risk',
      'Requires ongoing resources',
      'Signal-to-noise ratio challenges',
      'Interpretation bias'
    ],
    timeHorizon: 'Continuous process',
    participants: '2-5 participants',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Environmental Scanning for Strategic Information',
        authors: ['Chun Wei Choo'],
        year: 2001,
        publisher: 'Information Today'
      },
      {
        type: 'article',
        title: 'Strategic Intelligence and Foresight',
        authors: ['Rafael Popper'],
        journal: 'Foresight',
        year: 2008
      }
    ]
  },
  {
    id: 'future-workshops',
    name: 'Future Workshops',
    icon: Building,
    complexity: 3,
    category: 'participatory',
    description: 'Participatory methodology for involving diverse stakeholders in collective exploration and construction of desirable futures.',
    objectives: [
      'Enable collective future exploration',
      'Build shared vision and ownership',
      'Generate innovative solutions',
      'Foster collaboration and commitment'
    ],
    applications: [
      'Community planning',
      'Organizational development',
      'Policy co-creation',
      'Innovation processes',
      'Social transformation'
    ],
    methodology: [
      {
        step: 1,
        title: 'Preparation Phase',
        description: 'Define objectives, select participants, and prepare workshop materials and logistics.',
        duration: '2-3 weeks'
      },
      {
        step: 2,
        title: 'Problem Phase',
        description: 'Identify and analyze current problems and challenges collectively.',
        duration: '2-4 hours'
      },
      {
        step: 3,
        title: 'Fantasy Phase',
        description: 'Generate creative visions and ideas for ideal future solutions.',
        duration: '2-4 hours'
      },
      {
        step: 4,
        title: 'Implementation Phase',
        description: 'Develop concrete action plans and implementation strategies.',
        duration: '2-4 hours'
      },
      {
        step: 5,
        title: 'Follow-up',
        description: 'Document outcomes, plan next steps, and maintain momentum.',
        duration: '1-2 weeks'
      }
    ],
    advantages: [
      'High participant engagement',
      'Builds ownership and commitment',
      'Diverse perspectives included',
      'Action-oriented outcomes'
    ],
    limitations: [
      'Complex logistics',
      'Group dynamics challenges',
      'Requires skilled facilitation',
      'Time-intensive process'
    ],
    timeHorizon: '1-10 years',
    participants: '1-2 facilitators + 15-50 participants',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Future Workshops: How to Create Desirable Futures',
        authors: ['Robert Jungk', 'Norbert Müllert'],
        year: 1987,
        publisher: 'Institute for Social Inventions'
      },
      {
        type: 'guide',
        title: 'Participatory Foresight Methods',
        institution: 'European Foresight Platform',
        year: 2010
      }
    ]
  },
  {
    id: 'x-curve',
    name: 'X-Curve Analysis',
    icon: Workflow,
    complexity: 4,
    category: 'transition-analysis',
    description: 'Visual tool for mapping transition dynamics and facilitating co-creation for systemic change by understanding building and breaking patterns.',
    objectives: [
      'Map transition dynamics systematically',
      'Facilitate co-creation for change',
      'Identify intervention opportunities',
      'Build shared understanding of transitions'
    ],
    applications: [
      'Energy transition planning',
      'Circular economy development',
      'Sustainable mobility systems',
      'Food system transformation',
      'Urban transition initiatives'
    ],
    methodology: [
      {
        step: 1,
        title: 'System Boundary Definition',
        description: 'Clearly define the system boundaries and scope of the transition analysis.',
        duration: '1 day'
      },
      {
        step: 2,
        title: 'Future Vision Development',
        description: 'Co-create a shared vision of the desired future state with stakeholders.',
        duration: '4 hours'
      },
      {
        step: 3,
        title: 'Dynamics Identification',
        description: 'Identify building dynamics (emerging elements) and breaking dynamics (declining elements).',
        duration: '4 hours'
      },
      {
        step: 4,
        title: 'X-Curve Mapping',
        description: 'Map identified dynamics on the X-curve framework showing transition pathways.',
        duration: '2 hours'
      },
      {
        step: 5,
        title: 'Intervention Portfolio',
        description: 'Identify and prioritize intervention opportunities to accelerate transition.',
        duration: '2 hours'
      }
    ],
    advantages: [
      'Systems thinking approach',
      'Visual and intuitive framework',
      'Facilitates stakeholder alignment',
      'Identifies leverage points'
    ],
    limitations: [
      'Requires skilled facilitation',
      'Context-dependent interpretation',
      'Subjective assessment elements',
      'May oversimplify complex transitions'
    ],
    timeHorizon: '5-20 years',
    participants: '1-2 facilitators + 5-15 participants',
    bibliographicSources: [
      {
        type: 'methodological',
        title: 'X-Curve Booklet: A tool for transition dynamics',
        authors: ['G. Silvestri', 'G. Diercks', 'C. Matti'],
        year: 2022,
        institution: 'DRIFT & EIT Climate-KIC',
        url: 'https://cristianmatti.com/wp-content/uploads/2022/02/x-curve-booklet-drift-eit-climate-kic-2022-6.pdf'
      },
      {
        type: 'theoretical',
        title: 'Transition Dynamics and Co-creation',
        authors: ['DRIFT Research Team'],
        year: 2021,
        institution: 'DRIFT Transition Studies Institute'
      }
    ]
  },
  {
    id: 'regnier-abacus',
    name: 'Régnier Abacus',
    icon: Gauge,
    complexity: 2,
    category: 'evaluation',
    description: 'Survey tool using chromatic scale to evaluate group consensus or dissensus on different propositions in participatory processes.',
    objectives: [
      'Measure group agreement levels',
      'Visualize consensus and dissensus',
      'Identify areas of convergence',
      'Support group decision-making'
    ],
    applications: [
      'Policy evaluation',
      'Project prioritization',
      'Strategic consensus building',
      'Participatory assessment',
      'Group consultation'
    ],
    methodology: [
      {
        step: 1,
        title: 'Proposition Preparation',
        description: 'Prepare clear and unambiguous propositions for group evaluation.',
        duration: '1-2 days'
      },
      {
        step: 2,
        title: 'Scale Explanation',
        description: 'Explain the chromatic scale and evaluation criteria to participants.',
        duration: '30 minutes'
      },
      {
        step: 3,
        title: 'Individual Evaluation',
        description: 'Participants individually assess each proposition using the color scale.',
        duration: '30-60 minutes'
      },
      {
        step: 4,
        title: 'Results Compilation',
        description: 'Compile individual assessments into visual consensus matrix.',
        duration: '30 minutes'
      },
      {
        step: 5,
        title: 'Analysis & Discussion',
        description: 'Analyze patterns of agreement/disagreement and facilitate group discussion.',
        duration: '1-2 hours'
      }
    ],
    advantages: [
      'Clear visual representation',
      'Easy to understand and use',
      'Identifies consensus areas',
      'Inclusive participation method'
    ],
    limitations: [
      'Subjective assessments',
      'Potential group influence',
      'Oversimplifies complex opinions',
      'Cultural color interpretation differences'
    ],
    timeHorizon: 'Present/immediate',
    participants: '1 facilitator + 8-30 participants',
    bibliographicSources: [
      {
        type: 'methodological',
        title: 'L\'abaque de Régnier: Un outil d\'enquête adapté aux démarches de prospective',
        authors: ['Nathalie Bassaler'],
        year: 2020,
        institution: 'Futuribles International'
      },
      {
        type: 'guide',
        title: 'Group Decision Making Methods',
        institution: 'European Foresight Platform',
        year: 2008
      }
    ]
  },
  {
    id: 'weak-signals',
    name: 'Weak Signals Detection',
    icon: Eye,
    complexity: 3,
    category: 'early-warning',
    description: 'Systematic approach to identify and analyze emerging phenomena that could become significant trends or disruptions in the future.',
    objectives: [
      'Detect early indicators of change',
      'Identify potential disruptions',
      'Monitor emerging phenomena',
      'Enable proactive response'
    ],
    applications: [
      'Technology emergence monitoring',
      'Social change detection',
      'Market disruption anticipation',
      'Risk early warning',
      'Innovation opportunity identification'
    ],
    methodology: [
      {
        step: 1,
        title: 'Scanning Framework',
        description: 'Define scanning scope, sources, and criteria for weak signal identification.',
        duration: '1 week'
      },
      {
        step: 2,
        title: 'Signal Detection',
        description: 'Systematically scan environment for unusual patterns or emerging phenomena.',
        duration: 'Ongoing'
      },
      {
        step: 3,
        title: 'Signal Validation',
        description: 'Verify signal authenticity and assess its potential significance.',
        duration: '1-2 days per signal'
      },
      {
        step: 4,
        title: 'Impact Assessment',
        description: 'Evaluate potential future impact and relevance of validated signals.',
        duration: '1 week'
      },
      {
        step: 5,
        title: 'Monitoring System',
        description: 'Establish monitoring system to track signal evolution over time.',
        duration: 'Ongoing'
      }
    ],
    advantages: [
      'Early warning capability',
      'Competitive advantage potential',
      'Supports proactive planning',
      'Identifies emerging opportunities'
    ],
    limitations: [
      'High false positive rate',
      'Difficult to validate significance',
      'Requires diverse information sources',
      'Interpretation challenges'
    ],
    timeHorizon: '1-15 years',
    participants: '2-5 participants',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Weak Signals for Strategic Intelligence',
        authors: ['Henri Dou', 'Philippe Clerc'],
        year: 2013,
        publisher: 'ISTE Editions'
      },
      {
        type: 'article',
        title: 'Early Warning Systems and Weak Signals',
        authors: ['Igor Ansoff'],
        journal: 'Strategic Management Journal',
        year: 1975
      }
    ]
  },
  {
    id: 'backcasting',
    name: 'Backcasting',
    icon: Target,
    complexity: 4,
    category: 'normative',
    description: 'Planning methodology that starts from a desired future vision and works backward to identify necessary steps and pathways to achieve it.',
    objectives: [
      'Design pathways to desired futures',
      'Identify necessary preconditions',
      'Plan strategic interventions',
      'Align actions with long-term vision'
    ],
    applications: [
      'Sustainability planning',
      'Strategic goal achievement',
      'Policy roadmap development',
      'Organizational transformation',
      'Technology deployment planning'
    ],
    methodology: [
      {
        step: 1,
        title: 'Vision Definition',
        description: 'Define clear, detailed vision of desired future state with specific timeframe.',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Milestone Identification',
        description: 'Identify key milestones and checkpoints along the pathway to the vision.',
        duration: '1 week'
      },
      {
        step: 3,
        title: 'Barrier Analysis',
        description: 'Identify potential barriers, constraints, and challenges to achieving the vision.',
        duration: '1 week'
      },
      {
        step: 4,
        title: 'Pathway Design',
        description: 'Design specific pathways and strategies to overcome barriers and reach milestones.',
        duration: '2-3 weeks'
      },
      {
        step: 5,
        title: 'Action Planning',
        description: 'Develop detailed action plans with timelines, responsibilities, and resources.',
        duration: '1-2 weeks'
      }
    ],
    advantages: [
      'Goal-oriented approach',
      'Clarifies necessary actions',
      'Aligns stakeholders around vision',
      'Identifies critical pathways'
    ],
    limitations: [
      'Assumes vision is achievable',
      'May miss alternative pathways',
      'Requires clear vision consensus',
      'Can be overly deterministic'
    ],
    timeHorizon: '5-50 years',
    participants: '5-15 participants',
    bibliographicSources: [
      {
        type: 'book',
        title: 'Backcasting for Sustainable Development',
        authors: ['John Robinson'],
        year: 2003,
        publisher: 'Cambridge University Press'
      },
      {
        type: 'article',
        title: 'Backcasting as Strategic Planning Tool',
        authors: ['Karl Henrik Dreborg'],
        journal: 'Futures',
        year: 1996
      }
    ]
  },
  {
    id: 'causal-layered-analysis',
    name: 'Causal Layered Analysis (CLA)',
    icon: Layers,
    complexity: 4,
    category: 'deep-analysis',
    description: 'Four-level analytical framework that examines surface trends, systems, worldviews, and myths/metaphors to understand deeper causes of change.',
    objectives: [
      'Understand deeper causes of phenomena',
      'Examine multiple levels of reality',
      'Challenge dominant paradigms',
      'Develop transformative solutions'
    ],
    applications: [
      'Social transformation analysis',
      'Organizational change',
      'Policy analysis',
      'Cultural studies',
      'Future studies research'
    ],
    methodology: [
      {
        step: 1,
        title: 'Litany Level Analysis',
        description: 'Examine surface-level trends, statistics, and commonly reported phenomena.',
        duration: '1 week'
      },
      {
        step: 2,
        title: 'Systems Level Analysis',
        description: 'Analyze underlying systems, structures, and relationships that create the trends.',
        duration: '2 weeks'
      },
      {
        step: 3,
        title: 'Worldview Level Analysis',
        description: 'Examine worldviews, ideologies, and paradigms that legitimize the systems.',
        duration: '1-2 weeks'
      },
      {
        step: 4,
        title: 'Myth/Metaphor Level Analysis',
        description: 'Explore deep stories, myths, and metaphors that underpin worldviews.',
        duration: '1-2 weeks'
      },
      {
        step: 5,
        title: 'Alternative Futures Creation',
        description: 'Develop alternative scenarios at each level to create transformative futures.',
        duration: '2-3 weeks'
      }
    ],
    advantages: [
      'Holistic multi-level analysis',
      'Reveals hidden assumptions',
      'Enables deep transformation',
      'Challenges conventional thinking'
    ],
    limitations: [
      'Highly subjective interpretation',
      'Requires cultural sensitivity',
      'Time-intensive process',
      'May be too abstract for some applications'
    ],
    timeHorizon: '10-50 years',
    participants: '3-8 participants',
    bibliographicSources: [
      {
        type: 'methodological',
        title: 'Causal Layered Analysis: A Four-Level Approach to Alternative Futures',
        authors: ['Sohail Inayatullah'],
        year: 2020,
        institution: 'Futuribles International'
      },
      {
        type: 'book',
        title: 'Questioning the Future: Methods and Tools for Organizational and Societal Transformation',
        authors: ['Sohail Inayatullah'],
        year: 2007,
        publisher: 'Tamkang University Press'
      }
    ]
  },
  {
    id: 'collaborative-speculation',
    name: 'Collaborative Speculation',
    icon: Users2,
    complexity: 3,
    category: 'participatory',
    description: 'Experimental methodology for science communication that brings together academic research, design, and society through collaborative future-building processes.',
    objectives: [
      'Foster creative exchange between science and society',
      'Generate research-inspired speculative scenarios',
      'Build shared understanding of future possibilities',
      'Create tangible artifacts from future visions'
    ],
    applications: [
      'Science communication',
      'Public engagement with research',
      'Co-design workshops',
      'Innovation processes',
      'Future literacy development'
    ],
    methodology: [
      {
        step: 1,
        title: 'Setting the Space',
        description: 'Create a welcoming atmosphere with curated objects, images, and materials that set the tone for speculation.',
        duration: '30 minutes'
      },
      {
        step: 2,
        title: 'Speculation Groups Formation',
        description: 'Form groups of 3-5 co-speculators using various methods (self-assembly, name tags, or topic-based).',
        duration: '15 minutes'
      },
      {
        step: 3,
        title: 'Research Insights Sharing',
        description: 'Present research-backed information to level the knowledge playing field and provide speculation foundation.',
        duration: '45-60 minutes'
      },
      {
        step: 4,
        title: 'Speculation Phase',
        description: 'Imagine future scenarios 25 years ahead, focusing on everyday experiences and incorporating frictions.',
        duration: '60-90 minutes'
      },
      {
        step: 5,
        title: 'Prototyping',
        description: 'Create tangible objects or collages that embody the speculative scenarios using diverse materials.',
        duration: '30-45 minutes'
      },
      {
        step: 6,
        title: 'Sharing Futures',
        description: 'Present scenarios and prototypes through pitches, exhibitions, or gallery walks for collective reflection.',
        duration: '30-45 minutes'
      }
    ],
    advantages: [
      'Bridges science and society creatively',
      'Generates tangible future artifacts',
      'Inclusive participatory approach',
      'Combines research with imagination'
    ],
    limitations: [
      'Requires skilled facilitation',
      'Material-intensive setup',
      'May produce unrealistic scenarios',
      'Outcomes depend on group dynamics'
    ],
    timeHorizon: '25 years (workshop focus)',
    participants: '1-2 facilitators + 15-50 participants',
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
    name: 'Futures Check-In',
    icon: UserCheck,
    complexity: 1,
    category: 'orientation',
    description: 'Reflective activity where participants identify their roles, interests, and values as starting point for speculative engagement.',
    objectives: [
      'Establish personal perspective baseline',
      'Identify participant values and interests',
      'Create awareness of diverse viewpoints',
      'Prepare for speculation mindset'
    ],
    applications: [
      'Workshop introduction',
      'Team building for futures work',
      'Stakeholder perspective mapping',
      'Personal reflection exercises',
      'Group orientation activities'
    ],
    methodology: [
      {
        step: 1,
        title: 'Template Distribution',
        description: 'Provide futures check-in templates for participants to fill individually.',
        duration: '5 minutes'
      },
      {
        step: 2,
        title: 'Personal Reflection',
        description: 'Participants reflect on their roles, interests, and select areas of importance from provided list.',
        duration: '10-15 minutes'
      },
      {
        step: 3,
        title: 'Group Sharing',
        description: 'Optional sharing within speculation groups or display on board for facilitator awareness.',
        duration: '10-20 minutes'
      },
      {
        step: 4,
        title: 'Reference Throughout',
        description: 'Encourage participants to reference their check-in throughout the workshop process.',
        duration: 'Ongoing'
      }
    ],
    advantages: [
      'Quick and accessible activity',
      'Creates inclusive starting point',
      'Reveals diverse perspectives',
      'Low barrier to participation'
    ],
    limitations: [
      'Surface-level reflection only',
      'May not capture complexity',
      'Requires honest self-assessment',
      'Cultural differences in self-disclosure'
    ],
    timeHorizon: 'Present moment',
    participants: 'Any number',
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
    name: 'Research Storytelling',
    icon: MessageSquare,
    complexity: 2,
    category: 'knowledge-transfer',
    description: 'Method for presenting research insights through narrative formats that make complex information accessible and engaging for diverse audiences.',
    objectives: [
      'Make research accessible to non-experts',
      'Create emotional connection to research',
      'Provide foundation for speculation',
      'Bridge academic and public understanding'
    ],
    applications: [
      'Science communication',
      'Research dissemination',
      'Public engagement events',
      'Educational workshops',
      'Policy briefings'
    ],
    methodology: [
      {
        step: 1,
        title: 'Research Analysis',
        description: 'Identify key research insights, unanswered questions, and potential implications.',
        duration: '1-2 hours'
      },
      {
        step: 2,
        title: 'Audience Consideration',
        description: 'Understand audience knowledge level, interests, and preferred communication styles.',
        duration: '30 minutes'
      },
      {
        step: 3,
        title: 'Narrative Structure',
        description: 'Develop story structure with clear beginning, development, and open ending for speculation.',
        duration: '1 hour'
      },
      {
        step: 4,
        title: 'Multi-modal Preparation',
        description: 'Prepare visual aids, physical objects, or interactive elements to support the story.',
        duration: '2-4 hours'
      },
      {
        step: 5,
        title: 'Story Delivery',
        description: 'Present research story in engaging, interactive format that invites questions.',
        duration: '15-30 minutes'
      }
    ],
    advantages: [
      'Makes complex research accessible',
      'Creates emotional engagement',
      'Memorable and relatable format',
      'Encourages questions and discussion'
    ],
    limitations: [
      'Risk of oversimplification',
      'May introduce narrative bias',
      'Requires storytelling skills',
      'Time-intensive preparation'
    ],
    timeHorizon: 'Present/educational',
    participants: '1 presenter + audience',
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
    name: 'Hands-On Experience',
    icon: TestTube,
    complexity: 2,
    category: 'experiential',
    description: 'Interactive activities that allow participants to directly engage with research materials, processes, or phenomena through tactile exploration.',
    objectives: [
      'Provide direct research experience',
      'Create embodied understanding',
      'Generate material for speculation',
      'Bridge theory and practice'
    ],
    applications: [
      'Science museums',
      'Research demonstrations',
      'Educational workshops',
      'Innovation labs',
      'Material exploration sessions'
    ],
    methodology: [
      {
        step: 1,
        title: 'Experience Design',
        description: 'Design safe, accessible hands-on activities that illustrate key research concepts.',
        duration: '2-4 hours'
      },
      {
        step: 2,
        title: 'Material Preparation',
        description: 'Gather and prepare all necessary materials, tools, and safety equipment.',
        duration: '1-2 hours'
      },
      {
        step: 3,
        title: 'Instructions & Safety',
        description: 'Provide clear instructions and safety guidelines to participants.',
        duration: '10-15 minutes'
      },
      {
        step: 4,
        title: 'Guided Exploration',
        description: 'Facilitate participant exploration with questions and observations.',
        duration: '20-45 minutes'
      },
      {
        step: 5,
        title: 'Reflection & Connection',
        description: 'Connect experience to research insights and potential future implications.',
        duration: '10-20 minutes'
      }
    ],
    advantages: [
      'Creates memorable experiences',
      'Appeals to different learning styles',
      'Generates authentic curiosity',
      'Provides concrete reference point'
    ],
    limitations: [
      'Requires material resources',
      'Safety considerations',
      'Space and equipment needs',
      'May not suit all research topics'
    ],
    timeHorizon: 'Present/immediate',
    participants: '1-2 facilitators + groups',
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
    name: 'Brainwriting',
    icon: Sparkles,
    complexity: 1,
    category: 'ideation',
    description: 'Silent ideation technique where participants write down ideas individually before sharing, promoting equal participation and diverse thinking.',
    objectives: [
      'Generate diverse ideas rapidly',
      'Ensure equal participation',
      'Avoid groupthink dynamics',
      'Build on others\' ideas systematically'
    ],
    applications: [
      'Scenario ideation',
      'Problem-solving sessions',
      'Creative workshops',
      'Innovation processes',
      'Futures speculation'
    ],
    methodology: [
      {
        step: 1,
        title: 'Question/Prompt Setup',
        description: 'Present clear, specific question or prompt for ideation focus.',
        duration: '5 minutes'
      },
      {
        step: 2,
        title: 'Silent Ideation',
        description: 'Participants write ideas individually on paper or cards for set time period.',
        duration: '10-15 minutes'
      },
      {
        step: 3,
        title: 'Idea Rotation',
        description: 'Participants pass their ideas to next person who adds or builds upon them.',
        duration: '10-15 minutes'
      },
      {
        step: 4,
        title: 'Collection & Sharing',
        description: 'Collect all ideas and share highlights with the group.',
        duration: '10-20 minutes'
      },
      {
        step: 5,
        title: 'Clustering & Selection',
        description: 'Group similar ideas and select most promising ones for development.',
        duration: '15-20 minutes'
      }
    ],
    advantages: [
      'Equal participation opportunity',
      'Rapid idea generation',
      'Builds on collective intelligence',
      'Reduces social pressure'
    ],
    limitations: [
      'Limited to written communication',
      'May miss verbal insights',
      'Requires literacy skills',
      'Ideas may lack depth initially'
    ],
    timeHorizon: 'Any timeframe',
    participants: '4-12 participants',
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
    name: 'An Artifact from the Future',
    icon: Rocket,
    complexity: 3,
    category: 'speculative-design',
    description: 'Creative exercise where participants design and describe objects that could exist in future scenarios, making abstract concepts tangible.',
    objectives: [
      'Make future scenarios tangible',
      'Stimulate concrete imagination',
      'Create discussion anchors',
      'Bridge present and future thinking'
    ],
    applications: [
      'Design fiction workshops',
      'Future scenario development',
      'Innovation ideation',
      'Product concept development',
      'Strategic foresight exercises'
    ],
    methodology: [
      {
        step: 1,
        title: 'Future Context Setting',
        description: 'Establish the future scenario timeframe and context for artifact creation.',
        duration: '10 minutes'
      },
      {
        step: 2,
        title: 'Artifact Ideation',
        description: 'Brainstorm objects that might exist in this future, considering function and meaning.',
        duration: '20-30 minutes'
      },
      {
        step: 3,
        title: 'Artifact Selection',
        description: 'Choose one artifact to develop in detail, considering its purpose and impact.',
        duration: '10 minutes'
      },
      {
        step: 4,
        title: 'Detailed Description',
        description: 'Write detailed description including function, appearance, user experience, and context.',
        duration: '30-45 minutes'
      },
      {
        step: 5,
        title: 'Presentation & Discussion',
        description: 'Present artifacts to group and discuss implications and assumptions.',
        duration: '20-30 minutes'
      }
    ],
    advantages: [
      'Makes abstract futures concrete',
      'Encourages detailed thinking',
      'Creates memorable concepts',
      'Reveals implicit assumptions'
    ],
    limitations: [
      'May focus too much on objects',
      'Requires creative imagination',
      'Could reinforce current paradigms',
      'Time-intensive for complex artifacts'
    ],
    timeHorizon: '10-50 years',
    participants: '3-8 participants per group',
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
    name: 'Speculation Sketch',
    icon: Palette,
    complexity: 2,
    category: 'visualization',
    description: 'Visual documentation method where groups sketch their speculative scenarios and artifacts with accompanying descriptions.',
    objectives: [
      'Document speculative ideas visually',
      'Create shareable representations',
      'Facilitate group synthesis',
      'Enable cross-group communication'
    ],
    applications: [
      'Workshop documentation',
      'Scenario visualization',
      'Idea communication',
      'Concept development',
      'Portfolio creation'
    ],
    methodology: [
      {
        step: 1,
        title: 'Template Preparation',
        description: 'Provide templates with spaces for title, sketch, and description.',
        duration: '5 minutes'
      },
      {
        step: 2,
        title: 'Group Discussion',
        description: 'Groups discuss their scenarios and decide on key elements to illustrate.',
        duration: '10-15 minutes'
      },
      {
        step: 3,
        title: 'Collaborative Sketching',
        description: 'Groups create visual representation of their scenario or artifact.',
        duration: '15-20 minutes'
      },
      {
        step: 4,
        title: 'Description Writing',
        description: 'Add brief written description to explain and contextualize the sketch.',
        duration: '10-15 minutes'
      },
      {
        step: 5,
        title: 'Documentation & Display',
        description: 'Collect sketches for display or further use in sharing phase.',
        duration: '5 minutes'
      }
    ],
    advantages: [
      'Accessible to all skill levels',
      'Quick documentation method',
      'Facilitates group collaboration',
      'Creates visual discussion anchors'
    ],
    limitations: [
      'Limited by drawing skills',
      'May oversimplify complex ideas',
      'Visual bias toward certain concepts',
      'Requires basic materials'
    ],
    timeHorizon: 'Any timeframe',
    participants: '3-5 per sketch group',
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
    name: 'Object Prototyping',
    icon: Shapes,
    complexity: 3,
    category: 'prototyping',
    description: 'Three-dimensional creation method where speculation groups build tangible models or objects that embody their future scenarios.',
    objectives: [
      'Make speculative ideas tangible',
      'Enable tactile exploration',
      'Create presentation artifacts',
      'Facilitate deeper understanding'
    ],
    applications: [
      'Design workshops',
      'Innovation labs',
      'Future scenario embodiment',
      'Product concept development',
      'Educational demonstrations'
    ],
    methodology: [
      {
        step: 1,
        title: 'Material Setup',
        description: 'Provide diverse materials including base materials, binders, cutting tools, and drawing supplies.',
        duration: '15 minutes'
      },
      {
        step: 2,
        title: 'Concept Discussion',
        description: 'Groups discuss which aspects of their scenario to make tangible.',
        duration: '10-15 minutes'
      },
      {
        step: 3,
        title: 'Collaborative Building',
        description: 'Groups work together to create three-dimensional representations of their ideas.',
        duration: '30-45 minutes'
      },
      {
        step: 4,
        title: 'Documentation',
        description: 'Photograph prototypes and prepare them for presentation or transport.',
        duration: '10 minutes'
      },
      {
        step: 5,
        title: 'Presentation Preparation',
        description: 'Prepare brief presentation explaining the prototype and its significance.',
        duration: '10-15 minutes'
      }
    ],
    advantages: [
      'Creates memorable artifacts',
      'Encourages hands-on creativity',
      'Appeals to kinesthetic learners',
      'Generates discussion objects'
    ],
    limitations: [
      'Requires diverse materials',
      'Time-intensive process',
      'Fragile final products',
      'Not suitable for all concepts'
    ],
    timeHorizon: 'Any timeframe',
    participants: '3-5 per group',
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
    id: 'collage-prototyping',
    name: 'Collage Prototyping',
    icon: Layers3,
    complexity: 2,
    category: 'prototyping',
    description: 'Visual composition method using images, materials, and text to create representations of future scenarios or concepts.',
    objectives: [
      'Create quick visual prototypes',
      'Combine diverse visual elements',
      'Express complex ideas simply',
      'Generate discussion materials'
    ],
    applications: [
      'Mood board creation',
      'Scenario visualization',
      'Concept communication',
      'Workshop outputs',
      'Vision board development'
    ],
    methodology: [
      {
        step: 1,
        title: 'Material Collection',
        description: 'Gather magazines, printed images, colored paper, fabric, and adhesive materials.',
        duration: '15 minutes'
      },
      {
        step: 2,
        title: 'Theme Discussion',
        description: 'Groups discuss the mood, feeling, and key elements of their scenario.',
        duration: '10 minutes'
      },
      {
        step: 3,
        title: 'Element Selection',
        description: 'Search for and select images, textures, and materials that represent their ideas.',
        duration: '20 minutes'
      },
      {
        step: 4,
        title: 'Composition Creation',
        description: 'Arrange and adhere selected elements to create cohesive visual composition.',
        duration: '20-30 minutes'
      },
      {
        step: 5,
        title: 'Final Touches',
        description: 'Add text, drawings, or additional elements to complete the collage.',
        duration: '10-15 minutes'
      }
    ],
    advantages: [
      'Quick and accessible method',
      'Requires minimal skills',
      'Combines multiple visual languages',
      'Creates rich, layered representations'
    ],
    limitations: [
      'Limited by available images',
      'May lack specificity',
      'Dependent on material quality',
      'Interpretation challenges'
    ],
    timeHorizon: 'Any timeframe',
    participants: '3-5 per group',
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
    name: 'Future Pitch',
    icon: Presentation,
    complexity: 2,
    category: 'communication',
    description: 'Structured presentation format where groups share their speculative scenarios and prototypes with the larger group.',
    objectives: [
      'Share speculative scenarios effectively',
      'Practice futures communication',
      'Generate cross-group learning',
      'Create collective knowledge'
    ],
    applications: [
      'Workshop presentations',
      'Stakeholder communication',
      'Scenario sharing sessions',
      'Innovation showcases',
      'Futures conferences'
    ],
    methodology: [
      {
        step: 1,
        title: 'Pitch Structure Setup',
        description: 'Establish time limits, presentation format, and key elements to include.',
        duration: '10 minutes'
      },
      {
        step: 2,
        title: 'Preparation Time',
        description: 'Groups organize their thoughts and decide on presentation approach.',
        duration: '10-15 minutes'
      },
      {
        step: 3,
        title: 'Sequential Presentations',
        description: 'Each group presents their scenario and prototypes to the full group.',
        duration: '3-5 minutes per group'
      },
      {
        step: 4,
        title: 'Questions & Discussion',
        description: 'Allow time for questions and brief discussion after each pitch.',
        duration: '2-3 minutes per group'
      },
      {
        step: 5,
        title: 'Collective Reflection',
        description: 'Facilitate reflection on patterns, insights, and connections across pitches.',
        duration: '10-20 minutes'
      }
    ],
    advantages: [
      'Efficient knowledge sharing',
      'Builds presentation skills',
      'Creates group learning',
      'Enables comparison and synthesis'
    ],
    limitations: [
      'Time pressure limits depth',
      'Presentation anxiety for some',
      'May rush complex ideas',
      'Limited interaction time'
    ],
    timeHorizon: 'Workshop timeframe',
    participants: 'All workshop participants',
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
    name: 'Gallery Walk',
    icon: Camera,
    complexity: 1,
    category: 'exhibition',
    description: 'Self-paced exploration method where participants move through displayed speculative scenarios and prototypes at their own rhythm.',
    objectives: [
      'Enable detailed exploration',
      'Allow personal reflection pace',
      'Facilitate intimate discussions',
      'Create exhibition atmosphere'
    ],
    applications: [
      'Workshop conclusions',
      'Public exhibitions',
      'Reflection sessions',
      'Peer learning events',
      'Community showcases'
    ],
    methodology: [
      {
        step: 1,
        title: 'Display Setup',
        description: 'Arrange prototypes and documentation around room for easy circulation.',
        duration: '15 minutes'
      },
      {
        step: 2,
        title: 'Creator Positioning',
        description: 'Group creators stand near their displays to answer questions and explain.',
        duration: '5 minutes'
      },
      {
        step: 3,
        title: 'Free Exploration',
        description: 'Participants move freely through displays, examining and discussing at own pace.',
        duration: '20-30 minutes'
      },
      {
        step: 4,
        title: 'Reflection Collection',
        description: 'Optional: collect written reflections or comments on display materials.',
        duration: '10 minutes'
      },
      {
        step: 5,
        title: 'Group Reconvening',
        description: 'Bring group back together for final reflections and closing.',
        duration: '10-15 minutes'
      }
    ],
    advantages: [
      'Self-paced exploration',
      'Natural conversation facilitation',
      'Detailed examination opportunity',
      'Creates exhibition feeling'
    ],
    limitations: [
      'Requires space for circulation',
      'Some displays may be missed',
      'Less structured learning',
      'Creator fatigue from repeated explanations'
    ],
    timeHorizon: 'Workshop timeframe',
    participants: 'All workshop participants',
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
    name: 'Takeaways Reflection',
    icon: Heart,
    complexity: 1,
    category: 'reflection',
    description: 'Closing activity where participants identify and share their key insights, learnings, and commitments from the speculative process.',
    objectives: [
      'Consolidate learning insights',
      'Create personal meaning-making',
      'Plan future actions',
      'Generate group closure'
    ],
    applications: [
      'Workshop closings',
      'Learning consolidation',
      'Action planning',
      'Program evaluation',
      'Reflection sessions'
    ],
    methodology: [
      {
        step: 1,
        title: 'Reflection Prompts',
        description: 'Provide guiding questions about insights, surprises, and future intentions.',
        duration: '5 minutes'
      },
      {
        step: 2,
        title: 'Individual Reflection',
        description: 'Participants reflect individually on their experience and key takeaways.',
        duration: '10-15 minutes'
      },
      {
        step: 3,
        title: 'Pair Sharing',
        description: 'Share reflections in pairs or small groups for deeper processing.',
        duration: '10-15 minutes'
      },
      {
        step: 4,
        title: 'Group Harvest',
        description: 'Collect key insights and commitments in plenary session.',
        duration: '15-20 minutes'
      },
      {
        step: 5,
        title: 'Closing Circle',
        description: 'End with appreciation round or closing ritual to mark completion.',
        duration: '10 minutes'
      }
    ],
    advantages: [
      'Consolidates learning experience',
      'Creates personal commitment',
      'Enables group appreciation',
      'Provides evaluation data'
    ],
    limitations: [
      'May feel forced or artificial',
      'Limited time for deep reflection',
      'Depends on participant openness',
      'Risk of superficial sharing'
    ],
    timeHorizon: 'Present/immediate',
    participants: 'All workshop participants',
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
  }
];

export const getTechniques = (language: 'en' | 'es'): Technique[] => {
  return language === 'es' ? techniquesES : techniques;
};

export const initialTechniques = techniques;