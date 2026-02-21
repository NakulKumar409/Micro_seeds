import { signInWithPopup } from "firebase/auth";
import { Leaf, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/Config";

const Login = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");
  const [error, setError] = useState("");

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ---------------- SIGNUP ----------------
  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      return setError("Passwords do not match!");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      return setError("Email already registered!");
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // 🔥 Switch to Login tab
    setActiveTab("login");

    // Autofill login form
    setLoginEmail(email);
    setLoginPassword(password);

    // Clear signup fields
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setError("Signup successful! Please login.");
  };

  // ---------------- LOGIN ----------------
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );

    if (!user) {
      return setError("Invalid email or password");
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
      })
    );

    navigate("/");
  };

  // ---------------- GOOGLE LOGIN ----------------
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-700 to-green-500 text-white items-center justify-center">
        <div className="text-center px-8">
          <Leaf className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Micro Seeds & Agritech</h1>
          <p className="text-lg opacity-90">
            Smart Farming Solutions for Modern Agriculture
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl">
          {/* Tabs */}
          <div className="flex mb-6 border-b">
            <button
              onClick={() => {
                setActiveTab("login");
                setError("");
              }}
              className={`flex-1 py-2 font-semibold ${
                activeTab === "login"
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-500"
              }`}>
              Login
            </button>

            <button
              onClick={() => {
                setActiveTab("signup");
                setError("");
              }}
              className={`flex-1 py-2 font-semibold ${
                activeTab === "signup"
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-500"
              }`}>
              Sign Up
            </button>
          </div>

          {/* Error / Success Message */}
          {error && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* LOGIN FORM */}
          {activeTab === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="w-full pl-10 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className="w-full pl-10 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold">
                Login
              </button>
            </form>
          )}

          {/* SIGNUP FORM */}
          {activeTab === "signup" && (
            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold">
                Create Account
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="my-6 text-center text-gray-400 text-sm">OR</div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full border py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50">
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
