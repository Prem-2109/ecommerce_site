import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)

    return (
        <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer block">
            <div className="overflow-hidden rounded-lg">

                {/* Product Image */}
                <img src={image[0]} alt={name} className="w-full h-60 object-cover hover:scale-110 transition-transform duration-300"
                />

            </div>

            {/* Product Info */}
            <div className="pt-3">
                <p className="text-sm font-medium">{name}</p>
                <p className="text-sm text-gray-500">
                    {currency}{price}
                </p>
            </div>
        </Link>
    )
}

export default ProductItem