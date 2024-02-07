import Head from "next/head";
import { GetStaticProps } from "next";
import { CMS_NAME } from "../../lib/constants";
import { Header } from "@/ui/section/header/Header";
import { getSettings } from "lib/new-api";
import { Feature } from "@/ui/section/feature/Feature";
import Link from "next/link";
import { Layout } from "@/ui/base/layout/Layout";
import { Testimonial } from "@/ui/section/testimonial/Testimonial";

export default function CareerSection({ settings }) {
  const {
    settingBackground,
    features, teamMembers,
    careers, testimonials } = settings;

  let coreTeam = teamMembers.slice(0, 4) || [];
  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Header
        title="Became part of our community"
        subtitle="CAREERS"
        description="Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments"
        video_url={settingBackground?.hero_career?.url}
      />
      <Feature data={features} />
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden pb-0">
          <div className="flex flex-col gap-[max(48px,_min(calc(100vw_*_(64_/_1440)),_64px))]">
            <div className="flex flex-col items-center gap-[max(8px,_min(calc(100vw_*_(12_/_1440)),_12px))] text-center">
              <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px]">
                Our leadership team
              </h2>
              <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] leading-[132%] -tracking-[.16px]">
                With over 100 years of combined experience, we ve got a
                well-seasoned team at the helm.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-[20px] max-lg:grid-cols-2 max-sm:grid-cols-1">
              {coreTeam.map(({ name, photo_url, role }, index) => (
                <div
                  key={index}
                  className="relative rounded-[12px] overflow-hidden pt-[100%] h-0 w-full text-white"
                >
                  <img
                    className="absolute top-0 w-full"
                    src={photo_url}
                    alt={name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 m-[16px] p-[16px] bg-[#0D0D0D66] rounded-[8px]">
                    <p className="text-[16px] font-bold leading-[132%] -tracking-[.16px]">
                      {name}
                    </p>
                    <p className="text-[14px] leading-[132%] -tracking-[.14px]">
                      {role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="flex flex-col gap-[max(48px,_min(calc(100vw_*_(64_/_1440)),_64px))] max-w-[768px] mx-auto">
            <div className="flex flex-col items-center gap-[max(8px,_min(calc(100vw_*_(12_/_1440)),_12px))] text-center">
              <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px]">
                Let’s find you an open position.
              </h2>
              <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] leading-[132%] -tracking-[.16px]">
                Find the right job for you no matter what it is that you do.
              </p>
            </div>
            <div className="flex flex-col gap-[20px]">
              {careers &&
                careers.map(
                  ({ title, description, job_type, external_link }, index) => (
                    <div
                      key={index}
                      className="flex justify-between gap-[16px] w-full rounded-[12px] border border-[#0000001F] p-[max(16px,_min(calc(100vw_*_(24_/_1440)),_24px))] min-h-[168px]"
                    >
                      <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-[12px] items-start">
                          <a
                            href={external_link}
                            className="text-[20px] text-[#3963FF] font-medium leading-[132%] -tracking-[.2px] hover:opacity-75"
                          >
                            {title}
                          </a>
                          <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] leading-[132%] -tracking-[.16px]">
                            {description}
                          </p>
                        </div>
                        <div className="flex items-center gap-[8px] opacity-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_1034_24223)">
                              <path
                                d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z"
                                stroke="#19191B"
                                strokeOpacity="0.5"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1034_24223">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <p className="text-[14px] leading-[132%] -tracking-[.14px]">
                            {job_type}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Link
                          href={external_link}
                          className="bg-[#19191B] text-white hover:opacity-90 rounded-full p-[max(4px,_min(calc(100vw_*_(8_/_1440)),_8px))]"
                          style={{ backdropFilter: "blur(1.58333px)" }}
                        >
                          <svg
                            className="rotate-45 w-[max(16px,_min(calc(100vw_*_(22_/_1440)),_22px))] h-[max(16px,_min(calc(100vw_*_(22_/_1440)),_22px))]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"
                              fill="currentColor"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[0_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
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
                href="/contact-us"
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
      <Testimonial data={testimonials} settings={{ show: 3 }} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const settings = await getSettings();
  return {
    props: { settings },
    revalidate: 10,
  };
};
