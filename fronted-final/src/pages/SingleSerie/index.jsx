import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './singleSerie.scss'

function SingleSerie () {
  const params = useParams()
  const [singleSerie, setSingleSerie] = useState([])

  useEffect(() => {
    const fetchSingleSerie = async () => {
      const response = await axios.get(`https://api.tvmaze.com/shows/${params.id}`)
      setSingleSerie(response.data)
    }
    fetchSingleSerie()
  }, [params.id])

  let rating = singleSerie.rating
  if (rating) {
    rating = singleSerie.rating.average
    if (rating === null) {
      rating = 'Sin Rating'
    }
  }

  function removeTags (str) {
    if ((str === null) || (str === '')) { return false } else { str = str.toString() }
    return str.replace(/(<([^>]+)>)/ig, '')
  }

  console.log(singleSerie)

  return (
    <>
      <div className='single-movie-card'>

        <div className='single-movie-container'>

          <img
            className='cover'
            src={singleSerie.image ? singleSerie.image.original : 'https://cdn-icons-png.flaticon.com/512/14/14178.png'}
          />

          <div className='hero'>

            <img
              src={singleSerie.image ? singleSerie.image.original : 'https://cdn-icons-png.flaticon.com/512/14/14178.png'}
              alt='Image Not Found'
            />

            <div className='details'>

              <div className='title1'>{singleSerie.name}<span>{rating || 'Sin Rating'}</span></div>

              <div className='title2'>{singleSerie.status ? singleSerie.status : 'Sin Status'}</div>

            </div>

          </div>

          <div className='description'>

            <div className='column1'>
              {singleSerie.genres && singleSerie.genres.map(genre =>
                <span key={genre} className='tag'><strong>{genre}</strong></span>)}
            </div>

            <div className='column2'>

              <h5><strong>Description: </strong></h5>
              <p>{singleSerie.summary && removeTags(singleSerie.summary)}</p>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default SingleSerie
