import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login login= {false} />}/>
        <Route exact path='/signup' element={<Signup />}/>
        <Route exact path='/netflix' element={<Netflix />}/>
      </Routes>
    </BrowserRouter>
  )
}
