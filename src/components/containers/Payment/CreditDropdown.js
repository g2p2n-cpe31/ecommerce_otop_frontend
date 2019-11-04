import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const ContainerLeft = styled.div`
    width: 50%;
    border-radius: 0.2rem;
    box-sizing: border-box;
`


const ContainerPayment = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #F2F2F2;
    padding: 4rem 4.9rem 4.6rem 4.6rem;
    box-sizing: border-box;
`



const ContainerDropdown = styled.div`
    display: flex;
    justify-content: flex-start;
    position: relative;
`

const CreditCard = styled(Button)`
    display: flex;
    margin-left: 1.2rem;
    background: linear-gradient(312.35deg, rgba(80, 80, 80, 0.8) 0%, rgba(208, 208, 208, 0.8) 100%);
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
    width: 41.5rem;
    height: 23.6rem;
    margin-top: 2.8rem;
    text-transform: initial;
    border-radius: 12px;
    padding: 0;
    position: relative;

    & > span {
        height: 23.6rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

const BankName = styled.p`
    font-family: Kanit;
    font-weight: normal;
    font-size: 3.6rem;
    color: #FFFFFF;
    margin: 0 0 3.3rem 3.2rem;
`

const CardNumber = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 3.2rem;
    color: #4F4F4F;
    margin: 0 0 0.3rem 3.2rem;
    line-height: 48px;
`

const CardName = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 2.4rem;
    margin: 0 0 0.2rem 3.2rem;
    color: #FFFFFF;
`

const ContainerDate = styled.div`
    display: flex;
`

const Date = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.5rem;
    color: #FFFFFF;
    margin: 0 0.9rem 0 3.2rem;
    line-height: 22px;
`

const DateNumber = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.8rem;
    color: #FFFFFF;
    margin: 0;
    line-height: 22px;
`

const Mask = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 41.5rem;
    height: 23.6rem;
    border-radius: 12px;
    position: absolute;
    opacity: 1rem;
    background: linear-gradient(312.35deg, rgba(80, 80, 80, 0.8) 0%, rgba(208, 208, 208, 0.8) 100%);
`


const IconCircle = styled.img`
    display: flex;
    width: 10rem;
    height: 10rem;
`

const IconPlus = styled.img`
    width: 4.6rem;
    height: 4.6rem;
    position: absolute;
`

const ItemDropdown = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    background: red;
    padding: 4rem 4.9rem 4.6rem 4.6rem;
`


const CreditDropdown = () => {

    return(
       <ContainerLeft>
            <ContainerPayment>
            </ContainerPayment>
       </ContainerLeft>
    )
}
export default CreditDropdown