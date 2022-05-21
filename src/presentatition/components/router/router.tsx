import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Login } from '@/presentatition/pages'
import '@/presentatition/styles/global.scss'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<h1>Register</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
