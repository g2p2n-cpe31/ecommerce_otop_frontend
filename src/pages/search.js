import React, { useContext } from 'react'
import styled from 'styled-components'
import FilterSide from '../components/containers/Search/FilterSide'
import Layout from '../components/common/Layout'
import ContainerProduction from '../components/common/ContainerProduct'
import Pagination from '../components/common/Pagination'
import {
  SearchValueContext,
  SearchValueProvider,
} from '../components/context/SearchValue'

const WrapProduct = styled.div`
  display: flex;
  width: 61%;
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

const SearchPage = ({ location, history }) => {
  const { state } = useContext(SearchValueContext)
  return (
    <Layout haveSpace={false} location={location} history={history}>
      <FilterSide />
      <WrapProduct>
        <WordSearching>
          ค้นหา <span>" {state.value} "</span>
        </WordSearching>
        <ContainerProduction />
        <Pagination />
      </WrapProduct>
    </Layout>
  )
}

const Search = ({ location, history }) => {
  return (
    <SearchValueProvider>
      <SearchPage location={location} history={history} />
    </SearchValueProvider>
  )
}

export default Search
