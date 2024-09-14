import Head from "next/head";
import { GetStaticProps } from "next";
import { getSettings } from "../lib/new-api";

/* Components */

import { VisionMission } from "@/ui/section/vision-mission/VisionMission";
import { Feature } from "@/ui/section/feature/Feature";
import { Solution } from "@/ui/section/solution/Solution";
import { Product } from "@/ui/section/product/Product";
import { Testimonial } from "@/ui/section/testimonial/Testimonial";
import { Post } from "@/ui/section/post/Post";
import { GetStarted } from "@/ui/section/get-started/GetStarted";
import { Layout } from "@/ui/base/layout/Layout";
import { useRef, useState } from "react";
import { sendGTMEvent } from '@next/third-parties/google'
import { AboutUs } from "@/ui/section/about-us/AboutUs";
import Collaborative from "@/ui/section/collaborative/Collaborative";
import NewsEvent from '../stories/ui/section/news/News';
import { HeroImage } from "@/ui/section/hero/HeroImage";

export default function Index({ options }) {
  const readMoreRef = useRef(null);
  const [isRead, setRead] = useState(false);
  const currentPage = "HOMEPAGE";
  const {
    visionAndMissionOptions,
    featureOptions,
    testimonialOptions,
    products,
    solutionOptions,
    backgroundOptions,
    footerOptions,
    clientOptions,
    generalSettings
  } = options;

  const handleReadMore = () => {
    sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })
    setRead(!isRead)
  }

  return (
    <Layout data={{ general: generalSettings, footer: footerOptions }}>
      <Head>
        <title>{`${generalSettings?.title}`}</title>
      </Head>
      <HeroImage
        data={{
          clients: clientOptions,
          hero_url:"/image/slider1.png",
          title: "Trusted by hundreds of organizations",
        }}
        custom={{ gtm_reference: currentPage }}
      />
      <AboutUs
        data={{
          text: `
            Established in 2018, UXE Security Solutions proudly holds the
            position of being the premier smart business support and a
            reliable security provider in MENA region.
            <br />
            <br />
            Committed to delivering services of the highest professional
            quality, we distinguish ourselves by adopting a unique strategy
            grounded in Smart Cutting-edge, Innovative Technology.
            <br />
            <br />
            With a considerable client base exceeding 750 clients, we navigate
            a dynamic and culturally rich environment, embodying the core
            values of reliability and professionalism.
            <br />
            <br />
            At UXE, we specialize in offering comprehensive and tailored smart
            security solutions, designed to meet the diverse needs of various
            sectors and industries.
            <br />
            <br />
            Our ecosystem of products and services allows clients to address
            multiple security requirements within a singular, integrated
            framework.
            <br />
            <br />
            Having undergone significant diversification, we have emerged as a
            pioneer in smart city technologies, AI Solutions, Security
            services and audits.
            <br />
            <br />
            As a key player in these sectors, UXE has evolved into the
            foremost business support and tech company provider in the UAE.
            <br />
            <br />
            We proudly carry forward the legacy set by the leaders of the UAE,
            delivering top-notch security solutions finely tuned to the
            diverse needs of our clients.
            <br />
            <br />
            Across a wide spectrum of industries, we extend our security
            expertise to educational institutions, hospitality sector,
            financial institutions, warehouse and logistics centres, retail,
            shopping malls, transportation, residential communities, cultural
            heritage sites, and amusement parks.
            <br />
            <br />
            Our wide range of solutions underlines our commitment to meeting
            distinct security demands across various industries.
          `,
        }}
        custom={{ gtm_reference: currentPage }}
      />
      <VisionMission
        data={visionAndMissionOptions}
        custom={{ gtm_reference: currentPage }}
      />
      <Feature
        data={featureOptions}
        custom={{ gtm_reference: currentPage }}
      />
      <Solution
        data={solutionOptions}
        custom={{ gtm_reference: currentPage }}
      />
      <Product
        data={products}
        custom={{ gtm_reference: currentPage, show_title: true }}
      />

      <Collaborative/>

      <Testimonial
        data={testimonialOptions}
        custom={{ gtm_reference: currentPage, show: 3 }}
      />
      <GetStarted
        data={{ label:"Get started with UXE" }}
        custom={{ gtm_reference: currentPage }}
      />
      <NewsEvent/>
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
