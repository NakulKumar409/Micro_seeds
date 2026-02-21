import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Location from "./pages/Location";
import Login from "./pages/Login";
import Manufacturing from "./pages/Manufacturing";
import Products from "./pages/Products";
import ProtectedRoute from "./ProtectedRoute";

function Layout() {
  const location = useLocation();

  // 👉 Login page par Navbar & Footer hide
  const hideLayout = location.pathname === "/login";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      {!hideLayout && <Navbar />}

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />

          <Route
            path="/manufacturing"
            element={
              <ProtectedRoute>
                <Manufacturing />
              </ProtectedRoute>
            }
          />

          <Route
            path="/location"
            element={
              <ProtectedRoute>
                <Location />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
