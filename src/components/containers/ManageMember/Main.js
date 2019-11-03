import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import Member from './Member'
import Request from './Request'
import ImgDropdown from '../../../images/Sell/dropdown.png'
import ImgSearch from '../../../images/Navbar/search.svg'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import ButtonFlat from '../../common/ButtonFlat'
import SelectFlat from '../../common/SelectFlat'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
// import NotificationsIcon from '@material-ui/icons/Notifications';

const Background = styled(Container)`
    background-color: #F2F2F2;
    width: 100%;
    max-width: 192rem;
    min-height: 144.3rem;
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

const HeaderContainer = styled(Container)`
    font-family: Kanit;
    letter-spacing: 0.05rem;
    max-width: 100rem;
    width: 100%;
    max-height: 4.5rem;
    height: 100%;
    margin-top: 4.1rem;
    margin-left: 1.5rem;
    padding: 0;
    display: flex;
`

const HeaderCode = styled.div`
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 2.7rem;
    letter-spacing: 0.05rem;
    color: #EE7A2E;
    max-width: 17rem;
    max-height: 4.5rem;
    display:flex;
    align-items: flex-end;
    margin-left: 1.2rem;
`

const HeaderCodeText = styled.div`
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 2.7rem;
    letter-spacing: 0.05rem;
    color: #4F4F4F;
    max-width: 17rem;
    max-height: 4.5rem;
    display:flex;
    align-items: flex-end;
    margin-left: 8.2rem;
`

const HeaderText = styled.div`
    font-size: 3rem;
    line-height: 4.5rem;
    color: #4F4F4F;
    max-width: 17rem;
    max-height: 4.5rem;
    display:flex;
    align-items: flex-end;
    margin-top: 5rem;
`

const MenuContainer = styled(Container)`
    background-color: #fff;
    color: ${props => props.isActive ? '#E89C6B':'#4F4F4F'};
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2.1rem;
    max-width: 32.1rem;
    width: 47%;
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
    margin: 0 0;
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

const StyledBadge = styled(Badge)`
    &&{
        margin-top: -1rem;
        & .MuiBadge-colorSecondary{
            background-color: #EB5757;
        }
    }
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

const Main = () => {
    const [valueSearch, setValueSearch] = useState('')
    const handleChangeSearch = event => setValueSearch(event.target.value)
    const [useSwitch,setUseSwitch] = useState('member')
    const [actives, setActives] = useState({
        member: true,
        request: false,
    })

    const handleOnClick = (key) => {
        setUseSwitch(key)
        setActives({[key]: true})
    }

    return (
        <>
            <Background>
                <HeaderContainer>
                    <HeaderText>รายการสั่งซื้อ</HeaderText>
                    <HeaderCodeText>รหัสเข้าร่วมร้านค้า</HeaderCodeText>
                    <HeaderCode>#3233478503482</HeaderCode>
                </HeaderContainer>
                <SectionTwo>
                    <SearchTextBox
                        variant="outlined"
                        margin="normal"
                        value={valueSearch}
                        onChange={event => handleChangeSearch(event)}
                        placeholder="ค้นหาจากหมายเลขสมาชิก"
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
                        width="24.9rem" />
                </SectionTwo>

                <MenuContainer>
                    <MenuContainer 
                        onClick={() => handleOnClick('member')} 
                        isActive={actives.member}
                    >
                        สมาขิกร้านค้า
                    </MenuContainer>

                    <MenuContainer 
                        onClick={() => handleOnClick('request')} 
                        isActive={actives.request}
                    >
                        คำขอเข้าร่วมร้านค้า
                        <IconButton color="inherit">
                            <StyledBadge badgeContent={2} color="secondary" />
                        </IconButton>
                    </MenuContainer>

                </MenuContainer>

                {
                    {
                        member:  <Member /> ,
                        request:  <Request /> ,   
                    }[useSwitch]
                }
                
            </Background>

        </>
    )
}
  
export default Main