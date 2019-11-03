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
    height: 40px;
    font-family: Kanit;
    font-size: 15px;
    font-weight: 300;
    color: #828282;

    fieldset {
      border-width: 0 !important;
      border-radius: 2px;
      background: #fff;
    }
    .MuiOutlinedInput-input {
      padding: auto 1.9rem;
    }

    .MuiInputBase-input {
      z-index: 2;
    }
  }
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
}) => {
  const [option, setOption] = useState('')

  const handleChange = event => {
    setOption(event.target.value)
  }

  return (
    <FormCustom variant="outlined" margin_form={margin_form} width={width}>
      <SelectCustom
        IconComponent={() => <IconDropDown src={dropdown_filter} />}
        value={option}
        onChange={handleChange}
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
      >
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
        <MenuItem value={10}>1</MenuItem>
        <MenuItem value={20}>2</MenuItem>
        <MenuItem value={30}>3</MenuItem>
      </SelectCustom>
    </FormCustom>
  )
}

export default SelectFlat
