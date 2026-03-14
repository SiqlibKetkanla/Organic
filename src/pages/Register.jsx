import { useState } from "react";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff, MdPersonAdd, MdPerson } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { RiSwordLine } from "react-icons/ri";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", surname: "", email: "", password: "", confirm: "" });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) { setError("Parollar mos kelmadi!"); return; }
    if (form.password.length < 6) { setError("Parol kamida 6 ta belgi bo'lishi kerak!"); return; }
    setLoading(true);
    try {
      await axios.post("http://localhost:3001/users", {
        name: form.name,
        surname: form.surname,
        email: form.email,
        password: form.password,
      });
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "Xatolik yuz berdi. Qayta urinib ko'ring!");
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

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#274C5B] py-8">

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
                <p className="text-[10px] tracking-[0.2em] font-bold text-[#7EB693] mb-0.5 uppercase"> Organic</p>
                <h1 className="text-2xl font-black tracking-wider uppercase leading-none text-[#F9F8F8]"
                  style={{ fontFamily: "Georgia, serif" }}>
                  RO'YXAT
                </h1>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-[#7EB693] bg-[#274C5B]">
              <BsLightningChargeFill size={10} color="#7EB693" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#EFF6F1]">
                Yangi hisob yarating
              </span>
            </div>
          </div>

          {/* FORM */}
          <div className="px-8 pt-7 pb-8 bg-[#F9F8F8]">
            {success ? (
              <div className="text-center py-6">
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
                <p className="text-sm text-[#525C60] font-bold mb-1">Hisob muvaffaqiyatli yaratildi!</p>
                <p className="text-xs text-[#7EB693] mb-6 font-mono">{form.email}</p>
                <a 
                  href="/login"
                  className="w-full py-3 flex items-center justify-center gap-2 text-sm font-black tracking-[0.15em] uppercase text-[#F9F8F8] border-[2.5px] border-[#274C5B] bg-[#274C5B] hover:bg-[#525C60] transition-all"
                  style={{ boxShadow: "4px 4px 0 #525C60" }}
                >
                  <MdPerson size={16} />
                  KIRISH SAHIFASIGA →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                {error && (
                  <div className="flex items-center gap-2 px-3 py-2.5 border-2 border-red-400 bg-red-50">
                    <BsLightningChargeFill size={10} color="#ef4444" />
                    <span className="text-xs font-bold text-red-500 tracking-wide">{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black tracking-[0.12em] uppercase mb-1.5 text-[#525C60]">Ism</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <MdPerson size={16} color={focusedField === "name" ? "#274C5B" : "#7EB693"} />
                      </span>
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Ism" required
                        className={inputClass("name")}
                        style={{ boxShadow: focusedField === "name" ? "3px 3px 0 rgba(39,76,91,0.15)" : "none" }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-[0.12em] uppercase mb-1.5 text-[#525C60]">Familiya</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <MdPerson size={16} color={focusedField === "surname" ? "#274C5B" : "#7EB693"} />
                      </span>
                      <input
                        type="text" name="surname" value={form.surname}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("surname")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Familiya" required
                        className={inputClass("surname")}
                        style={{ boxShadow: focusedField === "surname" ? "3px 3px 0 rgba(39,76,91,0.15)" : "none" }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black tracking-[0.12em] uppercase mb-1.5 text-[#525C60]">Email manzil</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <MdEmail size={18} color={focusedField === "email" ? "#274C5B" : "#7EB693"} />
                    </span>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="sizning@email.com" required
                      className={inputClass("email")}
                      style={{ boxShadow: focusedField === "email" ? "3px 3px 0 rgba(39,76,91,0.15)" : "none" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black tracking-[0.12em] uppercase mb-1.5 text-[#525C60]">Parol</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <MdLock size={18} color={focusedField === "password" ? "#274C5B" : "#7EB693"} />
                    </span>
                    <input
                      type={showPass ? "text" : "password"} name="password" value={form.password}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("password")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="••••••••" required
                      className={`w-full pl-10 pr-11 py-3 text-sm outline-none transition-all duration-200 text-[#274C5B] placeholder-[#D4D4D4] rounded-none ${
                        focusedField === "password" ? "border-[2.5px] border-[#274C5B] bg-[#EFF6F1]" : "border-[2.5px] border-[#D4D4D4] bg-[#F9F8F8]"
                      }`}
                      style={{ boxShadow: focusedField === "password" ? "3px 3px 0 rgba(39,76,91,0.15)" : "none" }}
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity">
                      {showPass ? <MdVisibilityOff size={18} color="#7EB693" /> : <MdVisibility size={18} color="#7EB693" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black tracking-[0.12em] uppercase mb-1.5 text-[#525C60]">Parolni tasdiqlang</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <MdLock size={18} color={focusedField === "confirm" ? "#274C5B" : "#7EB693"} />
                    </span>
                    <input
                      type={showConfirm ? "text" : "password"} name="confirm" value={form.confirm}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("confirm")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="••••••••" required
                      className={`w-full pl-10 pr-11 py-3 text-sm outline-none transition-all duration-200 text-[#274C5B] placeholder-[#D4D4D4] rounded-none ${
                        focusedField === "confirm"
                          ? "border-[2.5px] border-[#274C5B] bg-[#EFF6F1]"
                          : form.confirm && form.confirm !== form.password
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
                  {form.confirm && form.confirm !== form.password && (
                    <p className="text-[10px] text-red-400 font-bold mt-1 tracking-wide">⚠ Parollar mos kelmadi</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3.5 flex items-center justify-center gap-2.5 text-sm font-black tracking-[0.2em] uppercase text-[#F9F8F8] border-[2.5px] border-[#274C5B] transition-all duration-150 rounded-none mt-2 ${
                    loading
                      ? "bg-[#7EB693] cursor-not-allowed"
                      : "bg-[#274C5B] cursor-pointer hover:bg-[#525C60] hover:translate-x-0.5 hover:translate-y-0.5"
                  }`}
                  style={{ boxShadow: loading ? "none" : "4px 4px 0 #525C60" }}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-[#F9F8F8] border-t-transparent animate-spin" />
                      SAQLANMOQDA...
                    </>
                  ) : (
                    <>
                      <MdPersonAdd size={18} />
                      RO'YXATDAN O'TISH
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-[#D4D4D4]" />
                  <span className="text-[10px] font-black tracking-widest text-[#525C60]">YOKI</span>
                  <div className="flex-1 h-px bg-[#D4D4D4]" />
                </div>

                <div className="text-center py-3.5 border-2 border-[#D4D4D4] bg-[#EFF6F1]">
                  <span className="text-xs text-[#525C60]">Hisob bor mi? </span>
                  <a href="/login" className="text-xs font-black text-[#274C5B] border-b-2 border-[#7EB693] pb-px tracking-wide hover:text-[#525C60] transition-colors">
                    KIRISH →
                  </a>
                </div>

              </form>
            )}
          </div>

          <div className="h-1 bg-gradient-to-r from-[#274C5B]/30 via-[#7EB693] to-[#274C5B]/30" />
        </div>

        <div className="absolute -bottom-2 left-2 right-0 h-3 -z-10 bg-[#274C5B] opacity-40" />
      </div>
    </div>
  );
}