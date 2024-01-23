import Footer from './footer'
import Meta from './meta'
import Navigation from './navigation'

export default function Layout({ children }) {
  const dataMenu = [
    {
      name: "Product",
      url: "/product",
      submenu: []
    },
    {
      name: "Solution",
      url: "/solution",
      submenu: [
        {
          name: "For Goverments",
          description: "All-in-One Security Platform<br/>Centralized Surveillance",
          url: "/solution/for-goverment"
        },
        {
          name: "For Bussines",
          description: "All-in-One Security Platform<br/>Centralized Surveillance",
          url: "/solution/for-bussines"
        }
      ]
    },
    {
      name: "Company",
      url: "/company",
      submenu: [
        {
          name: "About Us",
          description: "UXE as it is",
          url: "/company/about-us"
        },
        {
          name: "Careers",
          description: "Job opportunities",
          url: "/company/career"
        },
        {
          name: "Team",
          description: "Our happy team",
          url: "/company/team"
        },
      ]
    },
    {
      name: "Contact Us",
      url: "/contact-us",
      submenu: []
    },
  ]
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigation menu={dataMenu} />
        {children}
      </div>
      <Footer />
    </>
  )
}
