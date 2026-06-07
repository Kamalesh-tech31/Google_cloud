import AppShell from "@/components/layout/app-shell";
import { getAiAssistantData } from "@/services/ai-assistant";
import { AssistantChatPanel } from "@/components/ai-assistant/assistant-chat";

export default async function AiAssistantPage() {
  const assistantData = await getAiAssistantData();
  const quickPrompts = [
    "Review today's plan",
    "Create a study session",
    "Generate quiz questions",
    "Explain a concept",
    "What should I do next?",
  ];

  return (
    <AppShell>
      <div className="space-y-10">
        <section className="space-y-6">
          <div className="max-w-4xl space-y-4">
            <h1 className="text-5xl font-bold">AI Mission Copilot</h1>
            <p className="text-lg leading-8 text-slate-400">
              Ask questions, solve doubts, and receive mission-specific guidance.
            </p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full border border-[#232323] bg-[#0d0d0d] px-4 py-2 text-sm text-slate-300">
            <span className="text-slate-400">Current Mission:</span>
            <span className="font-semibold text-white">{assistantData.currentMission}</span>
          </div>
        </section>

        <AssistantChatPanel quickPrompts={quickPrompts} initialMessages={assistantData.conversation} />
      </div>
    </AppShell>
  );
}
