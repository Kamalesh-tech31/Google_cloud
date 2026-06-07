import AppShell from "@/components/layout/app-shell";
import { getFocusSessionsData } from "@/services/focus-sessions";
import {
  CurrentFocusCard,
  FocusTimerCard,
  SessionChecklistCard,
  FocusStatsCard,
} from "@/components/focus-sessions/focus-cards";

export default async function FocusSessionsPage() {
  const sessions = await getFocusSessionsData();

  return (
    <AppShell>
      <div className="space-y-10">
        <section className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-5xl font-bold">Focus Sessions</h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Build a flow-ready routine with active focus blocks and restorative breaks.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card px-5 py-4 text-sm text-slate-300">
              <p className="text-slate-400">Session readiness</p>
              <p className="mt-2 font-semibold text-white">Balanced and mission aligned</p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          {sessions.activeSession ? (
            <CurrentFocusCard session={sessions.activeSession} />
          ) : null}
          <FocusTimerCard />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          <SessionChecklistCard recentSessions={sessions.recentSessions} />
          <FocusStatsCard
            dailyFocusMinutes={sessions.stats.dailyFocusMinutes}
            focusStreak={sessions.stats.focusStreak}
            sessionsCompleted={sessions.stats.sessionsCompleted}
          />
        </div>
      </div>
    </AppShell>
  );
}
