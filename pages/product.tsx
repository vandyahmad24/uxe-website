import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../components/base/layout'
import { getClient } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/section/header'
import Product from '../components/section/product'
import Testimonial from '../components/section/testimonial'

export default function ProductSection({ allClientLogo }) {
  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Header
        backgroundImageUrl={"/image/product-hero-background.png"}
      />
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))_48px_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="flex flex-col gap-[48px]">
            <div className="grid grid-cols-3 gap-[48px_20px] max-xl:grid-cols-2 max-md:grid-cols-1">
              <div className="flex flex-col gap-[20px]">
                <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                  <div className="absolute inset-0 w-full h-full">
                    <img src="/image/product-01.png" alt="PRODUCT IMAGE" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <a href="#" className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70">Thermal Camera</a>
                  <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]">The Elara FC-Series O</p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                  <div className="absolute inset-0 w-full h-full">
                    <img src="/image/product-02.png" alt="PRODUCT IMAGE" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <a href="#" className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70">Augment Reality</a>
                  <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]">The Elara FC-Series O</p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                  <div className="absolute inset-0 w-full h-full">
                    <img src="/image/product-03.png" alt="PRODUCT IMAGE" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <a href="#" className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70">Video Guard</a>
                  <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]">The Elara FC-Series O</p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                  <div className="absolute inset-0 w-full h-full">
                    <img src="/image/product-01.png" alt="PRODUCT IMAGE" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <a href="#" className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70">Thermal Camera</a>
                  <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]">The Elara FC-Series O</p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                  <div className="absolute inset-0 w-full h-full">
                    <img src="/image/product-02.png" alt="PRODUCT IMAGE" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <a href="#" className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70">Augment Reality</a>
                  <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]">The Elara FC-Series O</p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                  <div className="absolute inset-0 w-full h-full">
                    <img src="/image/product-03.png" alt="PRODUCT IMAGE" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <a href="#" className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70">Video Guard</a>
                  <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]">The Elara FC-Series O</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-[max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] overflow-hidden">
          <div className="bg-[#19191B] rounded-[12px] p-[max(32px,_min(calc(100vw_*_(54_/_1440)),_54px))_48px] flex flex-col items-center gap-[max(32px,_min(calc(100vw_*_(48_/_1440)),_48px))] bg-[url('/image/get-started-background.png')] bg-cover bg-no-repeat bg-bottom">
            <div className="flex gap-[20px] items-center justify-between w-full">
              <div className='flex flex-col gap-[16px]'>
                <h2 className="text-[max(32px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[120%] -tracking-[1.28px] bg-clip-text linear-8 fill-transparent">Get started with UXE</h2>
                <p className='text-white text-[16px] leading-[132%] -tracking-[.16px]'>Join over 4,000+ startups already growing with UXE.</p>
              </div>
              <a href="#" className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-white font-medium leading-[132%] -tracking-[.16px] p-[10px_16px] rounded-full hover:opacity-70" style={{
                border: "1px solid rgba(207, 207, 207, 0.25)",
                background: "rgba(178, 178, 178, 0.25)",
                backdropFilter: "blur(2px)"
              }}>Get in touch</a>
            </div>
          </div>
        </div>
      </div>
      <Testimonial data={{
        show: 3,
        items: [
          {
            rating: 4,
            review: "“As a business operating in a dynamic environment, we needed a robust security solution.",
            userPhoto: "/image/person-image-05.png",
            userName: "Courtney Henry",
            userRole: "Marketing Coordinator",
            userCompanyLogo: "/image/company-logo-01.png"
          },
          {
            rating: 4,
            review: "“I recently had the pleasure of experiencing the benefits of a smart city initiative, and I must say, it has transformed the way I interact with my urban environment.",
            userPhoto: "/image/person-image-06.png",
            userName: "James Madison",
            userRole: "Product Manager",
            userCompanyLogo: "/image/company-logo-02.png"
          },
          {
            rating: 4,
            review: "“The smart city product has enhanced urban living by optimizing traffic flow, reducing congestion, and promoting sustainable transportation options.",
            userPhoto: "/image/person-image-07.png",
            userName: "Alexander Potrat",
            userRole: "Director Manager",
            userCompanyLogo: "/image/company-logo-03.png"
          },
          {
            rating: 4,
            review: "“As a business operating in a dynamic environment, we needed a robust security solution.",
            userPhoto: "/image/person-image-05.png",
            userName: "Courtney Henry",
            userRole: "Marketing Coordinator",
            userCompanyLogo: "/image/company-logo-01.png"
          },
        ]
      }} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allClientLogo = await getClient()

  return {
    props: { allClientLogo },
    revalidate: 10,
  }
}
