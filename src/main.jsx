import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainLayout from './Components/MainLayout/MainLayout'
import Routes from './Components/Routes/Routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes></Routes>
  </StrictMode>
)
