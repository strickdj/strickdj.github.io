import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const KitchenSinkPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Kitchen Sink" />

      <div>
        <h1>Kitchen Sink</h1>
      </div>

      <h2>Colors</h2>

      <div className={`flex flex-wrap`}>
        <div className={`mx-1 p-1`}>
          <h3 className={`text-black`}>text-black</h3>
          <h3 className={`text-black-90`}>text-black-90</h3>
          <h3 className={`text-black-70`}>text-black-70</h3>
          <h3 className={`text-black-50`}>text-black-50</h3>
          <h3 className={`text-black-30`}>text-black-30</h3>
          <h3 className={`text-black-10`}>text-black-10</h3>
        </div>
        <div className={`bg-black mx-1 p-1`}>
          <h3 className={`text-white`}>text-white</h3>
          <h3 className={`text-white-90`}>text-white-90</h3>
          <h3 className={`text-white-70`}>text-white-70</h3>
          <h3 className={`text-white-50`}>text-white-50</h3>
          <h3 className={`text-white-30`}>text-white-30</h3>
          <h3 className={`text-white-10`}>text-white-10</h3>
        </div>
        <div className={`bg-black mx-1 p-1`}>
          <h3 className={`text-beige`}>text-beige</h3>
          <h3 className={`text-beige`}>text-beige</h3>
          <h3 className={`text-beige`}>text-beige</h3>
          <h3 className={`text-beige`}>text-beige</h3>
          <h3 className={`text-beige`}>text-beige</h3>
          <h3 className={`text-beige`}>text-beige</h3>
        </div>
        <div className={`bg-black mx-1 p-1`}>
          <h3 className={`text-comb`}>text-comb</h3>
          <h3 className={`text-comb`}>text-comb</h3>
          <h3 className={`text-comb`}>text-comb</h3>
          <h3 className={`text-comb-dark`}>text-comb-dark</h3>
          <h3 className={`text-comb-dark`}>text-comb-dark</h3>
          <h3 className={`text-comb-dark`}>text-comb-dark</h3>
        </div>
        <div className={`bg-black mx-1 p-1`}>
          <h3 className={`text-beak`}>text-beak</h3>
          <h3 className={`text-beak`}>text-beak</h3>
          <h3 className={`text-beak`}>text-beak</h3>
          <h3 className={`text-beak`}>text-beak</h3>
          <h3 className={`text-beak`}>text-beak</h3>
          <h3 className={`text-beak`}>text-beak</h3>
        </div>
        <div className={`bg-black mx-1 p-1`}>
          <h3 className={`text-foot`}>text-foot</h3>
          <h3 className={`text-foot`}>text-foot</h3>
          <h3 className={`text-foot`}>text-foot</h3>
          <h3 className={`text-foot`}>text-foot</h3>
          <h3 className={`text-foot`}>text-foot</h3>
          <h3 className={`text-foot`}>text-foot</h3>
        </div>
        <div className={`mx-1 p-1`}>
          <h3 className={`text-feather`}>text-feather</h3>
          <h3 className={`text-feather-grey`}>text-feather-grey</h3>
          <h3 className={`text-feather-dark`}>text-feather-dark</h3>
          <h3 className={`text-feather-black`}>text-feather-black</h3>
        </div>
        <div className={`mx-1 p-1`}>
          <h3 className={`text-t`}>text-t</h3>
          <h3 className={`text-t-green`}>text-t-green</h3>
          <h3 className={`text-t-teal`}>text-t-teal</h3>
          <h3 className={`text-t-purple`}>text-t-purple</h3>
        </div>
      </div>

      <h2>Headings</h2>

      <div className={`text-feather-black`}>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

      </div>

    </Layout>
  )
}

export default KitchenSinkPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
