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
      <Testimonial />
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
