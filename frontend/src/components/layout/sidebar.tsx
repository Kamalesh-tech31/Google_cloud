"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STORAGE_KEY = "zenix-sidebar-collapsed";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem(STORAGE_KEY) === "true";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(collapsed));
  }, [collapsed]);

  return (
    <aside
      className={`flex flex-col bg-sidebar border-r border-border transition-all duration-300 ease-out ${
        collapsed ? "w-[88px]" : "w-[280px]"
      }`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-5">
        {!collapsed ? (
          <div>
            <p className="text-lg font-semibold text-text-primary">Zenix</p>
            <p className="text-xs text-text-muted">AI Academic OS</p>
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-[20px] bg-card text-text-primary">Z</div>
        )}

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[16px] border border-border text-text-secondary transition hover:bg-card hover:text-text-primary"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-[20px] px-3 py-3 transition-all duration-300 ease-out ${
                isActive
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#E6C766] text-black shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                  : "text-text-secondary hover:bg-[#141414] hover:text-text-primary"
              }`}
              title={item.title}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.title}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}