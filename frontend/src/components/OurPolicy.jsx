import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {

  const policies = [
    {
      icon: assets.exchange_icon,
      title: 'Easy Exchange Policy',
      desc: 'We offer hassle free exchange policy',
    },
    {
      icon: assets.quality_icon,
      title: '7 Days Return Policy',
      desc: 'We provide 7 days free return policy',
    },
    {
      icon: assets.support_img,
      title: '24/7 Customer Support',
      desc: 'Our team is always here to help you',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center py-16 text-gray-700">

      {policies.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition duration-300" >
          {/* Icon */}
          <img src={item.icon} className="w-12 mb-4" alt={item.title} />

          {/* Title */}
          <p className="font-semibold text-sm md:text-base">{item.title}</p>

          {/* Description */}
          <p className="text-gray-400 text-xs md:text-sm mt-1">{item.desc}</p>
        </div>
      ))}

    </div>
  )
}

export default OurPolicy