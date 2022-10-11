import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import useForm from '../../hooks/useForm'
import './productCreate.scss'

function ProductCreate () {
  const navigate = useNavigate()
  const { costumer } = useContext(AuthContext)

  const sendProduct = (data) => {
    axios.post('https://devf-final-backend.herokuapp.com/ecommerce/product/', data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
          navigate('/')
        }
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendProduct, {
    nameProduct: '',
    provider: '',
    price: '',
    category: '',
    stock: '',
    infoProduct: ''
  })

  return (
    <>
      <div>
        {costumer.roleCostumer === 'seller'
          ? <main className='form-signin'>
            <form onSubmit={handleSubmit}>
              <img className='my-3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4MFtJEJdKRyDklAtbpLIn5pHPoKvpiSidAUOJGjjNQkCcLcUSjdjASkWyq7_z6AfCJ0&usqp=CAU' alt='' width='150' height='100' />
              <h1 className='h3 mb-3 fw-normal'>Post Product</h1>

              <div className='form-floating my-1'>
                <input
                  type='text'
                  className='form-control'
                  id='nameProduct'
                  name='nameProduct'
                  placeholder='Product Name'
                  value={input.nameProduct}
                  onChange={handleInputChange}
                />
                <label htmlFor='nameProduct'>Product Name</label>
              </div>

              <div className='form-floating my-1'>
                <input
                  type='text'
                  className='form-control'
                  id='provider'
                  name='provider'
                  placeholder='provider'
                  value={input.provider}
                  onChange={handleInputChange}
                />
                <label htmlFor='provider'>Provider</label>
              </div>

              <div className='form-floating my-1'>
                <input
                  type='number'
                  className='form-control'
                  id='price'
                  name='price'
                  placeholder='price'
                  value={input.price}
                  onChange={handleInputChange}
                />
                <label htmlFor='price'>Price</label>
              </div>

              <div className='form-floating my-1'>
                <select
                  className='form-select'
                  id='category'
                  name='category'
                  required=''
                  value={input.category}
                  onChange={handleInputChange}
                >

                  <option value=''>Choose...</option>
                  <option value='Belleza'>Belleza</option>
                  <option value='Entretenimiento'>Entretenimiento</option>
                  <option value='Tecnologia'>Tecnologia</option>
                  <option value='Hogar'>Hogar</option>
                  <option value='Deportes'>Deportes</option>
                  <option value='Videojuegos'>Videojuegos</option>
                  <option value='Jugueteria'>Jugueteria</option>
                </select>
                <label htmlFor='category' className='form-label'>Gender</label>
              </div>

              <div className='form-floating my-1'>
                <input
                  type='number'
                  className='form-control'
                  id='stock'
                  name='stock'
                  placeholder='stock'
                  value={input.stock}
                  onChange={handleInputChange}
                />
                <label htmlFor='stock'>Stock</label>
              </div>

              <div className='form-floating my-1'>
                <textarea
                  type='text'
                  className='form-control'
                  id='infoProduct'
                  name='infoProduct'
                  placeholder='Description'
                  value={input.infoProduct}
                  onChange={handleInputChange}
                />
                <label htmlFor='infoProduct'>Description</label>
              </div>

              <button
                className='w-100 my-3 btn-post-product'
                type='submit'
              >
                Post Product
              </button>

              <p className='mt-5 mb-3 text-muted'>© 2017 – 2021</p>

            </form>
          </main>

          : <div className='main-services-prime'>
            <button className='btn-services-prime'>
              <Link to={`/costumer/${costumer.costumerId}`}>Para acceder contrate el paquete premium</Link>
            </button>
            </div>}

        {costumer.roleCostumer === 'costumer' &&
          <div className='main-text-services'>
            <h4 className='text-services-prime'>Por favor, actualiza tu cuenta</h4>
          </div>}

      </div>

    </>
  )
}

export default ProductCreate
