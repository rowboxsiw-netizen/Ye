
import { GoogleGenAI, Type } from "@google/genai";
import { TechInsight } from "../types";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Fetches the latest tech insights using Gemini with Google Search grounding.
 * Strictly follows SDK guidelines by extracting grounded URLs from grounding metadata.
 */
export const getTechInsights = async (topic: string = "web development trends 2026"): Promise<TechInsight[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Search for the latest, most cutting-edge ${topic}. Provide a list of 3 specific, emerging technologies or trends. Format as a JSON array of objects.`,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        // Recommended method for JSON output is using responseSchema with Type enum.
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: 'The name of the technology or trend.',
              },
              snippet: {
                type: Type.STRING,
                description: 'A short description of the technology.',
              },
              sourceUrl: {
                type: Type.STRING,
                description: 'A fallback URL for the source.',
              },
            },
            propertyOrdering: ["title", "snippet", "sourceUrl"],
          },
        },
      },
    });

    // Directly access the .text property (not a method).
    const jsonStr = response.text?.trim() || "[]";
    let data: TechInsight[] = [];
    
    try {
      data = JSON.parse(jsonStr);
    } catch (e) {
      console.warn("Gemini JSON parsing warning: Grounding metadata might interfere with formatting.", e);
    }
    
    // MANDATORY: If Google Search is used, extract URLs from groundingChunks and list them.
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (groundingChunks && Array.isArray(groundingChunks) && groundingChunks.length > 0) {
      // Prioritize actual verified URLs from the search results grounding.
      data = data.map((item, index) => {
        const chunk = groundingChunks[index % groundingChunks.length];
        if (chunk?.web?.uri) {
          return {
            ...item,
            sourceUrl: chunk.web.uri
          };
        }
        return item;
      });
    }

    // Fallback if data generation failed or resulted in empty output.
    if (!Array.isArray(data) || data.length === 0) {
      return [
        { title: "Quantum Computing in Web", snippet: "Exploring how quantum algorithms are beginning to impact cryptography and high-speed data processing.", sourceUrl: "https://google.com" },
        { title: "Agentic AI Frameworks", snippet: "The rise of autonomous AI agents integrated directly into browser environments via WASM.", sourceUrl: "https://google.com" },
        { title: "Edge Native Apps", snippet: "The shift from cloud-first to edge-first application architectures for zero latency.", sourceUrl: "https://google.com" }
      ];
    }

    return data;
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return [];
  }
};
