"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Timer, CheckSquare, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { FocusSession } from "@/types/focus-sessions";

interface CurrentFocusCardProps {
  session: FocusSession;
}

interface FocusTimerCardProps {}

interface SessionChecklistCardProps {
  recentSessions: FocusSession[];
}

interface StatsCardProps {
  dailyFocusMinutes: number;
  focusStreak: number;
  sessionsCompleted: number;
}

export function CurrentFocusCard({ session }: CurrentFocusCardProps) {
  const aiRecommendation = `Focus on ${session.subject} drills using ${session.technique}.`;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
      <Card className="rounded-[1.25rem] border border-[#232323] bg-[#141414] p-5">
        <CardHeader className="gap-3">
          <div>
            <CardTitle className="text-xl">Current Focus Session</CardTitle>
            <CardDescription className="text-sm text-slate-400">Session details and AI suggestion</CardDescription>
          </div>
          <Timer className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="space-y-4 pt-2">
          <div className="rounded-2xl bg-[#0d0d0d] p-4">
            <p className="text-lg font-semibold text-white">{session.title}</p>
            <div className="mt-2 flex items-center justify-between text-sm text-slate-400">
              <span>{session.duration}</span>
              <span>{session.technique}</span>
              <span className="text-slate-400">Difficulty: {session.progress > 75 ? "Hard" : session.progress > 45 ? "Medium" : "Easy"}</span>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0d0d0d] p-3 text-sm text-slate-300">
            <p className="font-medium text-white">AI Recommendation</p>
            <p className="mt-1 text-sm text-slate-300">{aiRecommendation}</p>
          </div>

          <div className="flex gap-3">
            <Button variant="default" size="default">Start Session</Button>
            <Button variant="outline" size="default">End Session</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FocusTimerCard(_: FocusTimerCardProps) {
  // simple UI timer (client-side only)
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    if (running) {
      timer = window.setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    }
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [running]);

  function reset() {
    setRunning(false);
    setSeconds(25 * 60);
  }

  function format(sec: number) {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
      <Card className="rounded-[1.25rem] border border-[#232323] bg-[#141414] p-5">
        <CardHeader className="gap-3">
          <div>
            <CardTitle className="text-xl">Focus Timer</CardTitle>
            <CardDescription className="text-sm text-slate-400">Premium countdown timer</CardDescription>
          </div>
          <Timer className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="space-y-4 pt-2">
          <div className="rounded-2xl bg-[#0d0d0d] p-6 text-center">
            <p className="text-4xl font-semibold text-white">{format(seconds)}</p>
          </div>

          <div className="flex gap-3">
            <Button variant="default" onClick={() => setRunning(true)}>Start</Button>
            <Button variant="secondary" onClick={() => setRunning(false)}>Pause</Button>
            <Button variant="outline" onClick={reset}>Reset</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function SessionChecklistCard({ recentSessions }: SessionChecklistCardProps) {
  const initial = recentSessions.map((s) => ({ id: s.id, title: s.title, done: s.progress >= 100 }));
  const [items, setItems] = useState(initial);

  const completed = items.filter((i) => i.done).length;
  const pct = Math.round((completed / Math.max(1, items.length)) * 100);

  function toggle(id: string) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
      <Card className="rounded-[1.25rem] border border-[#232323] bg-[#141414] p-5">
        <CardHeader className="gap-3">
          <div>
            <CardTitle className="text-xl">Session Checklist</CardTitle>
            <CardDescription className="text-sm text-slate-400">Tasks and completion for recent sessions</CardDescription>
          </div>
          <CheckSquare className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="space-y-3 pt-2">
          <div className="rounded-2xl bg-[#0d0d0d] p-3">
            <p className="text-sm text-slate-400">Completion</p>
            <p className="mt-1 text-lg font-semibold text-white">{pct}%</p>
          </div>

          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-md bg-[#0d0d0d] p-3"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    aria-label={`toggle-${item.id}`}
                    checked={item.done}
                    onChange={() => toggle(item.id)}
                    className="h-4 w-4 rounded bg-[#141414] border border-[#232323]"
                  />
                  <p className={`text-sm ${item.done ? "text-slate-400 line-through" : "text-white"}`}>{item.title}</p>
                </div>
                <span className="text-sm text-slate-400">Task</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FocusStatsCard({ dailyFocusMinutes, focusStreak, sessionsCompleted }: StatsCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
      <Card className="rounded-[1.25rem] border border-[#232323] bg-[#141414] p-5">
        <CardHeader className="gap-3">
          <div>
            <CardTitle className="text-xl">Focus Stats</CardTitle>
            <CardDescription className="text-sm text-slate-400">Quick daily metrics</CardDescription>
          </div>
          <Zap className="text-[#D4AF37]" />
        </CardHeader>
        <CardContent className="grid gap-3 grid-cols-2 sm:grid-cols-2 pt-2">
          <div className="rounded-2xl bg-[#0d0d0d] p-3 text-center">
            <p className="text-lg font-semibold text-white">{dailyFocusMinutes}m</p>
            <p className="text-sm text-slate-400">Today</p>
          </div>
          <div className="rounded-2xl bg-[#0d0d0d] p-3 text-center">
            <p className="text-lg font-semibold text-white">{sessionsCompleted}</p>
            <p className="text-sm text-slate-400">Completed</p>
          </div>
          <div className="rounded-2xl bg-[#0d0d0d] p-3 text-center">
            <p className="text-lg font-semibold text-white">{focusStreak}</p>
            <p className="text-sm text-slate-400">Streak</p>
          </div>
          <div className="rounded-2xl bg-[#0d0d0d] p-3 text-center">
            <p className="text-lg font-semibold text-white">{Math.round((dailyFocusMinutes / 480) * 100)}%</p>
            <p className="text-sm text-slate-400">Focus Score</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
