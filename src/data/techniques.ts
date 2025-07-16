import type { Technique } from '../types/technique';
import { 
  TrendingUp, BarChart3, GitBranch, Network, Brain, Target,
  Search, Users, Map, Layers, Activity, Zap, TreePine, Shuffle,
  Lightbulb, ChevronRight, Timer, Building, Globe, Compass,
  FileText, PieChart, LineChart, Microscope, Calculator, 
  FlaskConical, Grid3x3, ArrowUpDown, ArrowLeftRight, Workflow,
  Scale, Gauge, Eye, Crosshair
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
  }
];

export const getTechniques = (language: 'en' | 'es'): Technique[] => {
  return language === 'es' ? techniquesES : techniques;
};

export const initialTechniques = techniques;