import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const menu = [
  { label: "Home", link: null },
  { label: "About", link: null },
  { label: "Services", link: null },
  { label: "Portfolio", link: null },
  { label: "Clients", link: null },
  { label: "Blog", link: null },
  { label: "Contact", link: null },
]

export default function SideMenu() {
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
    <div className={`col-start-2 col-end-2 row-span-3 relative`}>
      <div className="fixed w-64 inset-y-0 overflow-y-scroll bg-black-90">
        <div className={`h-full flex flex-col items-start`}>
          <ul className="w-full flex flex-col items-stretch mb-5">
            {menu.map((m, i) => {
              return (
                <li
                  key={m.label}
                  className="px-8 transition duration-500 ease-in-out hover:bg-black-30 transform hover:-translate-y-1 hover:scale-110"
                >
                  <a
                    href={m.link || "#"}
                    className={`block py-4 text-white text-sm`}
                  >
                    {m.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex bg-white w-full pl-8 mb-5">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author.name}
              style={{
                marginBottom: 0,
                minWidth: 110,
                minHeight: 110,
              }}
              imgStyle={{
                minWidth: 110,
                minHeight: 110,
              }}
            />
          </div>

          <div className="pl-8">
            <h2 className={`text-white mb-4`}>Daris Strickland</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
