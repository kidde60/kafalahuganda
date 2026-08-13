import { useState } from "react";
import type { Screen } from "../types";
import logo from "../assets/eduLogo.png";

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
    <nav className="site-nav sticky top-0 z-50 bg-[#0f2450] px-4 py-3 md:px-8">
      <div className="flex items-center justify-between gap-4">
        <div
          className="flex min-w-0 cursor-pointer items-center gap-3"
          onClick={() => go("home")}
        >
          <img
            src={logo}
            alt="Education & Skills Foundation logo"
            className="h-10 w-10 rounded-lg bg-white object-contain p-1 shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-serif text-[0.95rem] font-bold text-white md:text-[1.05rem]">
              Education & Skills Foundation
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#ff8a00]">
              Learn. Train. Thrive.
            </div>
          </div>
        </div>
        <button
          className="nav-mobile-toggle items-center justify-center rounded-lg border border-white/15 bg-white/8 px-3 py-2 text-sm text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          ☰
        </button>
        <div className="nav-desktop-menu shrink-0 items-center gap-5 md:flex-nowrap">
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
        <div className="nav-mobile-menu mt-3 rounded-2xl border border-white/10 bg-[#102b63] p-3 text-white">
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
