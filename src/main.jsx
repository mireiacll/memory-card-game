import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // creates root of application and connects to index.html
  <StrictMode>
    <App />
  </StrictMode>,
)
