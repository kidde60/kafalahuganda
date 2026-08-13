import type { Screen } from "../types";

interface NavProps {
  onNavigate: (screen: Screen) => void;
  currentScreen: Screen;
}

export default function Nav({ onNavigate, currentScreen }: NavProps) {
  return (
    <nav className="bg-[#1a3a2a] px-8 flex items-center justify-between h-[60px] sticky top-0 z-50">
      <div
        className="font-serif text-white text-xl font-bold cursor-pointer"
        onClick={() => onNavigate("home")}
      >
        🎓 Education & Skills Foundation
      </div>
      <div className="flex gap-6 items-center">
        <span
          className={`text-[13px] cursor-pointer pb-[2px] border-b-[1.5px] transition-all ${
            currentScreen === "campaigns"
              ? "text-white border-[#4caf7d]"
              : "text-white/75 border-transparent hover:text-white hover:border-[#4caf7d]"
          }`}
          onClick={() => onNavigate("campaigns")}
        >
          Campaigns
        </span>
        <span
          className={`text-[13px] cursor-pointer pb-[2px] border-b-[1.5px] transition-all ${
            currentScreen === "students"
              ? "text-white border-[#4caf7d]"
              : "text-white/75 border-transparent hover:text-white hover:border-[#4caf7d]"
          }`}
          onClick={() => onNavigate("students")}
        >
          Students
        </span>
        <span
          className={`text-[13px] cursor-pointer pb-[2px] border-b-[1.5px] transition-all ${
            currentScreen === "gallery"
              ? "text-white border-[#4caf7d]"
              : "text-white/75 border-transparent hover:text-white hover:border-[#4caf7d]"
          }`}
          onClick={() => onNavigate("gallery")}
        >
          Gallery
        </span>
        <span
          className="text-white/75 text-[13px] cursor-pointer pb-[2px] border-b-[1.5px] border-transparent hover:text-white hover:border-[#4caf7d] transition-all"
          onClick={() => onNavigate("admin-login")}
        >
          Admin
        </span>
        <button
          className="bg-[#4caf7d] text-white border-none py-[7px] px-[18px] rounded-[6px] text-[13px] font-medium cursor-pointer transition-colors hover:bg-[#3d9e6a]"
          onClick={() => onNavigate("donate")}
        >
          Donate Now
        </button>
      </div>
    </nav>
  );
}
