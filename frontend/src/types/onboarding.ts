export type AvailabilityOption = "1-2 Hours" | "2-4 Hours" | "4-6 Hours" | "6+ Hours";
export type TimelineOption = "1 Month" | "3 Months" | "6 Months" | "1 Year";
export type CurrentLevelOption = "Beginner" | "Intermediate" | "Advanced";
export type RoleOption = "Frontend Engineer" | "Backend Engineer" | "Full Stack Engineer" | "AI / ML Engineer" | "Cloud Engineer" | "Data Scientist" | "Other";

export interface OnboardingState {
  mission: string;
  role: RoleOption | "";
  availability: AvailabilityOption;
  timeline: TimelineOption;
  currentLevel: CurrentLevelOption;
  setMission: (mission: string) => void;
  setRole: (role: RoleOption | "") => void;
  setAvailability: (availability: AvailabilityOption) => void;
  setTimeline: (timeline: TimelineOption) => void;
  setCurrentLevel: (currentLevel: CurrentLevelOption) => void;
  reset: () => void;
}
