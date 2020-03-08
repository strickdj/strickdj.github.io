import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const StyledLink = styled(Link)`
  padding-left: ${rhythm(1.5)};
  box-shadow: none;
  font-style: ${props => props.active ? 'italic' : 'normal'};
`

const StyledA = styled("a")`
  padding-left: ${rhythm(1.5)};
  box-shadow: none;
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  @media (min-width: 960px) {
    justify-content: flex-end;
  }
`

const Nav = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <nav>
      <Ul>
        <li className={location.pathname === rootPath ? "active" : ""}>
          <StyledLink title="Home" active={location.pathname === rootPath} to="/">home</StyledLink>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <StyledLink title="About Me" active={location.pathname === "/about"} to="/about">about me</StyledLink>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <StyledLink title="Contact Me" active={location.pathname === "/contact"} to="/contact">contact me</StyledLink>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <StyledA href="" title="LinkedIn Profile"><LinkedInIcon /></StyledA>
        </li>
      </Ul>
    </nav>
  )
}

export default Nav
