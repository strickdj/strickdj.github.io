import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { motion } from "framer-motion"
import { getCoords, scrollToY } from "@utils"

const menu = [
  { label: "Home", link: "#", scrollTo: "#home" },
  { label: "About", link: "#", scrollTo: "#about" },
  { label: "Tech", link: "#", scrollTo: "#technologies" },
  { label: "Portfolio", link: "#", scrollTo: "#portfolio" },
  // { label: "Clients", link: "#", scrollTo: "#clients" },
  { label: "Blog", link: "#", scrollTo: "#blog" },
  { label: "Contact", link: "#", scrollTo: "#contact" },
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
                  <button
                    type="button"
                    onClick={() => {
                      closeMenu()
                      const scrollToElement = document.querySelector(m.scrollTo)
                      if (scrollToElement) {
                        const { top } = getCoords(scrollToElement)
                        scrollToY(top, 500)
                      }
                    }}
                    className={`focus:outline-none border-none w-full text-left block py-4 text-white text-sm`}
                  >
                    {m.label}
                  </button>
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
