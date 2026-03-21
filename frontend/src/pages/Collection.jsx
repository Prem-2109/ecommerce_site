import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext)

  const [showFilter, setShowFilter] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedType, setSelectedType] = useState([])
  const [sortType, setSortType] = useState('relavent')
  const [filteredProducts, setFilteredProducts] = useState([])

  // Load products initially
  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  // Toggle Category
  const toggleCategory = (value) => {
    setSelectedCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  // Toggle Type
  const toggleType = (value) => {
    setSelectedType((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  // Filter + Sort Logic
  useEffect(() => {
    let filtered = [...products]

    // Search filter
    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory.length > 0) {
      filtered = filtered.filter((item) =>
        selectedCategory.includes(item.category)
      )
    }

    // Type filter
    if (selectedType.length > 0) {
      filtered = filtered.filter((item) =>
        selectedType.includes(item.subCategory)
      )
    }

    // Sorting
    if (sortType === 'asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortType === 'desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(filtered)

  }, [products, search, showSearch, selectedCategory, selectedType, sortType])

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory([])
    setSelectedType([])
    setSortType('relavent')
  }

  return (
    <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 pt-10 border-t'>

      {/* Sidebar */}
      <div className='min-w-60'>

        {/* Filter Toggle */}
        <div
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl cursor-pointer flex items-center justify-between sm:block'
        >
          <span className={`${showFilter ? 'font-semibold' : ''}`}>
            Filters
          </span>

          <img
            src={assets.dropdown_icon}
            alt='dropdown'
            className={`h-3 sm:hidden transition-transform duration-300 ${
              showFilter ? 'rotate-90' : ''
            }`}
          />
        </div>

        <div className={`${showFilter ? '' : 'hidden'} sm:block`}>

          {/* Category Filter */}
          <div className='border border-gray-300 p-4 mt-5'>
            <p className='font-medium mb-3'>Category</p>

            {['Men', 'Women', 'Kids'].map((cat, i) => (
              <label key={i} className='flex gap-2 text-sm mb-2 cursor-pointer'>
                <input
                  type='checkbox'
                  checked={selectedCategory.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Type Filter */}
          <div className='border border-gray-300 p-4 mt-5'>
            <p className='font-medium mb-3'>Type</p>

            {['Topwear', 'Bottomwear', 'Winterwear'].map((type, i) => (
              <label key={i} className='flex gap-2 text-sm mb-2 cursor-pointer'>
                <input
                  type='checkbox'
                  checked={selectedType.includes(type)}
                  onChange={() => toggleType(type)}
                />
                {type}
              </label>
            ))}
          </div>

          {/* Clear Filters */}
          <button
            onClick={clearFilters}
            className='mt-4 text-sm text-blue-600 underline'
          >
            Clear Filters
          </button>

        </div>
      </div>

      {/* Products Section */}
      <div className='flex-1'>

        {/* Header */}
        <div className='flex justify-between items-center text-base sm:text-2xl mb-2'>
          <Title text1={'All'} text2={'Products'} />

          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2 py-1'
          >
            <option value='relavent'>Sort by: Relevant</option>
            <option value='asc'>Price: Low to High</option>
            <option value='desc'>Price: High to Low</option>
          </select>
        </div>

        {/* Product Count */}
        <p className='text-sm text-gray-500 mb-4'>
          {filteredProducts.length} Products Found
        </p>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <p className='text-center text-gray-500 mt-10'>
            No products found 😕
          </p>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filteredProducts.map((item) => (
              <ProductItem
                key={item._id || item.id}
                id={item._id || item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        )}

      </div>

    </div>
  )
}

export default Collection