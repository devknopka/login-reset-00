import imgQbu35Dnw1D1 from "./22af63edc0ba5ca3e42bb3b9279a1bec7e0c68f6.png";

function Frame5() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[98.467px]">
          <div className="absolute left-[4.23px] rounded-[100px] size-[90px] top-[4.18px]" data-name="qbu35-dnw1d 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
              <img alt="" className="absolute left-[-7.88%] max-w-none size-[117.78%] top-[-11.24%]" src={imgQbu35Dnw1D1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-center justify-center leading-[22px] not-italic relative shrink-0 text-center text-white">
      <p className="font-['Futura_PT:Bold',sans-serif] relative shrink-0 text-[20px] w-[240px]">Готово</p>
      <p className="font-['Futura_PT:Regular',sans-serif] relative shrink-0 text-[18px] whitespace-nowrap">Добро пожаловать в Кнопку!</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0">
      <Frame5 />
      <Frame2 />
    </div>
  );
}

function Frame5Variant() {
  return (
    <div className="absolute bg-[#00a0eb] content-stretch flex h-[354px] items-center justify-center left-0 overflow-clip px-[32px] py-[38px] rounded-[25px] top-0 w-[336px]" data-name="Frame 5/Variant2">
      <Frame3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-y-1/2 absolute flex h-[354px] items-center justify-center left-0 top-[calc(50%-0.14px)] w-[336px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[354px] relative w-[336px]">
          <Frame5Variant />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex h-[40px] items-center justify-center px-[20px] relative rounded-[12px] shrink-0" data-name="Tab">
        <p className="[word-break:break-word] font-['Futura_PT:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2d2d2d] text-[18px] whitespace-nowrap">Телефон</p>
      </div>
      <div className="content-stretch flex h-[40px] items-center justify-center px-[20px] relative rounded-[12px] shrink-0" data-name="Tab">
        <p className="[word-break:break-word] font-['Futura_PT:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2d2d2d] text-[18px] whitespace-nowrap">Логин</p>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Field">
      <div aria-hidden className="absolute border border-[#00a0eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start pb-[7px] pt-[9px] px-[12px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Futura_PT:Regular',sans-serif] leading-[0] min-w-px not-italic relative text-[#2d2d2d] text-[18px]">
          <span className="leading-[22px]">+7 904 386 56 56</span>
          <span className="leading-[22px] text-[#00a0eb]">|</span>
        </p>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Wrapper">
      <div className="[word-break:break-word] flex flex-col font-['Futura_PT:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="leading-[22px]">Продолжить</p>
      </div>
    </div>
  );
}

function DesktopButton() {
  return (
    <button className="bg-[#00a0eb] cursor-pointer h-[55px] min-w-[180px] relative rounded-[12px] shrink-0 w-full" data-name="Desktop/Button">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[20px] py-[11px] relative size-full">
          <Wrapper />
        </div>
      </div>
    </button>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[272px]" data-name="Desktop/TextField">
        <Field />
      </div>
      <DesktopButton />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[271px] items-center left-0 top-0 w-[272px]">
      <Frame4 />
      <p className="[word-break:break-word] font-['Futura_PT:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center w-[min-content]">Введите номер телефона, привязанный к учетной записи.</p>
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-0 ml-[88px] mt-[20px] relative row-1 w-[24px]">
        <div className="absolute inset-[-1.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 3">
            <path d="M0 1.5H24" id="Vector 4" stroke="var(--stroke-0, #2D2D2D)" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-0 ml-[138px] mt-[20px] relative row-1 w-[24px]">
        <div className="absolute inset-[-1.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 3">
            <path d="M0 1.5H24" id="Vector 4" stroke="var(--stroke-0, #2D2D2D)" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['Futura_PT:Bold',sans-serif] leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#2d2d2d] text-[30px] text-center whitespace-nowrap">1</p>
      <p className="[word-break:break-word] col-1 font-['Futura_PT:Bold',sans-serif] leading-[normal] ml-[44px] mt-0 not-italic relative row-1 text-[#2d2d2d] text-[30px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-center left-[-278px] top-[calc(50%-0.13px)] w-[272px]">
      <p className="[word-break:break-word] font-['Futura_PT:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center w-[min-content] whitespace-pre-wrap">
        {`Введите код. `}
        <br aria-hidden />
        {`Мы отправили его на номер `}
        <br aria-hidden />
        +7 904 386 56 56
      </p>
      <Group />
      <p className="[word-break:break-word] font-['Futura_PT:Bold',sans-serif] h-[28.75px] leading-[22px] not-italic relative shrink-0 text-[#00a0eb] text-[18px] text-center w-[262.712px]">Отправить повторно</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-0 ml-[88px] mt-[20px] relative row-1 w-[24px]">
        <div className="absolute inset-[-1.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 3">
            <path d="M0 1.5H24" id="Vector 4" stroke="var(--stroke-0, #2D2D2D)" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-0 ml-[138px] mt-[20px] relative row-1 w-[24px]">
        <div className="absolute inset-[-1.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 3">
            <path d="M0 1.5H24" id="Vector 4" stroke="var(--stroke-0, #2D2D2D)" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['Futura_PT:Bold',sans-serif] leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#2d2d2d] text-[30px] text-center whitespace-nowrap">1</p>
      <p className="[word-break:break-word] col-1 font-['Futura_PT:Bold',sans-serif] leading-[normal] ml-[44px] mt-0 not-italic relative row-1 text-[#2d2d2d] text-[30px] text-center whitespace-nowrap">0</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-center left-1/2 top-[calc(50%+0.23px)] w-[272px]">
      <p className="[word-break:break-word] font-['Futura_PT:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-center w-[min-content] whitespace-pre-wrap">
        {`Введите код. `}
        <br aria-hidden />
        {`Мы отправили его на номер `}
        <br aria-hidden />
        +7 904 386 56 56
      </p>
      <Group1 />
      <p className="[word-break:break-word] font-['Futura_PT:Bold',sans-serif] h-[28.75px] leading-[22px] not-italic relative shrink-0 text-[#00a0eb] text-[18px] text-center w-[262.712px]">Отправить повторно</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-[#f7f6f4] h-[354px] left-0 overflow-clip rounded-[25px] top-0 w-[336px]" data-name="Component 2">
      <div className="absolute h-[273px] left-[-319px] overflow-clip top-[38px] w-[272px]">
        <Frame7 />
        <Frame6 />
      </div>
      <Frame1 />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="relative size-full">
      <Frame9 />
      <Component />
      <div className="absolute content-stretch flex flex-col items-center justify-center left-[20px] px-[8.416px] py-[6.078px] rounded-[18px] size-[36px] top-[17.86px]">
        <div className="[word-break:break-word] flex flex-col font-['KnopkaIcons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d2d2d] text-[18.701px] whitespace-nowrap">
          <p className="leading-[normal]">←</p>
        </div>
      </div>
    </div>
  );
}