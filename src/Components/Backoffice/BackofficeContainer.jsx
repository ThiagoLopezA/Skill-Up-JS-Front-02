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

  const fetchTransactions = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
      const { data } = await axios.get(`${API_URL}/transactions`, config)

      const encryptedTransactions = data.body?.encrypted
      if (encryptedTransactions)
        setAdminData(prev => ({
          ...prev,
          transactions: jwt_decode(encryptedTransactions).response,
        }))
    } catch (err) {
      console.log(err)
    }
  }

  const fetchCategories = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
      const { data } = await axios.get(`${API_URL}/categories`, config)

      setAdminData(prev => ({
        ...prev,
        categories: data.body,
      }))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers()
    fetchTransactions()
    fetchCategories()
  }, [])

  return (
    <Backoffice
      users={adminData.users}
      transactions={adminData.transactions}
      categories={adminData.categories}
    />
  )
}
