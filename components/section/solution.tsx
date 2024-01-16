import cn from 'classnames';
import Container from '../base/container'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Solution() {
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const [isActiveSolution, setIsActiveSolution] = useState(false);

  const handleActiveSolution = (value) => {
    setIsActiveSolution(value);
  };

  useEffect(() => {
    const handleSlide1Click = () => handleActiveSolution(true);
    const handleSlide2Click = () => handleActiveSolution(false);

    if (slide1Ref.current) {
      slide1Ref.current.addEventListener('mouseenter', handleSlide1Click);
    }
    if (slide2Ref.current) {
      slide2Ref.current.addEventListener('mouseenter', handleSlide2Click);
    }

    return () => {
      if (slide1Ref.current) {
        slide1Ref.current.removeEventListener('mouseenter', handleSlide1Click);
      }
      if (slide2Ref.current) {
        slide2Ref.current.removeEventListener('mouseenter', handleSlide2Click);
      }
    };
  }, [slide1Ref, slide2Ref, handleActiveSolution]);

  return (
    <div className="bg-[#F4F5F6]">
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(64_/_1440)),_64px))_max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden bg-[url('/image/solution-background.png')] bg-cover">
        <div className="flex flex-col gap-[45px]">
          <div className="flex flex-col items-center text-center">
            <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">Solution</p>
            <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-[34rem]">Security Solutions for Connected Future</h2>
          </div>
          <div className="transition-all flex max-lg:grid max-lg:grid-cols-1 gap-[20px]">
            {/* <div className="grid grid-cols-[calc(70%_-_10px)_calc(30%_-_10px)] max-lg:grid-cols-1 gap-[20px]"> */}
            <div ref={slide1Ref} className={cn("group/solution1 transition-all ease-[cubic-bezier(.22,.68,0,1.71)] duration-700 max-lg:w-full rounded-[12px] bg-[#19191B] h-[475px] flex flex-col justify-between overflow-hidden", {
              "w-full is-active": isActiveSolution,
              "w-1/2 is-not-active": !isActiveSolution
            })}>
              <div className="flex flex-col items-start gap-[12px] p-[24px]">
                <div className="group-[.is-not-active]/solution1:bg-[#BEBEBE40] group-[.is-not-active]/solution1:text-white group-[.is-active]/solution1:bg-white group-[.is-active]/solution1:text-[#19191B] rounded-full p-[8px]" style={{
                  backdropFilter: "blur(1.5833333730697632px)"
                }}>
                  <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                    <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" fill="currentColor"></path>
                  </svg>
                </div>
                <p className="text-[max(20px,_min(calc(100vw_*_(24_/_1440)),_24px))] text-white font-medium leading-[112%] -tracking-[.24px]">For Goverments</p>
              </div>
              <div className="flex flex-col items-start gap-[20px] bg-black group-[.is-not-active]/solution1:bg-[#19191B] p-[24px] group-[.is-active]/solution1:bg-[url('/image/solution-goverment.png')] bg-contain bg-right bg-no-repeat">
                <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white opacity-75 leading-[132%] -tracking-[.16px] max-w-md">All-in-One Security Platform: Centralized Surveillance, Real-Time Analysis, and Remote Access for Unparalleled Protection</p>
                <a href="#" className="block text-[14px] font-medium leading-[132%] -tracking-[.14px] p-[10px_16px] rounded-full group-[.is-not-active]/solution1:bg-[#BEBEBE40] group-[.is-not-active]/solution1:text-white group-[.is-active]/solution1:bg-white group-[.is-active]/solution1:text-[#19191B]" style={{
                  border: "1px solid rgba(207, 207, 207, 0.25)",
                  backdropFilter: "blur(2px)"
                }}>Get in touch</a>
              </div>
            </div>
            <div ref={slide2Ref} className={cn("group/solution2 transition-all ease-[cubic-bezier(.22,.68,0,1.71)] duration-700 max-lg:w-full rounded-[12px] bg-[#365EFF] h-[475px] flex flex-col justify-between overflow-hidden", {
              "w-full is-active": !isActiveSolution,
              "w-1/2 is-not-active": isActiveSolution
            })}>
              <div className="flex flex-col items-start gap-[12px] p-[24px]">
                <div className="group-[.is-not-active]/solution2:bg-[#BEBEBE40] group-[.is-not-active]/solution2:text-white group-[.is-active]/solution2:bg-white group-[.is-active]/solution2:text-[#19191B] rounded-full p-[8px]" style={{
                  backdropFilter: "blur(1.5833333730697632px)"
                }}>
                  <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                    <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" fill="currentColor"></path>
                  </svg>
                </div>
                <p className="text-[max(20px,_min(calc(100vw_*_(24_/_1440)),_24px))] text-white font-medium leading-[112%] -tracking-[.24px]">For Business</p>
              </div>
              <div className="flex flex-col items-start gap-[20px] bg-[#365EFF] group-[.is-not-active]/solution2:bg-[#365EFF] p-[24px] group-[.is-active]/solution2:bg-[url('/image/solution-goverment.png')] bg-contain bg-right bg-no-repeat">
                <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white opacity-75 leading-[132%] -tracking-[.16px] max-w-md">Centralized Surveillance, Real-Time Analysis, and Remote Access for Unparalleled Protection</p>
                <a href="#" className="block text-[14px] font-medium leading-[132%] -tracking-[.14px] p-[10px_16px] rounded-full group-[.is-not-active]/solution2:bg-[#BEBEBE40] group-[.is-not-active]/solution2:text-white group-[.is-active]/solution2:bg-white group-[.is-active]/solution2:text-[#19191B]" style={{
                  border: "1px solid rgba(207, 207, 207, 0.25)",
                  backdropFilter: "blur(2px)"
                }}>Get in touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
