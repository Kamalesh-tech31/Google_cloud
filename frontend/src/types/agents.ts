export type AgentName =
  | "Mission Agent"
  | "Goal Agent"
  | "Planner Agent"
  | "Quiz Agent"
  | "Analytics Agent"
  | "Behavior Agent";

export interface AgentActivity {
  id: string;
  agent: AgentName;
  action: string;
  time: string; // human friendly
  meta?: Record<string, unknown>;
}

export interface AgentFeed {
  agent: AgentName;
  recent: AgentActivity[];
}
