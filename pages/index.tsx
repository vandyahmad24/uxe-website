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
import { AboutUs } from "@/ui/section/about-us/AboutUs";

export default function Index({ options }) {
  const {
    clientOptions,
    visionAndMissionOptions,
    featureOptions,
    testimonialOptions,
    products,
    posts,
    solutionOptions,
    backgroundOptions,
    footerOptions,
  } = options;

  return (
    <Layout data={{ footer: footerOptions }}>
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
      <AboutUs text=""/>
      <VisionMission data={visionAndMissionOptions} />
      <Feature data={featureOptions} />
      <Solution data={solutionOptions} />
      <Product data={products} settings={{ show_title: true }} />
      <Testimonial data={testimonialOptions} settings={{ show: 3 }} />
      <GetStarted label="Get started with UXE" />
      {/* <Post data={posts} /> */}
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
