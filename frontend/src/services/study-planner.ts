import type { StudyPlannerData } from "@/types/study-planner";
import { studyPlannerMockData } from "@/lib/mock-study-planner";
export async function getStudyPlannerData() {
  const response = await fetch(
    "http://localhost:5000/api/study-planner"
  );

  return response.json();
}
