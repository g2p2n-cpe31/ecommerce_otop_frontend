import React from 'react'
import styled from 'styled-components'
import CheckBox from '../../common/CheckBoxCustom'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import bin from '../../../images/Cart/bin.svg'

const Box = styled.div`
  display: flex;
  /* width: 136.6rem; */
  width: 115rem;
  height: 4.6rem;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 2px;
  margin-top: 5rem;
  margin-bottom: 1rem;
`
const SelectButtonBox = styled.div`
  margin-left: 2.479rem;
`
const TextLabel = styled(FormControlLabel)`
  && .MuiTypography-body1 {
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 1.4rem;
  }

  && .MuiCheckbox-colorPrimary.Mui-checked {
    color: #333333;
  }
`

const IconButtonCustom = styled(IconButton)`
  && {
    margin: 0 2rem;
    padding: 0;
    width: 4.9rem;
    /* height: 3.5rem; */
  }
`

const IconBin = styled.img`
  width: 1.2rem;
  height: 1.4rem;
`

const ButtonDeleteAll = styled.p`
  font-family: Kanit;
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  color: #bdbdbd;
  margin-left: 0.7rem;
`

const SelectAll = () => {
  const [state, setState] = React.useState({
    checkedB: true,
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  return (
    <>
      <Box>
        <SelectButtonBox>
          <TextLabel
            control={
              <CheckBox
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
              />
            }
            label="เลือกทั้งหมด"
          />
        </SelectButtonBox>
        <IconButtonCustom aria-label="delete">
          <IconBin src={bin} />
          <ButtonDeleteAll>ลบ</ButtonDeleteAll>
        </IconButtonCustom>
      </Box>
    </>
  )
}

export default SelectAll
