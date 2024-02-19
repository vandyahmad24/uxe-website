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
import { useEffect, useRef } from "react";
import { Layout } from "@/ui/base/layout/Layout";
import { GetStarted } from "@/ui/section/get-started/GetStarted";
import { getSettings } from "lib/new-api";

export default function Product({ product, options }) {
  const productContent = useRef(null);
  useEffect(() => {
    productContent.current.querySelectorAll("img").forEach((el) => {
      // Modify the src attribute
      const currentSrc = el.src;
      let newSrc;
      newSrc = currentSrc.replace(
        /^(?:https?:)?\/\/[^/]+/,
        "https://api.uxe.ai"
      );
      if (currentSrc.startsWith("/")) {
        newSrc = "https://api.uxe.ai" + currentSrc;
      }
      el.src = newSrc;

      // Modify the srcset attribute
      const currentSrcset = el.getAttribute("srcset");
      if (currentSrcset) {
        let newSrcset;
        newSrcset = currentSrcset.replace(
          /(?:https?:)?\/\/[^/]+/g,
          "https://api.uxe.ai"
        );
        newSrcset = currentSrcset
          .split(",")
          .map((src) => {
            const trimmedSrc = src.trim();
            return trimmedSrc.startsWith("/")
              ? "https://api.uxe.ai" + trimmedSrc
              : trimmedSrc;
          })
          .join(",");
        el.setAttribute("srcset", newSrcset);
      }
    });

    window.scroll(0, 1);

    const handleScrollNav = () => {
      const scrollY = window.scrollY;

      if (scrollY <= 0) {
        window.scrollY = 2;
      }
    };

    window.addEventListener("scroll", handleScrollNav);

    return () => {
      window.removeEventListener("scroll", handleScrollNav);
    };
  });

  const router = useRouter();

  if (!router.isFallback && !product?.slug && !options?.footerOptions) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout data={{ footer: options?.footerOptions }}>
      <Head>
        <title>{`${CMS_NAME} | ${product?.title}`}</title>
      </Head>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(100_/_1440)),_100px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))_0_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="flex flex-col gap-[40px] mt-[20px]">
            <div className="text-center flex flex-col items-center gap-[10px]">
              <TextSmall
                label={product?.productCategorys?.edges[0]?.node?.name}
                cls="uppercase text-[#676767]"
              />
              <TitleMedium label={product?.title} />
            </div>
            <div className="flex flex-col gap-[20px]">
              <img
                src={product?.featuredImage?.node?.fullPathUrl}
                alt={product?.title}
                className="mx-auto max-h-[max(300px,_min(calc(100vw_*_(600_/_1440)),_600px))] w-full object-cover object-top rounded-[12px]"
              />
              <div
                ref={productContent}
                dangerouslySetInnerHTML={{ __html: product?.content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <GetStarted
        data={{ label:"Get started with UXE" }}
        custom={{ gtm_reference: "currentPage", template: 1, isPadding: true }}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getProductAndMoreProducts(params?.slug);
  const options = await getSettings();
  return {
    props: {
      product: data.product,
      options,
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
