import React from 'react'
import styled from 'styled-components'

const AddressText = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 16px;
    color: #FFFFFF;
    margin: 0;
`

const Container = styled.div`
    padding: 2.6rem 5.6rem 0 4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const HrCustom = styled.div`
    opacity: 0.3;
    width: 100%;
    border: 1px solid #FFFFFF;
    margin-top: 2rem;
`
const Address = ({ isUnderline = true, ...props}) => {
    return (
        <Container>
        <AddressText> {props.street} </AddressText>
           <AddressText>{props.province}</AddressText>
           <AddressText>{props.subdistrict} </AddressText>
           <AddressText> {props.code}</AddressText>
           {isUnderline ? <HrCustom/> : null}
        </Container>
    )
}

export default Address