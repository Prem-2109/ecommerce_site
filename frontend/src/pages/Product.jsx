import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productdata, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    products.find((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productdata ? (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 border-t pt-10 opacity-100 transition-opacity duration-500">
      {/* Main Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse sm:flex-row gap-4">

          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:max-h-[500px] sm:w-[20%]">
            {productdata.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className={`cursor-pointer w-[22%] sm:w-full border rounded-md object-cover
                ${image === item ? "border-black" : "border-gray-300"}`}
                alt="product thumbnail"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt={productdata.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl font-semibold">{productdata.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_dull_icon} className="w-3.5" alt="" />
            <p className="pl-2 text-sm text-gray-600">(122)</p>
          </div>

          {/* Price */}
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productdata.price}
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-500 leading-relaxed md:w-4/5">
            {productdata.description}
          </p>

          {/* Size Selection */}
          <div className="flex flex-col gap-3 my-8">
            <p className="font-medium">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {productdata.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border rounded-md px-4 py-2 text-sm transition
                  ${item === size
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-300 hover:border-black"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={() => addToCart(productdata._id, size)} className="bg-black text-white px-8 py-3 text-sm rounded-md hover:bg-gray-800 active:bg-gray-500 w-fit" >Add to Cart </button>

          <hr className="border-gray-300 mt-8" />

          {/* Extra Info */}
          <div className="text-gray-500 text-sm mt-5 flex flex-col gap-1">
            <p>100% Original products</p>
            <p>Pay on delivery might be available</p>
            <p>7 Day Return Policy</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (1220)</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>

          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>

      </div>
      <RelatedProducts category={productdata.category} subcategory={productdata.subcategory} />

    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Product;