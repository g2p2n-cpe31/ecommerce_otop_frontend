import React, { useReducer, createContext } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case 'setter':
      return { ...state, firebase: action.value }
    default:
      return
  }
}

const initialState = { firebase: {} }
const FirebaseContext = createContext(initialState)

const FirebaseProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <FirebaseContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FirebaseContext.Provider>
  )
}
export { FirebaseContext, FirebaseProvider }
