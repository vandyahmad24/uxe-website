import React from "react";

import { TextMedium } from "../../text/text-medium/TextMedium";
import { TitleHuge } from "../../title/title-huge/TitleHuge";
import { TextLarge } from "../../text/text-large/TextLarge";
import { LabelLarge } from "../../component/label-large/LabelLarge";

type ClientData = {
  alt: string;
  logo_url: string;
};

type SchemaData = {
  clients: ClientData[];
  hero_url: string;
};

interface HeroProps {
  label: string;
  data: SchemaData;
  style?: any;
}

export const Hero = ({
  label,
  data: { clients, hero_url },
  ...props
}: HeroProps) => {
  return (
    <section className="nhero" {...props}>
      <div className="nhero-wrapper">
        <div className="nhero-container">
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
                <TextMedium label="Trusted by hundreds of organizations" />
                <div className="nclient-item">
                  {clients.map(({ logo_url, alt }, index) => (
                    <img key={index} src={logo_url} alt={alt} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="nhero-video-overlay"></div> */}
          <video
            className="nhero-video"
            src={hero_url}
            autoPlay
            loop
            playsInline
            muted
          ></video>
          <a href="#read-more-hero" className="absolute w-full bottom-[40px] flex flex-col items-center justify-center gap-[16px] animate-[bounce_1.5s_ease-in-out_infinite] cursor-pointer">
            <TextMedium label={"Read More"} cls="text-white" />
            <div className="rounded-full border border-white p-[8px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M19.207 12.707L17.793 11.293L13.5 15.586V6H11.5V15.586L7.20697 11.293L5.79297 12.707L12.5 19.414L19.207 12.707Z" fill="white"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
