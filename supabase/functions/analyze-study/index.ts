// Edge function: analyze-study
// Calls Lovable AI Gateway to recommend prospective-study techniques.
// Returns the recommendations along with the raw request/response so the
// client can render the call inside a console-style viewer.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface TechniqueLite {
  id: string;
  name: string;
  category: string;
  complexity: number;
  description?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const {
      profile,
      techniques,
      model = "google/gemini-2.5-flash",
      temperature = 0.7,
      maxTokens = 4000,
    } = body as {
      profile: Record<string, unknown>;
      techniques: TechniqueLite[];
      model?: string;
      temperature?: number;
      maxTokens?: number;
    };

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(
        JSON.stringify({ error: "LOVABLE_API_KEY no está configurada" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const techniquesCatalog = (techniques ?? []).map((t) => ({
      id: t.id,
      name: t.name,
      category: t.category,
      complexity: t.complexity,
    }));

    const systemPrompt = `Eres un experto en prospectiva estratégica y diseño metodológico.
Analizas un perfil de estudio prospectivo y recomiendas, del catálogo provisto,
las 4 a 6 técnicas más adecuadas, justificando cada elección y ordenándolas
en una secuencia metodológica coherente (1 = primera fase). Solo puedes usar
ids que existan en el catálogo.`;

    const userPrompt = `Perfil del estudio:\n${JSON.stringify(profile, null, 2)}\n\nCatálogo de técnicas disponibles:\n${JSON.stringify(techniquesCatalog, null, 2)}\n\nRecomienda las técnicas más adecuadas usando la función recommend_techniques.`;

    const gatewayRequest = {
      model,
      temperature,
      max_tokens: maxTokens,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      tools: [
        {
          type: "function",
          function: {
            name: "recommend_techniques",
            description: "Devuelve la lista de técnicas recomendadas en secuencia.",
            parameters: {
              type: "object",
              properties: {
                recommendations: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      techniqueId: { type: "string" },
                      justification: { type: "string" },
                      sequenceOrder: { type: "integer", minimum: 1 },
                    },
                    required: ["techniqueId", "justification", "sequenceOrder"],
                    additionalProperties: false,
                  },
                },
                summary: { type: "string" },
              },
              required: ["recommendations"],
              additionalProperties: false,
            },
          },
        },
      ],
      tool_choice: { type: "function", function: { name: "recommend_techniques" } },
    };

    const startedAt = Date.now();
    const aiRes = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gatewayRequest),
      },
    );
    const elapsedMs = Date.now() - startedAt;

    const rawText = await aiRes.text();

    if (!aiRes.ok) {
      let errMsg = "Error en AI Gateway";
      if (aiRes.status === 429) errMsg = "Límite de uso excedido. Intenta más tarde.";
      if (aiRes.status === 402) errMsg = "Créditos agotados. Añade fondos a Lovable AI.";
      return new Response(
        JSON.stringify({
          error: errMsg,
          status: aiRes.status,
          request: gatewayRequest,
          rawResponse: rawText,
          elapsedMs,
        }),
        { status: aiRes.status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    let parsed: any = null;
    let recommendations: any[] = [];
    let summary = "";
    try {
      parsed = JSON.parse(rawText);
      const call = parsed?.choices?.[0]?.message?.tool_calls?.[0];
      if (call?.function?.arguments) {
        const args = JSON.parse(call.function.arguments);
        recommendations = Array.isArray(args.recommendations) ? args.recommendations : [];
        summary = args.summary ?? "";
      }
    } catch (e) {
      console.error("parse error", e);
    }

    // Filter to known ids
    const validIds = new Set(techniquesCatalog.map((t) => t.id));
    recommendations = recommendations.filter((r) => validIds.has(r.techniqueId));

    return new Response(
      JSON.stringify({
        recommendations,
        summary,
        elapsedMs,
        request: gatewayRequest,
        rawResponse: parsed ?? rawText,
        usage: parsed?.usage ?? null,
        model,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("analyze-study error", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Error desconocido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
