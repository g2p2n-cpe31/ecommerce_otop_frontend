import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import PaymentPending from './PaymentPending'
import PendingShip from './PendingShip';
import SuccessShip from './SuccessShip';
import ImgDropdown from '../../../images/Sell/dropdown.png'
import ImgSearch from '../../../images/Navbar/search.svg'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import ButtonFlat from '../../common/ButtonFlat'
import Filter from '../../common/Filter'

const Background = styled(Container)`
    background-color: #F2F2F2;
    max-width: 144rem;
    width: 100%;
    min-height: 80rem;
    padding: 0 0;    
`

const IconSearch = styled.img`
  width: 1.527rem;
  height: 1.555rem;
  margin: auto 0.5rem;
`
const IconDropdown = styled.img`
  width: 1.331rem;
  height: 0.682rem;
  margin: auto 0.5rem;
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

const SearchTextBox = styled(TextField)`
  && {
    margin: 1.9rem 0 0 0;
    width: 36%;
    max-width: 96.9rem;
    background: #FFFFFF;
    border: 0.1rem solid #E0E0E0;
    border-radius: 0.2rem;
    input {
      font-family: Kanit;
      font-size: 1.4rem;
      font-weight: 300;
      padding: 0 1.8rem;
      width: 100%;
      height: 4.4rem;
    }

    & fieldset {
      z-index: -1;
      background-color: rgba(242, 242, 242, 0.9);
      border-width: 0 !important;
      padding: 0;
      /* width: 100%; */
    }

    & .MuiOutlinedInput-adornedEnd {
      padding-right: 0;
    }
  }
`

const SectionTwo = styled(Container)`
    display: flex;
    /* direction: row; */
    align-items: center;
    margin: 0 0;
    padding: 0 0;
`

const StyledFilter = styled(Filter)`
    /* margin-top: 1.9rem; */
    margin: 1.9rem 0 0 0;
`

const StyledText = styled.div`
    display: flex;
    align-items: center;
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.8rem;
    color: #828282;
    margin-left: 8.7rem;
    margin-top: 1.9rem;
`

const PurchaseOrder = () => {
    const [valueSearch, setValueSearch] = useState('')
    const handleChangeSearch = event => setValueSearch(event.target.value)
    const [useSwitch,setUseSwitch] = useState(0)

    return (
        <>
            <Background>

                <HeaderText>รายการสั่งซื้อ</HeaderText>

                <SectionTwo>
                    <SearchTextBox
                        variant="outlined"
                        margin="normal"
                        value={valueSearch}
                        onChange={event => handleChangeSearch(event)}
                        placeholder="ค้นหาจากชื่อ"
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <ButtonFlat margin="0 .28rem 0 0" type="submit">
                                <IconSearch src={ImgSearch} />
                                </ButtonFlat>
                                <ButtonFlat
                                background="#828282"
                                width="3.37rem"
                                margin="0 .28rem 0 0"
                                >
                                <IconDropdown src={ImgDropdown} />
                                </ButtonFlat>
                            </InputAdornment>
                            ),
                        }}
                    />
                    <StyledText>เรียงตาม</StyledText>
                    <StyledFilter/>
                </SectionTwo>

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