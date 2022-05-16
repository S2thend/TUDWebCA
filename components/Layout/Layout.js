import Footer from "../Footer/Footer"
import Navbar from "../Navbar/NavBar"

export default function Layout({ children }) {
  return (
    <>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
    </>
  )
}