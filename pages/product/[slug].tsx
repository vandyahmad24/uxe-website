import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { TextSmall } from "../../stories/ui/text/text-small/TextSmall";
import { TitleMedium } from "../../stories/ui/title/title-medium/TitleMedium";
import { CMS_NAME } from "../../lib/constants";
import {
  getAllProductsWithSlug,
  getProductAndMoreProducts,
} from "../../lib/api";
import { useEffect } from "react";
import { Layout } from "@/ui/base/layout/Layout";

export default function Product({ product }) {
  useEffect(() => {
    window.scroll(0, 1);

    const handleScrollNav = () => {
      const scrollY = window.scrollY;
      
      if (scrollY <= 0){
        window.scrollY = 2;
      }
    }

    window.addEventListener('scroll', handleScrollNav);

    return () => {
      window.removeEventListener('scroll', handleScrollNav);
    }
  })

  const router = useRouter();

  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Head>
        <title>{`${CMS_NAME} | ${product?.title}`}</title>
      </Head>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(170_/_1440)),_170px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="text-center flex flex-col items-center gap-[10px]">
            <TextSmall
              label={product?.productCategorys.edges[0]?.node.name}
              cls="uppercase text-[#676767]"
            />
            <TitleMedium label={product?.title} />
          </div>
          <div>
            <img
              src={product?.featuredImage?.node?.sourceUrl}
              alt={product?.title}
              className="mx-auto"
            />
            <div dangerouslySetInnerHTML={{ __html: product?.content }}></div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(20px,_min(calc(100vw_*_(60_/_1440)),_60px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
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
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getProductAndMoreProducts(params?.slug);

  return {
    props: {
      product: data.product,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllProductsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/product/${node.slug}`) || [],
    fallback: true,
  };
};
