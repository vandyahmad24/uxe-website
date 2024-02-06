import React from "react";

import { TitleHuge } from "../../title/title-huge/TitleHuge";
import Link from "next/link";

type LogoData = {
  url: string;
  description: string;
};

interface GetStartedProps {
  label: string;
  data?: LogoData[];
  style?: any;
}

export const GetStarted = ({ label, ...props }: GetStartedProps) => {
  return (
    <section className="bg-white" { ...props }>
      <div className="max-w-[1440px] mx-auto px-[max(10px,_min(calc(100vw_*_(20_/_1440)),_20px))] overflow-hidden">
        <div className="get-started">
          <div className="get-started-profile">
            <img src="/image/person-image-01.png" title="Person" />
            <img src="/image/person-image-02.png" title="Person" />
            <img src="/image/person-image-03.png" title="Person" />
            <img src="/image/person-image-04.png" title="Person" />
          </div>
          <div className="flex flex-col gap-[20px] items-center">
            <TitleHuge
              el="h2"
              label={label}
              decoration
            />
            <Link href="#" className="get-started-button">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
