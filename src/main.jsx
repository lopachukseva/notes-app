import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './components/Router.jsx'
import BasePage from './components/basePage/BasePage'
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <Router></Router>
    </AuthProvider>

  </React.StrictMode>,
)
