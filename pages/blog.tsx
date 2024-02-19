import Head from "next/head";
import { GetStaticProps } from "next";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import { getSettings } from "../lib/new-api";
import Link from "next/link";
import { TextLarge } from "@/ui/text/text-large/TextLarge";
import { Testimonial } from "@/ui/section/testimonial/Testimonial";
import { Layout } from "@/ui/base/layout/Layout";
import { Header } from "@/ui/section/header/Header";
import { GetStarted } from "@/ui/section/get-started/GetStarted";
import { useEffect, useRef, useState } from "react";

export default function BlogSection({ posts, options }) {
  const { testimonialOptions, backgroundOptions, footerOptions } = options;
  const [postData, setPosts] = useState([...posts.edges]);
  const [endCursor, setEndCursor] = useState(posts?.pageInfo?.endCursor || null);
  const [hasMorePosts, setHasMorePosts] = useState(posts?.pageInfo?.hasNextPage || null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (afterCursor) => {
    try {
      const newPosts = await getAllPostsForHome(false, afterCursor);
      setPosts([...postData, ...newPosts.edges]);
      setEndCursor(newPosts?.pageInfo?.endCursor ? newPosts?.pageInfo?.endCursor : "");
      setHasMorePosts(newPosts?.pageInfo?.hasNextPage)
      setLoading(false);
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  };

  const handleLoadMore = (event) => {
    event.preventDefault();
    setLoading(true);
    fetchPosts(endCursor);
  };

  return (
    <Layout data={{ footer: footerOptions }}>
      <Head>
        <title>{`${CMS_NAME} | Media Center`}</title>
      </Head>
      <Header
        title="Your Daily Dose of Tech News"
        subtitle="Media Center"
        description=""
        video_url={backgroundOptions?.hero_blog?.url}
      />
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))_48px_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col items-start gap-[max(8px,_min(calc(100vw_*_(12_/_1440)),_12px))] text-center">
              <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px]">
                Lastest blog posts
              </h2>
              <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] leading-[132%] -tracking-[.16px]">
                Tool and strategies modern teams need to help their companies
                grow.
              </p>
            </div>
            {postData.length > 0 && (
              <>
                <div className="grid grid-cols-2 gap-[48px_20px] max-md:grid-cols-1">
                  {postData
                    .slice(0, postData.length > 1 ? 2 : 1)
                    .map(({ node }, index) => (
                      <div
                        key={index}
                        className="rounded-[12px] border border-[#0000000F] overflow-hidden"
                      >
                        <img
                          src={
                            node.featuredImage?.node.fullPathUrl
                              ? node.featuredImage?.node.fullPathUrl
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
                {postData.length > 2 && (
                  <div className="grid grid-cols-3 gap-[48px_20px] max-xl:grid-cols-2 max-md:grid-cols-1">
                    {postData.slice(2).map(({ node }, index) => (
                      <div
                        key={index}
                        className="rounded-[12px] border border-[#0000000F] overflow-hidden"
                      >
                        <img
                          src={
                            node.featuredImage?.node.fullPathUrl
                              ? node.featuredImage?.node.fullPathUrl
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
                {hasMorePosts ? (
                  <div className="flex justify-center cursor-pointer" onClick={handleLoadMore}>
                    <div
                      className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full bg-[#19191B] backdrop-blur-[2px] border border-[#F4F5F6] hover:opacity-70"
                    >
                      {loading ? "Loading..." : "Load more"}
                    </div>
                  </div>
                ) : (
                  (postData.length > 6) && (
                    <div className="flex justify-center cursor-pointer">
                      <div
                        className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full bg-[#19191B] backdrop-blur-[2px] border border-[#F4F5F6] hover:opacity-70"
                      >
                        All posts loaded
                      </div>
                    </div>
                  )
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <GetStarted
        data={{ label:"Get started with UXE" }}
        custom={{ gtm_reference: "currentPage", template: 1 }}
      />
      <Testimonial
        data={testimonialOptions}
        custom={{ gtm_reference: "currentPage", show: 3 }}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsForHome(false);
  const options = await getSettings();
  return {
    props: { posts, options },
    revalidate: 10,
  };
};
