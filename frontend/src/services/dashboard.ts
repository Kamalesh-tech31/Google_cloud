import type { DashboardAgentResponse } from "@/types/dashboard";
import { dashboardMockData } from "@/lib/mock-dashboard";

export async function getDashboardData(): Promise<DashboardAgentResponse> {
  return dashboardMockData;
}
