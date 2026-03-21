import React, { useState, useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const { setShowSearch, getCartCount } = useContext(ShopContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/collection', label: 'Collection' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <div className="flex items-center justify-between py-5 font-medium relative z-50">

      {/* Logo */}
      <NavLink to="/" onClick={closeMobileMenu}>
        <img src={assets.logo} className="w-36 cursor-pointer" alt="Logo" />
      </NavLink>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-base text-gray-700">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={closeMobileMenu}
            className="flex flex-col items-center gap-1 group"
          >
            {({ isActive }) => (
              <>
                <p className={`transition-all duration-200 ${isActive ? 'text-black font-semibold' : 'group-hover:text-black'}`}>
                  {item.label}
                </p>

                <hr
                  className={`border-none h-[1.5px] bg-gray-800 transition-all duration-300 
                  ${isActive ? 'w-2/4' : 'w-0 group-hover:w-2/4'}`}
                />
              </>
            )}
          </NavLink>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Search (FIXED) */}
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer hover:scale-110 transition" alt="search" />

        {/* Profile */}
        <div className="relative group">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer hover:scale-110 transition"
            alt="profile"
          />

          {/* Dropdown */}
          <div className="hidden group-hover:block absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-white shadow-lg text-gray-600 rounded-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <NavLink to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="cart" />
          <p class="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>

        </NavLink>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <img
            src={assets.menu_icon}
            className="w-7 cursor-pointer"
            alt="menu"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-4">
          <ul className="flex flex-col gap-3 text-lg text-gray-700">

            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `py-2 px-4 rounded-lg transition-all duration-200 
                  ${isActive ? 'bg-gray-100 text-black font-semibold' : 'hover:bg-gray-100'}`
                }
              >
                {item.label}
              </NavLink>
            ))}

          </ul>
        </div>
      )}

    </div>
  )
}

export default Navbar