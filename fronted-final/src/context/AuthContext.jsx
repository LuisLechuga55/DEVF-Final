import { createContext, useState, useEffect } from 'react'
import getPayload from '../utils/getPayload.js'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false)

  const [costumer, setCostumer] = useState(null)

  const loginCostumer = (token) => {
    window.localStorage.setItem('token', token)
    const decode = getPayload(token)
    setCostumer(decode)
    setIsAuth(true)
  }

  const logoutCostumer = () => {
    window.localStorage.removeItem('token')
    setCostumer({})
    setIsAuth(false)
  }

  useEffect(() => {
    const item = window.localStorage.getItem('token')
    if (item) {
      const decoded = getPayload(item)
      setCostumer(decoded)
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth, costumer, loginCostumer, logoutCostumer
    }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
