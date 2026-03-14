import { useState } from "react";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { RiSwordLine } from "react-icons/ri";
import axios from "axios";

const BREVO_API_KEY = import.meta.envVITE_BREVO_API_KEY;
const SENDER_EMAIL = import.meta.env.VITE_SENDER_EMAIL
const API_URL = "http://localhost:3001";

export default function ResetPassword() {
  const [step, setStep] = useState(1); 
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // STEP 1 — Email yuborish
  const sendEmailCode = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:3001/users`);
      const findUser = res.data.find((u) => u.email === email);
      if (!findUser) {
        setError("Bu email ro'yxatda mavjud emas!");
        setLoading(false);
        return;
      }

      const generatedCode = Math.floor(100000 + Math.random() * 900000);
      setCode(generatedCode.toString());

      await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: { name: " Organic", email: SENDER_EMAIL },
          to: [{ email: email, name: "User" }],
          subject: "Parolni tiklash kodi",
          htmlContent: `
            <html><body style="font-family:Georgia,serif;background:#274C5B;padding:40px;">
              <div style="max-width:400px;margin:0 auto;background:#F9F8F8;border:3px solid #525C60;box-shadow:6px 6px 0 #525C60;">
                <div style="background:#525C60;padding:24px;border-bottom:3px solid #7EB693;">
                  <h2 style="color:#F9F8F8;margin:0;font-size:20px;letter-spacing:4px;text-transform:uppercase;">⚔ organic</h2>
                  <p style="color:#7EB693;margin:6px 0 0;font-size:11px;letter-spacing:3px;">PAROLNI TIKLASH</p>
                </div>
                <div style="padding:32px;text-align:center;">
                  <p style="color:#525C60;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;">Tasdiqlash kodingiz:</p>
                  <div style="background:#274C5B;border:3px solid #7EB693;padding:20px;display:inline-block;box-shadow:4px 4px 0 #7EB693;">
                    <h1 style="color:#EFF6F1;margin:0;font-size:36px;letter-spacing:12px;">${generatedCode}</h1>
                  </div>
                  <p style="color:#D4D4D4;font-size:11px;margin-top:20px;">Kod 10 daqiqa davomida amal qiladi.</p>
                </div>
              </div>
            </body></html>
          `,
        },
        {
          headers: {
            "api-key": BREVO_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      setStep(2);
    } catch (err) {
      setError("Xatolik yuz berdi. Qayta urinib ko'ring!");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // STEP 2 — Kodni tekshirish
  const checkCode = () => {
    setError("");
    if (inputCode.trim() === code.trim()) {
      setStep(3);
    } else {
      setError("Kod noto'g'ri! Qayta tekshiring.");
    }
  };

  // STEP 3 — Yangi parol saqlash
  const resetPassword = async () => {
    setError("");
    if (newPassword !== confirmPassword) {
      setError("Parollar mos kelmadi!");
      return;
    }
    if (newPassword.length < 6) {
      setError("Parol kamida 6 ta belgi bo'lishi kerak!");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/users`);
      const user = res.data.find((u) => u.email === email);
      await axios.put(`${API_URL}/users/${user.id}`, {
        ...user,
        password: newPassword,
      });
      setSuccess(true);
    } catch (err) {
      setError("Parolni yangilashda xatolik yuz berdi!");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full pl-10 pr-4 py-3 text-sm outline-none transition-all duration-200 text-[#274C5B] placeholder-[#D4D4D4] rounded-none ${
      focusedField === field
        ? "border-[2.5px] border-[#274C5B] bg-[#EFF6F1]"
        : "border-[2.5px] border-[#D4D4D4] bg-[#F9F8F8]"
    }`;

  const stepLabel = step === 1 ? "EMAIL" : step === 2 ? "KOD" : "YANGI PAROL";

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#274C5B]">

      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none">
        <defs>
          <pattern id="diag" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <line x1="0" y1="32" x2="32" y2="0" stroke="#EFF6F1" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      <svg className="absolute opacity-[0.04] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]">
        {Array.from({ length: 48 }).map((_, i) => {
          const a = (i * 7.5 * Math.PI) / 180;
          return <line key={i} x1="450" y1="450" x2={450 + 450 * Math.cos(a)} y2={450 + 450 * Math.sin(a)} stroke="#7EB693" strokeWidth="2.5" />;
        })}
      </svg>

      <div className="absolute top-0 left-0 w-52 h-52 bg-[#525C60] opacity-60" style={{ clipPath: "polygon(0 0,100% 0,0 100%)" }} />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#525C60] opacity-60" style={{ clipPath: "polygon(100% 0,100% 100%,0 100%)" }} />

      <svg className="absolute top-6 right-6 opacity-10 pointer-events-none" width="130" height="130">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 6 }).map((_, c) => (
            <circle key={`${r}${c}`} cx={c * 22 + 10} cy={r * 22 + 10} r={5} fill="#7EB693" />
          ))
        )}
      </svg>
      <svg className="absolute bottom-6 left-6 opacity-10 pointer-events-none" width="100" height="100">
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <circle key={`${r}${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r={4} fill="#EFF6F1" />
          ))
        )}
      </svg>

      <div className="absolute left-48 top-8 bottom-8 w-0.5 bg-[#7EB693] opacity-25 pointer-events-none" />
      <div className="absolute right-48 top-8 bottom-8 w-0.5 bg-[#7EB693] opacity-25 pointer-events-none" />

      {/* CARD */}
      <div className="relative z-10 w-full max-w-sm mx-4">
        <div className="absolute -inset-1 bg-gradient-to-br from-[#7EB693] via-transparent to-transparent opacity-50" />

        <div
          className="relative overflow-hidden border-[3px] border-[#525C60] bg-[#F9F8F8]"
          style={{ boxShadow: "8px 8px 0 #525C60, 18px 18px 0 rgba(39,76,91,0.3)" }}
        >
          <div className="h-1.5 bg-gradient-to-r from-[#274C5B] via-[#7EB693] to-[#274C5B]/30" />

          {/* HEADER */}
          <div className="relative px-8 pt-7 pb-6 bg-[#525C60] overflow-hidden">
            <svg className="absolute top-0 right-0 opacity-10 pointer-events-none" width="110" height="110">
              {Array.from({ length: 5 }).map((_, r) =>
                Array.from({ length: 5 }).map((_, c) => (
                  <circle key={`h${r}${c}`} cx={c * 22 + 10} cy={r * 22 + 10} r={5} fill="#EFF6F1" />
                ))
              )}
            </svg>

            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 flex items-center justify-center flex-shrink-0 border-[2.5px] border-[#7EB693] bg-[#274C5B]"
                style={{ transform: "rotate(-4deg)", boxShadow: "3px 3px 0 rgba(126,182,147,0.3)" }}
              >
                <RiSwordLine size={22} color="#EFF6F1" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] font-bold text-[#7EB693] mb-0.5 uppercase"> organic</p>
                <h1 className="text-2xl font-black tracking-wider uppercase leading-none text-[#F9F8F8]"
                  style={{ fontFamily: "Georgia, serif" }}>
                  RESET
                </h1>
              </div>
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-6 h-6 flex items-center justify-center text-[10px] font-black border-2 transition-all ${
                    step >= s
                      ? "bg-[#7EB693] border-[#7EB693] text-[#274C5B]"
                      : "bg-transparent border-[#525C60] text-[#525C60]"
                  }`}>
                    {step > s ? "✓" : s}
                  </div>
                  {s < 3 && <div className={`w-8 h-0.5 ${step > s ? "bg-[#7EB693]" : "bg-[#525C60]"}`} />}
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-[#7EB693] bg-[#274C5B]">
              <BsLightningChargeFill size={10} color="#7EB693" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#EFF6F1]">
                {stepLabel} BOSQICHI
              </span>
            </div>
          </div>

          {/* FORM */}
          <div className="px-8 pt-8 pb-8 bg-[#F9F8F8]">

            {/* Success */}
            {success ? (
              <div className="text-center py-4">
                <div
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-[3px] border-[#7EB693] bg-[#EFF6F1]"
                  style={{ boxShadow: "4px 4px 0 #7EB693" }}
                >
                  <RiSwordLine size={32} color="#274C5B" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-[#7EB693] bg-[#274C5B] mb-4">
                  <BsLightningChargeFill size={10} color="#7EB693" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#EFF6F1]">Muvaffaqiyatli!</span>
                </div>
                <p className="text-sm text-[#525C60] font-bold mb-6">Parol muvaffaqiyatli yangilandi!</p>
                <a
                  href="/login"
                  className="w-full py-3 flex items-center justify-center gap-2 text-sm font-black tracking-[0.15em] uppercase text-[#F9F8F8] border-[2.5px] border-[#274C5B] bg-[#274C5B] hover:bg-[#525C60] transition-all"
                  style={{ boxShadow: "4px 4px 0 #525C60" }}
                >
                  KIRISH SAHIFASIGA →
                </a>
              </div>
            ) : (
              <div className="space-y-5">

                {/* Error */}
                {error && (
                  <div className="flex items-center gap-2 px-3 py-2.5 border-2 border-red-400 bg-red-50">
                    <BsLightningChargeFill size={10} color="#ef4444" />
                    <span className="text-xs font-bold text-red-500 tracking-wide">{error}</span>
                  </div>
                )}

                {/* STEP 1 — Email */}
                {step === 1 && (
                  <div>
                    <label className="block text-[10px] font-black tracking-[0.15em] uppercase mb-2 text-[#525C60]">
                      Email manzil
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <MdEmail size={18} color={focusedField === "email" ? "#274C5B" : "#7EB693"} />
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(""); }}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="sizning@email.com"
                        required
                        className={inputClass("email")}
                        style={{ boxShadow: focusedField === "email" ? "3px 3px 0 rgba(39,76,91,0.15)" : "none" }}
                      />
                    </div>
                    <p className="text-[10px] text-[#7EB693] mt-2 tracking-wide">
                      ▶ Emailingizga 6 xonali kod yuboriladi
                    </p>
                  </div>
                )}

                {/* STEP 2 — Kod */}
                {step === 2 && (
                  <div>
                    <p className="text-xs text-[#525C60] mb-4 font-bold">
                      <span className="text-[#7EB693]">{email}</span> manziliga kod yuborildi
                    </p>
                    <label className="block text-[10px] font-black tracking-[0.15em] uppercase mb-2 text-[#525C60]">
                      Tasdiqlash kodi
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#7EB693] font-black text-sm">
                        #
                      </span>
                      <input
                        type="number"
                        value={inputCode}
                        onChange={(e) => { setInputCode(e.target.value); setError(""); }}
                        onFocus={() => setFocusedField("code")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="000000"
                        maxLength={6}
                        className={`${inputClass("code")} text-center text-lg tracking-[0.3em] font-black`}
                        style={{ boxShadow: focusedField === "code" ? "3px 3px 0 rgba(39,76,91,0.15)" : "none" }}
                      />
                    </div>
                    <button
                      onClick={() => { setStep(1); setInputCode(""); setError(""); }}
                      className="text-[10px] text-[#7EB693] mt-2 tracking-wide hover:text-[#274C5B] transition-colors border-b border-dashed border-[#7EB693]"
                    >
                      ← Emailni o'zgartirish
                    </button>
                  </div>
                )}

                {/* STEP 3 — Yangi parol */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-black tracking-[0.15em] uppercase mb-2 text-[#525C60]">
                        Yangi parol
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                          <MdLock size={18} color={focusedField === "newpass" ? "#274C5B" : "#7EB693"} />
                        </span>
                        <input
                          type={showPass ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => { setNewPassword(e.target.value); setError(""); }}
                          onFocus={() => setFocusedField("newpass")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="••••••••"
                          className={`w-full pl-10 pr-11 py-3 text-sm outline-none transition-all duration-200 text-[#274C5B] placeholder-[#D4D4D4] rounded-none ${
                            focusedField === "newpass" ? "border-[2.5px] border-[#274C5B] bg-[#EFF6F1]" : "border-[2.5px] border-[#D4D4D4] bg-[#F9F8F8]"
                          }`}
                          style={{ boxShadow: focusedField === "newpass" ? "3px 3px 0 rgba(39,76,91,0.15)" : "none" }}
                        />
                        <button type="button" onClick={() => setShowPass(!showPass)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity">
                          {showPass ? <MdVisibilityOff size={18} color="#7EB693" /> : <MdVisibility size={18} color="#7EB693" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black tracking-[0.15em] uppercase mb-2 text-[#525C60]">
                        Parolni tasdiqlang
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                          <MdLock size={18} color={focusedField === "confirm" ? "#274C5B" : "#7EB693"} />
                        </span>
                        <input
                          type={showConfirm ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => { setConfirmPassword(e.target.value); setError(""); }}
                          onFocus={() => setFocusedField("confirm")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="••••••••"
                          className={`w-full pl-10 pr-11 py-3 text-sm outline-none transition-all duration-200 text-[#274C5B] placeholder-[#D4D4D4] rounded-none ${
                            focusedField === "confirm"
                              ? "border-[2.5px] border-[#274C5B] bg-[#EFF6F1]"
                              : confirmPassword && confirmPassword !== newPassword
                              ? "border-[2.5px] border-red-400 bg-red-50"
                              : "border-[2.5px] border-[#D4D4D4] bg-[#F9F8F8]"
                          }`}
                          style={{ boxShadow: focusedField === "confirm" ? "3px 3px 0 rgba(39,76,91,0.15)" : "none" }}
                        />
                        <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity">
                          {showConfirm ? <MdVisibilityOff size={18} color="#7EB693" /> : <MdVisibility size={18} color="#7EB693" />}
                        </button>
                      </div>
                      {confirmPassword && confirmPassword !== newPassword && (
                        <p className="text-[10px] text-red-400 font-bold mt-1 tracking-wide">⚠ Parollar mos kelmadi</p>
                      )}
                    </div>
                  </div>
                )}

                {/* ACTION BUTTON */}
                <button
                  onClick={step === 1 ? sendEmailCode : step === 2 ? checkCode : resetPassword}
                  disabled={loading}
                  className={`w-full py-3.5 flex items-center justify-center gap-2.5 text-sm font-black tracking-[0.2em] uppercase text-[#F9F8F8] border-[2.5px] border-[#274C5B] transition-all duration-150 rounded-none ${
                    loading
                      ? "bg-[#7EB693] cursor-not-allowed"
                      : "bg-[#274C5B] cursor-pointer hover:bg-[#525C60] hover:translate-x-0.5 hover:translate-y-0.5"
                  }`}
                  style={{ boxShadow: loading ? "none" : "4px 4px 0 #525C60" }}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-[#F9F8F8] border-t-transparent animate-spin" />
                      YUKLANMOQDA...
                    </>
                  ) : (
                    <>
                      <BsLightningChargeFill size={14} />
                      {step === 1 ? "KOD YUBORISH" : step === 2 ? "KODNI TASDIQLASH" : "PAROLNI YANGILASH"}
                    </>
                  )}
                </button>

                {/* Back to login */}
                <div className="text-center py-3.5 border-2 border-[#D4D4D4] bg-[#EFF6F1]">
                  <a href="/login" className="text-xs font-black text-[#274C5B] border-b-2 border-[#7EB693] pb-px tracking-wide hover:text-[#525C60] transition-colors">
                    ← KIRISH SAHIFASIGA QAYTISH
                  </a>
                </div>

              </div>
            )}
          </div>

          <div className="h-1 bg-gradient-to-r from-[#274C5B]/30 via-[#7EB693] to-[#274C5B]/30" />
        </div>

        <div className="absolute -bottom-2 left-2 right-0 h-3 -z-10 bg-[#274C5B] opacity-40" />
      </div>
    </div>
  );
}