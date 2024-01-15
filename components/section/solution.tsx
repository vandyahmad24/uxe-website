import Container from '../base/container'
import Image from 'next/image'
import Link from 'next/link'

export default function Solution() {
  return (
    <div className="bg-[#F4F5F6]">
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(64_/_1440)),_64px))_max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden bg-[url('/image/solution-background.png')] bg-cover">
        <div className="flex flex-col gap-[45px]">
          <div className="flex flex-col items-center text-center">
            <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">Solution</p>
            <h2 className="text-[32px] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-xl">Security Solutions for Connected Future</h2>
          </div>
          <div className="transition-all group flex max-lg:grid max-lg:grid-cols-1 gap-[20px]">
            {/* <div className="grid grid-cols-[calc(70%_-_10px)_calc(30%_-_10px)] max-lg:grid-cols-1 gap-[20px]"> */}
            <div className="transition-all w-full group-hover:w-1/2 rounded-[12px] bg-[#365EFF] h-[475px] flex flex-col justify-between overflow-hidden bg-[url('/image/solution-image-01.png')] bg-no-repeat bg-cover">
              <div className="flex flex-col items-start gap-[12px] p-[24px]">
                <div className="bg-white text-[#19191B] rounded-full p-[8px]" style={{
                  backdropFilter: "blur(1.5833333730697632px)"
                }}>
                  <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                    <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" fill="currentColor"></path>
                  </svg>
                </div>
                <p className="text-[24px] text-white font-medium leading-[112%] -tracking-[.24px]">For Goverments</p>
              </div>
              <div className="flex flex-col items-start gap-[20px] bg-black p-[24px] bg-[url('/image/solution-goverment.png')] bg-contain bg-right bg-no-repeat">
                <p className="text-[16px] text-white opacity-75 leading-[132%] -tracking-[.16px] max-w-md">All-in-One Security Platform: Centralized Surveillance, Real-Time Analysis, and Remote Access for Unparalleled Protection</p>
                <a href="#" className="block text-[14px] text-[#19191B] font-medium leading-[132%] -tracking-[.14px] p-[10px_16px] rounded-full bg-white" style={{
                  border: "1px solid rgba(207, 207, 207, 0.25)",
                  backdropFilter: "blur(2px)"
                }}>Get in touch</a>
              </div>
            </div>
            <div className="transition-all w-1/2 group-hover:w-full rounded-[12px] bg-[#365EFF] h-[475px] flex flex-col justify-between overflow-hidden bg-[url('/image/solution-business.png')] bg-contain bg-right bg-no-repeat">
              <div className="flex flex-col items-start gap-[12px] p-[24px]">
                <div className="bg-[#BEBEBE40] rounded-full p-[8px] text-white" style={{
                  backdropFilter: "blur(1.5833333730697632px)"
                }}>
                  <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                    <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" fill="currentColor"></path>
                  </svg>
                </div>
                <p className="text-[24px] text-white font-medium leading-[112%] -tracking-[.24px]">For Business</p>
              </div>
              <div className="flex flex-col items-start gap-[20px] p-[24px]">
                <p className="text-[16px] text-white leading-[132%] -tracking-[.16px] max-w-md">Centralized Surveillance, Real-Time Analysis, and Remote Access for Unparalleled Protection</p>
                <a href="#" className="block text-[14px] text-white font-medium leading-[132%] -tracking-[.14px] p-[10px_16px] rounded-full bg-white" style={{
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
