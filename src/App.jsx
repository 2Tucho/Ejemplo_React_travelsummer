import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom' //Pongo las etiquetas para que contengan los componentes que quiero enrutar
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import MainComponent from './MainComponent'
import MainComponent from "./components/MainComponent"
import Header from './components/Header'
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainComponent />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
