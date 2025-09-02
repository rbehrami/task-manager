import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from '../../slices/LoginButton'
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { loginWithRedirect } = useAuth0();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ]

  return (
    <>
      <header>
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md fixed w-full z-50">
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16 items-center'>
              {/* Logo */}
              <div className='text-2xl font-bold tracking-wide'>
                TaskManager
              </div>
              
              {/* Desktop Menu */}
              <div className='hidden md:flex space-x-8 font-medium items-center'>
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="hover:text-gray-200 transition"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                    onClick={() => loginWithRedirect()}
                    className="px-8 py-1 bg-black text-white font-semibold text-lg rounded-full shadow-lg hover:bg-gray-900 active:bg-gray-800 transition-all duration-300 cursor-pointer"
                  >
                    Log In
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <div className='md:hidden flex items-center'>
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className='focus:outline-0 focus:ring-2 focus:ring-white rounded p-1'
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>                    
            </div>
          </div>
          
          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden bg-purple-700 px-4 pb-4 pt-2 space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block py-2 hover:text-gray-200 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2" onClick={() => setIsOpen(false)}>
                  <button
                    onClick={() => loginWithRedirect()}
                    className="w-full px-8 py-3 bg-black text-white font-semibold text-lg rounded-full shadow-lg hover:bg-gray-900 active:bg-gray-800 transition-all duration-300"
                  >
                    Log In
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default Header