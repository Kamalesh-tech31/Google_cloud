import type { QuizCenterData } from "@/types/quiz";
import { quizMockData } from "@/lib/mock-quiz";

export async function getQuizCenterData(): Promise<QuizCenterData> {
  return quizMockData;
}
