import React from "react"

import { Layout, Seo } from "@components"

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Seo title="404: Not Found" />
      <section className="p-5 xl:p-16 flex-1 text-center">
        <h1 className="mb-10">404: Not Found</h1>
        <p>The content you are looking for could not be found.</p>
      </section>
    </Layout>
  )
}

export default NotFoundPage
