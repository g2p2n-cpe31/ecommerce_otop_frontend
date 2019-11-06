import React, { useReducer, createContext } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case 'empty':
      return { ...state, value: '' }
    case 'typing':
      return { ...state, value: action.value }
    default:
      return
  }
}

const initialState = { value: '' }
const SearchValueContext = createContext(initialState)

const SearchValueProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <SearchValueContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SearchValueContext.Provider>
  )
}
export { SearchValueContext, SearchValueProvider }
