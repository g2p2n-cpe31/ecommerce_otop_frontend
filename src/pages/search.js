import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import FilterSide from '../components/containers/Search/FilterSide'
import Layout from '../components/common/Layout'
import ContainerProduction from '../components/common/ContainerProduct'
import Pagination from '../components/common/Pagination'
import axios from 'axios'
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
  const [product,setProduct] = useState([])
  const [productOne,setProductOne] = useState([])
  const [filters, setFilters] = useState({
      sortby : '',
      cata: '',
      region: '',
      price_min: '',
      price_max: '',
  })
  const getProduct = async () =>
       {
           try{
               const res = await axios.get('https://otop-d5bqdesqsq-an.a.run.app/v01/api/searchpage/'+filters.sortby+'/cata/'+filters.cata+'/region/'+filters.region+'/price/'+filters.price_min+'/'+filters.price_max+'/name/'+state.value,
            )
            setProduct(res.data)
            console.log(res.data)
           }catch (error){
               console.log(error)
           }
       }

  const getProductOne = async () =>
       {
           try{
               const res = await axios.get('https://otop-d5bqdesqsq-an.a.run.app/v01/api/product/name'+state.value,
            )
            setProductOne(res.data)
            console.log(res.data)
           }catch (error){
               console.log(error)
           }
       }



  return (
    <Layout haveSpace={false} location={location} history={history}>
      <FilterSide setFilters={setFilters} getProduct={getProduct}/>
      <WrapProduct>
        <WordSearching>
          ค้นหา <span>" {state.value} "</span>
        </WordSearching>
        <ContainerProduction   product={product}/>
        <Pagination  filters={filters} getProductOne={getProductOne}/>
      </WrapProduct>
    </Layout>
  )
}

const Search = ({ location, history }) => {

  return (
    <SearchValueProvider>
      <SearchPage location={location} history={history}  />
    </SearchValueProvider>
  )
}

export default Search
