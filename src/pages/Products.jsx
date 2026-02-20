import {
  AlertCircle,
  Award,
  CheckCircle,
  Filter,
  Heart,
  Leaf,
  Package,
  Percent,
  Search,
  Shield,
  ShoppingCart,
  SlidersHorizontal,
  Sprout,
  Star,
  Tag,
  Tractor,
  Truck,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const Products = () => {
  // Categories
  const categories = [
    { name: "All Products", icon: Package },
    { name: "Seeds", icon: Sprout },
    { name: "Fertilizers", icon: Leaf },
    { name: "Pesticides", icon: Shield },
    { name: "Equipment", icon: Tractor },
    { name: "Technology", icon: Zap },
  ];

  // Product Images
  const getImage = (name) =>
    `https://source.unsplash.com/400x300/?${encodeURIComponent(name)}`;

  // Products Data (Reduced to 20 items)
  const products = [
    // Seeds
    {
      id: 1,
      name: "Hybrid Tomato Seeds",
      category: "Seeds",
      price: 450,
      mrp: 550,
      discount: 18,
      rating: 4.5,
      reviews: 128,
      desc: "High-yield hybrid tomato seeds with 95% germination rate.",
      stock: 45,
      delivery: "Free",
      bestseller: true,
      purity: "99%",
    },
    {
      id: 2,
      name: "Wheat Field Seeds",
      category: "Seeds",
      price: 320,
      mrp: 380,
      discount: 16,
      rating: 4.3,
      reviews: 96,
      desc: "Premium wheat seeds suitable for all soil types.",
      stock: 120,
      delivery: "Free",
      bestseller: false,
      purity: "99%",
    },
    {
      id: 3,
      name: "Chili Hybrid Seeds",
      category: "Seeds",
      price: 280,
      mrp: 350,
      discount: 20,
      rating: 4.7,
      reviews: 156,
      desc: "Hot variety chili seeds with excellent disease resistance.",
      stock: 30,
      delivery: "Free",
      bestseller: true,
      purity: "98%",
    },
    {
      id: 4,
      name: "Organic Fertilizer",
      category: "Fertilizers",
      price: 560,
      mrp: 650,
      discount: 14,
      rating: 4.2,
      reviews: 67,
      desc: "Enriched with natural micronutrients for healthy growth.",
      stock: 85,
      delivery: "₹50",
      bestseller: false,
    },
    {
      id: 5,
      name: "NPK Complex",
      category: "Fertilizers",
      price: 720,
      mrp: 850,
      discount: 15,
      rating: 4.4,
      reviews: 89,
      desc: "Balanced nitrogen, phosphorus, potassium formula.",
      stock: 60,
      delivery: "Free",
      bestseller: false,
    },
    {
      id: 6,
      name: "Bio Pesticide",
      category: "Pesticides",
      price: 380,
      mrp: 450,
      discount: 16,
      rating: 4.1,
      reviews: 42,
      desc: "Eco-friendly pest control safe for all crops.",
      stock: 25,
      delivery: "₹40",
      bestseller: false,
    },
    {
      id: 7,
      name: "Drip Irrigation Kit",
      category: "Equipment",
      price: 2400,
      mrp: 3000,
      discount: 20,
      rating: 4.8,
      reviews: 210,
      desc: "Complete drip irrigation solution for 1 acre.",
      stock: 15,
      delivery: "₹100",
      bestseller: true,
    },
    {
      id: 8,
      name: "Power Tiller",
      category: "Equipment",
      price: 45000,
      mrp: 52000,
      discount: 13,
      rating: 4.6,
      reviews: 45,
      desc: "8 HP power tiller for small to medium farms.",
      stock: 8,
      delivery: "₹500",
      bestseller: false,
    },
    {
      id: 9,
      name: "Soil Moisture Sensor",
      category: "Technology",
      price: 1200,
      mrp: 1500,
      discount: 20,
      rating: 4.2,
      reviews: 34,
      desc: "Smart sensor for precision irrigation.",
      stock: 22,
      delivery: "₹60",
      bestseller: true,
    },
    {
      id: 10,
      name: "Weather Station",
      category: "Technology",
      price: 8500,
      mrp: 10000,
      discount: 15,
      rating: 4.5,
      reviews: 28,
      desc: "Complete farm weather monitoring system.",
      stock: 8,
      delivery: "₹150",
      bestseller: false,
    },
    {
      id: 11,
      name: "Cauliflower Seeds",
      category: "Seeds",
      price: 210,
      mrp: 250,
      discount: 16,
      rating: 4.3,
      reviews: 73,
      desc: "Early maturing cauliflower variety.",
      stock: 55,
      delivery: "Free",
      bestseller: false,
      purity: "98%",
    },
    {
      id: 12,
      name: "Vermicompost",
      category: "Fertilizers",
      price: 380,
      mrp: 450,
      discount: 16,
      rating: 4.6,
      reviews: 112,
      desc: "Pure earthworm compost rich in nutrients.",
      stock: 45,
      delivery: "₹80",
      bestseller: true,
    },
    {
      id: 13,
      name: "Neem Oil",
      category: "Pesticides",
      price: 320,
      mrp: 400,
      discount: 20,
      rating: 4.6,
      reviews: 89,
      desc: "Cold pressed neem oil for organic pest control.",
      stock: 60,
      delivery: "₹40",
      bestseller: true,
    },
    {
      id: 14,
      name: "Water Pump",
      category: "Equipment",
      price: 5200,
      mrp: 6500,
      discount: 20,
      rating: 4.4,
      reviews: 87,
      desc: "2 HP electric water pump for irrigation.",
      stock: 18,
      delivery: "₹150",
      bestseller: true,
    },
    {
      id: 15,
      name: "Drone Sprayer",
      category: "Technology",
      price: 85000,
      mrp: 100000,
      discount: 15,
      rating: 4.7,
      reviews: 15,
      desc: "Agricultural drone for pesticide spraying.",
      stock: 3,
      delivery: "₹1000",
      bestseller: true,
    },
    {
      id: 16,
      name: "Coriander Seeds",
      category: "Seeds",
      price: 160,
      mrp: 220,
      discount: 27,
      rating: 4.5,
      reviews: 89,
      desc: "Leafy coriander with strong aroma.",
      stock: 95,
      delivery: "Free",
      bestseller: true,
      purity: "98%",
    },
    {
      id: 17,
      name: "DAP Fertilizer",
      category: "Fertilizers",
      price: 1350,
      mrp: 1500,
      discount: 10,
      rating: 4.5,
      reviews: 156,
      desc: "Di-ammonium phosphate for root development.",
      stock: 30,
      delivery: "₹150",
      bestseller: true,
    },
    {
      id: 18,
      name: "Knapsack Sprayer",
      category: "Equipment",
      price: 1800,
      mrp: 2200,
      discount: 18,
      rating: 4.3,
      reviews: 92,
      desc: "16 liter manual sprayer for pesticides.",
      stock: 40,
      delivery: "₹60",
      bestseller: false,
    },
    {
      id: 19,
      name: "GPS Tracker",
      category: "Technology",
      price: 3200,
      mrp: 4000,
      discount: 20,
      rating: 4.3,
      reviews: 42,
      desc: "Real-time location tracking for equipment.",
      stock: 18,
      delivery: "₹50",
      bestseller: false,
    },
    {
      id: 20,
      name: "Brinjal Seeds",
      category: "Seeds",
      price: 190,
      mrp: 250,
      discount: 24,
      rating: 4.2,
      reviews: 67,
      desc: "Long purple variety with uniform fruits.",
      stock: 85,
      delivery: "Free",
      bestseller: false,
      purity: "98%",
    },
  ].map((p) => ({ ...p, image: getImage(p.name) }));

  // States
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  // Filter products
  const filtered = products
    .filter(
      (p) =>
        (activeCategory === "All Products" || p.category === activeCategory) &&
        (p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.desc.toLowerCase().includes(search.toLowerCase())) &&
        p.price >= priceRange.min &&
        p.price <= priceRange.max
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "discount") return b.discount - a.discount;
      return b.reviews - a.reviews;
    });

  // Cart functions
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const updateQuantity = (id, qty) => {
    if (qty < 1) removeFromCart(id);
    else
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
      );
  };

  // Wishlist
  const toggleWishlist = (product) => {
    wishlist.find((item) => item.id === product.id)
      ? setWishlist(wishlist.filter((item) => item.id !== product.id))
      : setWishlist([...wishlist, product]);
  };
  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  // Checkout
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const cartMrp = cart.reduce((sum, item) => sum + item.mrp * item.quantity, 0);
  const deliveryCharges = cart.reduce(
    (sum, item) =>
      item.delivery === "Free"
        ? sum
        : sum + parseInt(item.delivery.replace("₹", "")),
    0
  );
  const couponDiscount = couponApplied ? cartTotal * 0.1 : 0;
  const finalTotal = cartTotal + deliveryCharges - couponDiscount;

  const applyCoupon = () => {
    if (
      couponCode.toUpperCase() === "FARMER10" ||
      couponCode.toUpperCase() === "WELCOME10"
    ) {
      setCouponApplied(true);
      alert("Coupon applied! 10% discount added.");
    } else alert("Invalid coupon code");
  };

  const placeOrder = () => {
    setOrderDetails({
      orderNumber: "MS" + Date.now(),
      date: new Date().toLocaleDateString(),
      total: finalTotal,
      status: "Confirmed",
      estimatedDelivery: new Date(
        Date.now() + 5 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
    });
    setOrderPlaced(true);
    setCart([]);
    setShowCart(false);
    setShowCheckout(false);
    setCouponApplied(false);
    setCouponCode("");
  };

  // Star Rating
  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 ${
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-gray-600">({rating})</span>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-white-700 to-white-600 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Our Products</h1>
          <p className="text-black-100 text-lg">
            Premium agricultural products for your farming success.
          </p>
        </div>
      </section>

      {/* Cart/Wishlist Bar */}
      <section className="bg-white border-b py-3 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
          <div className="flex gap-4">
            <button
              onClick={() => setShowCart(!showCart)}
              className="flex items-center gap-2 text-green-700 font-semibold">
              <ShoppingCart className="w-4 h-4" /> Cart
              {cart.length > 0 && (
                <span className="bg-green-600 text-white px-2 rounded-full text-xs">
                  {cart.reduce((s, i) => s + i.quantity, 0)}
                </span>
              )}
            </button>
            <button className="flex items-center gap-2 text-green-700 font-semibold">
              <Heart className="w-4 h-4" /> Wishlist
              {wishlist.length > 0 && (
                <span className="bg-red-500 text-white px-2 rounded-full text-xs">
                  {wishlist.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto p-6">
            <div className="flex justify-between mb-6">
              <h2 className="text-2xl font-bold text-green-800">Your Cart</h2>
              <button onClick={() => setShowCart(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            {cart.length === 0 ? (
              <div className="text-center py-10">
                <ShoppingCart className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">Your cart is empty</p>
                <button
                  onClick={() => setShowCart(false)}
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 border-b pb-4 mb-4">
                    <img
                      src={item.image}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm">
                        ₹{item.price} x {item.quantity}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-6 h-6 bg-gray-200 rounded-full">
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-6 h-6 bg-gray-200 rounded-full">
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-xs">
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">
                        ₹{item.price * item.quantity}
                      </div>
                      <div className="text-xs line-through">
                        ₹{item.mrp * item.quantity}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Coupon */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-1">
                    <Tag className="w-4 h-4" /> Apply Coupon
                  </h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 border rounded-md px-3 py-2 text-sm"
                    />
                    <button
                      onClick={applyCoupon}
                      disabled={couponApplied}
                      className={`px-4 py-2 rounded-md text-sm ${
                        couponApplied
                          ? "bg-gray-300"
                          : "bg-green-600 text-white"
                      }`}>
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <p className="text-green-600 text-xs mt-2">
                      10% discount applied!
                    </p>
                  )}
                </div>

                {/* Price Details */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-3">Price Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>MRP</span>
                      <span>₹{cartMrp}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>- ₹{cartMrp - cartTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery</span>
                      <span>
                        {deliveryCharges > 0 ? `₹${deliveryCharges}` : "Free"}
                      </span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Coupon</span>
                        <span>- ₹{couponDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 font-bold flex justify-between">
                      <span>Total</span>
                      <span className="text-green-700">
                        ₹{finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowCheckout(true);
                    setShowCart(false);
                  }}
                  className="w-full bg-green-600 text-white py-3 rounded-md">
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold text-green-800">Checkout</h2>
              <button onClick={() => setShowCheckout(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-3">Order Summary</h3>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm mb-2">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="border-t pt-2 font-bold flex justify-between">
                <span>Total</span>
                <span className="text-green-700">₹{finalTotal.toFixed(2)}</span>
              </div>
            </div>
            <textarea
              placeholder="Delivery Address"
              className="w-full border rounded-md p-3 text-sm mb-4"
              rows="3"></textarea>
            <div className="mb-4">
              <label className="flex items-center gap-2 p-3 border rounded-md mb-2">
                <input type="radio" name="payment" defaultChecked /> Cash on
                Delivery
              </label>
            </div>
            <button
              onClick={placeOrder}
              className="w-full bg-green-600 text-white py-3 rounded-md">
              Place Order
            </button>
          </div>
        </div>
      )}

      {/* Order Confirmation */}
      {orderPlaced && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl max-w-md w-full p-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              Order Placed!
            </h2>
            <p className="text-gray-600 mb-4">Thank you for shopping with us</p>
            <div className="bg-green-50 p-4 rounded-lg mb-4 text-left">
              <p className="text-sm">
                <span className="font-medium">Order #:</span>{" "}
                {orderDetails?.orderNumber}
              </p>
              <p className="text-sm">
                <span className="font-medium">Est. Delivery:</span>{" "}
                {orderDetails?.estimatedDelivery}
              </p>
              <p className="text-sm font-bold mt-2">
                Total: ₹{orderDetails?.total.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => setOrderPlaced(false)}
              className="w-full bg-green-600 text-white py-2 rounded-md">
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* Search & Filters */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-md pl-10 pr-4 py-2.5 text-sm"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-4 py-2.5 text-sm">
              <option value="popular">Most Popular</option>
              <option value="rating">Top Rated</option>
              <option value="discount">Biggest Discount</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 border px-4 py-2.5 rounded-md text-sm hover:bg-gray-50">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
          </div>

          {showFilters && (
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-3 flex items-center gap-1">
                <Filter className="w-4 h-4" /> Price Range
              </h3>
              <div className="flex gap-4 items-center">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange({
                      ...priceRange,
                      min: Number(e.target.value),
                    })
                  }
                  className="w-24 border rounded-md px-2 py-1 text-sm"
                />
                <span>to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({
                      ...priceRange,
                      max: Number(e.target.value),
                    })
                  }
                  className="w-24 border rounded-md px-2 py-1 text-sm"
                />
                <button
                  onClick={() => setPriceRange({ min: 0, max: 200000 })}
                  className="text-sm text-green-600">
                  Reset
                </button>
              </div>
            </div>
          )}

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                    activeCategory === cat.name
                      ? "bg-green-600 text-white border-green-600"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}>
                  <Icon className="w-4 h-4" /> {cat.name}
                </button>
              );
            })}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filtered.length} products
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all relative group">
                  {product.bestseller && (
                    <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full z-10 flex items-center gap-1">
                      <Award className="w-3 h-3" /> Bestseller
                    </span>
                  )}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                      isInWishlist(product.id)
                        ? "bg-red-50 text-red-500"
                        : "bg-white text-gray-400 hover:text-red-500"
                    }`}>
                    <Heart
                      className={`w-4 h-4 ${
                        isInWishlist(product.id) ? "fill-red-500" : ""
                      }`}
                    />
                  </button>
                  <div className="w-full h-48 bg-gray-100 rounded-t-xl overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Percent className="w-3 h-3" /> {product.discount}% OFF
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="font-bold mt-2 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                      {product.desc}
                    </p>
                    <StarRating rating={product.rating} />
                    {product.purity && (
                      <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" />{" "}
                        Purity:{" "}
                        <span className="text-green-600 font-semibold">
                          {product.purity}
                        </span>
                      </p>
                    )}
                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="text-xl font-bold text-green-700">
                        ₹{product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.mrp}
                      </span>
                      <span className="text-xs text-green-600">
                        {product.discount}% off
                      </span>
                    </div>
                    <p
                      className={`text-xs mt-1 flex items-center gap-1 ${
                        product.stock < 10 ? "text-red-500" : "text-green-600"
                      }`}>
                      {product.stock < 10 ? (
                        <>
                          <AlertCircle className="w-3 h-3" /> Only{" "}
                          {product.stock} left
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-3 h-3" /> In Stock
                        </>
                      )}
                    </p>
                    <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                      <Truck className="w-3 h-3" /> Delivery: {product.delivery}
                    </p>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-green-600 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-green-700 flex items-center justify-center gap-1">
                        <ShoppingCart className="w-4 h-4" /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;
