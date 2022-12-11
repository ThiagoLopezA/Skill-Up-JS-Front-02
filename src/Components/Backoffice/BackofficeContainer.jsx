import { useState, useEffect } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Backoffice from './Backoffice'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const BackofficeContainer = () => {
  const [adminData, setAdminData] = useState({
    users: [],
    transactions: [],
    categories: [],
  })

  const fetchUsers = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
      const { data } = await axios.get(`${API_URL}/users`, config)

      const encryptedUsers = data.body?.encrypted
      if (encryptedUsers)
        setAdminData(prev => ({
          ...prev,
          users: jwt_decode(encryptedUsers).users,
        }))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return <Backoffice users={adminData.users} />
}
