import { Link } from 'react-router-dom'
import './card.scss'

function Card ({ image, name, price, id }) {
  return (
    <div className='card' key={id}>

      <div className='imgBox'>
        <img src={image} alt='Image Not Found' className='mouse' />
      </div>

      <div className='contentBox'>
        <h3>{name}</h3>
        <h2 className='price'>{price} €</h2>
        <Link to={`/product/${id}`} className='buy'><i className='bi bi-cart2' /> Information</Link>
      </div>

    </div>
  )
}

export default Card
