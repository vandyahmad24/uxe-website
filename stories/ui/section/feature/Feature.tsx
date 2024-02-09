import { TextSmall } from "@/ui/text/text-small/TextSmall";
import { TitleMedium } from "@/ui/title/title-medium/TitleMedium";

type SchemaData = {
  icon: string;
  title: string;
  description: string;
};

interface FeatureProps {
  data: SchemaData[];
  style?: any;
}

export const Feature = ({ data, ...props }: FeatureProps) => {
  return (
    <section className="bg-white" {...props}>
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(100_/_1440)),_100px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="grid grid-cols-3 gap-[48px_32px] max-xl:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col col-span-3 max-xl:col-span-2 max-md:col-span-1 justify-center p-[0px_14px_max(14px,_min(calc(100vw_*_(40_/_1440)),_40px))_14px] bg-[url('/image/featured-background.png')] bg-no-repeat">
            <TextSmall label="OUR VALUES" style={{color: "#19191B80", textTransform: "uppercase", fontWeight: 500}}/>
            <TitleMedium el="h2" label="Your Gateway to Safer Tomorrow" style={{maxWidth: '18rem'}} />
          </div>
          {data.map(({icon, title, description}, index) => (
            <div key={index} className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
              <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]" dangerouslySetInnerHTML={{
                __html: icon.toString().replace(/\\/g, ''),
              }}>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">{title}</h3>
                <p className="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] max-w-96">{description}</p>
              </div>
            </div>  
          ))}
        </div>
      </div>
    </section>
  );
};
