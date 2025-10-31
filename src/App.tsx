import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import KeyDetails from './components/KeyDetails'
import AboutCause from './components/AboutCause'
import Winners from './components/Winners'
import HowItWorks from './components/HowItWorks'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <Hero />
      <KeyDetails />
      <AboutCause />
      <HowItWorks />
      <Winners />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App

