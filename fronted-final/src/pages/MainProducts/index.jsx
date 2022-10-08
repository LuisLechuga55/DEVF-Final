import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../../components/Cards'
import './mainProduct.scss'

function MainProduct (props) {
  const { onAdd } = props
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
      .then((response) => {
        setItems(response.data)
      })
  }, [])

  return (
    <>
      <div className='main-text-product'><h1>Products</h1></div>

      <div className='product-container'>

        {
          items.slice(0, 50).map(product => (
            <Card
              key={product._id}
              product={product}
              onAdd={onAdd}
              // id={product._id}
              // image={product.image ? product.image : 'https://cdn-icons.flaticon.com/png/512/2375/premium/2375196.png?token=exp=1651192212~hmac=7caff87828de6890b95ea7e5867979c4'}
              // name={product.product_name}
              // price={product.price}
            />
          ))
        }

      </div>
    </>
  )
}

export default MainProduct
