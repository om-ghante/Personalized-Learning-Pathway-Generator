import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import NavBarComponent from './components/NavBarComponent'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NavBarComponent />}>
            <Route index element={<HomePage />}/>
          </Route>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
