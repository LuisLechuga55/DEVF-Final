import React from 'react'
import { Link } from 'react-router-dom'
import './cardProduct.scss'

function CardProduct ({ image, name, price, brand, id }) {
  return (

    <div className='top-product-card'>

      <div className='top-product-imgBox'>
        <img src={image} className='top-product-mouse' />
      </div>

      <div className='top-product-contentBox'>
        <h3>{name}</h3>
        <h2 className='top-product-price'>€ {price}</h2>
        <h2 className='top-product-text'>{brand}</h2>
        <Link to={`/product/${id}`} className='top-product-buy'>Informacion</Link>
      </div>

    </div>

  )
}

export default CardProduct
