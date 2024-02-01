import React, { ReactNode } from "react";

import { Container } from "../../base/container/Container";
import { TextXSmall } from "../../text/text-xsmall/TextXSmall";
import { TextHuge } from "../../text/text-huge/TextHuge";
import { TextMedium } from "../../text/text-medium/TextMedium";
import { TextSmall } from "../../text/text-small/TextSmall";

type MenuData = {
  url: string;
  title: string;
};

type SchemaData = {
  address: string,
  privacy: MenuData,
  menu: MenuData[];
  contact: MenuData[];
  social_media: MenuData[];
}

interface FooterProps {
  data: SchemaData;
}

export const Footer = ({ data, ...props }: FooterProps) => {
  const LIST_MENU : ReactNode[] = [];

  data.menu.forEach(({ title, url }, index) => {
    LIST_MENU.push((
      <TextHuge
        el="a"
        href={url}
        label={title}
        hover
      />
    ))

    if (index < data.menu.length - 1) {
      LIST_MENU.push((
        <TextHuge
          label="/"
          cls="text-[#D9D9D9]"
        />
      ))
    }
  })

  const SCROLL_TO_TOP = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling behavior
    });
  };

  return (
    <section className="nfooter" {...props}>
      <div className="nfooter-padding">
        <Container>
          <div className="nfooter-wrapper">
            <div className="nfooter-widget">
              <div className="flex flex-col gap-[32px]">
                <TextXSmall label="Explore" cls="nfooter--title" />
                <div className="flex flex-wrap gap-[12px]">
                  {LIST_MENU}
                </div>
              </div>
              <div className="flex flex-col gap-[32px]">
                <TextXSmall label="Contact us" cls="nfooter--title" />
                <div className="flex flex-col gap-[4px]">
                  {data.contact.map(({ title, url }, index) => (
                    <TextMedium
                      el="a"
                      href={url}
                      key={index}
                      label={title}
                      hover
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[32px]">
                <TextXSmall label="Follow us" cls="nfooter--title" />
                <div className="flex flex-col gap-[4px]">
                  {data.social_media.map(({ title, url }, index) => (
                    <TextMedium
                      el="a"
                      href={url}
                      key={index}
                      label={title}
                      hover
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="nfooter-bottom">
              <div className="flex items-center justify-between">
                <TextMedium label={data.address} />
                <button
                  className="animate-bounce"
                  title="Back to Top"
                  onClick={SCROLL_TO_TOP}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 19L12 5M12 5L18 11M12 5L6 11"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <div className="nfooter-line"></div>
                <div className="nfooter-credit">
                  <TextSmall label={`© ${new Date().getFullYear()} — UXE`} />
                  <TextSmall
                    el="a"
                    label={data.privacy.title}
                    href={data.privacy.url}
                    hover
                  />
                  <TextSmall label="All rights reserved" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
