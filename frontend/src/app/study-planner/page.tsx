import AppShell from "@/components/layout/app-shell";
import { getStudyPlannerData } from "@/services/study-planner";
import {
	DailyPlanCard,
	WeeklyPlanCard,
	UpcomingSessionsCard,
	StudyRecommendationCard,
} from "@/components/study-planner/planner-cards";

export default async function StudyPlannerPage() {
	const planner = await getStudyPlannerData();

	return (
		<AppShell>
			<div className="space-y-10">
				<section className="space-y-4">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<h1 className="text-5xl font-bold">Study Planner</h1>
							<p className="text-muted-foreground mt-2 max-w-2xl">
								Daily and weekly planning shaped around your AI mission and study rhythm.
							</p>
						</div>
						<div className="rounded-3xl border border-border bg-card px-5 py-4 text-sm text-slate-300">
							<p className="text-slate-400">Today&apos;s focus</p>
							<p className="mt-2 font-semibold text-white">Deep practice + review</p>
						</div>
					</div>
				</section>

				<div className="grid gap-6 lg:grid-cols-[1.7fr_0.95fr]">
					<DailyPlanCard sessions={planner.dailyPlan} />
					<WeeklyPlanCard weeks={planner.weeklyPlan} />
				</div>

				<div className="grid gap-6 lg:grid-cols-[1.4fr_0.95fr]">
					<UpcomingSessionsCard sessions={planner.upcomingSessions} />
					<StudyRecommendationCard recommendations={planner.recommendations} />
				</div>
			</div>
		</AppShell>
	);
}
