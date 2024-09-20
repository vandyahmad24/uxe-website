import Head from "next/head";
import { GetStaticProps } from "next";
import { Layout } from "@/ui/base/layout/Layout";
import { CMS_NAME } from "../../lib/constants";
import { Hero2 } from "@/ui/section/hero2/Hero2";
import { getSettings } from "lib/new-api";
import { Feature } from "@/ui/section/feature/Feature";
import { Testimonial } from "@/ui/section/testimonial/Testimonial";
import { GetStarted } from "@/ui/section/get-started/GetStarted";
import { VisionMission2 } from "@/ui/section/vision-mission-2/VisionMission2";
import { Leadership } from "@/ui/section/leadership/Leadership";
import { CEOMsgSection } from "@/ui/section/ceo/ceo";
import { AboutUsCompany } from "@/ui/section/about-us/AboutUsCompany";

export default function ProductSection({ options }) {
  const currentPage = "about-us";
  const {
    featureOptions,
    testimonialOptions,
    backgroundOptions,
    visionAndMissionOptions,
    footerOptions,
    generalSettings,
    teamOptions
  } = options;

  let coreTeam = teamOptions.slice(0, 5) || [];

  
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
      <AboutUsCompany
        data={{
          text: `
            Investment is an private equity fund with a mandate to <br/>
            invest sustainability in security and safety infrastructure.
            <br />
            <br />
            We aspire to ensure that all of our investments are focus 
            <br />
            driven to enhance the security industry globally focus
            <br/>
            driven to enhance the security industry globally.
          `,
        }}
        custom={{ gtm_reference: currentPage }}
      />
      <VisionMission2
        data={visionAndMissionOptions}
        custom={{ gtm_reference: currentPage }}
      />
      <Feature
        data={featureOptions}
        custom={{ gtm_reference: currentPage }}
      />

      <CEOMsgSection/>


      <Leadership
        data={coreTeam}
        custom={{ gtm_reference: currentPage }}
      />
      <br></br>
      
      <GetStarted
        data={{ label:"Get started with UXE" }}
        custom={{ gtm_reference: currentPage, template: 1 }}
      />
      <Testimonial
        data={testimonialOptions}
        custom={{ gtm_reference: currentPage, show: 3 }}
      />
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
