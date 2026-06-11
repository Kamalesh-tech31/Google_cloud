import type { FocusSessionsData } from "@/types/focus-sessions";

export async function getFocusSessionsData(): Promise<FocusSessionsData> {
  const response = await fetch(
    "http://localhost:5000/api/focus-sessions"
  );

  return response.json();
}