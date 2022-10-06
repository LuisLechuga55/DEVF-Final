import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './logout.scss'

function Logout () {
  const { logoutCostumer } = useContext(AuthContext)
  const navigate = useNavigate(AuthContext)

  useEffect(() => {
    logoutCostumer()
    navigate('/')
  }, [])

  return <></>
}

export default Logout
