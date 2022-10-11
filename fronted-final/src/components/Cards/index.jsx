// import { Link } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import './card.scss'

// { image, name, price, id }

function Card (props) {
  const { product, onAdd } = props

  return (
    <div className='card'>

      <div className='imgBox'>
        <img src={product.image ? product.image : 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'} alt='Image Not Found' className='mouse' />
      </div>

      <div className='contentBox'>
        <h3>{product.product_name}</h3>
        <h2 className='price'>€ {product.price}</h2>
        <button className='btn-card-info my-3'>
          <Link to={`/product/${product._id}`}>Information</Link>
        </button>
        <button
          className='buy'
          onClick={() => onAdd(product)}
        >
          <i className='bi bi-cart2' /> Buy
        </button>
      </div>

    </div>
  )
}

export default Card
