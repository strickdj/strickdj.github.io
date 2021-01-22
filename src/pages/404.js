import React from "react"

import { Layout, Seo } from "@components"

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>The content you are looking for could not be found.</p>
    </Layout>
  )
}

export default NotFoundPage
