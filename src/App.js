import React from 'react'
import Login from './componets/Login'
import Signin from './componets/Signin'
import Profile from './componets/Profile'
import {  Routes, Route, BrowserRouter} from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
       <Routes>
      <Route path="/signing" element={<Signin/>} /> 
      <Route path="/login" element={<Login />} />
      <Route path='/profile' element={<Profile />} />
     
      </Routes>
    </BrowserRouter>
  )
}
