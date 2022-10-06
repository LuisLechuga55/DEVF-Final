import React from 'react'
import axios from 'axios'

const shoppingCartArray = []
const total = 0

const res = await fetch('https://api.escuelajs.co/api/v1/products')
const data = await res.json()

const productsArray = data.slice(1, 5)

// console.log(productsArray)

// productsArray.forEach(product => {
//   console.log(product)
// })

function ShoppingCart () {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className='box' />
      <h3>Carrito</h3>
      <article className='box' />
    </div>
    // https://rapidapi.com/kalikhanbeszhanov/api/books39
  )
}

export default ShoppingCart
