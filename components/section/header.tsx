import Container from '../base/container'

export default function Header({ backgroundImageUrl }) {
  return (
    <div className="bg-black">
      <Container>
        <div className="relative flex flex-col justify-end min-h-[max(400px,_min(calc(100vw_*_(400_/_1440)),_400px))]">
          <div className="relative z-10 flex flex-col gap-[max(75px,_min(calc(100vw_*_(100_/_1440)),_100px))] p-[max(32px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))]">
            <div className="flex items-end justify-between gap-[32px] max-xl:flex-col max-xl:items-start">
              <div className="flex flex-col items-start gap-[10px] max-w-lg">
                <span className='text-[12px] text-white font-medium leading-[112%] -tracking-[.96px] uppercase'>OUR PRODUCT</span>
                <h2 className="text-[max(24px,_min(calc(100vw_*_(48_/_1440)),_48px))] max-md:text-[max(24px,_min(calc(100vw_*_(80_/_1440)),_80px))] font-medium leading-[120%] -tracking-[1.28px] bg-linear-4 !bg-clip-text text-transparent">Discover Innovation in Smart Security Products</h2>
              </div>
              <p className="text-[16px] font-medium leading-[132%] -tracking-[.16px] max-w-sm bg-linear-5 !bg-clip-text text-transparent">Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments</p>
            </div>
          </div>
          <div className="absolute top-0 w-full min-h-[400px] bg-cover bg-no-repeat" style={{
            backgroundImage: `url(${backgroundImageUrl})`
          }}></div>
          <div className="absolute top-0 w-full min-h-[400px] bg-linear-7"></div>
        </div>
      </Container>
    </div>
  )
}
