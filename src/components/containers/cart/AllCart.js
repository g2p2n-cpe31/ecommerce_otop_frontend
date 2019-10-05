import React from 'react'
import Layout from '../../common/Layout'
import styled from 'styled-components'
import SelectAll from './SelectAll'
import Store from './Store'
import Total from './Total'

const Containers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;  
    justify-content: center;
    align-items: center;
    /* background-color: white; */
`
const Margin = styled.div`
    margin: 1rem;
`
const Cart = () => {
    return (
        <Layout>
            <Containers>
                <SelectAll></SelectAll>
                <Margin></Margin>
                <Store></Store>
                <Total></Total>
            </Containers>
        </Layout>
    )
}

export default Cart
