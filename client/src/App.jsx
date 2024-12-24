import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import NavBarComponent from './components/NavBarComponent'
import HomePage from './components/pages/HomePage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NavBarComponent />}>
            <Route index element={<HomePage />}/>
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
