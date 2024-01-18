import Container from '../base/container'
import LabelHero from '../ui/label-hero'

export default function Hero({ client, backgroundVideo }) {
  return (
    <div className="bg-black">
      <Container>
        <div className="relative flex flex-col justify-end min-h-[max(686px,_min(calc(100vw_*_(824_/_1440)),_824px))]">
          <div className="relative z-10 flex flex-col gap-[max(75px,_min(calc(100vw_*_(100_/_1440)),_100px))] px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] bg-linear-3">
            <div className="flex items-end justify-between gap-[32px] max-xl:flex-col max-xl:items-start">
              <div className="flex flex-col items-start gap-[10px] max-w-lg">
                <LabelHero text={"Fairness & Equality"} />
                <h2 className="text-[max(32px,_min(calc(100vw_*_(64_/_1440)),_64px))] max-md:text-[max(32px,_min(calc(100vw_*_(100_/_1440)),_100px))] font-medium leading-[120%] -tracking-[1.28px] bg-linear-4 !bg-clip-text text-transparent">Transformative Smart City Security Solutions</h2>
              </div>
              <p className="text-[16px] font-medium leading-[132%] -tracking-[.16px] max-w-sm bg-linear-5 !bg-clip-text text-transparent">Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments</p>
            </div>
            <div>
              <div className="w-full h-[.5px] bg-[#ffffff4d] max-md:hidden"></div>
              <div className="flex items-center justify-between gap-[12px] py-[28px] max-xl:flex-col max-xl:items-start">
                <p className="text-[max(10px,_min(calc(100vw_*_(14_/_1440)),_14px))] max-md:text-[#B1AFAF] text-white leading-[132%] -tracking-[.14px]">Trusted by hundreds of organizations</p>
                <div className="flex flex-wrap max-lg:justify-center gap-[12px_32px]">
                  {client.map(({name, url}, index) => (
                    <img className='max-sm:grow' key={index} src={url} alt={name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <video className="absolute top-0 w-full min-h-[824px] object-cover" src={backgroundVideo} autoPlay loop playsInline muted></video>
        </div>
      </Container>
    </div>
  )
}
