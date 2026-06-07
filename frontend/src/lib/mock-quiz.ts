import type { QuizCenterData } from "@/types/quiz";

export const quizMockData: QuizCenterData = {
  generatedQuizzes: [
    {
      id: "quiz-1",
      title: "Recursion and Trees Quiz",
      subject: "Algorithms",
      questions: 12,
      status: "Ready",
      createdAt: "Today · 9:00 AM",
    },
    {
      id: "quiz-2",
      title: "React Hooks Mastery",
      subject: "Web Development",
      questions: 10,
      status: "Draft",
      createdAt: "Yesterday · 5:30 PM",
    },
    {
      id: "quiz-3",
      title: "Design Patterns Review",
      subject: "System Design",
      questions: 8,
      status: "Completed",
      createdAt: "2 days ago",
    },
  ],
  performance: {
    accuracy: 87,
    completionRate: 74,
    averageScore: 82,
  },
  history: [
    {
      id: "history-1",
      title: "Binary Search Trees Quiz",
      date: "Apr 25",
      score: 88,
      accuracy: 92,
      status: "Passed",
    },
    {
      id: "history-2",
      title: "React State Management",
      date: "Apr 23",
      score: 76,
      accuracy: 78,
      status: "Needs Review",
    },
    {
      id: "history-3",
      title: "Algorithm Complexity",
      date: "Apr 20",
      score: 94,
      accuracy: 96,
      status: "Completed",
    },
  ],
  suggestedSubjects: ["Dynamic Programming", "System Design", "Active Recall"],
};
