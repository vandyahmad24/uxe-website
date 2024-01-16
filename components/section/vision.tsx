export default function Vision() {
  return (
    <div className="bg-[#E6EDFF]">
      <div className=" max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden bg-[url('/image/vision-background.png')] bg-contain bg-no-repeat bg-right">
          <div className="grid grid-cols-2 gap-[max(32px,_min(calc(100vw_*_(60_/_1440)),_60px))] max-sm:flex max-sm:flex-col">
            <div className="max-sm:hidden">
              <img
                src="/image/vision-image-01.png"
                alt="VISION IMAGE"
                className="rounded-[12px]"
              />
            </div>
            <div className="flex flex-col justify-between max-sm:min-h-[80vh]">
              <div>
                <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">
                  Vision
                </p>
                <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-[34rem]">
                  Building Tomorrow&apos;s Safeguard: Innovative Smart City
                  Security Solutions
                </h2>
                <div className="flex flex-col gap-[6px] mt-[34px] max-sm:hidden">
                  <div className="w-[max(4px,_min(calc(100vw_*_(6_/_1440)),_6px))] h-[max(32px,_min(calc(100vw_*_(64_/_1440)),_64px))] bg-[#3760FF] rounded-full"></div>
                  <div className="w-[max(4px,_min(calc(100vw_*_(6_/_1440)),_6px))] h-[max(12px,_min(calc(100vw_*_(24_/_1440)),_24px))] bg-[#0000003D] rounded-full"></div>
                </div>
              </div>

              <div className="max-sm:flex flex-col gap-[32px]">
                <p className="text-[max(14px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] leading-[132%] -tracking-[.2px]">
                  At UXE, our goal is to make unwavering impact on individuals
                  and companies to feel secure through our products and
                  services. Our mission is to build a futuristic entity that
                  holds in its mission the sense of security,
                </p>
                <div className="hidden gap-[6px] mt-[34px] max-sm:flex">
                  <div className="h-[max(4px,_min(calc(100vw_*_(6_/_1440)),_6px))] w-[max(32px,_min(calc(100vw_*_(64_/_1440)),_64px))] bg-[#3760FF] rounded-full"></div>
                  <div className="h-[max(4px,_min(calc(100vw_*_(6_/_1440)),_6px))] w-[max(12px,_min(calc(100vw_*_(24_/_1440)),_24px))] bg-[#0000003D] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
