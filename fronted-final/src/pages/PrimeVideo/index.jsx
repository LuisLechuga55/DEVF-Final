import { useState, useEffect } from 'react'
import axios from 'axios'
import './primeVideo.scss'
import CardSeries from '../../components/CardSeries'

function PrimeVideo () {
  const [searchForm, setSearchForm] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const searchHandle = (e) => {
    e.preventDefault()
    setSearchForm(e.target.value.toLowerCase())
  }

  const onSearchHandler = async (e) => {
    e.preventDefault()
    const searchRes = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchForm}`)
    setSearchForm(searchRes)
    setSearchResult(searchRes.data)
  }

  useEffect(() => {
    const fetchResult = async () => {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchForm}`)
      setSearchForm(response.data)
    }
    fetchResult()
  }, [])

  return (
    <>
      <div className='main-series-container'>

        <div className='top-primevideo'>

          <div className='columns-primevideo'>

            <div className='featured_wrapper'>

              <img className='img-main-primevideo' src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/12/witcher-netflix.jpg?itok=68bqOKQv' />

              <div className='title_wrapper'>

                <span className='text-primevideo'>Search Series</span>

                <form className='searchbar_form'>
                  <input
                    type='text'
                    placeholder='Search for Series'
                    onChange={searchHandle}
                  />
                </form>

                <button
                  className='button-primevideo'
                  onClick={onSearchHandler}
                >
                  Search
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className='main-card-serie'>

        {
          searchResult.map(serie => (
            <CardSeries
              key={serie.show.id}
              id={serie.show.id}
              image={serie.show.image ? serie.show.image.original : 'https://cdn-icons-png.flaticon.com/512/14/14178.png'}
              status={serie.show.status}
              language={serie.show.language}
              name={serie.show.name}
              rating={serie.show.rating.average ? serie.show.rating.average : 'No rating'}
            />
          ))
        }

      </div>

    </>
  )
}

export default PrimeVideo
