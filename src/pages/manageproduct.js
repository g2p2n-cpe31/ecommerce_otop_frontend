import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import SectionOne from '../components/containers/Manageproduct/SectionOne'
import SectionTwo from '../components/containers/Manageproduct/SectionTwo'
import SectionThree from '../components/containers/Manageproduct/SectionThree'

const StyledAddProduct = styled.p`
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  color: #4f4f4f;
  margin: 4.1rem 0 0.4rem 1.5rem;
`

const Manage = ({ location, history }) => {
  return (
    <Layout location={location} history={history} navbar="second">
      <StyledAddProduct>เพิ่มสินค้า</StyledAddProduct>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </Layout>
  )
}
export default Manage
