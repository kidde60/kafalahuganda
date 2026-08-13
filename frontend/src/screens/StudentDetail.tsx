import type { Screen, Student } from "../types";

interface StudentDetailProps {
  student: Student;
  onNavigate: (screen: Screen) => void;
}

export default function StudentDetail({ student, onNavigate }: StudentDetailProps) {
  return (
    <div className="max-w-[1100px] mx-auto px-8 py-10">
      <button
        className="text-[13px] text-[#4caf7d] font-medium mb-6"
        onClick={() => onNavigate("students")}
      >
        ← Back to students
      </button>

      <div className="grid grid-cols-[1fr_380px] gap-8">
        <div>
          <div className="bg-white border border-[#e5e0d8] rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="text-[4rem]">{student.avatar}</div>
              <div>
                <h1 className="font-serif text-[2rem] text-[#1a3a2a]">
                  {student.fullName}
                </h1>
                <div className="text-[14px] text-[#6b7280]">
                  {student.grade} · {student.school}
                </div>
                <div className="text-[14px] text-[#6b7280]">
                  DOB: {student.dateOfBirth} · {student.location}
                </div>
              </div>
            </div>
            <p className="text-[.95rem] text-[#6b7280] leading-[1.8] mt-5">
              {student.summary}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border border-[#e5e0d8] rounded-2xl p-6">
              <h2 className="font-serif text-[1.2rem] text-[#1a3a2a] mb-4">
                Fees Structure
              </h2>
              <div className="text-[13px] text-[#6b7280] mb-4">
                The school fee is billed at $120 per term or 400 UGX.
              </div>
              <div className="space-y-3">
                {student.feeStructure.map((item) => (
                  <div key={item.item} className="flex justify-between text-[14px]">
                    <span className="text-[#1a1a1a]">{item.item}</span>
                    <span className="text-[#6b7280]">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#e5e0d8] rounded-2xl p-6">
              <h2 className="font-serif text-[1.2rem] text-[#1a3a2a] mb-4">
                Academic Reports
              </h2>
              <div className="space-y-4">
                {student.academicReports.map((report) => (
                  <div key={report.term}>
                    <div className="font-medium text-[#1a1a1a]">{report.term}</div>
                    <div className="text-[13px] text-[#6b7280]">{report.report}</div>
                    <div className="text-[12px] text-[#4caf7d]">{report.attendance}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#1a3a2a] text-white rounded-2xl p-6 sticky top-20">
            <div className="text-[13px] uppercase tracking-[.12em] text-white/60">
              Sponsor this child
            </div>
            <div className="font-serif text-[2rem] mt-2 mb-2">
              $30 / 100 UGX per month
            </div>
            <p className="text-white/70 text-[14px] leading-[1.7] mb-5">
              Your monthly sponsorship helps cover school fees, meals, learning
              materials, and consistent support for {student.fullName}.
            </p>
            <button className="w-full bg-[#4caf7d] text-white border-none py-[13px] rounded-lg text-[15px] font-medium cursor-pointer mb-3">
              Sponsor {student.fullName}
            </button>
            <div className="text-[12px] text-white/55">
              Goal: {student.sponsorGoal}/month · Received: {student.received}/month
            </div>
          </div>

          <div className="bg-white border border-[#e5e0d8] rounded-2xl p-6 mt-6">
            <h2 className="font-serif text-[1.2rem] text-[#1a3a2a] mb-4">
              Payment Receipts
            </h2>
            <div className="space-y-3">
              {student.paymentReceipts.map((receipt) => (
                <div
                  key={receipt.receipt}
                  className="border border-[#f0ece5] rounded-xl p-4"
                >
                  <div className="flex justify-between text-[13px]">
                    <span className="font-medium text-[#1a1a1a]">{receipt.receipt}</span>
                    <span className="text-[#4caf7d]">{receipt.status}</span>
                  </div>
                  <div className="text-[12px] text-[#6b7280] mt-1">
                    {receipt.date} · {receipt.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
