import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative flex flex-col-reverse sm:flex-row items-center">

        {/* LEFT CONTENT */}
        <div className="w-full sm:w-1/2 z-20 flex items-center justify-center py-16">
          <div className="text-white max-w-lg px-6">

            {/* Badge */}
            <div className="mb-4 inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs tracking-wide">
              🔥 Trending Collection
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elevate Your <br />
              <span className="text-gray-300">Style Game</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm md:text-base text-gray-200 mb-8">
              Discover premium fashion crafted for modern lifestyles.  
              Quality, comfort, and elegance — all in one place.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">

              <Link
                to="/collection"
                className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/about"
                className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Explore
              </Link>

            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full sm:w-1/2 relative">
          <img
            src={assets.hero_img}
            alt="Hero"
            className="w-full h-[400px] sm:h-[600px] object-cover scale-105 hover:scale-110 transition-transform duration-700"
          />

          {/* Floating Card */}
          <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-lg p-4 rounded-xl text-white hidden sm:block">
            <p className="text-sm">✨ New Drop</p>
            <p className="text-lg font-semibold">Summer 2026</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero