import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

import { rhythm } from "../utils/typography"
import Nav from "../components/nav"

const Container = styled.div`
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(48)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header"
    "body"
    "footer";
  align-content: stretch;
`

const FrontPageH = styled.h1`
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

const SubPageH = styled.h2`
  margin-top: 0;
`

const home_link_styles = css`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  const home_link = (
    <Link css={home_link_styles} to={`/`}>
      {title}
    </Link>
  )

  const header = location.pathname === rootPath ? (
    <FrontPageH>{home_link}</FrontPageH>
  ) : (
    <SubPageH>{home_link}</SubPageH>
  )

  return (
    <Container>
      <Global
        styles={css`
        html, body, #___gatsby, #gatsby-focus-wrapper {
          width: 100%;
          height: 100%;
        }
      `}
      />
      <Header>
        {header}
        <Nav />
      </Header>
      <main>{children}</main>
      <Footer>
        <div>
          © {new Date().getFullYear()} Daris Strickland
        </div>
        <div>
          Built with{` `}<a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </Footer>
    </Container>
  )
}

export default Layout


