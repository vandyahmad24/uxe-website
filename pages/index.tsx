import Head from "next/head";
import { GetStaticProps } from "next";
import { CMS_NAME } from "../lib/constants";
import { getSettings } from "../lib/new-api";

/* Components */
import { Hero } from "@/ui/section/hero/Hero";
import { VisionMission } from "@/ui/section/vision-mission/VisionMission";
import { Feature } from "@/ui/section/feature/Feature";
import { Solution } from "@/ui/section/solution/Solution";
import { Product } from "@/ui/section/product/Product";
import { Testimonial } from "@/ui/section/testimonial/Testimonial";
import { Post } from "@/ui/section/post/Post";
import { GetStarted } from "@/ui/section/get-started/GetStarted";
import { Layout } from "@/ui/base/layout/Layout";
import { useRef, useState } from "react";

export default function Index({ options }) {
  const readMoreRef = useRef(null);
  const [isRead, setRead] = useState(false);
  const {
    clientOptions,
    visionAndMissionOptions,
    featureOptions,
    testimonialOptions,
    products,
    posts,
    solutionOptions,
    backgroundOptions,
    contactOptions,
  } = options;

  const handleReadMore = () => {
    setRead(!isRead)
  }

  return (
    <Layout data={{ footer: contactOptions }}>
      <Head>
        <title>{`${CMS_NAME}`}</title>
      </Head>
      <Hero
        label="Trusted by hundreds of organizations"
        data={{
          clients: clientOptions,
          hero_url: backgroundOptions?.hero_home?.url,
        }}
      />
      <div id="read-more-hero" className="bg-white">
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
      <VisionMission data={visionAndMissionOptions} />
      <Feature data={featureOptions} />
      <Solution data={solutionOptions} />
      <Product data={products} settings={{ show_title: true }} />
      <Testimonial data={testimonialOptions} settings={{ show: 3 }} />
      <GetStarted label="Get started with UXE" />
      <Post data={posts} />
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
