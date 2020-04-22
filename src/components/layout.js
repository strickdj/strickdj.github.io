import React from "react"

import Nav from "../components/nav"
import "./styles.css"

const Layout = ({ location, title, children }) => {

  return (
    <div className={`relative bg h-full`}>
      <h1 className={`z-0 absolute top-0 left-0 text-sideways p-5 text-6xl whitespace-no-wrap`}>{title}</h1>

      <article>
        <header className={`relative z-10`}>
          <div className={`container mx-auto bg-white-70 z-10 relative shadow-2xl`}>
            <Nav location={location}/>
          </div>
        </header>

        <main className={`relative z-0`}>
          <div className={`container mx-auto bg-white-70 z-10 relative shadow-2xl min-h-full`}>
            <div className={`p-6`}>
              {children}
            </div>
          </div>
        </main>

        <footer className={`p-3 text-right mt-6 text-beige bg-feather-black`}>
          <div>
            © {new Date().getFullYear()} Daris Strickland
          </div>
        </footer>
      </article>

    </div>
  )
}

export default Layout


