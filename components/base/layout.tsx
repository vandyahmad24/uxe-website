import Footer from './footer'
import Meta from './meta'
import Navigation from './navigation'

export default function Layout({ children }) {
  const dataMenu = [
    {
      name: "Product",
      url: "#",
      submenu: []
    },
    {
      name: "Solution",
      url: "#",
      submenu: [
        {
          name: "For Goverments",
          description: "All-in-One Security Platform<br/>Centralized Surveillance",
          url: "#"
        },
        {
          name: "For Bussines",
          description: "All-in-One Security Platform<br/>Centralized Surveillance",
          url: "#"
        }
      ]
    },
    {
      name: "Company",
      url: "#",
      submenu: [
        {
          name: "About Us",
          description: "UXE as it is",
          url: "#"
        },
        {
          name: "Careers",
          description: "Job opportunities",
          url: "#"
        },
        {
          name: "Team",
          description: "Our happy team",
          url: "#"
        },
      ]
    },
    {
      name: "Contact Us",
      url: "#",
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
