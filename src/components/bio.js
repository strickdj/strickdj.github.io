import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import LinkedInIcon from "@material-ui/icons/LinkedIn"


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong> {author.summary} <br />
        <span>LinkedIn: <a href="https://www.linkedin.com/in/daris-strickland-868a9269" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile"><LinkedInIcon /></a></span>
      </p>
    </div>
  )
}

export default Bio
