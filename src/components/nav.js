import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"

const home_link_styles = css`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const StyledLink = styled(Link)`
  padding-left: ${rhythm(1.5)};
  box-shadow: none;
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
`

const Li = styled.li`
  
`

const Nav = ({ location }) => {

  return (
    <nav>
      <Ul>
        <Li>
          <StyledLink to="/">home</StyledLink>
        </Li>
        <li>
          <StyledLink to="/about">about me</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">contact me</StyledLink>
        </li>
      </Ul>
    </nav>
  )
}

export default Nav
