import React, { useState } from 'react'
import Products from './Products'

function App() {
  var [a, b] = useState(69);
  return (
    <>
    <div>
      <h1>Hi!</h1>
      <h1>{a}</h1>
      <button onClick = {() => b(a + 1)}>Click</button>
      <Products anyName = "value" someName = {{age: 25, name: "Ayan Khan"}}/>
    </div>
    </>
  )
}

export default App
