import { signInWithPopup } from "firebase/auth";
import {
  Calendar,
  Flower2,
  Leaf,
  Lock,
  Mail,
  Phone,
  Sprout,
  TreePine,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/Config";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Login form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup form states
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Check if already logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    const googleUser = localStorage.getItem("googleUser");
    if (user || googleUser) {
      navigate("/");
    }
  }, [navigate]);

  // Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save Google user in localStorage
      localStorage.setItem(
        "googleUser",
        JSON.stringify({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        })
      );

      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Local Signup
  const handleLocalSignup = (e) => {
    e.preventDefault();

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      setError("Email already registered! Please login.");
      return;
    }

    // Create new user with ALL fields including password
    const newUser = {
      id: Date.now(),
      name,
      age,
      mobile,
      email,
      dob,
      password, // ✅ Password save karna mandatory hai
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage (users array)
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ Debug: Check if user saved properly
    console.log("User saved:", newUser);
    console.log("All users:", JSON.parse(localStorage.getItem("users")));

    // Auto login after signup
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        mobile: newUser.mobile,
        id: newUser.id,
        // ✅ No password in session storage
      })
    );

    // Redirect to home
    navigate("/");
  };

  // Local Login - FIXED VERSION
  const handleLocalLogin = (e) => {
    e.preventDefault();

    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // ✅ Debug: Check what users exist
    console.log("All users for login:", users);
    console.log("Login attempt:", { loginEmail, loginPassword });

    // Find user with matching email AND password
    const user = users.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );

    if (user) {
      console.log("Login successful:", user);

      // Save logged in user session
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          id: user.id,
        })
      );
      navigate("/");
    } else {
      // Check if email exists but password wrong
      const emailExists = users.find((u) => u.email === loginEmail);
      if (emailExists) {
        setError("Wrong password! Please try again.");
      } else {
        setError("Email not found! Please sign up first.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e9f3e6] to-[#d4e3cf] flex items-center justify-center p-4 font-['Inter']">
      <div className="flex w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
        {/* LEFT SIDE - Green panel */}
        <div className="flex-1 bg-gradient-to-br from-[#2c6e3c] to-[#3f9142] flex items-center justify-center p-8 text-white min-h-[600px]">
          <div className="text-center max-w-sm">
            <div className="flex justify-center gap-4 mb-6">
              <Leaf
                className="w-16 h-16 text-white drop-shadow-lg"
                strokeWidth={1.5}
              />
              <Sprout
                className="w-16 h-16 text-white drop-shadow-lg"
                strokeWidth={1.5}
              />
              <Flower2
                className="w-16 h-16 text-white drop-shadow-lg"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Welcome Back!
            </h2>
            <p className="text-white/90 text-lg bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 inline-flex items-center gap-2">
              <TreePine className="w-5 h-5" />
              Micro Seeds & Agritech
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Form panel */}
        <div className="flex-1 bg-white p-10 overflow-y-auto max-h-[600px]">
          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="mb-6">
            <span className="bg-[#ebf9e8] text-[#1d6e2b] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#c0e0ba] inline-flex items-center gap-1">
              <Leaf className="w-3 h-3" /> Micro Seeds Family
            </span>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 bg-[#f2f8f0] p-1 rounded-full border border-[#d9ecd4] w-fit mb-8">
            <button
              onClick={() => {
                setActiveTab("login");
                setError("");
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "login"
                  ? "bg-white text-[#1b6e2b] shadow-md border border-[#b1dcac]"
                  : "text-[#3f583f] hover:bg-white/50"
              }`}>
              Login
            </button>
            <button
              onClick={() => {
                setActiveTab("signup");
                setError("");
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "signup"
                  ? "bg-white text-[#1b6e2b] shadow-md border border-[#b1dcac]"
                  : "text-[#3f583f] hover:bg-white/50"
              }`}>
              Sign Up
            </button>
          </div>

          {/* LOGIN FORM */}
          {activeTab === "login" && (
            <form onSubmit={handleLocalLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#2d4a2d] mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-10 pr-5 py-3 border border-[#d0e2cb] rounded-2xl focus:ring-2 focus:ring-[#3f9142]/30 focus:border-[#3f9142] outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#2d4a2d] mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-10 pr-5 py-3 border border-[#d0e2cb] rounded-2xl focus:ring-2 focus:ring-[#3f9142]/30 focus:border-[#3f9142] outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mb-8 text-sm">
                <label className="flex items-center gap-2 text-[#3a5a3a]">
                  <input type="checkbox" className="w-4 h-4 accent-[#2a7a38]" />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-[#2a7a38] font-medium hover:underline">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#2c6e3c] to-[#3f9142] hover:from-[#246232] hover:to-[#347d36] text-white font-semibold py-3.5 rounded-2xl shadow-md shadow-green-200 mb-4 disabled:opacity-50">
                {loading ? "Please wait..." : "Login"}
              </button>
            </form>
          )}

          {/* SIGNUP FORM */}
          {activeTab === "signup" && (
            <form onSubmit={handleLocalSignup}>
              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#2d4a2d] mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full pl-10 pr-5 py-3 border border-[#d0e2cb] rounded-2xl focus:ring-2 focus:ring-[#3f9142]/30 focus:border-[#3f9142] outline-none"
                  />
                </div>
              </div>

              {/* Age & Mobile */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#2d4a2d] mb-1.5">
                    Age *
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="25"
                    required
                    min="1"
                    max="120"
                    className="w-full px-4 py-3 border border-[#d0e2cb] rounded-2xl focus:ring-2 focus:ring-[#3f9142]/30 focus:border-[#3f9142] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2d4a2d] mb-1.5">
                    Mobile *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="9876543210"
                      required
                      pattern="[0-9]{10}"
                      className="w-full pl-9 pr-4 py-3 border border-[#d0e2cb] rounded-2xl focus:ring-2 focus:ring-[#3f9142]/30 focus:border-[#3f9142] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Email & DOB */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#2d4a2d] mb-1.5">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      required
                      className="w-full pl-9 pr-4 py-3 border border-[#d0e2cb] rounded-2xl focus:ring-2 focus:ring-[#3f9142]/30 focus:border-[#3f9142] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2d4a2d] mb-1.5">
                    Date of Birth *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      required
                      className="w-full pl-9 pr-4 py-3 border border-[#d0e2cb] rounded-2xl focus:ring-2 focus:ring-[#3f9142]/30 focus:border-[#3f9142] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#2d4a2d] mb-1.5">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength="6"
                    className="w-full pl-10 pr-5 py-3 border border-[#d0e2cb] rounded-2xl focus:ring-2 focus:ring-[#3f9142]/30 focus:border-[#3f9142] outline-none"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#2d4a2d] mb-1.5">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-10 pr-5 py-3 border border-[#d0e2cb] rounded-2xl focus:ring-2 focus:ring-[#3f9142]/30 focus:border-[#3f9142] outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#2c6e3c] to-[#3f9142] hover:from-[#246232] hover:to-[#347d36] text-white font-semibold py-3.5 rounded-2xl shadow-md shadow-green-200 mb-4 disabled:opacity-50">
                {loading ? "Please wait..." : "Create Account"}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white border-2 border-[#d9ecd4] hover:bg-[#f5fff2] text-[#1d2b1d] font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-3 transition shadow-sm disabled:opacity-50">
            <FcGoogle className="text-2xl" />
            <span>Login with Google</span>
          </button>

          <p className="text-center text-xs text-[#6f856f] mt-6">
            By continuing you agree to our{" "}
            <span className="text-[#2a7a38] cursor-pointer hover:underline">
              terms
            </span>{" "}
            and{" "}
            <span className="text-[#2a7a38] cursor-pointer hover:underline">
              privacy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
