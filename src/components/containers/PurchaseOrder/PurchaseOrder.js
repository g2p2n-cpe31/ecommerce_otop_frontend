import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import PaymentPending from './PaymentPending'
import PendingShip from './PendingShip';
import SuccessShip from './SuccessShip';

// import Table from '../Manageproduct/SectionThree'
// import SearchTextBox from '../Manageproduct/SectionTwo'

const Background = styled(Container)`
    background-color: #F2F2F2;
    max-width: 144rem;
    width: 100%;
    min-height: 80rem;
    padding: 0 0;    
`

const HeaderText = styled.div`
    font-family: Kanit;
    font-size: 3rem;
    line-height: 4.5rem;
    letter-spacing: 0.05rem;
    color: #4F4F4F;
    max-width: 17rem;
    max-height: 4.5rem;
    width: 100%;
    height: 100%;
    padding-top: 4.1rem;
    margin-left: 1.5rem;
`

const MenuContainer = styled(Container)`
    background-color: #fff;
    max-width: 43.5rem;
    max-height: 4.4rem;
    width: 100%;
    height: 100%;
    padding: 0 0;
    margin-top: 3.1rem;
    margin-left: 0;
    display: flex;
    flex-direction: row;
    /* justify-content: flex-start; */
`

const MenuBigContainer = styled(Container)`
    background-color: #fff;
    color: #4F4F4F;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2.1rem;
    max-width: 43.5rem;
    width: 40%;
    height: 4.4rem;
    padding: 0 0;
    margin: 0 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    & :hover{
        cursor: pointer;
        color: #E89C6B;        
    }
`

const MenuSmallContainer = styled(Container)`
    background-color: #fff;
    color: #4F4F4F;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2.1rem;
    max-width: 43.5rem;
    width: 30%;
    height: 4.4rem;
    padding: 0 0;
    margin: 0 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    & :hover{
        cursor: pointer;
        color: #E89C6B;        
    }
`

const PurchaseOrder = () => {
    const [setValueSearch] = useState('')
    const handleChangeSearch = event => setValueSearch(event.target.value)
    const [useSwitch,setUseSwitch] = useState(0)

    return (
        <>
            <Background>

                <HeaderText>รายการสั่งซื้อ</HeaderText>
                <MenuContainer>
                    <MenuBigContainer 
                        onClick={() => setUseSwitch(0)}
                    >
                        รอการชำระเงิน
                    </MenuBigContainer>

                    <MenuSmallContainer
                        onClick={() => setUseSwitch(1)}
                    >
                        รอการจัดส่ง
                    </MenuSmallContainer>

                    <MenuSmallContainer
                        onClick={() => setUseSwitch(2)}
                    >
                        จัดส่งแล้ว
                    </MenuSmallContainer>
                </MenuContainer>

                    {
                        {
                            0:  <PaymentPending /> ,
                            1:  <PendingShip /> ,   
                            2:  <SuccessShip />
                        }[useSwitch]
                    }
                
            </Background>

        </>
    )
}
  
export default PurchaseOrder