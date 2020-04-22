import React, { useState } from "react"
import { Link } from "gatsby"

import HomeIcon from '@material-ui/icons/Home'
import CodeIcon from '@material-ui/icons/Code'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const NavButton = (props) => {
  const { isCurrent, text, icon: Icon, className, ...rest} = props

  const classes = 'flex-auto w-full sm:w-1/2 md:w-auto hover:z-10 focus:z-10 md:flex-1 flex flex-col items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'

  const classNames = [className, classes].join(' ')

  return (
    <Link {...rest} title={text} className={`${classNames}`}>
      <span className="shadow-xs hover:shadow-2xl transition-shadow duration-500 flex items-center justify-center rounded-full p-2 bg-white">
        <Icon />
      </span>
      <span>{text}</span>
    </Link>
  )
}

const Nav = ({ location }) => {
  const [showMenu, setShowMenu] = useState(false)
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div>
      <div className={`flex justify-end`}>
        <button className={`sm:hidden p-1 m-1 bg-white-90 border rounded-none border-comb`} onClick={() => setShowMenu(!showMenu)}>
          menu
        </button>
      </div>
      <div className={`${showMenu ? 'flex' : 'hidden'} sm:flex flex-wrap max-w-screen-xl bg-gray-200 text-2xl font-light`}>
        <NavButton text={`home`}
                   to="/"
                   isCurrent={location.pathname === rootPath}
                   icon={HomeIcon}
                   className="bg-t-green"/>
        <NavButton text={`portfolio`}
                   to="/portfolio"
                   isCurrent={location.pathname === "/portfolio"}
                   icon={CodeIcon}
                   className="bg-comb"/>
        <NavButton text={`contact me`}
                   to="/contact"
                   isCurrent={location.pathname === "/contact"}
                   icon={EmailIcon}
                   className="bg-t-teal"/>

        <a target="_blank"
           className={`bg-t-purple flex-auto w-full sm:w-1/2 md:w-auto hover:z-10 focus:z-10 md:flex-1 flex flex-col items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
           rel="noopener noreferrer"
           href="https://www.linkedin.com/in/daris-strickland-868a9269"
           title="LinkedIn Profile">
        <span className="shadow-xs hover:shadow-2xl transition-shadow duration-500 flex items-center justify-center rounded-full p-2 bg-white">
          <LinkedInIcon />
        </span>
          <span>linkedin</span>
        </a>
      </div>
    </div>
  )
}

export default Nav
