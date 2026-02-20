import {
  ChevronDown,
  Heart,
  HelpCircle,
  LogIn,
  LogOut,
  Mail,
  MapPin,
  Menu,
  Phone,
  Settings,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Manufacturing", path: "/manufacturing" },
    { label: "Location", path: "/location" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  // Demo user data
  const demoUser = {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    initials: "RS",
  };

  // Login/Logout handlers
  const handleLogin = () => {
    setIsLoggedIn(true);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white">
      {/* Top bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-1 text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919424841322"
              className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +91 94248 41322
            </a>
            <a
              href="mailto:microseedandagreetech@gmail.com"
              className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              microseedandagreetech@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-green-600" />
            Shikarpur, Chhindwara (M.P.)
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">
            MS
          </div>
          <div>
            <div className="font-bold text-lg leading-tight text-gray-800">
              Micro Seeds
            </div>
            <div className="text-xs text-green-600 leading-tight">
              & Agritech Solutions
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors pb-0.5 ${
                isActive(link.path)
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section - Get Quote & Profile */}
        <div className="flex items-center gap-3">
          {/* Get Quote Button - Hidden on mobile */}
          <Link
            to="/contact"
            className="hidden lg:block bg-green-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition-colors">
            Get Quote
          </Link>

          {/* User Profile / Login */}
          <div className="relative">
            {isLoggedIn ? (
              // User is logged in
              <div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-lg pl-2 pr-1 py-1 transition-colors border border-gray-200">
                  {/* User Avatar */}
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                    {demoUser.initials}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium text-gray-700">
                    {demoUser.name.split(" ")[0]}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-600 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-800">
                        {demoUser.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {demoUser.email}
                      </p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                      <Link
                        to="/profile"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition-colors"
                        onClick={() => setDropdownOpen(false)}>
                        <User className="w-4 h-4 text-green-600" />
                        My Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition-colors"
                        onClick={() => setDropdownOpen(false)}>
                        <ShoppingCart className="w-4 h-4 text-green-600" />
                        My Orders
                      </Link>
                      <Link
                        to="/wishlist"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition-colors"
                        onClick={() => setDropdownOpen(false)}>
                        <Heart className="w-4 h-4 text-green-600" />
                        Wishlist
                      </Link>
                      <Link
                        to="/support"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition-colors"
                        onClick={() => setDropdownOpen(false)}>
                        <HelpCircle className="w-4 h-4 text-green-600" />
                        Help & Support
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition-colors"
                        onClick={() => setDropdownOpen(false)}>
                        <Settings className="w-4 h-4 text-green-600" />
                        Settings
                      </Link>
                    </div>

                    {/* Logout Button */}
                    <div className="border-t border-gray-100 pt-1">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left">
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // User is not logged in - Show Login Button
              <button
                onClick={handleLogin}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
                <span className="sm:hidden">Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-green-50 text-green-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}>
                {link.label}
              </Link>
            ))}

            {/* Mobile Get Quote */}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold text-center hover:bg-green-700 transition-colors">
              Get Quote
            </Link>

            {/* Mobile Login/Logout */}
            {!isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogin();
                  setMobileOpen(false);
                }}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold text-center hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <LogIn className="w-4 h-4" /> Login
              </button>
            ) : (
              <>
                {/* Mobile User Info */}
                <div className="mt-3 px-3 py-2 bg-gray-50 rounded-md">
                  <p className="text-sm font-semibold text-gray-800">
                    {demoUser.name}
                  </p>
                  <p className="text-xs text-gray-500">{demoUser.email}</p>
                </div>

                {/* Mobile Profile Links */}
                <Link
                  to="/profile"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}>
                  <User className="w-4 h-4 text-green-600" /> My Profile
                </Link>
                <Link
                  to="/orders"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}>
                  <ShoppingCart className="w-4 h-4 text-green-600" /> My Orders
                </Link>
                <Link
                  to="/wishlist"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}>
                  <Heart className="w-4 h-4 text-green-600" /> Wishlist
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="mt-2 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold text-center hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
