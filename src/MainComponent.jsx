import React from 'react'
import TravelList from './TravelList'

//SOLAMENTE SE PUEDE HACER RETURN DE 1 ETIQUETA, recordatorio
function MainComponent() {
  return (
    <main>
        <h2>Este es mi MainComponent</h2> 
        <TravelList/>
    </main>
  )
}

export default MainComponent