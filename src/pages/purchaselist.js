import React from 'react'
// import SEO from '../components/utility/seo'
import styled from 'styled-components'
// import { QuantityProvider } from '../components/context/QuantityProduct'
import PurchaseOrder from '../components/containers/PurchaseOrder/PurchaseOrder.js'
import GlobalStyles from '../components/utility/GlobalStyle'

const Container = styled.div`
  margin: 0 0;
`


const PurchaseList = ({ location }) => {
    return (
        <>
            <Container>
                <GlobalStyles />
                    <PurchaseOrder />
            </Container>
        </>
    )
}
  
export default PurchaseList