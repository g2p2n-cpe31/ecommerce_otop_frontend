import React ,{useState} from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import ButtonFlat from '../../common/ButtonFlat'
import ImgDropdown from '../../../images/Sell/dropdown.png'
import ImgSearch from '../../../images/Navbar/search.svg'
import InputAdornment from '@material-ui/core/InputAdornment'
import Filter from '../../common/SelectFlat'


const StyledSectionTwo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.9rem;
`

const SearchTextBox = styled(TextField)`
  && {
    margin: auto 0;
    width: 45%;
    max-width: 96.9rem;
    height: 4.7rem;
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
const StyledText = styled.div`
    display: flex;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 1.8rem;
    color: #828282;
    margin-left: 8.7rem;
    align-items: center;
`

const SearchSection  = () => {
    const handleChangeSearch = event => setValueSearch(event.target.value)
    const [valueSearch, setValueSearch] = useState('')

    return (
        <StyledSectionTwo>
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
            <Filter width="24.9rem" displayEmpty={false} margin_form='0 0 0 3.1rem' />
        </StyledSectionTwo>
    )
}
export default SearchSection