import React from 'react'
import styled from 'styled-components'
import FilterSide from '../components/containers/Search/FilterSide'
import Navbar from '../components/common/Navbar'
const Contaienr = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: 13rem;
`

const ContainerProduct = styled.div`
  display: flex;
  width: 65%;
  height: 100%;
`

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <Contaienr>
        <FilterSide />
        <ContainerProduct />
      </Contaienr>
    </>
  )
}

export default SearchPage
