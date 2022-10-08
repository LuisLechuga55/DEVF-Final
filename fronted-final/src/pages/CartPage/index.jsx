import React from 'react'

function CartPage (props) {
  const { cartItems, onAdd, onRemove } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const taxPrice = itemsPrice * 0.14
  const shippingPrice = itemsPrice > 2000 ? 0 : 50
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  return (
    <aside className='cart-main'>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart Is Empty</div>}
      </div>

      {cartItems.map((item) => (
        <div
          key={item._id}
          className='row'
        >
          <div className='col-3'>{item.product_name}</div>
          <div className='col-3'>
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

            <div className='my-3'>
              <strong>{item.qty} x - $ {item.price.toFixed(2)}</strong>
            </div>

          </div>

        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className='row'>
            <div className='col-3'>Items Price</div>
            <div className='col-1'>💲 {itemsPrice.toFixed(2)}</div>
          </div>

          <div className='row'>
            <div className='col-3'>Tax Price</div>
            <div className='col-1'>💲 {taxPrice.toFixed(2)}</div>
          </div>

          <div className='row'>
            <div className='col-3'>Shipping Price</div>
            <div className='col-1'>💲 {shippingPrice.toFixed(2)}</div>
          </div>

          <div className='row'>
            <div className='col-3'><strong>Total Price</strong></div>
            <div className='col-1'><strong>💲 {totalPrice.toFixed(2)}/</strong></div>
          </div>

          <hr />
          {/* <div className='row'>
            <button
              onClick={() => alert('Implement Checkout')}
            >
              Checkout
            </button>
          </div> */}

        </>
      )}
    </aside>
  )
}

export default CartPage
