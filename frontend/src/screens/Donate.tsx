import { useState } from "react";

const AMOUNTS = [10, 25, 50, 100, 250];
const CURRENCIES = [
  { label: "USD $", value: "USD" },
  { label: "EUR €", value: "EUR" },
  { label: "GBP £", value: "GBP" },
  { label: "KES KSh", value: "KES" },
];

export default function Donate() {
  const [selectedAmt, setSelectedAmt] = useState(25);
  const [currency, setCurrency] = useState("USD");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-[#f7f5f0]">
      <div className="bg-white border border-[#e5e0d8] rounded-2xl w-full max-w-[480px] overflow-hidden">
        <div className="bg-[#1a3a2a] p-8 text-white text-center">
          <div className="text-[2rem] mb-3">💚</div>
          <h2 className="font-serif text-[1.5rem] mb-1">
            Complete Your Donation
          </h2>
          <p className="text-[13px] opacity-60">
            Build 10 Schools in Rural Kenya
          </p>
        </div>
        <div className="p-8">
          <div className="text-[13px] text-[#6b7280] mb-2 font-medium">
            Select amount
          </div>
          <div className="grid grid-cols-3 gap-2 mt-0 mb-5">
            {[...AMOUNTS, "Other"].map((a) => (
              <button
                key={a}
                className={`py-[10px] px-2 border-[1.5px] rounded-lg text-[14px] font-medium text-center cursor-pointer transition-all ${
                  selectedAmt === a
                    ? "border-[#4caf7d] bg-[#e8f5ee] text-[#1a3a2a]"
                    : "border-[#e5e0d8] bg-white text-[#1a1a1a] hover:border-[#4caf7d]"
                }`}
                onClick={() => typeof a === "number" && setSelectedAmt(a)}
              >
                {typeof a === "number" ? `$${a}` : a}
              </button>
            ))}
          </div>

          <div className="text-[13px] text-[#6b7280] mb-2 font-medium mt-5">
            Currency
          </div>
          <div className="flex gap-2 mb-5">
            {CURRENCIES.map((c) => (
              <button
                key={c.value}
                className={`flex-1 py-2 border-[1.5px] rounded-[7px] text-[13px] font-medium cursor-pointer transition-all ${
                  currency === c.value
                    ? "border-[#4caf7d] bg-[#e8f5ee] text-[#1a3a2a]"
                    : "border-[#e5e0d8] bg-white text-[#1a1a1a] hover:border-[#4caf7d]"
                }`}
                onClick={() => setCurrency(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mb-5">
            <label className="text-[13px] text-[#6b7280] block mb-[6px] font-medium">
              Email address
            </label>
            <input
              className="w-full border-[1.5px] border-[#e5e0d8] rounded-lg py-[10px] px-[14px] text-[14px] outline-none text-[#1a1a1a] focus:border-[#4caf7d] transition-colors"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="text-[13px] text-[#6b7280] block mb-[6px] font-medium">
              Full name (optional)
            </label>
            <input
              className="w-full border-[1.5px] border-[#e5e0d8] rounded-lg py-[10px] px-[14px] text-[14px] outline-none text-[#1a1a1a] focus:border-[#4caf7d] transition-colors"
              type="text"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="bg-[#f0faf4] border border-[#c6e8d5] rounded-lg px-[14px] py-3 text-[13px] text-[#1a6640] mb-4 flex items-center gap-2">
            <span>✅</span> You'll be redirected to Stripe's secure checkout to
            complete payment.
          </div>
          <button className="w-full bg-[#635bff] text-white border-none py-[14px] rounded-lg text-[15px] font-medium cursor-pointer transition-colors hover:bg-[#4c46d4] mt-2">
            Continue to Stripe →
          </button>
          <div className="text-center text-[12px] text-[#6b7280] mt-4 flex items-center justify-center gap-1">
            🔒 Powered by Stripe · No card data stored
          </div>
        </div>
      </div>
    </div>
  );
}
