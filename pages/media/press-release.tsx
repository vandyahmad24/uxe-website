


import Head from "next/head";
import { GetStaticProps } from "next";
import { Layout } from "@/ui/base/layout/Layout";
import { Hero2 } from "@/ui/section/hero2/Hero2";
import { getSettings } from "lib/new-api";


import NewsList from "@/ui/section/media/news";
import { ConnectWithUs } from "@/ui/section/get-started/ConnectWithUs";
import { PressReleaseCard } from "@/ui/section/media/oress-release";

export default function NewsSection({ options }) {
  const currentPage = "about-us";
  const {
    backgroundOptions,
    footerOptions,
    generalSettings,
    teamOptions
  } = options;

  let coreTeam = teamOptions.slice(0, 5) || [];

  
  const events = [
        {
          title: "Citywide IoT Integration Boosts Efficiency of Smart Security Solutions",
          date: "2023-12-02T10:00:00Z",
          location: "Dubai Tower Internationale",
          imageUrl: "/images/event1.jpg",
          link: "https://example.com/event1",
          author: "Wesley Luiten",
          authorImage: "/images/author.jpg",
          excerpt: "Smart cities can create a utopia of smooth infrastructure and upgraded efficiency, improving the quality of life..."
        },
        {
          title: "Next-Gen Facial Recognition Technology Implemented for Enhanced City Safety",
          date: "2023-12-02T10:00:00Z",
          location: "Dubai Tower Internationale",
          imageUrl: "/images/event2.jpg",
          link: "https://example.com/event2",
          author: "Wesley Luiten",
          authorImage: "/images/author.jpg",
          excerpt: "Smart cities can create a utopia of smooth infrastructure and upgraded efficiency, improving the quality of life..."
        }
      ];

  return (
    <Layout data={{ general: generalSettings, footer: footerOptions }}>
      <Head>
        <title>{`${generalSettings?.title} | About Us`}</title>
      </Head>
      <Hero2
        data={{
          title:"Multiple services to ensure the safety",
          subtitle:"COMPANY",
          description:"",
          image_url: backgroundOptions?.hero_about_us?.url,
          
        }}
        custom={{ gtm_reference: currentPage }}
      />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">News</h2>
        <p className="text-gray-600 mb-6">Explore the latest news and product updates from the UXE</p>
        <div>
          {events.map((event, index) => (
            <PressReleaseCard key={index} event={event} />
          ))}
        </div>
      </div>

     <div className="mb-12 ">
      <ConnectWithUs 
        data={{ label:"Connect with us" }}
        custom={{ gtm_reference: currentPage, template: 1 }}
      />
      </div>
     
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
