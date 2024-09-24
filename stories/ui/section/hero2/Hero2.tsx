import { SECTION_HERO2 } from "lib/constants";
import { GATimeSpent } from "lib/ga";
import React, { useEffect, useRef } from "react";

type Hero2Data = {
  title: string;
  subtitle: string;
  description: string;
  image_url: any;
 
};

export const Hero2 = ({ data, custom }: SectionProps<Hero2Data>) => {
  // Props
  const { title, subtitle,description, image_url } = data;
  
  const { gtm_reference } = custom;

  // Reference
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = GATimeSpent(gtm_reference, SECTION_HERO2);
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
    <section ref={sectionRef} className="bg-black">
      <div className="max-w-[1440px] mx-auto overflow-hidden relative">
        <div className="relative flex justify-between min-h-[400px] items-center">
          {/* Kiri: Subtitle 1 dan Title */}
          <div className="relative z-10 p-[max(32px,_min(calc(100vw_*_(80_/_1440)),_80px))] max-w-[50%] text-white">
            <span className="text-[12px] font-medium leading-[112%] -tracking-[.96px] uppercase">
              {subtitle}
            </span>
            <h2 className="text-[max(24px,_min(calc(100vw_*_(48_/_1440)),_48px))] font-medium leading-[120%] -tracking-[1.28px]">
              {title}
            </h2>
            <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">
              {description}
            </p>
          </div>

          {/* Background image */}
          <div
            className="absolute top-0 w-full h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${image_url})`,
            }}
          ></div>

          {/* Overlay effect */}
          <div className="absolute top-0 w-full h-full bg-black opacity-50"></div>
        </div>

        {/* Kanan bawah: Subtitle kedua */}
          <div className="absolute bottom-0 right-0 z-10 p-[max(32px,_min(calc(100vw_*_(80_/_1440)),_80px))] text-right text-white">
          
            <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">
              Intelligent Security Beyond Cameras: Seamless 
            </p>
            <p>
            Solutions for Governments and Business Environments
            </p>
          </div>
      </div>
    </section>
  );
};
