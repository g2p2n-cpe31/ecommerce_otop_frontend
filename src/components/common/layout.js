/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
// import Header from './header'
// import './layout.css'
import styled, { createGlobalStyle } from 'styled-components'
import Navbar from './Navbar'

const GlobalStyle = createGlobalStyle`

  @font-face{
    font-family: 'Kanit-Regular';
    src: url('../../fonts/Kanit/Kanit-Regular.ttf') format('truetype');
  }

  @font-face{
    font-family: 'Kanit-Light';
    src: url('../../fonts/Kanit/Kanit-Light.ttf') format('truetype');
  }
 

  html {
    font-size: 62.5%;
  }

  body{
    margin: 0;
    font-family: Kanit-Regular;
    font-size: 1.6rem; /* 16px */
    /* background: linear-gradient(to top, #44275d, #3c5b78) no-repeat; */
    width: 100vw;
    overflow: hidden;
    
  }
`
const ContainerDesktop = styled.div`
  margin: 0 auto;
  width: 82%;
  /* padding: 0 30rem; */
  /* width: 100vw;
  overflow: hidden; */
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Navbar />
      {/* <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      > */}
      <ContainerDesktop>{children}</ContainerDesktop>
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
