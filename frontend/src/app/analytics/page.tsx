import AppShell from "@/components/layout/app-shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export default function AnalyticsPage() {
  return (
    <AppShell>
      <div className="space-y-10">
        <section className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-5xl font-bold">Analytics</h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Focus trends, mission momentum, and study behavior in one clean pane.
              </p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-2">
          <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6">
            <CardHeader>
              <CardTitle>Weekly Focus Trend</CardTitle>
              <CardDescription>Track your attention span across seven sessions.</CardDescription>
            </CardHeader>
            <CardContent className="mt-6 space-y-4">
              <div className="grid grid-cols-7 gap-2">
                {[55, 68, 72, 80, 76, 90, 84].map((value, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="flex h-20 w-full items-end rounded-full bg-slate-900">
                      <div className={`w-full rounded-full bg-emerald-400 ${barHeightClass(value)}`} />
                    </div>
                    <span className="text-[10px] text-slate-500">{idx + 1}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6">
            <CardHeader>
              <CardTitle>Study Time</CardTitle>
              <CardDescription>How your weekly hours stack up against your mission plan.</CardDescription>
            </CardHeader>
            <CardContent className="mt-6 space-y-4">
              <div className="rounded-3xl bg-[#0d0d0d] p-5 text-white">
                <p className="text-sm text-slate-400">Total logged</p>
                <p className="mt-2 text-4xl font-semibold">42h</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-[#0d0d0d] p-4 text-white">
                  <p className="text-sm text-slate-400">Average daily</p>
                  <p className="mt-2 text-2xl font-semibold">6h</p>
                </div>
                <div className="rounded-3xl bg-[#0d0d0d] p-4 text-white">
                  <p className="text-sm text-slate-400">Goal completion</p>
                  <p className="mt-2 text-2xl font-semibold">84%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6">
            <CardHeader>
              <CardTitle>Mission Signals</CardTitle>
              <CardDescription>Surface the most important progress signals from your mission.</CardDescription>
            </CardHeader>
            <CardContent className="mt-6 space-y-4 text-slate-300">
              <p>- Focus stability improving for the sprint.</p>
              <p>- Session completion at 88% for the week.</p>
              <p>- Core mission tasks are trending ahead of schedule.</p>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6">
            <CardHeader>
              <CardTitle>AI Insight</CardTitle>
              <CardDescription>Actionable guidance generated from recent mission behavior.</CardDescription>
            </CardHeader>
            <CardContent className="mt-6 text-slate-300">
              <p className="text-lg font-semibold text-white">Keep the sprint steady</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Your current focus rhythm is strong. Lock in one more deep review session before the next checkpoint.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
