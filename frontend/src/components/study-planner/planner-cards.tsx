"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, ListChecks, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StudySession {
  id: string;
  title: string;
  topic: string;
  scheduled: string;
  duration: string;
  priority: "High" | "Medium" | "Low";
  status: "Planned" | "In progress" | "Completed" | "Pending";
}

interface WeeklyPlanItem {
  id: string;
  weekLabel: string;
  completion: number;
  highlight: string;
}

interface RecommendationItem {
  id: string;
  title: string;
  detail: string;
}

interface DailyPlanCardProps {
  sessions: StudySession[];
}

interface WeeklyPlanCardProps {
  weeks: WeeklyPlanItem[];
}

interface UpcomingSessionsCardProps {
  sessions: StudySession[];
}

interface PriorityTasksCardProps {
  tasks: StudySession[];
}

interface StudyRecommendationCardProps {
  recommendations: RecommendationItem[];
}

function SessionTag({ priority }: { priority: string }) {
  const tagStyles = {
    High: "bg-[#141414] text-[#D4AF37] border border-[#232323]",
    Medium: "bg-[#141414] text-[#E6C766] border border-[#232323]",
    Low: "bg-[#141414] text-slate-400 border border-[#232323]",
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tagStyles[priority as keyof typeof tagStyles]}`}>
      {priority}
    </span>
  );
}

export function DailyPlanCard({ sessions }: DailyPlanCardProps) {
  const totalMinutes = sessions.reduce((acc, s) => acc + parseInt(s.duration), 0) || 0;
  const completed = sessions.filter((s) => s.status === "Completed").length;
  const pct = Math.round((completed / Math.max(1, sessions.length)) * 100);

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }}>
      <Card className="rounded-[1.5rem] border border-[#232323] bg-[#141414] p-6">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>Today's Plan</CardTitle>
            <CardDescription>Tasks, time slots, and completion for today.</CardDescription>
          </div>
          <Clock className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="space-y-4 pt-2">
          <div className="rounded-2xl bg-[#0d0d0d] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">Estimated study time</p>
              <p className="text-sm font-semibold text-white">{totalMinutes} min</p>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-slate-400">Completion</p>
              <p className="text-sm font-semibold text-white">{pct}%</p>
            </div>
          </div>

          <div className="space-y-3">
            {sessions.map((session) => (
              <div key={session.id} className="rounded-2xl border border-[#232323] bg-[#0d0d0d] p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{session.title}</p>
                    <p className="text-sm text-slate-400">{session.topic}</p>
                  </div>
                  <div className="text-sm text-slate-400 text-right">
                    <div>{session.scheduled}</div>
                    <div>{session.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function WeeklyPlanCard({ weeks }: WeeklyPlanCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <Card className="rounded-[1.5rem] border border-[#232323] bg-[#141414] p-5">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>Weekly Roadmap</CardTitle>
            <CardDescription>Compact plan from Monday to Sunday.</CardDescription>
          </div>
          <CalendarDays className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="space-y-3 pt-2">
          {weeks.map((week) => (
            <div key={week.id} className="rounded-2xl border border-[#232323] bg-[#0d0d0d] p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">{week.weekLabel}</p>
                  <p className="text-sm text-slate-400">{week.highlight}</p>
                </div>
                <div className="text-sm font-semibold text-white">{week.completion}%</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function UpcomingSessionsCard({ sessions }: UpcomingSessionsCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <Card className="rounded-[1.5rem] border border-[#232323] bg-[#141414] p-5">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>Upcoming Milestones</CardTitle>
            <CardDescription>Upcoming milestones and target dates.</CardDescription>
          </div>
          <ListChecks className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="space-y-3 pt-2">
          {sessions.map((s) => (
            <div key={s.id} className="rounded-2xl border border-[#232323] bg-[#0d0d0d] p-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-white">{s.title}</p>
                <p className="text-sm text-slate-400">{s.topic}</p>
              </div>
              <div className="text-sm text-slate-400 text-right">
                <div>{s.scheduled}</div>
                <div className="mt-1 font-semibold text-white">{s.status}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Priority tasks are intentionally removed from the primary layout per design.
// The page will surface key tasks inside Today's Plan; keep this component if needed later.

export function StudyRecommendationCard({ recommendations }: StudyRecommendationCardProps) {
  const item = recommendations && recommendations.length ? recommendations[0] : null;

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34 }}>
      <Card className="rounded-[1.5rem] border border-[#232323] bg-[#141414] p-5">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>Planner Insight</CardTitle>
            <CardDescription>One prioritized AI recommendation.</CardDescription>
          </div>
          <Sparkles className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="pt-2">
          {item ? (
            <div className="rounded-2xl border border-[#232323] bg-[#0d0d0d] p-4">
              <p className="font-medium text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
            </div>
          ) : (
            <p className="text-sm text-slate-400">No recommendations right now.</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
