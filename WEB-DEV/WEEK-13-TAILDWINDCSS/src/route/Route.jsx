import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../sections/Home'

const RouterPage = () => {
  return (
    <div>

    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
    </div>
  )
}

export default RouterPage