import React from "react"
import { graphql } from "gatsby"
import Container from '@material-ui/core/Container'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Me" />

      <h1>Contact Me</h1>

      <Container maxWidth="md">
        <ContactForm />
      </Container>

    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
