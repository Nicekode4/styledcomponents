import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'

function AppRouter() {
  return (
    <Routes>
        <Route index element={<Navbar />}></Route>
    </Routes>
  )
}

export default AppRouter