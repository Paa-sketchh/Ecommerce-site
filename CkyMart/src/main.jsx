import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Shopcontextprovider from './Context/Shopcontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <Shopcontextprovider>
    <App />
  </Shopcontextprovider>
  </React.StrictMode>
  
)
