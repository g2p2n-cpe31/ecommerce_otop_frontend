import React from 'react'
import styled from 'styled-components'

const CreditCardBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    width: 41.5rem;
    height: 23.6rem;
    border-radius: 12px;
    background: linear-gradient(312.35deg, rgba(80, 80, 80, 0.8) 0%, rgba(208, 208, 208, 0.8) 100%);
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
`
const BankName = styled.p`
    display: flex;
    width: 100%;
    height: 5.4rem;
    margin-top: 1rem;
    margin-left: 3.2rem;
    margin-bottom: 0rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 3.6rem;
    line-height: 5.4rem;
    color: #FFFFFF;
`
const CardNumber = styled.p`
    display: flex;
    width: 30.7rem;
    height: 4.8rem;
    margin-top: 3.3rem;
    margin-left: 3.2rem;
    margin-bottom: 0rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 3.2rem;
    line-height: 4.8rem;
    color: #4F4F4F;
`
const CardName = styled.p`
    display: flex;
    width: 100%;
    margin-top: 0.5rem;
    margin-left: 3.2rem;
    margin-bottom: 0rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: #FFFFFF;
`
const ExpiryContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
const ExpiryDate = styled.p`
    display: flex;
    width: 7.7rem;
    height: 2.2rem;
    margin-top: 0.6rem;
    margin-left: 3.2rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: #FFFFFF;
`
const ExpiryDateNumber = styled.p`
    display: flex;
    width: 4.7rem;
    height: 2.7rem;
    margin-top: 0.2rem;
    margin-left: 0.9rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: #FFFFFF;
`

const AddedCreditCard = () => {
    return (
        <div>
            <CreditCardBox>
                <BankName>Card</BankName>
                <CardNumber>xxxx xxxx xxxx xxxx</CardNumber>
                <CardName>xxxxxxxxxxxxxxx</CardName>
                <ExpiryContainer>
                <ExpiryDate>วันหมดอายุ :</ExpiryDate>
                    <ExpiryDateNumber>xx/xx</ExpiryDateNumber>
                </ExpiryContainer>
            </CreditCardBox>
        </div>
    )
}

export default AddedCreditCard
