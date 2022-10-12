import { Link } from 'react-router-dom'
import './cardSeries.scss'

function CardSeries ({ id, image, language, name, rating, status }) {
  return (
    <>

      <div className='main-card-serie'>

        <div className='card-serie'>

          <Link to={`/primevideo/${id}`}>

            <img src={image} className='img1' />

            <img src={image} className='img2' />

            <div className='card-title-series'>{name}</div>

            <div className='card-text-series'>{status}</div>

            <div className='card-category-series'>{language} <i className='fas fa-film' /></div>

            <div className='card-rating-series'>{rating}  <i className='far fa-eye' /> </div>

          </Link>
        </div>

      </div>
    </>
  )
}

export default CardSeries
