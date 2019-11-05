import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import SectionOne from '../components/containers/ProductDetail/SectionOne'
import SectionTwo from '../components/containers/ProductDetail/SectionTwo'
import { QuantityProvider } from '../components/context/QuantityProduct'

const Container = styled.div`
  background: linear-gradient(294.13deg, #44275d 0%, #3c5b78 100%);
  height: 155.9rem;
`

const Product_detail = ({ location }) => {
  return (
    <QuantityProvider>
      <Container>
        <Layout isFixedColor={false} location={location}>
          <SectionOne />
          <SectionTwo />
        </Layout>
      </Container>
    </QuantityProvider>
  )
}
export default Product_detail
