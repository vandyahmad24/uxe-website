import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/base/layout";
import { getClient } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import Header from "../../components/section/header";
import Product from "../../components/section/product";
import Testimonial from "../../components/section/testimonial";
import Container from "../../components/base/container";
import IconCloud from "../../components/icon/cloud";
import IconTechnology from "../../components/icon/technology";

export default function TeamSection({ allClientLogo }) {
  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <div className="bg-black">
        <Container>
          <div className="relative flex flex-col justify-end min-h-[400px]">
            <div className="relative z-10 flex flex-col gap-[max(75px,_min(calc(100vw_*_(100_/_1440)),_100px))] p-[max(32px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))]">
              <div className="flex items-end justify-between gap-[80px] max-xl:flex-col max-xl:items-start">
                <div className="flex flex-col items-start gap-[10px] max-w-lg">
                  <span className="text-[12px] text-white font-medium leading-[112%] -tracking-[.96px] uppercase">Our Team</span>
                  <h2 className="text-[max(24px,_min(calc(100vw_*_(48_/_1440)),_48px))] max-lg:text-[max(24px,_min(calc(100vw_*_(80_/_1440)),_80px))] font-medium leading-[120%] -tracking-[1.28px] bg-linear-4 !bg-clip-text text-transparent">Happy people who work hard to empower your teams.</h2>
                </div>
                <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px] max-w-sm bg-linear-5 !bg-clip-text text-transparent">Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments</p>
              </div>
            </div>
            <div className="absolute top-0 w-full min-h-[400px] bg-cover bg-no-repeat" style={{
              backgroundImage: `url(/image/team-hero-background.png)`
            }}></div>
            <div className="absolute top-0 w-full min-h-[400px] bg-linear-7"></div>
          </div>
        </Container>
      </div>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden pb-0">
          <div className="flex flex-col gap-[max(48px,_min(calc(100vw_*_(64_/_1440)),_64px))]">
            <div className="flex flex-col items-center gap-[max(8px,_min(calc(100vw_*_(12_/_1440)),_12px))] text-center">
              <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px]">Our leadership team</h2>
              <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] leading-[132%] -tracking-[.16px]">With over 100 years of combined experience, we ve got a well-seasoned team at the helm.</p>
            </div>
            <div className="grid grid-cols-4 gap-[20px] max-lg:grid-cols-2 max-sm:grid-cols-1">
              <div className="relative rounded-[12px] overflow-hidden pt-[100%] h-0 w-full text-white">
                <img className="absolute top-0 w-full" src="/image/team-people-01.png" alt="" />
                <div className="absolute bottom-0 left-0 right-0 m-[16px] p-[16px] bg-[#0D0D0D66] rounded-[8px]">
                  <p className="text-[16px] font-bold leading-[132%] -tracking-[.16px]">Courtney Henry</p>
                  <p className="text-[14px] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                </div>
              </div>
              <div className="relative rounded-[12px] overflow-hidden pt-[100%] h-0 w-full text-white">
                <img className="absolute top-0 w-full" src="/image/team-people-02.png" alt="" />
                <div className="absolute bottom-0 left-0 right-0 m-[16px] p-[16px] bg-[#0D0D0D66] rounded-[8px]">
                  <p className="text-[16px] font-bold leading-[132%] -tracking-[.16px]">Liliana De La Cruzz</p>
                  <p className="text-[14px] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                </div>
              </div>
              <div className="relative rounded-[12px] overflow-hidden pt-[100%] h-0 w-full text-white">
                <img className="absolute top-0 w-full" src="/image/team-people-03.png" alt="" />
                <div className="absolute bottom-0 left-0 right-0 m-[16px] p-[16px] bg-[#0D0D0D66] rounded-[8px]">
                  <p className="text-[16px] font-bold leading-[132%] -tracking-[.16px]">Mike Tomy</p>
                  <p className="text-[14px] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                </div>
              </div>
              <div className="relative rounded-[12px] overflow-hidden pt-[100%] h-0 w-full text-white">
                <img className="absolute top-0 w-full" src="/image/team-people-04.png" alt="" />
                <div className="absolute bottom-0 left-0 right-0 m-[16px] p-[16px] bg-[#0D0D0D66] rounded-[8px]">
                  <p className="text-[16px] font-bold leading-[132%] -tracking-[.16px]">Hellena Wong</p>
                  <p className="text-[14px] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="flex flex-col gap-[max(48px,_min(calc(100vw_*_(64_/_1440)),_64px))]">
            <div className="flex flex-col items-center gap-[max(8px,_min(calc(100vw_*_(12_/_1440)),_12px))] text-center">
              <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px]">Board of Directors</h2>
              <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] leading-[132%] -tracking-[.16px]">The best and brightest innovators in UXE advise our leaders.</p>
            </div>
            <div className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[374px]:grid-cols-1 gap-[max(24px,_min(calc(100vw_*_(16_/_1440)),_16px))_max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))]">
              <div className="flex flex-col items-start gap-[20px] max-[374px]:items-center">
                <img className="rounded-[12px] w-1/3" src="/image/team-people-05.png" alt="" />
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">Shona Brown</p>
                    <p className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#ADADAD] leading-[132%] -tracking-[.16px]">Social Media</p>
                    <div className="h-[14px] w-[1px] bg-[#D9D9D9]"></div>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_1034_23581)">
                          <path d="M10 0.5C15.5286 0.5 20 4.97143 20 10.5C20 16.0286 15.5286 20.5 10 20.5C4.47143 20.5 0 16.0286 0 10.5C0 4.97143 4.47143 0.5 10 0.5ZM8.17143 15.7714C12.6 15.7714 15.0286 12.1 15.0286 8.91429V8.6C15.5 8.25714 15.9143 7.82857 16.2286 7.34286C15.8 7.52857 15.3286 7.65714 14.8429 7.72857C15.3429 7.42857 15.7286 6.95714 15.9 6.4C15.4286 6.67143 14.9143 6.87143 14.3714 6.98571C13.9286 6.51429 13.3 6.22857 12.6143 6.22857C11.2857 6.22857 10.2 7.31429 10.2 8.64286C10.2 8.82857 10.2143 9.01429 10.2714 9.18571C8.27143 9.08571 6.48571 8.12857 5.3 6.67143C5.1 7.02857 4.97143 7.44286 4.97143 7.88571C4.97143 8.71429 5.4 9.45714 6.04286 9.88571C5.64286 9.88571 5.27143 9.77143 4.95714 9.58571V9.61429C4.95714 10.7857 5.78571 11.7571 6.88571 11.9857C6.68571 12.0429 6.47143 12.0714 6.25714 12.0714C6.1 12.0714 5.95714 12.0571 5.8 12.0286C6.1 12.9857 7 13.6857 8.04286 13.7C7.21429 14.3429 6.17143 14.7286 5.04286 14.7286C4.84286 14.7286 4.65714 14.7286 4.47143 14.7C5.52857 15.3857 6.8 15.7857 8.15714 15.7857" fill="#ADADAD"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1034_23581">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[20px] max-[374px]:items-center">
                <img className="rounded-[12px] w-1/3" src="/image/team-people-06.png" alt="" />
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">Mike Cannon-Brookes</p>
                    <p className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#ADADAD] leading-[132%] -tracking-[.16px]">Social Media</p>
                    <div className="h-[14px] w-[1px] bg-[#D9D9D9]"></div>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#ADADAD"/>
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_1034_23581)">
                          <path d="M10 0.5C15.5286 0.5 20 4.97143 20 10.5C20 16.0286 15.5286 20.5 10 20.5C4.47143 20.5 0 16.0286 0 10.5C0 4.97143 4.47143 0.5 10 0.5ZM8.17143 15.7714C12.6 15.7714 15.0286 12.1 15.0286 8.91429V8.6C15.5 8.25714 15.9143 7.82857 16.2286 7.34286C15.8 7.52857 15.3286 7.65714 14.8429 7.72857C15.3429 7.42857 15.7286 6.95714 15.9 6.4C15.4286 6.67143 14.9143 6.87143 14.3714 6.98571C13.9286 6.51429 13.3 6.22857 12.6143 6.22857C11.2857 6.22857 10.2 7.31429 10.2 8.64286C10.2 8.82857 10.2143 9.01429 10.2714 9.18571C8.27143 9.08571 6.48571 8.12857 5.3 6.67143C5.1 7.02857 4.97143 7.44286 4.97143 7.88571C4.97143 8.71429 5.4 9.45714 6.04286 9.88571C5.64286 9.88571 5.27143 9.77143 4.95714 9.58571V9.61429C4.95714 10.7857 5.78571 11.7571 6.88571 11.9857C6.68571 12.0429 6.47143 12.0714 6.25714 12.0714C6.1 12.0714 5.95714 12.0571 5.8 12.0286C6.1 12.9857 7 13.6857 8.04286 13.7C7.21429 14.3429 6.17143 14.7286 5.04286 14.7286C4.84286 14.7286 4.65714 14.7286 4.47143 14.7C5.52857 15.3857 6.8 15.7857 8.15714 15.7857" fill="#ADADAD"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1034_23581">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[20px] max-[374px]:items-center">
                <img className="rounded-[12px] w-1/3" src="/image/team-people-07.png" alt="" />
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">Scott Farquhar</p>
                    <p className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#ADADAD] leading-[132%] -tracking-[.16px]">Social Media</p>
                    <div className="h-[14px] w-[1px] bg-[#D9D9D9]"></div>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#ADADAD"/>
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_1034_23581)">
                          <path d="M10 0.5C15.5286 0.5 20 4.97143 20 10.5C20 16.0286 15.5286 20.5 10 20.5C4.47143 20.5 0 16.0286 0 10.5C0 4.97143 4.47143 0.5 10 0.5ZM8.17143 15.7714C12.6 15.7714 15.0286 12.1 15.0286 8.91429V8.6C15.5 8.25714 15.9143 7.82857 16.2286 7.34286C15.8 7.52857 15.3286 7.65714 14.8429 7.72857C15.3429 7.42857 15.7286 6.95714 15.9 6.4C15.4286 6.67143 14.9143 6.87143 14.3714 6.98571C13.9286 6.51429 13.3 6.22857 12.6143 6.22857C11.2857 6.22857 10.2 7.31429 10.2 8.64286C10.2 8.82857 10.2143 9.01429 10.2714 9.18571C8.27143 9.08571 6.48571 8.12857 5.3 6.67143C5.1 7.02857 4.97143 7.44286 4.97143 7.88571C4.97143 8.71429 5.4 9.45714 6.04286 9.88571C5.64286 9.88571 5.27143 9.77143 4.95714 9.58571V9.61429C4.95714 10.7857 5.78571 11.7571 6.88571 11.9857C6.68571 12.0429 6.47143 12.0714 6.25714 12.0714C6.1 12.0714 5.95714 12.0571 5.8 12.0286C6.1 12.9857 7 13.6857 8.04286 13.7C7.21429 14.3429 6.17143 14.7286 5.04286 14.7286C4.84286 14.7286 4.65714 14.7286 4.47143 14.7C5.52857 15.3857 6.8 15.7857 8.15714 15.7857" fill="#ADADAD"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1034_23581">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[20px] max-[374px]:items-center">
                <img className="rounded-[12px] w-1/3" src="/image/team-people-08.png" alt="" />
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">Heather M. Fernandez</p>
                    <p className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#ADADAD] leading-[132%] -tracking-[.16px]">Social Media</p>
                    <div className="h-[14px] w-[1px] bg-[#D9D9D9]"></div>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#ADADAD"/>
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_1034_23581)">
                          <path d="M10 0.5C15.5286 0.5 20 4.97143 20 10.5C20 16.0286 15.5286 20.5 10 20.5C4.47143 20.5 0 16.0286 0 10.5C0 4.97143 4.47143 0.5 10 0.5ZM8.17143 15.7714C12.6 15.7714 15.0286 12.1 15.0286 8.91429V8.6C15.5 8.25714 15.9143 7.82857 16.2286 7.34286C15.8 7.52857 15.3286 7.65714 14.8429 7.72857C15.3429 7.42857 15.7286 6.95714 15.9 6.4C15.4286 6.67143 14.9143 6.87143 14.3714 6.98571C13.9286 6.51429 13.3 6.22857 12.6143 6.22857C11.2857 6.22857 10.2 7.31429 10.2 8.64286C10.2 8.82857 10.2143 9.01429 10.2714 9.18571C8.27143 9.08571 6.48571 8.12857 5.3 6.67143C5.1 7.02857 4.97143 7.44286 4.97143 7.88571C4.97143 8.71429 5.4 9.45714 6.04286 9.88571C5.64286 9.88571 5.27143 9.77143 4.95714 9.58571V9.61429C4.95714 10.7857 5.78571 11.7571 6.88571 11.9857C6.68571 12.0429 6.47143 12.0714 6.25714 12.0714C6.1 12.0714 5.95714 12.0571 5.8 12.0286C6.1 12.9857 7 13.6857 8.04286 13.7C7.21429 14.3429 6.17143 14.7286 5.04286 14.7286C4.84286 14.7286 4.65714 14.7286 4.47143 14.7C5.52857 15.3857 6.8 15.7857 8.15714 15.7857" fill="#ADADAD"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1034_23581">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[20px] max-[374px]:items-center">
                <img className="rounded-[12px] w-1/3" src="/image/team-people-09.png" alt="" />
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">Sasan Goodarzi</p>
                    <p className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#ADADAD] leading-[132%] -tracking-[.16px]">Social Media</p>
                    <div className="h-[14px] w-[1px] bg-[#D9D9D9]"></div>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#ADADAD"/>
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_1034_23581)">
                          <path d="M10 0.5C15.5286 0.5 20 4.97143 20 10.5C20 16.0286 15.5286 20.5 10 20.5C4.47143 20.5 0 16.0286 0 10.5C0 4.97143 4.47143 0.5 10 0.5ZM8.17143 15.7714C12.6 15.7714 15.0286 12.1 15.0286 8.91429V8.6C15.5 8.25714 15.9143 7.82857 16.2286 7.34286C15.8 7.52857 15.3286 7.65714 14.8429 7.72857C15.3429 7.42857 15.7286 6.95714 15.9 6.4C15.4286 6.67143 14.9143 6.87143 14.3714 6.98571C13.9286 6.51429 13.3 6.22857 12.6143 6.22857C11.2857 6.22857 10.2 7.31429 10.2 8.64286C10.2 8.82857 10.2143 9.01429 10.2714 9.18571C8.27143 9.08571 6.48571 8.12857 5.3 6.67143C5.1 7.02857 4.97143 7.44286 4.97143 7.88571C4.97143 8.71429 5.4 9.45714 6.04286 9.88571C5.64286 9.88571 5.27143 9.77143 4.95714 9.58571V9.61429C4.95714 10.7857 5.78571 11.7571 6.88571 11.9857C6.68571 12.0429 6.47143 12.0714 6.25714 12.0714C6.1 12.0714 5.95714 12.0571 5.8 12.0286C6.1 12.9857 7 13.6857 8.04286 13.7C7.21429 14.3429 6.17143 14.7286 5.04286 14.7286C4.84286 14.7286 4.65714 14.7286 4.47143 14.7C5.52857 15.3857 6.8 15.7857 8.15714 15.7857" fill="#ADADAD"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1034_23581">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[20px] max-[374px]:items-center">
                <img className="rounded-[12px] w-1/3" src="/image/team-people-10.png" alt="" />
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">Sule Muntari</p>
                    <p className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#ADADAD] leading-[132%] -tracking-[.16px]">Social Media</p>
                    <div className="h-[14px] w-[1px] bg-[#D9D9D9]"></div>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#ADADAD"/>
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_1034_23581)">
                          <path d="M10 0.5C15.5286 0.5 20 4.97143 20 10.5C20 16.0286 15.5286 20.5 10 20.5C4.47143 20.5 0 16.0286 0 10.5C0 4.97143 4.47143 0.5 10 0.5ZM8.17143 15.7714C12.6 15.7714 15.0286 12.1 15.0286 8.91429V8.6C15.5 8.25714 15.9143 7.82857 16.2286 7.34286C15.8 7.52857 15.3286 7.65714 14.8429 7.72857C15.3429 7.42857 15.7286 6.95714 15.9 6.4C15.4286 6.67143 14.9143 6.87143 14.3714 6.98571C13.9286 6.51429 13.3 6.22857 12.6143 6.22857C11.2857 6.22857 10.2 7.31429 10.2 8.64286C10.2 8.82857 10.2143 9.01429 10.2714 9.18571C8.27143 9.08571 6.48571 8.12857 5.3 6.67143C5.1 7.02857 4.97143 7.44286 4.97143 7.88571C4.97143 8.71429 5.4 9.45714 6.04286 9.88571C5.64286 9.88571 5.27143 9.77143 4.95714 9.58571V9.61429C4.95714 10.7857 5.78571 11.7571 6.88571 11.9857C6.68571 12.0429 6.47143 12.0714 6.25714 12.0714C6.1 12.0714 5.95714 12.0571 5.8 12.0286C6.1 12.9857 7 13.6857 8.04286 13.7C7.21429 14.3429 6.17143 14.7286 5.04286 14.7286C4.84286 14.7286 4.65714 14.7286 4.47143 14.7C5.52857 15.3857 6.8 15.7857 8.15714 15.7857" fill="#ADADAD"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1034_23581">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[20px] max-[374px]:items-center">
                <img className="rounded-[12px] w-1/3" src="/image/team-people-11.png" alt="" />
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">Ahmad Nasheri</p>
                    <p className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#ADADAD] leading-[132%] -tracking-[.16px]">Social Media</p>
                    <div className="h-[14px] w-[1px] bg-[#D9D9D9]"></div>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#ADADAD"/>
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_1034_23581)">
                          <path d="M10 0.5C15.5286 0.5 20 4.97143 20 10.5C20 16.0286 15.5286 20.5 10 20.5C4.47143 20.5 0 16.0286 0 10.5C0 4.97143 4.47143 0.5 10 0.5ZM8.17143 15.7714C12.6 15.7714 15.0286 12.1 15.0286 8.91429V8.6C15.5 8.25714 15.9143 7.82857 16.2286 7.34286C15.8 7.52857 15.3286 7.65714 14.8429 7.72857C15.3429 7.42857 15.7286 6.95714 15.9 6.4C15.4286 6.67143 14.9143 6.87143 14.3714 6.98571C13.9286 6.51429 13.3 6.22857 12.6143 6.22857C11.2857 6.22857 10.2 7.31429 10.2 8.64286C10.2 8.82857 10.2143 9.01429 10.2714 9.18571C8.27143 9.08571 6.48571 8.12857 5.3 6.67143C5.1 7.02857 4.97143 7.44286 4.97143 7.88571C4.97143 8.71429 5.4 9.45714 6.04286 9.88571C5.64286 9.88571 5.27143 9.77143 4.95714 9.58571V9.61429C4.95714 10.7857 5.78571 11.7571 6.88571 11.9857C6.68571 12.0429 6.47143 12.0714 6.25714 12.0714C6.1 12.0714 5.95714 12.0571 5.8 12.0286C6.1 12.9857 7 13.6857 8.04286 13.7C7.21429 14.3429 6.17143 14.7286 5.04286 14.7286C4.84286 14.7286 4.65714 14.7286 4.47143 14.7C5.52857 15.3857 6.8 15.7857 8.15714 15.7857" fill="#ADADAD"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1034_23581">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[20px] max-[374px]:items-center">
                <img className="rounded-[12px] w-1/3" src="/image/team-people-12.png" alt="" />
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">Samir Handanovic</p>
                    <p className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#ADADAD] leading-[132%] -tracking-[.16px]">Social Media</p>
                    <div className="h-[14px] w-[1px] bg-[#D9D9D9]"></div>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#ADADAD"/>
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_1034_23581)">
                          <path d="M10 0.5C15.5286 0.5 20 4.97143 20 10.5C20 16.0286 15.5286 20.5 10 20.5C4.47143 20.5 0 16.0286 0 10.5C0 4.97143 4.47143 0.5 10 0.5ZM8.17143 15.7714C12.6 15.7714 15.0286 12.1 15.0286 8.91429V8.6C15.5 8.25714 15.9143 7.82857 16.2286 7.34286C15.8 7.52857 15.3286 7.65714 14.8429 7.72857C15.3429 7.42857 15.7286 6.95714 15.9 6.4C15.4286 6.67143 14.9143 6.87143 14.3714 6.98571C13.9286 6.51429 13.3 6.22857 12.6143 6.22857C11.2857 6.22857 10.2 7.31429 10.2 8.64286C10.2 8.82857 10.2143 9.01429 10.2714 9.18571C8.27143 9.08571 6.48571 8.12857 5.3 6.67143C5.1 7.02857 4.97143 7.44286 4.97143 7.88571C4.97143 8.71429 5.4 9.45714 6.04286 9.88571C5.64286 9.88571 5.27143 9.77143 4.95714 9.58571V9.61429C4.95714 10.7857 5.78571 11.7571 6.88571 11.9857C6.68571 12.0429 6.47143 12.0714 6.25714 12.0714C6.1 12.0714 5.95714 12.0571 5.8 12.0286C6.1 12.9857 7 13.6857 8.04286 13.7C7.21429 14.3429 6.17143 14.7286 5.04286 14.7286C4.84286 14.7286 4.65714 14.7286 4.47143 14.7C5.52857 15.3857 6.8 15.7857 8.15714 15.7857" fill="#ADADAD"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1034_23581">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[20px] max-[374px]:items-center">
                <img className="rounded-[12px] w-1/3" src="/image/team-people-13.png" alt="" />
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">Kim Lee John</p>
                    <p className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#ADADAD] leading-[132%] -tracking-[.16px]">Social Media</p>
                    <div className="h-[14px] w-[1px] bg-[#D9D9D9]"></div>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#ADADAD"/>
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_1034_23581)">
                          <path d="M10 0.5C15.5286 0.5 20 4.97143 20 10.5C20 16.0286 15.5286 20.5 10 20.5C4.47143 20.5 0 16.0286 0 10.5C0 4.97143 4.47143 0.5 10 0.5ZM8.17143 15.7714C12.6 15.7714 15.0286 12.1 15.0286 8.91429V8.6C15.5 8.25714 15.9143 7.82857 16.2286 7.34286C15.8 7.52857 15.3286 7.65714 14.8429 7.72857C15.3429 7.42857 15.7286 6.95714 15.9 6.4C15.4286 6.67143 14.9143 6.87143 14.3714 6.98571C13.9286 6.51429 13.3 6.22857 12.6143 6.22857C11.2857 6.22857 10.2 7.31429 10.2 8.64286C10.2 8.82857 10.2143 9.01429 10.2714 9.18571C8.27143 9.08571 6.48571 8.12857 5.3 6.67143C5.1 7.02857 4.97143 7.44286 4.97143 7.88571C4.97143 8.71429 5.4 9.45714 6.04286 9.88571C5.64286 9.88571 5.27143 9.77143 4.95714 9.58571V9.61429C4.95714 10.7857 5.78571 11.7571 6.88571 11.9857C6.68571 12.0429 6.47143 12.0714 6.25714 12.0714C6.1 12.0714 5.95714 12.0571 5.8 12.0286C6.1 12.9857 7 13.6857 8.04286 13.7C7.21429 14.3429 6.17143 14.7286 5.04286 14.7286C4.84286 14.7286 4.65714 14.7286 4.47143 14.7C5.52857 15.3857 6.8 15.7857 8.15714 15.7857" fill="#ADADAD"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1034_23581">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[20px] max-[374px]:items-center">
                <img className="rounded-[12px] w-1/3" src="/image/team-people-05.png" alt="" />
                <div className="flex flex-col gap-[12px]">
                  <div>
                    <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px]">Susan Morales</p>
                    <p className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">Marketing Coordinator</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#ADADAD] leading-[132%] -tracking-[.16px]">Social Media</p>
                    <div className="h-[14px] w-[1px] bg-[#D9D9D9]"></div>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#ADADAD"/>
                      </svg>
                    </a>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_1034_23581)">
                          <path d="M10 0.5C15.5286 0.5 20 4.97143 20 10.5C20 16.0286 15.5286 20.5 10 20.5C4.47143 20.5 0 16.0286 0 10.5C0 4.97143 4.47143 0.5 10 0.5ZM8.17143 15.7714C12.6 15.7714 15.0286 12.1 15.0286 8.91429V8.6C15.5 8.25714 15.9143 7.82857 16.2286 7.34286C15.8 7.52857 15.3286 7.65714 14.8429 7.72857C15.3429 7.42857 15.7286 6.95714 15.9 6.4C15.4286 6.67143 14.9143 6.87143 14.3714 6.98571C13.9286 6.51429 13.3 6.22857 12.6143 6.22857C11.2857 6.22857 10.2 7.31429 10.2 8.64286C10.2 8.82857 10.2143 9.01429 10.2714 9.18571C8.27143 9.08571 6.48571 8.12857 5.3 6.67143C5.1 7.02857 4.97143 7.44286 4.97143 7.88571C4.97143 8.71429 5.4 9.45714 6.04286 9.88571C5.64286 9.88571 5.27143 9.77143 4.95714 9.58571V9.61429C4.95714 10.7857 5.78571 11.7571 6.88571 11.9857C6.68571 12.0429 6.47143 12.0714 6.25714 12.0714C6.1 12.0714 5.95714 12.0571 5.8 12.0286C6.1 12.9857 7 13.6857 8.04286 13.7C7.21429 14.3429 6.17143 14.7286 5.04286 14.7286C4.84286 14.7286 4.65714 14.7286 4.47143 14.7C5.52857 15.3857 6.8 15.7857 8.15714 15.7857" fill="#ADADAD"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1034_23581">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[0_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="bg-[#19191B] rounded-[12px] p-[max(32px,_min(calc(100vw_*_(54_/_1440)),_54px))_48px] flex flex-col items-center gap-[max(32px,_min(calc(100vw_*_(48_/_1440)),_48px))] bg-[url('/image/get-started-background.png')] bg-cover bg-no-repeat bg-bottom">
            <div className="flex gap-[20px] items-center justify-between w-full max-md:flex-col max-md:text-center">
              <div className="flex flex-col gap-[16px]">
                <h2 className="text-[max(32px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[120%] -tracking-[1.28px] bg-clip-text bg-linear-8 text-transparent">
                  Get started with UXE
                </h2>
                <p className="text-white text-[16px] leading-[132%] -tracking-[.16px]">
                  Join over 4,000+ startups already growing with UXE.
                </p>
              </div>
              <a
                href="#"
                className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full hover:opacity-70"
                style={{
                  border: "1px solid rgba(207, 207, 207, 0.25)",
                  background: "rgba(178, 178, 178, 0.25)",
                  backdropFilter: "blur(2px)",
                }}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <Testimonial
        data={{
          show: 3,
          items: [
            {
              rating: 4,
              review:
                "“As a business operating in a dynamic environment, we needed a robust security solution.",
              userPhoto: "/image/person-image-05.png",
              userName: "Courtney Henry",
              userRole: "Marketing Coordinator",
              userCompanyLogo: "/image/company-logo-01.png",
            },
            {
              rating: 4,
              review:
                "“I recently had the pleasure of experiencing the benefits of a smart city initiative, and I must say, it has transformed the way I interact with my urban environment.",
              userPhoto: "/image/person-image-06.png",
              userName: "James Madison",
              userRole: "Product Manager",
              userCompanyLogo: "/image/company-logo-02.png",
            },
            {
              rating: 4,
              review:
                "“The smart city product has enhanced urban living by optimizing traffic flow, reducing congestion, and promoting sustainable transportation options.",
              userPhoto: "/image/person-image-07.png",
              userName: "Alexander Potrat",
              userRole: "Director Manager",
              userCompanyLogo: "/image/company-logo-03.png",
            },
            {
              rating: 4,
              review:
                "“As a business operating in a dynamic environment, we needed a robust security solution.",
              userPhoto: "/image/person-image-05.png",
              userName: "Courtney Henry",
              userRole: "Marketing Coordinator",
              userCompanyLogo: "/image/company-logo-01.png",
            },
          ],
        }}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allClientLogo = await getClient();

  return {
    props: { allClientLogo },
    revalidate: 10,
  };
};
