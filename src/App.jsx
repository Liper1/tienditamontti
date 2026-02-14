import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
