import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { motion } from "framer-motion"
import { getCoords, scrollToY } from "@utils"

// ToDo:
// menu open state needs to persist across different pages.
// tapping outside sidebar closes sidebar and remove button when sidebar is open.

const menu = [
  { label: "Home", link: "/#home", scrollTo: "#home" },
  { label: "About", link: "/#about", scrollTo: "#about" },
  { label: "Tech", link: "/#technologies", scrollTo: "#technologies" },
  { label: "Portfolio", link: "/#portfolio", scrollTo: "#portfolio" },
  // { label: "Clients", link: "/#clients", scrollTo: "#clients" },
  { label: "Blog", link: "/#home", scrollTo: "#blog" },
  { label: "Contact", link: "/#contact", scrollTo: "#contact" },
]

export function SideMenu({ isOpen, closeMenu }) {
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

  const { author } = data.site.siteMetadata
  return (
    <div
      className={`sidebar absolute top-0 left-0 z-20 xl:block col-start-1 col-end-1 row-span-full xl:relative ${
        isOpen ? "" : ""
      }`}
    >
      <motion.div
        key="MobileNavigation"
        initial={{ x: `-100%`, opacity: 0 }}
        animate={{ x: isOpen ? "0%" : `-100%`, opacity: isOpen ? 1 : 0 }}
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
  )
}

export default SideMenu
