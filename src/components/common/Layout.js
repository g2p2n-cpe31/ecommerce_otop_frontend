/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GlobalStyle from '../utility/GlobalStyle'
import Navbar from './Navbar'
import NavbarDropDown from './NavbarDropDown'
import { CartOpenProvider } from '../context/CartOpen'
import { FirebaseContext, FirebaseProvider } from '../context/FirebaseApp'

const Layout = ({
  navbar = 'default',
  haveSpace = true,
  isFixedColor = true,
  ...props
}) => {
  const [isManageProd] = useState(true)
  const [notification] = useState(0)

  const ContainerHaveSpace = styled.div`
    margin: 0 auto;
    width: ${{ default: '82%', second: '84.533%' }[navbar]};
    /* width: 84.58333%; */
    max-width: ${{ default: '136.6rem', second: '162.4rem' }[navbar]};
    /* z-index: 2; */
    padding-top: ${{ default: '13rem', second: '0' }[navbar]};
  `

  const ContainerFitScreen = styled.div`
    margin: 0 auto;
    display: flex;
    width: 100%;
    padding-top: ${{ default: '13rem', second: '0' }[navbar]};
  `
  return (
    <FirebaseProvider>
      <CartOpenProvider>
        <GlobalStyle />
        {
          {
            default: (
              <Navbar
                isFixedColor={isFixedColor}
                location={props.location}
                history={props.history}
              />
            ),
            second: (
              <NavbarDropDown
                isManageProd={isManageProd}
                notification={notification}
              />
            ),
          }[navbar]
        }
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
      </CartOpenProvider>
    </FirebaseProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
