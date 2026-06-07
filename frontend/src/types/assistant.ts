export interface AssistantMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
}

export interface SuggestedPrompt {
  id: string;
  prompt: string;
}

export interface ContextMemoryItem {
  id: string;
  summary: string;
  category: string;
  updatedAt: string;
}

export interface AiAssistantData {
  currentMission: string;
  conversation: AssistantMessage[];
  prompts: SuggestedPrompt[];
  memory: ContextMemoryItem[];
}
