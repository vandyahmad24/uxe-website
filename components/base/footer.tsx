import Container from './container'

export default function Footer() {
  return (
    <div className="bg-[#071952]">
      <Container>
        <div className="p-[48px_max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))_0_max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))]">
        <div className="flex flex-col justify-between min-h-[450px] max-xl:gap-[64px]">
          <div className="flex justify-between max-xl:flex-col max-xl:gap-[64px]">
            <div className="flex flex-col gap-[32px]">
              <span className="text-[10px] text-[#828D91] font-medium leading-[140%] tracking-[.4px] uppercase">Explore</span>
              <div className="flex flex-wrap gap-[12px]">
                <p className="text-[20px] text-white leading-[132%] -tracking-[.2px]">Product</p>
                <p className="text-[20px] text-[#828D91] leading-[132%] -tracking-[.2px]">/</p>
                <p className="text-[20px] text-white leading-[132%] -tracking-[.2px]">Solution</p>
                <p className="text-[20px] text-[#828D91] leading-[132%] -tracking-[.2px]">/</p>
                <p className="text-[20px] text-white leading-[132%] -tracking-[.2px]">Company</p>
                <p className="text-[20px] text-[#828D91] leading-[132%] -tracking-[.2px]">/</p>
                <p className="text-[20px] text-white leading-[132%] -tracking-[.2px]">About us</p>
              </div>
            </div>
            <div className="flex flex-col gap-[32px]">
              <span className="text-[10px] text-[#828D91] font-medium leading-[140%] tracking-[.4px] uppercase">Contact us</span>
              <div className="flex flex-col gap-[4px]">
                <p className="text-[14px] text-white leading-[140%]">+1 891 989-11-91</p>
                <p className="text-[14px] text-white leading-[140%]">hello@uxe.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-[32px]">
              <span className="text-[10px] text-[#828D91] font-medium leading-[140%] tracking-[.4px] uppercase">Follow us</span>
              <div className="flex flex-col gap-[4px]">
                <p className="text-[14px] text-white leading-[140%]">Instagram</p>
                <p className="text-[14px] text-white leading-[140%]">Telegram</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[max(16px,_min(calc(100vw_*_(48_/_1440)),_48px))]">
            <div className="flex items-center justify-between">
              <p className="text-[14px] text-white leading-[132%] -tracking-[.14px]">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
              <button title="Back to Top">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 19L12 5M12 5L18 11M12 5L6 11" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div>
              <div style={{
                height: ".5px",
                background: "linear-gradient(270deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.29) 50.7%, rgba(255, 255, 255, 0.10) 103.78%)"
              }}></div>
              <div className="flex justify-between py-[16px]">
                <p className="text-[12px] text-white leading-[132%] opacity-80 -tracking-[.12px]">© 2023 — UXE</p>
                <p className="text-[12px] text-white leading-[132%] opacity-80 -tracking-[.12px]">Privacy</p>
                <p className="text-[12px] text-white leading-[132%] opacity-80 -tracking-[.12px]">All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  )
}
