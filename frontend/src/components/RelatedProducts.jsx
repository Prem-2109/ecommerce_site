import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from '../context/ShopContext';
import Title from './Title'
const RelatedProducts = ({ category, subcategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subcategory === item.subcategory);
            
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products]);

    return (
        <div className="my-20">

            <div class=" text-center text-3xl py-2">
                <div class="inline-flex gap-2 items-center mb-3">
                    <p class="text-gray-500">RELATED <span class="text-gray-700 font-medium">PRODUCTS</span>
                    </p>
                    <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                </div>
            </div>


            {/* <div className="text-center text-3xl py-2">
                <Title text1={"Related"} text2={"Products"} />
            </div> */}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {related.map((item) => (
                    <div key={item._id} className="rounded-md p-4 flex flex-col">
                        <img src={item.image[0]} alt={item.name} className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.price}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RelatedProducts