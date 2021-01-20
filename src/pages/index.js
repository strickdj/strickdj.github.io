import React from "react"
import { SideMenu, ContactForm } from "@components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { useWindowWidth } from "@hooks"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      insidePassage: file(absolutePath: { regex: "/inside-passage.webp/" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const width = useWindowWidth()

  const [menuOpen, setMenuOpen] = React.useState(true)

  const menuOpenOrIsScreenXl = menuOpen || width >= 1280

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="page-layout w-full">
      <div
        className={`absolute col-span-2 flex flex-row items-center justify-end z-30 xl:hidden ${
          menuOpenOrIsScreenXl ? "left-64" : ""
        }`}
      >
        <button
          className={`fixed top-0 bg-black-90 inline-block text-white p-2 ring-2 ring-transparent focus:outline-none border-none ${
            menuOpenOrIsScreenXl ? "left-64" : "left-0"
          }`}
          onClick={() => {
            setMenuOpen(!menuOpen)
          }}
        >
          <svg
            width="28"
            height="28"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <SideMenu isOpen={menuOpenOrIsScreenXl} closeMenu={closeMenu} />

      <div className="main-content col-span-full xl:col-start-2 xl:col-span-2">
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
              fluid={data.insidePassage.childImageSharp.fluid}
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
                web dev.
              </p>
            </div>
          </div>
        </div>
        {/* -------------------------- About -------------------------- */}
        <div id="about" className="about bg-white px-5 py-10 xl:p-16">
          <h2 className="text-black text-5xl font-bold mb-3">About</h2>
          <p className="text-sm mb-10">learn about me.</p>
          <div className="flex flex-col lg:flex-row">
            <div className="pb-10 lg:pb-0 lg:pr-7 xl:pr-10">
              <img src="https://place-hold.it/430x535" alt="foo bar" />
            </div>
            <div className="w-full">
              <h3 className="text-red-700 mb-3">Who am i?</h3>
              <h2 className="mb-3 font-bold">Lorem ipsum dolor.</h2>
              <p className="text-base leading-loose mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <hr className="w-full my-5" />
              <button className="text-sm text-white bg-red-700 p-2 px-4 rounded-full mr-5">
                Request CV
              </button>
              <button className="text-sm bg-gray-300 p-2 px-4 rounded-full">
                My Work
              </button>
            </div>
          </div>
        </div>
        {/* -------------------------- Technologies -------------------------- */}
        <div id="technologies" className="bg-gray-100 p-16">
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
        {/* -------------------------- Call To Action -------------------------- */}
        <div
          id="cta"
          className="bg-black-90 xl:border-l xl:border-gray-700 px-5 py-10 xl:p-16 flex flex-col md:flex-row md:items-center justify-between"
        >
          <div className="pb-10 lg:pb-0 md:w-2/3">
            <h2 className="text-white text-5xl font-bold mb-10">
              Let's Work Together!
            </h2>
            <p className="text-white">
              I am availible for freelance projects. Hire me and get your
              projects done.
            </p>
          </div>
          <div className="mr-5">
            <button className="text-lg text-white bg-red-700 p-2 px-8 rounded-full">
              Hire me
            </button>
          </div>
        </div>
        {/* -------------------------- Portfolio -------------------------- */}
        <div id="portfolio" className="p-16">
          <h2 className="text-black text-5xl font-bold mb-3">Portfolio</h2>
          <p className="text-sm mb-10">showcasing some of my best work.</p>
          <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">
            {Array.from({ length: 6 }).map((_, i) => {
              return (
                <div key={i} className="bg-white p-3 border border-gray-400">
                  a
                </div>
              )
            })}
          </div>
        </div>
        {/* -------------------------- Clients -------------------------- */}
        <div id="clients" className="bg-gray-100 p-16">
          <h2 className="text-black text-5xl font-bold mb-3">Clients</h2>
          <p className="text-sm mb-10">what others think.</p>
          <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-4">
            {Array.from({ length: 3 }).map((_, i) => {
              return (
                <div key={i} className="bg-white p-3 border border-gray-400">
                  a
                </div>
              )
            })}
          </div>
        </div>
        {/* -------------------------- Blog -------------------------- */}
        <div id="blog" className="p-16">
          <h2 className="text-black text-5xl font-bold mb-3">Blog</h2>
          <p className="text-sm mb-10">check out my latest blog posts.</p>
        </div>
        {/* -------------------------- Contact -------------------------- */}
        <div id="contact" className="bg-gray-100 p-16">
          <h2 className="text-black text-5xl font-bold mb-3">Contact Me</h2>
          <p className="text-sm mb-10">let's get in touch.</p>

          <div className="w-full md:w-1/2 lg:w-1/3">
            <ContactForm />
          </div>
        </div>
        {/* -------------------------- Footer -------------------------- */}
        <footer
          id="footer"
          className="bg-black-90 border-l border-gray-700 px-20 pt-10 pb-8"
        >
          <div className="flex flex-row justify-around">
            <p className="text-gray-100">a</p>
            <p className="text-gray-100">a</p>
            <p className="text-gray-100">a</p>
          </div>
          <hr className="border-gray-700 my-5" />
          <p className="text-gray-200 text-right text-sm ">
            &copy; Daris Strickland
          </p>
        </footer>
      </div>
    </div>
  )
}
