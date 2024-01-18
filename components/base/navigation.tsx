import Container from './container'
import MenuItem from '../ui/menu-item'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import cn from 'classnames'

export default function Navigation({ menu }) {
  const [isFixed, setIsFixed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleNavigationScroll = () => {
      const scrollY = window.scrollY;
      const scrolled = scrollY > 0 || scrollY < 0;
      setIsScrolled(scrolled || isMobile)
      setIsFixed(scrolled || isMobile);
    }

    const dropdownContent = document.querySelector("#navigation-container");
    const buttonMobile = document.querySelector('button[title="Mobile Menu"]')

    const handleMenuMouseEnter = () => {
      setIsFixed(true || isMobile || isScrolled)
    }

    const handleMenuMouseLeave = () => {
      setIsFixed(false || isMobile || isScrolled)
    }

    const handleMobileMenu = () => {
      setIsMobile(!isMobile)
    }

    buttonMobile.addEventListener('click', handleMobileMenu)

    dropdownContent.addEventListener('mouseenter', handleMenuMouseEnter)
    dropdownContent.addEventListener('mouseleave', handleMenuMouseLeave)

    window.addEventListener('scroll', handleNavigationScroll);

    return () => {
      window.removeEventListener('scroll', handleNavigationScroll);
      dropdownContent.removeEventListener('mouseenter', handleMenuMouseEnter)
      dropdownContent.removeEventListener('mouseleave', handleMenuMouseLeave)
    }
  })

  const containerClass = cn("relative", {
    "bg-transparent text-white": !isFixed,
    "bg-white": isFixed,
  })

  return (
    <div className={cn("fixed top-0 z-50 w-full")}>
      <Container style={{ overflow: 'visible' }}>
        <div className="p-[20px_38px_0_38px] max-xl:p-0">
          <div id='navigation-container' className={containerClass}>
            <div className={cn(
              "px-[max(20px,_min(calc(100vw_*_(32_/_1440)),_32px))] max-md:py-[max(12px,_min(calc(100vw_*_(18_/_1440)),_18px))] max-md:flex-col flex items-center justify-between max-md:justify-start",
              {
                "max-md:h-screen": isMobile
              }
              )}>
              <div className='max-md:w-full flex items-center justify-between'>
                <Link href="/">
                  {isFixed ? (
                    <Image
                      src="/image/logo-black.png"
                      alt="REPLACE THIS"
                      // className="max-h-[44px]"
                      height={44}
                      width={98}
                    />
                  ) : (
                    <Image
                      src="/image/logo-white.png"
                      alt="REPLACE THIS"
                      // className="max-h-[44px]"
                      height={44}
                      width={98}
                    />
                  )}
                </Link>
                <button title='Mobile Menu' className='md:hidden'>
                  {isMobile ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="black"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3.99805 6H19.998V8H3.99805V6ZM3.99805 11H19.998V13H3.99805V11ZM3.99805 16H19.998V18H3.99805V16Z" fill="currentColor"/>
                    </svg>
                  )}
                </button>
              </div>

              <div className={cn("items-center max-md:items-start max-md:w-full max-md:mt-[20px] flex", { "max-md:hidden": !isMobile })}>
                <ul className="flex gap-[8px] max-md:*:p-[14px_8px] max-md:flex-col max-md:w-full *:p-[28px_8px] *:flex *:items-center">
                  {menu.length > 0 ? (
                    <MenuItem menu={menu} />
                  ) : (<></>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
