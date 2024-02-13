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
          <div className="nhero-content">
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
                label="Intelligent Security Beyond Cameras: Seamless Solutions for
                Government and Business Environments"
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
        </div>
      </div>
    </section>
  );
};
