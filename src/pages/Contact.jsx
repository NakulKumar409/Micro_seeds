import {
  AlertCircle,
  CheckCircle,
  FileText,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Smartphone,
  Tag,
  User,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  // Contact Cards Data
  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Speak directly with our agricultural experts",
      detail1: "+91 94248 41322",
      detail2: "+91 88391 33418",
      href1: "tel:+919424841322",
      href2: "tel:+918839133418",
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Send us your detailed requirements",
      detail1: "microseedandagreetech@gmail.com",
      detail2: null,
      href1: "mailto:microseedandagreetech@gmail.com",
      href2: null,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Quick responses and instant support",
      detail1: "+91 88391 33418",
      detail2: null,
      href1: "https://wa.me/918839133418",
      href2: null,
    },
  ];

  // FAQ Data - Exact same style as image
  const faqs = [
    {
      question: "What is your minimum order quantity?",
      answer:
        "For retail customers, there's no minimum order. For wholesale partners, minimum orders vary by product. Contact us for specific requirements.",
    },
    {
      question: "Do you provide technical support?",
      answer:
        "Yes! Our agronomists provide free technical support including crop planning, disease management, and harvesting guidance throughout the growing season.",
    },
    {
      question: "What are your delivery options?",
      answer:
        "We offer nationwide delivery with same-day dispatch for orders placed before 2 PM. Delivery typically takes 3-5 business days depending on location.",
    },
    {
      question: "Do you offer bulk pricing?",
      answer:
        "Yes, we offer attractive bulk pricing for large orders and wholesale partnerships. Contact our sales team for customized pricing based on your requirements.",
    },
  ];

  // Query Types
  const queryTypes = [
    "General Inquiry",
    "Product Inquiry",
    "Wholesale / Bulk Order",
    "Manufacturing Partnership",
    "Technical Support",
    "Other",
  ];

  // Form State
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    queryType: "General Inquiry",
    subject: "",
    message: "",
  });

  // Errors State
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle Blur (touched)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Validate Form
  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (form.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(form.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Query Type validation
    if (!form.queryType) {
      newErrors.queryType = "Please select a query type";
    }

    // Subject validation
    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (form.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(form).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate form
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - submit
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setForm({
          fullName: "",
          phone: "",
          email: "",
          queryType: "General Inquiry",
          subject: "",
          message: "",
        });
        setTouched({});
      }, 3000);

      // Here you would typically send the data to your backend
      console.log("Form submitted:", form);
    } else {
      // Form has errors
      setErrors(newErrors);

      // Scroll to top of form
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* Header Section with Gradient */}
      <section className="bg-gradient-to-r from-white-700 to-white-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contact Us
          </h1>
          <p className="text-black-100 text-lg md:text-xl leading-relaxed">
            Get in touch with our agricultural experts. We're here to help you
            choose the right products and solutions for your farming needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 gap-8">
          {/* Left Column - Contact Cards */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-green-800 mb-5 flex items-center gap-2">
              <Phone className="w-6 h-6 text-green-600" />
              Get in Touch
            </h2>

            <div className="space-y-4">
              {/* Contact Cards */}
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all hover:border-green-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <card.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-green-800">{card.title}</p>
                      <p className="text-gray-600 text-xs mb-2">
                        {card.subtitle}
                      </p>
                      <a
                        href={card.href1}
                        className="text-sm text-gray-700 font-medium hover:text-green-600 transition-colors block">
                        {card.detail1}
                      </a>
                      {card.detail2 && card.href2 && (
                        <a
                          href={card.href2}
                          className="text-sm text-gray-700 font-medium hover:text-green-600 transition-colors block">
                          {card.detail2}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Visit Our Store Card */}
              <div className="bg-green-50 rounded-xl border border-green-200 p-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-green-800">Visit Our Store</p>
                    <p className="text-gray-600 text-xs mb-2">
                      Come visit us in person
                    </p>
                    <p className="text-sm text-gray-700 font-medium">
                      Shikarpur, Hanuman Mandir Ke Piche
                    </p>
                    <p className="text-sm text-gray-600">
                      Chhindwara (M.P.) – 480001
                    </p>
                    <a
                      href="https://maps.google.com/?q=Shikarpur,Chhindwara,Madhya+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-green-600 mt-2 hover:text-green-700">
                      <MapPin className="w-3 h-3" /> Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">24h</div>
                    <div className="text-xs text-gray-600">Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">10+</div>
                    <div className="text-xs text-gray-600">Experts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">50K+</div>
                    <div className="text-xs text-gray-600">Farmers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-green-800 mb-1 flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-600" />
                Send Us Your Query
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Fill out the detailed form below and we'll get back to you
                within 24 hours with expert advice.
              </p>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <p className="text-green-700 text-sm font-medium">
                    ✓ Your query has been submitted! We'll contact you within 24
                    hours.
                  </p>
                </div>
              )}

              {/* Error Summary */}
              {Object.keys(errors).length > 0 && !submitted && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-700 text-sm font-medium">
                      Please fix the following errors:
                    </p>
                    <ul className="text-xs text-red-600 mt-1 list-disc list-inside">
                      {Object.values(errors).map((error, idx) => (
                        <li key={idx}>{error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 - Name and Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-green-800 mb-1.5">
                      <User className="w-4 h-4 inline mr-1 text-green-600" />
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your full name"
                      className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                        touched.fullName && errors.fullName
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200"
                      }`}
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold text-green-800 mb-1.5">
                      <Smartphone className="w-4 h-4 inline mr-1 text-green-600" />
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter 10-digit mobile number"
                      className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                        touched.phone && errors.phone
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200"
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-green-800 mb-1.5">
                    <Mail className="w-4 h-4 inline mr-1 text-green-600" />
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your email address"
                    className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                      touched.email && errors.email
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Query Type */}
                <div>
                  <label className="block text-sm font-semibold text-green-800 mb-1.5">
                    <Tag className="w-4 h-4 inline mr-1 text-green-600" />
                    Query Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="queryType"
                    value={form.queryType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors bg-white ${
                      touched.queryType && errors.queryType
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}>
                    {queryTypes.map((qt) => (
                      <option key={qt} value={qt}>
                        {qt}
                      </option>
                    ))}
                  </select>
                  {touched.queryType && errors.queryType && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.queryType}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-green-800 mb-1.5">
                    <FileText className="w-4 h-4 inline mr-1 text-green-600" />
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Brief subject of your query"
                    className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                      touched.subject && errors.subject
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                  {touched.subject && errors.subject && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-green-800 mb-1.5">
                    <FileText className="w-4 h-4 inline mr-1 text-green-600" />
                    Detailed Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    placeholder="Please provide details about your requirements, crop type, farm size, location, or any specific questions you have..."
                    className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none ${
                      touched.message && errors.message
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200"
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-1 text-right">
                    {form.message.length}/1000 characters
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 group">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Submit Query
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  Fields marked with <span className="text-red-500">*</span> are
                  required
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Exact Style as Image */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center text-lg mb-12">
            Quick answers to common questions about our products and services.
          </p>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0 pb-8 last:pb-0">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-12 text-center p-6 bg-green-50 rounded-lg">
            <HelpCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-green-800 mb-2">
              Still have questions?
            </h4>
            <p className="text-gray-600 mb-4">
              Can't find the answer you're looking for? Please chat with our
              friendly team.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              <MessageCircle className="w-4 h-4" /> Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-600" />
            Find Us on Map
          </h3>
          <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-200">
            <iframe
              title="Micro Seeds Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.9332%2C22.0524%2C78.9432%2C22.0624&layer=mapnik&marker=22.0574%2C78.9382"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
