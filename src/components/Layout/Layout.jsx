import React from "react"
import { SideMenu } from "@components"
import Footer from "./Footer"

export function Layout({ children }) {
  return (
    <div className="page-layout w-full">
      <SideMenu />

      <div className="main-content col-span-full xl:col-start-2 xl:col-span-2">
        {children}

        <Footer />
      </div>
    </div>
  )
}

export default Layout
