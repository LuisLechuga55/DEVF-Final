import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import Protected from '../hoc/Protected'
import Navbar from '../components/Navbar'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Logout from '../pages/Logout'
import MainProduct from '../pages/MainProducts'
import Productpage from '../pages/Productpage'
import ProductCreate from '../pages/ProductCreate'
import CreateProduct from '../pages/CreateProduct'
import CartPage from '../pages/CartPage'

function Paths () {
  const { isAuth } = useContext(AuthContext)

  const [dataProduct, setDataProduct] = useState([])
  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  useEffect(() => {
    axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
      .then((res) => {
        setDataProduct(res.data)
      })
  }, [])

  return (
    <Router>
      <Navbar countCartItems={cartItems.length} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/createproduct' element={<CreateProduct />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/product/:id' element={<Productpage />} />
        <Route path='/products' element={<MainProduct onAdd={onAdd} dataProduct={dataProduct} />} />
        <Route path='/cart' element={<CartPage onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />

        <Route
          path='/sellproduct'
          element={
            <Protected isLoggedIn={isAuth}>
              <ProductCreate />
            </Protected>
          }
        />
      </Routes>
    </Router>
  )
}

export default Paths
