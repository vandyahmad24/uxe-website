import Head from "next/head";
import { GetStaticProps } from "next";
import { CMS_NAME } from "../lib/constants";
import { getSettings } from "../lib/new-api";
import Meta from "components/meta";
import { TitleMedium } from "@/ui/title/title-medium/TitleMedium";
import { TextMedium } from "@/ui/text/text-medium/TextMedium";
import { TextLarge } from "@/ui/text/text-large/TextLarge";
import { TextSmall } from "@/ui/text/text-small/TextSmall";
import Link from "next/link";

export default function ContactUsSection({ settings }) {
  const { cmsSettings } = settings;

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* Navigation */}
        <div className="bg-white sticky top-0 z-20">
          <div className="max-w-[1440px] mx-auto overflow-hidden">
            <div className="flex items-center justify-between gap-[48px] p-[20px_max(20px,_min(calc(100vw_*_(40_/_1440)),_40px))]">
              <Link href="/" className="flex items-center gap-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.834 9.16511H5.95065L8.97565 5.53177C9.1171 5.36159 9.18515 5.14219 9.16484 4.92184C9.14452 4.70148 9.0375 4.49822 8.86732 4.35677C8.69714 4.21532 8.47774 4.14727 8.25738 4.16759C8.03703 4.18791 7.83377 4.29493 7.69232 4.46511L3.52565 9.46511C3.49762 9.50488 3.47255 9.54666 3.45065 9.59011C3.45065 9.63177 3.45065 9.65677 3.39232 9.69844C3.35455 9.79399 3.33477 9.8957 3.33398 9.99844C3.33477 10.1012 3.35455 10.2029 3.39232 10.2984C3.39232 10.3401 3.39232 10.3651 3.45065 10.4068C3.47255 10.4502 3.49762 10.492 3.52565 10.5318L7.69232 15.5318C7.77067 15.6258 7.86879 15.7015 7.97969 15.7533C8.09059 15.8052 8.21156 15.832 8.33398 15.8318C8.52869 15.8322 8.71739 15.7643 8.86732 15.6401C8.9517 15.5701 9.02145 15.4842 9.07258 15.3873C9.1237 15.2903 9.1552 15.1842 9.16527 15.0751C9.17533 14.9659 9.16376 14.8559 9.13122 14.7512C9.09869 14.6465 9.04582 14.5493 8.97565 14.4651L5.95065 10.8318H15.834C16.055 10.8318 16.267 10.744 16.4232 10.5877C16.5795 10.4314 16.6673 10.2195 16.6673 9.99844C16.6673 9.77743 16.5795 9.56546 16.4232 9.40918C16.267 9.2529 16.055 9.16511 15.834 9.16511Z"
                    fill="black"
                  />
                </svg>
                Back
              </Link>

              <Link href="/">
                <img
                  src="/image/logo-black.png"
                  alt="UXE Logo Black"
                  className="max-h-[36px] w-auto"
                />
              </Link>
              <div></div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="bg-white">
          <div className="max-w-[1440px] mx-auto overflow-hidden">
            <div className="grid grid-cols-2 max-xl:grid-cols-1 min-h-screen">
              <div className="bg-black p-[max(20px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(96_/_1440)),_96px))] flex flex-col gap-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] items-start text-white">
                <div className="relative rounded-[12px] overflow-hidden">
                  <img
                    alt="Contact Us Background"
                    src={cmsSettings?.general?.hero_contact?.url}
                  />

                  <div className="flex flex-col gap-[12px] absolute left-[20px] bottom-[14px]">
                    <div className="p-[10px] rounded-full backdrop-blur-[2px] bg-[#BEBEBE40] text-white flex items-center gap-[6px]">
                      <div className="p-[4px] bg-[#FFFFFF] rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1034_26334)">
                            <path
                              d="M5.00065 0.183594L9.16732 1.64193V5.00026C9.16732 6.71984 8.1119 7.92193 7.12732 8.66818C6.53327 9.11443 5.88151 9.47816 5.18982 9.74943C5.17776 9.75409 5.16568 9.75867 5.15357 9.76318L5.14315 9.76693L5.14023 9.76776L5.13898 9.76818C5.13857 9.76818 5.13815 9.76818 5.00065 9.37526L4.86273 9.76859L4.86107 9.76776L4.85815 9.76693L4.84773 9.76276C4.79208 9.74221 4.7368 9.72067 4.6819 9.69818C4.03794 9.43263 3.4303 9.08639 2.87357 8.66776C1.89023 7.92234 0.833984 6.72026 0.833984 5.00068V1.64193L5.00065 0.183594ZM5.00065 9.37526L4.86273 9.76859L5.00065 9.81693L5.13857 9.76859L5.00065 9.37526ZM5.00065 8.92859L5.0044 8.92693C5.58102 8.68881 6.1252 8.37871 6.62398 8.00401C7.51482 7.32943 8.33398 6.34318 8.33398 5.00026V2.23359L5.00065 1.06693L1.66732 2.23359V5.00026C1.66732 6.34318 2.48648 7.32859 3.37732 8.00443C3.87719 8.37985 4.42266 8.69038 5.00065 8.92859ZM7.53065 3.47651L4.5844 6.42276L2.81648 4.65526L3.40607 4.06568L4.58398 5.24443L6.94107 2.88734L7.53065 3.47651Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1034_26334">
                              <rect width="10" height="10" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <TextMedium label="Integrity" />
                    </div>
                    <div className="p-[10px] rounded-full backdrop-blur-[2px] bg-[#BEBEBE40] text-white flex items-center gap-[6px]">
                      <div className="p-[4px] bg-[#FFFFFF] rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1034_26334)">
                            <path
                              d="M5.00065 0.183594L9.16732 1.64193V5.00026C9.16732 6.71984 8.1119 7.92193 7.12732 8.66818C6.53327 9.11443 5.88151 9.47816 5.18982 9.74943C5.17776 9.75409 5.16568 9.75867 5.15357 9.76318L5.14315 9.76693L5.14023 9.76776L5.13898 9.76818C5.13857 9.76818 5.13815 9.76818 5.00065 9.37526L4.86273 9.76859L4.86107 9.76776L4.85815 9.76693L4.84773 9.76276C4.79208 9.74221 4.7368 9.72067 4.6819 9.69818C4.03794 9.43263 3.4303 9.08639 2.87357 8.66776C1.89023 7.92234 0.833984 6.72026 0.833984 5.00068V1.64193L5.00065 0.183594ZM5.00065 9.37526L4.86273 9.76859L5.00065 9.81693L5.13857 9.76859L5.00065 9.37526ZM5.00065 8.92859L5.0044 8.92693C5.58102 8.68881 6.1252 8.37871 6.62398 8.00401C7.51482 7.32943 8.33398 6.34318 8.33398 5.00026V2.23359L5.00065 1.06693L1.66732 2.23359V5.00026C1.66732 6.34318 2.48648 7.32859 3.37732 8.00443C3.87719 8.37985 4.42266 8.69038 5.00065 8.92859ZM7.53065 3.47651L4.5844 6.42276L2.81648 4.65526L3.40607 4.06568L4.58398 5.24443L6.94107 2.88734L7.53065 3.47651Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1034_26334">
                              <rect width="10" height="10" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <TextMedium label="Thorougness" />
                    </div>
                    <div className="p-[10px] rounded-full backdrop-blur-[2px] bg-[#BEBEBE40] text-white flex items-center gap-[6px]">
                      <div className="p-[4px] bg-[#FFFFFF] rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1034_26334)">
                            <path
                              d="M5.00065 0.183594L9.16732 1.64193V5.00026C9.16732 6.71984 8.1119 7.92193 7.12732 8.66818C6.53327 9.11443 5.88151 9.47816 5.18982 9.74943C5.17776 9.75409 5.16568 9.75867 5.15357 9.76318L5.14315 9.76693L5.14023 9.76776L5.13898 9.76818C5.13857 9.76818 5.13815 9.76818 5.00065 9.37526L4.86273 9.76859L4.86107 9.76776L4.85815 9.76693L4.84773 9.76276C4.79208 9.74221 4.7368 9.72067 4.6819 9.69818C4.03794 9.43263 3.4303 9.08639 2.87357 8.66776C1.89023 7.92234 0.833984 6.72026 0.833984 5.00068V1.64193L5.00065 0.183594ZM5.00065 9.37526L4.86273 9.76859L5.00065 9.81693L5.13857 9.76859L5.00065 9.37526ZM5.00065 8.92859L5.0044 8.92693C5.58102 8.68881 6.1252 8.37871 6.62398 8.00401C7.51482 7.32943 8.33398 6.34318 8.33398 5.00026V2.23359L5.00065 1.06693L1.66732 2.23359V5.00026C1.66732 6.34318 2.48648 7.32859 3.37732 8.00443C3.87719 8.37985 4.42266 8.69038 5.00065 8.92859ZM7.53065 3.47651L4.5844 6.42276L2.81648 4.65526L3.40607 4.06568L4.58398 5.24443L6.94107 2.88734L7.53065 3.47651Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1034_26334">
                              <rect width="10" height="10" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <TextMedium label="Fairness and Equality" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <TitleMedium
                    el="h2"
                    label="Solutions for Government and Business Environments"
                  />
                  <TextMedium label="We’ll answer anything you want to know about how our product works, and general advice on compliance and payroll." />
                </div>
              </div>
              <div className="p-[max(20px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(96_/_1440)),_96px))] flex flex-col gap-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] items-start">
                <div className="flex flex-col gap-[12px]">
                  <TitleMedium el="h2" label="Get Started with UXE" />
                  <TextLarge label="Want to work together, connect, or ask a burning question?" cls="max-w-none" />
                </div>
                <form action="" method="post"
                  className="grid grid-cols-2 w-full gap-[16px]"
                  >
                    <div>
                      <label htmlFor="contact_first_name"></label>
                      <input type="text" id="contact_first_name" className="p-[14px_12px] border border-[#0000001F] rounded-[12px] w-full text-[#787C91] ring-0 outline-none" placeholder="First name" />
                    </div>
                    <div>
                      <label htmlFor="contact_last_name"></label>
                      <input type="text" id="contact_last_name" className="p-[14px_12px] border border-[#0000001F] rounded-[12px] w-full text-[#787C91] ring-0 outline-none" placeholder="Last name" />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="contact_email"></label>
                      <input type="text" id="contact_email" className="p-[14px_12px] border border-[#0000001F] rounded-[12px] w-full text-[#787C91] ring-0 outline-none" placeholder="Email" />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="contact_phone"></label>
                      <input type="text" id="contact_phone" className="p-[14px_12px] border border-[#0000001F] rounded-[12px] w-full text-[#787C91] ring-0 outline-none" placeholder="Phone" />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="contact_partnership"></label>
                      <input type="text" id="contact_partnership" className="p-[14px_12px] border border-[#0000001F] rounded-[12px] w-full text-[#787C91] ring-0 outline-none" placeholder="Partnership" />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="content"></label>
                      <textarea rows={6} id="content" className="p-[14px_12px] border border-[#0000001F] rounded-[12px] w-full text-[#787C91] ring-0 outline-none" placeholder="Lest us know what you kind of partnership"/>
                    </div>
                    <TextSmall label="By submitting this form, you agree that we will contact you in relation to our product and service." cls="opacity-75 max-w-none col-span-2" />
                    <button type="submit"
                      className="w-fit text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full bg-black hover:opacity-70"
                      style={{
                        border: "1px solid rgba(207, 207, 207, 0.25)",
                      }}
                    >
                      Get in touch
                    </button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Head>
        <title>{`Contact Us | ${CMS_NAME}`}</title>
      </Head>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const settings = await getSettings();
  return {
    props: { settings },
    revalidate: 10,
  };
};
