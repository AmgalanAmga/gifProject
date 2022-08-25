import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GIFProvider } from './context/GIFContext'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GIFProvider>
        <App />
      </GIFProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
