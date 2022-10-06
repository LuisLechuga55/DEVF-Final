import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Protected from '../hoc/Protected'
import Navbar from '../components/Navbar'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Logout from '../pages/Logout'
import Sellpage from '../pages/SellPage'
import CardProduct from '../components/CardProduct'
import Productpage from '../pages/Productpage'
import ShoppingCart from '../components/ShoppingCart'

function Paths () {
  const { isAuth } = useContext(AuthContext)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/product/:id' element={<Productpage />} />
        <Route path='/products' element={<CardProduct />} />
        <Route
          path='/sellproduct'
          element={
            <Protected isLoggedIn={isAuth}>
              <Sellpage />
            </Protected>
          }
        />
      </Routes>
    </Router>
  )
}

export default Paths
