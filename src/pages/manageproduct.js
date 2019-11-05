import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import SectionOne from '../components/containers/Manageproduct/SectionOne'
import SectionTwo from '../components/containers/Manageproduct/SectionTwo'
import SectionThree from '../components/containers/Manageproduct/SectionThree'
import axios from 'axios'

const StyledAddProduct = styled.p`
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  color: #4f4f4f;
  margin: 4.1rem 0 0.4rem 1.5rem;
`


const Manage = ({ location, history }) => {
  const [products, setProduct] = useState([])


  useEffect(()=> {
    search('')
  }, [])

  const search = async (valueSearch) =>
    {
        try{
            const res = await axios.get(`https://otop-d5bqdesqsq-an.a.run.app/v01/api/product/name/${valueSearch}`)
            setProduct(res.data)
            console.log(valueSearch, res.data)
        }catch (error){
            console.log(error);
        }
    }


  return (
    <Layout location={location} history={history} navbar="second">
      <StyledAddProduct>เพิ่มสินค้า</StyledAddProduct>
      <SectionOne search={search} />
      <SectionTwo  search={search} />
      <SectionThree  products={products}  search={search}/>
    </Layout>
  )
}
export default Manage
