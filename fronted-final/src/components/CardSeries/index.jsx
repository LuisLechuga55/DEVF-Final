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

            <div className='card-text-series'><i class='bi bi-camera-reels' /> {status}</div>

            <div className='card-category-series'><i className='bi bi-translate' /> {language}</div>

            <div className='card-rating-series'><i className='bi bi-star-fill' /> {rating}</div>

          </Link>
        </div>

      </div>
    </>
  )
}

export default CardSeries
