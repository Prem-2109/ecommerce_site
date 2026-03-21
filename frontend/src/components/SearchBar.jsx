import React, { useContext, useState, useEffect, useRef } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {

  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)

  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const inputRef = useRef(null)

  // Show only in collection page
  useEffect(() => {
    if (location.pathname.includes('/collection')) {
      setVisible(true)
    } else {
      setVisible(false)
      setShowSearch(false) // auto close when leaving page
    }
  }, [location.pathname])

  // Auto focus when opened
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus()
    }
  }, [showSearch])

  return showSearch && visible ? (
    <div className='bg-gray-100 py-4 px-4 sm:px-8 transition-all duration-300'>

      <div className='flex items-center justify-center'>

        <div className='flex items-center w-full max-w-xl bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm'>

          {/* Input */}
          <input
            ref={inputRef}
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search for products...'
            className='flex-1 outline-none text-sm sm:text-base bg-transparent'
          />

          {/* Search Icon */}
          <img
            src={assets.search_icon}
            alt='search'
            className='w-4 sm:w-5 cursor-pointer opacity-70 hover:opacity-100 transition'
          />

          

        </div>
          {/* Close Icon */}
          <img
            onClick={() => setShowSearch(false)}
            src={assets.cross_icon}
            alt='close'
            className='w-4 sm:w-5 ml-3 cursor-pointer hover:scale-110 transition'
          />
      </div>

    </div>
  ) : null
}

export default SearchBar