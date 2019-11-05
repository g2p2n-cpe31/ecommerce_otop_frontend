import React from 'react'
import styled from 'styled-components'
import CheckBox from '../../common/CheckBoxCustom'
import IconDelete from '../../common/IconDeleteProd'

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 4.6rem;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 2px;
  margin-top: 5rem;
  margin-bottom: 1rem;
  padding-left: 0 1.079rem;
  box-sizing: border-box;
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
        <CheckBox
          checked={state.checkedB}
          onChange={handleChange('checkedB')}
          value="checkedB"
          label="เลือกทั้งหมด"
        />
        <IconDelete />
      </Box>
    </>
  )
}

export default SelectAll
