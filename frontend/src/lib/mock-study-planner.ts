import type { StudyPlannerData } from "@/types/study-planner";

export const studyPlannerMockData: StudyPlannerData = {
  dailyPlan: [
    {
      id: "daily-1",
      title: "Graph algorithms practice",
      topic: "DFS / BFS",
      scheduled: "Today · 9:00 AM",
      duration: "90 min",
      priority: "High",
      status: "Planned",
    },
    {
      id: "daily-2",
      title: "React hooks sprint",
      topic: "useMemo / useCallback",
      scheduled: "Today · 1:00 PM",
      duration: "60 min",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: "daily-3",
      title: "Memory recall session",
      topic: "CS fundamentals",
      scheduled: "Today · 5:30 PM",
      duration: "45 min",
      priority: "Low",
      status: "Pending",
    },
  ],
  weeklyPlan: [
    {
      id: "week-1",
      weekLabel: "Mon - Wed",
      completion: 72,
      highlight: "Focus on problem-solving flow and note revision.",
    },
    {
      id: "week-2",
      weekLabel: "Thu - Sat",
      completion: 55,
      highlight: "Balance mock quizzes with concept refresh.",
    },
    {
      id: "week-3",
      weekLabel: "Sun",
      completion: 40,
      highlight: "Prepare a strong plan for next week.",
    },
  ],
  upcomingSessions: [
    {
      id: "upcoming-1",
      title: "System design review",
      topic: "Scalability patterns",
      scheduled: "Tomorrow · 10:00 AM",
      duration: "75 min",
      priority: "High",
      status: "Planned",
    },
    {
      id: "upcoming-2",
      title: "Algorithm speed run",
      topic: "Heap / Priority Queue",
      scheduled: "Tomorrow · 3:00 PM",
      duration: "60 min",
      priority: "Medium",
      status: "Planned",
    },
  ],
  priorityTasks: [
    {
      id: "task-1",
      title: "Finalize tray of practice questions",
      topic: "Binary search trees",
      scheduled: "Today",
      duration: "30 min",
      priority: "High",
      status: "In progress",
    },
    {
      id: "task-2",
      title: "Update mission notes",
      topic: "Placement strategy",
      scheduled: "Tonight",
      duration: "20 min",
      priority: "Medium",
      status: "Pending",
    },
  ],
  recommendations: [
    {
      id: "rec-1",
      title: "Optimize session cadence",
      detail: "Move your second study block to 2 PM for higher energy retention.",
    },
    {
      id: "rec-2",
      title: "Strengthen weak topics",
      detail: "Add a short review on dynamic programming tomorrow morning.",
    },
    {
      id: "rec-3",
      title: "Use active recall",
      detail: "Turn your notes into questions to improve retention after each block.",
    },
  ],
};
