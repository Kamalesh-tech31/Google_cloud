export interface QuizSummary {
  id: string;
  title: string;
  subject: string;
  questions: number;
  status: "Ready" | "Completed" | "Draft";
  createdAt: string;
}

export interface QuizPerformance {
  accuracy: number;
  completionRate: number;
  averageScore: number;
}

export interface QuizHistoryItem {
  id: string;
  title: string;
  date: string;
  score: number;
  accuracy: number;
  status: "Passed" | "Needs Review" | "Completed";
}

export interface QuizCenterData {
  generatedQuizzes: QuizSummary[];
  performance: QuizPerformance;
  history: QuizHistoryItem[];
  suggestedSubjects: string[];
}
