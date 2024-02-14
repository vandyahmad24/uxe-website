import React from "react";

import { TitleHuge } from "../../title/title-huge/TitleHuge";
import Link from "next/link";
import { TitleMedium } from "@/ui/title/title-medium/TitleMedium";
import { TextLarge } from "@/ui/text/text-large/TextLarge";

type LogoData = {
  url: string;
  description: string;
};

interface GetStartedProps {
  label: string;
  data?: LogoData[];
  template?: number;
  isPadding?: boolean;
  style?: any;
}

export const GetStarted = ({ label, template = 0, isPadding = false, ...props }: GetStartedProps) => {
  return (
    <section className="bg-white" {...props}>
      {template == 1 && (
        <div className={`get-started2-wrapper ${isPadding ? 'get-started2-wrapper--padding' : ''}`}>
          <div className="get-started2">
            <div className="flex gap-[20px] items-center justify-between w-full max-md:flex-col max-md:text-center">
              <div className="flex flex-col gap-[16px]">
                <TitleMedium el="h2" label={label} decoration />
                <TextLarge label="Join over 4,000+ startups already growing with UXE." cls="text-white" />
              </div>
              <Link href="/contact-us" className="get-started-button">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
      {template == 0 && (
        <div className="get-started-wrapper">
          <div className="get-started">
            <div className="get-started-profile">
              <img src="/image/person-image-01.png" title="Person" />
              <img src="/image/person-image-02.png" title="Person" />
              <img src="/image/person-image-03.png" title="Person" />
              <img src="/image/person-image-04.png" title="Person" />
            </div>
            <div className="flex flex-col gap-[20px] items-center">
              <TitleHuge el="h2" label={label} decoration />
              <Link href="/contact-us" className="get-started-button">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
