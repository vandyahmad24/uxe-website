import Container from '../base/container'
import Image from 'next/image'
import Link from 'next/link'

export default function Product() {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(190_/_1440)),_190px))_48px_max(20px,_min(calc(100vw_*_(190_/_1440)),_190px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col items-center text-center">
            <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">Products</p>
            <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-[34rem]">Discover Innovation in <br /> Smart Security Products</h2>
          </div>
          <div className="grid grid-cols-3 gap-[20px] max-xl:grid-cols-2 max-md:grid-cols-1">
            <div className="flex flex-col gap-[20px]">
              <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                <div className="absolute inset-0 w-full h-full">
                  <img src="/image/product-01.png" alt="PRODUCT IMAGE" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">Thermal Camera</h3>
                <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]">The Elara FC-Series O</p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                <div className="absolute inset-0 w-full h-full">
                  <img src="/image/product-02.png" alt="PRODUCT IMAGE" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">Augment Reality</h3>
                <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]">The Elara FC-Series O</p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                <div className="absolute inset-0 w-full h-full">
                  <img src="/image/product-03.png" alt="PRODUCT IMAGE" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">Video Guard</h3>
                <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]">The Elara FC-Series O</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="#" className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full bg-[#19191B] hover:opacity-70" style={{
              border: "1px solid rgba(207, 207, 207, 0.25)",
              backdropFilter: "blur(2px)"
            }}>See All Product</a>
          </div>
        </div>
      </div>
    </div>
  )
}
