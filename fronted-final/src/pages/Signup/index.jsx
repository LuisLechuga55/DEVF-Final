import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useForm from '../../hooks/useForm'
import './signup.scss'

function Sigunp () {
  const navigate = useNavigate()

  const sendData = (data) => {
    if (data.password === data.password_confirm) {
      console.log('Password coincide')

      delete data.password_confirm
      axios.post('http://localhost:5500/ecommerce/costumer/register', data)
        .then((response) => {
          if (response.status === 200) {
            data.password = undefined
            console.log(response.data)
            navigate('/login')
          }
        }).catch((error) => {
          console.log(error.message)
        })
    } else {
      console.log('Password incorrect')
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    firstName: '',
    lastName: '',
    birthday: '',
    phone: '',
    email: '',
    password: '',
    password_confirm: ''
  })

  return (
    <main className='form-signin'>
      <form onSubmit={handleSubmit}>

        <img className='img-login' src='https://guiaimpresion.com/wp-content/uploads/2020/06/Logotipo-Amazon.jpg' alt='' />
        <h1 className='h3 mb-3 fw-normal'>Please Sign up</h1>

        <div className='form-floating my-1'>
          <input
            type='text'
            className='form-control'
            id='firstName'
            name='firstName'
            placeholder='John'
            value={input.firstName}
            onChange={handleInputChange}
          />
          <label htmlFor='firstName'>First Name</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='text'
            className='form-control'
            id='lastName'
            name='lastName'
            placeholder='Doe'
            value={input.lastName}
            onChange={handleInputChange}
          />
          <label htmlFor='lastName'>Last Name</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='date'
            className='form-control'
            id='birthday'
            name='birthday'
            value={input.birthday}
            onChange={handleInputChange}
          />
          <label htmlFor='birthday'>Birthday</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='tel'
            className='form-control'
            id='phone'
            name='phone'
            placeholder='5501010101'
            value={input.phone}
            onChange={handleInputChange}
          />
          <label htmlFor='phone'>Phone</label>
        </div>

        <div className='form-floating my-1'>
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

        <div className='form-floating my-1'>
          <input
            type='password'
            className='form-control'
            id='password_confirm'
            name='password_confirm'
            placeholder='Repeat your password'
            value={input.password_confirm}
            onChange={handleInputChange}
          />
          <label htmlFor='password_confirm'>Confirm password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary my-3' type='submit'>Sign in</button>

        <p className='mt-5 mb-3 text-muted'>© 2017 – 2021</p>

      </form>
    </main>
  )
}

export default Sigunp
