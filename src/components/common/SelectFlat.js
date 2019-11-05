import React, { useState } from 'react'
import styled from 'styled-components'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import dropdown_filter from '../../images/SearchPage/dropdown_filter.svg'

const FormCustom = styled(FormControl)`
  && {
    width: ${props => props.width};
    margin: ${props => props.margin_form};
  }
`

const SelectCustom = styled(Select)`
  && {
    display: flex;
    align-items: center;
    width: 100%;
    height: 4rem;
    font-family: Kanit;
    font-size: 15px;
    font-weight: 300;
    

    fieldset {
      border-width: ${props => props.border};
      border-radius: ${props => props.border_radius};
      background: #fff;
      color: #828282;
    }
    .MuiOutlinedInput-input {
      padding: auto 1.9rem;
    }

    .MuiInputBase-input {
      z-index: 2;
    }
  }
`


const StyleMenuItem = styled(MenuItem)`
  font-family: Kanit;
  font-weight: normal;
  font-size: 1.4rem;
  color: #4F4F4F;
`



const IconDropDown = styled.img`
  width: 20px;
  height: 10px;
  margin: auto 2.5rem;
  position: absolute;
  right: 0;
  cursor: pointer;
  z-index: 1;
`

const SelectFlat = ({
  displayEmpty = true,
  placeholder = '',
  margin_form = '0',
  width = '100%',
  border_radius=".2rem",
  border = "0 !important",
  options = [
    {
      label: 'no options',
      value: 10,
    },
  ],
  ...props
}) => {
  return (
    <FormCustom variant="outlined" margin_form={margin_form} width={width}>
      <SelectCustom
        IconComponent={() => <IconDropDown src={dropdown_filter} />}
        displayEmpty={displayEmpty}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        }}
        border={border}
        border_radius={border_radius}
        {...props}
      >
        <StyleMenuItem value="" disabled>
          {placeholder}
        </StyleMenuItem>
        {options.map((item, key) => (
          <StyleMenuItem key={key} value={item.value}>
            {item.label}
          </StyleMenuItem>
        ))}
      </SelectCustom>
    </FormCustom>
  )
}

export default SelectFlat
