import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import './cartPage.scss'

function CartPage (props) {
  const { cartItems, onAdd, onRemove } = props
  const { isAuth } = useContext(AuthContext)

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const taxPrice = itemsPrice * 0.03
  const shippingPrice = itemsPrice > 1500 ? 0 : 50
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  return (
    <>
      <aside className='cart-main'>
        <h2 className='cart-title'>Carrito Compras</h2>

        {isAuth
          ? (
            <div>
              {cartItems.length === 0 &&
                <div className='empty-cart'>
                  <h2>Tu carrito está vacío</h2>
                  <img src='https://www.ofientrega.com.mx/assets/images/carritoVacio.png' alt='' />
                  <div className='empty-cart-login'>
                    <Link to='/products'>Productos</Link>
                  </div>
                </div>}
            </div>
            )
          : (
            <div>
              {cartItems.length === 0 &&
                <div className='empty-cart'>
                  <h3>Tu carrito está vacío</h3>
                  <img src='https://www.ofientrega.com.mx/assets/images/carritoVacio.png' alt='' />
                  <div className='empty-cart-link'>
                    <button>
                      <Link to='/login'>
                        Inicia Sesion
                      </Link>
                    </button>
                    <Link to='/signup'>¿No tienes cuenta?</Link>
                  </div>
                </div>}
            </div>
            )}

        {cartItems.map((item) => (
          <div
            key={item._id}
            className='cart-main-cont'
          >
            <div className='cart-product'>
              <h3 className='cart-product-title'>
                {item.product_name}
              </h3>
              <img src={item.image} alt='' width='150' height='160' />

              <div className='btn-cart-product'>
                <button
                  onClick={() => onAdd(item)}
                  className='add'
                >
                  +
                </button>
                <button
                  onClick={() => onRemove(item)}
                  className='remove'
                >
                  -
                </button>

                <div className='cart-product-costumer'>
                  <strong>{item.qty} x - $ {item.price.toFixed(2)}</strong>
                </div>

              </div>

            </div>

          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr className='separete-line-total' />
            <div className='product-price-container'>
              <div className='product-price-text'>Precio Producto</div>
              <div className='product-price'>$ {itemsPrice.toFixed(2)}</div>
            </div>

            <div className='iva-container'>
              <div className='iva-text'>Iva</div>
              <div className='iva-total'>$ {taxPrice.toFixed(2)}</div>
            </div>

            <div className='send-price-container'>
              <div className='send-text'>Precio Envio</div>
              <div className='send-price'>$ {shippingPrice.toFixed(2)}</div>
            </div>

            <hr />

            <div className='total-price-container'>
              <div className='total-text'><strong>Precio Total</strong></div>
              <div className='total-price'><strong>$ {totalPrice.toFixed(2)}/</strong></div>
            </div>

            <hr />
            <div className='btn-checkout-container'>
              <button
                className='btn-checkout'
                onClick={() => alert('Implement Checkout')}
              >
                Checkout
              </button>
            </div>

          </>
        )}
      </aside>

    </>
  )
}

export default CartPage
