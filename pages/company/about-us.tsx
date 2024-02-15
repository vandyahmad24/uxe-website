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
    footerOptions
  } = options;

  const handleReadMore = () => {
    setRead(!isRead)
  }

  return (
    <Layout data={{ footer: footerOptions }}>
      <Head>
        <title>{`${CMS_NAME} | About Us`}</title>
      </Head>
      <Header
        title="Smart Solutions for Smart Cities"
        subtitle="COMPANY"
        description=""
        video_url={backgroundOptions?.hero_about_us?.url}
      />
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="max-w-[878px] flex flex-col gap-[60px]">
            <div className="flex flex-col gap-[20px]">
              <p ref={readMoreRef} className={`text-huge ${isRead ? '' : 'line-clamp-[8]'}`} >
                Established in 2018, UXE Security Solutions proudly holds the position of being the premier smart business support and a reliable security provider in MENA region.
                <br />
                <br />
                Committed to delivering services of the highest professional quality, we distinguish ourselves by adopting a unique strategy grounded in Smart Cutting-edge, Innovative Technology.
                <br />
                <br />
                With a considerable client base exceeding 750 clients, we navigate a dynamic and culturally rich environment, embodying the core values of reliability and professionalism.
                <br />
                <br />
                At UXE, we specialize in offering comprehensive and tailored smart security solutions, designed to meet the diverse needs of various sectors and industries.
                <br />
                <br />
                Our ecosystem of products and services allows clients to address multiple security requirements within a singular, integrated framework.
                <br />
                <br />
                Having undergone significant diversification, we have emerged as a pioneer in smart city technologies, AI Solutions, Security services and audits.
                <br />
                <br />
                As a key player in these sectors, UXE has evolved into the foremost business support and tech company provider in the UAE.
                <br />
                <br />
                We proudly carry forward the legacy set by the leaders of the UAE, delivering top-notch security solutions finely tuned to the diverse needs of our clients.
                <br />
                <br />
                Across a wide spectrum of industries, we extend our security expertise to educational institutions, hospitality sector, financial institutions, warehouse and logistics centres, retail, shopping malls, transportation, residential communities, cultural heritage sites, and amusement parks.
                <br />
                <br />
                Our wide range of solutions underlines our commitment to meeting distinct security demands across various industries.
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
                  3 Million
                </p>
                <span className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">
                  Users
                </span>
              </div>
              <div className="flex flex-col gap-[max(2px,_min(calc(100vw_*_(8_/_1440)),_8px))] pl-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] border-l border-[#0000000F]">
                <p className="text-[max(20px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                  6 K
                </p>
                <span className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">
                  Clients
                </span>
              </div>
              <div className="flex flex-col gap-[max(2px,_min(calc(100vw_*_(8_/_1440)),_8px))] pl-[max(12px,_min(calc(100vw_*_(20_/_1440)),_20px))] border-l border-[#0000000F]">
                <p className="text-[max(20px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[112%] -tracking-[.64px]">
                  15+
                </p>
                <span className="text-[max(12px,_min(calc(100vw_*_(14_/_1440)),_14px))] leading-[132%] -tracking-[.14px]">
                  Country
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
