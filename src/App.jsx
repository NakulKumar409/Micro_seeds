import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

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

        <Footer />
      </div>
    </Router>
  );
}

export default App;
