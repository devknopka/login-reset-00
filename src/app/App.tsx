import { useState, useRef, useEffect, useCallback } from "react";
import svgPaths from "@/imports/СброситьПароль/svg-4xg3nwgtem";
import imgSupport from "@/imports/ПозвониНам/3ec10e40865ab11b629c4870121e5e36f1885f5d.png";
import imgSuccess from "@/imports/Успех/6ad5ccc270332ceaee061c0e45beb79b7fc3d0de.png";
import { Eye, EyeOff } from "lucide-react";

type Screen =
  | "login"
  | "reset-email"
  | "reset-login"
  | "code-phone"
  | "code-email"
  | "call-us"
  | "new-password"
  | "success";

const FT = "'Futura Pt', sans-serif";

/* ── countdown hook ── */
function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  const reset = useCallback(() => setLeft(seconds), [seconds]);

  useEffect(() => {
    if (left <= 0) return;
    const id = setTimeout(() => setLeft(l => l - 1), 1000);
    return () => clearTimeout(id);
  }, [left]);

  const fmt = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;
  return { left, fmt, reset };
}

function ResendBtn({ onResend }: { onResend: () => void }) {
  const { left, fmt, reset } = useCountdown(60);
  const handle = () => { reset(); onResend(); };

  if (left > 0) {
    return (
      <p className="text-[18px] leading-[22px] text-center"
        style={{ fontFamily: FT, fontWeight: 400, color: "#a0a0a0" }}>
        Отправить повторно через {fmt}
      </p>
    );
  }
  return <LinkBtn label="Отправить повторно" onClick={handle} />;
}

/* ── back arrow SVG ── */
function BackArrow() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M9.94 19.493C9.60338 19.1314 9.43506 18.7325 9.43506 18.2961C9.43506 18.0842 9.4787 17.8722 9.56597 17.6603C9.65325 17.4483 9.77792 17.2738 9.94 17.1366L14.6901 12.3491C15.0018 12.0249 15.3945 11.8629 15.8683 11.8629C16.3421 11.8629 16.7348 12.0249 17.0465 12.3491C17.3831 12.6857 17.5514 13.0847 17.5514 13.546C17.5514 13.9948 17.3831 14.4 17.0465 14.7616L15.1951 16.6317H24.4335C24.8948 16.6317 25.2813 16.7938 25.593 17.1179C25.9171 17.4421 26.0792 17.8348 26.0792 18.2961C26.0792 18.7699 25.9171 19.1751 25.593 19.5117C25.2813 19.8358 24.8948 19.9979 24.4335 19.9979H15.1951L17.0465 21.8681C17.3706 22.1797 17.5327 22.5725 17.5327 23.0462C17.5327 23.2706 17.4891 23.4888 17.4018 23.7008C17.327 23.9003 17.2086 24.081 17.0465 24.2431C16.7348 24.5797 16.3421 24.7481 15.8683 24.7481C15.407 24.7481 15.0143 24.5797 14.6901 24.2431L9.94 19.493Z" fill="currentColor"/>
    </svg>
  );
}

/* ── logo ── */
function Logo() {
  return (
    <div className="flex items-center justify-between w-[198px]">
      <div className="relative shrink-0 size-[30px]">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 30.1445 30.1445">
          <path d={svgPaths.p27f0b880} fill="#00BDA7" /><path d={svgPaths.p7ee0870} fill="white" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[30px]">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 30.1849 30.1445">
          <path d={svgPaths.p3b51480} fill="#5C6AC1" /><path d={svgPaths.p47ad700} fill="white" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[30px]">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 30.1849 30.1445">
          <path d={svgPaths.p2de72d00} fill="#FFB12E" /><path d={svgPaths.p1dabd700} fill="white" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[30px]">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 30.1849 30.1445">
          <path d={svgPaths.p2de72d00} fill="#2CBA41" /><path d={svgPaths.p18343000} fill="white" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[30px]">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 30.1445 30.1445">
          <path d={svgPaths.p28e31e80} fill="#00BBF2" /><path d={svgPaths.p18d2f480} fill="white" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[30px]">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 30.1445 30.1445">
          <path d={svgPaths.p3e583580} fill="#F8525D" /><path d={svgPaths.p5b9b00} fill="white" />
        </svg>
      </div>
    </div>
  );
}

/* ── phone FAB ── */
function PhoneButton() {
  return (
    <div className="fixed bottom-[28px] right-[29px] bg-[#5c6ac1] flex items-center justify-center p-[19px] rounded-full cursor-pointer hover:bg-[#4a57a8] transition-colors z-40">
      <div className="w-[30px] h-[31px] relative">
        <svg className="block size-full" fill="none" viewBox="0 0 29.0416 29.0417">
          <path d={svgPaths.p2d212b80} fill="white" stroke="white" strokeMiterlimit="10" strokeWidth="2.375" />
          <path d={svgPaths.p21f821c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.375" />
          <path d={svgPaths.p38e5cee0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.375" />
        </svg>
      </div>
    </div>
  );
}

/* ── shared primitives ── */
function PageTitle({ text }: { text: string }) {
  return (
    <p className="text-[#2d2d2d] text-[30px] text-center leading-[1.3]"
      style={{ fontFamily: FT, fontWeight: 600 }}>
      {text}
    </p>
  );
}

function Card({ children, onBack }: { children: React.ReactNode; onBack?: () => void }) {
  return (
    <div className="bg-[#f7f6f4] rounded-[25px] w-[336px] min-h-[361px] p-[30px] relative flex flex-col items-center">
      {onBack && (
        <button onClick={onBack}
          className="absolute left-[20px] top-[17.86px] size-[36px] flex items-center justify-center rounded-[18px] text-[#2d2d2d] hover:text-[#555] transition-colors cursor-pointer">
          <BackArrow />
        </button>
      )}
      {children}
    </div>
  );
}

function Btn({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button onClick={onClick}
      className="bg-[#00a0eb] h-[55px] w-full rounded-[12px] flex items-center justify-center hover:bg-[#0090d4] active:scale-[0.98] transition-all cursor-pointer">
      <span className="text-white text-[20px] leading-[22px]"
        style={{ fontFamily: FT, fontWeight: 600 }}>{label}</span>
    </button>
  );
}

function LinkBtn({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button onClick={onClick}
      className="text-[#00a0eb] text-[18px] text-center leading-[22px] cursor-pointer"
      style={{ fontFamily: FT, fontWeight: 400, transition: "color 150ms" }}
      onMouseEnter={e => { e.currentTarget.style.color = "#33b8f5"; }}
      onMouseLeave={e => { e.currentTarget.style.color = "#00a0eb"; }}>
      {label}
    </button>
  );
}

function TextInput({ placeholder, value, onChange }: {
  placeholder: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="bg-white h-[40px] rounded-[12px] w-full border border-[#ddd] flex items-center px-3">
      <input className="flex-1 text-[18px] leading-[22px] text-[#2d2d2d] placeholder-[#8c8c8c] outline-none bg-transparent"
        style={{ fontFamily: FT, fontWeight: 400 }}
        placeholder={placeholder} value={value}
        onChange={e => onChange(e.target.value)} />
    </div>
  );
}

function PasswordInput({ placeholder, value, onChange, error }: {
  placeholder: string; value: string; onChange: (v: string) => void; error?: boolean;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className={`bg-white h-[40px] rounded-[12px] w-full border flex items-center px-3 gap-2 transition-colors ${error ? "border-2 border-[#F8525D]" : "border-[#ddd]"}`}>
      <input className="flex-1 text-[18px] leading-[22px] text-[#2d2d2d] placeholder-[#8c8c8c] outline-none bg-transparent"
        style={{ fontFamily: FT, fontWeight: 400 }}
        type={show ? "text" : "password"}
        placeholder={placeholder} value={value}
        onChange={e => onChange(e.target.value)} />
      <button type="button" className="text-[#aaa] hover:text-[#2d2d2d] transition-colors"
        onClick={() => setShow(s => !s)}>
        {show ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );
}

function BodyText({ children, center = true }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`text-[#2d2d2d] text-[18px] leading-[22px] ${center ? "text-center" : ""}`}
      style={{ fontFamily: FT, fontWeight: 400 }}>
      {children}
    </p>
  );
}

/* ── code input ── */
function CodeInput({ error, onComplete }: { error?: boolean; onComplete: (code: string) => void }) {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const refs = useRef<(HTMLInputElement | null)[]>([null, null, null, null]);

  const update = (next: string[]) => {
    setDigits(next);
    const full = next.join("");
    if (full.length === 4) onComplete(full);
  };

  const handleChange = (i: number, val: string) => {
    const d = val.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[i] = d;
    update(next);
    if (d && i < 3) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (digits[i]) { const n = [...digits]; n[i] = ""; update(n); }
      else if (i > 0) refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus();
    else if (e.key === "ArrowRight" && i < 3) refs.current[i + 1]?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    if (!pasted) return;
    e.preventDefault();
    const next = ["", "", "", ""];
    pasted.split("").forEach((ch, i) => { next[i] = ch; });
    update(next);
    refs.current[Math.min(pasted.length, 3)]?.focus();
  };

  const borderCls = error ? "border-2 border-[#F8525D]" : "border-transparent";

  return (
    <div className="flex flex-col items-center gap-[8px]">
      <div className="flex gap-[10px]">
        {digits.map((d, i) => (
          <div key={i} className={`relative bg-white size-[64px] rounded-[14px] border-2 transition-colors ${error ? "border-[#F8525D]" : "border-transparent"}`}>
            <input
              ref={el => { refs.current[i] = el; }}
              type="text" inputMode="numeric" maxLength={1} value={d}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
              onPaste={handlePaste}
              onClick={() => refs.current[i]?.select()}
              className="absolute inset-0 w-full h-full text-center text-[28px] text-[#2d2d2d] outline-none bg-transparent caret-[#00a0eb] rounded-[14px]"
              style={{ fontFamily: FT, fontWeight: 600 }}
            />
          </div>
        ))}
      </div>
      {error && (
        <p className="text-[#F8525D] text-[14px] text-center leading-[16px]"
          style={{ fontFamily: FT, fontWeight: 600 }}>Неверный код</p>
      )}
    </div>
  );
}

/* ══════════════════════════════════
   SCREENS
══════════════════════════════════ */

function LoginScreen({ go }: { go: (s: Screen) => void }) {
  const [tab, setTab] = useState<"phone" | "login">("login");
  const [phone, setPhone] = useState("+7");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-[44px] items-center">
      <Logo />
      <PageTitle text="Вход" />
      <Card>
        <div className="flex flex-col gap-[30px] items-center w-full">
          {/* tabs */}
          <div className="flex gap-[10px] items-center">
            {(["phone", "login"] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`h-[40px] px-5 rounded-[12px] transition-all cursor-pointer ${tab === t ? "bg-white shadow-sm" : ""}`}>
                <span className="text-[#2d2d2d] text-[18px] leading-[22px]"
                  style={{ fontFamily: FT, fontWeight: tab === t ? 600 : 400 }}>
                  {t === "phone" ? "Телефон" : "Логин"}
                </span>
              </button>
            ))}
          </div>

          {tab === "phone" ? (
            <div className="flex flex-col gap-[28px] items-center w-full">
              <BodyText>Введите номер телефона,{"\n"}привязанный к вашей учётной записи</BodyText>
              <div className="flex flex-col gap-[6px] w-full">
                <p className="text-[#8c8c8c] text-[14px] leading-[18px]"
                  style={{ fontFamily: FT, fontWeight: 400 }}>Телефон</p>
                <div className="bg-white h-[40px] rounded-[12px] w-full border border-[#ddd] flex items-center px-3">
                  <input
                    className="flex-1 text-[18px] leading-[22px] text-[#2d2d2d] outline-none bg-transparent"
                    style={{ fontFamily: FT, fontWeight: 400 }}
                    type="tel" value={phone}
                    onChange={e => {
                      const v = e.target.value;
                      if (!v.startsWith("+7")) setPhone("+7");
                      else setPhone(v);
                    }} />
                </div>
              </div>
              <Btn label="Продолжить" onClick={() => go("success")} />
            </div>
          ) : (
            <div className="flex flex-col gap-[28px] items-center w-full">
              <div className="flex flex-col gap-[12px] w-full">
                <TextInput placeholder="Логин или почта" value={login} onChange={setLogin} />
                <PasswordInput placeholder="Пароль от аккаунта" value={password} onChange={setPassword} />
              </div>
              <Btn label="Продолжить" onClick={() => go("success")} />
              <LinkBtn label="Забыли пароль?" onClick={() => go("reset-email")} />
            </div>
          )}
        </div>
      </Card>
      <p className="text-[#00a0eb] text-[20px] text-center cursor-pointer"
        style={{ fontFamily: FT, fontWeight: 600 }}>У меня нет учётной записи</p>
    </div>
  );
}

function ResetEmailScreen({ go }: { go: (s: Screen) => void }) {
  const [val, setVal] = useState("");
  return (
    <div className="flex flex-col gap-[44px] items-center">
      <Logo />
      <PageTitle text="Сбросить пароль" />
      <Card>
        <div className="flex flex-col gap-[32px] items-center w-full">
          <div className="flex flex-col gap-[28px] items-center w-full">
            <BodyText>Введите почту или телефон,{"\n"}которые указывали в Кнопке</BodyText>
            <TextInput placeholder="Почта или телефон" value={val} onChange={setVal} />
            <Btn label="Выслать код" onClick={() => go("code-phone")} />
          </div>
          <LinkBtn label="Не помню контакты, которые указывал" onClick={() => go("reset-login")} />
        </div>
      </Card>
      <LoginLink go={go} />
    </div>
  );
}

function ResetLoginScreen({ go }: { go: (s: Screen) => void }) {
  const [val, setVal] = useState("");
  return (
    <div className="flex flex-col gap-[44px] items-center">
      <Logo />
      <PageTitle text="Сбросить пароль" />
      <Card onBack={() => go("reset-email")}>
        <div className="flex flex-col gap-[32px] items-center w-full mt-6">
          <div className="flex flex-col gap-[28px] items-center w-full">
            <BodyText>Укажите логин, по которому входите в Кнопку</BodyText>
            <TextInput placeholder="Логин" value={val} onChange={setVal} />
            <Btn label="Продолжить" onClick={() => go("code-email")} />
          </div>
          <LinkBtn label="Не помню логин" onClick={() => go("call-us")} />
        </div>
      </Card>
      <LoginLink go={go} />
    </div>
  );
}

function CodePhoneScreen({ go }: { go: (s: Screen) => void }) {
  const [error, setError] = useState(false);

  const handleComplete = (code: string) => {
    if (code === "1234") { setError(false); go("new-password"); }
    else setError(true);
  };

  return (
    <div className="flex flex-col gap-[44px] items-center">
      <Logo />
      <PageTitle text="Сбросить пароль" />
      <Card onBack={() => go("reset-email")}>
        <div className="flex flex-col gap-[36px] items-center w-full mt-6">
          <BodyText>{"Введите код.\nМы отправили его на номер\n+7 904 386 56 56"}</BodyText>
          <CodeInput error={error} onComplete={handleComplete} />
          <ResendBtn onResend={() => {}} />
        </div>
      </Card>
      <LoginLink go={go} />
    </div>
  );
}

function CodeEmailScreen({ go }: { go: (s: Screen) => void }) {
  const [error, setError] = useState(false);

  const handleComplete = (code: string) => {
    if (code === "1234") { setError(false); go("new-password"); }
    else setError(true);
  };

  return (
    <div className="flex flex-col gap-[44px] items-center">
      <Logo />
      <PageTitle text="Сбросить пароль" />
      <Card onBack={() => go("reset-login")}>
        <div className="flex flex-col gap-[36px] items-center w-full mt-6">
          <BodyText>{"Введите код.\nМы отправили его на почту\nka***********a@gmail.com"}</BodyText>
          <CodeInput error={error} onComplete={handleComplete} />
          <div className="flex flex-col gap-[28px] items-center">
            <ResendBtn onResend={() => {}} />
            <LinkBtn label="Нет доступа к почте" onClick={() => go("call-us")} />
          </div>
        </div>
      </Card>
      <LoginLink go={go} />
    </div>
  );
}

function CallUsScreen({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="flex flex-col gap-[44px] items-center">
      <Logo />
      <PageTitle text="Сбросить пароль" />
      <Card onBack={() => go("reset-login")}>
        <div className="flex flex-col gap-[16px] items-center w-full mt-4">
          <img src={imgSupport} alt="Поддержка" className="w-[238px] h-[165px] object-contain" />
          <div className="flex flex-col gap-[12px] items-center">
            <a href="tel:88005001024"
              className="text-[#00a0eb] text-[20px] text-center leading-[22px] hover:text-[#33b8f5] transition-colors"
              style={{ fontFamily: FT, fontWeight: 600 }}>8 800 500 10 24</a>
            <BodyText>Позвоните нам, чтобы восстановить пароль.</BodyText>
          </div>
        </div>
      </Card>
      <LoginLink go={go} />
    </div>
  );
}

function NewPasswordScreen({ go }: { go: (s: Screen) => void }) {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    if (!pass1 || pass1 !== pass2) { setError(true); return; }
    setError(false);
    go("success");
  };

  return (
    <div className="flex flex-col gap-[44px] items-center">
      <Logo />
      <PageTitle text="Сбросить пароль" />
      <Card>
        <div className="flex flex-col gap-[28px] items-center w-full">
          <BodyText>Введите новый пароль</BodyText>
          <div className="flex flex-col gap-[12px] w-full">
            <PasswordInput placeholder="Новый пароль" value={pass1}
              onChange={v => { setPass1(v); setError(false); }} error={error} />
            <PasswordInput placeholder="Новый пароль ещё раз" value={pass2}
              onChange={v => { setPass2(v); setError(false); }} error={error} />
            {error && (
              <p className="text-[#F8525D] text-[14px] text-center leading-[16px]"
                style={{ fontFamily: FT, fontWeight: 600 }}>
                {!pass1 ? "Введите пароль" : "Пароли не совпадают"}
              </p>
            )}
          </div>
          <Btn label="Сохранить и войти" onClick={submit} />
        </div>
      </Card>
      <LoginLink go={go} />
    </div>
  );
}

function SuccessScreen({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="flex flex-col gap-[44px] items-center">
      <Logo />
      <PageTitle text="Вход" />
      <div className="bg-[#00a0eb] rounded-[25px] w-[336px] h-[354px] flex items-center justify-center">
        <div className="flex flex-col gap-[32px] items-center">
          <div className="size-[90px] rounded-full overflow-hidden flex items-center justify-center bg-white/20">
            <img src={imgSuccess} alt="" className="size-[106px] object-cover" />
          </div>
          <div className="flex flex-col gap-[10px] items-center text-center text-white">
            <p className="text-[20px] leading-[22px]" style={{ fontFamily: FT, fontWeight: 700 }}>Готово</p>
            <p className="text-[18px] leading-[22px] whitespace-nowrap" style={{ fontFamily: FT, fontWeight: 400 }}>Добро пожаловать в Кнопку!</p>
          </div>
        </div>
      </div>
      <p className="text-[#00a0eb] text-[20px] text-center cursor-pointer"
        style={{ fontFamily: FT, fontWeight: 600 }}>
        У меня нет учётной записи →
      </p>
    </div>
  );
}

/* ── bottom link shared ── */
function LoginLink({ go }: { go: (s: Screen) => void }) {
  return (
    <p className="text-[#00a0eb] text-[20px] text-center cursor-pointer"
      style={{ fontFamily: FT, fontWeight: 600, transition: "color 150ms" }}
      onMouseEnter={e => { e.currentTarget.style.color = "#33b8f5"; }}
      onMouseLeave={e => { e.currentTarget.style.color = "#00a0eb"; }}
      onClick={() => go("login")}>
      Войти в Кнопку
    </p>
  );
}

/* ── prototype nav bar ── */
const LABELS: Record<Screen, string> = {
  login: "Вход",
  "reset-email": "Почта/телефон",
  "reset-login": "Введите логин",
  "code-phone": "Код (телефон)",
  "code-email": "Код (почта)",
  "call-us": "Позвони нам",
  "new-password": "Новый пароль",
  "success": "Успех",
};

function FlowMap({ current, go }: { current: Screen; go: (s: Screen) => void }) {
  const screens = Object.keys(LABELS) as Screen[];
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-[#eee] px-6 py-3 flex items-center gap-2 flex-wrap z-50">
      <span className="text-xs text-[#999] mr-1" style={{ fontFamily: FT }}>Экран:</span>
      {screens.map(s => (
        <button key={s} onClick={() => go(s)}
          className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
            s === current ? "bg-[#00a0eb] text-white border-[#00a0eb]" : "bg-white text-[#555] border-[#ddd] hover:border-[#00a0eb] hover:text-[#00a0eb]"
          }`}
          style={{ fontFamily: FT, fontWeight: s === current ? 600 : 400 }}>
          {LABELS[s]}
        </button>
      ))}
    </div>
  );
}

/* ── root ── */
export default function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const go = (s: Screen) => setScreen(s);

  return (
    <div className="min-h-screen bg-white flex flex-col pb-20">
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div key={screen} className="animate-in fade-in slide-in-from-bottom-3 duration-250">
          {screen === "login"        && <LoginScreen go={go} />}
          {screen === "reset-email"  && <ResetEmailScreen go={go} />}
          {screen === "reset-login"  && <ResetLoginScreen go={go} />}
          {screen === "code-phone"   && <CodePhoneScreen go={go} />}
          {screen === "code-email"   && <CodeEmailScreen go={go} />}
          {screen === "call-us"      && <CallUsScreen go={go} />}
          {screen === "new-password" && <NewPasswordScreen go={go} />}
          {screen === "success"      && <SuccessScreen go={go} />}
        </div>
      </div>
      <PhoneButton />
      <FlowMap current={screen} go={go} />
    </div>
  );
}
