import Head from "next/head";
import { GetStaticProps } from "next";
import { getAllProductForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import { getSettings } from "../lib/new-api";
import Link from "next/link";
import { TextLarge } from "@/ui/text/text-large/TextLarge";
import { Testimonial } from "@/ui/component/testimonial/Testimonial";
import { Layout } from "@/ui/base/layout/Layout";
import { Header } from "@/ui/base/header/Header";

export default function ProductSection({ products, settings }) {
  const { testimonials, cmsSettings } = settings;

  return (
    <Layout>
      <Head>
        <title>{`Products | ${CMS_NAME}`}</title>
      </Head>
      <Header
        title="Discover Innovation in Smart Security Products"
        subtitle="OUR PRODUCT"
        description="Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments"
        video_url={cmsSettings?.general?.hero_product?.url}
      />
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))_48px_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="flex flex-col gap-[48px]">
            <div className="grid grid-cols-3 gap-[48px_20px] max-xl:grid-cols-2 max-md:grid-cols-1">
              {products.edges.map(({ node }, index) => (
                <div key={index} className="flex flex-col gap-[20px]">
                  <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={node?.featuredImage?.node?.sourceUrl}
                        alt={node?.title}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <Link
                      href={"/product/" + node?.slug}
                      className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70"
                    >
                      {node?.title}
                    </Link>
                    <TextLarge
                      label={node?.excerpt
                        .replace("<p>", "")
                        .replace("</p>", "")}
                      cls="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]"
                    />
                  </div>
                </div>
              ))}
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
      <Testimonial data={testimonials} settings={{ show: 3 }} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProductForHome();
  const settings = await getSettings();
  return {
    props: { products, settings },
    revalidate: 10,
  };
};
