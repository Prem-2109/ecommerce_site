import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex items-center gap-3 mb-6'>
      <p className='text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900'>
        <span className='text-gray-500 font-medium'>{text1} </span>
        <span className='bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent'>
          {text2}
        </span>
      </p>

      <span className='w-10 sm:w-14 h-[2px] bg-black rounded-full'></span>
    </div>
  )
}

export default Title