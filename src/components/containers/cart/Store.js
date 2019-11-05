import React from 'react'
import styled from 'styled-components'
import CheckBox from '../../common/CheckBoxCustom'
import Product from './Product'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 2px;
  padding-top: 0.4rem;
  box-sizing: border-box;
`

const Box2 = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 1.079rem;
`

const Line = styled.hr`
  /* width: 127.5rem; */
  width: 95%;
  border: 1px solid #e0e0e0;
  margin: 0.4rem 0 1rem 0;
`

const Margin = styled.div`
  margin: 1rem;
`

const Store = () => {
  const [state, setState] = React.useState({
    checkedB: true,
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  return (
    <>
      <Box>
        <Box2>
          <CheckBox
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
            label="ชื่อร้านค้า"
          />
        </Box2>
        <Line />
        <Product />
        <Product />
        <Product />
      </Box>
      <Margin />
    </>
  )
}

export default Store
