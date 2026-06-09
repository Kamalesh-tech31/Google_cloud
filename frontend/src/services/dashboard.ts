import type { DashboardAgentResponse } from "@/types/dashboard";

export async function getDashboardData(): Promise<DashboardAgentResponse> {
  const response = await fetch(
    "http://localhost:5000/api/dashboard"
  );

  return response.json();
}