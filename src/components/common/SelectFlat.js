import React from 'react'
import styled from 'styled-components'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import dropdown_filter from '../../images/SearchPage/dropdown_filter.png'

const FormCustom = styled(FormControl)`
  width: 100%;
`

const SelectCustom = styled(Select)`
  && {
    display: flex;
    align-items: center;
    width: 100%;
    font-family: Kanit;
    background: #fff;

    fieldset {
      border-width: 0;
      background: #f2f2f2;
      border-radius: 2px;
    }
  }
`

const IconDropDown = styled.img`
  width: 20px;
  height: 10px;
  z-index: 1;
  margin: auto 2.5rem;
  position: absolute;
  right: 0;
`

const SelectFlat = props => {
  return (
    <FormCustom variant="outlined">
      {/* <InputLabel htmlFor="filled-age-simple">Age</InputLabel> */}
      <SelectCustom
        IconComponent={() => <IconDropDown src={dropdown_filter} />}
        //   value={values.age}
        //   onChange={handleChange}
        //   inputProps={{
        //     name: 'age',
        //     id: 'filled-age-simple',
        //   }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </SelectCustom>
    </FormCustom>
  )
}

export default SelectFlat
