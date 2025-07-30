import React, { useState, useEffect, useRef } from "react";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "./ui/button";
import { FiSearch, FiX } from "react-icons/fi";
import { FaFacebook, FaInstagram,FaTwitter, FaBasketballBall,} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,} from "@/components/ui/navigation-menu";
import Mobiledrawer from "./Mobiledrawer";

const Header = () => {
  const [formData, setFormData] = useState({
    title: "Mr",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    captcha: "",
    agreeTerms: false,
    newsletter: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());
  const [showModaleye, setShowModaleye] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSubmitForgot = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
    setShowForgotModal(false);
  };

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
  }

  const [formDatalogin, setFormDatalogin] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChangelogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormDatalogin({
      ...formDatalogin,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmitlogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Login Successful!");
    console.log(formDatalogin);
    setShowModaleye(false); // Close modal after login
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      e.target instanceof HTMLInputElement ? e.target.checked : false;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.captcha !== generatedCaptcha) {
      alert("Captcha does not match!");
      return;
    }
    if (!formData.agreeTerms) {
      alert("You must agree to the terms.");
      return;
    }
    alert("Account created successfully!");
    console.log(formData);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Element;
      if (searchRef.current && !searchRef.current.contains(target)) {
        setShowSearch(false);
      }
    }
    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  return (
    <>
      {showSearch && (
        <div className="fixed top-0 left-0 w-full bg-white md:p-8 shadow-lg z-50">
          {/* Desktop/Laptop Layout - Single Line */}
          <div className="hidden md:flex items-center justify-between px-6 py-4">
            <div
              ref={searchRef}
              className="flex items-center justify-between w-full"
            >
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>

              {/* Search Bar */}
              <div className="flex items-center w-1/2 border border-gray-300 rounded">
                <input
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-4 py-2 outline-none"
                />
                <button className="px-4 text-gray-600 hover:text-black cursor-pointer">
                  <FiSearch size={20} />
                </button>
              </div>

              {/* Cancel Button */}
              <button
                onClick={() => setShowSearch(false)}
                className="text-2xl text-gray-700 hover:text-black ml-4"
              >
                <FiX />
              </button>
            </div>
          </div>

          {/* Mobile Layout - Two Lines */}
          <div className="md:hidden p-4">
            <div ref={searchRef}>
              {/* First Line - Logo and Cancel Button */}
              <div className="flex items-center justify-between mb-4 h-10">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.jpg"
                    alt="Logo"
                    width={120}
                    height={40}
                    priority
                  />
                </Link>
                <button
                  onClick={() => setShowSearch(false)}
                  className="text-2xl text-gray-700 hover:text-black"
                >
                  <FiX />
                </button>
              </div>

              {/* Second Line - Search Bar */}
              <div className="flex items-center w-full border border-gray-300 rounded-lg">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-4 py-3 outline-none rounded-l-lg"
                />
                <button className="px-4 py-3 text-gray-600 hover:text-black bg-gray-50 rounded-r-lg cursor-pointer">
                  <FiSearch size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showForgotModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setShowForgotModal(false)} // Close when clicking outside
        >
          <div
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setShowForgotModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition"
            >
              ✕
            </button>

            {/* Heading */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Forgot Password?
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Enter your email address to receive a password reset link.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitForgot} className="space-y-5">
              <div>
                <label className="block mb-1 text-gray-600 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-black/80 transition-colors"
              >
                Send Reset Link
              </button>
            </form>

            {/* Back to Login */}
            <p className="text-center text-gray-600 text-sm mt-5">
              Remembered your password?{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  setShowForgotModal(false);
                  setShowModaleye(true); // Open login modal
                }}
              >
                Login here
              </a>
            </p>
          </div>
        </div>
      )}

      {showModaleye && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setShowModaleye(false)} // Close on outside click
        >
          <div
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModaleye(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl transition"
            >
              ✕
            </button>

            {/* Heading */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Login to your account
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitlogin} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block mb-1 text-gray-600 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formDatalogin.email}
                  onChange={handleChangelogin}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Password with toggle */}
              <div>
                <label className="block mb-1 text-gray-600 font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formDatalogin.password}
                    onChange={handleChangelogin}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formDatalogin.remember}
                    onChange={handleChangelogin}
                    className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  Remember Me
                </label>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModaleye(false);
                    setShowForgotModal(true);
                  }}
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-black/80 transition-colors"
              >
                Login
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-gray-600 text-sm mt-5">
              No account?{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
                onClick={() => {
                  setShowModaleye(false);
                  setShowModal(true);
                }}
              >
                Create one here
              </a>
            </p>
          </div>
        </div>
      )}

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setShowModal(false)} // ✅ Close modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()} // ✅ Prevent close when clicking inside modal
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">
              Create an Account
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="block mb-1 font-medium">Title</label>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 w-full"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 w-full"
                  required
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
                required
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
                required
              />

              {/* Captcha */}
              <div className="flex items-center gap-3">
                <span className="bg-gray-200 px-4 py-2 font-bold rounded">
                  {generatedCaptcha}
                </span>
                <button
                  type="button"
                  className="text-blue-500 underline text-sm cursor-pointer"
                  onClick={() => setGeneratedCaptcha(generateCaptcha())}
                >
                  Refresh
                </button>
              </div>
              <input
                type="text"
                name="captcha"
                placeholder="Enter Captcha"
                value={formData.captcha}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
                required
              />

              {/* Terms */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>
                  I agree to the{" "}
                  <a href="#" className="text-blue-500 underline">
                    terms
                  </a>
                  . *
                </label>
              </div>

              {/* Newsletter */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Sign up for our newsletter</label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-black/80 transition-colors"
              >
                Create an Account
              </button>
            </form>

            {/* Footer Links */}
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-500 underline"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(false); // Close register modal
                  setShowModaleye(true); // Open login modal
                }}
              >
                Log in instead
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:flex items-center justify-between bg-[#f5f5f5] h-8 p-6 gap-4 ">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MdOutlineWifiCalling3 className="text-lg mt-1" />
            <span>+391(0)3525684593</span>
          </div>

          <span className="text-gray-400 flex items-center">|</span>

          <div className="flex items-center gap-2">
            <CiMail className="text-lg mt-1" />
            <span>demo@demo.com</span>
          </div>
        </div>

        <div className="flex items-center text-sm gap-2">
          <span className=" flex text-gray-600">
            Free shipping on all orders over $79
          </span>
          <Button
            size="sm"
            className="bg-[#ba933e] hover:bg-[#a47f32] text-white h-7 cursor-pointer"
          >
            Shop Now!
          </Button>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center text-sm gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 cursor-pointer">
                English
                <IoIosArrowDown className="mt-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  Spanish
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Arabic
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Portuguese
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Russian
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 cursor-pointer">
                USD $<IoIosArrowDown className="mt-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  GBP £
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  JPY ¥
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#ba933e] transition-colors duration-300 cursor-pointer"
            >
              <FaFacebook size="18px" />
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-[#ba933e] transition-colors duration-300 cursor-pointer"
            >
              <FaInstagram size="18px" />
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-[#ba933e] transition-colors duration-300 cursor-pointer"
            >
              <FaTwitter size="18px" />
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-[#ba933e] transition-colors duration-300 cursor-pointer"
            >
              <FaBasketballBall size="18px" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Top Bar - Show only shipping message */}
      <div className="md:hidden gap-2 flex items-center justify-center bg-[#f5f5f5] h-10 px-4">
        <span className="text-sm text-gray-600 text-center">
          Free shipping on all orders over $79
        </span>
        <Button
          size="sm"
          className="bg-[#ba933e] hover:bg-[#a47f32] text-white h-7 cursor-pointer"
        >
          Shop Now!
        </Button>
      </div>

      <div className=" flex items-center justify-between gap-4  p-6  ">
        {/* Mobile Menu Button - First on Mobile */}
        <div className="md:hidden">
          <Mobiledrawer
            onSignIn={() => setShowModaleye(true)}
            onRegister={() => setShowModal(true)}
          />
        </div>

        {/* Search Button - Second on Mobile */}
        <div className="md:hidden">
          <IoMdSearch
            className="size-6 cursor-pointer"
            onClick={() => setShowSearch(true)}
          />
        </div>

        {/* Logo - Centered on Mobile */}
        <Link
          href="/"
          className="flex  items-center justify-center flex-1 md:flex-none"
        >
          <Image src="/logo.jpg" alt="Logo" width={120} height={40} priority />
        </Link>

        {/* Desktop Navigation - Hidden on Mobile */}
        <div className="hidden md:flex items-center md:gap-1">
          {/* Home Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="
            bg-transparent text-1xl font-medium hover:text-[#ba933e]
            hover:!bg-transparent focus:!bg-transparent focus:outline-none
            data-[state=open]:!bg-transparent data-[state=open]:text-[#ba933e]
            transition-colors cursor-pointer
          "
                >
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px]">
                    {["Home 1", "Home 2", "Home 3"].map((item, idx) => (
                      <NavigationMenuLink asChild key={idx}>
                        <Link
                          href="#"
                          className="
                    text-gray-700 hover:!text-[#ba933e] focus:!text-[#ba933e]
                    !bg-transparent transition-colors
                  "
                        >
                          {item}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Shop Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="
            bg-transparent text-1xl font-medium hover:text-[#ba933e]
            hover:!bg-transparent focus:!bg-transparent focus:outline-none
            data-[state=open]:!bg-transparent data-[state=open]:text-[#ba933e]
            transition-colors cursor-pointer
          "
                >
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px]">
                    {["All Products", "Categories", "Best Sellers"].map(
                      (item, idx) => (
                        <NavigationMenuLink asChild key={idx}>
                          <Link
                            href="#"
                            className="
                    text-gray-700 hover:!text-[#ba933e] focus:!text-[#ba933e]
                    !bg-transparent transition-colors
                  "
                          >
                            {item}
                          </Link>
                        </NavigationMenuLink>
                      )
                    )}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Pages Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="
            bg-transparent text-1xl font-medium hover:text-[#ba933e]
            hover:!bg-transparent focus:!bg-transparent focus:outline-none
            data-[state=open]:!bg-transparent data-[state=open]:text-[#ba933e]
            transition-colors cursor-pointer
          "
                >
                  Pages
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px]">
                    {["About Us", "Contact Us", "FAQ"].map((item, idx) => (
                      <NavigationMenuLink asChild key={idx}>
                        <Link
                          href="#"
                          className="
                    text-gray-700 hover:!text-[#ba933e] focus:!text-[#ba933e]
                    !bg-transparent transition-colors
                  "
                        >
                          {item}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Collection Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="
            bg-transparent text-1xl font-medium hover:text-[#ba933e]
            hover:!bg-transparent focus:!bg-transparent focus:outline-none
            data-[state=open]:!bg-transparent data-[state=open]:text-[#ba933e]
            transition-colors cursor-pointer
          "
                >
                  Collection
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px]">
                    {["New Arrivals", "Featured", "Sale"].map((item, idx) => (
                      <NavigationMenuLink asChild key={idx}>
                        <Link
                          href="#"
                          className="
                    text-gray-700 hover:!text-[#ba933e] focus:!text-[#ba933e]
                    !bg-transparent transition-colors
                  "
                        >
                          {item}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Blog Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="
            bg-transparent text-1xl font-medium hover:text-[#ba933e]
            hover:!bg-transparent focus:!bg-transparent focus:outline-none
            data-[state=open]:!bg-transparent data-[state=open]:text-[#ba933e]
            transition-colors cursor-pointer
          "
                >
                  Blog
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px]">
                    {["Latest Posts", "Categories", "Tags"].map((item, idx) => (
                      <NavigationMenuLink asChild key={idx}>
                        <Link
                          href="#"
                          className="
                    text-gray-700 hover:!text-[#ba933e] focus:!text-[#ba933e]
                    !bg-transparent transition-colors
                  "
                        >
                          {item}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Actions - Hidden on Mobile */}
        <div className="hidden md:flex items-center w-82 justify-between font-medium ">
          <div className="flex items-center gap-2 ">
            <button
              onClick={() => setShowModaleye(true)}
              className="flex items-center gap-1 cursor-pointer"
            >
              {" "}
              <CiUser className="size-6" />
              SignIn{" "}
            </button>
            <span className=" flex items-center">/</span>
            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer"
            >
              Register
            </button>
          </div>

          <span className=" flex items-center">|</span>
          <div className="flex items-center gap-6">
            {/* Heart with Counter */}
            <div className="relative cursor-pointer">
              <FaRegHeart className="size-5" />
              <span
                className=" absolute -top-3 -right-3 text-xs
         font-medium
         rounded-full
         w-4 h-4
         flex items-center justify-center
       "
              >
                0
              </span>
            </div>

            <div className="relative cursor-pointer">
              <AiOutlineShopping className="size-6" />
              <span
                className="
         absolute -top-2 -right-2
         text-xs
         font-medium
         rounded-full
                 w-4 h-4
         flex items-center justify-center
       "
              >
                0
              </span>
            </div>

            <IoMdSearch
              className="size-6 cursor-pointer"
              onClick={() => setShowSearch(true)}
            />
          </div>
        </div>

        {/* Mobile Actions - Visible only on Mobile */}
        <div className="md:hidden flex items-center gap-4 ">
          <div className="relative cursor-pointer">
            <AiOutlineShopping className="size-6 cursor-pointer" />
            <span className="absolute -top-2 -right-2  text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
          <CiUser
            className="size-6 cursor-pointer"
            onClick={() => setShowModaleye(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
