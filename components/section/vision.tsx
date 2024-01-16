import { useEffect, useRef, useState } from "react";

export default function Vision() {
  const visionRef = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const conatinerd = useRef(null);
  const contentVision = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const visionHandle = () => {
      const section = visionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the position of the section relative to the viewport
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      const progress = (sectionTop / (sectionRect.height - windowHeight)) * -100
      console.log(windowHeight - (parseInt(getComputedStyle(conatinerd.current).paddingTop.replace('px', '')) * 2))

      if (sectionTop < 0 && sectionTop > (windowHeight - (parseInt(getComputedStyle(conatinerd.current).paddingTop.replace('px', '')) * 2)) * -1) {
        image2.current.style.transform = `translateY(${sectionTop}px)`
      }
    }

    window.addEventListener("scroll", visionHandle);

    return () => {
      window.removeEventListener("scroll", visionHandle);
    };
  }, [visionRef, image2, contentVision]);

  return (
    <div ref={visionRef} className="bg-[#E6EDFF] h-[200svh]">
      <div ref={conatinerd} className="h-[100svh] sticky top-0 max-w-[1440px] mx-auto p-[max(100px,_min(calc(100vw_*_(120_/_1440)),_120px))_max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden bg-[url('/image/vision-background.png')] bg-contain bg-no-repeat bg-right">
          <div className="h-full grid grid-cols-2 gap-[max(32px,_min(calc(100vw_*_(60_/_1440)),_60px))] max-lg:flex max-lg:flex-col">
            <div className="max-lg:hidden overflow-hidden">
              <img
                ref={image1}
                src="/image/vision-image-01.png"
                alt="VISION IMAGE"
                className="rounded-[12px] h-full object-cover"
              />
              <img
                ref={image2}
                src="/image/vision-image-01.png"
                alt="VISION IMAGE"
                className="rounded-[12px] h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between max-lg:min-h-[80vh]">
              <div ref={contentVision}>
                <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">
                  Vision
                </p>
                <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-[34rem]">
                  Building Tomorrow&apos;s Safeguard: Innovative Smart City
                  Security Solutions
                </h2>
                <div className="flex flex-col gap-[6px] mt-[34px] max-lg:hidden">
                  <div className="w-[max(4px,_min(calc(100vw_*_(6_/_1440)),_6px))] h-[max(32px,_min(calc(100vw_*_(64_/_1440)),_64px))] bg-[#3760FF] rounded-full"></div>
                  <div className="w-[max(4px,_min(calc(100vw_*_(6_/_1440)),_6px))] h-[max(12px,_min(calc(100vw_*_(24_/_1440)),_24px))] bg-[#0000003D] rounded-full"></div>
                </div>
              </div>

              <div className="max-lg:flex flex-col gap-[32px]">
                <p className="text-[max(14px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] leading-[132%] -tracking-[.2px]">
                  At UXE, our goal is to make unwavering impact on individuals and
                  companies to feel secure through our products and services. Our
                  mission is to build a futuristic entity that holds in its
                  mission the sense of security,
                </p>
                <div className="hidden gap-[6px] mt-[34px] max-lg:flex">
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
