
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-pink-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-2">VivaahVows</h2>
          <p className="text-sm">Make every wedding moment memorable with curated vendors and customized services across India.</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Subscribe to our Newsletter</h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded text-pink-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-pink-100 text-pink-900 font-bold py-2 px-4 rounded hover:animate-ping transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Vendor Registration */}
        <div>
          <h3 className="font-semibold mb-2">Are you a Vendor?</h3>
          <p className="text-sm mb-2">Join our platform to reach thousands of customers!</p>
          <Link to="/signup/vendor">
            <button className="bg-pink-100 text-pink-900 font-bold py-2 px-4 rounded hover:animate-bounce transition">
              Register as Vendor
            </button>
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/bookings" className="hover:underline">My Bookings</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className=" mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/70">
        © 2025 VivaahVows. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
