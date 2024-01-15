import Container from './container'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation({ menu }) {
  return (
    <div className="fixed top-0 z-50 w-full">
      <Container>
        <div className="p-[24px_38px] max-xl:p-0">
          <div className="bg-white rounded-b-[20px]">
            <div className="p-[16px_32px] flex items-center justify-between">
              <Link href="/" className="hover:underline">
                <Image
                  src="/image/logo-black.png"
                  alt="REPLACE THIS"
                  className="max-h-[42px]"
                  height={44}
                  width={98}
                />
              </Link>

              <div className="flex items-center max-md:hidden">
                <ul className="flex gap-[8px]">
                  <li className="p-[6px_8px] flex items-center">
                    <a href="#" className="text-[14px] font-medium leading-[132%] -tracking-[.14px]">Product</a>
                  </li>
                  <li className="p-[6px_8px] flex items-center">
                    <a href="#" className="text-[14px] font-medium leading-[132%] -tracking-[.14px]">
                      <div className="flex items-center gap-[6px]">
                        Solutions
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M12.5 6.25L8 10.75L3.5 6.25" stroke="#19191B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li className="p-[6px_8px] flex items-center">
                    <a href="#" className="text-[14px] font-medium leading-[132%] -tracking-[.14px]">
                      <div className="flex items-center gap-[6px]">
                        Company
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M12.5 6.25L8 10.75L3.5 6.25" stroke="#19191B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li className="p-[6px_8px] flex items-center">
                    <a href="#" className="text-[14px] font-medium leading-[132%] -tracking-[.14px]">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-auto mx-[32px]" style={{
              height: ".5px",
              background: "linear-gradient(270deg, rgba(25, 25, 27, 0.10) 0%, rgba(25, 25, 27, 0.29) 50.7%, rgba(25, 25, 27, 0.10) 103.78%)"
            }}></div>
            <div className="p-[24px_32px] flex justify-between gap-[40px] max-lg:flex-col">
              <p className="text-[20px] font-medium leading-[100%] -tracking-[.8px]">/ Solution</p>

              <div className="flex gap-[32px] max-md:flex-col">
                <div className="flex items-start justify-start gap-[12px]">
                  <div className="bg-[#19191B] rounded-full p-[4px] text-white">
                    <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                      <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" fill="currentColor"></path>
                    </svg>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <p className="text-[16px] font-bold leading-[132%] -tracking-[.16px]">For Bussines</p>
                    <p className="text-[12px] text-[#19191B80] font-medium leading-[132%] -tracking-[.12px]">
                      All-in-One Security Platform<br />
                      Centralized Surveillance
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-start gap-[12px]">
                  <div className="bg-[#19191B] rounded-full p-[4px] text-white">
                    <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                      <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" fill="currentColor"></path>
                    </svg>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <p className="text-[16px] font-bold leading-[132%] -tracking-[.16px]">For Goverments</p>
                    <p className="text-[12px] text-[#19191B80] font-medium leading-[132%] -tracking-[.12px]">
                      All-in-One Security Platform<br />
                      Centralized Surveillance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
