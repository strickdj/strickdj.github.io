import React from "react"
import { Link } from "gatsby"

import Nav from "../components/nav2"
import OtherNav from "../components/nav"
import "./styles.css"

const Layout = ({ location, title, children }) => {

  return (
    <div className={`relative bg `}>
      <h1 className={`z-0 absolute top-0 left-0 text-sideways p-5 text-6xl`}>Daris Strickland's Blog</h1>


      <div className={`container mx-auto bg-white-70 z-10 relative`}>

        <header>
          <Nav location={location}/>

          <Link to={`/`}>{title}</Link>
          <OtherNav location={location}/>
        </header>

        <main>{children}</main>

        <footer>
          <div>
            © {new Date().getFullYear()} Daris Strickland
          </div>
        </footer>


      </div>
    </div>
  )
}

export default Layout


