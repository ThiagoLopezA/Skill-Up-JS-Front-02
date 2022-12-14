import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUserFromLocalStorage } from './app/authSlice'

import AppRoutes from './routes'
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserFromLocalStorage())
  }, [])

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
