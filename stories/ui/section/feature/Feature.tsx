import { useEffect, useRef } from "react";
import { GATimeSpent } from "lib/ga";
import { SECTION_OUR_VALUE } from "lib/constants";
import { TextLarge } from "@/ui/text/text-large/TextLarge";
import { TextSmall } from "@/ui/text/text-small/TextSmall";
import { TitleMedium } from "@/ui/title/title-medium/TitleMedium";
import { TitleXSmall } from "@/ui/title/title-xsmall/TitleXSmall";

type FeatureData = {
  icon: string;
  title: string;
  description: string;
};

export const Feature = ({ data, custom, ...props }: SectionProps<FeatureData[]>) => {
  // Props
  const { gtm_reference } = custom;

  // Reference
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = GATimeSpent(gtm_reference, SECTION_OUR_VALUE);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <section className="bg-white" {...props}>
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(100_/_1440)),_100px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="grid grid-cols-3 gap-[48px_32px] max-xl:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col col-span-3 max-xl:col-span-2 max-md:col-span-1 justify-center p-[0px_14px_max(14px,_min(calc(100vw_*_(40_/_1440)),_40px))_14px] bg-[url('/image/featured-background.png')] bg-no-repeat">
            <TextSmall label="OUR VALUES" cls="text-[#19191B80] uppercase font-medium !tracking-[.96px]" />
            <TitleMedium el="h2" label="At UXE, our commitment to living out our values is at the heart of everything we do" cls="text-[#19191B] font-medium mt-[10px] max-w-[36rem]" />
          </div>
          {data.map(({icon, title, description}, index) => (
            <div key={index} className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
              <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]" dangerouslySetInnerHTML={{
                __html: icon.toString().replace(/\\/g, ''),
              }}>
              </div>
              <div className="flex flex-col gap-[8px]">
                <TitleXSmall el="h3" label={title} cls="text-[#19191B]" />
                <TextLarge label={description} cls="text-[#19191B]" />
              </div>
            </div>  
          ))}
        </div>
      </div>
    </section>
  );
};
