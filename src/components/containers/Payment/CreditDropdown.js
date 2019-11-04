import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Circle from '../../../images/Pay/circle.svg'
import Plus from '../../../images/Pay/plus.svg'


const ContainerDropdown = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    margin-bottom: 2.5rem;
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
       <ContainerDropdown>
            <CreditCard>
                <BankName>Card</BankName>
                <CardNumber>xxxx xxxx xxxx xxxx</CardNumber>
                <CardName>x xxxxxxxxxxxxxxxxxxx</CardName>
                <ContainerDate>
                    <Date>วันหมดอายุ :</Date>
                    <DateNumber>xx/xx</DateNumber>
                </ContainerDate>
                <Mask>
                    <IconCircle src={Circle}/>
                    <IconPlus src={Plus}/>
                </Mask>
            </CreditCard>
            <CreditCard>
                <BankName>Card</BankName>
                <CardNumber>xxxx xxxx xxxx xxxx</CardNumber>
                <CardName>x xxxxxxxxxxxxxxxxxxx</CardName>
                <ContainerDate>
                    <Date>วันหมดอายุ :</Date>
                    <DateNumber>xx/xx</DateNumber>
                </ContainerDate>
                <Mask>
                    <IconCircle src={Circle}/>
                    <IconPlus src={Plus}/>
                </Mask>
            </CreditCard>
            <CreditCard>
                <BankName>Card</BankName>
                <CardNumber>xxxx xxxx xxxx xxxx</CardNumber>
                <CardName>x xxxxxxxxxxxxxxxxxxx</CardName>
                <ContainerDate>
                    <Date>วันหมดอายุ :</Date>
                    <DateNumber>xx/xx</DateNumber>
                </ContainerDate>
                <Mask>
                    <IconCircle src={Circle}/>
                    <IconPlus src={Plus}/>
                </Mask>
            </CreditCard>
            <CreditCard>
                <BankName>Card</BankName>
                <CardNumber>xxxx xxxx xxxx xxxx</CardNumber>
                <CardName>x xxxxxxxxxxxxxxxxxxx</CardName>
                <ContainerDate>
                    <Date>วันหมดอายุ :</Date>
                    <DateNumber>xx/xx</DateNumber>
                </ContainerDate>
                <Mask>
                    <IconCircle src={Circle}/>
                    <IconPlus src={Plus}/>
                </Mask>
            </CreditCard>
       </ContainerDropdown>
    )
}
export default CreditDropdown