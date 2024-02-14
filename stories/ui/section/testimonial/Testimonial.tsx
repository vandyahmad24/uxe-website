import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { Rating } from "../../component/rating/Rating";

type SchemaSetting = {
  show: number;
};

type SchemaData = {
  rating: number;
  review_text: string;
  reviewer_company_image: string;
  reviewer_image: string;
  reviewer_name: string;
  reviewer_role: string;
};

interface TestimonialProps {
  data: SchemaData[];
  settings: SchemaSetting;
  style?: any;
}

export const Testimonial = ({ data, settings, ...props }: TestimonialProps) => {
  const { show } = settings;
  const testimonialTextRef = useRef(null);
  const [slides, setSlides] = useState(data.slice(0, show));

  const handleShowMore = () => {
    const isActive = testimonialTextRef.current.dataset.active === "1";
    testimonialTextRef.current.dataset.active = isActive ? "0" : "1";

    if (isActive) {
      setSlides(data.slice(0, show));
      testimonialTextRef.current.textContent = "See more testimonials";
    } else {
      setSlides(data);
      testimonialTextRef.current.textContent = "See less testimonials";
    }
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 600px)");

    const handleMediaChange = (event) => {
      if (testimonialTextRef.current) {
        if (event.matches) {
          setSlides(data);
          testimonialTextRef.current.textContent = "See less testimonials";
        } else {
          setSlides(data.slice(0, show));
          testimonialTextRef.current.textContent = "See more testimonials";
        }
      }
    };

    // Set up initial state
    if (slides.length > 0) {
      handleMediaChange(mediaQueryList);
    }

    // Add listener for changes
    mediaQueryList.addEventListener("change", handleMediaChange);

    // Clean up listener on component unmount
    return () => {
      mediaQueryList.removeEventListener("change", handleMediaChange);
    };
  }, [data, testimonialTextRef, show]);

  const slide_setting = {
    slidesToShow: 3,
    speed: 30000,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToScroll: 3,
    draggable: false,
    pauseOnHover: false,
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 20000,
        },
      },
      {
        breakpoint: 767,
        settings: "unslick",
      },
    ],
  };

  return (
    <>
      {slides.length > 0 && (
        <section className="bg-white" {...props}>
          <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(64_/_1440)),_64px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
            <div className="flex flex-col gap-[48px]">
              <div className="flex flex-col items-start text-left">
                <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">
                  TESTIMONIAL
                </p>
                <h2 className="text-[max(16px,_min(calc(100vw_*_(24_/_1440)),_24px))] text-[#19191B] font-medium leading-[112%] -tracking-[.24px] mt-[10px] max-w-xl">
                  What people are saying
                </h2>
              </div>
              <Slider
                {...slide_setting}
                className="flex gap-[20px] max-lg:gap-[48px] border-x border-[#0000000F] max-lg:border-none max-lg:flex-col"
              >
                {slides.map((cp, index) => (
                  <div
                    key={index}
                    className="p-[16px_24px_24px_24px] max-lg:p-[0_24px] border-l border-[#0000000F] !flex flex-col items-start justify-between gap-[40px] min-h-[max(168px,_min(calc(100vw_*_(298_/_1440)),_298px))]"
                  >
                    <div className="flex flex-col gap-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))]">
                      <div className="flex gap-[5px]">
                        <Rating rating={cp.rating} />
                      </div>
                      <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] leading-[132%] -tracking-[.16px] line-clamp-4">
                        {cp.review_text}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-[12px] w-full">
                      <div className="flex items-center justify-center gap-[12px]">
                        <div
                          className="w-[32px] h-[32px] bg-black rounded-full bg-cover"
                          style={{
                            backgroundImage: `url(${cp.reviewer_image})`,
                          }}
                        ></div>
                        <div className="flex flex-col gap-[4px]">
                          <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] font-medium leading-[132%] -tracking-[.16px]">
                            {cp.reviewer_name}
                          </p>
                          <p className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] text-[#19191B] leading-[132%] -tracking-[.14px]">
                            {cp.reviewer_role}
                          </p>
                        </div>
                      </div>
                      <img src={cp.reviewer_company_image} alt="" />
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="flex justify-center md:hidden">
                <button
                  data-active="0"
                  ref={testimonialTextRef}
                  onClick={handleShowMore}
                  className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full bg-[#19191B] backdrop-blur-[2px] border border-[#F4F5F6] hover:opacity-70"
                >
                  See more testimonial
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
