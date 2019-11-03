import React, { useState, useEffect } from 'react'
import { navigate, Link, useStaticQuery, graphql } from 'gatsby'
import styled, { css, createGlobalStyle } from 'styled-components'
import Img from 'gatsby-image'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import GlobalStyle from '../utility/GlobalStyle'
import ic_cancel_white from '../../images/Navbar/ic_cancel_white.svg'
import ImgCart from '../../images/Navbar/cart.svg'
import ImgSell from '../../images/Navbar/sell.svg'
import ImgNoti from '../../images/Navbar/noti.svg'
import ImgDropdown from '../../images/Navbar/dropdown.svg'
import ImgSearch from '../../images/Navbar/search.svg'
import ButtonFlat from './ButtonFlat'
import LoginModal from '../containers/Login/Modal'
import SignupModal from '../containers/Signup/Modal'
import ForgotContorller from '../containers/ForgotPassword/ControllerForgot'
import Cart from '../containers/cart/AllCart'

const HiddenGlobal = createGlobalStyle`
${props =>
  props.showCart
    ? css`
        html,
        body {
          overflow: hidden;
        }
      `
    : css`
        html,
        body {
          overflow: initial;
        }
      `}
  
`

const ContainerNavbar = styled.form`
  /* position: ${props => (props.showCart ? 'fixed' : 'fixed')}; */
  position: fixed;
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => (props.showCart ? '100%' : '13rem')};
  overflow: ${props => (props.showCart ? 'scroll' : 'hidden')};
  &:hover {
    cursor: ${props =>
      props.showCart ? `url(${ic_cancel_white}) 205 205, auto` : 'normal'};
  }

  &:after {
    content: '';
    position: fixed;
    z-index: 1;
    height: ${props => (props.showCart ? '100%' : '13rem')};

    overflow: ${props => (props.showCart ? 'hidden' : 'initial')};
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
  max-width: 136.6rem;
  width: 82%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  /* height: auto; */
  height: ${props => (props.showCart ? '100%' : '13rem')};
  z-index: 2;
  transition: all 0.55s ease;
`

const ContainerListMenus = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const ContainerTools = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 6.6rem;
`

const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  align-items: flex-end;
  margin-left: 1.7rem;
`

const ContainerUserMenu = styled.div`
  width: 13.9rem;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  margin-left: 4.15rem;
`

const TextMenu = styled.p`
  font-family: Kanit;
  font-size: 1.3rem;
  line-height: 3.28;
  color: #f2f2f2;
  margin: 0;
  cursor: pointer;
`

const IconMenu = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  margin: auto 0.5rem;
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

const Line = styled.div`
  border: 0.1rem solid #f2f2f2;
  opacity: 0.5;
  margin: auto 1rem;
  height: 1.2rem;
`

const SearchTextBox = styled(TextField)`
  && {
    margin: auto 0;
    width: 70%;
    max-width: 96.9rem;

    input {
      font-family: Kanit;
      font-size: 1.6rem;
      padding: 0 1.4rem;
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

const BoxGrid = styled.div`
  width: 13.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4.15rem;
  /* padding-left: 1.8rem; */
`

const LogoCart = styled.img`
  width: 4rem;
  height: 3.9rem;
  margin: auto;
  cursor: pointer;
`

const LinkLogoOrg = styled(Link)`
  /* width: 17.5rem;
  height: 6.6rem; */
  cursor: pointer;
  margin: auto auto auto 0;
`

const Navbar = props => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 175, height: 66) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [valueSearch, setValueSearch] = useState('')
  const [showCart, setShowCart] = useState(false)
  const [isDown, setIsDown] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [showForgot, setShowForgot] = useState('close')

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

  useEffect(() => {
    const getCurrentURL = new URLSearchParams(props.location.search)
    setValueSearch(getCurrentURL.get('keyword') || '')
    console.log(getCurrentURL.get('keyword'))
  }, [props.location.search])

  const handleChangeSearch = event => setValueSearch(event.target.value)
  const handleCartFeature = e => {
    e.preventDefault()
    if (e.target === e.currentTarget) setShowCart(!showCart) // This condition for click able foebackground
    // setShowCart(!showCart)
  }

  const handleSearch = e => {
    e.preventDefault()
    navigate(`/search?keyword=${valueSearch}`)
    e.stopPropagation()
  }

  const handleOpenLogin = () => {
    setShowLogin(true)
    setShowSignup(false)
    setShowForgot('close')
  }

  const handleOpenSignup = () => {
    setShowLogin(false)
    setShowSignup(true)
    setShowForgot('close')
  }

  const handleOpenForgot = () => {
    setShowLogin(false)
    setShowSignup(false)
    setShowForgot('step1')
  }

  return (
    <>
      <HiddenGlobal showCart={showCart} />
      <LoginModal
        open={showLogin}
        handleClose={() => setShowLogin(false)}
        showSignup={handleOpenSignup}
        showForgot={handleOpenForgot}
      />

      <SignupModal
        open={showSignup}
        handleClose={() => setShowSignup(false)}
        showLogin={handleOpenLogin}
      />

      <ForgotContorller
        open={showForgot}
        handleOpen={key => setShowForgot(key)}
        // showForgot={handleOpenForgot}
      />

      <ContainerNavbar
        onClick={e => (showCart ? handleCartFeature(e) : null)}
        showCart={showCart}
        isDown={isDown}
        isFixedColor={props.isFixedColor}
        onSubmit={e => {
          handleSearch(e)
          return false
        }}
      >
        <ContainerLayout showCart={showCart}>
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
              <TextMenu onClick={handleOpenSignup}>สมัครสมาชิก</TextMenu>
              <Line />
              <TextMenu onClick={handleOpenLogin}>เข้าสู่ระบบ</TextMenu>
            </ContainerUserMenu>
          </ContainerListMenus>
          <ContainerTools>
            <LinkLogoOrg to="/home">
              <Img fixed={data.logo.childImageSharp.fixed} alt="" />
            </LinkLogoOrg>
            <SearchTextBox
              variant="outlined"
              margin="normal"
              value={valueSearch}
              onChange={event => handleChangeSearch(event)}
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
            {/* {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))} */}
            <BoxGrid>
              <LogoCart src={ImgCart} onClick={e => handleCartFeature(e)} />
            </BoxGrid>
          </ContainerTools>
          {showCart ? <Cart /> : null}
          {/* {showCart ? (
            <Suspense fallback={<div>Loading ...</div>}>
              <Cart />
            </Suspense>
          ) : null} */}
        </ContainerLayout>
      </ContainerNavbar>
    </>
  )
}

export default Navbar
