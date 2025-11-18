import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, MapPin, FileText, Phone, User, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;


  let handleCustomEvent = () => {
    let details = {
      eventName : "subscribe"
    }
    window?.ReWebSDK?.customEvent(details)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">Smart-FoodieHub</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/recipes"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/recipes') 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>Recipes</span>
              </Link>
              <Link
                to="/restaurants"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/restaurants') 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <MapPin className="h-4 w-4" />
                <span>Restaurants</span>
              </Link>
              <Link
                to="/blog"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/blog') 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <FileText className="h-4 w-4" />
                <span>Blog</span>
              </Link>
              <Link
                to="/contact"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/contact') 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </Link>
              <Link
                to="/login"
                className="flex items-center space-x-1 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-orange-600">Home</Link>
            <Link to="/recipes" className="block px-3 py-2 text-gray-600 hover:text-orange-600">Recipes</Link>
            <Link to="/restaurants" className="block px-3 py-2 text-gray-600 hover:text-orange-600">Restaurants</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-orange-600">Blog</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-orange-600">Contact</Link>
            <Link to="/login" className="block px-3 py-2 text-orange-600 font-medium">Login</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Smart-FoodieHub</span>
              </div>
              <p className="text-gray-300 text-sm">
                Discover amazing recipes, find great restaurants, and get lifestyle tips for a healthier, more delicious life.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/recipes" className="hover:text-orange-400 transition-colors">Recipes</Link></li>
                <li><Link to="/restaurants" className="hover:text-orange-400 transition-colors">Restaurants</Link></li>
                <li><Link to="/blog" className="hover:text-orange-400 transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-4">Subscribe for delicious updates and cooking tips!</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button onClick={handleCustomEvent} className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-300">
            <p>&copy; 2025 Smart-FoodieHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
