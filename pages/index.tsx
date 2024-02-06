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

export default function Index({ cmsSetting }) {
  const {
    clients,
    visionMission,
    features,
    testimonials,
    products,
    posts,
    solutions,
    settingBackground,
    footerSettings
  } = cmsSetting;
  return (
    <Layout data={{footer: footerSettings }}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Hero
        label="Trusted by hundreds of organizations"
        data={{ clients, hero_url: settingBackground?.hero_home?.url }}
      />
      <VisionMission data={visionMission} />
      <Feature data={features} />
      <Solution data={solutions} />
      <Product data={products} />
      <Testimonial data={testimonials} settings={{ show: 3 }} />
      <GetStarted label="Get started with UXE" />
      <Post data={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const cmsSetting = await getSettings();
  return {
    props: { cmsSetting },
    revalidate: 10,
  };
};
