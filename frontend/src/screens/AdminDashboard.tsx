import type { Screen } from "../types";

interface AdminDashboardProps {
  onNavigate: (screen: Screen) => void;
}

const recentDonations = [
  { donor: "Sarah K.", amount: "$250", campaign: "Schools", status: "Paid" },
  { donor: "Anonymous", amount: "$50", campaign: "Water", status: "Paid" },
  { donor: "James M.", amount: "$100", campaign: "Health", status: "Paid" },
  { donor: "Aisha N.", amount: "$25", campaign: "Food", status: "Pending" },
  { donor: "Tom B.", amount: "$500", campaign: "Schools", status: "Paid" },
];

const campaignProgress = [
  {
    name: "Schools",
    raised: "$72K",
    goal: "$100K",
    pct: "72%",
    color: "green",
  },
  { name: "Water", raised: "$44K", goal: "$50K", pct: "88%", color: "green" },
  { name: "Health", raised: "$82K", goal: "$200K", pct: "41%", color: "amber" },
  { name: "Food", raised: "$27.5K", goal: "$50K", pct: "55%", color: "amber" },
  { name: "Trees", raised: "$14.5K", goal: "$50K", pct: "29%", color: "red" },
];

type BadgeColor = "green" | "amber" | "red";
const badgeClasses: Record<BadgeColor, string> = {
  green: "bg-[#e8f5ee] text-[#1a6640]",
  amber: "bg-[#fef3e2] text-[#92400e]",
  red: "bg-[#fef2f2] text-[#991b1b]",
};

const sidebarItems = [
  { icon: "📊", label: "Dashboard", active: true },
  { icon: "📢", label: "Campaigns" },
  { icon: "💳", label: "Donations" },
  { icon: "🖼️", label: "Media" },
];

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  return (
    <div className="grid grid-cols-[220px_1fr] min-h-screen">
      {/* Sidebar */}
      <div className="bg-[#1a3a2a] py-6 sticky top-0 h-screen overflow-y-auto">
        <div className="font-serif text-white text-[1.1rem] px-6 pb-6 border-b border-white/10 mb-4 font-bold">
          🌱 Kafalah Uganda Admin
        </div>
        {sidebarItems.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-6 py-[10px] text-[13.5px] cursor-pointer transition-all border-l-[3px] ${
              item.active
                ? "bg-white/[0.08] text-white border-[#4caf7d]"
                : "text-white/60 border-transparent hover:bg-white/[0.08] hover:text-white hover:border-[#4caf7d]"
            }`}
          >
            {item.icon} {item.label}
          </div>
        ))}
        <div className="mt-auto">
          <div className="flex items-center gap-3 px-6 py-[10px] text-[13.5px] cursor-pointer text-white/60 border-l-[3px] border-transparent hover:bg-white/[0.08] hover:text-white hover:border-[#4caf7d] transition-all mt-4">
            ⚙️ Settings
          </div>
          <div
            className="flex items-center gap-3 px-6 py-[10px] text-[13.5px] cursor-pointer text-[rgba(255,80,80,0.7)] border-l-[3px] border-transparent hover:bg-white/[0.08] transition-all"
            onClick={() => onNavigate("admin-login")}
          >
            🚪 Logout
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="p-8 bg-[#f7f5f0]">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-[1.75rem] text-[#1a3a2a]">
            Dashboard
          </h1>
          <button
            className="bg-[#4caf7d] text-white border-none py-[9px] px-5 rounded-lg text-[13px] font-medium cursor-pointer hover:bg-[#3d9e6a] transition-colors"
            onClick={() => onNavigate("campaigns")}
          >
            + New Campaign
          </button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { val: "$248K", lbl: "Total raised", trend: "↑ 18% this month" },
            { val: "48", lbl: "Active campaigns", trend: "↑ 3 this week" },
            { val: "1,842", lbl: "Total donations", trend: "↑ 124 this month" },
            { val: "$134", lbl: "Avg. donation", trend: "↑ $12 vs last month" },
          ].map((m, i) => (
            <div
              key={i}
              className="bg-white border border-[#e5e0d8] rounded-xl p-5"
            >
              <div className="font-serif text-[1.75rem] text-[#1a3a2a] font-bold">
                {m.val}
              </div>
              <div className="text-[12px] text-[#6b7280] mt-1">{m.lbl}</div>
              <div className="text-[12px] text-[#4caf7d] font-medium mt-1">
                {m.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Tables row */}
        <div className="grid grid-cols-2 gap-5 mb-5">
          {/* Recent Donations */}
          <div className="bg-white border border-[#e5e0d8] rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-[#e5e0d8] flex items-center justify-between">
              <h3 className="text-[14px] font-medium text-[#1a3a2a]">
                Recent Donations
              </h3>
              <span className="text-[12px] text-[#4caf7d] cursor-pointer">
                View all
              </span>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {["Donor", "Amount", "Campaign", "Status"].map((h) => (
                    <th
                      key={h}
                      className="text-[11px] uppercase tracking-[.05em] text-[#6b7280] py-[10px] px-5 text-left bg-[#fafaf8] border-b border-[#e5e0d8]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentDonations.map((d, i) => (
                  <tr
                    key={i}
                    className={
                      i < recentDonations.length - 1
                        ? "border-b border-[#f0ece5]"
                        : ""
                    }
                  >
                    <td className="text-[13px] py-[11px] px-5 text-[#1a1a1a]">
                      {d.donor}
                    </td>
                    <td className="text-[13px] py-[11px] px-5 text-[#1a1a1a]">
                      {d.amount}
                    </td>
                    <td className="text-[13px] py-[11px] px-5 text-[#1a1a1a]">
                      {d.campaign}
                    </td>
                    <td className="text-[13px] py-[11px] px-5">
                      <span
                        className={`inline-block py-[3px] px-[10px] rounded-full text-[11px] font-medium ${
                          d.status === "Paid"
                            ? badgeClasses.green
                            : badgeClasses.amber
                        }`}
                      >
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Campaign Progress */}
          <div className="bg-white border border-[#e5e0d8] rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-[#e5e0d8] flex items-center justify-between">
              <h3 className="text-[14px] font-medium text-[#1a3a2a]">
                Campaign Progress
              </h3>
              <span className="text-[12px] text-[#4caf7d] cursor-pointer">
                Manage
              </span>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {["Campaign", "Raised", "Goal", "%"].map((h) => (
                    <th
                      key={h}
                      className="text-[11px] uppercase tracking-[.05em] text-[#6b7280] py-[10px] px-5 text-left bg-[#fafaf8] border-b border-[#e5e0d8]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {campaignProgress.map((c, i) => (
                  <tr
                    key={i}
                    className={
                      i < campaignProgress.length - 1
                        ? "border-b border-[#f0ece5]"
                        : ""
                    }
                  >
                    <td className="text-[13px] py-[11px] px-5 text-[#1a1a1a]">
                      {c.name}
                    </td>
                    <td className="text-[13px] py-[11px] px-5 text-[#1a1a1a]">
                      {c.raised}
                    </td>
                    <td className="text-[13px] py-[11px] px-5 text-[#1a1a1a]">
                      {c.goal}
                    </td>
                    <td className="text-[13px] py-[11px] px-5">
                      <span
                        className={`inline-block py-[3px] px-[10px] rounded-full text-[11px] font-medium ${badgeClasses[c.color as BadgeColor]}`}
                      >
                        {c.pct}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upload */}
        <div className="bg-white border border-[#e5e0d8] rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-[#e5e0d8]">
            <h3 className="text-[14px] font-medium text-[#1a3a2a]">
              Quick Upload Media
            </h3>
          </div>
          <div className="p-5">
            <div className="border-2 border-dashed border-[#e5e0d8] rounded-xl p-12 text-center bg-[#fafaf8] cursor-pointer transition-all hover:border-[#4caf7d] hover:bg-[#f0faf4] mb-6">
              <div className="text-[2.5rem] mb-3">☁️</div>
              <div className="text-[.95rem] font-medium text-[#1a3a2a] mb-1">
                Drop files here or click to browse
              </div>
              <div className="text-[12px] text-[#6b7280]">
                PNG, JPG, MP4 up to 50MB · Uploads to Cloudinary
              </div>
            </div>
            <div className="flex gap-3">
              <select className="flex-1 border-[1.5px] border-[#e5e0d8] rounded-lg py-[10px] px-[14px] text-[14px] outline-none text-[#1a1a1a]">
                <option>Select campaign...</option>
                <option>Build 10 Schools</option>
                <option>Clean Water Wells</option>
                <option>Mobile Clinics</option>
              </select>
              <button className="bg-[#4caf7d] text-white border-none py-[10px] px-5 rounded-lg text-[13px] font-medium cursor-pointer hover:bg-[#3d9e6a] transition-colors">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
