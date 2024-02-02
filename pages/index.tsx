import Head from "next/head";
import { GetStaticProps } from "next";
import { CMS_NAME } from "../lib/constants";
import { getSettings } from "../lib/new-api";

/* Components */
import { Hero } from "@/ui/base/hero/Hero";
import { VisionMission } from "@/ui/component/vision-mission/VisionMission";
import { Feature } from "@/ui/component/feature/Feature";
import { Solution } from "@/ui/component/solution/Solution";
import { Product } from "@/ui/component/product/Product";
import { Testimonial } from "@/ui/component/testimonial/Testimonial";
import { Post } from "@/ui/component/post/Post";
import { GetStarted } from "@/ui/component/get-started/GetStarted";
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
    cmsSettings: { general },
  } = cmsSetting;
  return (
    <Layout>
      <Head>
        <title>{`UXE Security Solutions L.L.C`}</title>
      </Head>
      <Hero
        label="Trusted by hundreds of organizations"
        data={{ clients, hero_url: general.hero_home.url }}
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
