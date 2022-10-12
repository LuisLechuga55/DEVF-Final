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
      <div className='singleshow'>
        <img className='img-fluid' src={singleSerie.image ? singleSerie.image.original : 'https://cdn-icons-png.flaticon.com/512/14/14178.png'} alt='' />

        <div className='singleshow-info'>
          <h1>{singleSerie.name}</h1>

          {singleSerie.genres && singleSerie.genres.map(genre =>
            <span key={genre} className='singleshow-genre'><strong>{genre}</strong></span>
          )}

          <p>
            <strong>Status: </strong>{singleSerie.status ? singleSerie.status : 'Sin Status'}
          </p>

          <p>
            <strong>Rating: </strong>{rating || 'Sin Rating'}
          </p>

          <p>
            <strong>Official Web: </strong>{singleSerie.officialSite ? (<a href={singleSerie.officialSite} target='_blank' rel='noreferrer'>{singleSerie.officialSite}</a>) : ('No Pagina Web')}
          </p>

          <hr />

          <p>{singleSerie.summary && removeTags(singleSerie.summary)}</p>

        </div>
      </div>
    </>
  )
}

export default SingleSerie
