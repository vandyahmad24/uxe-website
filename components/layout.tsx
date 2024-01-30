import Footer from './footer'
import Meta from './meta'
import Navigation from './base/navigation'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigation menu={["Product", "Solution", "Company", "Contact Us"]} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
