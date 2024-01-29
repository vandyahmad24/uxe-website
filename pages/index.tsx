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

export default function Index({ clients, cmsSettings, visionMission, features, testimonials, products, posts }) {
  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Hero
        client={clients}
        backgroundVideo={cmsSettings?.general?.hero_video}
      />
      <Vision
        vision={visionMission.vision}
        mission={visionMission.mission}
      />
      <Feature features={features} />
      <Solution />
      <Product products={products.edges}/>
      <Testimonial data={{
        show: 3,
        items: [
          ...testimonials
        ]
      }} />
      <GetStarted />
      <News posts={posts.edges} />
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
