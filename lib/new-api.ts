const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
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

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
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
          }
        }
      }
    }
  `,
  )

  return data?.posts
}

export async function getCMSSetting() {
  const data = await fetchAPI(
    `
    query getCMSSetting {
      features {
        description
        icon
        title
      }
      solutions {
        description
        image_url
        title
      }
      visionMission {
        mission {
          description
          image_url
          title
        }
        vision {
          description
          image_url
          title
        }
      }
      clients {
        alt
        logo_url
      }
      testimonials {
        rating
        review_text
        reviewer_company_image
        reviewer_image
        reviewer_name
        reviewer_role
      }
      menus {
        nodes {
          id
          name
          menuItems {
            nodes {
              id
              label
              url
            }
          }
        }
      }
      products(first: 3) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
      posts(first: 3) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
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
          }
        }
      }
      cmsSettings {
        contact {
          email
          phone
        }
        follow {
          instagram
          telegram
        }
        general {
          address
          hero_about_us {
            type
            url
          }
          hero_blog {
            type
            url
          }
          hero_career {
            type
            url
          }
          hero_contact {
            type
            url
          }
          hero_home {
            type
            url
          }
          hero_product {
            type
            url
          }
          hero_team {
            type
            url
          }
        }
      }
      careers {
        description
        external_link
        job_type
        title
      }
      teamMembers {
        name
        photo_url
        role
      }
    }
  `,
  )

  return data
}
