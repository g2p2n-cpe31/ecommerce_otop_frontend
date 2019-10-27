import React from 'react'
import AddrBook from '../components/containers/Address/AddrBook'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Option from '../components/containers/Profile/Option'
import SEO from '../components/utility/seo'

const Container = styled.div`
    display: flex;
    flex-direction: row;

`

const address = () => {
    return (
        <div>
            <SEO title="สมุดที่อยู่" />
            <Layout>
               <Container>
                    <Option/>
                    <AddrBook />
               </Container>
            </Layout>
        </div>
    )
}

export default address

