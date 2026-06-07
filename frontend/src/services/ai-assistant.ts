import type { AiAssistantData } from "@/types/assistant";
import { aiAssistantMockData } from "@/lib/mock-ai-assistant";

export async function getAiAssistantData(): Promise<AiAssistantData> {
  return aiAssistantMockData;
}
