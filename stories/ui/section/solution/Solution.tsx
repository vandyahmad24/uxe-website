import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";

type SchemaData = {
  title: string;
  description: string;
  image_url: string;
};

interface SolutionProps {
  data: SchemaData[];
  style?: any;
}

export const Solution = ({ data, ...props }: SolutionProps) => {
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const [isActiveSolution, setIsActiveSolution] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const SCROLL_TO_TOP = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling behavior
    });
  };

  const handleActiveSolution = (value) => {
    setIsActiveSolution(value);
  };

  const handleIsMobile = (value) => {
    setIsMobile(value);
  };

  useEffect(() => {
    const handleSlide1Click = () => handleActiveSolution(true);
    const handleSlide2Click = () => handleActiveSolution(false);

    if (window.innerWidth >= 1024) {
      if (slide1Ref.current) {
        slide1Ref.current.addEventListener('mouseenter', handleSlide1Click);
      }
      if (slide2Ref.current) {
        slide2Ref.current.addEventListener('mouseenter', handleSlide2Click);
      }
    } else {
      handleIsMobile(true)
    }

    return () => {
      if (window.innerWidth > 1024) {
        if (slide1Ref.current) {
          slide1Ref.current.removeEventListener('mouseenter', handleSlide1Click);
        }
        if (slide2Ref.current) {
          slide2Ref.current.removeEventListener('mouseenter', handleSlide2Click);
        }
      }
    };
  }, [slide1Ref, slide2Ref, handleActiveSolution, handleIsMobile]);

  return (
    <section id="section-solution" className="bg-[#F4F5F6]" {...props}>
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(64_/_1440)),_64px))_max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden bg-[url('/image/solution-background.png')] max-lg:bg-none bg-cover">
        <div className="flex flex-col gap-[45px]">
          <div className="flex flex-col items-center text-center">
            <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">Solution</p>
            <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-[34rem]">Security Solutions for Connected Future</h2>
          </div>
          <div className="transition-all flex max-lg:grid max-lg:grid-cols-1 gap-[20px]">
            {/* <div className="grid grid-cols-[calc(70%_-_10px)_calc(30%_-_10px)] max-lg:grid-cols-1 gap-[20px]"> */}
            <div
              ref={slide1Ref}
              className={cn("group/solution1 transition-all ease-[cubic-bezier(0.47,1.07,0.37,1.03)] duration-500 max-lg:w-full rounded-[12px] bg-[#19191B] h-[475px] flex flex-col justify-between overflow-hidden", {
              "w-full is-active": isActiveSolution || isMobile,
              "w-1/2 is-not-active": !isActiveSolution
              })}
              style={{
                ['--solution_1' as any]: `url(${data[0]?.image_url})`
              }}
            >
              <div className="flex flex-col items-start gap-[12px] p-[24px]">
                <a href="/contact-us" title="Get in touch" className="bg-[#BEBEBE40] text-white hover:text-[#19191B] hover:bg-white rounded-full p-[8px] backdrop-blur-[1.5833333730697632px]">
                  <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                    <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" fill="currentColor"></path>
                  </svg>
                </a>
                <p className="text-[max(20px,_min(calc(100vw_*_(24_/_1440)),_24px))] text-white font-medium leading-[112%] -tracking-[.24px]">{data[0]?.title}</p>
              </div>
              <div className="flex flex-col items-start gap-[20px] bg-black group-[.is-not-active]/solution1:bg-[#19191B] p-[24px] group-[.is-active]/solution1:bg-[url('/image/solution-goverment.png')] max-lg:!bg-none bg-contain bg-right bg-no-repeat">
                <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white opacity-75 leading-[132%] -tracking-[.16px] max-w-md">{data[0]?.description}</p>
                <a href="/contact-us" title="Get in touch" className="block text-[14px] font-medium leading-[132%] -tracking-[.14px] p-[10px_16px] rounded-full bg-[#BEBEBE40] text-white hover:bg-white hover:text-[#19191B] backdrop-blur-[2px] border border-[#cfcfcf40]">Get in touch</a>
              </div>
            </div>
            <div ref={slide2Ref} className={cn("group/solution2 transition-all ease-[cubic-bezier(0.47,1.07,0.37,1.03)] duration-500 max-lg:w-full rounded-[12px] bg-[#365EFF] h-[475px] flex flex-col justify-between overflow-hidden", {
              "w-full is-active": !isActiveSolution || isMobile,
              "w-1/2 is-not-active": isActiveSolution
            })}
            style={{
              ['--solution_2' as any]: `url(${data[1]?.image_url})`
            }}
            >
              <div className="flex flex-col items-start gap-[12px] p-[24px]">
                <a href="/contact-us" title="Get in touch" className="bg-[#BEBEBE40] text-white hover:text-[#19191B] hover:bg-white rounded-full p-[8px] backdrop-blur-[1.5833333730697632px]">
                  <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                    <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" fill="currentColor"></path>
                  </svg>
                </a>
                <p className="text-[max(20px,_min(calc(100vw_*_(24_/_1440)),_24px))] text-white font-medium leading-[112%] -tracking-[.24px]">{data[1]?.title}</p>
              </div>
              <div className="flex flex-col items-start gap-[20px] bg-[#365EFF] group-[.is-not-active]/solution2:bg-[#365EFF] p-[24px] group-[.is-active]/solution2:bg-[url('/image/solution-goverment.png')] max-lg:!bg-none bg-contain bg-right bg-no-repeat">
                <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white opacity-75 leading-[132%] -tracking-[.16px] max-w-md">{data[1]?.description}</p>
                <a href="/contact-us" title="Get in touch" className="block text-[14px] font-medium leading-[132%] -tracking-[.14px] p-[10px_16px] rounded-full bg-[#BEBEBE40] text-white hover:bg-white hover:text-[#19191B] backdrop-blur-[2px] border border-[#cfcfcf40]">Get in touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
