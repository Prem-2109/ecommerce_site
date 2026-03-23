import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollections = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10))
    }
  }, [products])

  return (
    <div className='my-10 px-4 sm:px-8 md:px-12 lg:px-16'>

      {/* Heading */}
      <div className='text-center py-8 text-3xl'>
        <Title text1="Latest" text2="Collections" />

        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our latest collection of products, designed to meet your every need.
        </p>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {
            latestProducts.map((item, index) => (
                <ProductItem
                    key={index} id={item._id} image={item.image} name={item.name} price={item.price}
                />
            ))
        }
      </div>

    </div>
  )
}

export default LatestCollections