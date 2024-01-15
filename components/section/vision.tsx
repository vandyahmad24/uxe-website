import Container from '../base/container'
import Image from 'next/image'
import Link from 'next/link'

export default function Vision() {
  return (
    <div className="bg-[#E6EDFF]">
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden bg-[url('/image/vision-background.png')] bg-contain bg-no-repeat bg-right">
        <div className="grid grid-cols-2 gap-[60px] max-lg:grid-cols-1">
          <div>
            <img src="/image/vision-image-01.png" alt="VISION IMAGE" className="rounded-[12px]" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">Vision</p>
              <h2 className="text-[32px] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-xl">Building Tomorrow&apos;s Safeguard: Innovative Smart City Security Solutions</h2>
              <div className="flex flex-col gap-[6px] mt-[34px]">
                <div className="w-[6px] h-[64px] bg-[#3760FF] rounded-full"></div>
                <div className="w-[6px] h-[24px] bg-[#0000003D] rounded-full"></div>
              </div>
            </div>

            <p className="text-[20px] text-[#19191B] leading-[132%] -tracking-[.2px]">At UXE, our goal is to make unwavering impact on individuals and companies to feel secure through our products and services. Our mission is to build a futuristic entity that holds in its mission the sense of security,</p>
          </div>
        </div>
      </div>
    </div>
  )
}
