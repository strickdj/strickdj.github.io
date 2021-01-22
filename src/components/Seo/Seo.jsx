/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

export const Seo = ({ title, description, image, article, lang }) => {
  const { pathname } = useLocation()

  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            defaultLang: lang
            siteUrl
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    twitterUsername,
    defaultLang,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    lang: lang || defaultLang,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={`%s`}
    >
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
      />
      <meta name="description" content={seo.description} />
      {image && <meta name="image" content={image} />}

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}

Seo.defaultProps = {
  title: "",
  description: "",
  image: "",
  article: false,
  lang: "en",
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  lang: PropTypes.string,
}

export default Seo
