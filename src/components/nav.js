import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import isPropValid from "@emotion/is-prop-valid"

import { rhythm } from "../utils/typography"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const StyledLink = styled(Link, {
  shouldForwardProp: prop => isPropValid(prop)
})`
  padding-left: ${rhythm(1.5)};
  box-shadow: none;
  font-style: ${props => props.isCurrent ? 'italic' : 'normal'};
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
  flex-wrap: wrap;
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
        <li>
          <StyledLink title="Home" isCurrent={location.pathname === rootPath} to="/">home</StyledLink>
        </li>
        <li>
          <StyledLink title="About Me" isCurrent={location.pathname === "/about"} to="/about">about me</StyledLink>
        </li>
        <li>
          <StyledLink title="Contact Me" isCurrent={location.pathname === "/contact"} to="/contact">contact me</StyledLink>
        </li>
        <li>
          <StyledLink title="Test" isCurrent={location.pathname === "/sudoku"} to="/sudoku">sudoku</StyledLink>
        </li>
        <li>
          <StyledA target="_blank"
                   rel="noopener noreferrer"
                   href="https://www.linkedin.com/in/daris-strickland-868a9269"
                   title="LinkedIn Profile">
            <LinkedInIcon />
          </StyledA>
        </li>
      </Ul>
    </nav>
  )
}

export default Nav
