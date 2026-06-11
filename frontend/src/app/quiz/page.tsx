import AppShell from "@/components/layout/app-shell";
import { getQuizCenterData } from "@/services/quiz";

import {
  PerformanceMetricsCard,
  QuizSummaryCard,
  QuizHistoryCard,
  SuggestedSubjectsCard,
} from "@/components/quiz-center/quiz-cards";

export default async function QuizPage() {
  const quizData = await getQuizCenterData();

  return (
    <AppShell>
      <div className="space-y-10">
        <section>
          <h1 className="text-5xl font-bold">
            Quiz Center
          </h1>

          <p className="mt-2 text-muted-foreground">
            Generate and practice AI-powered quizzes.
          </p>
        </section>

        <PerformanceMetricsCard
          performance={quizData.performance}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <QuizSummaryCard
            quizzes={quizData.generatedQuizzes}
          />

          <QuizHistoryCard
            history={quizData.history}
          />
        </div>

        <SuggestedSubjectsCard
          subjects={quizData.suggestedSubjects}
        />
      </div>
    </AppShell>
  );
}