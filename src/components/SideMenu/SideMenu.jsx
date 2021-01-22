import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { motion } from "framer-motion"
import { useAppState } from "../../appState"

// ToDo:
// tapping outside sidebar closes sidebar and remove button when sidebar is open.

const menu = [
  { label: "Home", link: "/", scrollTo: "#home" },
  { label: "About", link: "/#about", scrollTo: "#about" },
  { label: "Portfolio", link: "/#portfolio", scrollTo: "#portfolio" },
  { label: "Tech", link: "/#technologies", scrollTo: "#technologies" },
  // { label: "Clients", link: "/#clients", scrollTo: "#clients" },
  { label: "Blog", link: "/#home", scrollTo: "#blog" },
  { label: "Contact", link: "/#contact", scrollTo: "#contact" },
]

export function SideMenu() {
  const data = useStaticQuery(graphql`
    query BlaQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 110, height: 110) {
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

  const { toggleMenu, closeMenu, menuOpen } = useAppState()
  const { author } = data.site.siteMetadata
  return (
    <>
      <div
        className={`absolute col-span-2 flex flex-row items-center justify-end z-30 xl:hidden ${
          menuOpen ? "left-64" : ""
        }`}
      >
        <button
          className={`fixed top-0 bg-black-90 inline-block text-white p-2 ring-2 ring-transparent focus:outline-none border-none ${
            menuOpen ? "left-64" : "left-0"
          }`}
          onClick={() => {
            toggleMenu()
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
      <div
        className={`sidebar absolute top-0 left-0 z-20 xl:block col-start-1 col-end-1 row-span-full xl:relative ${
          menuOpen ? "" : ""
        }`}
      >
        <motion.div
          key="MobileNavigation"
          initial={{ x: menuOpen ? "0%" : `-100%`, opacity: menuOpen ? 1 : 0 }}
          animate={{ x: menuOpen ? "0%" : `-100%`, opacity: menuOpen ? 1 : 0 }}
          exit={{ x: `-100%`, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          className="fixed w-64 inset-y-0 overflow-y-scroll bg-black-90 scroll-hidden pt-12"
        >
          <div className="sidebar__inner flex flex-col items-start">
            <ul className="w-full flex flex-col items-stretch mb-5">
              {menu.map((m, i) => {
                return (
                  <li
                    key={m.label}
                    className="px-8 transition duration-500 ease-in-out hover:bg-black-30 transform hover:-translate-y-1 hover:scale-110"
                  >
                    <Link
                      to={m.link}
                      state={{ scrollTo: m.scrollTo }}
                      onClick={closeMenu}
                      className={`focus:outline-none border-none w-full text-left block py-4 text-white text-sm`}
                    >
                      {m.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="flex bg-white w-full pl-8 mb-5 border-r-2 border-black">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author.name}
                style={{
                  marginBottom: 0,
                  minWidth: 110,
                  minHeight: 110,
                  maxHeight: "100%",
                }}
                imgStyle={{
                  minWidth: 110,
                  minHeight: 110,
                  maxHeight: "100%",
                }}
              />
            </div>

            <div className="pl-8">
              <h2 className={`text-white hidden sm:block mb-4`}>
                Daris Strickland
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default SideMenu
