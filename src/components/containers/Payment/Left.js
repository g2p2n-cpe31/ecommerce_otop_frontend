import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'


const ContainerLeft = styled.div`
    width: 50%;
    border-radius: 0.2rem;
    box-sizing: border-box;
`
const ContainerPayment = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60rem;
    background: #F2F2F2;
    padding: 4rem 0 4.6rem 4.6rem;
    box-sizing: border-box;
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
    padding: 3.6rem 16.5rem 4.5rem 2.1rem;
`

const ContainerButton = styled(Button)`
        display: flex;
        justify-content: flex-start;
        width: 25rem;
        height: 4rem;
        background: #FBFBFB;
        text-transform: initial;
        border-radius: 3px;
        border: 2px solid #BDBDBD;
        border-color: #BDBDBD;
        padding-left: 1.2rem;
        margin-bottom: 1.4rem;

    &:last-child{
        margin-bottom: 0;
    }
`

const StyledCheckBox = styled(Checkbox)`
    &&{
        margin-right: 0.5rem;
    }
    &.MuiCheckbox-colorSecondary{
        color: #5B3C78;
    }
    &.span{
        color: #5B3C78;
    }
`

const ContainerText = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 18px;
    color: #4F4F4F;
    margin: 0 ;
    padding-bottom: 0.1rem;
    box-sizing: border-box;
`

const ContainerCredit = styled.div`
    display: flex;
    justify-content: center;
    width: 32.1rem;
    margin-left: 1.2rem;
    margin-top: 2.5rem;
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


const Left = () => {
    return (
           <ContainerLeft>
             <ContainerPayment>
                    <ChoiceText>ตัวเลือกการจัดส่ง</ChoiceText>
                    <ContainerChoice>
                        <ContainerButton>
                            <StyledCheckBox/>
                             <ContainerText>ems</ContainerText>
                        </ContainerButton>
                        <ContainerButton>
                            <StyledCheckBox/>
                             <ContainerText>kerry</ContainerText>
                        </ContainerButton>
                        <ContainerButton>
                            <StyledCheckBox/>
                             <ContainerText>standard express</ContainerText>
                        </ContainerButton>
                    </ContainerChoice>
                    <ChoiceText>การชำระเงิน</ChoiceText>
                    <ContainerCredit>
                            <TextCredit>บัตรเครดิต / เดบิต</TextCredit>
                            <TextAccountBank>บัญชีธนาคาร</TextAccountBank>
                    </ContainerCredit>
             </ContainerPayment>
           </ContainerLeft>
    )
}

export default Left