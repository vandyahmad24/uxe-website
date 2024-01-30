import React from "react";
import { TextMedium } from "../../text/text-medium/TextMedium";

type LogoData = {
  url: string;
  description: string;
}

interface ListLogoProps {
  label: string;
  data: LogoData[];
}

export const ListLogo = ({
  label,
  data,
  ...props
}: ListLogoProps) => {
  return (
    <div className="list-logo" { ...props }>
      <TextMedium
        cls="list-logo--desc"
        label="Trusted by hundreds of organizations"
      />
      <div className="list-logo--wrapper">
        {
          data.map(({ url, description }, index) => (
            <img
              key={index}
              src={url}
              alt={description}
            />
          ))
        }
      </div>
    </div>
  );
};
