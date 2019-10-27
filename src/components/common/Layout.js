/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'
// import Header from './header'
// import './layout.css'
import styled from 'styled-components'
import GlobalStyle from '../utility/GlobalStyle'
import Navbar from './Navbar'

const ContainerHaveSpace = styled.div`
  margin: 0 auto;
  width: 84.58333%;
  max-width: 136.6rem;
  /* z-index: 2; */
  padding-top: 13rem;
`

const ContainerFitScreen = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  padding-top: 13rem;
`

const Layout = ({ haveSpace = true, isFixedColor = true, ...props }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <GlobalStyle />
      <Navbar isFixedColor={isFixedColor} />
      {/* <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      > */}
      {haveSpace ? (
        <ContainerHaveSpace>{props.children}</ContainerHaveSpace>
      ) : (
        <ContainerFitScreen>{props.children}</ContainerFitScreen>
      )}

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
