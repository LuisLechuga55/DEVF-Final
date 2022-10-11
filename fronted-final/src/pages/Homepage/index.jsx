import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import CardProduct from '../../components/CardProduct'
import Footer from '../../components/Footer'
import './homepage.scss'

function Homepage () {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
      .then((response) => {
        setItems(response.data)
      })
  }, [])

  return (
    <>
      <header>

        <div className='overlay' />

        <video playsInline='playsInline' autoPlay='autoPlay' muted='muted' loop='loop'>
          <source src='/src/assets/videos/johnny-depp.mp4' type='video/mp4' />
        </video>

        <div className='container h-100'>
          <div className='d-flex h-100 text-center align-items-center'>
            <div className='w-100 text-white'>
              <h1 className='display-3'>Ecommerce DEV. F</h1>
              <p className='lead mb-0'>La Mejor Tienda En Linea</p>
            </div>
          </div>
        </div>

      </header>

      <section className='py-5 main-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <p>Una empresa que ya recorrió 21 años, opera en 18 países y llegó a cotizar en Nasdaq sin perder nunca su corazón de start up.</p>
              <p>Esa cultura emprendedora está en nuestro ADN y su efecto multiplicador escribe la historia de nuestro crecimiento. Es el espíritu que impulsa la misión de Mercado Libre, que es democratizar el comercio electrónico y los servicios financieros en la región para transformar la vida de millones de personas en América Latina.</p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-top'><h1>Top Product</h1></div>

      <div className='main-card'>

        <motion.div className='slider-container'>

          <motion.div
            className='slider'
            drag='x'
            dragConstraints={{ right: 0, left: -3930 }}
          >
            {items.slice(0, 15).map(product => (
              <motion.div className='item' key={product._id}>
                <CardProduct
                  id={product._id}
                  image={product.image ? product.image : 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'}
                  name={product.product_name}
                  price={product.price}
                  brand={product.brand}
                />
              </motion.div>
            ))}

          </motion.div>

        </motion.div>

      </div>

      <div className='text-top'><h1>Other Product</h1></div>

      <div className='vertical-card'>

        <motion.div className='slider-container-vertical'>

          <motion.div
            className='slider-vertical'
            drag='y'
            dragConstraints={{ bottom: -15, top: -4790 }}
          >
            {items.slice(440, 449).map(product => (
              <motion.div className='item-vertical' key={product._id}>
                <CardProduct
                  id={product._id}
                  image={product.image ? product.image : 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'}
                  name={product.product_name}
                  price={product.price}
                  brand={product.brand}
                />
              </motion.div>
            ))}

          </motion.div>

        </motion.div>

        <motion.div className='slider-container-vertical'>

          <motion.div
            className='slider-vertical'
            drag='y'
            dragConstraints={{ bottom: -15, top: -4790 }}
          >
            {items.slice(420, 429).map(product => (
              <motion.div className='item-vertical' key={product._id}>
                <CardProduct
                  id={product._id}
                  image={product.image ? product.image : 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'}
                  name={product.product_name}
                  price={product.price}
                  brand={product.brand}
                />
              </motion.div>
            ))}

          </motion.div>

        </motion.div>

        <motion.div className='slider-container-vertical'>

          <motion.div
            className='slider-vertical'
            drag='y'
            dragConstraints={{ bottom: -15, top: -4790 }}
          >
            {items.slice(400, 409).map(product => (
              <motion.div className='item-vertical' key={product._id}>
                <CardProduct
                  id={product._id}
                  image={product.image ? product.image : 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'}
                  name={product.product_name}
                  price={product.price}
                  brand={product.brand}
                />
              </motion.div>
            ))}

          </motion.div>

        </motion.div>

        <motion.div className='slider-container-vertical'>

          <motion.div
            className='slider-vertical'
            drag='y'
            dragConstraints={{ bottom: -15, top: -4790 }}
          >
            {items.slice(10, 19).map(product => (
              <motion.div className='item-vertical' key={product._id}>
                <CardProduct
                  id={product._id}
                  image={product.image ? product.image : 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'}
                  name={product.product_name}
                  price={product.price}
                  brand={product.brand}
                />
              </motion.div>
            ))}

          </motion.div>

        </motion.div>

      </div>

      <Footer />

    </>
  )
}

export default Homepage

/**
 * Los proyectos del curso sirven para poner en experiencia
 */
