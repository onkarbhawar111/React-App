import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './Create'
import Update from './UPdate'

const App1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App1