import React, { useReducer, createContext } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, showCart: !state.showCart }
    case 'close':
      return { ...state, showCart: false }
    case 'open':
      return { ...state, showCart: true }
    default:
      return
  }
}

const initialState = { showCart: false }
const CartOpenContext = createContext(initialState)

const CartOpenProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartOpenContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartOpenContext.Provider>
  )
}
export { CartOpenContext, CartOpenProvider }
