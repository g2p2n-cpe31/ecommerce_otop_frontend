import React , { useState } from 'react'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import Dropdown from '../../images/SearchPage/dropdown_filter.svg'


  const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 10%;
    margin: auto 3.1rem ;
`


const StyledFormControl = styled(FormControl)`
  && {
    width: ${props => props.width};
    margin: ${props => props.margin_form};
  }
`


const StyledSelect = styled(Select)`
    &&{
        display: flex;
        align-items: center;
        width: 100%;
        height: 44px;
        font-family: Kanit;
        color: #828282;
    }

    fieldset {
        border-width: 0 !important;
        border-radius: 0.2rem;
        background: #fff;
    }


    & .MuiOutlinedInput-input{
       padding: auto 1.9rem;
    }
    & .MuiInputBase-input {
      z-index: 2;
    }
`

const StyledIcon = styled.img`
    position: absolute;
    width: 2.2rem;
    height: 1.1rem;
    margin: auto 1rem;
    cursor: pointer;
    right: 0;
    z-index: 1;
`

const Item = styled(MenuItem)`
    &&{
        font-family: Kanit;
        color: #BDBDBD;
    }
`



const Filter  = ({
    displayEmpty = true,
    placeholder = '',
    margin_form = '0',
    width = '100%',
}) =>{
    const [age, setAge] = useState('')

    const handleChange = event => {
        setAge(event.target.value)
    }

    return (
        <ContainerSelect>
        <StyledFormControl variant="outlined"  placeholder={placeholder}  margin_form={margin_form}  >
            <StyledSelect
                displayEmpty={displayEmpty}
                value={age}
                onChange={handleChange}
                IconComponent={() => (
                    <StyledIcon src={Dropdown}/>
                  )}>
            >
            <Item value="" disabled >{placeholder}</Item>
            <Item value={10}>ชื่อสินค้า</Item>
            <Item value={20}>ราคา</Item>
            <Item value={30}>วันที่เพิ่มสินค้า</Item>
            <Item value={40}>วันที่แก้ไขล่าสุด</Item>
            <Item value={50}>จำนวนคงเหลือ</Item>
            </StyledSelect>
        </StyledFormControl>
    </ContainerSelect>
    )
}
export default Filter