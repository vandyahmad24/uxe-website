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
        <Container size="xlarge" cls="nhero-container">
          <div className="slider-container">
            <Slider {...settings}>
              <img className="nhero-image" src={hero_url} alt="Hero Image" style={{ height: "100%"}} />
              <img className="nhero-image" src={hero_url} alt="Hero Image" style={{ height: "100%"}} />
              <img className="nhero-image" src={hero_url} alt="Hero Image" style={{ height: "100%"}} />
            </Slider>
          </div>
        </Container>
      </div>
    </section>
  );
};



const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <g clip-path="url(#clip0_151_15816)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4137 25.4147C31.7886 25.0396 31.9993 24.531 31.9993 24.0007C31.9993 23.4704 31.7886 22.9617 31.4137 22.5867L20.0997 11.2727C19.9152 11.0817 19.6945 10.9293 19.4505 10.8245C19.2065 10.7197 18.9441 10.6645 18.6785 10.6622C18.4129 10.6599 18.1496 10.7105 17.9038 10.811C17.658 10.9116 17.4347 11.0601 17.2469 11.2479C17.0591 11.4357 16.9106 11.659 16.8101 11.9048C16.7095 12.1506 16.6589 12.4139 16.6612 12.6795C16.6635 12.945 16.7187 13.2075 16.8235 13.4515C16.9283 13.6955 17.0807 13.9162 17.2717 14.1007L27.1717 24.0007L17.2717 33.9007C16.9074 34.2779 16.7058 34.7831 16.7103 35.3075C16.7149 35.8319 16.9252 36.3335 17.2961 36.7043C17.6669 37.0751 18.1685 37.2855 18.6929 37.29C19.2173 37.2946 19.7225 37.093 20.0997 36.7287L31.4137 25.4147Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_151_15816">
            <rect width="48" height="48" fill="white" transform="matrix(-1 0 0 1 48 0)"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

// Custom Previous Arrow
const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <g clip-path="url(#clip0_151_15812)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5865 25.4147C16.2116 25.0396 16.001 24.531 16.001 24.0007C16.001 23.4704 16.2116 22.9617 16.5865 22.5867L27.9005 11.2727C28.085 11.0817 28.3057 10.9293 28.5497 10.8245C28.7937 10.7197 29.0562 10.6645 29.3217 10.6622C29.5873 10.6599 29.8507 10.7105 30.0965 10.811C30.3422 10.9116 30.5656 11.0601 30.7533 11.2479C30.9411 11.4357 31.0896 11.659 31.1902 11.9048C31.2908 12.1506 31.3414 12.4139 31.339 12.6795C31.3367 12.945 31.2816 13.2075 31.1768 13.4515C31.0719 13.6955 30.9196 13.9162 30.7285 14.1007L20.8285 24.0007L30.7285 33.9007C31.0929 34.2779 31.2945 34.7831 31.2899 35.3075C31.2853 35.8319 31.075 36.3335 30.7042 36.7043C30.3334 37.0751 29.8317 37.2855 29.3074 37.29C28.783 37.2946 28.2778 37.093 27.9005 36.7287L16.5865 25.4147Z" fill="#727070"/>
        </g>
        <defs>
          <clipPath id="clip0_151_15812">
            <rect width="48" height="48" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};