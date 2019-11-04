import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 7.4rem;
    margin-bottom: 5rem;
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