import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  AvailabilityOption,
  CurrentLevelOption,
  OnboardingState,
  RoleOption,
  TimelineOption,
} from "@/types/onboarding";

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      mission: "",
      role: "",
      availability: "2-4 Hours",
      timeline: "3 Months",
      currentLevel: "Beginner",
      setMission: (mission) => set({ mission }),
      setRole: (role: RoleOption | "") => set({ role }),
      setAvailability: (availability: AvailabilityOption) => set({ availability }),
      setTimeline: (timeline: TimelineOption) => set({ timeline }),
      setCurrentLevel: (currentLevel: CurrentLevelOption) =>
        set({ currentLevel }),
      reset: () =>
        set({
          mission: "",
          role: "",
          availability: "2-4 Hours",
          timeline: "3 Months",
          currentLevel: "Beginner",
        }),
    }),
    {
      name: "zenix-onboarding",
      partialize: (state) => ({
        mission: state.mission,
        role: state.role,
        availability: state.availability,
        timeline: state.timeline,
        currentLevel: state.currentLevel,
      }),
    }
  )
);
