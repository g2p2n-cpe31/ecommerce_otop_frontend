import React, { useEffect, useReducer, createContext } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case 'zero':
      return { ...state, quantity: 0 }
    case 'typing':
      return { ...state, quantity: parseInt(action.value) }
    case 'increment':
      return { ...state, quantity: state.quantity + 1 }
    case 'decrement':
      return { ...state, quantity: state.quantity - 1 }
    default:
      return
  }
}

const initialState = { quantity: 0 }
const QuantityContext = createContext(initialState)

const QuantityProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.quantity < 0) dispatch({ type: 'zero' })
  }, [state.quantity])

  return (
    <QuantityContext.Provider value={{ state, dispatch }}>
      {props.children}
    </QuantityContext.Provider>
  )
}
export { QuantityContext, QuantityProvider }
