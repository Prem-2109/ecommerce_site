import React from 'react'
import { ShopContext } from "../context/ShopContext";
const CartTotal = () => {

    const { products, currency, cartItems, delivery_fee, updateQuantity } =
        useContext(ShopContext);
    const subtotal = cartData.reduce((total, item) => {
        const product = products.find((p) => p._id === item._id);
        return total + product.price * item.quantity;
    }, 0);
    return (
        <div className=''>
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
    )
}

export default CartTotal