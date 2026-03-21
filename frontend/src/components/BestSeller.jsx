import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

  const { products } = useContext(ShopContext)
  const [bestSellerProducts, setBestSellerProducts] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const bestProducts = products.filter((item) => item.bestseller === true)
      setBestSellerProducts(bestProducts.slice(0, 5))
    }
  }, [products])

  return (
    <div className='my-10'>

      {/* Heading */}
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLER'} />

        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Explore our best-selling products, loved by customers worldwide for their quality and style.
        </p>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {bestSellerProducts.map((item) => (
          <ProductItem
            key={item._id || item.id}
            id={item._id || item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

    </div>
  )
}

export default BestSeller