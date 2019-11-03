import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import PaymentPending from './PaymentPending'
import PendingShip from './PendingShip'
import SuccessShip from './SuccessShip'
import ImgDropdown from '../../../images/Sell/dropdown.png'
import ImgSearch from '../../../images/Navbar/search.svg'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import ButtonFlat from '../../common/ButtonFlat'
import SelectFlat from '../../common/SelectFlat'

const Background = styled(Container)`
  background-color: #f2f2f2;
  width: 100%;
  max-width: 192rem;
  min-height: 120rem;
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
  color: #4f4f4f;
  max-width: 17rem;
  max-height: 4.5rem;
  width: 100%;
  height: 100%;
  margin-top: 4.1rem;
  margin-left: 1.5rem;
`

const MenuContainer = styled(Container)`
  background-color: #fff;
  /* color: #4F4F4F; */
  color: ${props => (props.isActive ? '#E89C6B' : '#4F4F4F')};
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
  & :hover {
    cursor: pointer;
    color: #e89c6b;
  }
`

const SearchTextBox = styled(TextField)`
  && {
    margin: 0 0;
    width: 36%;
    max-width: 96.9rem;
    background: #ffffff;
    border: 0.1rem solid #e0e0e0;
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
    }

    & .MuiOutlinedInput-adornedEnd {
      padding-right: 0;
    }
  }
`

const SectionTwo = styled(Container)`
  display: flex;
  align-items: center;
  height: 4.4rem;
  margin: 1.9rem 0;
  padding: 0 0;
`

const StyledText = styled.div`
  display: flex;
  align-items: center;
  font-family: Kanit;
  font-weight: 300;
  font-size: 1.8rem;
  color: #828282;
  margin-left: 8.7rem;
`

const PurchaseOrder = () => {
  const [valueSearch, setValueSearch] = useState('')
  const handleChangeSearch = event => setValueSearch(event.target.value)
  const [useSwitch, setUseSwitch] = useState('pending')
  const [actives, setActives] = useState({
    pending: true,
    inprogress: false,
    ship: false,
  })

  const handleOnClick = key => {
    setUseSwitch(key)
    setActives({ [key]: true })
  }

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
            placeholder="ค้นหาจากหมายเลขคำสั่งซื้อ"
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
          <SelectFlat
            displayEmpty={false}
            margin_form="3rem 3.1rem"
            width="24.9rem"
          />
        </SectionTwo>

        <MenuContainer>
          <MenuContainer
            onClick={() => handleOnClick('pending')}
            isActive={actives.pending}
          >
            รอการชำระเงิน
          </MenuContainer>

          <MenuContainer
            onClick={() => handleOnClick('inprogress')}
            isActive={actives.inprogress}
          >
            รอการจัดส่ง
          </MenuContainer>

          <MenuContainer
            onClick={() => handleOnClick('ship')}
            isActive={actives.ship}
          >
            จัดส่งแล้ว
          </MenuContainer>
        </MenuContainer>

        {
          {
            pending: <PaymentPending />,
            inprogress: <PendingShip />,
            ship: <SuccessShip />,
          }[useSwitch]
        }
      </Background>
    </>
  )
}

export default PurchaseOrder
