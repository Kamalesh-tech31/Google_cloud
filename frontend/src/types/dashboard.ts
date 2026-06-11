export interface Goal {
  id: string;
  title: string;
  progress: number;
  streak: number;
  status: "on-track" | "at-risk" | "completed";
}

export interface StudyPlan {
  id: string;
  title: string;
  scheduled: string;
  duration: string;
  priority: "High" | "Medium" | "Low";
  status: string;
}

export interface Insight {
  id: string;
  title: string;
  value: string;
  trend: "up" | "flat" | "down";
  description: string;
}

export interface RoadmapPhase {
  id: string;
  title: string;
  status: "complete" | "in-progress" | "pending";
}

export interface Recommendation {
  action: string;
  reason: string;
}

export interface DashboardAgentResponse {
  mission: string;
  currentPhase: string;
  missionHealth: string;
  nextMilestone: string;
  roadmap: RoadmapPhase[];
  successProbability: number;
  recommendations: Recommendation[];
  goals: Goal[];
  studyPlan: StudyPlan[];
  insights: Insight[];
  focusScore: number;
  todayFocusMinutes: number;
  currentStreak: number;
  weeklyFocusTrend: number[];
  studyHours: number;
  missionProgress: number;
  analyticsInsight: string;
}
