import React from 'react'
import Layout from '../components/common/Layout'
import styled from 'styled-components'

const Contaienr = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`
const ContainerFilter = styled.div`
  width: 47.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #e0e0e0;
`

const ContainerProduct = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const SearchPage = () => {
  return (
    <Layout>
      <Contaienr>
        <ContainerFilter>
          <p>pOon</p>
        </ContainerFilter>
        <ContainerProduct />
      </Contaienr>
    </Layout>
  )
}

export default SearchPage
