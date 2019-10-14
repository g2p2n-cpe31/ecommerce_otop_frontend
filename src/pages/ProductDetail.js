import  React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import SectionOne from '../components/ProductDetail/SectionOne'
import SectionTwo from '../components/ProductDetail/SectionTwo'


const Container = styled.div`
    background : linear-gradient(294.13deg, #44275D 0%, #3C5B78 100%);
    height: 155.9rem;
`

const Product_detail = () => {
    return(
            <Container>
                <Layout>
                    <SectionOne/>
                    <SectionTwo/>
                </Layout>
            </Container>
    )
}
export default Product_detail