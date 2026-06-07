"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { AssistantMessage } from "@/types/assistant";

interface AssistantChatPanelProps {
  initialMessages: AssistantMessage[];
  quickPrompts: string[];
}

const formatRoleLabel = (role: AssistantMessage["role"]) => {
  if (role === "assistant") return "Zenix";
  if (role === "user") return "You";
  return "System";
};

const typingIndicator = () => (
  <div className="inline-flex items-center gap-2 text-sm text-slate-400">
    <span>Zenix is thinking...</span>
    <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-[#D4AF37]" />
  </div>
);

export function AssistantChatPanel({ initialMessages, quickPrompts }: AssistantChatPanelProps) {
  const [messages, setMessages] = useState<AssistantMessage[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMessage: AssistantMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      timestamp: time,
    };

    setMessages((current) => [...current, userMessage]);
    setDraft("");
    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage: AssistantMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          "I’m reviewing your mission request and will provide a focused recommendation shortly.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((current) => [...current, assistantMessage]);
      setIsTyping(false);
    }, 900);
  };

  const handlePromptClick = (prompt: string) => {
    setDraft(prompt);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const emptyState = messages.length === 0;

  return (
    <div className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6 shadow-xl shadow-slate-900/20">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 text-sm text-slate-400">
            <span className="rounded-full border border-[#232323] bg-[#0d0d0d] px-4 py-2 text-white">Chat Copilot</span>
            <span>Ask a question → Get an answer.</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handlePromptClick(prompt)}
                className="rounded-full border border-[#232323] bg-[#0f0f0f] px-4 py-2 text-sm text-slate-200 transition hover:border-[#D4AF37] hover:text-white"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[420px] overflow-hidden rounded-[1.75rem] border border-[#232323] bg-[#050505] p-5">
          {emptyState ? (
            <div className="flex min-h-[340px] flex-col items-center justify-center gap-6 text-center text-slate-400">
              <p className="text-2xl font-semibold text-white">What can I help you with today?</p>
              <div className="grid gap-3 text-left sm:grid-cols-2">
                {[
                  "Explain a concept",
                  "Review your study plan",
                  "Generate practice questions",
                  "Get AI recommendations",
                ].map((option) => (
                  <div key={option} className="rounded-3xl border border-[#232323] bg-[#0d0d0d] px-4 py-3 text-sm text-slate-300">
                    • {option}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`rounded-[1.5rem] border px-5 py-4 ${
                    message.role === "assistant"
                      ? "border-[#333333] bg-[#111111] text-slate-100"
                      : "border-[#232323] bg-[#141414] text-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-slate-500">
                    <span>{formatRoleLabel(message.role)}</span>
                    <span>{message.timestamp}</span>
                  </div>
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-7">{message.content}</p>
                </div>
              ))}
              {isTyping && (
                <div className="rounded-[1.5rem] border border-[#232323] bg-[#111111] px-5 py-4 text-sm text-slate-400">
                  {typingIndicator()}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Textarea
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your mission prompt here..."
            className="min-h-[140px] bg-[#0d0d0d] text-white"
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-400">Press Enter to send. Shift + Enter for a new line.</p>
            <Button onClick={handleSend}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
