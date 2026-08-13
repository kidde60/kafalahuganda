import { useState } from "react";
import type { Screen } from "../types";

interface AdminLoginProps {
  onNavigate: (screen: Screen) => void;
}

export default function AdminLogin({ onNavigate }: AdminLoginProps) {
  const [email, setEmail] = useState("admin@karibu.org");
  const [password, setPassword] = useState("password");
  const [remember, setRemember] = useState(true);

  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Brand side */}
      <div className="bg-[#1a3a2a] flex flex-col justify-center items-center p-12 text-center relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] rounded-full border border-[rgba(76,175,125,0.2)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-[rgba(76,175,125,0.1)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="text-[3rem] mb-6 z-10">🌱</div>
        <h1 className="font-serif text-white text-[2.5rem] z-10 mb-2">
          Education & Skills Foundation Admin
        </h1>
        <p className="text-white/55 z-10 max-w-[280px] leading-[1.7] text-[.9rem]">
          Manage campaigns, track donations, and upload media — all in one
          secure dashboard.
        </p>
      </div>

      {/* Form side */}
      <div className="flex items-center justify-center p-12 bg-white">
        <div className="w-full max-w-[360px]">
          <h2 className="font-serif text-[1.75rem] text-[#1a3a2a] mb-1">
            Welcome back
          </h2>
          <div className="text-[13px] text-[#6b7280] mb-8">
            Sign in to access the admin panel
          </div>

          <div className="mb-5">
            <label className="text-[13px] text-[#6b7280] block mb-[6px] font-medium">
              Email address
            </label>
            <input
              className="w-full border-[1.5px] border-[#e5e0d8] rounded-lg py-[10px] px-[14px] text-[14px] outline-none text-[#1a1a1a] focus:border-[#4caf7d] transition-colors"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="text-[13px] text-[#6b7280] block mb-[6px] font-medium">
              Password
            </label>
            <input
              className="w-full border-[1.5px] border-[#e5e0d8] rounded-lg py-[10px] px-[14px] text-[14px] outline-none text-[#1a1a1a] focus:border-[#4caf7d] transition-colors"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-[6px] text-[13px] text-[#6b7280] cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
            <span className="text-[13px] text-[#4caf7d] cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            className="w-full bg-[#4caf7d] text-white border-none py-[13px] rounded-lg text-[15px] font-medium cursor-pointer transition-colors hover:bg-[#3d9e6a]"
            onClick={() => onNavigate("admin")}
          >
            Sign In →
          </button>

          <div className="mt-6 pt-6 border-t border-[#e5e0d8] text-[12px] text-[#6b7280] text-center leading-[1.7]">
            Protected by JWT authentication · Admin access only
            <br />
            All actions are logged for security.
          </div>
        </div>
      </div>
    </div>
  );
}
