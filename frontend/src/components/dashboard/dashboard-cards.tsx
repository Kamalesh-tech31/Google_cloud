"use client";

import { motion } from "framer-motion";
import { Activity, ArrowUpRight, CheckCircle2, Sparkles, Target } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface RoadmapPhase {
  id: string;
  title: string;
  status: "complete" | "in-progress" | "pending";
}

interface RecommendationItem {
  action: string;
  reason: string;
}

interface MissionCardProps {
  mission: string;
  currentPhase: string;
  missionHealth: string;
  successProbability: number;
  nextMilestone: string;
}

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  accent?: string;
}

interface NextBestActionCardProps {
  action: string;
  reason: string;
  confidence: number;
}

interface RecommendationCardProps {
  recommendations: RecommendationItem[];
}

interface AgentActivity {
  id: string;
  agent: string;
  action: string;
  time: string;
}

interface AgentActivityCardProps {
  activities: AgentActivity[];
}

interface PlanCardProps {
  plans: {
    id: string;
    title: string;
    scheduled: string;
    duration: string;
    priority: string;
    status: string;
  }[];
}

interface GoalCardProps {
  goals: {
    id: string;
    title: string;
    progress: number;
    streak: number;
    status: "on-track" | "at-risk" | "completed";
  }[];
}

interface MissionRoadmapCardProps {
  roadmap: RoadmapPhase[];
}

interface FocusSnapshotCardProps {
  todayFocusMinutes: number;
  currentStreak: number;
  focusScore: number;
}

interface AnalyticsSnapshotCardProps {
  weeklyTrend: number[];
  studyHours: number;
  missionProgress: number;
  insight: string;
}

export function MissionCard({
  mission,
  currentPhase,
  missionHealth,
  successProbability,
  nextMilestone,
}: MissionCardProps) {
  const healthClasses = missionHealth.toLowerCase().includes("on track")
    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
    : missionHealth.toLowerCase().includes("risk")
    ? "border-amber-500/20 bg-amber-500/10 text-amber-300"
    : "border-slate-700 bg-slate-900 text-slate-300";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6 shadow-xl shadow-slate-900/20">
        <CardHeader className="mb-4 gap-4">
          <div>
            <CardTitle className="text-2xl">Mission Overview</CardTitle>
            <CardDescription>
              Live mission telemetry, health signals, and milestone readiness.
            </CardDescription>
          </div>
          <div className={`rounded-full border px-3 py-1 text-sm ${healthClasses}`}>
            {missionHealth}
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="rounded-3xl bg-[#0d0d0d] p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Mission</p>
            <p className="mt-3 text-3xl font-semibold leading-tight text-white">{mission}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-[#0d0d0d] p-4 text-white">
              <p className="text-sm text-slate-400">Current Phase</p>
              <p className="mt-2 font-semibold">{currentPhase}</p>
            </div>
            <div className="rounded-3xl bg-[#0d0d0d] p-4 text-white">
              <p className="text-sm text-slate-400">Mission Health</p>
              <p className="mt-2 font-semibold">{missionHealth}</p>
            </div>
            <div className="rounded-3xl bg-[#0d0d0d] p-4 text-white">
              <p className="text-sm text-slate-400">Success Probability</p>
              <p className="mt-2 font-semibold">{successProbability}%</p>
            </div>
            <div className="rounded-3xl bg-[#0d0d0d] p-4 text-white">
              <p className="text-sm text-slate-400">Next Milestone</p>
              <p className="mt-2 font-semibold">{nextMilestone}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function MissionRoadmapCard({ roadmap }: MissionRoadmapCardProps) {
  const statusConfig = {
    complete: {
      label: "Complete",
      icon: "✓",
      classes: "text-emerald-300",
    },
    "in-progress": {
      label: "In progress",
      icon: "🟡",
      classes: "text-amber-300",
    },
    pending: {
      label: "Upcoming",
      icon: "⬜",
      classes: "text-slate-500",
    },
  } as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.33 }}
    >
      <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6 shadow-xl shadow-slate-900/20">
        <CardHeader className="mb-4 gap-4">
          <div>
            <CardTitle className="text-2xl">Mission Roadmap</CardTitle>
            <CardDescription>
              Track phases in a vertical trajectory from foundation to interview readiness.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {roadmap.map((item) => (
            <div key={item.id} className="flex items-center gap-4 rounded-3xl border border-[#232323] bg-[#0d0d0d] p-4">
              <div className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#2c2c2c] bg-[#121212] ${statusConfig[item.status].classes}`}>
                {statusConfig[item.status].icon}
              </div>
              <div className="min-w-0">
                <p className="font-medium text-white">{item.title}</p>
                <p className="text-sm text-slate-400">{statusConfig[item.status].label}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FocusSnapshotCard({
  todayFocusMinutes,
  currentStreak,
  focusScore,
}: FocusSnapshotCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.33 }}
    >
      <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6 shadow-xl shadow-slate-900/20">
        <CardHeader className="mb-4 gap-4">
          <div>
            <CardTitle className="text-2xl">Focus Snapshot</CardTitle>
            <CardDescription>
              Key focus metrics to keep your mission aligned and on pace.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-3xl bg-[#0d0d0d] p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Today&apos;s focus</p>
            <p className="mt-3 text-3xl font-semibold text-white">{todayFocusMinutes} min</p>
            <p className="mt-2 text-sm text-slate-400">Deep focus time captured today</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#0d0d0d] p-4 text-white">
              <p className="text-sm text-slate-400">Current streak</p>
              <p className="mt-2 text-2xl font-semibold">{currentStreak} days</p>
            </div>
            <div className="rounded-3xl bg-[#0d0d0d] p-4 text-white">
              <p className="text-sm text-slate-400">Focus score</p>
              <p className="mt-2 text-2xl font-semibold">{focusScore}%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function MetricCard({
  title,
  value,
  description,
  accent = "bg-[#141414] text-white",
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`rounded-3xl border border-[#232323] p-5 ${accent}`}>
        <CardHeader className="gap-2">
          <CardTitle className="text-lg text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold text-white">{value}</p>
          <p className="mt-3 text-sm text-slate-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function NextBestActionCard({ action, reason, confidence }: NextBestActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32 }}
    >
      <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6 shadow-xl shadow-slate-900/20">
        <CardHeader className="mb-4 gap-4">
          <div>
            <CardTitle className="text-2xl">Next Best Action</CardTitle>
            <CardDescription>
              The highest-priority mission item selected by your agents.
            </CardDescription>
          </div>
          <ArrowUpRight className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="rounded-3xl bg-[#0d0d0d] p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Action</p>
            <p className="mt-3 text-2xl font-semibold text-white">{action}</p>
          </div>
          <div className="rounded-3xl bg-[#0d0d0d] p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Reason</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{reason}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-[#2c2c2c] bg-[#0d0d0d] px-3 py-1 text-sm text-slate-300">
              Confidence: {confidence}%
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function AnalyticsSnapshotCard({
  weeklyTrend,
  studyHours,
  missionProgress,
  insight,
}: AnalyticsSnapshotCardProps) {
  const barHeightClass = (value: number) =>
    value >= 85
      ? "h-[88%]"
      : value >= 75
      ? "h-[72%]"
      : value >= 65
      ? "h-[60%]"
      : value >= 55
      ? "h-[50%]"
      : "h-[40%]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32 }}
    >
      <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6 shadow-xl shadow-slate-900/20">
        <CardHeader className="mb-4 gap-4">
          <div>
            <CardTitle className="text-2xl">Analytics Snapshot</CardTitle>
            <CardDescription>
              Study signals and mission momentum for the week.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-3xl bg-[#0d0d0d] p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-400">Study hours</p>
                <p className="mt-2 text-3xl font-semibold text-white">{studyHours}h</p>
              </div>
              <div className="rounded-full border border-[#2c2c2c] bg-[#121212] px-3 py-1 text-sm text-slate-300">
                {missionProgress}% mission progress
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Weekly focus trend</p>
            <div className="grid grid-cols-7 gap-2">
              {weeklyTrend.map((value, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="flex h-16 w-full items-end rounded-full bg-slate-900">
                    <div className={`w-full rounded-full bg-emerald-400 ${barHeightClass(value)}`} />
                  </div>
                  <span className="text-[10px] text-slate-500">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-[#0d0d0d] p-4 text-sm leading-6 text-slate-300">
            {insight}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function GoalCard({ goals }: GoalCardProps) {
  const statusStyles: Record<string, string> = {
    "on-track": "bg-emerald-500/10 text-emerald-300",
    "at-risk": "bg-amber-500/10 text-amber-300",
    completed: "bg-[#D4AF37]/10 text-[#D4AF37]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.34 }}
    >
      <Card className="rounded-3xl border border-[#232323] p-6 bg-[#141414]">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>Goal Progress</CardTitle>
            <CardDescription>
              Mission objectives and completion signals from your study roadmap.
            </CardDescription>
          </div>
          <CheckCircle2 className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="rounded-3xl border border-[#232323] bg-[#0d0d0d] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-white">{goal.title}</p>
                  <p className="text-sm text-slate-400">{goal.streak}-day streak</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs ${statusStyles[goal.status]}`}>
                  {goal.status.replace("-", " ")}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-300">{goal.progress}% complete</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function RecommendationCard({ recommendations }: RecommendationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32 }}
    >
      <Card className="rounded-3xl border border-[#232323] bg-[#141414] p-6">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>AI Recommendations</CardTitle>
            <CardDescription>
              Mission actions with clear reasoning from your agent network.
            </CardDescription>
          </div>
          <Sparkles className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="rounded-3xl border border-[#232323] bg-[#0d0d0d] p-4">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Action</p>
              <p className="mt-2 text-base font-semibold text-white">{recommendation.action}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{recommendation.reason}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function AgentActivityCard({ activities }: AgentActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.34 }}
    >
      <Card className="rounded-3xl border border-[#232323] bg-[#141414] p-6">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>Agent Activity Feed</CardTitle>
            <CardDescription>
              Recent mission, planner, behavior, and quiz agent updates.
            </CardDescription>
          </div>
          <Activity className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="space-y-3">
          {activities.map((activity) => (
            <div key={activity.id} className="rounded-3xl border border-[#232323] bg-[#0d0d0d] p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold text-white">{activity.agent}</p>
                  <p className="mt-1 text-sm text-slate-400">{activity.action}</p>
                </div>
                <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
                  {activity.time}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function PlanCard({ plans }: PlanCardProps) {
  const totalFocus = plans.reduce((sum, item) => {
    const minutes = Number(item.duration.replace(/\D/g, "")) || 0;
    return sum + minutes;
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36 }}
    >
      <Card className="rounded-3xl border border-[#232323] bg-[#141414] p-6">
        <CardHeader className="gap-2">
          <div>
            <CardTitle>Today&apos;s Plan</CardTitle>
            <CardDescription>
              Your priority sessions and mission progress for the day.
            </CardDescription>
          </div>
          <Target className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="rounded-3xl bg-[#0d0d0d] p-4 text-white">
            <p className="text-sm text-slate-400">Total focus target</p>
            <p className="mt-2 text-3xl font-semibold">{totalFocus} min</p>
          </div>
          <div className="space-y-4">
            {plans.map((item) => (
              <div key={item.id} className="rounded-3xl border border-[#232323] bg-[#0d0d0d] p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-slate-400">{item.scheduled}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                    <span>{item.duration}</span>
                    <span className="rounded-full bg-slate-900/70 px-2 py-1">{item.priority}</span>
                    <span>{item.status}</span>
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
