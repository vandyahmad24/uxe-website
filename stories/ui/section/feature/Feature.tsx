import { useEffect, useRef } from "react";
import { GATimeSpent } from "lib/ga";
import { SECTION_OUR_VALUE } from "lib/constants";
import { TitleMedium } from "@/ui/title/title-medium/TitleMedium";
import { TitleXSmall } from "@/ui/title/title-xsmall/TitleXSmall";
import { TextLarge } from "@/ui/text/text-large/TextLarge";

export const Feature = ({ custom, ...props }: SectionProps<null>) => {
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
    <section ref={sectionRef} id="section-feature" className="bg-white" {...props}>
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(100_/_1440)),_100px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="grid grid-cols-3 gap-[48px_32px] max-xl:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col col-span-3 max-xl:col-span-2 max-md:col-span-1 justify-center p-[0px_14px_max(14px,_min(calc(100vw_*_(40_/_1440)),_40px))_14px] bg-[url('/image/featured-background.png')] bg-no-repeat">
            <TitleMedium el="h2" label="We live by our Values" cls="text-[#19191B] font-medium mt-[10px] max-w-[36rem]" />
          </div>

          {/* Hardcoded content for Cloud & Platform */}
          <div className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
            <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]">
              <img src="/image/icon/cloude_platform.svg" alt="Cloud & Platform" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <TitleXSmall el="h3" label="Cloud & Platform" cls="text-[#19191B]" />
              <TextLarge label="Cloud computing refers to the delivery of computing services, including storage, processing power, applications." cls="text-[#19191B]" />
            </div>
          </div>

          {/* Hardcoded content for Surveillance System */}
          <div className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
            <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]">
              <img src="/image/icon/surveillance_system.svg" alt="Surveillance System" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <TitleXSmall el="h3" label="Surveillance System" cls="text-[#19191B]" />
              <TextLarge label="A surveillance system is a network of cameras, sensors, and other technologies strategically deployed to monitor." cls="text-[#19191B]" />
            </div>
          </div>

          {/* Hardcoded content for Cloud & Platform (again) */}
          <div className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
            <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]">
              <img src="/image/icon/cloude_platform_2.svg" alt="Cloud & Platform" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <TitleXSmall el="h3" label="Cloud & Platform" cls="text-[#19191B]" />
              <TextLarge label="Cloud computing refers to the delivery of computing services, including storage, processing power, applications." cls="text-[#19191B]" />
            </div>
          </div>

          {/* Hardcoded content for Artificial Intelligence */}
          <div className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
            <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]">
              <img src="/image/icon/ai.svg" alt="Artificial Intelligence" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <TitleXSmall el="h3" label="Artificial Intelligence" cls="text-[#19191B]" />
              <TextLarge label="Artificial Intelligence (AI) is a branch of computer science that focuses on creating systems capable of performing tasks." cls="text-[#19191B]" />
            </div>
          </div>

          {/* Hardcoded content for Tracking Solution */}
          <div className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
            <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]">
              <img src="/image/icon/gps.svg" alt="Tracking Solution" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <TitleXSmall el="h3" label="Tracking Solution" cls="text-[#19191B]" />
              <TextLarge label="A tracking solution is a technology-based system designed to monitor and trace the location, movement." cls="text-[#19191B]" />
            </div>
          </div>

          {/* Hardcoded content for Big Data */}
          <div className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
            <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]">
              <img src="/image/icon/big_data.svg" alt="Big Data" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <TitleXSmall el="h3" label="Big Data" cls="text-[#19191B]" />
              <TextLarge label="Big data refers to the massive and complex volume of structured and unstructured data generated by various sources." cls="text-[#19191B]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
