import React from 'react'

function Products({anyName, someName}) {
  return (
    <div>
      <h1>Products!</h1>
      <h1>{anyName}</h1>
      <h1>{someName.age}</h1>
      <h1>{someName.name}</h1>
    </div>
  )
}

export default Products
