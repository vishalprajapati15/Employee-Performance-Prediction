import { useState } from 'react'
import { Brain, Menu, X } from 'lucide-react'
import { NAVIGATION_LINKS } from '../data/constants'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative z-20 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-purple-400" />
          <span className="text-xl font-bold text-white">Performance Prediction</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {/* CTA Button */}
        <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 cursor-pointer rounded-full transition-all duration-300 transform hover:scale-105">
          Predict
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-800/90 backdrop-blur-lg rounded-lg border border-gray-700">
          <div className="px-6 py-4 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300">
              Predict
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar