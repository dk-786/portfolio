export const products = [
  {
    id: 0,
    img: "/images/jag1.jpg",
    hoverImg: "/images/jag.jpg",
    discount: "-20%",
    name: "Storm Small Jug",
    oldPrice: "€21.97",
    newPrice: "€17.58",
  },
  {
    id: 1,
    img: "/images/chair.jpg",
    hoverImg: "/images/chair1.jpg",
    discount: "-30%",
    name: "Elegant Vase",
    oldPrice: "€30.00",
    newPrice: "€21.00",
  },
  {
    id: 2,
    img: "/images/table.jpg",
    hoverImg: "/images/table1.jpg",
    discount: "-10%",
    name: "Elegant Vase",
    oldPrice: "€30.00",
    newPrice: "€21.00",
  },
  {
    id: 3,
    img: "/images/basket.jpg",
    discount: "-20%",
    name: "Elegant Vase",
    oldPrice: "€30.00",
    newPrice: "€21.00",
  },
];

export const posters = [
  {
    id: 1,
    src: "/images/poster.jpg", 
    alt: "Poster 1",
  },
  {
    id: 2,
    src: "/images/poster1.jpg",
    alt: "Poster 2",
  },
  {
    id: 3,
    src: "/images/patti.webp",
    alt: "Poster 3",
  },
  {
    id: 4,
    src: "/images/chair3.jpg",
    alt: "Poster 4",
  },
  {
    id: 5,
    src: "/images/sofa.webp",
    alt: "Poster 5",
  },
  {
    id: 6,
    src: "/images/banner.jpg",
    alt: "Poster 6",
  }
];

// Language dropdown options
export const languageOptions = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
];

// Currency dropdown options
export const currencyOptions = [
  { code: "USD", symbol: "$", name: "USD $" },
  { code: "GBP", symbol: "£", name: "GBP £" },
  { code: "JPY", symbol: "¥", name: "JPY ¥" },
  { code: "EUR", symbol: "€", name: "EUR €" },
];

// Social media links
export const socialMediaLinks = [
  { name: "Facebook", icon: "FaFacebook", href: "/", color: "hover:text-blue-600" },
  { name: "Instagram", icon: "FaInstagram", href: "/", color: "hover:text-pink-600" },
  { name: "Twitter", icon: "FaTwitter", href: "/", color: "hover:text-blue-400" },
  { name: "Dribbble", icon: "FaBasketballBall", href: "/", color: "hover:text-pink-500" },
];

// Navigation items
export const navigationItems = [
  {
    title: "Home",
    href: "/",
    hasDropdown: true,
    dropdownItems: [
      { 
        title: "Home 1", 
        href: "/home-1"
      },
      { 
        title: "Home 2", 
        href: "/home-2"
      },
      { 
        title: "Home 3", 
        href: "/home-3"
      },
    ],
  },
  {
    title: "Shop",
    href: "/shop",
    hasDropdown: true,
    dropdownItems: [
      { 
        title: "Shop Grid", 
        href: "/shop-grid"
      },
      { 
        title: "Shop List", 
        href: "/shop-list"
      },
      { 
        title: "Product Details", 
        href: "/product-details"
      },
      { 
        title: "Shopping Cart", 
        href: "/cart",
      
      },
      { 
        title: "Checkout", 
        href: "/checkout"
      },
    ],
  },
  {
    title: "Pages",
    href: "/pages",
    hasDropdown: true,
    dropdownItems: [
      { 
        title: "About Us", 
        href: "/about"
      },
      { 
        title: "Our Team", 
        href: "/team"
      },
      { 
        title: "Services", 
        href: "/services"
      },
      { 
        title: "FAQ", 
        href: "/faq"
      },
      { 
        title: "404 Page", 
        href: "/404"
      },
    ],
  },
  {
    title: "Collections",
    href: "/collections",
    hasDropdown: true,
    dropdownItems: [
      { 
        title: "Furniture", 
        href: "/collections/furniture",
        badge: "Hot"
      },
      { 
        title: "Lighting", 
        href: "/collections/lighting"
      },
      { 
        title: "Decor", 
        href: "/collections/decor"
      },
      { 
        title: "Kitchen", 
        href: "/collections/kitchen"
      },
      { 
        title: "Bathroom", 
        href: "/collections/bathroom"
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
    hasDropdown: true,
    dropdownItems: [
      { 
        title: "Blog Grid", 
        href: "/blog-grid"
      },
      { 
        title: "Blog List", 
        href: "/blog-list"
      },
      { 
        title: "Blog Single", 
        href: "/blog-single"
      },
      { 
        title: "Blog Sidebar", 
        href: "/blog-sidebar"
      },
    ],
  }
];

export const productss = [
  {
    id: 1,
    img: "/images/jag1.jpg",
    hoverImg: "/images/jag.jpg",
    discount: "-20%",
    name: "Storm Small Jug",
    oldPrice: "€21.97",
    newPrice: "€17.58",
  },
  {
    id: 2,
    img: "/images/table.jpg",
    hoverImg: "/images/table1.jpg",
    discount: "-10%",
    name: "Elegant Vase",
    oldPrice: "€30.00",
    newPrice: "€21.00",
  },
  {
    id: 3,
    img: "/images/lamp.jpg",
    hoverImg: "/images/lamp1.jpg",
    discount: "-20%",
    name: "Elegant Vase",
    oldPrice: "€30.00",
    newPrice: "€21.00",
  },
  {
    id: 4,
    img: "/images/chairbig.jpg",
    discount: "-10%",
    name: "Elegant Vase",
    oldPrice: "€30.00",
    newPrice: "€21.00",
  },
  {
    id: 5,
    img: "/images/chair.jpg",
    hoverImg: "/images/chair1.jpg",
    discount: "-15%",
    name: "Elegant Vase",
    oldPrice: "€30.00",
    newPrice: "€21.00",
  },
  {
    id: 6,
    img: "/images/basket.jpg",
    hoverImg: "/images/basket.jpg",
    discount: "-20%",
    name: "Elegant Vase",
    oldPrice: "€30.00",
    newPrice: "€21.00",
  },
  {
    id: 7,
    img: "/images/jummar.jpg",
    hoverImg: "/images/jummar.jpg",
    discount: "-20%",
    name: "Elegant Vase",
    oldPrice: "€30.00",
    newPrice: "€21.00",
  },
  {
    id: 8,
    img: "/images/smallchair1.jpg",
    hoverImg: "/images/smallchiar.jpg",
    discount: "-20%",
    name: "Elegant Vase",
    oldPrice: "€30.00",
    newPrice: "€21.00",
  }
];
