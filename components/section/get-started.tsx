import Container from '../base/container'
import Image from 'next/image'
import Link from 'next/link'

export default function GetStarted() {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[max(10px,_min(calc(100vw_*_(20_/_1440)),_20px))] overflow-hidden">
        <div className="bg-[#19191B] rounded-[12px] p-[max(92px,_min(calc(100vw_*_(110_/_1440)),_110px))_12px] flex flex-col items-center gap-[max(32px,_min(calc(100vw_*_(48_/_1440)),_48px))] text-center bg-[url('/image/get-started-background.png')] bg-cover bg-no-repeat bg-center">
          <div className="bg-[#313131] p-[max(6px,_min(calc(100vw_*_(10_/_1440)),_10px))] rounded-full flex">
            <div className="bg-[#071952] h-[max(22px,_min(calc(100vw_*_(48_/_1440)),_48px))] w-[max(22px,_min(calc(100vw_*_(48_/_1440)),_48px))] rounded-full border border-white"></div>
            <div className="bg-[#071952] h-[max(22px,_min(calc(100vw_*_(48_/_1440)),_48px))] w-[max(22px,_min(calc(100vw_*_(48_/_1440)),_48px))] rounded-full border border-white -ml-[max(8px,_min(calc(100vw_*_(24_/_1440)),_24px))]"></div>
            <div className="bg-[#071952] h-[max(22px,_min(calc(100vw_*_(48_/_1440)),_48px))] w-[max(22px,_min(calc(100vw_*_(48_/_1440)),_48px))] rounded-full border border-white -ml-[max(8px,_min(calc(100vw_*_(24_/_1440)),_24px))]"></div>
            <div className="bg-[#071952] h-[max(22px,_min(calc(100vw_*_(48_/_1440)),_48px))] w-[max(22px,_min(calc(100vw_*_(48_/_1440)),_48px))] rounded-full border border-white -ml-[max(8px,_min(calc(100vw_*_(24_/_1440)),_24px))]"></div>
          </div>
          <div className="flex flex-col gap-[20px] items-center">
            <h2 className="text-[max(32px,_min(calc(100vw_*_(64_/_1440)),_64px))] font-medium leading-[120%] -tracking-[1.28px]" style={{
              background: "linear-gradient(123deg, #FFF 27.05%, rgba(255, 255, 255, 0.00) 123.2%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Get started with UXE</h2>
            <a href="#" className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full" style={{
              border: "1px solid rgba(207, 207, 207, 0.25)",
              background: "rgba(190, 190, 190, 0.25)",
              backdropFilter: "blur(2px)"
            }}>Get in touch</a>
          </div>
        </div>
      </div>
    </div>
  )
}
