import Head from "next/head";
import { GetStaticProps } from "next";
import { CMS_NAME } from "../lib/constants";
import { getSettings } from "../lib/new-api";
import { TitleMedium } from "@/ui/title/title-medium/TitleMedium";
import { TextMedium } from "@/ui/text/text-medium/TextMedium";
import { TextLarge } from "@/ui/text/text-large/TextLarge";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Meta } from "@/ui/base/meta/Meta";

export default function ContactUsSection({ options }) {
  const { backgroundOptions, contactOptions } = options;

  const formBlock = useRef(null);
  const formMessage = useRef(null);

  useEffect(() => {
    const form = formBlock.current.querySelector("form");
    formBlock.current.querySelectorAll("br").forEach((item) => item.remove());
    const formID = formBlock.current.querySelector(
      'input[name="_wpcf7"]'
    ).value;
    form.action = `https://api.uxe.ai/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback`;
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent default form submission

      try {
        const formData = new FormData(form);

        const response = await fetch(form.action, {
          method: "POST",
          headers: {
            Accept: "application/json",
            // No need to set Content-Type for FormData as it is automatically set
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        formMessage.current.classList.remove("hidden");
        formMessage.current.innerText = responseData.message;

        // Reset the form after successful submission
        form.reset();
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, [formBlock, formMessage]);

  return (
    <>
      <Meta />
      <Head>
        <title>{`Contact Us | ${CMS_NAME}`}</title>
      </Head>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="59"
                  height="24"
                  viewBox="0 0 59 24"
                  fill="none"
                >
                  <path
                    d="M25.8309 12.8827L20.2843 18.7939C20.2022 18.8812 20.158 18.9975 20.1615 19.1173C20.165 19.2371 20.216 19.3506 20.3031 19.4329L22.9537 21.931C23.0408 22.0132 23.1571 22.0575 23.2769 22.0542C23.3967 22.0508 23.5102 22.0001 23.5927 21.9131L29.3522 15.8127C29.4313 15.7289 29.4755 15.6179 29.4757 15.5026V8.3799C29.4757 8.26428 29.4315 8.15303 29.3522 8.06892L23.0372 2.08703C22.9549 2.00007 22.8414 1.94933 22.7218 1.94598C22.6021 1.94262 22.486 1.98692 22.399 2.06914L20.0713 4.53994C20.0282 4.58069 19.9934 4.62955 19.9692 4.68374C19.9449 4.73793 19.9315 4.79637 19.9299 4.85573C19.9282 4.91508 19.9383 4.97418 19.9595 5.02964C19.9807 5.0851 20.0126 5.13583 20.0534 5.17894L25.8309 10.6368C25.9103 10.7206 25.9545 10.8316 25.9544 10.947V12.5734C25.954 12.6885 25.9098 12.799 25.8309 12.8827Z"
                    fill="#19191B"
                  />
                  <path
                    d="M34.4838 12.8827L40.0304 18.7939C40.1126 18.8811 40.157 18.9973 40.1536 19.1171C40.1502 19.2369 40.0995 19.3505 40.0125 19.4329L37.3619 21.931C37.2747 22.0132 37.1585 22.0575 37.0387 22.0542C36.9189 22.0508 36.8053 22.0001 36.7229 21.9131L30.9625 15.8127C30.8836 15.7288 30.8398 15.6178 30.8398 15.5026V8.3799C30.8399 8.26428 30.884 8.15303 30.9634 8.06892L37.2784 2.08703C37.3607 2.00007 37.4741 1.94933 37.5938 1.94598C37.7134 1.94262 37.8295 1.98692 37.9166 2.06914L40.2442 4.53994C40.3312 4.62235 40.382 4.73593 40.3853 4.85574C40.3887 4.97554 40.3444 5.09178 40.2621 5.17894L34.4838 10.6368C34.4044 10.7206 34.3602 10.8316 34.3603 10.947V12.5734C34.3608 12.6885 34.4049 12.799 34.4838 12.8827Z"
                    fill="#19191B"
                  />
                  <path
                    d="M45.4684 8.51189V16.8129C45.4684 16.9286 45.5144 17.0396 45.5962 17.1214C45.678 17.2032 45.789 17.2491 45.9047 17.2491H56.8597C56.9754 17.2491 57.0863 17.2951 57.1681 17.3769C57.2499 17.4587 57.2959 17.5697 57.2959 17.6854V20.3658C57.2959 20.423 57.2846 20.4797 57.2627 20.5326C57.2408 20.5854 57.2086 20.6335 57.1681 20.6739C57.1276 20.7144 57.0795 20.7464 57.0266 20.7682C56.9736 20.7901 56.9169 20.8012 56.8597 20.8011H43.3129C42.8939 20.8011 42.492 20.6347 42.1956 20.3385C41.8993 20.0423 41.7326 19.6405 41.7324 19.2215V6.10073C41.7326 5.68171 41.8993 5.27993 42.1956 4.98372C42.492 4.68751 42.8939 4.52112 43.3129 4.52112H56.8597C56.9754 4.52112 57.0863 4.56708 57.1681 4.64888C57.2499 4.73069 57.2959 4.84165 57.2959 4.95734V7.63688C57.2959 7.75258 57.2499 7.86353 57.1681 7.94534C57.0863 8.02715 56.9754 8.07311 56.8597 8.07311H45.9047C45.8472 8.07311 45.7902 8.08447 45.7371 8.10655C45.684 8.12864 45.6358 8.161 45.5953 8.20177C45.5548 8.24255 45.5227 8.29095 45.5009 8.34417C45.4791 8.39739 45.4681 8.45439 45.4684 8.51189Z"
                    fill="#19191B"
                  />
                  <path
                    d="M55.166 14.0979V11.2275C55.166 11.0393 55.0134 10.8867 54.8252 10.8867H47.2697C47.0815 10.8867 46.9289 11.0393 46.9289 11.2275V14.0979C46.9289 14.2861 47.0815 14.4387 47.2697 14.4387H54.8252C55.0134 14.4387 55.166 14.2861 55.166 14.0979Z"
                    fill="#19191B"
                  />
                  <path
                    d="M18.5641 4.89154V19.1566C18.5641 19.5755 18.3977 19.9773 18.1014 20.2735C17.8052 20.5698 17.4034 20.7362 16.9845 20.7362H9.42555C7.32408 20.7362 5.30868 19.9014 3.82272 18.4154C2.33676 16.9294 1.50195 14.9141 1.50195 12.8126V4.88898C1.50195 4.77329 1.54791 4.66233 1.62972 4.58052C1.71153 4.49872 1.82248 4.45276 1.93818 4.45276H4.79919C4.91489 4.45276 5.02584 4.49872 5.10765 4.58052C5.18946 4.66233 5.23542 4.77329 5.23542 4.88898V12.8586C5.23542 13.9432 5.66628 14.9834 6.43323 15.7504C7.20018 16.5173 8.24039 16.9482 9.32502 16.9482H14.3782C14.4375 16.9482 14.4962 16.9365 14.5509 16.9138C14.6056 16.8911 14.6554 16.8578 14.6972 16.8159C14.7391 16.7739 14.7723 16.7242 14.7949 16.6694C14.8175 16.6146 14.8291 16.5559 14.8289 16.4966V4.89154C14.8289 4.77584 14.8749 4.66489 14.9567 4.58308C15.0385 4.50127 15.1495 4.45531 15.2652 4.45531H18.127C18.1844 4.4552 18.2412 4.4664 18.2942 4.48827C18.3472 4.51015 18.3954 4.54226 18.436 4.58278C18.4766 4.6233 18.5088 4.67142 18.5308 4.7244C18.5528 4.77738 18.5641 4.83418 18.5641 4.89154Z"
                    fill="#19191B"
                  />
                </svg>
                {/* <img
                  src="/image/logo-black.png"
                  alt="UXE Logo Black"
                  className="max-h-[36px] w-auto"
                /> */}
              </Link>
              <div></div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="bg-white">
          <div className="max-w-[1440px] mx-auto overflow-hidden">
            <div className="grid grid-cols-2 max-md:grid-cols-1 min-h-screen">
              <div className="bg-black p-[max(20px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(96_/_1440)),_96px))] flex flex-col gap-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] items-start text-white">
                <div className="relative rounded-[12px] overflow-hidden">
                  <img
                    alt="Contact Us Background"
                    src={backgroundOptions?.hero_contact?.url}
                  />

                  <div className="flex flex-col items-start gap-[12px] absolute left-[20px] bottom-[14px]">
                    <div className="p-[10px] rounded-full backdrop-blur-[2px] bg-[#BEBEBE40] text-white flex items-center gap-[6px]">
                      <div className="p-[4px] bg-[#FFFFFF] rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1034_26334)">
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
                          <g clipPath="url(#clip0_1034_26334)">
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
                          <g clipPath="url(#clip0_1034_26334)">
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
                  <TextLarge
                    label="Want to work together, connect, or ask a burning question?"
                    cls="max-w-none"
                  />
                </div>
                <div
                  className="form-contact"
                  ref={formBlock}
                  dangerouslySetInnerHTML={{ __html: contactOptions.html }}
                ></div>
                <p
                  ref={formMessage}
                  className="hidden p-[10px] border-[2px] border-black w-full"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const options = await getSettings();
  return {
    props: { options },
    revalidate: 10,
  };
};
