import { Link } from "react-router-dom";
import {
  Sprout,
  Shield,
  Users,
  Truck,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Leaf,
  Award,
  TrendingUp,
  Package,
  Heart,
  Zap,
  Mail,
  Phone,
} from "lucide-react";

const Index = () => {
  // Stats data with icons
  const stats = [
    { value: "50,000+", label: "Happy Farmers", icon: Users },
    { value: "200+", label: "Seed Varieties", icon: Sprout },
    { value: "15+", label: "States Served", icon: MapPin },
    { value: "99%", label: "Purity Rate", icon: CheckCircle },
  ];

  // Features data with icons
  const features = [
    {
      title: "Premium Quality Seeds",
      desc: "Certified high-yield seeds with superior genetic traits for maximum crop productivity.",
      icon: Leaf,
    },
    {
      title: "10+ Years Experience",
      desc: "Trusted by thousands of farmers across the country for consistent quality and reliability.",
      icon: Clock,
    },
    {
      title: "Expert Support",
      desc: "Professional agronomist guidance and customer support throughout your growing season.",
      icon: Users,
    },
    {
      title: "Nationwide Delivery",
      desc: "Fast and reliable delivery to your doorstep with proper packaging and handling.",
      icon: Truck,
    },
  ];

  // Trust badges
  const trustBadges = [
    { icon: Shield, text: "Certified Quality" },
    { icon: Award, text: "ISO Certified" },
    { icon: Heart, text: "10K+ Happy Farmers" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="w-6 h-6 text-green-600" />
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                Welcome to Micro Seeds
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight mb-4">
              Growing Success
              <br />
              <span className="text-green-600">Seeds by Seeds</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
              Premium quality seeds and innovative agritech solutions for modern
              farming. Empowering farmers with superior genetics and sustainable
              agricultural practices.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1 text-sm text-gray-600">
                    <Icon className="w-4 h-4 text-green-600" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors group">
                Browse Products{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors">
                Get Quote
              </Link>
            </div>
          </div>

          {/* Right Image with Badge */}
          <div className="relative">
            <img
              src="/seeds.jpg"
              alt="Premium quality seeds"
              className="rounded-2xl w-full h-80 lg:h-96 object-cover shadow-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
              }}
            />

            {/* Quality Badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-bold text-sm text-green-800">
                  99% Purity
                </div>
                <div className="text-xs text-gray-600">Certified Quality</div>
              </div>
            </div>

            {/* Floating icon */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <Award className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Why Choose Micro Seeds?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We combine traditional farming wisdom with modern agricultural
              technology to deliver superior seeds and comprehensive farming
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all text-center group">
                  <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg text-green-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 flex items-center justify-center gap-2">
              <Package className="w-8 h-8 text-green-600" />
              Our Best Selling Seeds
            </h2>
            <p className="text-gray-600 text-lg">
              Most popular choices among successful farmers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all overflow-hidden group">
                <div className="h-48 bg-green-100 flex items-center justify-center relative">
                  <Sprout className="w-16 h-16 text-green-600 group-hover:scale-110 transition-transform" />
                  <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" /> Bestseller
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-green-800 mb-2">
                    Premium Hybrid Seeds
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    High yield variety with 99% purity
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" /> ₹450/pack
                    </span>
                    <Link
                      to="/products"
                      className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1">
                      View Details <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors group">
              View All Products{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Join thousands of successful farmers who trust Micro Seeds for their
            agricultural needs. Get started with a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-green-700 px-7 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Free Consultation
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-7 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <Package className="w-4 h-4" /> Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Note with Icons */}
      <section className="py-4 bg-gray-100 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Shikarpur, Chhindwara (M.P.)
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" /> +91 94248 41322
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" /> microseedandagreetech@gmail.com
          </span>
          <span>|</span>
          <span>© 2024 Micro Seeds and Agritech Solutions</span>
        </div>
      </section>
    </main>
  );
};

export default Index;
