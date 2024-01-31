import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../components/base/layout'
import { getClient } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Hero from '../components/section/hero'
import Vision from '../components/section/vision'
import Feature from '../components/section/feature'
import Solution from '../components/section/solution'
import Product from '../components/section/product'
import Testimonial from '../components/section/testimonial'
import GetStarted from '../components/section/get-started'
import News from '../components/section/news'
import { getCMSSetting } from '../lib/new-api'
import LabelHero from '../components/ui/label-hero'
import Link from 'next/link'
import { TextLarge } from '../stories/ui/text/text-large/TextLarge'

export default function Index({ clients, cmsSettings, visionMission, features, testimonials, products, posts, solutions }) {
  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <div className="bg-black">
        <div className="max-w-[1440px] mx-auto overflow-hidden">
          <div className="relative flex flex-col justify-end min-h-[max(686px,_min(calc(100vw_*_(824_/_1440)),_824px))]">
            <div className="relative z-10 flex flex-col gap-[max(75px,_min(calc(100vw_*_(100_/_1440)),_100px))] px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] bg-linear-3">
              <div className="flex items-end justify-between gap-[32px] max-xl:flex-col max-xl:items-start">
                <div className="flex flex-col items-start gap-[10px] max-w-lg">
                  <LabelHero text={"Fairness & Equality"} />
                  <h2 className="text-[max(32px,_min(calc(100vw_*_(64_/_1440)),_64px))] max-md:text-[max(32px,_min(calc(100vw_*_(100_/_1440)),_100px))] font-medium leading-[120%] -tracking-[1.28px] bg-linear-4 !bg-clip-text text-transparent">Transformative Smart City Security Solutions</h2>
                </div>
                <p className="text-[16px] font-medium leading-[132%] -tracking-[.16px] max-w-sm bg-linear-5 !bg-clip-text text-transparent">Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments</p>
              </div>
              <div>
                <div className="w-full h-[.5px] bg-[#ffffff4d] max-md:hidden"></div>
                <div className="flex items-center justify-between gap-[12px] py-[28px] max-xl:flex-col max-xl:items-start">
                  <p className="text-[max(10px,_min(calc(100vw_*_(14_/_1440)),_14px))] max-md:text-[#B1AFAF] text-white leading-[132%] -tracking-[.14px]">Trusted by hundreds of organizations</p>
                  <div className="flex flex-wrap max-lg:justify-center gap-[12px_32px]">
                    {clients.map(({logo_url, alt}, index) => (
                      <img className='max-sm:grow' key={index} src={"https://api.uxe.ai/"+logo_url} alt={alt} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <video className="absolute top-0 w-full min-h-[824px] object-cover" src={cmsSettings?.general?.hero_home?.url} autoPlay loop playsInline muted></video>
          </div>
        </div>
      </div>
      <Vision
        vision={visionMission.vision}
        mission={visionMission.mission}
      />
      <Feature features={features} />
      <Solution solutions={solutions} />
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(190_/_1440)),_190px))_48px_max(20px,_min(calc(100vw_*_(190_/_1440)),_190px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col items-center text-center">
              <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">Products</p>
              <h2 className="text-[max(24px,_min(calc(100vw_*_(32_/_1440)),_32px))] text-[#19191B] font-medium leading-[112%] -tracking-[.64px] mt-[10px] max-w-[34rem]">Discover Innovation in <br /> Smart Security Products</h2>
            </div>
            <div className="grid grid-cols-3 gap-[20px] max-xl:grid-cols-2 max-md:grid-cols-1">
            {products?.edges.map((item, index) => (
              <div key={index} className="flex flex-col gap-[20px]">
                <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                  <div className="absolute inset-0 w-full h-full">
                    <img src={"https://api.uxe.ai/"+item?.node?.featuredImage?.node?.sourceUrl} alt={item?.node?.title} />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <Link href={"/product/"+item?.node?.slug} className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70">{item?.node?.title}</Link>
                  <TextLarge
                    label={item?.node?.excerpt.replace("<p>", "").replace("</p>", "")}
                    cls="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]"
                  />
                </div>
              </div>
            ))}
            </div>
            <div className="flex justify-center">
              <Link href={"/product"} className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full bg-[#19191B] backdrop-blur-[2px] border border-[#F4F5F6] hover:opacity-70">
                See All Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Testimonial data={{
        show: 3,
        items: [
          ...testimonials
        ]
      }} />
      <GetStarted />
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col items-center text-center">
              <p className="text-[12px] text-[#19191B80] uppercase font-medium leading-[132%] tracking-[.96px]">News & Blog</p>
              <h2 className="text-[max(16px,_min(calc(100vw_*_(24_/_1440)),_24px))] text-[#19191B] font-medium leading-[112%] -tracking-[.24px] mt-[10px] max-w-xl">Your Daily Dose of Tech News</h2>
            </div>
            <div className="grid grid-cols-3 gap-[32px] max-xl:grid-cols-2 max-md:grid-cols-1">
              {posts.edges.map((item, index) => (
                <div key={index} className="rounded-[12px] border border-[#0000000F] overflow-hidden">
                  <img src={(item.node.featuredImage?.node.sourceUrl ? "https://api.uxe.ai/"+item.node.featuredImage?.node.sourceUrl : 'https://fakeimg.pl/770x450')} alt={item.node.title} className="max-h-[max(140px,_min(calc(100vw_*_(240_/_1440)),_240px))] w-full object-cover" />
                  <div className="p-[24px] flex flex-col gap-[32px]">
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <span className="text-[14px] text-[#19191B80] font-medium leading-[132%] p-[4px_12px] border border-[#D9D9D9] rounded-full">Technology</span>
                      <Link href={"/post/"+item.node.slug}  className="text-[20px] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70 line-clamp-2">{item.node.title}</Link>
                      <TextLarge
                        label={item?.node?.excerpt.replace("<p>", "").replace("</p>", "")}
                        cls="text-[16px] text-[#19191B] leading-[132%] -tracking-[.16px] opacity-50 line-clamp-2"
                      />
                    </div>
                    <Link href={"/post/"+item.node.slug} className="flex items-center gap-[8px] hover:opacity-70">
                      <span className="text-[16px] text-[#19191B] font-medium leading-[132%] -tracknig-[.16px]">Read post</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5.83325 14.1666L14.1666 5.83325M14.1666 5.83325H5.83325M14.1666 5.83325V14.1666" stroke="#19191B" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cmsSetting = await getCMSSetting()
  return {
    props: { ...cmsSetting },
    revalidate: 10,
  }
}
