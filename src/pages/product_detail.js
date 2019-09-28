import  React from 'react'
import styled from 'styled-components'
import Navbar from '../components/common/Navbar'
import Section1 from '../components/product_detail/section1'
import Section2 from '../components/product_detail/section2'

const Container = styled.div`
    background : linear-gradient(294.13deg, #44275D 0%, #3C5B78 100%);
    height: 100%;
`



const Product_detail = () => {
    return(
        <>
        <Container>
            <Navbar></Navbar>
            <Section1></Section1>
            <Section2></Section2>
        </Container>
        </>
    )
}
export default Product_detail