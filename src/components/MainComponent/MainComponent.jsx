import React from 'react'
import TravelList from './TravelList'
import Home from './Home'
import About from './About'
import Contact from './Contact'

//SOLAMENTE SE PUEDE HACER RETURN DE 1 ETIQUETA, recordatorio
function MainComponent() {
  return (
    <main>
        <h2>Este es mi MainComponent</h2> 
        <TravelList/>
        <Home/>
        <About/>
        <Contact/>
    </main>
  )
}

export default MainComponent