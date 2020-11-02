import React from "react"
import ContactForm from "../components/contact-form"
import SideMenu from "../components/SideMenu"

export default () => {
  return (
    <div className={`page-layout`}>
      <SideMenu />

      <div className="main-content">
        <div className={`relative h-screen`}>
          <img
            className="absolute w-full h-full inset-0 z-0 opacity-75"
            alt="foo bar"
            src="http://lorempixel.com/1445/680/"
          />
          <div className="z-10 relative w-full h-full flex flex-col justify-center items-center bg-black-70">
            <div>
              <h1 className={`text-red-600 awesome-css`}>Daris Strickland</h1>
              <p className="text-white px-3 border-l-4 border-transparent">
                yore web dev.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-16">
          <h2 className="text-black text-5xl font-bold mb-3">About</h2>
          <p className="text-sm mb-10">learn about me.</p>
          <div className="flex flex-row">
            <img
              className="pr-10"
              src="http://lorempixel.com/430/535/"
              alt="foo bar"
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
          <h2 className="text-black text-5xl font-bold mb-3">Technologies</h2>
          <p className="text-sm mb-10">tech focus.</p>
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
            {Array.from({ length: 6 }).map((_, i) => {
              return (
                <div key={i} className="bg-white p-3 border border-gray-400">
                  a
                </div>
              )
            })}
          </div>
        </div>
        <div className="bg-gray-100 p-16">
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
        <div className="p-16">
          <h2 className="text-black text-5xl font-bold mb-3">Blog</h2>
          <p className="text-sm mb-10">check out my latest blog posts.</p>
        </div>
        <div className="bg-gray-100 p-16">
          <h2 className="text-black text-5xl font-bold mb-3">Contact Me</h2>
          <p className="text-sm mb-10">let's get in touch.</p>

          <ContactForm />
        </div>
        <footer className="bg-black-90 border-l border-gray-700 px-20 py-10">
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
