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
      <div className="relative overflow-hidden bg-[linear-gradient(135deg,#10261b_0%,#1a3a2a_52%,#214a33_100%)] px-4 py-16 sm:px-8 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_20%_30%,rgba(76,175,125,0.2),transparent_24%)]" />
        <div className="absolute -right-16 top-10 h-72 w-72 rounded-full bg-[#4caf7d]/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#b8f2cb]">
              Sponsor a child. Change a future.
            </div>
            <h1 className="font-serif mx-auto mt-6 max-w-[760px] text-[clamp(2.6rem,6vw,4.4rem)] leading-[1] text-white lg:mx-0">
              Give a child the chance to learn, grow, and thrive.
            </h1>
            <p className="mx-auto mt-5 max-w-[620px] text-[1.05rem] leading-[1.8] text-white/72 lg:mx-0">
              Support sponsored students, classroom supplies, digital skills,
              and vocational training. Every contribution helps open a real
              path to education and opportunity.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Sponsor a child", value: "$30 / month" },
                { label: "Local support option", value: "100 UGX / month" },
                { label: "School fee", value: "$120 / term" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-left backdrop-blur-sm"
                >
                  <div className="text-[12px] uppercase tracking-[0.14em] text-white/50">
                    {item.label}
                  </div>
                  <div className="mt-1 font-serif text-[1.35rem] text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <button
                className="rounded-lg border-none bg-[#4caf7d] px-8 py-[13px] text-[15px] font-medium text-white transition-all hover:-translate-y-px hover:bg-[#3d9e6a]"
                onClick={() => onNavigate("students")}
              >
                Sponsor a Student
              </button>
              <button
                className="rounded-lg border-[1.5px] border-white/35 bg-transparent px-8 py-[13px] text-[15px] font-medium text-white transition-all hover:-translate-y-px hover:border-white hover:bg-white/10"
                onClick={() => onNavigate("campaigns")}
              >
                Explore Programs
              </button>
              <button
                className="rounded-lg border-none bg-white px-8 py-[13px] text-[15px] font-medium text-[#1a3a2a] transition-all hover:-translate-y-px hover:bg-[#f0faf4]"
                onClick={() => onNavigate("donate")}
              >
                Donate Now
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[#4caf7d]/15 blur-2xl" />
            <div className="rounded-[2rem] border border-white/12 bg-white/10 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0f2218] p-5 text-left text-white">
                <div className="text-[12px] uppercase tracking-[0.18em] text-white/50">
                  Featured sponsor story
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4caf7d]/20 text-[2rem]">
                    👧
                  </div>
                  <div>
                    <div className="font-serif text-[1.5rem]">Amina Kato</div>
                    <div className="text-[13px] text-white/60">
                      Primary 3 · Kampala, Uganda
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-[1.8] text-white/72">
                  Amina’s sponsorship helps cover term fees, books, learning
                  materials, and consistent school support.
                </p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/8 p-4">
                  <div className="flex items-center justify-between text-[13px] text-white/60">
                    <span>Sponsorship progress</span>
                    <span>60%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[60%] rounded-full bg-[#4caf7d]" />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[12px] text-white/55">
                    <span>$18 received</span>
                    <span>$30 monthly goal</span>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    className="rounded-xl border-none bg-[#4caf7d] px-4 py-3 text-[14px] font-medium text-white"
                    onClick={() => onNavigate("student-detail", "amina-k")}
                  >
                    View Profile
                  </button>
                  <button
                    className="rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-[14px] font-medium text-white"
                    onClick={() => onNavigate("students")}
                  >
                    All Students
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-1 border-b border-[#e5e0d8] bg-white sm:grid-cols-3">
        {[
          { num: "$2.4M", label: "Raised for learning" },
          { num: "48", label: "Active programs" },
          { num: "12,400", label: "Students and trainees reached" },
        ].map((s, i) => (
          <div
            key={i}
            className={`py-8 px-4 text-center ${i < 2 ? "sm:border-r border-[#e5e0d8]" : ""}`}
          >
            <div className="font-serif text-[2.2rem] text-[#1a3a2a] font-bold">
              {s.num}
            </div>
            <div className="text-[13px] text-[#6b7280] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#f7f5f0] px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div className="font-serif text-[1.75rem] text-[#1a3a2a]">
              Why Sponsors Give Here
            </div>
            <span className="text-[13px] font-medium text-[#4caf7d]">
              Transparent, student-first giving
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Monthly sponsorship",
                body: "Commit to a child for $30 or 100 UGX per month and follow their progress.",
              },
              {
                title: "Term-by-term support",
                body: "See the fee structure, school reports, and receipts for every sponsored learner.",
              },
              {
                title: "Track real impact",
                body: "Programs and student profiles show exactly where support is going and what it changes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#e5e0d8] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
              >
                <div className="font-serif text-[1.3rem] text-[#1a3a2a]">
                  {item.title}
                </div>
                <p className="mt-3 text-[14px] leading-[1.8] text-[#6b7280]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured campaigns */}
      <div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-8">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="font-serif text-[1.75rem] text-[#1a3a2a]">
            Featured Programs
          </div>
          <span
            className="text-[13px] text-[#4caf7d] cursor-pointer font-medium"
            onClick={() => onNavigate("campaigns")}
          >
            View all →
          </span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
          {featured.map((c) => (
            <CampaignCard
              key={c.id}
              campaign={c}
              onClick={() => onNavigate("detail", c.id)}
            />
          ))}
        </div>
      </div>

      <div className="bg-[#f7f5f0] px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div className="font-serif text-[1.75rem] text-[#1a3a2a]">
              Sponsored Students
            </div>
            <span
              className="text-[13px] text-[#4caf7d] cursor-pointer font-medium"
              onClick={() => onNavigate("students")}
            >
              View all →
            </span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
            {[
              { name: "Amina Kato", grade: "Primary 3", school: "St. Joseph Primary School", id: "p3-girl" },
              { name: "Sarah Namutebi", grade: "Senior 2", school: "Bright Future Secondary School", id: "s2-girl" },
              { name: "Brian Kizza", grade: "Motor Vehicle Technology", school: "Jinja Technical Institute", id: "motor-vehicle-tech" },
            ].map((student) => (
              <button
                key={student.id}
                className="text-left rounded-xl border border-[#e5e0d8] bg-white p-5 cursor-pointer transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                onClick={() => onNavigate("student-detail", student.id)}
              >
                <div className="text-[2rem] mb-3">👤</div>
                <div className="font-serif text-[1.1rem] text-[#1a3a2a]">{student.name}</div>
                <div className="text-[13px] text-[#6b7280] mt-1">{student.grade}</div>
                <div className="text-[13px] text-[#6b7280]">{student.school}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Impact section */}
      <div className="bg-[#1a3a2a] px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="font-serif text-white text-[2rem] mb-3">
            Our Impact in Numbers
          </h2>
          <p className="text-white/65 max-w-[500px] mx-auto mb-12 text-[.95rem] leading-[1.7]">
            Every donation makes a measurable difference. Here’s what we’ve
            achieved together through education and skills support.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
            {[
              { icon: "🎓", stat: "8,200", label: "Children educated" },
              { icon: "🛠️", stat: "1,240", label: "Youth trained in skills" },
              { icon: "💻", stat: "860", label: "Learners in digital literacy" },
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

      <footer className="bg-[#10261b] text-center py-8 text-[13px] text-white/55">
        © 2025 Education & Skills Foundation · MIT License · Built with ❤️
      </footer>
    </div>
  );
}
