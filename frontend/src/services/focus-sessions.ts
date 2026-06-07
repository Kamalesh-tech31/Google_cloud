import type { FocusSessionsData } from "@/types/focus-sessions";
import { focusSessionsMockData } from "@/lib/mock-focus-sessions";

export async function getFocusSessionsData(): Promise<FocusSessionsData> {
  return focusSessionsMockData;
}
