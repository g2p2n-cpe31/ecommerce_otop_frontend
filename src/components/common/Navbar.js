import React, { useState } from 'react'
import styled from 'styled-components'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
// import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

const ContainerNavbar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, #44275d, #3c5b78) no-repeat;
  height: 11.7rem;
  z-index: 900;
`

const ContainerListMenus = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 38px;
`

const ContainerTools = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 66px;
  /* background: black; */
`

const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.7rem;
`

const ContainerUserMenu = styled.div`
  width: 13.8rem;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  margin-left: 2.9rem;
  margin-right: 8.4rem;
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
  background: #f2f2f2;
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
  background: rgba(224, 224, 224, 0.15);
  margin: auto 9.4rem;
`

const LogoCart = styled.img`
  width: 3.9rem;
  height: 39px;
  background-color: #f2f2f2;
  margin: auto 12.6rem;
`

const SearchTextBox = styled(TextField)`
  && {
    margin: auto 4rem;

    input {
      font-family: Kanit;
      font-size: 1.6rem;
      padding: 0 1.4rem;
      width: 62.5rem;
      /* min-width: 280px; */
      height: 44px;
    }

    fieldset {
      z-index: -1;
      background-color: rgba(242, 242, 242, 0.9);
      border-width: 0 !important;
    }

    & .MuiOutlinedInput-adornedEnd {
      padding-right: 0;
    }
  }
`

// const SearchIconCustom = styled(SearchIcon)`
//   && {
//     svg {
//       width: 15.3px;
//       height: 16px;
//       color: #fff;
//     }
//   }
// `

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

const Navbar = () => {
  const [valueSearch, setValueSearch] = useState('')
  const handleChangeSearch = event => setValueSearch(event.target.value)
  return (
    <ContainerNavbar>
      <ContainerListMenus>
        <ContainerMenu>
          <IconMenu />
          <TextMenu>ขาย</TextMenu>
        </ContainerMenu>
        <ContainerMenu>
          <IconMenu />
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
                  <IconMenu />
                </SearchButton>
                <DropdownButton>
                  <IconMenu />
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
        <LogoCart />
      </ContainerTools>
    </ContainerNavbar>
  )
}

export default Navbar
