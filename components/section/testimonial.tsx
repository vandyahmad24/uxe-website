import Slider from "react-slick";
import Rating from "../ui/rating";
import { useEffect, useRef, useState } from "react";

export default function Testimonial({ data }) {
  const testimonialTextRef = useRef(null);
  const { items, show } = data;
  const [slides, setSlides] = useState(items.slice(0, show))

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(max-width: 768px)');
    if (mediaQueryList.matches) {
      setSlides(items)
    } else {
      setSlides(items.slice(0, show))
    }
  })

  const settings = {
    slidesToShow: 3,
    speed: 30000,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
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
        breakpoint: 768,
        settings: "unslick"
      },
    ],
  };

  const handleShowMore = () => {
    testimonialTextRef.current.dataset.active = testimonialTextRef.current.dataset.active == "0" ? "1" : "0";
    if (testimonialTextRef.current.dataset.active == "1") {
      setSlides(items)
      testimonialTextRef.current.textContent = "See less testimonial"
    } else {
      setSlides(items.slice(0, show))
      testimonialTextRef.current.textContent = "See more testimonial"
    }
  }

  return (
    <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(64_/_1440)),_64px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col items-start text-left">
              <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">TESTIMONIAL</p>
              <h2 className="text-[max(16px,_min(calc(100vw_*_(24_/_1440)),_24px))] text-[#19191B] font-medium leading-[112%] -tracking-[.24px] mt-[10px] max-w-xl">What people are saying</h2>
            </div>
            <Slider {...settings} className="flex gap-[20px] max-lg:gap-[48px] border-x border-[#0000000F] max-lg:border-none max-lg:flex-col">
              {slides.map((cp, index) => (
                <div
                  key={index}
                  className="p-[16px_24px_24px_24px] max-lg:p-[0_24px] border-l border-[#0000000F] !flex flex-col items-start justify-between gap-[40px] min-h-[max(168px,_min(calc(100vw_*_(298_/_1440)),_298px))]">
                  <div className="flex flex-col gap-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))]">
                    <div className="flex gap-[5px]">
                      <Rating rating={cp.rating} />
                    </div>
                    <p
                      className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] leading-[132%] -tracking-[.16px]">
                      {cp.review}</p>
                  </div>
                  <div className="flex items-center justify-between gap-[12px] w-full">
                    <div className="flex items-center justify-center gap-[12px]">
                      <div
                        className="w-[32px] h-[32px] bg-black rounded-full bg-cover"
                        style={{ backgroundImage: `url(${cp.userPhoto})` }}></div>
                      <div className="flex flex-col gap-[4px]">
                        <p
                          className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] font-medium leading-[132%] -tracking-[.16px]">
                          {cp.userName}</p>
                        <p
                          className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] text-[#19191B] leading-[132%] -tracking-[.14px]">
                          {cp.userRole}</p>
                      </div>
                    </div>
                    <img src={cp.userCompanyLogo} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="hidden justify-center max-lg:flex">
              <button data-active="0" ref={testimonialTextRef} onClick={handleShowMore} className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full bg-[#19191B] backdrop-blur-[2px] border border-[#F4F5F6] hover:opacity-70">See more testimonial</button>
            </div>
          </div>
        </div>
      </div>
  )
}
