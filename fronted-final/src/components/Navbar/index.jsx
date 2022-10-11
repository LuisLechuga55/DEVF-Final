import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar (props) {
  const { countCartItems } = props

  return (
    <>
      <div className='Navbar__main'>

        <div className='Navbar__box'>

          <Link to='/'>
            <img
              src='https://devf-website.s3.amazonaws.com/static/assets/img/devf-white.png'
              className='logo-navbar'
            />
          </Link>

          <ul className='Navbar__links nav mb-md-0'>

            <li>
              <Link to='/' className='Navbar-list px-4 mx-1'>
                Home
              </Link>
            </li>

            <li>
              <Link to='/publish' className='Navbar-list px-4 mx-2'>
                Services
              </Link>
            </li>

            <li>
              <Link to='/products' className='Navbar-list px-4 mx-2'>
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

          <div className='Drop__main dropdown text-end  mx-5'>

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
                  <button className='btn-sign btn-signup'>Crear Cuenta</button>
                </Link>
              </li>

              <li>
                <Link to='/login'>
                  <button className='btn-login'>Login</button>
                </Link>
              </li>
            </ul>

            <li><hr className='dropdown-divider' /></li>

          </div>

          <li>
            <Link to='/cart' className='Navbar-list px-1 cart-shop'>

              <button className='badge bg-transparent'>
                <img
                  src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559842.jpg'
                  className='shop-logo'
                />
              </button>
              {countCartItems
                ? (
                  <span className='badge bg-primary badge-position'>{countCartItems}</span>
                  )
                : (
                  <></>
                  )}

            </Link>
          </li>

        </div>

      </div>
    </>
  )
}

export default Navbar
