import React from 'react'
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
  /* position: absolute;
  z-index: 10000; */
`

const Cart = props => {
  return (
    <Containers>
      <SelectAll />
      <Store />
      {/* <Store />
      <Store />
      <Store /> */}
      <Total {...props} />
    </Containers>
  )
}

export default Cart
