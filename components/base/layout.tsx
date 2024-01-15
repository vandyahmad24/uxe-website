import Footer from './footer'
import Meta from './meta'
import Navigation from './navigation'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigation menu={["Product", "Solution", "Company", "Contact Us"]} />
        {children}
      </div>
      <Footer />
    </>
  )
}
