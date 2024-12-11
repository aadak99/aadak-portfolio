import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import Container from '@mui/material/Container'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <Container maxWidth='lg'>
      <App />
    </Container>
  </StrictMode>,
)
