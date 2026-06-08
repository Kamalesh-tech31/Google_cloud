import type { QuizCenterData } from "@/types/quiz";
import { quizMockData } from "@/lib/mock-quiz";

export async function getQuizCenterData() {
  const response = await fetch("http://localhost:5000/api/quiz");
  return response.json();
}