import React, { useEffect, useRef } from "react";

import { TextMedium } from "../../text/text-medium/TextMedium";
import { TitleHuge } from "../../title/title-huge/TitleHuge";
import { TextLarge } from "../../text/text-large/TextLarge";
import { LabelLarge } from "../../component/label-large/LabelLarge";
import { sendGTMEvent } from "@next/third-parties/google";
import { GAClick, GATimeSpent } from "lib/ga";
import { SECTION_HERO } from "lib/constants";
import { ButtonReadMore } from "@/ui/component/button/ButtonReadMore";

type HeroData = {
  title: string;
  // clients: {
  //   alt: string;
  //   logo_url: string;
  // }[];
  hero_url: string;
};

export const Hero = ({ data, custom, ...props }: SectionProps<HeroData>) => {
  // Props
  const { hero_url } = data;
  const { gtm_reference } = custom;

  // Reference
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = GATimeSpent(gtm_reference, SECTION_HERO);
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
    <section className="nhero" {...props}>
      <div className="nhero-wrapper">
        <div className="nhero-container">
          {/*
          <div className="nhero-content bg-none invisible">
            <div className="nhero-content--wrapper">
              <div className="nhero-title-wrapper">
                <LabelLarge label="Fairness & Equality" />
                <TitleHuge
                  label="Multiple services to ensure the safety"
                  decoration
                />
              </div>
              <TextLarge
                cls="hero-description"
                label=""
                decoration
              />
            </div>
            <div>
              <div className="nhero-line"></div>
              <div className="nclient">
                <TextMedium label={title} />
                <div className="nclient-item">
                  {clients.map(({ logo_url, alt }, index) => (
                    <img key={index} src={logo_url} alt={alt} />
                  ))}
                </div>
              </div>
            </div>
          </div> 
          */}
          {/* <div className="nhero-video-overlay"></div> */}
          <video
            className="nhero-video"
            src={hero_url}
            autoPlay
            loop
            playsInline
            muted
          ></video>
          <ButtonReadMore
            label="Read More"
            onClick={() => GAClick(gtm_reference, "hero", "read-more")}
          />
        </div>
      </div>
    </section>
  );
};
