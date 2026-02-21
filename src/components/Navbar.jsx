import {
  ChevronDown,
  LogIn,
  LogOut,
  Mail,
  MapPin,
  Menu,
  Phone,
  User,
  X,
} from "lucide-react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/Config";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [localUser, setLocalUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Manufacturing", path: "/manufacturing" },
    { label: "Location", path: "/location" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  // ===== USER AUTH EFFECT =====
  useEffect(() => {
    // 1. Firebase Auth Listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setFirebaseUser(currentUser);
    });

    // 2. Local Storage User Check
    const storedUser = localStorage.getItem("user");
    if (storedUser) setLocalUser(JSON.parse(storedUser));

    return () => unsubscribe();
  }, []);

  // ===== LOGIN / LOGOUT HANDLERS =====
  const handleLoginClick = () => navigate("/login");

  const handleLogout = async () => {
    // Clear local storage
    localStorage.removeItem("user");
    localStorage.removeItem("googleUser");

    // Firebase sign out
    if (firebaseUser) await signOut(auth);

    setLocalUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  // ===== USER INFO HELPERS =====
  const isLoggedIn = firebaseUser || localUser;

  const getUserName = () => {
    if (firebaseUser) return firebaseUser.displayName;
    if (localUser) return localUser.name;
    return "User";
  };

  const getUserEmail = () => {
    if (firebaseUser) return firebaseUser.email;
    if (localUser) return localUser.email;
    return "";
  };

  const getAvatarLetter = () => {
    if (firebaseUser?.displayName) return firebaseUser.displayName.charAt(0);
    if (localUser?.name) return localUser.name.charAt(0);
    return "U";
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white">
      {/* ===== TOP BAR ===== */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-1 text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919424841322"
              className="flex items-center gap-1.5 hover:text-green-600">
              <Phone className="w-3.5 h-3.5" />
              +91 94248 41322
            </a>
            <a
              href="mailto:microseedandagreetech@gmail.com"
              className="flex items-center gap-1.5 hover:text-green-600">
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

      {/* ===== MAIN NAVBAR ===== */}
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

        {/* Desktop Navigation */}
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

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden lg:block bg-green-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-green-700">
            Get Quote
          </Link>

          {/* User Profile / Login Button */}
          <div className="relative">
            {isLoggedIn ? (
              <div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-lg pl-2 pr-1 py-1 border border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                    {getAvatarLetter()}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium text-gray-700">
                    {getUserName()}
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
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-800">
                        {getUserName()}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {getUserEmail()}
                      </p>
                      {localUser?.mobile && (
                        <p className="text-xs text-gray-500 mt-1">
                          📱 {localUser.mobile}
                        </p>
                      )}
                    </div>

                    <div className="py-1">
                      <Link
                        to="/profile"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                        <User className="w-4 h-4 text-green-600" />
                        My Profile
                      </Link>
                    </div>

                    <div className="border-t border-gray-100 pt-1">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left">
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleLoginClick}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
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

      {/* ===== MOBILE MENU ===== */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-md ${
                  isActive(link.path)
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}>
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold text-center">
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
