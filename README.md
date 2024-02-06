# UXE
| Author    | Firmansyah Nuralif Rohman       |
|-----------|---------------------------------|
| TechStack | NextJS, Tailwind                |
| Feature   | [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) |

## Demo

### [https://uxe-website.vercel.app/](https://uxe-website.vercel.app/)

## How to use

1. Clone this github repository
```bash
git clone https://github.com/mendoanjoe/uxe-website.git
```
2. Go to directory, install package, generate build file and copy file
```bash
pnpm run install
pnpm run build
pnpm run copy
```
3. That will create new folder called `build` and copy folder `standalone` into nginx or web server you use and run
```bash
node server.js
```
```bash
pm2 start server.js
```

## Configuration

### Step 1. Prepare your WordPress site

First, you need a WordPress site. There are many solutions for WordPress hosting, such as [WP Engine](https://wpengine.com/) and [WordPress.com](https://wordpress.com/).

Once the site is ready, you'll need to install the [WPGraphQL](https://www.wpgraphql.com/) plugin. It will add GraphQL API to your WordPress site, which we'll use to query the posts. Follow these steps to install it:

- Download the [WPGraphQL repo](https://github.com/wp-graphql/wp-graphql) as a ZIP archive.
- Inside your WordPress admin, go to **Plugins** and then click **Add New**.

![Add new plugin](./docs/plugins-add-new.png)

- Click the **Upload Plugin** button at the top of the page and upload the WPGraphQL plugin.

![Upload new plugin](./docs/plugins-upload-new.png)

- Once the plugin has been added, activate it from either the **Activate Plugin** button displayed after uploading or from the **Plugins** page.

![WPGraphQL installed](./docs/plugin-installed.png)

#### GraphiQL

The [WPGraphQL](https://www.wpgraphql.com/) plugin also gives you access to a GraphQL IDE directly from your WordPress Admin, allowing you to inspect and play around with the GraphQL API.

![WPGraphiQL page](./docs/wp-graphiql.png)

### Step 2. Install CMS plugin

Get cms plugin file on branch `cms-plugin`

### Step 3. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and set `WORDPRESS_API_URL` to be the URL to your GraphQL endpoint in WordPress. For example: `https://myapp.wpengine.com/graphql`.

Your `.env.local` file should look like this:

```bash
WORDPRESS_API_URL=...

# Only required if you want to enable preview mode
# WORDPRESS_AUTH_REFRESH_TOKEN=
# WORDPRESS_PREVIEW_SECRET=
```

## Contact Page Configuration
You need to install Contact Form 7 and activate it and using this template

```
[text* first-name autocomplete:first-name placeholder "First name"]
[text* last-name autocomplete:last-name placeholder "Last name"]
[email* email autocomplete:email placeholder "Email"]
[tel* phone placeholder "Phone"]
[text* partnership autocomplete:partnership placeholder "Partnership"]
[textarea message placeholder "Lest us know what you kind of partnership"]
<p>By submitting this form, you agree that we will contact you in relation to our product and service.</p>
[submit "Get in touch"]
```

after that, get shortcode and go to CMS Setting menu and paste the shortcode and save.