import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
// import Checkbox from '@material-ui/core/Checkbox'
import CreditDropdown from './CreditDropdown'
import Circle from '../../../images/Pay/circle.svg'
import Plus from '../../../images/Pay/plus.svg'


const ContainerLeft = styled.div`
    border-radius: 0.2rem;
    box-sizing: border-box;
`
const ContainerPayment = styled.div`
    display: flex;
    flex-direction: column;
    width: 55rem;
    height: 72rem;
    padding: 3.6rem 4.5rem 3.6rem 4.5rem;
    box-sizing: border-box;
    overflow: ${props => (props.overflow ? 'scroll': 'none')};
    border-radius: 1rem;
    background-color:  ${props => (props.credit ? '#F2F2F2':'rgba(255,255,255,0.1)')};
`

const ChoiceText = styled.p`
    font-family: Kanit;
    font-weight: normal;
    font-size: 30px;
    color: #333333;
    margin: 0;
`

const ContainerChoice = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.6rem 16.5rem 3.5rem 2.1rem;
`

const ContainerButton = styled(Button)`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 25rem;
        height: 4rem;
        background: ${props => (props.isSelect? 'rgba(91, 60, 120, 0.1)' : '#FBFBFB')};
        border: 2px solid ${props => (props.isSelect? 'rgba(91, 60, 120, 0.5)' : '#BDBDBD')};
        text-transform: initial;
        padding:0 0 0 1.2rem;
        margin-bottom: 1.4rem;

    &:last-child{
        margin-bottom: 0;
    }
    &:hover{
        background: rgba(91, 60, 120, 0.1);
    }
`

// const StyledCheckBox = styled(Checkbox)`
//     &&{
//         margin-right: 0.5rem;
//         color: #5B3C78;

//         &:hover{
//             background: rgba(91, 60, 120, 0.1);
//             opacity: .3;
//         }
//     }
// `

const ContainerText = styled.p`
    font-family: Kanit;
    font-weight:${props => (props.isSelect? 'normal': '300')};
    font-size: 18px;
    color: ${props => (props.isSelect? '#5B3C78' : '#4F4F4F')};
    margin: 0 ;
    box-sizing: border-box;
    margin-left: 4.7rem;
`

const ContainerCredit = styled.div`
    display: flex;
    justify-content: center;
    width: 32.1rem;
    margin-left: 2.2rem;
    margin-top: 2rem;
    background: #FFFFFF;
    border-radius: 0.3rem;

`

const TextCredit = styled.p`
    font-family: Kanit;
    font-weight: normal;
    color: #5B3C78;
    font-size: 1.4rem;
    margin-right: 5.8rem;
    cursor: pointer;
`

const TextAccountBank = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.4rem;
    color: #4F4F4F;
`

const CreditCard = styled(Button)`
    display: flex;
    margin-left: 2.2rem;
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




const Left = () => {
    const [select,setSelect] = useState({
        ems: false,
        kerry: false,
        standardexpress: false,
    })

    const [credit,setCredit] = useState(true)
    const [overflow,setOverflow] = useState(true)


    const handleCheck = () => {
        setCredit(false)
        setOverflow(true)
    }


    return (
           <ContainerLeft>
             <ContainerPayment overflow={overflow} credit={credit}>
             {
                        credit ? (
                        <>
                            <ChoiceText>ตัวเลือกการจัดส่ง</ChoiceText>
                            <ContainerChoice>
                                <ContainerButton onClick={() => {setSelect({'ems': true})}} isSelect={select.ems}>
                                    {/* <StyledCheckBox/> */}
                                    <ContainerText isSelect={select.ems}>ems</ContainerText>
                                </ContainerButton>
                                <ContainerButton onClick={() => {setSelect({'kerry': true})}} isSelect={select.kerry}>
                                    {/* <StyledCheckBox/> */}
                                    <ContainerText isSelect={select.kerry}>kerry</ContainerText>
                                </ContainerButton>
                                <ContainerButton onClick={() => {setSelect({'standardexpress': true})}} isSelect={select.standardexpress}>
                                    {/* <StyledCheckBox/> */}
                                    <ContainerText isSelect={select.standardexpress}>standard express</ContainerText>
                                </ContainerButton>
                            </ContainerChoice>
                            <ChoiceText>การชำระเงิน</ChoiceText>
                            <ContainerCredit>
                                    <TextCredit>บัตรเครดิต / เดบิต</TextCredit>
                                    <TextAccountBank>บัญชีธนาคาร</TextAccountBank>
                            </ContainerCredit>
                            <CreditCard onClick={() => handleCheck() }>
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
                        </>): <CreditDropdown/>
                    }
             </ContainerPayment>
           </ContainerLeft>
    )
}

export default Left