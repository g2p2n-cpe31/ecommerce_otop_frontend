import React, { useState } from 'react'
import styled from 'styled-components'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
// import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import { createGlobalStyle } from 'styled-components'
import ic_cancel_white from '../../images/Navbar/ic_cancel_white.svg'
import ImgCart from '../../images/Navbar/cart.svg'
import ImgSell from '../../images/Navbar/sell.svg'
import ImgNoti from '../../images/Navbar/noti.svg'
import ImgDropdown from '../../images/Navbar/dropdown.svg'
import ImgSearch from '../../images/Navbar/search.svg'

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
  }

  body{
    margin: 0;
    font-family: Kanit-Regular;
    font-size: 1.6rem; /* 16px */
    width: 100vw;
    z-index: -1;
    
    
  }
`
const ContainerNavbar = styled.div`
  position: fixed;
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, #44275d, #3c5b78) no-repeat;
  transition: all 0.5s ease;
  height: ${props => (props.showCart ? '100%' : '13rem')};

  &:hover {
    cursor: ${props =>
      props.showCart ? `url(${ic_cancel_white}) 205 205, auto` : 'normal'};
  }
`

const ContainerLayout = styled.div`
  width: 136.6rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerListMenus = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const ContainerTools = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 66px;
`

const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.7rem;
`

const ContainerUserMenu = styled.div`
  width: 139px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  margin-left: 41.5px;
`

const TextMenu = styled.p`
  font-family: Kanit-Light;
  font-size: 1.3rem;
  line-height: 3.28;
  color: #f2f2f2;
  margin: 0;
`

const IconMenu = styled.img`
  width: 1.1rem;
  height: 11px;
  margin: auto 0.5rem;
`
const IconSearch = styled.img`
  width: 1.527rem;
  height: 15.55px;
  margin: auto 0.5rem;
`
const IconDropdown = styled.img`
  width: 1.331rem;
  height: 6.82px;
  margin: auto 0.5rem;
`

const Line = styled.div`
  border: 1px solid #f2f2f2;
  opacity: 0.5;
  margin: auto 1rem;
  height: 1.2rem;
`

const LogoOrg = styled.img`
  width: 17.5rem;
  height: 66px;
  margin: auto 0;
`

const SearchTextBox = styled(TextField)`
  && {
    margin: auto 0;
    width: 96.9rem;

    input {
      font-family: Kanit;
      font-size: 1.6rem;
      padding: 0 1.4rem;
      width: 100%;
      height: 44px;
    }

    fieldset {
      z-index: -1;
      background-color: rgba(242, 242, 242, 0.9);
      border-width: 0 !important;
      width: 100%;
    }

    & .MuiOutlinedInput-adornedEnd {
      padding-right: 0;
    }
  }
`

const SearchButton = styled(Button)`
  && {
    width: 6.45rem;
    height: 39px;
    border-radius: 0.2rem;
    background-color: #e89c6b;
    margin-right: 0.28rem;
  }
`

const DropdownButton = styled(Button)`
  && {
    min-width: 3.37rem;
    height: 39px;
    border-radius: 0.2rem;
    background-color: #828282;
    margin-right: 0.28rem;
  }
`

const BoxGrid = styled.div`
  width: 139px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.8rem;
`

const LogoCart = styled.img`
  width: 4rem;
  height: 39px;
  margin: auto;
  cursor: pointer;
`

const Navbar = () => {
  const [valueSearch, setValueSearch] = useState('')
  const [showCart, setShowCart] = useState(false)
  const handleChangeSearch = event => setValueSearch(event.target.value)
  const handleCartFeature = () => {
    setShowCart(!showCart)
    console.log(showCart)
  }

  return (
    <ContainerNavbar
      onClick={() => (showCart ? handleCartFeature() : null)}
      showCart={showCart}
    >
      <ContainerLayout>
        <GlobalStyle />
        <ContainerListMenus>
          <ContainerMenu>
            <IconMenu src={ImgSell} />
            <TextMenu>ขาย</TextMenu>
          </ContainerMenu>
          <ContainerMenu>
            <IconMenu src={ImgNoti} />
            <TextMenu>การแจ้งเตือน</TextMenu>
          </ContainerMenu>
          <ContainerUserMenu>
            <TextMenu>สมัครสมาชิก</TextMenu>
            <Line />
            <TextMenu>เข้าสู่ระบบ</TextMenu>
          </ContainerUserMenu>
        </ContainerListMenus>
        <ContainerTools>
          <LogoOrg />
          <SearchTextBox
            variant="outlined"
            margin="normal"
            value={valueSearch}
            onChange={event => handleChangeSearch(event)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchButton>
                    <IconSearch src={ImgSearch} />
                  </SearchButton>
                  <DropdownButton>
                    <IconDropdown src={ImgDropdown} />
                  </DropdownButton>
                </InputAdornment>
              ),
            }}
          />
          {/* {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))} */}
          <BoxGrid>
            <LogoCart src={ImgCart} onClick={() => handleCartFeature()} />
          </BoxGrid>
        </ContainerTools>
      </ContainerLayout>
    </ContainerNavbar>
  )
}

export default Navbar
