import type { Campaign } from "../types";

interface CampaignCardProps {
  campaign: Campaign;
  onClick: () => void;
}

export default function CampaignCard({ campaign, onClick }: CampaignCardProps) {
  const pct = Math.round((campaign.raised / campaign.goal) * 100);
  const raisedFmt =
    campaign.raised >= 1000
      ? `$${(campaign.raised / 1000).toFixed(0)}K`
      : `$${campaign.raised}`;
  const goalFmt =
    campaign.goal >= 1000
      ? `$${(campaign.goal / 1000).toFixed(0)}K`
      : `$${campaign.goal}`;

  return (
    <div
      className="bg-white rounded-xl overflow-hidden border border-[#e5e0d8] cursor-pointer transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
      onClick={onClick}
    >
      <div
        className="h-[180px] flex items-center justify-center text-5xl relative"
        style={{ background: campaign.gradient }}
      >
        {campaign.icon}
        <span className="absolute top-3 right-3 bg-[#4caf7d] text-white text-[11px] py-[3px] px-[10px] rounded-full font-medium">
          {campaign.badge}
        </span>
      </div>
      <div className="p-5">
        <div className="font-serif text-[1.1rem] mb-2 leading-[1.35] text-[#1a1a1a]">
          {campaign.title}
        </div>
        <div className="text-[13px] text-[#6b7280] leading-[1.6] mb-4">
          {campaign.description}
        </div>
        <div className="h-[5px] bg-[#e5e0d8] rounded-full overflow-hidden mb-[6px]">
          <div
            className="h-full bg-[#4caf7d] rounded-full transition-all duration-600"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex justify-between text-[12px] text-[#6b7280]">
          <span>
            <strong className="text-[#1a3a2a]">{raisedFmt}</strong> raised
          </span>
          <span>
            {pct}% of {goalFmt}
          </span>
        </div>
      </div>
    </div>
  );
}
