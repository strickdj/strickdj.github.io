import React from "react"
import { SideMenu } from "@components"
import { useWindowWidth } from "@hooks"
import Footer from "./Footer"

import { useAppState } from "../../appState"

export function Layout({ children }) {
  const { menuOpen } = useAppState()

  const width = useWindowWidth()
  const menuOpenOrIsScreenXl = menuOpen || width >= 1280

  return (
    <div className="page-layout w-full">
      <SideMenu isOpen={menuOpenOrIsScreenXl} />

      <div className="main-content col-span-full xl:col-start-2 xl:col-span-2">
        {children}

        <Footer />
      </div>
    </div>
  )
}

export default Layout
