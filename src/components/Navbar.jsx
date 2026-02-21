import { LogIn, LogOut, Mail, MapPin, Menu, Phone, X } from "lucide-react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/Config";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ Firebase user
  const [firebaseUser, setFirebaseUser] = useState(null);

  // ✅ Local user (lazy initializer → no warning)
  const [localUser, setLocalUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

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

  // ================= FIREBASE LISTENER =================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
    });

    return () => unsubscribe();
  }, []);

  // ================= HANDLERS =================
  const handleLoginClick = () => {
    navigate("/login");
    setMobileOpen(false);
  };

  const handleLogout = async () => {
    localStorage.removeItem("user");

    if (firebaseUser) {
      await signOut(auth);
    }

    setLocalUser(null);
    navigate("/");
  };

  const isLoggedIn = firebaseUser || localUser;

  const getUserName = () => {
    if (firebaseUser?.displayName) return firebaseUser.displayName;
    if (localUser?.name) return localUser.name;
    return "User";
  };

  const getAvatarLetter = () => {
    if (firebaseUser?.displayName)
      return firebaseUser.displayName.charAt(0).toUpperCase();
    if (localUser?.name) return localUser.name.charAt(0).toUpperCase();
    return "U";
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* ================= TOP BAR ================= */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-2">
          {/* Desktop */}
          <div className="hidden sm:flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-6">
              <a
                href="tel:+919424841322"
                className="flex items-center gap-1.5 hover:text-green-600">
                <Phone className="w-4 h-4" />
                +91 94248 41322
              </a>

              <a
                href="mailto:microseedandagreetech@gmail.com"
                className="flex items-center gap-1.5 hover:text-green-600">
                <Mail className="w-4 h-4" />
                microseedandagreetech@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-green-600" />
              Shikarpur, Chhindwara (M.P.)
            </div>
          </div>

          {/* Mobile */}
          <div className="flex flex-col sm:hidden text-xs text-gray-600 space-y-1">
            <a
              href="tel:+919424841322"
              className="flex items-center gap-1 hover:text-green-600">
              <Phone className="w-3 h-3" />
              +91 94248 41322
            </a>

            <a
              href="mailto:microseedandagreetech@gmail.com"
              className="flex items-center gap-1 hover:text-green-600 break-all">
              <Mail className="w-3 h-3" />
              microseedandagreetech@gmail.com
            </a>

            <div className="flex items-center gap-1 text-green-600">
              <MapPin className="w-3 h-3" />
              Shikarpur, Chhindwara (M.P.)
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
            MS
          </div>
          <div>
            <div className="font-bold text-gray-800">Micro Seeds</div>
            <div className="text-xs text-green-600">& Agritech Solutions</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium ${
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

          {isLoggedIn ? (
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {getAvatarLetter()}
              </div>
              <span className="hidden sm:inline text-sm font-medium">
                {getUserName()}
              </span>
              <button onClick={handleLogout}>
                <LogOut className="w-4 h-4 text-red-600" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleLoginClick}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              <LogIn className="w-4 h-4" />
              Login
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-md">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-gray-700 hover:text-green-600">
                {link.label}
              </Link>
            ))}

            {!isLoggedIn && (
              <button
                onClick={handleLoginClick}
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold text-center">
                Login
              </button>
            )}

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
