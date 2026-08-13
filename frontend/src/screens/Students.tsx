import type { Screen } from "../types";
import { students } from "../data";

interface StudentsProps {
  onNavigate: (screen: Screen, studentId?: string) => void;
}

export default function Students({ onNavigate }: StudentsProps) {
  return (
    <div>
      <div className="bg-[#1a3a2a] py-14 px-8 text-center">
        <h1 className="font-serif text-white text-[2.2rem] mb-2">
          Sponsored Students
        </h1>
        <p className="text-white/60 text-[.95rem] max-w-[720px] mx-auto">
          Sponsors can help educate a child for $30 or 100 UGX per month.
          Browse each student profile to view their details, fees, academic
          reports, and payment records.
        </p>
      </div>

      <div className="py-10 px-8 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {students.map((student) => {
            const pct = Math.min(
              100,
              Math.round((student.received / student.sponsorGoal) * 100),
            );
            return (
              <button
                key={student.id}
                className="text-left bg-white border border-[#e5e0d8] rounded-xl p-5 cursor-pointer transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                onClick={() => onNavigate("student-detail", student.id)}
              >
                <div className="text-[2.5rem] mb-3">{student.avatar}</div>
                <div className="font-serif text-[1.2rem] text-[#1a3a2a]">
                  {student.fullName}
                </div>
                <div className="text-[13px] text-[#6b7280] mt-1">
                  {student.grade} · {student.school}
                </div>
                <div className="text-[13px] text-[#6b7280] mt-1">
                  {student.location}
                </div>
                <div className="h-[6px] bg-[#e5e0d8] rounded-full overflow-hidden mt-4 mb-3">
                  <div
                    className="h-full bg-[#4caf7d] rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="text-[12px] text-[#6b7280] flex justify-between">
                  <span>${student.received} received</span>
                  <span>${student.sponsorGoal}/month goal</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
