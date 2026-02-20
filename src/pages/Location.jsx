import {
  Building2,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  Copy,
  ExternalLink,
  Factory,
  Leaf,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  Navigation,
  Pencil,
  Phone,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Location = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("map");

  // Business Hours Data
  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM", status: "open" },
    { day: "Saturday", hours: "8:00 AM - 4:00 PM", status: "open" },
    { day: "Sunday", hours: "Closed", status: "closed" },
  ];

  // Company Details
  const companyDetails = {
    address:
      "Shikarpur, Hanuman Mandir Ke Piche, Chhindwara, Madhya Pradesh - 480001",
    shortAddress:
      "Shikarpur, Hanuman Mandir Ke Piche, Chhindwara (M.P.) - 480001",
    phone1: "+91 94248 41322",
    phone2: "+91 88391 33418",
    email: "microseedandagreetech@gmail.com",
    whatsapp: "918839133418",
    latitude: 22.0574,
    longitude: 78.9382,
  };

  // Google Maps URLs
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    companyDetails.address
  )}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    companyDetails.address
  )}`;

  // Copy to clipboard function
  const copyAddress = () => {
    navigator.clipboard.writeText(companyDetails.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Check if store is open now
  const isOpenNow = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes;

    if (day === 0) return false; // Sunday closed
    if (day >= 1 && day <= 5) {
      // Monday-Friday: 8:00 AM - 6:00 PM (480 minutes - 1080 minutes)
      return currentTime >= 480 && currentTime <= 1080;
    }
    if (day === 6) {
      // Saturday: 8:00 AM - 4:00 PM (480 minutes - 960 minutes)
      return currentTime >= 480 && currentTime <= 960;
    }
    return false;
  };

  const openNow = isOpenNow();

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header Section with Gradient */}
      <section className="bg-gradient-to-r from-white-700 to-white-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Visit Our Store
          </h1>
          <p className="text-black-100 text-lg md:text-xl leading-relaxed">
            Find us at our modern agricultural facility. We're here to serve you
            with expert guidance and premium quality products.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Location Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-white px-6 py-2 rounded-full shadow-sm flex items-center gap-2 border border-gray-100">
              <MapPin className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-600">
                Serving farmers across India since 2014
              </span>
            </div>
          </div>

          {/* Map/Street View Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg p-1 shadow-sm inline-flex">
              <button
                onClick={() => setActiveTab("map")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "map"
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:text-green-600"
                }`}>
                <Map className="w-4 h-4 inline mr-1" />
                Map View
              </button>
              <button
                onClick={() => setActiveTab("street")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "street"
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:text-green-600"
                }`}>
                <Building2 className="w-4 h-4 inline mr-1" />
                Street View
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column - Map & Address */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-green-600" />
                <h2 className="text-xl font-bold text-green-800">
                  Our Location
                </h2>
                <span className="ml-auto bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  Verified
                </span>
              </div>

              {/* Live Map - Using iframe */}
              <div className="w-full h-72 rounded-xl overflow-hidden mb-4 border border-gray-200">
                {activeTab === "map" ? (
                  <iframe
                    title="Micro Seeds Location Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=78.9332%2C22.0524%2C78.9432%2C22.0624&layer=mapnik&marker=22.0574%2C78.9382"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"></iframe>
                ) : (
                  <iframe
                    title="Micro Seeds Street View"
                    src="https://www.google.com/maps/embed?pb=!4v1739522156789!6m8!1m7!1sCAoSLEFGMVFpcE5fVzZxM2R0YzNkVzZxM2R0YzNkVzZxM2R0YzNkVzZxMw!!2m2!1d22.0574!2d78.9382!3f120!4f0!5f0.7820865974627469"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"></iframe>
                )}
              </div>

              {/* Map Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 py-3 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors">
                  <Map className="w-4 h-4" />
                  Open in Maps
                </a>
              </div>

              {/* Address Details with Copy */}
              <div className="bg-green-50 rounded-lg p-4 mb-4 border border-green-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-green-800 text-sm">
                      Head Office
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      {companyDetails.shortAddress}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={copyAddress}
                        className="flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-md text-gray-600 hover:text-green-600 transition-colors border border-gray-200">
                        {copied ? (
                          <>
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span className="text-green-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-md text-gray-600 hover:text-green-600 transition-colors border border-gray-200">
                        <ExternalLink className="w-3 h-3" />
                        <span>View Larger</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Access Information */}
              <div className="flex items-start gap-3 border-t border-gray-200 pt-4">
                <Car className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-green-800 text-sm">
                    Easy Access & Parking
                  </p>
                  <p className="text-gray-600 text-sm">
                    Free parking available on-site. Wheelchair accessible
                    entrance.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <span>🚗</span> 50+ spaces
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <span>♿</span> Accessible
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <span>⚡</span> EV charging
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Business Hours & Contact */}
            <div className="space-y-4">
              {/* Business Hours Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-green-600" />
                  <h2 className="text-xl font-bold text-green-800">
                    Business Hours
                  </h2>
                </div>
                <div className="space-y-2">
                  {businessHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm font-medium text-gray-700">
                        {item.day}
                      </span>
                      <span
                        className={`text-sm ${
                          item.status === "closed"
                            ? "text-red-500 font-medium bg-red-50 px-3 py-1 rounded-full"
                            : "text-gray-600"
                        }`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className={`mt-4 rounded-lg p-3 flex items-center gap-2 ${
                    openNow ? "bg-green-50" : "bg-yellow-50"
                  }`}>
                  <span
                    className={`text-xs ${
                      openNow ? "text-green-600" : "text-yellow-600"
                    }`}>
                    ⏰
                  </span>
                  <p className="text-xs text-gray-600">
                    Currently:{" "}
                    <span
                      className={`font-semibold ${
                        openNow ? "text-green-600" : "text-yellow-600"
                      }`}>
                      {openNow ? "Open Now" : "Closed"}
                    </span>
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-green-800">Phone</p>
                  <a
                    href={`tel:${companyDetails.phone1}`}
                    className="text-sm text-gray-600 hover:text-green-600 transition-colors block">
                    {companyDetails.phone1}
                  </a>
                  <a
                    href={`tel:${companyDetails.phone2}`}
                    className="text-sm text-gray-600 hover:text-green-600 transition-colors block">
                    {companyDetails.phone2}
                  </a>
                </div>
                <a
                  href={`tel:${companyDetails.phone1}`}
                  className="bg-green-100 p-2 rounded-full hover:bg-green-200 transition-colors">
                  <Phone className="w-4 h-4 text-green-600" />
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-green-800">Email</p>
                  <a
                    href={`mailto:${companyDetails.email}`}
                    className="text-sm text-gray-600 hover:text-green-600 transition-colors break-all">
                    {companyDetails.email}
                  </a>
                </div>
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="bg-green-100 p-2 rounded-full hover:bg-green-200 transition-colors">
                  <Mail className="w-4 h-4 text-green-600" />
                </a>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-green-800">Address</p>
                  <p className="text-sm text-gray-600">
                    Shikarpur, Hanuman Mandir Ke Piche
                  </p>
                  <p className="text-sm text-gray-600">
                    Chhindwara (M.P.) – 480001
                  </p>
                </div>
                <button
                  onClick={copyAddress}
                  className="bg-green-100 p-2 rounded-full hover:bg-green-200 transition-colors"
                  title="Copy address">
                  <Copy className="w-4 h-4 text-green-600" />
                </button>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 p-5 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold text-green-800 mb-1 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  Quick Contact
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Need immediate assistance? Our team is ready to help you with
                  any questions about our products or services.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${companyDetails.phone1}`}
                    className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a
                    href={`https://wa.me/${companyDetails.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Facility Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <Factory className="w-8 h-8 text-green-600" />
                Visit Our Facility
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Take a tour of our state-of-the-art seed processing facility and
                see how we maintain the highest quality standards. Our experts
                are always available to provide personalized guidance for your
                agricultural needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Schedule a Visit
                </Link>
                <Link
                  to="/products"
                  className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center gap-2">
                  <Leaf className="w-4 h-4" /> Browse Products
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
                <div className="text-3xl font-bold text-green-700">10+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
                <div className="text-3xl font-bold text-green-700">50K+</div>
                <div className="text-sm text-gray-600">Happy Farmers</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
                <div className="text-3xl font-bold text-green-700">200+</div>
                <div className="text-sm text-gray-600">Seed Varieties</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
                <div className="text-3xl font-bold text-green-700">15+</div>
                <div className="text-sm text-gray-600">States Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-600" /> Nearby Landmarks
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <p className="font-medium text-green-800">Hanuman Mandir</p>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" /> 0.1 km • Opposite
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <p className="font-medium text-green-800">Shikarpur Bus Stand</p>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" /> 0.5 km • 5 min walk
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <p className="font-medium text-green-800">Chhindwara Railway</p>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" /> 5 km • 10 min drive
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <p className="font-medium text-green-800">Agriculture Market</p>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" /> 2 km • 5 min drive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-4 bg-gray-100 text-center text-xs text-gray-500 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-1">
          <Pencil className="w-3 h-3" />
          <span>Edit with Base</span>
        </div>
      </section>
    </main>
  );
};

export default Location;
