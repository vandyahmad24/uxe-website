import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { GATimeSpent } from "lib/ga";
import { SECTION_VISION_MISSION } from "lib/constants";
import { TextSmall } from "@/ui/text/text-small/TextSmall";
import { TitleMedium } from "@/ui/title/title-medium/TitleMedium";
import { TextHuge } from "@/ui/text/text-huge/TextHuge";

interface VisionMissionData {
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

export const VisionMission = ({ data, custom, ...props }: SectionProps<VisionMissionData>) => {
  // Props
  const { vision, mission } = data;
  const { gtm_reference } = custom;

  // Reference
  const sectionRef = useRef(null);
  const paddingRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);
  const imageRef = useRef(null);

  // State
  const [isActiveSection, setIsActiveSection] = useState(0);

  useEffect(() => {
    const observer = GATimeSpent(gtm_reference, SECTION_VISION_MISSION);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const visionHandle = () => {
      const section = sectionRef.current;
      if (!section) { return;}

      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = sectionRect.top;
  
      const containerPaddingValue = parseInt(
        getComputedStyle(paddingRef.current).paddingTop.replace("px", "")
      );
  
      const container = imageRef.current.querySelectorAll("img");
      const containerContent = contentRef.current.childNodes;
      const containerFooter = footerRef.current.childNodes[1].childNodes;
      const containerDescription = footerRef.current.childNodes[0]
  
      if (sectionTop < 0) {
        const navigationElm = window.document.querySelector("#navigation-container");
        if (navigationElm) {
          paddingRef.current.style.paddingTop = `calc(max(44px, min(calc(100vw * (80 / 1440)), 80px)) + ${navigationElm.clientHeight}px)`;
        }
  
        container.forEach((e, i) => {
          if (
            sectionTop >
            ((windowHeight * i - containerPaddingValue * 2 * i) * -1 - navigationElm.clientHeight)
          ) {
            e.style.transform = `translateY(${sectionTop}px)`;
          }
  
          if (
            sectionTop <
            ((windowHeight * i - containerPaddingValue * 2 * i) * -1 - navigationElm.clientHeight)
          ) {
            e.style.transform = `translateY(${
              ((windowHeight * i - containerPaddingValue * 2 * i) * -1 - navigationElm.clientHeight)
            }px)`;
            setIsActiveSection(i);
          }
        });
      } else {
        const navigationElm = window.document.querySelector("#navigation-container");
        if (navigationElm) {
          paddingRef.current.style.paddingTop = `max(44px, min(calc(100vw * (80 / 1440)), 80px))`;
        }
      }
  
      containerContent.forEach((element, ei) => {
        if (ei == isActiveSection) {
          element.style.opacity = 1;
          // element.style.display = "block"
          containerDescription.innerText = mission?.description
          containerFooter[ei].style.background = "#3760ff";
          containerFooter[ei].style.width =
            "max(32px, min(calc(100vw * (64 / 1440)), 64px))";
        } else {
          element.style.opacity = 0;
          // element.style.display = "none"
          containerDescription.innerText = vision?.description
          containerFooter[ei].style.background = "#0000003D";
          containerFooter[ei].style.width =
            "max(12px, min(calc(100vw * (24 / 1440)), 24px))";
        }
      });
    };

    window.addEventListener("scroll", visionHandle);
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", visionHandle);
    };
  }, [sectionRef, paddingRef, imageRef, contentRef, footerRef, isActiveSection]);

  return (
    <section ref={sectionRef} className="bg-[#E6EDFF] h-[200svh]" {...props}>
      <div
        ref={paddingRef}
        className="transition-all h-[100svh] sticky top-0 max-w-[1440px] mx-auto p-[max(44px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden bg-[url('/image/vision-background.png')] bg-contain bg-no-repeat bg-right-top"
      >
        <div className="h-full grid grid-cols-2 gap-[max(32px,_min(calc(100vw_*_(60_/_1440)),_60px))] max-lg:flex max-lg:flex-col">
          <div
            ref={imageRef}
            className="max-lg:hidden overflow-hidden rounded-[12px]"
          >
            <Image
              src={vision?.image_url}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
              alt={vision?.title}
              className="h-full w-full object-cover"
              width={620}
              height={710}
              priority
            />
            <Image
              src={mission?.image_url}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
              alt={mission?.title}
              className="h-full w-full object-cover"
              width={620}
              height={710}
              priority
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div ref={contentRef} className="relative">
              <div className="transition-all duration-700 absolute top-0 opacity-0">
                <TextSmall label="Vision" cls="text-[#19191B80] uppercase font-medium !tracking-[.96px]" />
                <TitleMedium el="h2" label={vision?.title} cls="text-[#19191B] mt-[10px]" />
              </div>
              <div className="transition-all duration-700 absolute top-0 opacity-0">
                <TextSmall label="Mission" cls="text-[#19191B80] uppercase font-medium !tracking-[.96px]" />
                <TitleMedium el="h2" label={mission?.title} cls="text-[#19191B] mt-[10px]" />
              </div>
            </div>

            <div ref={footerRef} className="max-lg:flex flex-col gap-[32px]">
              <TextHuge label={vision?.description} cls="text-[#19191B]" />
              <div className="gap-[6px] mt-[34px] max-lg:mt-0 flex">
                <div className="transition-all duration-700 h-[max(4px,_min(calc(100vw_*_(6_/_1440)),_6px))] w-[max(32px,_min(calc(100vw_*_(64_/_1440)),_64px))] bg-[#3760FF] rounded-full"></div>
                <div className="transition-all duration-700 h-[max(4px,_min(calc(100vw_*_(6_/_1440)),_6px))] w-[max(12px,_min(calc(100vw_*_(24_/_1440)),_24px))] bg-[#0000003D] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
