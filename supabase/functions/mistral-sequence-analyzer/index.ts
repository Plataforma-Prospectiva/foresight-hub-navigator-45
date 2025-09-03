import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const mistralApiKey = Deno.env.get('MISTRAL_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface StudyProfile {
  title: string;
  description: string;
  country: string;
  stateLevel: string;
  territoryName?: string;
  scope: string;
  estimatedTime: string;
  studyObjective: string;
  timeHorizon: string;
  objectiveComplexity: string;
  availableResources: {
    budget: string;
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
  teamExperience: string;
}

interface Technique {
  id: string;
  name: string;
  complexity: number;
  category: string;
  description: string;
  objectives: string[];
  applications: string[];
  timeHorizon: string;
  participants: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { profile, techniques } = await req.json() as {
      profile: StudyProfile;
      techniques: Technique[];
    };

    console.log('Analyzing study profile with Mistral AI:', profile.title);

    // Create a detailed prompt for Mistral AI
    const prompt = `
Eres un experto en metodologías de prospectiva y análisis de futuros. Analiza el siguiente perfil de estudio y recomienda una secuencia de técnicas metodológicas.

PERFIL DE ESTUDIO:
- Título: ${profile.title}
- Descripción: ${profile.description}
- País: ${profile.country}
- Nivel: ${profile.stateLevel}
- ${profile.territoryName ? `Territorio: ${profile.territoryName}` : ''}
- Alcance: ${profile.scope}
- Tiempo estimado: ${profile.estimatedTime}
- Objetivo: ${profile.studyObjective}
- Horizonte temporal: ${profile.timeHorizon}
- Complejidad del objetivo: ${profile.objectiveComplexity}
- Experiencia del equipo: ${profile.teamExperience}

RECURSOS DISPONIBLES:
- Presupuesto: ${profile.availableResources.budget}
- Acceso a expertos: ${profile.availableResources.expertAccess ? 'Sí' : 'No'}
- Personal de campo: ${profile.availableResources.fieldPersonnel ? 'Sí' : 'No'}
- Infraestructura física: ${profile.availableResources.physicalInfrastructure ? 'Sí' : 'No'}
- Información actual: ${profile.availableResources.currentInformation ? 'Sí' : 'No'}
- Información histórica: ${profile.availableResources.historicalInformation ? 'Sí' : 'No'}
- Herramientas de encuesta: ${profile.availableResources.surveyTools ? 'Sí' : 'No'}
- Herramientas de procesamiento: ${profile.availableResources.dataProcessingTools ? 'Sí' : 'No'}
- Planes previos: ${profile.availableResources.previousPlans ? 'Sí' : 'No'}
- Marco institucional: ${profile.availableResources.institutionalFramework ? 'Sí' : 'No'}
${profile.availableResources.customResources.length > 0 ? `- Recursos personalizados: ${profile.availableResources.customResources.join(', ')}` : ''}

TÉCNICAS DISPONIBLES:
${techniques.map(t => `- ${t.id}: ${t.name} (Complejidad: ${t.complexity}/5, Categoría: ${t.category})`).join('\n')}

INSTRUCCIONES:
1. Selecciona entre 3-7 técnicas que mejor se adapten al perfil
2. Ordénalas secuencialmente considerando:
   - Complejidad progresiva
   - Dependencias metodológicas
   - Recursos disponibles
   - Experiencia del equipo
   - Objetivos del estudio
3. Para cada técnica, proporciona una justificación clara

FORMATO DE RESPUESTA (JSON estricto):
{
  "recommendedTechniques": [
    {
      "techniqueId": "id_de_la_tecnica",
      "justification": "Justificación detallada de por qué esta técnica es apropiada en este momento de la secuencia",
      "sequenceOrder": 1
    }
  ],
  "analysisDescription": "Descripción del enfoque metodológico aplicado",
  "estimatedDuration": "Duración estimada total del estudio"
}

IMPORTANTE: Responde ÚNICAMENTE con el JSON válido, sin texto adicional.`;

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${mistralApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral-large-latest',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 2000
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Mistral API error:', errorData);
      throw new Error(`Mistral API error: ${response.status} ${errorData}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    console.log('Raw Mistral response:', aiResponse);

    // Parse the AI response
    let parsedResponse;
    try {
      // Clean the response to extract JSON - handle markdown code blocks
      let cleanResponse = aiResponse.trim();
      
      // Remove markdown code block markers if present
      cleanResponse = cleanResponse.replace(/^```json\s*/, '').replace(/\s*```$/, '');
      cleanResponse = cleanResponse.replace(/^```\s*/, '').replace(/\s*```$/, '');
      
      // Find JSON object
      const jsonMatch = cleanResponse.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in AI response');
      }
      
      parsedResponse = JSON.parse(jsonMatch[0]);
    } catch (parseError) {
      console.error('Error parsing AI response:', parseError);
      console.error('AI response was:', aiResponse);
      throw new Error('Invalid JSON response from AI');
    }

    // Validate the response structure
    if (!parsedResponse.recommendedTechniques || !Array.isArray(parsedResponse.recommendedTechniques)) {
      throw new Error('Invalid response structure from AI');
    }

    // Ensure all recommended techniques exist in the provided list
    const validTechniques = parsedResponse.recommendedTechniques.filter(rec => 
      techniques.some(t => t.id === rec.techniqueId)
    );

    if (validTechniques.length === 0) {
      throw new Error('No valid techniques recommended by AI');
    }

    // Check for similar techniques and avoid duplicates
    const filteredTechniques = [];
    const usedCategories = new Set();
    const similarityThreshold = 0.7; // Threshold for similarity

    for (const rec of validTechniques) {
      const technique = techniques.find(t => t.id === rec.techniqueId);
      if (!technique) continue;

      // Check if we already have a very similar technique
      const isSimilar = filteredTechniques.some(existing => {
        const existingTech = techniques.find(t => t.id === existing.techniqueId);
        if (!existingTech) return false;
        
        // Check category similarity
        const categoryMatch = existingTech.category === technique.category;
        
        // Check name similarity (simple word overlap)
        const words1 = technique.name.toLowerCase().split(/\s+/);
        const words2 = existingTech.name.toLowerCase().split(/\s+/);
        const commonWords = words1.filter(word => words2.includes(word));
        const similarity = commonWords.length / Math.max(words1.length, words2.length);
        
        return categoryMatch && similarity > similarityThreshold;
      });

      if (!isSimilar) {
        filteredTechniques.push(rec);
      } else {
        console.log(`Skipped similar technique: ${technique.name}`);
      }
    }

    const finalTechniques = filteredTechniques.length > 0 ? filteredTechniques : validTechniques;

    const result = {
      recommendedTechniques: finalTechniques,
      analysisDescription: parsedResponse.analysisDescription || 'Análisis metodológico generado por IA',
      estimatedDuration: parsedResponse.estimatedDuration || profile.estimatedTime,
      aiQuery: prompt, // Include the original query sent to AI
      totalTechniquesConsidered: techniques.length,
      filteredSimilarTechniques: validTechniques.length - finalTechniques.length
    };

    console.log('Successful analysis result:', result);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in mistral-sequence-analyzer:', error);
    return new Response(JSON.stringify({ 
      error: 'Error processing analysis',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});