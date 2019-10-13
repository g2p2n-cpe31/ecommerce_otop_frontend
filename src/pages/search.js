import React from 'react'
import styled from 'styled-components'
import FilterSide from '../components/containers/Search/FilterSide'
import Navbar from '../components/common/Navbar'
import ContainerProduction from '../components/common/ContainerProduct'
import Pagination from '../components/common/Pagination'

const Contaienr = styled.div`
  display: flex;
  width: 100%;
  /* height: 100vh; */
  padding-top: 13rem;
`

const WrapProduct = styled.div`
  display: flex;
  width: 65%;
  height: 100%;
  flex-direction: column;
  padding: 4.3rem 8.2rem;
`

const WordSearching = styled.p`
  font-family: Kanit;
  font-size: 18px;
  color: #828282;
  span {
    color: #44275d;
  }
`

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <Contaienr>
        <FilterSide />
        <WrapProduct>
          <WordSearching>
            ค้นหา <span>" ผลไม้สด "</span>
          </WordSearching>
          <ContainerProduction />
          <Pagination />
        </WrapProduct>
      </Contaienr>
    </>
  )
}

export default SearchPage
