import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/routes/App.jsx'
import "./i18n/i18n.js"
import './app/styles/app.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
