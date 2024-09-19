import React, { useEffect, useRef } from "react";
import { GAClick, GATimeSpent } from "lib/ga";
import { SECTION_HERO } from "lib/constants";
import { ButtonReadMore } from "@/ui/component/button/ButtonReadMore";
import { Container } from "@/ui/base/container/Container";
import Slider from "react-slick";

type HeroData = {
  title: string;
  clients: {
    alt: string;
    logo_url: string;
  }[];
  hero_url: string;
};


export const HeroImage = ({ data, custom }: SectionProps<HeroData>) => {
  const { hero_url } = data;
  const { gtm_reference } = custom;
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
      <div className="custom-dot">
        <div className="indicator-bar" />
      </div>
    ),
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
        <ul style={{ display: "flex", margin: "0", padding: "0" }}> {dots} </ul>
      </div>
    ),
  };
  

  return (
    <section ref={sectionRef} id="section-hero" className="nhero">
      <div>
        <div className="slider-container">
          <Container size="xlarge" cls="nhero-container">
            <Slider {...settings}>
              <img className="nhero-image" src={hero_url} alt="Hero Image" />
              <img className="nhero-image" src={hero_url} alt="Hero Image" />
              <img className="nhero-image" src={hero_url} alt="Hero Image" />
            </Slider>
            
          </Container>
        </div>
      </div>
    </section>
  );
};



const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      
    </div>
  );
};

// Custom Previous Arrow
const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
        
    </div>
  );
};