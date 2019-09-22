import React, { useReducer } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default:
      return
  }
}

const initialState = { count: 100 }
const CounterContext = React.createContext(initialState)

const CounterProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  )
}
export { CounterContext, CounterProvider }

//  #### POC for using on function component
const Counter = () => {
  const { state, dispatch } = useContext(CounterContext)
  return (
    <div>
      <h5>Count: {state.count}</h5>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}
const SeparateComponent = () => {
  const { state } = useContext(CounterContext)
  return (
    <div>
      <h1>Shared Count: {state.count}</h1>
      <button onClick={() => {}}>Fetch Again</button>
    </div>
  )
}
