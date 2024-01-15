import { useEffect, useRef, useState } from "react";

export default function Vision() {
  const visionRef = useRef(null);
  const visionContainerRef = useRef(null);
  const [isVision, setIsVision] = useState(false);

  useEffect(() => {
    const visionHandle = () => {
      const section = visionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the position of the section relative to the viewport
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      const progress = (sectionTop / (sectionRect.height - windowHeight)) * -100

      console.log(sectionTop * -1)
      console.log(">")
      console.log(((sectionRect.height - windowHeight) - ((windowHeight - visionContainerRef.current.getBoundingClientRect().height) / 2)))
      console.log(sectionTop * -1 > ((sectionRect.height - windowHeight) - ((windowHeight - visionContainerRef.current.getBoundingClientRect().height) / 2)))
      // console.log((sectionRect.height - windowHeight) - ((windowHeight - visionContainerRef.current.getBoundingClientRect().height)))

      if (progress > 0 && progress <= 100) {
        if (sectionTop * -1 < ((windowHeight - visionContainerRef.current.getBoundingClientRect().height) / 2)) {
          visionContainerRef.current.style.transform= `translateY(${(sectionTop * -2)}px)`
        } else if (sectionTop * -1 > ((sectionRect.height - windowHeight) - ((windowHeight - visionContainerRef.current.getBoundingClientRect().height)))) {
          visionContainerRef.current.style.transform= `translateY(${(sectionTop * -1) + ((windowHeight - visionContainerRef.current.getBoundingClientRect().height))}px)`;
        }
        else {
          visionContainerRef.current.style.transform= `translateY(${(sectionTop * -1) + ((windowHeight - visionContainerRef.current.getBoundingClientRect().height) / 2)}px)`;
        }
      }

      // console.log((windowHeight - visionContainerRef.current.getBoundingClientRect().height))

      // if (progress > 200 || progress < 0) {
      //   visionContainerRef.current.style = null
      // }
    };

    window.addEventListener("scroll", visionHandle);

    return () => {
      window.removeEventListener("scroll", visionHandle);
    };
  }, [visionRef, visionContainerRef]);

  return (
    <div ref={visionRef} className="bg-[#E6EDFF] h-[300svh]">
      <div className="h-[100svh] relative">
        <div ref={visionContainerRef} className=" max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden bg-[url('/image/vision-background.png')] bg-contain bg-no-repeat bg-right">
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
    </div>
  );
}
