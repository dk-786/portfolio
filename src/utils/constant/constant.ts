export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
];

export const CONTACTS = [
  { type: "phone", value: "(+053) 625 08 09 62", href: "tel:+053625080962" },
  { type: "email", value: "kevincontact@gmail.com", href: "mailto:kevincontact@gmail.com" },
];

export const ADDRESS = "223 Thatcher Road St, Brooklyn, Manhattan, NY 10463";

// constant.ts
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

export const SOCIALS = [
  { href: "#", label: "Facebook", icon: FaFacebookF },
  { href: "#", label: "Twitter", icon: FaTwitter },
  { href: "#", label: "Instagram", icon: FaInstagram },
  { href: "#", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "#", label: "Behance", icon: FaBehance },
];

export const ABOUT_ME = {
  title: "About Me",
  description: `Hello, my name's Darshak, I'm a web designer and developer.
  Duis dolor in reprehenderit velit in esse cillum fugiat nulla pariatur.`,
};

export const WHAT_I_DO = {
  title: "What I Do",
  description: `Website Design & Logo / Mobile Application Design / UI/UX Mobile Design / 
  Web Developments / Brand Identity`,
};

export const CONTACT_ME = {
  title: "Contact Me",
  address: "29 Sahajanad Park, Ahmedabad",
  email: "darshakvaddoriya6@gmail.com",
  phone: "7698414462",
};

export const cardData = [
  {
    title: "Born In",
    content: "East Legon Accra, Ghana"
  },
  {
    title: "Experience",
    content: "15 Years Experience"
  },
  {
    title: "Date Of Birth",
    content: "20 December, 1994"
  },
  {
    title: "Language",
    content: "German, English, Spanish"
  }
];

export const stats = [
  { label: "2K+ Happy Clients" },
  { icon: true },
  { label: "30+ Team Members" },
  { icon: true },
  { label: "3K+ Successful Projects" },
  { icon: true },
];

export const items = [
  { num: "I", title: "UX/UI Design", img: "/user/1.jpg" },
  { num: "II", title: "Graphic Design", img: "/user/2.jpg" },
  { num: "III", title: "Branding Design", img: "/user/3.jpg" },
  { num: "IV", title: "Motion Design", img: "/user/4.jpg" },
  { num: "V", title: "Market Analysis", img: "/user/5.jpg" },
];

export const projects = [
  {
    id: 1,
    category: "PRODUCT DESIGN",
    title: "Mobile application design",
    image: "/user/1.jpg",
  },
  {
    id: 2,
    category: "CREATIVE GRAPHIC DESIGN",
    title: "Marketing site design and build",
    image: "/user/2.jpg",
  },
  {
    id: 3,
    category: "DESIGN & BRANDING",
    title: "Creative Graphics Design",
    image: "/user/3.jpg",
  },
  {
    id: 4,
    category: "PRODUCT DESIGN",
    title: "Brand Identity & Motion Design",
    image: "/user/4.jpg",
  },
  {
    id: 5,
    category: "PRODUCT DESIGN",
    title: "Marketing site design and build",
    image: "/user/5.jpg",
  },
  {
    id: 6,
    category: "GRAPHIC DESIGN",
    title: "Paper & Book Covers Design",
    image: "/user/6.jpg",
  },
];
export const testimonials = [
  {
    id: 1,
    name: "Jhonson Smith",
    role: "Web Developer",
    feedback:
      "Duis aute irure dolor in velit esse dolore eu fugiat nulla pariatur. excepteur cupidatats non proident, sunt in culpa qui deserunt a mollit anim id est laborum.",
    avatar: "/user/7.jpg",
  },
  {
    id: 2,
    name: "Jonas Morgan",
    role: "Web Developer",
    feedback:
      "Duis aute irure dolor in velit esse dolore eu fugiat nulla pariatur. excepteur cupidatats non proident, sunt in culpa qui deserunt a mollit anim id est laborum.",
    avatar: "/user/8.jpg",
  },
  {
    id: 3,
    name: "Nicolas Jhon",
    role: "Web Developer",
    feedback:
      "Duis aute irure dolor in velit esse dolore eu fugiat nulla pariatur. excepteur cupidatats non proident, sunt in culpa qui deserunt a mollit anim id est laborum.",
    avatar: "/user/9.jpg",
  },
];

export const customers = [
  { num: "1", title: "LinkedIn", img: "/user/linkedin.png" },
  { num: "2", title: "Walmart", img: "/user/walmart.png" },
  { num: "3", title: "Amazon", img: "/user/amazon.png" },
  { num: "4", title: "Slack", img: "/user/slack.png" },
  { num: "5", title: "Google", img: "/user/google.png" },
];

export const myPricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    price: 25,
    features: [
      "Web Development",
      "Mobile Development",
      "Advertising",
      "Graphic design",
      "Project management",
    ],
  },
  {
    id: 2,
    name: "Standard Plan",
    price: 75,
    features: [
      "Web Development",
      "Mobile Development",
      "Advertising",
      "Graphic design",
      "Project management",
    ],
  },
  {
    id: 3,
    name: "Gold Plan",
    price: 125,
    features: [
      "Web Development",
      "Mobile Development",
      "Advertising",
      "Graphic design",
      "Project management",
    ],
  },
];

export const blogPosts = [
  {
    id: 1,
    date: "January 26, 2024",
    title: "Digital and physical brand design",
    image: "/user/10.jpg",
    link: "/blog/brand-design",
  },
  {
    id: 2,
    date: "January 26, 2024",
    title: "The transformation of mobile app designing",
    image: "/user/11.jpg",
    link: "/blog/mobile-app",
  },
  {
    id: 3,
    date: "January 26, 2024",
    title: "A beginner’s guide to running adventures",
    image: "/user/12.jpg",
    link: "/blog/running-adventures",
  },
  {
    id: 4,
    date: "January 26, 2024",
    title: "A beginner’s guide to running adventures",
    image: "/user/20.jpg",
    link: "/blog/running-adventures",
  },
  {
    id: 5,
    date: "January 26, 2024",
    title: "A beginner’s guide to running adventures",
    image: "/user/21.jpg",
    link: "/blog/running-adventures",
  },
];

export const skills = [
  {
    name: "UI / UX Design",
    percentage: 95,
    icon: "/user/14.png",
  },
  {
    name: "Development",
    percentage: 90,
    icon: "/user/15.png",
  },
  {
    name: "Graphic Design",
    percentage: 80,
    icon: "/user/16.png",
  },
  {
    name: "WordPress",
    percentage: 95,
    icon: "/user/17.png",
  },
];
export const experiences= [
  {
    company: "Designflow Studio",
    role: "Design, motion, 3D, art direction",
    period: "2023 - Present",
  },
  {
    company: "Moment Factory",
    role: "Senior UI/UX Designer",
    period: "2019 - 2022",
  },
  {
    company: "Brunodoe Agency",
    role: "Framer Designer & Developer",
    period: "2017 - 2018",
  },
  {
    company: "Envato Market",
    role: "Front-End WordPress Developer",
    period: "2016 - 2017",
  },
  {
    company: "Designflow Studio",
    role: "Webflow Developer & Co-Founder",
    period: "2015 - 2016",
  },
];
export const awards = [
  { title: "Webby Awards", award: "Awwwards", link: "#" },
  { title: "CSS Design Awards", award: "Site of the Day", link: "#" },
  { title: "Golden Pixel Awards", award: "Awwwards", link: "#" },
  { title: "Developer Award", award: "TechnoWorld", link: "#" },
  { title: "Motion Graphics", award: "TechnoWorld", link: "#" },
];


export const titleLines = [
  [
    { text: "Specialized", className: "underline" },
    { text: "in website", className: "text-transparent text-stroke" },
    { text: "and", className: "underline" },
    { text: "design", className: "text-transparent text-stroke" },
  ],
  [
    { text: "system", className: "underline" },
  ],
];

export const cardDataOne = [
  {
    number: "01",
    title: "Send up your project",
    description:
      "Duis aute irure dolor in voluptate exceptur sint occaecat cupidatat non proident, sunt in officia deserunt mollit anim id est.",
  },
  {
    number: "02",
    title: "Get it delivered on time",
    description:
      "Duis aute irure dolor in voluptate exceptur sint occaecat cupidatat non proident, sunt in officia deserunt mollit anim id est.",
  },
  {
    number: "03",
    title: "Take on more clients & scale up",
    description:
      "Duis aute irure dolor in voluptate exceptur sint occaecat cupidatat non proident, sunt in officia deserunt mollit anim id est.",
  },
];

export const projectDesignData = [
  [
    { text: "We design", className: "text-transparent text-stroke" },
    { text: "brands", className: "underline" },
    { text: "&", className: "text-transparent text-stroke" },
    { text: "websites", className: "underline" },
    { text: "plus", className: "text-transparent text-stroke" },
  ],
  [
    { text: "exceptional software", className: "text-transparent text-stroke" },
    { text: "platforms", className: "underline" },
  ],
];

export const images = [
  "/user/sliderone.jpg",
  "/user/slidertwo.jpg",
  "/user/sliderthree.jpg",
  "/user/sliderfour.jpg",
  "/user/1.jpg",
  "/user/2.jpg",
  "/user/3.jpg",
  "/user/4.jpg",
  "/user/5.jpg",
  "/user/6.jpg",
];

export const titleLiness = [
  [
    { text: "User", className: "text-transparent text-stroke" },
    { text: "interface", className: "underline" },
  ],
  [
    { text: "design", className: "underline" },
    { text: "growth tips and", className: "text-transparent text-stroke" },
    { text: "trends", className: "underline" },
  ],
];

  export const blogs = [
    {
      id: 1,
      date: "January 05, 2024",
      title: "How to develop website",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/user/10.jpg",
    },
    {
      id: 2,
      date: "February 10, 2024",
      title: "Best UI/UX practices",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      image: "/user/22.jpg",
    },
    {
      id: 3,
      date: "February 10, 2024",
      title: "Best UI/UX practices",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      image: "/user/23.jpg",
    },
  ];

  export const faqData = [
    {
      question: 'Why should I choose Nicolas?',
      answer:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised open ininiwords which don\'t look even again is there anyone who loves slightly believable.',
    },
    {
      question: 'Unique brand identity and strategy',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    },
    {
      question: 'Tailor-made digital products',
      answer:
        'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    },
    {
      question: 'Are you open for new projects?',
      answer:
        'Yes! We are always excited to take on new and challenging projects. Please feel free to reach out to discuss your ideas.',
    },
    {
      question: 'Do you currently have career openings?',
      answer:
        'We do! We are a rapidly growing company and are always looking for talented individuals to join our team. Check our careers page for the latest listings.',
    },
  ];

