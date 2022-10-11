import { useContext } from 'react'
import axios from 'axios'
import useForm from '../../hooks/useForm.js'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.jsx'
import './login.scss'

function Login () {
  const navigate = useNavigate()

  const { loginCostumer } = useContext(AuthContext)

  const sendData = (data) => {
    axios.post('https://devf-final-backend.herokuapp.com/ecommerce/costumer/login', data)
      .then((response) => {
        console.log(response.data)

        loginCostumer(response.data.token)
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <>
      <div className='form-signin my-1'>
        <form onSubmit={handleSubmit}>

          <img className='img-login' src='https://guiaimpresion.com/wp-content/uploads/2020/06/Logotipo-Amazon.jpg' alt='' />
          <h1 className='h3 mb-3 fw-normal'>Please Login</h1>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='name@example.com'
              value={input.email}
              onChange={handleInputChange}
            />
            <label htmlFor='email'>Email address</label>
          </div>

          <div className='form-floating my-1'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Password'
              value={input.password}
              onChange={handleInputChange}
            />
            <label htmlFor='password'>Password</label>
          </div>

          <div className='checkbox mb-3 my-2'>
            <label>
              <input
                type='checkbox'
                value='remember-me'
              /> Remember me
            </label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Login</button>
          <p className='mt-3 mb-3 text-muted copy-cont'>© 2017 – 2021</p>

        </form>
      </div>
    </>
  )
}

export default Login
