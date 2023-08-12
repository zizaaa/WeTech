import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Nav from "./Nav"

const Layout = () => {
  return (
    <section>
        <Nav/>
        <section>
            <Outlet/>
        </section>
        <Footer/>
    </section>
  )
}

export default Layout