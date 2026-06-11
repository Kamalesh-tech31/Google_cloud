import {
  LayoutDashboard,
  Clock,
  CalendarDays,
  Target,
  FolderOpen,
  Brain,
  BarChart,
  Sparkles,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Study Planner",
    href: "/study-planner",
    icon: CalendarDays,
  },
  {
    title: "Focus Sessions",
    href: "/focus-sessions",
    icon: Clock,
  },
  {
    title: "AI Assistant",
    href: "/ai-assistant",
    icon: Sparkles,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];