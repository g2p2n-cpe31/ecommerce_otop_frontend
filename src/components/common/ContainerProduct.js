import React, { useState } from 'react'
import styled from 'styled-components'
import ItemProduct from './ItemProduct'
// import axios from 'axios'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 82rem;
  display: flex;
  border-top: 2px solid #e0e0e0;
  justify-content: space-around;
  flex-wrap: wrap;
`

const ContainerProduct = () => {
  const [products] = useState([])

  // const getProduct = async () => {
  //   try {
  //     const res = await axios.get(
  //       'https://otop-d5bqdesqsq-an.a.run.app/v01/api/store'
  //     )
  //     setProducts(res.data)
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Container>
      {products.map(item => (
        <ItemProduct name={item.name} price={item.phoneNumber} />
      ))}
      <ItemProduct />
      <ItemProduct />
      <ItemProduct />
    </Container>
  )
}

export default ContainerProduct
