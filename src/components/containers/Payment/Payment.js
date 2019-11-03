import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'

const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 7.4rem;
`

const PaymentIndex = () => {
    return (
        <Container>
           <Left/>
           <Right/>
        </Container>
    )
}

export default PaymentIndex