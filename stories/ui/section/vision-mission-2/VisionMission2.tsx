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
};

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
      <div className="max-w-[1440px] mx-auto p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-[#000000] p-6 md:p-8 rounded-[12px] text-white min-h-[475px] flex flex-col justify-between relative shadow-lg">
            <div>
              <span className="text-[16px] font-medium leading-[20px]">Vision</span>
            </div>

            <div className="flex flex-col gap-6 justify-center flex-1">
              <p className="text-[32px] font-normal leading-[40px] text-left">
                AI UXE, our goal is to make unwavering impact on individuals and companies to feel secure through our products and services.
              </p>
            </div>


            <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#333333] grid-pattern opacity-10"></div>
          </div>

          {/* Mission Card */}
          <div className="bg-[#365EFF] p-6 md:p-8 rounded-[12px] text-white min-h-[475px] flex flex-col justify-between relative shadow-lg">
            <div>
              <span className="text-[16px] font-medium leading-[20px]">Mission</span>
            </div>

            <div className="flex flex-col gap-6 justify-center flex-1">
              <p className="text-[32px] font-normal leading-[40px] text-left">
                Our mission is to build a futuristic entity that holds in its mission the sense of security, well-being of people by adopting cutting edge technologies, Trackers, Artificial Intelligence and Robotics.
              </p>
            </div>

            <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#333333] grid-pattern opacity-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
