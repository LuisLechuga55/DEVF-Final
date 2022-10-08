import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './navbar.scss'

function Navbar (props) {
  const { countCartItems } = props
  const [perfil, setPerfil] = useState([])

  const { isAuth } = useContext(AuthContext)

  useEffect(() => {
    axios.get('http://localhost:5500/ecommerce/costumer')
      .then((res) => {
        setPerfil(res.data)
      })
  }, [])

  console.log(perfil)

  return (
    <>
      <div className='Navbar__main'>

        <div className='Navbar__box'>

          <Link to='/'>
            <img src='/src/assets/img/logo-white.png' className='logo-navbar' />
          </Link>

          <ul className='Navbar__links nav mb-md-0'>

            <li>
              <Link to='/' className='Navbar-list px-4'>
                Home
              </Link>
            </li>

            <li>
              <Link to='/sellproduct' className='Navbar-list px-4'>
                Services
              </Link>
            </li>

            <li>
              <Link to='/products' className='Navbar-list px-4'>
                Products
              </Link>
            </li>

          </ul>

          <div className='wrap'>
            <div className='search'>

              <input
                type='text'
                className='searchTerm'
                placeholder='Search'
              />
              <button
                className='searchButton'
              >
                <i className='bi bi-search' />
              </button>

            </div>
          </div>

          <div className='Drop__main dropdown text-end'>

            {isAuth
              ? (
                <>
                  <span
              // dropdown-toggle
                    className='d-block text-decoration-none'
                    id='dropdownUser1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Bienvenido
                  </span>

                  <ul
                    className='dropdown-menu Drop-login-container'
                    aria-labelledby='dropdownUser1'
                  >
                    <Link to='/logout'>
                      <button className='btn-sign btn-logout'>Cerrar Sesion</button>
                    </Link>

                    <Link to='/perfil'>
                      <button className='btn-perfil'>Perfil</button>
                    </Link>

                  </ul>
                </>
                )
              : (
                <>
                  <span
                    // dropdown-toggle
                    className='d-block text-decoration-none dropdown-toggle'
                    id='dropdownUser1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Bienvenido, identificate
                  </span>

                  <ul
                    className='dropdown-menu Dropdown-container'
                    aria-labelledby='dropdownUser1'
                  >
                    <li>
                      <Link to='/signup'>
                        <button className='btn-sign btn-signup'>Identificate</button>
                      </Link>
                    </li>

                    <li>
                      <Link to='/login'>
                        <button className='btn-login'>Login</button>
                      </Link>
                    </li>
                  </ul>
                </>
                )}

            <li><hr className='dropdown-divider' /></li>

          </div>

          <li>
            <Link to='/cart' className='Navbar-list px-4 cart-shop'>

              <img
                src='/src/assets/img/cartShop.png'
                className='shop-logo'
              /> {' '}
              {countCartItems
                ? (
                  <button className='badge'>{countCartItems}</button>
                  )
                : ('')}

            </Link>
          </li>

        </div>

      </div>
    </>
  )
}

export default Navbar
