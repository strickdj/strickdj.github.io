import React from "react"
import { SideMenu } from "@components"
import { useWindowWidth } from "@hooks"
import Footer from "./Footer"

export function Layout({ children }) {
  const width = useWindowWidth()

  const [menuOpen, setMenuOpen] = React.useState(true)

  const menuOpenOrIsScreenXl = menuOpen || width >= 1280

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="page-layout w-full">
      <div
        className={`absolute col-span-2 flex flex-row items-center justify-end z-30 xl:hidden ${
          menuOpenOrIsScreenXl ? "left-64" : ""
        }`}
      >
        <button
          className={`fixed top-0 bg-black-90 inline-block text-white p-2 ring-2 ring-transparent focus:outline-none border-none ${
            menuOpenOrIsScreenXl ? "left-64" : "left-0"
          }`}
          onClick={() => {
            setMenuOpen(!menuOpen)
          }}
        >
          <svg
            width="28"
            height="28"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <SideMenu isOpen={menuOpenOrIsScreenXl} closeMenu={closeMenu} />

      <div className="main-content col-span-full xl:col-start-2 xl:col-span-2">
        {children}

        <Footer />
      </div>
    </div>
  )
}

export default Layout
