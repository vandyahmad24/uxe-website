import Head from "next/head";
import { GetStaticProps } from "next";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import { getSettings } from "../lib/new-api";
import Link from "next/link";
import { TextLarge } from "@/ui/text/text-large/TextLarge";
import { Testimonial } from "@/ui/component/testimonial/Testimonial";
import { Layout } from "@/ui/base/layout/Layout";
import { Header } from "@/ui/base/header/Header";

export default function BlogSection({ posts, settings }) {
  const { testimonials, cmsSettings } = settings;

  return (
    <Layout>
      <Head>
        <title>{`Blog | ${CMS_NAME}`}</title>
      </Head>
      <Header
        title="Your Daily Dose of Tech News"
        subtitle="Blog"
        description="Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments"
        video_url={cmsSettings?.general?.hero_blog?.url}
      />
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))_48px_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col items-start gap-[max(8px,_min(calc(100vw_*_(12_/_1440)),_12px))] text-center">
              <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px]">
              Lastest blog posts
              </h2>
              <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] leading-[132%] -tracking-[.16px]">
              Tool and strategies modern teams need to help their companies grow.
              </p>
            </div>
            {posts.edges.length > 0 && (
              <>
                <div className="grid grid-cols-2 gap-[48px_20px] max-md:grid-cols-1">
                  {posts.edges.slice(0, posts.edges.length > 1 ? 2 : 1).map(({ node }, index) => (
                    <div
                      key={index}
                      className="rounded-[12px] border border-[#0000000F] overflow-hidden"
                    >
                      <img
                        src={
                          node.featuredImage?.node.sourceUrl
                            ? node.featuredImage?.node.sourceUrl
                            : "https://fakeimg.pl/770x450"
                        }
                        alt={node.title}
                        className="max-h-[max(140px,_min(calc(100vw_*_(240_/_1440)),_240px))] w-full object-cover"
                      />
                      <div className="p-[24px] flex flex-col gap-[32px]">
                        <div className="flex flex-col items-start justify-start gap-[12px]">
                          <span className="text-[14px] text-[#19191B80] font-medium leading-[132%] p-[4px_12px] border border-[#D9D9D9] rounded-full">
                            {node.categories.edges[0].node.name}
                          </span>
                          <Link
                            href={"/post/" + node.slug}
                            className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70 line-clamp-2"
                          >
                            {node.title}
                          </Link>
                          <TextLarge
                            label={node?.excerpt
                              .replace("<p>", "")
                              .replace("</p>", "")}
                            cls="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] opacity-50 line-clamp-2"
                          />
                        </div>
                        <Link
                          href={"/post/" + node.slug}
                          className="flex items-center gap-[8px] hover:opacity-70"
                        >
                          <span className="text-[16px] text-[#19191B] font-medium leading-[132%] -tracknig-[.16px]">
                            Read post
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M5.83325 14.1666L14.1666 5.83325M14.1666 5.83325H5.83325M14.1666 5.83325V14.1666"
                              stroke="#19191B"
                              strokeWidth="1.67"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                {posts.edges.length > 2 && (
                  <div className="grid grid-cols-3 gap-[48px_20px] max-xl:grid-cols-2 max-md:grid-cols-1">
                    {posts.edges.slice(2).map(({ node }, index) => (
                      <div
                        key={index}
                        className="rounded-[12px] border border-[#0000000F] overflow-hidden"
                      >
                        <img
                          src={
                            node.featuredImage?.node.sourceUrl
                              ? node.featuredImage?.node.sourceUrl
                              : "https://fakeimg.pl/770x450"
                          }
                          alt={node.title}
                          className="max-h-[max(140px,_min(calc(100vw_*_(240_/_1440)),_240px))] w-full object-cover"
                        />
                        <div className="p-[24px] flex flex-col gap-[32px]">
                          <div className="flex flex-col items-start justify-start gap-[12px]">
                            <span className="text-[14px] text-[#19191B80] font-medium leading-[132%] p-[4px_12px] border border-[#D9D9D9] rounded-full">
                              {node.categories.edges[0].node.name}
                            </span>
                            <Link
                              href={"/post/" + node.slug}
                              className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70 line-clamp-2"
                            >
                              {node.title}
                            </Link>
                            <TextLarge
                              label={node?.excerpt
                                .replace("<p>", "")
                                .replace("</p>", "")}
                              cls="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] opacity-50 line-clamp-2"
                            />
                          </div>
                          <Link
                            href={"/post/" + node.slug}
                            className="flex items-center gap-[8px] hover:opacity-70"
                          >
                            <span className="text-[16px] text-[#19191B] font-medium leading-[132%] -tracknig-[.16px]">
                              Read post
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M5.83325 14.1666L14.1666 5.83325M14.1666 5.83325H5.83325M14.1666 5.83325V14.1666"
                                stroke="#19191B"
                                strokeWidth="1.67"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
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
  const posts = await getAllPostsForHome(false);
  const settings = await getSettings();
  return {
    props: { posts, settings },
    revalidate: 10,
  };
};
