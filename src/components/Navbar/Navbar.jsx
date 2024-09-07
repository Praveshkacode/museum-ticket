import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-10 border-b border-gray-200'>
      <div className="text-4xl font-bold">
        Museum Tickets
      </div>
      <nav className="flex space-x-4 mt-2">
        <a className="hidden md:block text-gray-600 hover:text-gray-800 text-2xl" href="/testimonials">
          Testimonials
        </a>
        <a className="hidden md:block text-gray-600 hover:text-gray-800 text-2xl" href="/blog">
          Blog
        </a>
        <a className="hidden md:block text-gray-600 hover:text-gray-800 text-2xl" href="/about-us">
          About us
        </a>
        <a className="bg-orange-500 text-white px-4 py-1 rounded-lg text-2xl hover:bg-orange-600" href="/buy-tickets">
          Buy tickets
        </a>
      </nav>
    </div>
  )
}

export default Navbar
