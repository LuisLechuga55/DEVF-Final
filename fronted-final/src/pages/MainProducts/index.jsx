import { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from '../../components/Pagination'
import Card from '../../components/Cards'
import Footer from '../../components/Footer'
import './mainProduct.scss'

function MainProduct (props) {
  const { onAdd } = props

  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(30)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
      setItems(res.data)
    }
    fetchPosts()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <div className='main-text-product'><h1>Products</h1></div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />

      <div className='product-container'>

        {
          currentPosts.map(product => (
            <Card
              key={product._id}
              product={product}
              onAdd={onAdd}
            />

          ))
          }

      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />

      <Footer />

    </>
  )
}

export default MainProduct
