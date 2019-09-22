import React, { useState } from 'react'

const Hooks = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default Hooks
