import type { AgentActivity, AgentFeed, AgentName } from "@/types/agents";

export const missionAgentFeed: AgentFeed = {
  agent: "Mission Agent",
  recent: [
    {
      id: "m-1",
      agent: "Mission Agent",
      action: "Refined mission objectives to prioritize system-design practice",
      time: "2m ago",
    },
    {
      id: "m-2",
      agent: "Mission Agent",
      action: "Calibrated success probability based on recent sessions",
      time: "15m ago",
    },
  ],
};

export const goalAgentFeed: AgentFeed = {
  agent: "Goal Agent",
  recent: [
    {
      id: "g-1",
      agent: "Goal Agent",
      action: "Created goal: Placement-readiness mission",
      time: "10m ago",
    },
    {
      id: "g-2",
      agent: "Goal Agent",
      action: "Marked React mini-sprint as at-risk",
      time: "1h ago",
    },
  ],
};

export const plannerAgentFeed: AgentFeed = {
  agent: "Planner Agent",
  recent: [
    {
      id: "p-1",
      agent: "Planner Agent",
      action: "Scheduled 'Review algorithm patterns' for today at 10:00 AM",
      time: "25m ago",
    },
    {
      id: "p-2",
      agent: "Planner Agent",
      action: "Optimized today's plan to reduce cognitive load",
      time: "3h ago",
    },
  ],
};

export const quizAgentFeed: AgentFeed = {
  agent: "Quiz Agent",
  recent: [
    {
      id: "q-1",
      agent: "Quiz Agent",
      action: "Generated a 10-question quiz on recursion",
      time: "4h ago",
    },
  ],
};

export const analyticsAgentFeed: AgentFeed = {
  agent: "Analytics Agent",
  recent: [
    {
      id: "a-1",
      agent: "Analytics Agent",
      action: "Detected +18% focus trend from last week",
      time: "12m ago",
    },
  ],
};

export const behaviorAgentFeed: AgentFeed = {
  agent: "Behavior Agent",
  recent: [
    {
      id: "b-1",
      agent: "Behavior Agent",
      action: "Logged a 32-minute deep focus session",
      time: "50m ago",
    },
    {
      id: "b-2",
      agent: "Behavior Agent",
      action: "Detected distraction event during session",
      time: "2h ago",
    },
  ],
};

export const allAgentFeeds: AgentFeed[] = [
  missionAgentFeed,
  goalAgentFeed,
  plannerAgentFeed,
  quizAgentFeed,
  analyticsAgentFeed,
  behaviorAgentFeed,
];

export function getAgentFeed(agent: AgentName): AgentFeed | undefined {
  return allAgentFeeds.find((f) => f.agent === agent);
}

export function getAllAgentActivities(): AgentActivity[] {
  return allAgentFeeds.flatMap((f) => f.recent);
}
