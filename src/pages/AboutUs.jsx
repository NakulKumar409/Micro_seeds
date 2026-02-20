import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Eye,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Shield,
  Sprout,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // Core Values Data with Icons
  const coreValues = [
    {
      title: "Sustainability",
      desc: "Committed to eco-friendly practices and sustainable farming solutions that protect our environment.",
      icon: Leaf,
    },
    {
      title: "Quality Excellence",
      desc: "Maintaining the highest standards in seed production with rigorous quality control processes.",
      icon: Award,
    },
    {
      title: "Farmer First",
      desc: "Putting farmers at the center of everything we do, providing support and guidance at every step.",
      icon: Heart,
    },
    {
      title: "Innovation",
      desc: "Embracing cutting-edge agricultural technology to improve crop yields and farming efficiency.",
      icon: Zap,
    },
  ];

  // Impact Statistics
  const impactStats = [
    { value: "10+", label: "Years of Excellence", icon: Clock },
    { value: "50K+", label: "Satisfied Farmers", icon: Users },
    { value: "200+", label: "Seed Varieties", icon: Sprout },
    { value: "15+", label: "States Covered", icon: MapPin },
  ];

  return (
    <main>
      {/* About Header Section */}
      <section className="bg-gradient-to-r from-white-700 to-white-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
            About Micro Seeds
          </h1>
          <p className="text-black-100 text-lg md:text-xl leading-relaxed">
            For over 10 years, we've been at the forefront of agricultural
            innovation, providing premium seeds and agritech solutions that
            empower farmers to achieve exceptional harvests.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image - USING farmers-field.jpg FROM PUBLIC FOLDER */}
          <img
            src="/farmers-field.jpg"
            alt="Indian farmers working in green paddy fields"
            className="rounded-2xl w-full h-80 object-cover shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1597574663497-9f5e7c246b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
            }}
          />

          {/* Story Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <Sprout className="w-8 h-8 text-green-600" />
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2014 by agricultural enthusiasts, Micro Seeds began as
              a small family business with a simple mission: to provide farmers
              with the highest quality seeds for better yields. What started as
              a local seed supplier has grown into a trusted agritech company
              serving farmers across multiple states.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our journey has been marked by continuous innovation, from
              traditional seed breeding to incorporating modern agricultural
              techniques and precision farming methods. Today, we're proud to be
              trusted by thousands of farmers who rely on our products for their
              livelihood.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that agriculture is not just about growing crops – it's
              about nurturing communities, preserving traditions, and building a
              sustainable future for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="rounded-xl p-8 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-green-600" />
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading catalyst in transforming agriculture through
              innovative seed technology and sustainable farming practices,
              creating a world where every farmer prospers and food security is
              assured for all.
            </p>
          </div>

          {/* Mission Card */}
          <div className="rounded-xl p-8 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To empower farmers with superior quality seeds, cutting-edge
              agricultural technology, and comprehensive support services that
              maximize crop productivity while promoting sustainable and
              environmentally responsible farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 flex items-center justify-center gap-2">
              <Award className="w-8 h-8 text-green-600" />
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to
              excellence in agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:border-green-200 group">
                  <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg text-green-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact in Numbers Section */}
      <section className="py-14 bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 flex items-center justify-center gap-2">
            <TrendingUp className="w-8 h-8 text-green-200" />
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex justify-center mb-3">
                    <Icon className="w-8 h-8 text-green-200" />
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-green-200 font-medium">{stat.label}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 flex items-center justify-center gap-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              Why Choose Micro Seeds?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We combine traditional farming wisdom with modern technology to
              deliver the best results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-green-800 mb-2">
                Certified Quality
              </h3>
              <p className="text-gray-600 text-sm">
                All our seeds are tested for purity and germination rates.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-green-800 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600 text-sm">
                Experienced agronomists ready to assist you.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-green-800 mb-2">
                Trusted by Farmers
              </h3>
              <p className="text-gray-600 text-sm">
                Over 50,000 satisfied farmers across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center justify-center gap-2">
            <Sprout className="w-6 h-6 text-green-600" />
            Want to know more about our seeds?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
