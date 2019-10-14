import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import SectionOne from '../components/containers/ProductDetail/SectionOne'
import SectionTwo from '../components/containers/ProductDetail/SectionTwo'

const Container = styled.div`
  background: linear-gradient(294.13deg, #44275d 0%, #3c5b78 100%);
  height: 155.9rem;
`

const Product_detail = () => {
  return (
    <Container>
      <Layout isFixedColor={false}>
        <SectionOne />
        <SectionTwo />
      </Layout>
    </Container>
  )
}
export default Product_detail
