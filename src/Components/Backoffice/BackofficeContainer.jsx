import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import Backoffice from './Backoffice'
import { getRequest } from '../../services/httpRequest'

const BackofficeContainer = () => {
  const [adminData, setAdminData] = useState({
    users: [],
    transactions: [],
    categories: [],
  })

  const loadAdminData = async () => {
    try {
      const [users, transactions, categories] = await Promise.all([
        getRequest('/users'),
        getRequest('/transactions'),
        getRequest('/categories'),
      ])

      const encryptedUsers = users.body?.encrypted
      const encryptedTransactions = transactions.body?.encrypted

      setAdminData({
        users: jwt_decode(encryptedUsers).users,
        transactions: jwt_decode(encryptedTransactions).response,
        categories: categories.body,
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadAdminData()
  }, [])

  return (
    <Backoffice
      users={adminData.users}
      transactions={adminData.transactions}
      categories={adminData.categories}
      loadData={loadAdminData}
    />
  )
}

export default BackofficeContainer
