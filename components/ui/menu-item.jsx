import { TextSmall } from "@/ui/text/text-small/TextSmall";
export default function MenuItem({ menu }) {
  return (
    menu.map(({name, url, submenu}, index) => (
      <li key={index} className='group cursor-pointer hover:text-[#19191B80] max-md:border-b-[.5px] max-md:border-b-[#19191b1a]' id={`menu-item-${index}`}>
        {submenu.length > 0 ? (
          <div className="w-full text-[14px] font-medium leading-[132%] -tracking-[.14px]">
            <div className="flex max-md:flex-col max-md:w-full">
              <div className="flex items-center gap-[6px]">
                {name}
                <svg className='group-hover:rotate-180' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M12.5 6.25L8 10.75L3.5 6.25" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
                </svg>
              </div>
              <div className='max-md:mt-[14px]' id={`submenu-item-${index}`}>
                <div className='hidden group-hover:block absolute max-md:static max-md:z-[100] max-md:flex top-full z-[100] w-full left-0 bg-white'>
                  <div className="w-auto mx-[32px] h-[.5px] bg-linear-6"></div>
                </div>
                <div className="max-md:!p-0 max-md:static max-md:z-[100] max-md:flex h-0 p-0 hidden group-hover:h-auto group-hover:p-[24px_32px] group-hover:flex overflow-hidden absolute w-full left-0 top-full bg-white text-black z-50 justify-between gap-[40px] max-lg:flex-col rounded-b-[20px]">
                  <p className="max-md:hidden text-[20px] font-medium leading-[100%] -tracking-[.8px]">/ {name}</p>
                  <div className="flex gap-[32px] max-md:gap-0 max-md:flex-col">
                    {submenu.map(({ name, description, url }, ind) => (
                      <a key={ind} href={url} className="max-md:last-of-type:border-none max-md:border-b-[.5px] max-md:border-b-[#19191b1a] max-md:p-[16px_20px] flex items-start justify-start gap-[12px] hover:opacity-70">
                        <div className="bg-[#19191B] rounded-full p-[4px] text-white">
                          <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                            <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" fill="currentColor"></path>
                          </svg>
                        </div>

                        <div className="flex flex-col gap-[6px]">
                          <p className="text-[16px] font-bold leading-[132%] -tracking-[.16px]">{name}</p>
                          <TextSmall
                            label={description}
                            cls="max-md:hidden text-[12px] text-[#19191B80] font-medium leading-[132%] -tracking-[.12px]"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <a key={index} href={url} className="text-[14px] font-medium leading-[132%] -tracking-[.14px]">
            {name}
          </a>
        )}
      </li>
    ))
  )
}
