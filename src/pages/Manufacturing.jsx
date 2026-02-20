const Manufacturing = () => {
  const capabilities = [
    {
      title: "State-of-the-Art Facility",
      desc: "Modern manufacturing units equipped with latest technology for seed processing and packaging.",
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous testing protocols ensuring 99%+ purity and germination rates for all our seeds.",
    },
    {
      title: "Bulk Supply",
      desc: "Large-scale production capacity to meet wholesale demands across multiple states.",
    },
    {
      title: "Expert Team",
      desc: "Experienced agronomists and quality control specialists overseeing every process.",
    },
  ];

  const productionSteps = [
    {
      num: "01",
      title: "Seed Selection",
      desc: "Careful selection of parent seeds based on genetic traits and performance history.",
    },
    {
      num: "02",
      title: "Production",
      desc: "Controlled cultivation in our certified farms with optimal growing conditions.",
    },
    {
      num: "03",
      title: "Processing",
      desc: "Advanced cleaning, grading, and treatment using modern seed processing equipment.",
    },
    {
      num: "04",
      title: "Quality Control",
      desc: "Comprehensive testing for purity, germination, moisture content, and genetic uniformity.",
    },
    {
      num: "05",
      title: "Packaging",
      desc: "Professional packaging in moisture-proof materials with proper labeling and documentation.",
    },
    {
      num: "06",
      title: "Distribution",
      desc: "Efficient logistics network ensuring timely delivery with proper storage conditions.",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "Seed Certification Standards",
    "Organic Certification (NPOP)",
    "FSMS 22000 Food Safety",
    "Central Seed Committee Approved",
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Seed Manufacturing & Wholesale
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Advanced seed production facilities combining traditional expertise
            with modern technology to deliver premium quality seeds at scale for
            wholesale partners nationwide.
          </p>
        </div>
      </section>

      {/* Facility Image -直接从public文件夹加载 */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <img
            src="/manufacturing-facility.jpg"
            alt="Modern seed manufacturing facility"
            className="w-full h-72 lg:h-96 object-cover rounded-2xl shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/1200x400?text=Manufacturing+Facility";
            }}
          />
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Manufacturing Capabilities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our world-class facilities are designed to meet the highest
              standards of seed production and quality control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center">
                  <div className="w-7 h-7 bg-green-600 rounded-full"></div>
                </div>
                <h3 className="font-bold text-lg text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Our Production Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A meticulous 6-step process ensuring every seed meets our
              stringent quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionSteps.map((step, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-green-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capacity & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {/* Capacity Card */}
          <div className="rounded-xl p-8 bg-green-50">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-green-800">
                Production Capacity
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-600 text-sm">Tons/Month</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">200+</div>
                <div className="text-gray-600 text-sm">Varieties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600 text-sm">Operations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">99%</div>
                <div className="text-gray-600 text-sm">Purity Rate</div>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="rounded-xl p-8 bg-blue-50">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-green-800">
                Certifications & Standards
              </h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-600 rounded-full shrink-0"></div>
                  <span className="text-gray-600 text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="py-14 bg-green-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Wholesale Partnership?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Contact us to discuss bulk pricing, minimum order quantities, and
            distribution partnership opportunities.
          </p>
          <a
            href="tel:+919424841322"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors">
            Call Us: +91 94248 41322
          </a>
        </div>
      </section>
    </main>
  );
};

export default Manufacturing;
