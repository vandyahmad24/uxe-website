import React from "react";

export const CEOMsgSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left side - Image */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              src="/image/ceo.png" // Placeholder for CEO image
              alt="CEO Image"
              className="rounded-[12px] shadow-lg w-full md:w-[350px] object-cover"
            />
            {/* Optional Overlay or Logo */}
            <div className="absolute top-4 left-4">
              <img
                src="/image/uxe_transparant.png" // Placeholder for UXE logo
                alt="UXE Logo"
                className="w-[60px] h-[20px]" // Adjust size as necessary
              />
            </div>
          </div>
        </div>

        {/* Right side - CEO message */}
        <div className="flex flex-col justify-between max-w-[600px]">
          <h3 className="text-[16px] font-medium text-[#19191B] mb-4">CEO message</h3>
          <div className="flex flex-col gap-6">
            {/* Quote */}
            <blockquote className="text-[#19191B] text-[24px] leading-[32px] font-normal italic">
              "As Dubai strives to be at the forefront of sustainability, this project complements Dubai’s ambitions for providing a sustainable lifestyle."
            </blockquote>

            {/* CEO Name & Title */}
            <p className="text-[16px] font-medium text-[#19191B]">
              Abdulla AlSuwaidi{" "}
              <span className="text-[14px] text-[#767676] font-normal">
                Co-founder & CEO of UXE
              </span>
            </p>

            {/* Read more button */}
            <div className="flex">
            <a
                href="#"
                className="inline-block px-6 py-3 text-[14px] font-medium text-white bg-[#000000] rounded-full shadow-md hover:bg-[#333333] transition-all duration-300"
            >
                Read more
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
