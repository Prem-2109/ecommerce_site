import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const Cart = () => {
  const { products, currency, cartItems, delivery_fee, updateQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  const subtotal = cartData.reduce((total, item) => {
    const product = products.find((p) => p._id === item._id);
    return total + product.price * item.quantity;
  }, 0);

  return (
    <div className="border-t pt-8 px-6 md:px-16">
      {/* Title */}
      <div className="text-2xl mb-6">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div key={index} className="flex items-center justify-between border-b py-6" >
                {/* Product Info */}
                <div className="flex items-center gap-5">
                  <img src={productData.image[0]} alt="" className="w-16 md:w-20" />

                  <div>
                    <p className="font-medium">{productData.name}</p>

                    <div className="flex items-center gap-4 mt-2">
                      <p>{currency} {productData.price}</p>

                      <span className="border px-2 py-1 text-sm"> {item.size} </span>
                    </div>
                  </div>
                </div>

                {/* Quantity */}
                <input
                  min="1"
                  step="1"
                  onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                  type="number"
                  defaultValue={item.quantity}
                  className="border w-16 px-2 py-1"
                />

                {/* Delete Icon */}
                <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} alt="" className="w-5 cursor-pointer" />
              </div>
            );
          })}
        </div>

        {/* Cart Totals */}
        <div className="border p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">CART TOTALS</h2>

          <div className="flex justify-between border-b py-2">
            <p>Subtotal</p>
            <p> {currency} {subtotal.toFixed(2)} </p>
          </div>

          <div className="flex justify-between border-b py-2">
            <p>Shipping Fee</p>
            <p> {currency} {delivery_fee.toFixed(2)}
            </p>
          </div>

          <div className="flex justify-between py-3 font-semibold">
            <p>Total</p>
            <p> {currency} {(subtotal + delivery_fee).toFixed(2)}
            </p>
          </div>

          <button className="w-full bg-black text-white py-3 mt-5">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;