import { useState } from "react";
import type { Screen } from "../types";
import { campaigns } from "../data";
import CampaignCard from "../components/CampaignCard";

const FILTERS = ["All", "Primary", "O Level", "A Level", "Technical", "IT Skills"];

interface CampaignsProps {
  onNavigate: (screen: Screen, campaignId?: string) => void;
}

export default function Campaigns({ onNavigate }: CampaignsProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? campaigns
      : campaigns.filter((c) => c.badge === activeFilter);

  return (
    <div>
      <div className="bg-[#1a3a2a] py-14 px-8 text-center">
        <h1 className="font-serif text-white text-[2.2rem] mb-2">
          Our Programs
        </h1>
        <p className="text-white/60 text-[.95rem]">
          Support primary, O Level, A Level, technical, and IT skills programs
          that open doors for learners and future earners.
        </p>
      </div>

      <div className="py-8 px-8 max-w-[1100px] mx-auto">
        <div className="flex gap-3 flex-wrap mb-8 items-center">
          <span className="text-[13px] text-[#6b7280] mr-1">Filter:</span>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`py-[7px] px-4 rounded-full border-[1.5px] text-[13px] cursor-pointer transition-all font-sans ${
                activeFilter === f
                  ? "bg-[#1a3a2a] text-white border-[#1a3a2a]"
                  : "bg-white text-[#1a1a1a] border-[#e5e0d8] hover:bg-[#1a3a2a] hover:text-white hover:border-[#1a3a2a]"
              }`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {filtered.map((c) => (
            <CampaignCard
              key={c.id}
              campaign={c}
              onClick={() => onNavigate("detail", c.id)}
            />
          ))}
        </div>
      </div>

      <footer className="bg-[#1a3a2a] text-white/55 text-center py-8 text-[13px] mt-12">
        © 2025 Education & Skills Foundation
      </footer>
    </div>
  );
}
