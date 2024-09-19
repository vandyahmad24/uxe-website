import cn from 'classnames'
import { TextSmall } from "@/ui/text/text-small/TextSmall"

interface MenuItemProps {
  menu?: any;
  isFixed: boolean;
}

export const MenuItem = ({ menu, isFixed}: MenuItemProps) => {

  const containerClass = cn("w-full text-[14px] font-medium leading-[132%] -tracking-[.14px] p-[6px_16px] rounded-[100px]", {
    "hover:text-[#FFFFFF] hover:bg-[#BEBEBE1F]": !isFixed,
    "hover:text-[#19191B] hover:bg-[#BEBEBE1F]": isFixed,
  })

  const containerClass2 = cn("text-[14px] font-medium leading-[132%] -tracking-[.14px] p-[6px_16px] rounded-[100px]", {
    "hover:text-[#FFFFFF] hover:bg-[#BEBEBE1F]": !isFixed,
    "hover:text-[#19191B] hover:bg-[#BEBEBE1F]": isFixed,
  })

  return (
    menu.map(({name, url, submenu}, index) => (
      <li key={index} className='group cursor-pointer max-md:border-b-[.5px] max-md:border-b-[#19191b1a] relative' id={`menu-item-${index}`}>
        {submenu.length > 0 ? (
          <div className={containerClass}>
            <div className="flex max-md:flex-col max-md:w-full">
              <div className="flex items-center gap-[6px]">
                {name}
                <svg className='group-hover:rotate-180' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M12.5 6.25L8 10.75L3.5 6.25" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
                </svg>
              </div>
              <div className='max-md:mt-[14px]' id={`submenu-item-${index}`}>
               
                <div className='hidden absolute overflow-hidden left-[50%] translate-x-[-50%] top-[105%] bg-white text-black z-50 rounded-[16px] flex flex-col gap-[8px] w-[200px] group-hover:p-[8px] group-hover:h-auto group-hover:flex'>
                  {submenu.map(({ name, description, url,sub_menu_three }, ind) => (
                  <a key={ind} href={url} className='flex gap-[4px] items-center justify-between hover:bg-[#BEBEBE1F] p-[12px] rounded-[8px] max-w-[200px]'>
                    <div className='flex flex-col gap-[6px]'>
                      <h3 className='text-[#19191B] text-[16px] font-[700] leading-[132%] -tracking-[.16px]'>{name}</h3>
                      <p className='text-[#19191B80] text-[12px] font-[400] leading-[132%] -tracking-[.12px]'>{description}</p>
                    </div>
                    <div className='h-[16px] w-[16px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M5.75 4L10.25 8.5L5.75 13" stroke="#19191B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
                      </svg>
                    </div>
                  </a>
                  ))}
                </div>
             
              </div>
            </div>
          </div>
        ) : (
          <a key={index} href={url} className={containerClass2}>
            {name}
          </a>
        )}
      </li>
    ))
  )
}
