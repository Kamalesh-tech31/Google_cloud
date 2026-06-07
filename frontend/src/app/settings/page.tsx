import AppShell from "@/components/layout/app-shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="space-y-10">
        <section className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-5xl font-bold">Settings</h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Configure your mission workspace, notifications, and account preferences.
              </p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-2">
          <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Update your account details and workspace identity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p className="text-sm">Name: <span className="font-semibold text-white">Mission Lead</span></p>
              <p className="text-sm">Email: <span className="font-semibold text-white">user@example.com</span></p>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6">
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Choose your mission workspace defaults.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p className="text-sm">Default dashboard: Mission Control</p>
              <p className="text-sm">Default session length: 45 minutes</p>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Set alerts for key mission milestones and review reminders.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p className="text-sm">Daily briefing: enabled</p>
              <p className="text-sm">Focus session reminders: enabled</p>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-[#232323] bg-[#141414] p-6">
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>Customize the appearance of your command center.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p className="text-sm">Theme mode: dark</p>
              <p className="text-sm">Accent style: mission highlight</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
