import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid"
import "./layout.css"

import { rhythm } from "../utils/typography"
import Nav from "../components/nav"

const Container = styled.div`
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(48)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const SiteHeading = styled.h1`
  margin-bottom: ${rhythm(1.5)};
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

const Layout = ({ location, title, children }) => {

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
      <header>
        <Grid container spacing={3} alignItems="baseline">
          <Grid item sm={12} md={6}>
            <SiteHeading>
              <Link css={home_link_styles} to={`/`}>
                {title}
              </Link>
            </SiteHeading>
          </Grid>
          <Grid item sm={12} md={6}>
            <Nav location={location}/>
          </Grid>
        </Grid>
      </header>
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


