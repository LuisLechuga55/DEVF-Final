import React from 'react'
import { Link } from 'react-router-dom'
import './cardProduct.scss'

function CardProduct ({ image, name, price, category, brand, id }) {
  return (
    <div className='card-container'>
      <div className='container'>
        <div className='card-horizontal'>
          <div className='imgBx'>
            <img src={image} alt='Image Not Found' />
          </div>

          <div className='contentBx'>

            <h2>{name}</h2>

            <div className='size'>
              <h3>€ {price}</h3>
            </div>

            <div className='color'>

              <h3>{category}</h3>
              <h3>{brand}</h3>
            </div>

            <Link to={`/product/${id}`}>Informacion</Link>

          </div>

        </div>
      </div>
    </div>
  )
}

/**
 *
    "product_name": "Awesome Granite Bacon"
    "price": 962
    "category": "Kids"
    "brand": "Osinski - Prosacco",
    "image": "https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg"
 */

export default CardProduct
