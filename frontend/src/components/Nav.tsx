import { useState } from "react";
import type { Screen } from "../types";

interface NavProps {
  onNavigate: (screen: Screen) => void;
  currentScreen: Screen;
}

export default function Nav({ onNavigate, currentScreen }: NavProps) {
  const [open, setOpen] = useState(false);

  function go(screen: Screen) {
    setOpen(false);
    onNavigate(screen);
  }

  function linkClass(active: boolean) {
    return `text-[13px] cursor-pointer pb-[2px] border-b-[1.5px] transition-all ${
      active
        ? "text-white border-[#4caf7d]"
        : "text-white/75 border-transparent hover:text-white hover:border-[#4caf7d]"
    }`;
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#1a3a2a] px-4 py-3 md:px-8">
      <div className="flex items-center justify-between gap-4">
        <div
          className="font-serif cursor-pointer text-lg font-bold text-white md:text-xl"
          onClick={() => go("home")}
        >
          🎓 Education & Skills Foundation
        </div>
        <button
          className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/8 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          ☰
        </button>
        <div className="hidden items-center gap-6 md:flex">
          <span
            className={linkClass(currentScreen === "home")}
            onClick={() => go("home")}
          >
            Home
          </span>
          <span
            className={linkClass(currentScreen === "campaigns")}
            onClick={() => go("campaigns")}
          >
            Campaigns
          </span>
          <span
            className={linkClass(currentScreen === "students")}
            onClick={() => go("students")}
          >
            Students
          </span>
          <span
            className={linkClass(currentScreen === "gallery")}
            onClick={() => go("gallery")}
          >
            Gallery
          </span>
          <span
            className={linkClass(currentScreen === "admin-login")}
            onClick={() => go("admin-login")}
          >
            Admin
          </span>
          <button
            className="bg-[#4caf7d] text-white border-none py-[7px] px-[18px] rounded-[6px] text-[13px] font-medium cursor-pointer transition-colors hover:bg-[#3d9e6a]"
            onClick={() => go("donate")}
          >
            Donate Now
          </button>
        </div>
      </div>
      {open && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-[#153224] p-3 text-white md:hidden">
          <div className="flex flex-col">
            {[
              ["Home", "home"],
              ["Campaigns", "campaigns"],
              ["Students", "students"],
              ["Gallery", "gallery"],
              ["Admin", "admin-login"],
            ].map(([label, screen]) => (
              <button
                key={label}
                className={`rounded-xl px-4 py-3 text-left text-[14px] hover:bg-white/8 ${
                  currentScreen === screen
                    ? "bg-white/10 text-white"
                    : "text-white/85"
                }`}
                onClick={() => go(screen as Screen)}
              >
                {label}
              </button>
            ))}
            <button
              className="mt-2 rounded-xl bg-[#4caf7d] px-4 py-3 text-left text-[14px] font-medium text-white"
              onClick={() => go("donate")}
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
