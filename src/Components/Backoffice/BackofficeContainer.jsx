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

  const getAdminData = async () => {
    const config = {
      headers: { Authorization: `Bearer ${API_KEY}` },
    }

    try {
      const getUsers = axios.get(`${API_URL}/users`, config)
      const getTransactions = axios.get(`${API_URL}/transactions`, config)
      const getCategories = axios.get(`${API_URL}/categories`, config)

      const [users, transactions, categories] = await Promise.all([
        getUsers,
        getTransactions,
        getCategories,
      ])

      const encryptedUsers = users.data.body?.encrypted
      const encryptedTransactions = transactions.data.body?.encrypted

      if (encryptedUsers && encryptedTransactions)
        return setAdminData({
          users: jwt_decode(encryptedUsers).users,
          transactions: jwt_decode(encryptedTransactions).response,
          categories: categories.data.body,
        })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAdminData()
  }, [])

  return (
    <Backoffice
      users={adminData.users}
      transactions={adminData.transactions}
      categories={adminData.categories}
    />
  )
}
