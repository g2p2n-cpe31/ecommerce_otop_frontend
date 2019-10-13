import React from 'react'
import styled from 'styled-components'
import ItemProduct from './ItemProduct'

const Container = styled.div`
  width: 100%;
  max-width: 82rem;
  display: flex;
  border-top: 2px solid #e0e0e0;
  justify-content: space-around;
  flex-wrap: wrap;
`

const ContainerProduct = () => {
  return (
    <Container>
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
    </Container>
  )
}

export default ContainerProduct
