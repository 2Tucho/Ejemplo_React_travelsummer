import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>, // se puede quitar, pero te quita de algunos problemas con rutas y warnings. Si da muchos problemas se puede quitar pero mejor dejarlo incicalmente
)
