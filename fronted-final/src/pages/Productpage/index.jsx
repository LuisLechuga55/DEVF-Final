import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import './productpage.scss'

function Productpage () {
  const params = useParams()
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
        <div className='row g-5'>
          <div className='col-md-4'>
            <img src={singleProduct.image} className='img-fluid rounded-start' alt='Image Not Found' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{singleProduct.product_name}</h5>
              <p className='card-text'>{singleProduct.description}</p>
              <p className='card-text'><strong>€ {singleProduct.price}</strong></p>
              <p className='card-text'><strong>{singleProduct.category}</strong></p>
              <Link to='/' className='buy'><i className='bi bi-cart2' /> Buy</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-clean'>
        <footer>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-sm-4 col-md-3 item'>
                <h3>Services</h3>
                <ul>
                  <li><a href='#'>Web design</a></li>
                  <li><a href='#'>Development</a></li>
                  <li><a href='#'>Hosting</a></li>
                </ul>
              </div>
              <div className='col-sm-4 col-md-3 item'>
                <h3>About</h3>
                <ul>
                  <li><a href='#'>Company</a></li>
                  <li><a href='#'>Team</a></li>
                  <li><a href='#'>Legacy</a></li>
                </ul>
              </div>
              <div className='col-sm-4 col-md-3 item'>
                <h3>Careers</h3>
                <ul>
                  <li><a href='#'>Job openings</a></li>
                  <li><a href='#'>Employee success</a></li>
                  <li><a href='#'>Benefits</a></li>
                </ul>
              </div>
              <div className='col-lg-3 item social'>
                <a href='#'><i className='bi bi-facebook' /></a>
                <a href='#'><i className='bi bi-twitter' /></a>
                <a href='#'><i className='bi bi-snapchat' /></a>
                <a href='#'><i className='bi bi-instagram' /></a>
                <p className='copyright'>Mercado Fake © 2018</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Productpage
