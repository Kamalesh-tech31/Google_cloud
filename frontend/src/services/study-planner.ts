import type { StudyPlannerData } from "@/types/study-planner";
import { studyPlannerMockData } from "@/lib/mock-study-planner";

export async function getStudyPlannerData(): Promise<StudyPlannerData> {
  return studyPlannerMockData;
}
