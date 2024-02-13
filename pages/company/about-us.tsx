import Head from "next/head";
import { GetStaticProps } from "next";
import { Layout } from "@/ui/base/layout/Layout";
import { CMS_NAME } from "../../lib/constants";
import { Header } from "@/ui/section/header/Header";
import { getSettings } from "lib/new-api";
import { Feature } from "@/ui/section/feature/Feature";
import { Testimonial } from "@/ui/section/testimonial/Testimonial";
import { GetStarted } from "@/ui/section/get-started/GetStarted";
import { useRef, useState } from "react";

export default function ProductSection({ options }) {
  const readMoreRef = useRef(null);
  const [isRead, setRead] = useState(false);
  const {
    featureOptions,
    testimonialOptions,
    backgroundOptions,
    visionAndMissionOptions: { mission, vision },
  } = options;

  const handleReadMore = () => {
    setRead(!isRead)
  }

  return (
    <Layout>
      <Head>
        <title>{`About Us | ${CMS_NAME}`}</title>
      </Head>
      <Header
        title="Multiple services to ensure the safety"
        subtitle="COMPANY"
        description="Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments"
        video_url={backgroundOptions?.hero_about_us?.url}
      />
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="max-w-[878px] flex flex-col gap-[60px]">
            <div className="flex flex-col gap-[20px]">
              <p ref={readMoreRef} className={`text-[max(20px,_min(calc(100vw_*_(36_/_1440)),_36px))] font-medium leading-[112%] -tracking-[.72px] ${isRead ? '' : 'line-clamp-6'}`} >
                Investment is an private equity fund with a mandate to invest
                sustainability in security and safety infrastructure.
                <br />
                <br />
                We aspire to ensure that all of our investments are focus driven
                to enhance the security industry globally focus driven to enhance
                the security industry globally.
                <br />
                <br />
                Investment is an private equity fund with a mandate to invest
                sustainability in security and safety infrastructure.
                <br />
                <br />
                We aspire to ensure that all of our investments are focus driven
                to enhance the security industry globally focus driven to enhance
                the security industry globally.
              </p>
              <div className="flex justify-left cursor-pointer" >
                <div
                  onClick={handleReadMore}
                  className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full bg-[#19191B] backdrop-blur-[2px] border border-[#F4F5F6] hover:opacity-70"
                >
                  {!isRead ? 'Read more' : 'Read less'}
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] flex-wrap">
              <div className="flex flex-col gap-[max(2px,_min(calc(100vw_*_(8_/_1440)),_8px))] pl-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] border-l border-[#0000000F]">
                <p className="text-[max(20px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                  150+
                </p>
                <span className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">
                  Countries
                </span>
              </div>
              <div className="flex flex-col gap-[max(2px,_min(calc(100vw_*_(8_/_1440)),_8px))] pl-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] border-l border-[#0000000F]">
                <p className="text-[max(20px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                  500K+
                </p>
                <span className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">
                  Business Users
                </span>
              </div>
              <div className="flex flex-col gap-[max(2px,_min(calc(100vw_*_(8_/_1440)),_8px))] pl-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] border-l border-[#0000000F]">
                <p className="text-[max(20px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                  3 Million
                </p>
                <span className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">
                  Personal User
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[0_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="grid grid-cols-2 gap-[20px] max-lg:grid-cols-1">
            <div className="bg-[#000000] p-[max(18px,_min(calc(100vw_*_(20_/_1440)),_20px))] rounded-[12px] text-white min-h-[max(446px,_min(calc(100vw_*_(475_/_1440)),_475px))] flex flex-col justify-between">
              <div className="flex flex-col gap-[max(28px,_min(calc(100vw_*_(32_/_1440)),_32px))]">
                <span className="text-[max(20px,_min(calc(100vw_*_(24_/_1440)),_24px))] font-medium leading-[112%] -tracking-[.24px]">
                  Vision
                </span>
                <p className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                  {vision?.title}
                </p>
              </div>
              <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] leading-[132%] -tracking-[.16px]">
                {vision?.description}
              </p>
            </div>
            <div className="bg-[#365EFF] p-[max(18px,_min(calc(100vw_*_(20_/_1440)),_20px))] rounded-[12px] text-white min-h-[max(446px,_min(calc(100vw_*_(475_/_1440)),_475px))] flex flex-col justify-between">
              <div className="flex flex-col gap-[max(28px,_min(calc(100vw_*_(32_/_1440)),_32px))]">
                <span className="text-[max(20px,_min(calc(100vw_*_(24_/_1440)),_24px))] font-medium leading-[112%] -tracking-[.24px]">
                  Mission
                </span>
                <p className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                  {mission?.title}
                </p>
              </div>
              <p className="text-[max(12px,_min(calc(100vw_*_(16_/_1440)),_16px))] leading-[132%] -tracking-[.16px]">
                {mission?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Feature data={featureOptions} />
      <GetStarted label="Get started with UXE" template={1} />
      <Testimonial data={testimonialOptions} settings={{ show: 3 }} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const options = await getSettings();
  return {
    props: { options },
    revalidate: 10,
  };
};
