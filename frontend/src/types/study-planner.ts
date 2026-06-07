export interface StudySession {
  id: string;
  title: string;
  topic: string;
  scheduled: string;
  duration: string;
  priority: "High" | "Medium" | "Low";
  status: "Planned" | "In progress" | "Completed" | "Pending";
}

export interface WeeklyPlan {
  id: string;
  weekLabel: string;
  completion: number;
  highlight: string;
}

export interface RecommendationItem {
  id: string;
  title: string;
  detail: string;
}

export interface StudyPlannerData {
  dailyPlan: StudySession[];
  weeklyPlan: WeeklyPlan[];
  upcomingSessions: StudySession[];
  priorityTasks: StudySession[];
  recommendations: RecommendationItem[];
}
