import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import GlobalStyle from '../utility/GlobalStyle'
import ic_cancel_white from '../../images/Navbar/ic_cancel_white.svg'
import ImgCart from '../../images/Navbar/cart.svg'
import ImgSell from '../../images/Navbar/sell.svg'
import ImgNoti from '../../images/Navbar/noti.svg'
import ImgDropdown from '../../images/Navbar/dropdown.svg'
import ImgSearch from '../../images/Navbar/search.svg'
import Logo from '../../images/logo.png'
import ButtonFlat from './ButtonFlat'

const ContainerNavbar = styled.div`
  position: fixed;
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => (props.showCart ? '100%' : '13rem')};

  &:hover {
    cursor: ${props =>
      props.showCart ? `url(${ic_cancel_white}) 205 205, auto` : 'normal'};
  }

  &:after {
    content: '';
    z-index: -1;
    height: ${props => (props.showCart ? '100%' : '13rem')};
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(352.56deg, #44275d 0%, #3c5b78 100%) no-repeat;
    opacity: ${props =>
      props.isFixedColor || props.showCart ? 1 : props.isDown ? 1 : 0};
    transition: all 0.5s ease;
  }

  transition: all 0.5s ease;
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

const Navbar = props => {
  const [valueSearch, setValueSearch] = useState('')
  const [showCart, setShowCart] = useState(false)
  const [isDown, setIsDown] = useState(false)

  useEffect(() => {
    if (!props.isFixedColor) {
      // console.log(window.scollY.)
      window.addEventListener('scroll', () => {
        if (window.scrollY > 45 && !isDown) {
          setIsDown(true)
        } else if (window.scrollY <= 45 && isDown) {
          setIsDown(false)
        }
      })
    }
  })

  const handleChangeSearch = event => setValueSearch(event.target.value)
  const handleCartFeature = e => {
    e.preventDefault()
    // if (e.target === e.currentTarget) setShowCart(!showCart) // This condition for click able foebackground
    setShowCart(!showCart)
  }

  return (
    <ContainerNavbar
      onClick={e => (showCart ? handleCartFeature(e) : null)}
      showCart={showCart}
      isDown={isDown}
      isFixedColor={props.isFixedColor}
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
          <LogoOrg src={Logo} />
          <SearchTextBox
            variant="outlined"
            margin="normal"
            value={valueSearch}
            onChange={event => handleChangeSearch(event)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ButtonFlat margin="0 .28rem 0 0">
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
          {/* {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))} */}
          <BoxGrid>
            <LogoCart src={ImgCart} onClick={e => handleCartFeature(e)} />
          </BoxGrid>
        </ContainerTools>
      </ContainerLayout>
    </ContainerNavbar>
  )
}

export default Navbar
