import React, { ReactNode, useEffect, useRef } from "react";

import { Container } from "../../base/container/Container";
import { TextXSmall } from "../../text/text-xsmall/TextXSmall";
import { TextHuge } from "../../text/text-huge/TextHuge";
import { TextMedium } from "../../text/text-medium/TextMedium";
import { TextSmall } from "../../text/text-small/TextSmall";
import { GAClick, GATimeSpent } from "lib/ga";
import { SECTION_FOOTER } from "lib/constants";

type MenuData = {
  url: string;
  name: string;
};

type FooterData = {
  address: string,
  explore_menu: MenuData[];
  contact_menu: MenuData[];
  follow_us_menu: MenuData[];
}

export const Footer = ({ data, custom }: SectionProps<FooterData>) => {
  // Props
  const { gtm_reference } = custom;

  // Reference
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = GATimeSpent(gtm_reference, SECTION_FOOTER);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  const SCROLL_TO_TOP = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling behavior
    });
  };

  return (
    <section ref={sectionRef} className="nfooter">
      <div className="nfooter-padding">
        <Container>
          <div className="nfooter-wrapper">
            <div className="nfooter-widget">
              <div className="flex flex-col gap-[32px]">
                <TextXSmall label="Explore" cls="nfooter--title" />
                <div className="flex flex-wrap gap-[12px]">
                  {data.explore_menu.map(({ name, url}, index) => (
                    <div key={index} className="flex flex-wrap gap-[12px]">
                      <TextHuge
                        el="a"
                        href={url}
                        label={name}
                        hover
                        onClick={() => GAClick("link_clicked", gtm_reference, SECTION_FOOTER, "menu-explore")}
                      />
                      {(index < data.explore_menu.length - 1) && (
                        <TextHuge
                          label="/"
                          style={{color: "#D9D9D9"}}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[32px]">
                <TextXSmall label="Contact us" cls="nfooter--title" />
                <div className="flex flex-col gap-[4px]">
                  {data.contact_menu.map(({ name, url }, index) => (
                    <TextMedium
                      el="a"
                      href={url}
                      key={index}
                      label={name}
                      hover
                      onClick={() => GAClick("link_clicked", gtm_reference, SECTION_FOOTER, "menu-contact-us")}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[32px]">
                <TextXSmall label="Follow us" cls="nfooter--title" />
                <div className="flex flex-col gap-[4px]">
                  {data.follow_us_menu.map(({ name, url }, index) => (
                    <TextMedium
                      el="a"
                      href={url}
                      key={index}
                      label={name}
                      hover
                      onClick={() => GAClick("link_clicked", gtm_reference, SECTION_FOOTER, "menu-follow-us")}
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
                  {/* <TextSmall
                    el="a"
                    label={data.privacy.name}
                    href={data.privacy.url}
                    hover
                  /> */}
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
