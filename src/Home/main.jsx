import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Home.css'
import Home from './App'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
    <Home />,
    <Footer />
)

