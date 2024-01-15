import Container from '../base/container'
import Image from 'next/image'
import Link from 'next/link'

export default function News() {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col items-center text-center">
            <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">News & Blog</p>
            <h2 className="text-[24px] text-[#19191B] font-medium leading-[112%] -tracking-[.24px] mt-[10px] max-w-xl">Your Daily Dose of Tech News</h2>
          </div>
          <div className="grid grid-cols-3 gap-[32px] max-xl:grid-cols-2 max-md:grid-cols-1">
            <div className="rounded-[12px] border border-[#0000000F] overflow-hidden">
              <img src="/assets/blog-image-01.png" alt="BLOG IMAGE" className="max-h-[240px] w-full" />
              <div className="p-[24px] flex flex-col gap-[32px]">
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <span className="text-[14px] text-[#19191B80] font-medium leading-[132%] p-[4px_12px] border border-[#D9D9D9] rounded-full">Technology</span>
                  <h1 className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">Citywide IoT Integration Boosts Efficiency of Smart Security</h1>
                  <p className="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] opacity-50">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <a href="#" className="text-[16px] text-[#19191B] font-medium leading-[132%] -tracknig-[.16px]">Read post</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5.83325 14.1666L14.1666 5.83325M14.1666 5.83325H5.83325M14.1666 5.83325V14.1666" stroke="#19191B" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="rounded-[12px] border border-[#0000000F] overflow-hidden">
              <img src="/assets/blog-image-01.png" alt="BLOG IMAGE" className="max-h-[240px] w-full" />
              <div className="p-[24px] flex flex-col gap-[32px]">
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <span className="text-[14px] text-[#19191B80] font-medium leading-[132%] p-[4px_12px] border border-[#D9D9D9] rounded-full">Technology</span>
                  <h1 className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">Citywide IoT Integration Boosts Efficiency of Smart Security</h1>
                  <p className="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] opacity-50">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <a href="#" className="text-[16px] text-[#19191B] font-medium leading-[132%] -tracknig-[.16px]">Read post</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5.83325 14.1666L14.1666 5.83325M14.1666 5.83325H5.83325M14.1666 5.83325V14.1666" stroke="#19191B" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="rounded-[12px] border border-[#0000000F] overflow-hidden">
              <img src="/assets/blog-image-01.png" alt="BLOG IMAGE" className="max-h-[240px] w-full" />
              <div className="p-[24px] flex flex-col gap-[32px]">
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <span className="text-[14px] text-[#19191B80] font-medium leading-[132%] p-[4px_12px] border border-[#D9D9D9] rounded-full">Technology</span>
                  <h1 className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">Citywide IoT Integration Boosts Efficiency of Smart Security</h1>
                  <p className="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] opacity-50">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <a href="#" className="text-[16px] text-[#19191B] font-medium leading-[132%] -tracknig-[.16px]">Read post</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5.83325 14.1666L14.1666 5.83325M14.1666 5.83325H5.83325M14.1666 5.83325V14.1666" stroke="#19191B" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
