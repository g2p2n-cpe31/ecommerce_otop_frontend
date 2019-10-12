import  React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Section1 from '../components/product_detail/Section1'
import Section2 from '../components/product_detail/Section2'


const Container = styled.div`
    background : linear-gradient(294.13deg, #44275D 0%, #3C5B78 100%);
    height: 155.9rem;
`

const Product_detail = () => {
    return(
            <Container>
                <Layout>
                    <Section1></Section1>
                    <Section2></Section2>
                </Layout>
            </Container>
    )
}
export default Product_detail