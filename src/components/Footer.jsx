import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Micro Seeds & Agritech Solutions
            </h3>
            <p className="text-green-200 text-sm">
              Leading provider of quality seeds and innovative agricultural
              technology solutions for sustainable farming.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-green-200">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="hover:text-white">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-green-200">
              <li>
                <Link to="/products" className="hover:text-white">
                  Vegetable Seeds
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Field Crop Seeds
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Organic Fertilizers
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Agricultural Equipment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-green-200">
              <li>Shikarpur, Hanuman Mandir Ke Piche,</li>
              <li>Chhindwara (M.P.) – 480001</li>
              <li>+91 94248 41322</li>
              <li>+91 88391 33418</li>
              <li>microseedandagreetech@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 pt-4 text-center text-green-200 text-sm">
          © 2024 Micro Seeds and Agritech Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
