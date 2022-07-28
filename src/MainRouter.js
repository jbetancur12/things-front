import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BoardAdmin from './components/BoardAdmin'
import BoardModerator from './components/BoardModerator'
import BoardUser from './components/BoardUser'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import PrivateRoute from './services/PrivateRoute'

const MainRouter = () => {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/mod" element={<BoardModerator />} />
        </Route>
      </Routes>
    </div>
  )
}

export default MainRouter
