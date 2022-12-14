import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserFromLocalStorage } from '../app/authSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserFromLocalStorage())
  }, [])

  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

export default Home
