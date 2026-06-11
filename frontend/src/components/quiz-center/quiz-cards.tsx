"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, Sparkles, Trophy } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { QuizHistoryItem, QuizPerformance, QuizSummary } from "@/types/quiz";

interface PerformanceMetricsCardProps {
  performance: QuizPerformance;
}

interface QuizSummaryCardProps {
  quizzes: QuizSummary[];
}

interface QuizHistoryCardProps {
  history: QuizHistoryItem[];
}

interface SuggestedSubjectsCardProps {
  subjects: string[];
}

export function PerformanceMetricsCard({ performance }: PerformanceMetricsCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }}>
      <Card className="rounded-[2rem] border border-border p-6">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>Quiz Performance</CardTitle>
            <CardDescription>Track accuracy and completion across your generated quizzes.</CardDescription>
          </div>
          <Trophy className="text-primary" />
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-3 pt-3">
          <div className="rounded-3xl bg-muted p-4 text-white">
            <p className="text-sm text-slate-400">Accuracy</p>
            <p className="mt-2 text-3xl font-semibold">{performance.accuracy}%</p>
          </div>
          <div className="rounded-3xl bg-muted p-4 text-white">
            <p className="text-sm text-slate-400">Completion Rate</p>
            <p className="mt-2 text-3xl font-semibold">{performance.completionRate}%</p>
          </div>
          <div className="rounded-3xl bg-muted p-4 text-white">
            <p className="text-sm text-slate-400">Average Score</p>
            <p className="mt-2 text-3xl font-semibold">{performance.averageScore}%</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function QuizSummaryCard({ quizzes }: QuizSummaryCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }}>
      <Card className="rounded-[2rem] border border-border p-6">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>Generated Quizzes</CardTitle>
            <CardDescription>Review and launch AI-generated quizzes for your mission topics.</CardDescription>
          </div>
          <FileText className="text-primary" />
        </CardHeader>
        <CardContent className="space-y-4 pt-3">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="rounded-3xl border border-border bg-muted p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold">{quiz.title}</p>
                  <p className="text-sm text-slate-400">{quiz.subject}</p>
                </div>
                <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
                  {quiz.status}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
                <span>{quiz.questions} questions</span>
                <span>{quiz.createdAt}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function QuizHistoryCard({ history }: QuizHistoryCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }}>
      <Card className="rounded-[2rem] border border-border p-6">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>Quiz History</CardTitle>
            <CardDescription>See performance over your recent adaptive assessments.</CardDescription>
          </div>
          <CheckCircle2 className="text-primary" />
        </CardHeader>
        <CardContent className="space-y-4 pt-3">
          {history.map((item) => (
            <div key={item.id} className="rounded-3xl border border-border bg-muted p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-slate-400">{item.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{item.score}%</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.status}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-400">Accuracy: {item.accuracy}%</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function SuggestedSubjectsCard({ subjects }: SuggestedSubjectsCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }}>
      <Card className="rounded-[2rem] border border-border p-6">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>Suggested Subjects</CardTitle>
            <CardDescription>Topics the AI recommends for your next quiz generation.</CardDescription>
          </div>
          <Sparkles className="text-primary" />
        </CardHeader>
        <CardContent className="grid gap-3 pt-3 sm:grid-cols-2">
          {subjects.map((subject) => (
            <div key={subject} className="rounded-3xl border border-border bg-muted p-4 text-slate-100">
              <p className="font-semibold">{subject}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
