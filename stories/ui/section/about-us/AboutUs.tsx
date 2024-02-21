import { Container } from "@/ui/base/container/Container";
import { Button } from "@/ui/component/button/Button";
import { TextMedium } from "@/ui/text/text-medium/TextMedium";
import { TitleMedium } from "@/ui/title/title-medium/TitleMedium";
import { COMPONENT_CIRCLE_READ_MORE, SECTION_ABOUT_US } from "lib/constants";
import { GAClick, GATimeSpent } from "lib/ga";
import { useEffect, useRef, useState } from "react";

interface AboutUsData {
  text: string;
}

export const AboutUs = ({ data, custom }: SectionProps<AboutUsData>) => {
  // Props
  const { text } = data;
  const { gtm_reference } = custom;

  const statistic = [
    {
      name: "Users",
      value: "3 Million",
    },
    {
      name: "Clients",
      value: "6 K",
    },
    {
      name: "Country",
      value: "15+",
    },
  ];

  // Reference
  const sectionRef = useRef(null);
  const readMoreRef = useRef(null);

  // State
  const [isReadMore, setReadMore] = useState(false);

  useEffect(() => {
    const observer = GATimeSpent(gtm_reference, SECTION_ABOUT_US);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  const handleReadMore = () => {
    GAClick(gtm_reference, SECTION_ABOUT_US, COMPONENT_CIRCLE_READ_MORE);
    setReadMore(!isReadMore);
  };

  return (
    <section ref={sectionRef} id="section-about-us" className="bg-white">
      <div className="px-large">
        <Container size="medium">
          <div className="py-medium max-w-[54.875rem] flex flex-col gap-[60px]">
            <div className="flex flex-col gap-[20px]">
              <p
                ref={readMoreRef}
                className={`text-huge ${isReadMore ? "" : "line-clamp-[8]"}`}
                dangerouslySetInnerHTML={{
                  __html: text,
                }}
              ></p>
              <div className="flex justify-left">
                <Button
                  label={!isReadMore ? "Read more" : "Read less"}
                  onClick={handleReadMore}
                />
              </div>
            </div>
            <div className="flex justify-between gap-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] flex-wrap">
              {statistic.map(({ name, value }, id) => (
                <div key={id} className="flex flex-col gap-[max(2px,_min(calc(100vw_*_(8_/_1440)),_8px))] pl-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] border-l border-[#0000000F]">
                  <TitleMedium label={value} />
                  <TextMedium label={name} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
