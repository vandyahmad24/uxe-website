import Head from "next/head";
import { GetStaticProps } from "next";
import { Layout } from "@/ui/base/layout/Layout";
import { Hero2 } from "@/ui/section/hero2/Hero2";
import { getSettings } from "lib/new-api";
import { ConnectWithUs } from "@/ui/section/get-started/ConnectWithUs";
import { PressReleaseCard } from "@/ui/section/media/press-release";
import { getPressRelease } from "lib/api";

export default function NewsSection({ options, pressReleaseOptions }) {
  const currentPage = "press-release";
  const { backgroundOptions, footerOptions, generalSettings } = options;

  const validPressReleases = Array.isArray(pressReleaseOptions) ? pressReleaseOptions : [];

  return (
    <Layout data={{ general: generalSettings, footer: footerOptions }}>
      <Head>
        <title>{`${generalSettings?.title} | Press Release`}</title>
      </Head>
      <Hero2
        data={{
          title: "Multiple services to ensure the safety",
          subtitle: "COMPANY",
          description: "",
          image_url: backgroundOptions?.hero_about_us?.url,
        }}
        custom={{ gtm_reference: currentPage }}
      />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">News</h2>
        <p className="text-gray-600 mb-6">
          Explore the latest news and product updates from the UXE
        </p>
        <div>
          {validPressReleases.map((event, index) => (
            <PressReleaseCard key={index} event={event} />
          ))}
        </div>
      </div>

      <div className="mb-12 ">
        <ConnectWithUs
          data={{ label: "Connect with us" }}
          custom={{ gtm_reference: currentPage, template: 1 }}
        />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const options = await getSettings();
  let pressReleaseOptions = [];

  try {
    const pressReleaseResponse = await getPressRelease(); 
    pressReleaseOptions = pressReleaseResponse.pressReleaseOptions || []; 
  } catch (error) {
    console.error("Error fetching press releases:", error);
  }

  return {
    props: { options, pressReleaseOptions }, 
    revalidate: 10,
  };
};
