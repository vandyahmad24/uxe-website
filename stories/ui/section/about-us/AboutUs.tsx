import { COMPONENT_CIRCLE_READ_MORE, SECTION_ABOUT_US } from "lib/constants";
import { GAClick, GATimeSpent } from "lib/ga";
import { useEffect, useRef, useState } from "react";

interface AboutUsProps {
  text: string;
}

export const AboutUs = ({ text, ...props }: AboutUsProps) => {
  const readMoreRef = useRef(null);
  const [isRead, setRead] = useState(false);

  // Google Tag Manager
  const [startTime, setStartTime] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = GATimeSpent({
      sectionName: SECTION_ABOUT_US,
      startTime,
      setStartTime
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef, startTime, setStartTime]);

  const handleReadMore = () => {
    GAClick(SECTION_ABOUT_US, COMPONENT_CIRCLE_READ_MORE)
    setRead(!isRead);
  };

  return (
    <section ref={sectionRef} id="read-more-hero" className="bg-white">
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="max-w-[878px] flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[20px]">
            <p
              ref={readMoreRef}
              className={`text-huge ${isRead ? "" : "line-clamp-[8]"}`}
              dangerouslySetInnerHTML={{
                __html: `
              Established in 2018, UXE Security Solutions proudly holds the
              position of being the premier smart business support and a
              reliable security provider in MENA region.
              <br />
              <br />
              Committed to delivering services of the highest professional
              quality, we distinguish ourselves by adopting a unique strategy
              grounded in Smart Cutting-edge, Innovative Technology.
              <br />
              <br />
              With a considerable client base exceeding 750 clients, we navigate
              a dynamic and culturally rich environment, embodying the core
              values of reliability and professionalism.
              <br />
              <br />
              At UXE, we specialize in offering comprehensive and tailored smart
              security solutions, designed to meet the diverse needs of various
              sectors and industries.
              <br />
              <br />
              Our ecosystem of products and services allows clients to address
              multiple security requirements within a singular, integrated
              framework.
              <br />
              <br />
              Having undergone significant diversification, we have emerged as a
              pioneer in smart city technologies, AI Solutions, Security
              services and audits.
              <br />
              <br />
              As a key player in these sectors, UXE has evolved into the
              foremost business support and tech company provider in the UAE.
              <br />
              <br />
              We proudly carry forward the legacy set by the leaders of the UAE,
              delivering top-notch security solutions finely tuned to the
              diverse needs of our clients.
              <br />
              <br />
              Across a wide spectrum of industries, we extend our security
              expertise to educational institutions, hospitality sector,
              financial institutions, warehouse and logistics centres, retail,
              shopping malls, transportation, residential communities, cultural
              heritage sites, and amusement parks.
              <br />
              <br />
              Our wide range of solutions underlines our commitment to meeting
              distinct security demands across various industries.
              `,
              }}
            ></p>
            <div className="flex justify-left cursor-pointer">
              <div
                onClick={handleReadMore}
                className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full bg-[#19191B] backdrop-blur-[2px] border border-[#F4F5F6] hover:opacity-70"
              >
                {!isRead ? "Read more" : "Read less"}
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
