import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-byd-blue to-byd-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">BYD RAFFLE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-byd-blue transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('details')} className="text-gray-700 hover:text-byd-blue transition-colors">
              Details
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-byd-blue transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('winners')} className="text-gray-700 hover:text-byd-blue transition-colors">
              Winners
            </button>
          </nav>

          <button 
            onClick={() => scrollToSection('cta')}
            className="hidden md:block btn-primary text-sm py-3 px-6"
          >
            Get Tickets
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="block w-full text-left text-gray-700 hover:text-byd-blue transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('details')} 
              className="block w-full text-left text-gray-700 hover:text-byd-blue transition-colors"
            >
              Details
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="block w-full text-left text-gray-700 hover:text-byd-blue transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('winners')} 
              className="block w-full text-left text-gray-700 hover:text-byd-blue transition-colors"
            >
              Winners
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="btn-primary w-full text-sm"
            >
              Get Tickets
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

