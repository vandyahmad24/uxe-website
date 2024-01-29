import React from "react";

import { TitleHuge } from "../../title/title-huge/TitleHuge";

type LogoData = {
  url: string;
  description: string;
};

interface GetStartedProps {
  label: string;
  data?: LogoData[];
}

export const GetStarted = ({ label, ...props }: GetStartedProps) => {
  return (
    <div className="get-started" {...props}>
      <div className="get-started-profile">
        <img src="/image/person-image-01.png" title="Person" />
        <img src="/image/person-image-02.png" title="Person" />
        <img src="/image/person-image-03.png" title="Person" />
        <img src="/image/person-image-04.png" title="Person" />
      </div>
      <div className="flex flex-col gap-[20px] items-center">
        <TitleHuge
          el="h2"
          label="Get started with UXE"
          decoration
        />
        <a
          href="#"
          className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full hover:opacity-70"
          style={{
            border: "1px solid rgba(207, 207, 207, 0.25)",
            background: "rgba(190, 190, 190, 0.25)",
            backdropFilter: "blur(2px)",
          }}
        >
          {label}
        </a>
      </div>
    </div>
  );
};
