import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout from '../components/base/layout'
import { getAllProductForHome, getClient } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/section/header'
import Product from '../components/section/product'
import Testimonial from '../components/section/testimonial'
import Container from '../components/base/container'
import { getCMSSetting } from '../lib/new-api'

export default function ProductSection({ products, cmsSetting }) {
  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <div className="bg-black">
        <Container>
          <div className="relative flex flex-col justify-end min-h-[400px]">
            <div className="relative z-10 flex flex-col gap-[max(75px,_min(calc(100vw_*_(100_/_1440)),_100px))] p-[max(32px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))]">
              <div className="flex items-end justify-between gap-[80px] max-xl:flex-col max-xl:items-start">
                <div className="flex flex-col items-start gap-[10px] max-w-lg">
                  <span className='text-[12px] text-white font-medium leading-[112%] -tracking-[.96px] uppercase'>OUR PRODUCT</span>
                  <h2 className="text-[max(24px,_min(calc(100vw_*_(48_/_1440)),_48px))] max-lg:text-[max(24px,_min(calc(100vw_*_(80_/_1440)),_80px))] font-medium leading-[120%] -tracking-[1.28px] bg-linear-4 !bg-clip-text text-transparent">Discover Innovation in Smart Security Products</h2>
                </div>
                <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] font-medium leading-[132%] -tracking-[.16px] max-w-sm bg-linear-5 !bg-clip-text text-transparent">Intelligent Security Beyond Cameras: Seamless Solutions for Government and Business Environments</p>
              </div>
            </div>
            <div className="absolute top-0 w-full min-h-[400px] bg-cover bg-no-repeat" style={{
              backgroundImage: `url(/image/product-hero-background.png)`
            }}></div>
            <div className="absolute top-0 w-full min-h-[400px] bg-linear-7"></div>
          </div>
        </Container>
      </div>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))_48px_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="flex flex-col gap-[48px]">
            <div className="grid grid-cols-3 gap-[48px_20px] max-xl:grid-cols-2 max-md:grid-cols-1">
              {products.edges.map((item, index) => (
                <div key={index} className="flex flex-col gap-[20px]">
                  <div className="relative w-full pt-[112%] rounded-[12px] bg-[#F2F2F2]">
                    <div className="absolute inset-0 w-full h-full">
                      <img src={"https://api.uxe.ai/"+item?.node?.featuredImage?.node?.sourceUrl} alt="PRODUCT IMAGE" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <a href="#" className="text-[max(16px,_min(calc(100vw_*_(20_/_1440)),_20px))] text-[#19191B] font-medium leading-[132%] -tracking-[.2px] hover:opacity-70">Thermal Camera</a>
                    <p className="text-[max(14px,_min(calc(100vw_*_(16_/_1440)),_16px))] text-[#19191B] opacity-60 leading-[132%] -tracking-[.14px]">The Elara FC-Series O</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
        <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[0_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className="bg-[#19191B] rounded-[12px] p-[max(32px,_min(calc(100vw_*_(54_/_1440)),_54px))_48px] flex flex-col items-center gap-[max(32px,_min(calc(100vw_*_(48_/_1440)),_48px))] bg-[url('/image/get-started-background.png')] bg-cover bg-no-repeat bg-bottom">
            <div className="flex gap-[20px] items-center justify-between w-full max-md:flex-col max-md:text-center">
              <div className='flex flex-col gap-[16px]'>
                <h2 className="text-[max(32px,_min(calc(100vw_*_(32_/_1440)),_32px))] font-medium leading-[120%] -tracking-[1.28px] bg-clip-text bg-linear-8 text-transparent">Get started with UXE</h2>
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
          ...cmsSetting.testimonials
        ]
      }} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProductForHome()
  console.log(products)
  const cmsSetting = await getCMSSetting()
  return {
    props: { products, cmsSetting },
    revalidate: 10,
  }
}
