import type { AiAssistantData } from "@/types/assistant";

export async function getAiAssistantData(): Promise<AiAssistantData> {
  const response = await fetch(
    "http://localhost:5000/api/ai-assistant"
  );

  return response.json();
}