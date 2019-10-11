import React from 'react'
import Layout from '../components/common/Layout'
import styled from 'styled-components'
import FilterSide from '../components/containers/Search/FilterSide'

const Contaienr = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
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
        <FilterSide />
        <ContainerProduct />
      </Contaienr>
    </Layout>
  )
}

export default SearchPage
