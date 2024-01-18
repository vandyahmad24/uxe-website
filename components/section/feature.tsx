import Container from '../base/container'
import Image from 'next/image'
import Link from 'next/link'
import IconCloud from '../icon/cloud'
import IconTechnology from '../icon/technology'

export default function Feature() {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(100_/_1440)),_100px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
        <div className="grid grid-cols-3 gap-[48px_32px] max-xl:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col justify-center p-[0_20px_0_14px] bg-[url('/image/featured-background.png')] bg-cover">
            <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">Features</p>
            <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-[34rem]">Your Gateway to Safer Tomorrow</h2>
          </div>
          <div className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
            <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 14.4993C2 15.0903 2.1164 15.6754 2.34254 16.2214C2.56869 16.7674 2.90016 17.2635 3.31802 17.6813C4.16193 18.5252 5.30653 18.9993 6.5 18.9993H18.5C19.386 19.0009 20.2396 18.6665 20.8886 18.0634C21.5377 17.4604 21.9339 16.6336 21.9973 15.75C22.0608 14.8663 21.7867 13.9914 21.2304 13.3018C20.6742 12.6123 19.8771 12.1593 19 12.0343C19.0098 10.3331 18.3996 8.68653 17.2837 7.40243C16.1677 6.11833 14.6223 5.28458 12.9363 5.05705C11.2503 4.82951 9.5392 5.22377 8.12277 6.16611C6.70633 7.10845 5.68156 8.53437 5.24 10.1773C4.30512 10.4503 3.48398 11.0192 2.8998 11.7984C2.31562 12.5777 1.99989 13.5254 2 14.4993Z" stroke="#3963FF" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M15 11L11 15L9 13" stroke="#3963FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">Cloud & platform</h3>
              <p className="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] max-w-96">Cloud computing refers to the delivery of computing services, including storage, processing power, applications.</p>
            </div>
          </div>
          <div className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
            <div className="bg-[#E6EDFF] text-[#3963FF] p-[12px] rounded-[12px]">
              <IconCloud width={24} height={24} />
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">Surveillance system</h3>
              <p className="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] max-w-96">A surveillance system is a network of cameras, sensors, and other technologies strategically deployed to monitor .</p>
            </div>
          </div>
          <div className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
            <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]">
              <IconTechnology width={24} height={24} />
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">Artificial Intelligence</h3>
              <p className="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] max-w-96">Artificial Intelligence (AI) is a branch of computer science that focuses on creating systems capable of performing tasks.</p>
            </div>
          </div>
          <div className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
            <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_710_11265)">
                  <path d="M6.03516 11.5645C6.03516 12.3601 6.35123 13.1232 6.91384 13.6858C7.47645 14.2484 8.23951 14.5645 9.03516 14.5645C9.83081 14.5645 10.5939 14.2484 11.1565 13.6858C11.7191 13.1232 12.0352 12.3601 12.0352 11.5645C12.0352 10.7688 11.7191 10.0057 11.1565 9.44313C10.5939 8.88052 9.83081 8.56445 9.03516 8.56445C8.23951 8.56445 7.47645 8.88052 6.91384 9.44313C6.35123 10.0057 6.03516 10.7688 6.03516 11.5645Z" stroke="#3963FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.5078 14.9824C14.8826 19.3401 10.7375 23.1355 9.03348 23.1355C6.89063 23.1355 0.890625 17.1355 0.890625 11.5641C0.890524 10.4311 1.12686 9.31053 1.58453 8.27409C2.04219 7.23765 2.71111 6.30812 3.5485 5.54494C4.3859 4.78177 5.37334 4.20174 6.44769 3.84196C7.52204 3.48217 8.65965 3.35055 9.78777 3.4555M13.1941 6.46236C12.6215 6.36121 12.6215 5.54007 13.1941 5.44064C14.2074 5.26448 15.1453 4.79047 15.8882 4.07908C16.631 3.36768 17.1451 2.45114 17.3649 1.44635L17.3992 1.28864C17.5226 0.722926 18.3283 0.721212 18.4569 1.28521L18.4981 1.46864C18.7262 2.46906 19.2451 3.3797 19.9893 4.08611C20.7335 4.79253 21.67 5.26318 22.6809 5.43893C23.2552 5.53836 23.2552 6.36464 22.6809 6.46407C21.67 6.63981 20.7335 7.11047 19.9893 7.81688C19.2451 8.52329 18.7262 9.43394 18.4981 10.4344L18.4569 10.6178C18.3283 11.1818 17.5226 11.1784 17.3992 10.6126L17.3649 10.4549C17.1451 9.45014 16.631 8.5336 15.8882 7.8222C15.1453 7.11081 14.2074 6.63851 13.1941 6.46236Z" stroke="#3963FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_710_11265">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">Tracking solution</h3>
              <p className="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] max-w-96">A tracking solution is a technology-based system designed to monitor and trace the location, movement.</p>
            </div>
          </div>
          <div className="px-[20px] border-l border-[#0000000F] flex flex-col items-start gap-[40px]">
            <div className="bg-[#E6EDFF] p-[12px] rounded-[12px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 8.5C17.5228 8.5 22 7.15685 22 5.5C22 3.84315 17.5228 2.5 12 2.5C6.47715 2.5 2 3.84315 2 5.5C2 7.15685 6.47715 8.5 12 8.5Z" stroke="#3963FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.385 7.75C3.31 8.3 2 9.104 2 10C2 11.657 6.477 13 12 13C17.523 13 22 11.657 22 10C22 9.104 20.6905 8.3 18.615 7.75" stroke="#3963FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.385 12.25C3.31 12.8 2 13.604 2 14.5C2 16.157 6.477 17.5 12 17.5C17.523 17.5 22 16.157 22 14.5C22 13.604 20.6905 12.8 18.615 12.25" stroke="#3963FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.385 16.75C3.31 17.3 2 18.104 2 19C2 20.657 6.477 22 12 22C17.523 22 22 20.657 22 19C22 18.104 20.6905 17.3 18.615 16.75C16.852 17.217 14.536 17.5 12 17.5C9.464 17.5 7.1485 17.217 5.385 16.75Z" stroke="#3963FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px]">Big data</h3>
              <p className="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] max-w-96">Big data refers to the massive and complex volume of structured and unstructured data generated by various sources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
