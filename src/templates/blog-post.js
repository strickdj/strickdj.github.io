import React from "react"
import { Link, graphql } from "gatsby"

// import  from "../components/bio"
import { Layout, Seo, Bio } from "@components"
// import  from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section className="p-5 xl:p-16">
        <article className="mb-10">
          <header>
            <h1 className="mb-2">{post.frontmatter.title}</h1>
            <p className="text-base mb-4">{post.frontmatter.date}</p>
          </header>
          <section
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr className="my-10" />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
