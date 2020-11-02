import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image/withIEPolyfill"
import ContactForm from "../components/contact-form"

export default function Components() {
  const data = useStaticQuery(graphql`
    query ComponenetsQuery {
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

  const menu = [
    { label: "Home", link: null },
    { label: "About", link: null },
    { label: "Services", link: null },
    { label: "Portfolio", link: null },
    { label: "Clients", link: null },
    { label: "Blog", link: null },
    { label: "Contact", link: null },
  ]

  const { author } = data.site.siteMetadata
  return (
    <div className={`page-layout`}>
      <div
        className={` col-start-2 col-end-2 row-span-3 relative w-64 h-full overflow-hidden`}
      >
        <div className="overflow-y-hidden w-full h-full p-8 bg-black-90">
          <div
            className={`fixed h-full flex flex-col justify-center items-start`}
          >
            <ul className="">
              {menu.map(m => {
                return (
                  <li>
                    <a
                      href={m.link | "#"}
                      className="block p-4 text-white text-sm"
                    >
                      {m.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author.name}
              style={{
                marginBottom: 0,
                minWidth: 110,
                minHeight: 110,
                borderRadius: `100%`,
              }}
              imgStyle={{
                minWidth: 110,
                minHeight: 110,
                borderRadius: `50%`,
                border: `5px solid var(--feather-3)`,
              }}
            />
            <h2 className={`text-white mb-4`}>Daris Strickland</h2>
            <p className={`text-white text-xs mb-8`}>for hire</p>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className={`relative h-screen`}>
          <img
            className="absolute w-full h-full inset-0 z-0 opacity-75"
            alt="foo bar"
            src="http://lorempixel.com/1445/680/"
          />
          <div className="z-10 relative w-full h-full flex flex-col justify-center items-center bg-black-70">
            <h1 className={`text-comb text-center`}>Daris Strickland</h1>
            <p className="text-white">web dev guy</p>
          </div>
        </div>
        <div className="bg-white p-16">
          <h2 className="text-black text-5xl font-bold mb-3">About</h2>
          <p className="text-sm mb-10">learn about me.</p>
          <div className="flex flex-row">
            <img
              className="pr-10"
              alt="foo bar"
              src="http://lorempixel.com/430/535/"
            />
            <div className="w-full p-10">
              <h3 className="text-red-700 mb-3">Who am i?</h3>
              <h2 className="mb-3 font-bold">I think therefore I am.</h2>
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
        <div className="bg-gray-100 p-16">
          <h2 className="text-black text-5xl font-bold mb-3">Services</h2>
          <p className="text-sm mb-10">services i offer.</p>
          <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">
            {Array.from({ length: 6 }).map(_ => {
              return (
                <div className="bg-white p-3 border border-gray-400">a</div>
              )
            })}
          </div>
        </div>
        <div className="bg-black-90 border-l border-gray-700 p-16 flex flex-row items-center justify-between">
          <div className="">
            <h2 className="text-white text-5xl font-bold mb-3">
              Let's Work Together!
            </h2>
            <p className="text-white">
              I am availible for freelance projects. Hire me and get your
              projects done.
            </p>
          </div>
          <button className="text-lg text-white bg-red-700 p-2 px-8 rounded-full mr-5">
            Hire me
          </button>
        </div>
        <div className="p-16">
          <h2 className="text-black text-5xl font-bold mb-3">Portfolio</h2>
          <p className="text-sm mb-10">showcasing some of my best work.</p>
          <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">
            {Array.from({ length: 6 }).map(_ => {
              return (
                <div className="bg-white p-3 border border-gray-400">a</div>
              )
            })}
          </div>
        </div>
        <div className="bg-gray-100 p-16">
          <h2 className="text-black text-5xl font-bold mb-3">Clients</h2>
          <p className="text-sm mb-10">what others think.</p>
          <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-4">
            {Array.from({ length: 3 }).map(_ => {
              return (
                <div className="bg-white p-3 border border-gray-400">a</div>
              )
            })}
          </div>
        </div>
        <div className="p-16">
          <h2 className="text-black text-5xl font-bold mb-3">Blog</h2>
          <p className="text-sm mb-10">check out my latest blog posts.</p>
        </div>
        <div className="bg-gray-100 p-16">
          <h2 className="text-black text-5xl font-bold mb-3">Contact Me</h2>
          <p className="text-sm mb-10">let's get in touch.</p>

          <ContactForm />
        </div>
        <footer className="bg-black-90 border-l border-gray-700 py-10">
          <div className="flex flex-row justify-around">
            <p className="text-gray-100">a</p>
            <p className="text-gray-100">a</p>
            <p className="text-gray-100">a</p>
          </div>
          <hr className="border-gray-700 my-5 mx-10" />
          <p className="text-gray-200 text-center text-sm mb-10">
            &copy; Daris Strickland
          </p>
        </footer>
      </div>
    </div>
  )
}
