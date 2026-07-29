import type { Screen } from "../types";
import { campaigns } from "../data";
import CampaignCard from "../components/CampaignCard";

interface HomeProps {
  onNavigate: (screen: Screen, campaignId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const featured = campaigns.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <div className="bg-[#1a3a2a] py-24 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(76,175,125,0.15)_0%,transparent_70%)]" />
        <div className="relative z-10">
          <div className="inline-block bg-[rgba(76,175,125,0.2)] text-[#4caf7d] text-[12px] py-1 px-4 rounded-full mb-6 font-medium tracking-widest uppercase">
            Making Impact Together
          </div>
          <h1 className="font-serif text-white text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.15] max-w-[700px] mx-auto mb-5">
            Give Hope, Change Lives Around the World
          </h1>
          <p className="text-white/65 text-[1.05rem] max-w-[520px] mx-auto mb-10 leading-[1.7]">
            Join thousands of donors supporting vetted campaigns that create
            lasting change in communities that need it most.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="bg-[#4caf7d] text-white border-none py-[13px] px-[30px] rounded-lg text-[15px] font-medium cursor-pointer transition-all hover:bg-[#3d9e6a] hover:-translate-y-px"
              onClick={() => onNavigate("campaigns")}
            >
              Browse Campaigns
            </button>
            <button
              className="bg-transparent text-white border-[1.5px] border-white/40 py-[13px] px-[30px] rounded-lg text-[15px] font-medium cursor-pointer transition-all hover:border-white hover:bg-white/10"
              onClick={() => onNavigate("donate")}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-3 bg-white border-b border-[#e5e0d8]">
        {[
          { num: "$2.4M", label: "Raised this year" },
          { num: "48", label: "Active campaigns" },
          { num: "12,400", label: "Lives impacted" },
        ].map((s, i) => (
          <div
            key={i}
            className={`py-8 px-4 text-center ${i < 2 ? "border-r border-[#e5e0d8]" : ""}`}
          >
            <div className="font-serif text-[2.2rem] text-[#1a3a2a] font-bold">
              {s.num}
            </div>
            <div className="text-[13px] text-[#6b7280] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Featured campaigns */}
      <div className="py-16 px-8 max-w-[1100px] mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <div className="font-serif text-[1.75rem] text-[#1a3a2a]">
            Featured Campaigns
          </div>
          <span
            className="text-[13px] text-[#4caf7d] cursor-pointer font-medium"
            onClick={() => onNavigate("campaigns")}
          >
            View all →
          </span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {featured.map((c) => (
            <CampaignCard
              key={c.id}
              campaign={c}
              onClick={() => onNavigate("detail", c.id)}
            />
          ))}
        </div>
      </div>

      {/* Impact section */}
      <div className="bg-[#1a3a2a] py-16 px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-serif text-white text-[2rem] mb-3">
            Our Impact in Numbers
          </h2>
          <p className="text-white/65 max-w-[500px] mx-auto mb-12 text-[.95rem] leading-[1.7]">
            Every donation makes a measurable difference. Here's what we've
            achieved together.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
            {[
              { icon: "🎓", stat: "8,200", label: "Children educated" },
              { icon: "💧", stat: "34", label: "Wells drilled" },
              { icon: "🏥", stat: "15K", label: "Medical visits" },
              { icon: "🌱", stat: "92%", label: "Funds to programs" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.07] border border-white/[0.12] rounded-xl py-7 px-4 text-center"
              >
                <div className="text-[2rem] mb-3">{item.icon}</div>
                <div className="font-serif text-[1.75rem] text-white font-bold">
                  {item.stat}
                </div>
                <div className="text-[12px] text-white/55 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-[#1a3a2a] text-white/55 text-center py-8 text-[13px]">
        © 2025 Kafalah Uganda Charity Platform · MIT License · Built with ❤️
      </footer>
    </div>
  );
}
