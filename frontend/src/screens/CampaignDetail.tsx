import { useState } from "react";
import type { Screen, Campaign } from "../types";

interface CampaignDetailProps {
  campaign: Campaign;
  onNavigate: (screen: Screen, campaignId?: string) => void;
}

const AMOUNTS = [10, 25, 50, 100, 250, 500];

const mediaItems = [
  { icon: "📸", bg: "linear-gradient(135deg,#1a3a2a,#4caf7d)" },
  { icon: "🎥", bg: "linear-gradient(135deg,#1e3a5f,#378add)" },
  { icon: "📸", bg: "linear-gradient(135deg,#2a1a1a,#d85a30)" },
  { icon: "📸", bg: "linear-gradient(135deg,#1a2a1a,#639922)" },
  { icon: "🎥", bg: "linear-gradient(135deg,#2a2a1a,#ba7517)" },
  { icon: "📸", bg: "linear-gradient(135deg,#1a1a2a,#534ab7)" },
];

export default function CampaignDetail({
  campaign,
  onNavigate,
}: CampaignDetailProps) {
  const [selectedAmt, setSelectedAmt] = useState(25);
  const [customAmt, setCustomAmt] = useState("");
  const pct = Math.round((campaign.raised / campaign.goal) * 100);
  const raisedFmt = `$${campaign.raised.toLocaleString()}`;
  const goalFmt = `$${campaign.goal.toLocaleString()}`;
  const donateAmt = customAmt ? `$${customAmt}` : `$${selectedAmt}`;

  return (
    <div>
      <div className="grid grid-cols-[1fr_360px] gap-8 max-w-[1100px] mx-auto px-8 py-10">
        {/* Main */}
        <div>
          <div
            className="h-[340px] rounded-xl flex items-center justify-center text-[5rem] mb-7"
            style={{ background: campaign.gradient }}
          />
          <div className="flex gap-2 flex-wrap mb-4">
            {campaign.tags?.map((t) => (
              <span
                key={t}
                className="py-1 px-3 bg-[#e8f5ee] text-[#1a3a2a] rounded-full text-[12px] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-[2rem] mb-4 leading-[1.25] text-[#1a3a2a]">
            {campaign.title}
          </h1>
          <p className="text-[.95rem] text-[#6b7280] leading-[1.8] mb-6">
            Every child and young person deserves access to quality learning,
            practical skills, and a path to work. This program supports
            classrooms, training materials, and mentorship that help learners
            thrive.
          </p>
          <p className="text-[.95rem] text-[#6b7280] leading-[1.8] mb-6">
            Your donation directly funds teaching resources, skills training,
            digital access, scholarships, and community learning spaces. 92% of
            all funds go directly to program costs.
          </p>
          <div className="bg-[#f0faf4] border border-[#c6e8d5] rounded-xl px-4 py-3 text-[13px] text-[#1a6640] mb-6">
            Child sponsorship available for <strong>$30</strong> or
            <strong> 100 UGX</strong> per month.
          </div>
          <div className="font-serif text-[1.1rem] text-[#1a3a2a] mb-4 font-medium">
            Campaign Gallery
          </div>
          <div className="grid grid-cols-3 gap-3 mt-6">
            {mediaItems.map((m, i) => (
              <div
                key={i}
                className="rounded-lg aspect-square flex items-center justify-center text-[1.75rem] cursor-pointer transition-transform hover:scale-[1.03]"
                style={{ background: m.bg }}
              >
                {m.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Donate card */}
        <div>
          <div className="bg-white border border-[#e5e0d8] rounded-[14px] p-7 sticky top-20">
            <h3 className="font-serif text-[1.25rem] mb-1 text-[#1a3a2a]">
              Support This Campaign
            </h3>
            <div className="font-serif text-[1.6rem] font-bold text-[#1a3a2a]">
              {raisedFmt}
            </div>
            <div className="text-[13px] text-[#6b7280] mb-4">
              raised of {goalFmt} goal · {campaign.donors} donors
            </div>
            <div className="h-[7px] bg-[#e5e0d8] rounded-full overflow-hidden mb-5">
              <div
                className="h-full bg-[#4caf7d] rounded-full"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="text-[13px] text-[#6b7280] mb-2">
              Choose an amount
            </div>
            <div className="grid grid-cols-3 gap-2 my-5">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  className={`py-[10px] px-2 border-[1.5px] rounded-lg text-[14px] font-medium text-center cursor-pointer transition-all ${
                    selectedAmt === a && !customAmt
                      ? "border-[#4caf7d] bg-[#e8f5ee] text-[#1a3a2a]"
                      : "border-[#e5e0d8] bg-white text-[#1a1a1a] hover:border-[#4caf7d]"
                  }`}
                  onClick={() => {
                    setSelectedAmt(a);
                    setCustomAmt("");
                  }}
                >
                  ${a}
                </button>
              ))}
            </div>
            <input
              className="w-full border-[1.5px] border-[#e5e0d8] rounded-lg py-[10px] px-[14px] text-[14px] mb-4 outline-none text-[#1a1a1a] focus:border-[#4caf7d] transition-colors"
              placeholder="Or enter custom amount ($)"
              type="number"
              value={customAmt}
              onChange={(e) => setCustomAmt(e.target.value)}
            />
            <button
              className="w-full bg-[#4caf7d] text-white border-none py-[14px] rounded-lg text-[15px] font-medium cursor-pointer transition-colors hover:bg-[#3d9e6a] mb-3"
              onClick={() => onNavigate("donate")}
            >
              Donate {donateAmt} Securely
            </button>
            <div className="text-center text-[12px] text-[#6b7280] flex items-center justify-center gap-1">
              🔒 Secured by Stripe · 256-bit SSL
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#1a3a2a] text-white/55 text-center py-8 text-[13px]">
        © 2025 Education & Skills Foundation
      </footer>
    </div>
  );
}
