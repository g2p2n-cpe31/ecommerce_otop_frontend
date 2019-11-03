import React, { useState } from 'react'
import styled from 'styled-components'
import SelectAll from './SelectAll'
import Store from './Store'
import Total from './Total'

const Containers = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  cursor: auto;
  margin-bottom: 20rem;
`

const Cart = () => {
  const [selectAll, setSelectAll] = useState(true)
  const [cart, setCart] = useState([{}])

  return (
    <Containers>
      <SelectAll setSelectAll={setSelectAll} />
      <Store />
      <Store />
      <Store />
      <Store />
      <Total />
    </Containers>
  )
}

export default Cart
