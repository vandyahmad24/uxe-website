if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL
)

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: `${pathname}/**`,
      },
      {
        protocol: 'https',
        hostname: `*.gravatar.com`,
        port: '',
      },
      {
        protocol: 'https',
        hostname: `*.azureedge.net`,
        port: '',
      },
      {
        protocol: 'https',
        hostname: `*.uxe.ai`,
        port: '',
      },
    ],
  },
  output: process.env.IS_VERCEL === "false" ? "standalone" : undefined,
  distDir: 'build',
  poweredByHeader: false,
}
