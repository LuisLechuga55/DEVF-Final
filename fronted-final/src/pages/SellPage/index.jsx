import { useContext } from 'react'
import axios from 'axios'
import useForm from '../../hooks/useForm'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function SellPage () {
  const navigate = useNavigate()
  const { costumer } = useContext(AuthContext)

  const sendProduct = (data) => {
    axios.post('', data, {
      headers: {
        Authorization: 'JWT token'
      }
    })
      .then((response) => {
        const item = window.localStorage.getItem('token', response.data.token)
        console.log(item)
        navigate('/')
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendProduct, {
    nameProduct: '',
    provider: '',
    stock: '',
    price: '',
    category: '',
    infoProduct: ''
  })

  return (
    <div>SellPage</div>
  )
}

export default SellPage

// Automotriz,
// Belleza,
// Cine y TV,
// Tecnologia,
// Hogar,
// Deportes,
// Videojuegos,
// Jugueteria
