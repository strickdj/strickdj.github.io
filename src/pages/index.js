import React from "react"
import { ContactForm, Layout } from "@components"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { getCoords, scrollToY } from "@utils"

export default (props) => {
  const {
    data: {
      site: {
        siteMetadata: { title: pageTitle },
      },
      allMarkdownRemark: { edges: posts },
      insidePassage: {
        childImageSharp: { fluid: insidePassageFluid },
      },
      royalUnited: {
        childImageSharp: { fluid: royalUnitedFluid },
      },
      hc1: {
        childImageSharp: { fluid: hc1Fluid },
      },
      indyChamber: {
        childImageSharp: { fluid: indyChamberFluid },
      },
    },
    location,
  } = props

  return (
    <Layout>
      {/* -------------------------- Hero -------------------------- */}
      <div
        id="home"
        className="relative h-64 xl:h-screen grid place-content-center "
      >
        {/* <img
            className="absolute w-full h-full inset-0 z-0 opacity-75"
            alt="foo bar"
            src="http://lorempixel.com/1445/680/"
          /> */}
        <div className="absolute w-full h-full inset-0 z-0 darken">
          <Image
            fluid={insidePassageFluid}
            alt="somewhere in the inside passage."
            style={{
              marginBottom: 0,
              maxHeight: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="z-10 relative w-full h-64 xl:h-full flex flex-col justify-center items-center">
          <div>
            <h1 className={`text-red-600 awesome-css`}>Daris Strickland</h1>
            <p className="text-white px-3 border-l-4 border-transparent">
              web developer.
            </p>
          </div>
        </div>
      </div>
      {/* -------------------------- About -------------------------- */}
      <div id="about" className="about bg-white px-5 py-10 xl:p-16">
        <h2 className="text-black text-5xl font-bold mb-3">About</h2>
        <p className="text-sm mb-10">learn about me.</p>
        <div className="flex flex-col lg:flex-row">
          {/* TODO: Source a good picture to go here. */}
          {/* <div className="pb-10 lg:pb-0 lg:pr-7 xl:pr-10">
            <img src="https://place-hold.it/430x535" alt="foo bar" />
          </div> */}
          <div className="w-full">
            <h3 className="text-red-700 mb-3">Who am i?</h3>
            <h2 className="mb-3 font-bold">I am a builder.</h2>
            <p className="text-base leading-loose mb-3">
              I love building websites and solving problems. I’m focused on
              implementing simple and easy to use user facing interfaces
              utilizing React and other frameworks. I have implemented front-end
              single page applications as well as back-end systems. I have been
              successful creating solutions with various web technologies
              including Javascript, React, Gatsby, WordPress, and PHP / Laravel.
            </p>
            <hr className="w-full my-5" />
            <button
              onClick={() => {
                const scrollToElement = document.querySelector("#contact")
                if (scrollToElement) {
                  const { top } = getCoords(scrollToElement)
                  scrollToY(top, 500)
                }
              }}
              className="text-sm text-white bg-red-700 p-2 px-4 rounded-full mr-5"
            >
              Request CV
            </button>
            <button
              onClick={() => {
                const scrollToElement = document.querySelector("#portfolio")
                if (scrollToElement) {
                  const { top } = getCoords(scrollToElement)
                  scrollToY(top, 500)
                }
              }}
              className="text-sm bg-gray-300 p-2 px-4 rounded-full"
            >
              My Work
            </button>
          </div>
        </div>
      </div>
      {/* -------------------------- Portfolio -------------------------- */}
      <div id="portfolio" className="bg-gray-100 px-5 py-10 xl:p-16">
        <h2 className="text-black text-5xl font-bold mb-3">Portfolio</h2>
        <p className="text-sm mb-10">showcasing some of my best work.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 border border-gray-400">
            <div className="mb-4">
              <Image
                fluid={royalUnitedFluid}
                alt="Royal United Mortgage website screenshot"
              />
            </div>
            <h2>
              <a
                href="https://www.royalunitedmortgage.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Royal United Mortgage"
                className="inline-block"
              >
                Royal United Mortgage
              </a>
            </h2>
          </div>
          <div className="bg-white p-3 border border-gray-400">
            <div className="mb-4">
              <Image fluid={hc1Fluid} alt="hc1 website screenshot." />
            </div>
            <h2>
              <a
                href="https://www.hc1.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="hc1"
                className="inline-block"
              >
                hc1
              </a>
            </h2>
          </div>
          <div className="bg-white p-3 border border-gray-400">
            <div className="mb-4">
              <Image
                fluid={indyChamberFluid}
                alt="Indianapolis Chamber of Commerce website screenshot."
              />
            </div>
            <h2>
              <a
                href="https://indychamber.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Indianapolis Chamber of Commerce"
                className="inline-block"
              >
                Indianapolis Chamber of Commerce
              </a>
            </h2>
          </div>
        </div>
      </div>
      {/* -------------------------- Call To Action -------------------------- */}
      <div
        id="cta"
        className="bg-black-90 xl:border-l xl:border-gray-700 px-5 py-10 xl:p-16 flex flex-col md:flex-row md:items-center justify-between"
      >
        <div className="pb-10 lg:pb-0 md:w-2/3">
          <h2 className="text-white text-5xl font-bold mb-10">
            Need Help With Your Mission?
          </h2>
          <p className="text-white">Hire me and get your projects done.</p>
        </div>
        <div className="mr-5">
          <button
            onClick={() => {
              const scrollToElement = document.querySelector("#contact")
              if (scrollToElement) {
                const { top } = getCoords(scrollToElement)
                scrollToY(top, 500)
              }
            }}
            className="text-lg text-white bg-red-700 p-2 px-8 rounded-full"
          >
            Hire me
          </button>
        </div>
      </div>
      {/* -------------------------- Technologies -------------------------- */}
      <div id="technologies" className="bg-gray-100 px-5 py-10 xl:p-16">
        <h2 className="text-black text-5xl font-bold mb-3">Technologies</h2>
        <p className="text-sm mb-10">tech focus.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 border border-gray-400">
            <p>Javascript</p>
            <p>React</p>
            <p>Graphql</p>
            <p>CSS</p>
          </div>
          <div className="bg-white p-3 border border-gray-400">
            <p>PHP</p>
            <p>Laravel</p>
            <p>Node</p>
            <p>Gatsby</p>
          </div>
          <div className="bg-white p-3 border border-gray-400">
            <p>Mysql</p>
            <p>MariaDb</p>
            <p>WordPress</p>
          </div>
        </div>
      </div>

      {/* -------------------------- Clients -------------------------- */}
      {/* ToDo: get real quotes. */}
      {/* <div id="clients" className="bg-gray-100 p-16">
        <h2 className="text-black text-5xl font-bold mb-3">Clients</h2>
        <p className="text-sm mb-10">what others think.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3">
            <blockquote>
              Working with Daris was awesome!
              <span>&mdash; John D</span>
            </blockquote>
          </div>
          <div className="bg-white p-3">
            <blockquote>
              Works hard and pays close attention to detail.
              <span>&mdash; Bob B</span>
            </blockquote>
          </div>
          <div className="bg-white p-3">
            <blockquote>
              Great problem solver and finisher.
              <span>&mdash; Lex L</span>
            </blockquote>
          </div>
        </div>
      </div> */}
      {/* -------------------------- Blog -------------------------- */}
      <div id="blog" className="px-5 py-10 xl:p-16">
        <h2 className="text-black text-5xl font-bold mb-3">Blog</h2>
        <p className="text-sm mb-10">check out my latest blog posts.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article
                key={node.fields.slug}
                className="bg-white p-3 border border-gray-400"
              >
                <header>
                  <h3>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
        </div>

        <Link to="/" className="text-sm bg-gray-300 p-2 px-4 rounded-full">
          Read More
        </Link>
      </div>
      {/* -------------------------- Contact -------------------------- */}
      <div id="contact" className="bg-gray-100 px-5 py-10 xl:p-16">
        <h2 className="text-black text-5xl font-bold mb-3">Contact Me</h2>
        <p className="text-sm mb-10">let's get in touch.</p>

        <div className="w-full md:w-1/2 lg:w-1/3">
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    insidePassage: file(absolutePath: { regex: "/inside-passage.webp/" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    royalUnited: file(absolutePath: { regex: "/royal-united.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hc1: file(absolutePath: { regex: "/hc1.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    indyChamber: file(absolutePath: { regex: "/indy-chamber.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
