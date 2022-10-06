import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import Card from '../../components/Cards'
import CardProduct from '../../components/CardProduct'
import './homepage.scss'

function Homepage () {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
      .then((response) => {
        setItems(response.data)
      })
  }, [])

  console.log(items.slice(0, 1))

  return (
    <>
      <header>

        <div className='overlay' />

        <video playsInline='playsInline' autoPlay='autoPlay' muted='muted' loop='loop'>
          <source src='/src/assets/videos/johnny-depp.mp4' type='video/mp4' />
          {/* src/assets/videos/Mercado.mp4? */}
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
            dragConstraints={{ right: 0, left: -1980 }}
          >
            {items.slice(0, 9).map(product => (
              <motion.div className='item' key={product._id}>
                <CardProduct
                  id={product._id}
                  image={product.image ? product.image : 'https://cdn-icons.flaticon.com/png/512/2375/premium/2375196.png?token=exp=1651192212~hmac=7caff87828de6890b95ea7e5867979c4'}
                  name={product.product_name}
                  price={product.price}
                  brand={product.brand}
                />
              </motion.div>
            ))}

          </motion.div>

        </motion.div>

      </div>

      <div className='text-top'><h1>Products</h1></div>

      <div className='product-container'>

        {
          items.slice(0, 15).map(product => (
            <Card
              key={product._id}
              id={product._id}
              image={product.image ? product.image : 'https://cdn-icons.flaticon.com/png/512/2375/premium/2375196.png?token=exp=1651192212~hmac=7caff87828de6890b95ea7e5867979c4'}
              name={product.product_name}
              price={product.price}
            />
          ))
        }

      </div>

    </>
  )
}

export default Homepage
