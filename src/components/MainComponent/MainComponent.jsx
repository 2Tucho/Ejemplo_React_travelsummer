import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import TravelList from './TravelList'
import Home from './Home'
import About from './About'
import Contact from './Contact'

//SOLAMENTE SE PUEDE HACER RETURN DE 1 ETIQUETA, recordatorio
function MainComponent() {
  return (
    <main>
      <h2>Este es mi MainComponent</h2>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/travel' element={<TravelList />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </main>
  )
}

export default MainComponent