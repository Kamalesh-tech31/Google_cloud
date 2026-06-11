export interface FocusSession {
  id: string;
  title: string;
  subject: string;
  duration: string;
  status: "Active" | "Upcoming" | "Complete" | "Paused";
  progress: number;
  technique: string;
  startTime?: string;
  endTime?: string;
}

export interface FocusSuggestion {
  id: string;
  title: string;
  detail: string;
}

export interface FocusSessionsData {
  activeSession: FocusSession | null;
  upcomingSessions: FocusSession[];
  recentSessions: FocusSession[];
  stats: {
    dailyFocusMinutes: number;
    focusStreak: number;
    sessionsCompleted: number;
  };
  suggestions: FocusSuggestion[];
}
