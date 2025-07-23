import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-8 border-t border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <Link to="/" className="flex items-center gap-2 text-white text-xl font-bold mb-4">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            e-market
          </Link>
          <p className="text-gray-400 text-sm">
            High-quality products & top-notch service. Empowering your online shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-teal-500 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white transition">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-teal-500 font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Fast Delivery</li>
            <li>24/7 Support</li>
            <li>Secure Payment</li>
            <li>Return Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-teal-500 font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: support@emarket.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Location: Silicon Valley, USA</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        &copy; {currentYear} e-market. All rights reserved.
      </div>
    </footer>
  );
}
