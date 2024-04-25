import React from 'react'
import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom' //Pongo las etiquetas para que contengan los componentes que quiero enrutar
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
