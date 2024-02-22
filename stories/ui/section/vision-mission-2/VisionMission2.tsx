import React, { useEffect, useRef } from "react";

import { GATimeSpent } from "lib/ga";
import { SECTION_VISION_MISSION2 } from "lib/constants";

type VisionMission2Data = {
  vision: {
    title: string;
    description: string;
    image_url: string;
  };
  mission: {
    title: string;
    description: string;
    image_url: string;
  };
}

export const VisionMission2 = ({
  data,
  custom,
}: SectionProps<VisionMission2Data>) => {
  // Props
  const { vision, mission } = data;
  const { gtm_reference } = custom;

  // Reference
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = GATimeSpent(gtm_reference, SECTION_VISION_MISSION2);

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
    <section ref={sectionRef} className="bg-white">
      <div className="max-w-[1440px] mx-auto p-[0_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="grid grid-cols-2 gap-[20px] max-lg:grid-cols-1">
          <div className="bg-[#000000] p-[max(18px,_min(calc(100vw_*_(20_/_1440)),_20px))] rounded-[12px] text-white min-h-[max(446px,_min(calc(100vw_*_(475_/_1440)),_475px))] flex flex-col justify-between">
            <div className="flex flex-col gap-[max(28px,_min(calc(100vw_*_(32_/_1440)),_32px))]">
              <span className="text-[max(20px,_min(calc(100vw_*_(24_/_1440)),_24px))] font-medium leading-[112%] -tracking-[.24px]">
                Vision
              </span>
              <p className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                {vision?.title}
              </p>
            </div>
            <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] leading-[132%] -tracking-[.16px]">
              {vision?.description}
            </p>
          </div>
          <div className="bg-[#365EFF] p-[max(18px,_min(calc(100vw_*_(20_/_1440)),_20px))] rounded-[12px] text-white min-h-[max(446px,_min(calc(100vw_*_(475_/_1440)),_475px))] flex flex-col justify-between">
            <div className="flex flex-col gap-[max(28px,_min(calc(100vw_*_(32_/_1440)),_32px))]">
              <span className="text-[max(20px,_min(calc(100vw_*_(24_/_1440)),_24px))] font-medium leading-[112%] -tracking-[.24px]">
                Mission
              </span>
              <p className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                {mission?.title}
              </p>
            </div>
            <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] leading-[132%] -tracking-[.16px]">
              {mission?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
