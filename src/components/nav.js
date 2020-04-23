import React, { useState } from "react"
import { Link } from "gatsby"

import LinkedInIcon from "@material-ui/icons/LinkedIn"

const NavButton = (props) => {
  const { isCurrent, className, href, children, ...rest} = props

  const classes = 'sm:border-b-4 border-t-4 border-beige flex-auto w-full sm:w-1/2 md:w-auto hover:z-10 focus:z-10 md:flex-1 '

  const classNames = [className, classes, ...[isCurrent ? 'bg-comb' : 'bg-feather-dark']].join(' ')

  const LinkEl = href ? 'a' : Link;

  return (
    <LinkEl {...rest} href={href || null} className={`${classNames}`}>
      <div className={`flex items-center justify-center p-4 w-full h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
        {children}
      </div>
    </LinkEl>
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
      <div className={`${showMenu ? 'flex' : 'hidden'} sm:flex flex-wrap max-w-screen-xl bg-gray-200 text-2xl font-light text-beige`}>
        <NavButton title={`home`}
                   to="/"
                   isCurrent={location.pathname === rootPath}
                   >
          <span>home</span>
        </NavButton>

        <NavButton title={`portfolio`}
                   to="/portfolio"
                   isCurrent={location.pathname === "/portfolio"}
                   >
          <span>my work</span>
        </NavButton>

        <NavButton title={`contact me`}
                   to="/contact"
                   isCurrent={location.pathname === "/contact"}
                   >
          <span>contact me</span>
        </NavButton>

        <NavButton title={`linkedin`}
                   href="https://www.linkedin.com/in/daris-strickland-868a9269"
                   target="_blank"
                   rel="noopener noreferrer"
                   isCurrent={false}
                   >
          <span>linked</span> <LinkedInIcon/>
        </NavButton>

      </div>
    </div>
  )
}

export default Nav
