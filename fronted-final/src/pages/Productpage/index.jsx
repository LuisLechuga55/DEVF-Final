import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from '../../components/Footer'
import './productpage.scss'

function Productpage (props) {
  const { onAdd } = props

  const { isAuth } = useContext(AuthContext)

  const params = useParams()

  console.log(isAuth)

  const [singleProduct, setSingleProduct] = useState([])

  useEffect(() => {
    axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}`)
      .then((res) => {
        setSingleProduct(res.data)
      })
  }, [params.id])

  console.log(singleProduct)

  return (
    <>
      <div className='card-single'>

        <div className='single-product'>
          <img src={singleProduct.image ? singleProduct.image : 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'} className='img-fluid rounded-start' alt='Image Not Found' />

          <div className='single-product-info'>
            <h1>{singleProduct.product_name}</h1>

            <p className='single-product-price'>
              <strong>€ {singleProduct.price}</strong>
            </p>

            <p>
              <strong>Description: </strong>{singleProduct.description}
            </p>

            <span className='single-product-genre'><strong>{singleProduct.category}</strong></span>

            <hr />

            <button
              className='buy'
              onClick={() => onAdd(singleProduct)}
            >
              <i className='bi bi-cart2' /> Buy
            </button>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Productpage
