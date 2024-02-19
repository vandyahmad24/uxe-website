import Head from "next/head";
import { GetStaticProps } from "next";
import { CMS_NAME } from "../lib/constants";
import { getSettings, getAllProduct } from "../lib/new-api";
import { Testimonial } from "@/ui/section/testimonial/Testimonial";
import { Layout } from "@/ui/base/layout/Layout";
import { Header } from "@/ui/section/header/Header";
import { Product } from "@/ui/section/product/Product";
import { GetStarted } from "@/ui/section/get-started/GetStarted";

export default function ProductSection({ products, options }) {
  const { testimonialOptions, backgroundOptions, footerOptions } = options;

  return (
    <Layout data={{ footer: footerOptions }}>
      <Head>
        <title>{`${CMS_NAME} | Products`}</title>
      </Head>
      <Header
        title="Discover Innovation in Smart Security Products"
        subtitle="OUR PRODUCT"
        description=""
        video_url={backgroundOptions?.hero_product?.url}
      />
      <Product
        data={products}
        custom={{ gtm_reference: "currentPage", show_title: true }}
      />
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
  const products = await getAllProduct();
  const options = await getSettings();
  return {
    props: { products, options },
    revalidate: 10,
  };
};
