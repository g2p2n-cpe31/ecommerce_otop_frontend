import React from 'react'
import styled from 'styled-components'

const ContainerNavbar = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, #44275d, #3c5b78) no-repeat;
  height: 11.7rem;
  z-index: 900;
`

const Navbar = () => {
  return <ContainerNavbar />
}

export default Navbar
