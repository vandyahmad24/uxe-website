import { useEffect, useRef, useState } from "react";

export default function Vision() {
  const [isActive, setIsActive] = useState(0);
  const cScroll = useRef(null);
  const cPadding = useRef(null);
  const cContent = useRef(null);
  const cFooter = useRef(null);
  const cImage = useRef(null);

  const visionHandle = () => {
    const section = cScroll.current;
    const sectionRect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionTop = sectionRect.top;

    const containerPaddingValue = parseInt(getComputedStyle(cPadding.current).paddingTop.replace('px', ''))

    const container = cImage.current.querySelectorAll('img');
    const containerContent = cContent.current.childNodes;
    const containerFooter = cFooter.current.childNodes[1].childNodes;

    console.log(containerFooter)

    if (sectionTop < 0) {
      container.forEach((e, i) => {
        if (sectionTop > ((windowHeight * i) - ((containerPaddingValue * 2) * i)) * -1) {
          e.style.transform = `translateY(${sectionTop}px)`
        }

        if (sectionTop < ((windowHeight * i) - ((containerPaddingValue * 2) * i)) * -1) {
          e.style.transform = `translateY(${((windowHeight * i) - ((containerPaddingValue * 2) * i)) * -1}px)`
          setIsActive(i)
        }
      })
    }

    containerContent.forEach((element, ei) => {
      if (ei == isActive) {
        element.style.display = "block"
        element.style.opacity = 1
        containerFooter[ei].style.width = "max(32px, min(calc(100vw * (64 / 1440)), 64px))"
        containerFooter[ei].style.background = "#3760ff"
      } else {
        element.style.display = "none"
        element.style.opacity = 0
        containerFooter[ei].style.width = "max(12px, min(calc(100vw * (24 / 1440)), 24px))"
        containerFooter[ei].style.background = "#0000003D"
      }
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", visionHandle);
    return () => {
      window.removeEventListener("scroll", visionHandle);
    };
  }, [visionHandle]);

  return (
    <div ref={cScroll} className="bg-[#E6EDFF] h-[200svh]">
      <div ref={cPadding} className="h-[100svh] sticky top-0 max-w-[1440px] mx-auto p-[max(100px,_min(calc(100vw_*_(120_/_1440)),_120px))_max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden bg-[url('/image/vision-background.png')] bg-contain bg-no-repeat bg-right">
          <div className="h-full grid grid-cols-2 gap-[max(32px,_min(calc(100vw_*_(60_/_1440)),_60px))] max-lg:flex max-lg:flex-col">
            <div ref={cImage} className="max-lg:hidden overflow-hidden rounded-[12px]">
              <img
                src="/image/vision-image-01.png"
                alt="VISION IMAGE"
                className="h-full w-full object-cover"
              />
              <img
                src="/image/vision-image-02.png"
                alt="VISION IMAGE"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between max-lg:min-h-[80vh]">
              <div ref={cContent}>
                <div>
                  <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">
                    Vision
                  </p>
                  <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-[34rem]">
                    Make unwavering impact on individuals and companies to feel secure through our products and services.
                  </h2>
                </div>
                <div className="hidden opacity-0">
                  <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">
                  Mission
                  </p>
                  <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-[34rem]">
                  Build a futuristic entity that holds in its mission the sense of security, well-being of people by adopting cutting edge technologies, Trackers, Artificial Intelligence and Robotics.
                  </h2>
                </div>
              </div>

              <div ref={cFooter} className="max-lg:flex flex-col gap-[32px]">
                <p className="text-[max(14px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] leading-[132%] -tracking-[.2px]">
                Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments
                </p>
                <div className="gap-[6px] mt-[34px] flex">
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
