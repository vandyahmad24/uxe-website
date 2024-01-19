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

export default function Index({ allClientLogo }) {
  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Hero
        client={allClientLogo}
        backgroundVideo={"https://assets.mixkit.co/videos/preview/mixkit-surveillance-team-checking-the-cameras-22997-large.mp4"}
      />
      <Vision />
      <Feature />
      <Solution />
      <Product />
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
      <GetStarted />
      <News />
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
