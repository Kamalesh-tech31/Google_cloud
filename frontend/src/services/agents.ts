import type { AgentActivity, AgentFeed, AgentName } from "@/types/agents";
import { allAgentFeeds, getAgentFeed, getAllAgentActivities } from "@/lib/mock-agents";

export async function getAgentActivities(agent?: AgentName): Promise<AgentActivity[]> {
  if (!agent) return getAllAgentActivities();
  const feed = getAgentFeed(agent);
  return feed?.recent ?? [];
}

export async function getAgentFeeds(): Promise<AgentFeed[]> {
  return allAgentFeeds;
}
