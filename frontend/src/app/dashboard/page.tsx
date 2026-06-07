import AppShell from "@/components/layout/app-shell";
import { getDashboardData } from "@/services/dashboard";
import {
  MissionCard,
  MissionRoadmapCard,
  NextBestActionCard,
  PlanCard,
  FocusSnapshotCard,
  AnalyticsSnapshotCard,
} from "@/components/dashboard/dashboard-cards";

export default async function DashboardPage() {
  const dashboard = await getDashboardData();

  const recommendation = dashboard.recommendations[0] ?? {
    action: "Review your mission priorities.",
    reason: "No mission recommendations are available at this time.",
  };

  return (
    <AppShell>
      <div className="space-y-10">
        <section className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-5xl font-bold">AI Mission Control</h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                A premium mission desk for strategic learning, adaptive planning, and agent-led decisions.
              </p>
            </div>
            <div className="rounded-3xl border border-[#232323] bg-[#141414] px-5 py-4 text-sm text-slate-300">
              <p className="text-slate-400">Mission score</p>
              <p className="mt-2 text-lg font-semibold text-white">{dashboard.focusScore}%</p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.6fr_0.95fr]">
          <MissionCard
            mission={dashboard.mission}
            currentPhase={dashboard.currentPhase}
            missionHealth={dashboard.missionHealth}
            successProbability={dashboard.successProbability}
            nextMilestone={dashboard.nextMilestone}
          />
          <FocusSnapshotCard
            todayFocusMinutes={dashboard.todayFocusMinutes}
            currentStreak={dashboard.currentStreak}
            focusScore={dashboard.focusScore}
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.95fr]">
          <MissionRoadmapCard roadmap={dashboard.roadmap} />
          <NextBestActionCard
            action={recommendation.action}
            reason={recommendation.reason}
            confidence={dashboard.successProbability}
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.95fr]">
          <PlanCard plans={dashboard.studyPlan} />
          <AnalyticsSnapshotCard
            weeklyTrend={dashboard.weeklyFocusTrend}
            studyHours={dashboard.studyHours}
            missionProgress={dashboard.missionProgress}
            insight={dashboard.analyticsInsight}
          />
        </div>
      </div>
    </AppShell>
  );
}