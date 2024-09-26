async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const API_URL = process.env.WORDPRESS_API_URL || "https://api.uxe.ai/graphql"
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getAllProductsWithSlug() {
  const data = await fetchAPI(`
    {
      products(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.products
}

export async function getAllPostsForHome(preview, afterCursor = "") {
  const data = await fetchAPI(
    `
    query AllPosts($after: String = "") {
      posts(first: 8, where: {orderby: {field: DATE, order: DESC}}, after: $after) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                fullPathUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            categories {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasPreviousPage
          hasNextPage
          startCursor
        }
      }
    }
  `,
    {
      variables: {
        after: afterCursor,
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}
export async function getAllProductForHome(afterCursor = "") {
  const data = await fetchAPI(
    `
    query AllProducts($first: Int = 20, $order: OrderEnum = DESC, $after: String = "") {
      products(
        first: $first
        where: {orderby: {field: DATE, order: $order}}
        after: $after
      ) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                fullPathUrl
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `,
    {
      variables: {
        after: afterCursor,
      },
    }
  )

  return data?.products
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
          fullPathUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}

export async function getProductAndMoreProducts(slug) {
  const data = await fetchAPI(
    `
    query ProductBySlug($id: ID!) {
      product(id: $id, idType: URI) {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
            fullPathUrl
          }
        }
        content
        productCategorys(first: 10) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
      products(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                fullPathUrl
              }
            }
            productCategorys(first: 10) {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        id: slug,
      },
    }
  )
  return data
}



export async function getPressRelease(){
  const data = await fetchAPI(`
    {
  pressReleaseOptions {
    description
    image_url
    title
    url
      }
    }
    `)
    return data
}

// MY
export async function getClient() {
  const j = {"clients":[{"name":"COMPANY LOGO","url":"/image/company-logo-01.png"},{"name":"COMPANY LOGO","url":"/image/company-logo-02.png"},{"name":"COMPANY LOGO","url":"/image/company-logo-03.png"},{"name":"COMPANY LOGO","url":"/image/company-logo-04.png"},{"name":"COMPANY LOGO","url":"/image/company-logo-05.png"},{"name":"COMPANY LOGO","url":"/image/company-logo-06.png"}]}
  return j?.clients
}

export async function getEvents(first = 10, after = '', searchTerm = '') {
  const query = `
    query GetEvents($first: Int!, $after: String, $searchTerm: String) {
      posts(first: $first, after: $after, where: { 
        search: $searchTerm, 
        categoryName: "event", 
        orderby: { field: DATE, order: DESC } 
      }) {
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            title
            date
            slug
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;

  const variables = { first, after, searchTerm: searchTerm ? searchTerm : '' };
  const data = await fetchAPI(query, { variables });

  return {
    edges: data.posts.edges,
    pageInfo: {
      endCursor: data.posts.pageInfo.endCursor,
      startCursor: data.posts.pageInfo.startCursor,
      hasNextPage: data.posts.pageInfo.hasNextPage,
      hasPreviousPage: data.posts.pageInfo.hasPreviousPage,
    },
  };
}



export async function getNews(first = 10, after = '', searchTerm = '') {
  const query = `
    query GetEvents($first: Int!, $after: String, $searchTerm: String) {
      posts(first: $first, after: $after, where: { 
        search: $searchTerm, 
        categoryName: "news", 
        orderby: { field: DATE, order: DESC } 
      }) {
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            title
            date
            slug
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;

  const variables = { first, after, searchTerm: searchTerm ? searchTerm : '' };
  const data = await fetchAPI(query, { variables });

  return {
    edges: data.posts.edges,
    pageInfo: {
      endCursor: data.posts.pageInfo.endCursor,
      startCursor: data.posts.pageInfo.startCursor,
      hasNextPage: data.posts.pageInfo.hasNextPage,
      hasPreviousPage: data.posts.pageInfo.hasPreviousPage,
    },
  };
}
