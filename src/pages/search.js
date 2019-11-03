import React from 'react'
import styled from 'styled-components'
import FilterSide from '../components/containers/Search/FilterSide'
import Layout from '../components/common/Layout'
import ContainerProduction from '../components/common/ContainerProduct'
import Pagination from '../components/common/Pagination'

const WrapProduct = styled.div`
  display: flex;
  width: 58%;
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

const ContainerSearch = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const SearchPage = ({ location, history }) => {
  return (
    <>
      <Layout haveSpace={false} location={location} history={history}>
        {/* <ContainerSearch> */}
        <FilterSide />
        <WrapProduct>
          <WordSearching>
            ค้นหา <span>" ผลไม้สด "</span>
          </WordSearching>
          <ContainerProduction />
          <Pagination />
        </WrapProduct>
        {/* </ContainerSearch> */}
      </Layout>
    </>
  )
}

export default SearchPage
