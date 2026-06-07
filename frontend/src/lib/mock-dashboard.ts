import type { DashboardAgentResponse } from "@/types/dashboard";

export const dashboardMockData: DashboardAgentResponse = {
  mission: "Crack Google SDE",
  currentPhase: "DSA Fundamentals",
  missionHealth: "On Track",
  nextMilestone: "BST Mastery Quiz",
  roadmap: [
    { id: "phase-1", title: "Foundation Setup", status: "complete" },
    { id: "phase-2", title: "Arrays", status: "complete" },
    { id: "phase-3", title: "Trees & BST", status: "in-progress" },
    { id: "phase-4", title: "Graphs", status: "pending" },
    { id: "phase-5", title: "Dynamic Programming", status: "pending" },
    { id: "phase-6", title: "System Design", status: "pending" },
    { id: "phase-7", title: "Interview Preparation", status: "pending" },
  ],
  successProbability: 84,
  recommendations: [
    {
      action: "Solve BST Problems",
      reason: "BST performance is currently below target based on recent quiz results.",
    },
    {
      action: "Review system design notes",
      reason: "Upcoming interviews require improved architecture clarity.",
    },
    {
      action: "Schedule a deep focus session",
      reason: "Focus trend is strongest in the next study window.",
    },
  ],
  goals: [
    {
      id: "goal-1",
      title: "Placement-readiness mission",
      progress: 68,
      streak: 9,
      status: "on-track",
    },
    {
      id: "goal-2",
      title: "React mastery mini-sprint",
      progress: 42,
      streak: 5,
      status: "at-risk",
    },
  ],
  studyPlan: [
    {
      id: "plan-1",
      title: "Review algorithm patterns",
      scheduled: "Today · 10:00 AM",
      duration: "90 min",
      priority: "High",
      status: "Planned",
    },
    {
      id: "plan-2",
      title: "Flashcards: CS fundamentals",
      scheduled: "Today · 2:00 PM",
      duration: "45 min",
      priority: "Medium",
      status: "In progress",
    },
    {
      id: "plan-3",
      title: "Practice mock quiz",
      scheduled: "Today · 6:30 PM",
      duration: "60 min",
      priority: "High",
      status: "Pending",
    },
  ],
  insights: [
    {
      id: "insight-1",
      title: "Most Productive Time",
      value: "10 AM - 1 PM",
      trend: "up",
      description: "Focus peaks during your mid-morning sessions.",
    },
    {
      id: "insight-2",
      title: "Focus Trend",
      value: "+18%",
      trend: "up",
      description: "Your attention span is improving across study blocks.",
    },
    {
      id: "insight-3",
      title: "Retention Trend",
      value: "+12%",
      trend: "flat",
      description: "Recall is stable after active review cycles.",
    },
  ],
  focusScore: 82,
  todayFocusMinutes: 135,
  currentStreak: 7,
  weeklyFocusTrend: [55, 70, 65, 80, 72, 90, 85],
  studyHours: 10,
  missionProgress: 68,
  analyticsInsight: "Your weekly focus rhythm is consistent and ready for a stronger sprint.",
};
