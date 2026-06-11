"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/layout/sidebar";

export default function AppShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-text-primary">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden bg-background-secondary">
        <header className="border-b border-border bg-[#0A0A0A]/80 px-8 py-4 backdrop-blur-sm">
          <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Zenix AI</p>
              <h1 className="mt-2 text-2xl font-semibold text-text-primary">Enterprise AI productivity</h1>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-sm text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-success" />
              AI Active
            </div>
          </div>
        </header>

        <div className="page-container">
          <div className="content-wrapper">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}