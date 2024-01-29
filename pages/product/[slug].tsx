import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '../../components/container'
import Layout from "../../components/base/layout";
import { getAllProductsWithSlug, getProductAndMoreProducts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import { TitleMedium } from '../../stories/ui/title/title-medium/TitleMedium'
import { TextSmall } from '../../stories/ui/text/text-small/TextSmall'

export default function Product({ post, posts, preview }) {
  console.log(post)
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(170_/_1440)),_170px))_max(20px,_min(calc(100vw_*_(178_/_1440)),_178px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
          <div className='text-center flex flex-col items-center gap-[10px]'>
            <TextSmall
              label={post?.productCategorys.edges[0]?.node.name}
              cls="uppercase text-[#676767]"
            />
            <TitleMedium label={post?.title} />
          </div>
          <div>
            <img
              src={"https://api.uxe.ai/"+post?.featuredImage?.node?.sourceUrl}
              alt={post?.title}
              className='mx-auto'
            />
            <div dangerouslySetInnerHTML={{ __html: post?.content }}>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getProductAndMoreProducts(params?.slug)

  console.log(data)

  return {
    props: {
      preview,
      post: data.product,
      posts: data.products,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllProductsWithSlug()

  console.log(JSON.stringify(allPosts.edges))

  return {
    paths: allPosts.edges.map(({ node }) => `/product/${node.slug}`) || [],
    fallback: true,
  }
}
