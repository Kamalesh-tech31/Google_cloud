import type { AiAssistantData } from "@/types/assistant";

export const aiAssistantMockData: AiAssistantData = {
  currentMission: "Crack Google SDE",
  conversation: [],
  prompts: [
    {
      id: "prompt-1",
      prompt: "Create a 30-minute review plan for system design.",
    },
    {
      id: "prompt-2",
      prompt: "Summarize my progress on React and recommend next topics.",
    },
    {
      id: "prompt-3",
      prompt: "Generate quiz questions on recursion and dynamic programming.",
    },
  ],
  memory: [
    {
      id: "mem-1",
      summary: "Strong retention in mid-morning study blocks.",
      category: "Focus Pattern",
      updatedAt: "Today",
    },
    {
      id: "mem-2",
      summary: "Prefers active recall over passive reading.",
      category: "Learning Style",
      updatedAt: "Yesterday",
    },
  ],
};
