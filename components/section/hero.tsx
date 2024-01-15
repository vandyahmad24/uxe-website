import Container from '../base/container'
import LabelHero from '../ui/label-hero'
import TitleClip64 from '../typography/clip/title-clip-64'
import ParagraphClip16 from '../typography/clip/paragraph-clip-16'
import Paragraph14 from '../typography/paragraph-14'

export default function Hero({ client, backgroundVideo }) {
  return (
    <div className="bg-black">
      <Container>
        <div className="relative flex flex-col justify-end min-h-[max(686px,_min(calc(100vw_*_(824_/_1440)),_824px))]">
          <div className="relative z-10 flex flex-col gap-[max(75px,_min(calc(100vw_*_(100_/_1440)),_100px))] px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] bg-linear-3">
            <div className="flex items-end justify-between gap-[32px] max-xl:flex-col max-xl:items-start">
              <div className="flex flex-col items-start gap-[10px] max-w-lg">
                <LabelHero text={"Fairness & Equality"} />
                <TitleClip64 text={"Transformative Smart City Security Solutions"} />
              </div>
              <ParagraphClip16 text={"Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments"} />
            </div>
            <div>
              <div className="w-full h-[.5px] bg-[#ffffff4d]"></div>
              <div className="flex items-center justify-between gap-[12px] py-[28px] max-xl:flex-col max-xl:items-start">
                <Paragraph14 text={"Trusted by hundreds of organizations"} />
                <div className="flex flex-wrap gap-[12px_32px]">
                  {client.map(({name, url}) => (
                    <img src={url} alt={name} />
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
