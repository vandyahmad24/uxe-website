import { useEffect, useState } from "react";

export default function SubMenuItem({ name, submenu, elementId }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const parentMenu = document.getElementById(`menu-item-${elementId}`)
    const contentMenu = document.getElementById(`submenu-item-${elementId}`)

    if (!parentMenu && !contentMenu) {
      return;
    }

    const handleMouseEnter = () => {
      setIsHovered(true);
    }

    const handleMouseLeave = () => {
      setIsHovered(false);
    }

    
  })

  return (
    <div id={`submenu-item-${elementId}`}>
      <div className="hidden absolute top-full z-[100] w-full left-0 bg-white">
        <div className="w-auto mx-[32px] h-[.5px] bg-linear-6"></div>
      </div>
      <div className="h-0 p-0 hidden h-auto p-[24px_32px] flex overflow-hidden absolute w-full left-0 top-full bg-white text-black z-50 justify-between gap-[40px] max-lg:flex-col rounded-b-[20px]">
        <p className="text-[20px] font-medium leading-[100%] -tracking-[.8px]">
          / {name}
        </p>
        <div className="flex gap-[32px] max-md:flex-col">
          {submenu.map(({ name, description, url }, ind) => (
            <a key={ind} href={url} className="flex items-start justify-start gap-[12px]">
              <div className="bg-[#19191B] rounded-full p-[4px] text-white">
                <svg
                  className="rotate-45"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <div className="flex flex-col gap-[6px]">
                <p className="text-[16px] font-bold leading-[132%] -tracking-[.16px]">
                  {name}
                </p>
                <p
                  dangerouslySetInnerHTML={{ __html: description }}
                  className="text-[12px] text-[#19191B80] font-medium leading-[132%] -tracking-[.12px]"
                ></p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
