import { COMPONENT_CIRCLE_READ_MORE, SECTION_ABOUT_US } from "lib/constants";
import { GAClick, GATimeSpent } from "lib/ga";
import { useEffect, useRef, useState } from "react";

interface AboutUsData {
  text: string;
}

export const AboutUs = ({ data, custom, ...props }: SectionProps<AboutUsData>) => {
  // Props
  const { text } = data;
  const { gtm_reference } = custom;

  // Reference
  const sectionRef = useRef(null);
  const readMoreRef = useRef(null);

  // State
  const [isReadMore, setReadMore] = useState(false);

  useEffect(() => {
    const observer = GATimeSpent(gtm_reference, SECTION_ABOUT_US);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  const handleReadMore = () => {
    GAClick(gtm_reference, SECTION_ABOUT_US, COMPONENT_CIRCLE_READ_MORE);
    setReadMore(!isReadMore);
  };

  return (
    <section ref={sectionRef} id="read-more-hero" className="bg-white">
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="max-w-[878px] flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[20px]">
            <p
              ref={readMoreRef}
              className={`text-huge ${isReadMore ? "" : "line-clamp-[8]"}`}
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            ></p>
            <div className="flex justify-left cursor-pointer">
              <div
                onClick={handleReadMore}
                className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full bg-[#19191B] backdrop-blur-[2px] border border-[#F4F5F6] hover:opacity-70"
              >
                {!isReadMore ? "Read more" : "Read less"}
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] flex-wrap">
            <div className="flex flex-col gap-[max(2px,_min(calc(100vw_*_(8_/_1440)),_8px))] pl-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] border-l border-[#0000000F]">
              <p className="text-[max(20px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                3 Million
              </p>
              <span className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">
                Users
              </span>
            </div>
            <div className="flex flex-col gap-[max(2px,_min(calc(100vw_*_(8_/_1440)),_8px))] pl-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] border-l border-[#0000000F]">
              <p className="text-[max(20px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                6 K
              </p>
              <span className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">
                Clients
              </span>
            </div>
            <div className="flex flex-col gap-[max(2px,_min(calc(100vw_*_(8_/_1440)),_8px))] pl-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] border-l border-[#0000000F]">
              <p className="text-[max(20px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                15+
              </p>
              <span className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">
                Country
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
