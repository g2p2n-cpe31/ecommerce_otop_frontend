import React from 'react'
// import SEO from '../components/utility/seo'
import styled from 'styled-components'
// import { QuantityProvider } from '../components/context/QuantityProduct'
import PurchaseOrder from '../components/containers/PurchaseOrder/PurchaseOrder.js'
import Layout from '../components/common/Layout'

const Container = styled.div`
  margin: 0 0;
`


const PurchaseList = ({ location ,history}) => {
    return (
        <>
            <Layout location={location} history={history} navbar="second">
                <PurchaseOrder />
            </Layout>
        </>
    )
}
  
export default PurchaseList