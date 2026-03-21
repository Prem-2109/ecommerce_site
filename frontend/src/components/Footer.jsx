import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="bg-gray-50">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-600">

                {/* Brand */}
                <div>
                    <img src={assets.logo} className="w-32 mb-5" alt="logo" />
                    <p className="leading-relaxed">
                        We create premium quality fashion and lifestyle products designed
                        to elevate your everyday style.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <p className="text-lg font-semibold mb-5 text-gray-800">Company</p>
                    <ul className="flex flex-col gap-3">
                        <Link to="/" className="hover:text-black transition">Home</Link>
                        <Link to="/about" className="hover:text-black transition">About Us</Link>
                        <Link to="/collection" className="hover:text-black transition">Collection</Link>
                        <Link to="/contact" className="hover:text-black transition">Contact</Link>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <p className="text-lg font-semibold mb-5 text-gray-800">Support</p>
                    <ul className="flex flex-col gap-3">
                        <li className="hover:text-black cursor-pointer transition">Shipping & Delivery</li>
                        <li className="hover:text-black cursor-pointer transition">Returns & Exchange</li>
                        <li className="hover:text-black cursor-pointer transition">Privacy Policy</li>
                        <li className="hover:text-black cursor-pointer transition">Terms & Conditions</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <p className="text-lg font-semibold mb-5 text-gray-800">Contact</p>
                    <ul className="flex flex-col gap-3">
                        <li>📞 +91 98765 33145</li>
                        <li>✉️ support@yourstore.com</li>
                        <li>📍 Chennai, India</li>
                    </ul>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t"></div>

            {/* Bottom Footer */}
            <div className="text-center py-5 text-xs text-gray-500">
                © {new Date().getFullYear()} YourStore. All rights reserved.
            </div>

        </div>
    )
}

export default Footer