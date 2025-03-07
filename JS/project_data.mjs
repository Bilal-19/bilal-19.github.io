const projectData = [
  {
    id: 1,
    projectmageSrc: "./media/images/visa_application.png",
    projectName: "Visa Web Application",
    desc: "Developed a Visa Web Application where applicants can create accounts, apply for visas, read FAQs, and submit inquiries. Admins have access to an analytics dashboard, manage users and visa applications, approve or reject requests, and handle customer inquiries with recovery options for trashed records."
  },
  {
    id: 2,
    projectmageSrc: "./media/images/food_catering_website.png",
    projectName: "Food Catering Platform",
    desc: "Developed a food catering platform for both customers and administrators. Customers can place event-based orders (e.g., weddings, birthdays), access customer support, read FAQs, and view order history. Admins can manage menu items, orders, inventory, customer inquiries, user roles, and generate reports via a centralized dashboard."
  },
  {
    id: 3,
    projectmageSrc: "./media/images/rehnuma_portfolio.png",
    projectName: "Rehnuma Portfolio",
    desc: "Designed and developed a portfolio website to establish a strong digital presence for an NGO. The website highlights the organization's mission, showcases team members, displays progress through a gallery, and integrates social media links for seamless engagement."
  },
  {
    id: 4,
    projectmageSrc: "./media/images/royal_jewellers.png",
    projectName: "Royal Jewellers Portfolio",
    desc: "Developed a jewelry portfolio website showcasing jewelry materials and providing cost estimation. Features include a landing page, material options, an estimate cost calculator, a request quotation page, and a contact inquiry section. The website enhances digital presence and improves customer engagement."
  },
  {
    id: 5,
    projectmageSrc: "./media/images/E-commerce.png",
    projectName: "E-Commerce Web Application",
    desc: "Built an eCommerce platform where admins can manage categories, products, and orders from a centralized dashboard. Customers can create accounts, add or remove products from their cart, and choose between Stripe payment or cash on delivery."
  },
  {
    id: 6,
    projectmageSrc: "./media/images/Ridehub.png",
    projectName: "Ride-Hub Portfolio",
    desc: "Developed a static website using React JS to showcase premium cars and professional drivers. The website features a sleek design with sections for available cars, driver profiles, and contact inquiries."
  },
  {
    id: 7,
    projectmageSrc: "./media/images/SER.png",
    projectName: "Sterling Executive Residential ~ Real Estate",
    desc: "Developed a seamless property booking platform where users can browse listings, check availability, and book properties. Admins have control over property listings, user inquiries, and overall management."
  },
  {
    id: 8,
    projectmageSrc: "./media/images/Green-Key.png",
    projectName: "Green Key ~ Real Estate",
    desc: "Developed a real estate management platform to streamline property management for admins, landlords, and tenants in the UK housing sector. Features include property listings, tenancy management, and inquiry handling."
  },
  {
    id: 9,
    projectmageSrc: "./media/images/aquaVenture.png",
    projectName: "Aqua Venture ~ Swimming Academy",
    desc: "Designed and developed a website for a swimming academy, featuring class schedules, trainer profiles, membership options, and contact inquiries."
  },
  {
    id: 10,
    projectmageSrc: "./media/images/iron-pulse-portfolio.png",
    projectName: "Iron Pulse",
    desc: "Designed and developed a website for a swimming academy, featuring class schedules, trainer profiles, membership options, and contact inquiries."
  }
];



const professionalConnectionIcons = [
  {
    id: 1,
    hrefPath: "https://www.linkedin.com/in/bilalmuhammadyousuf/",
    iconClass: "fa-brands fa-linkedin",
  },
  {
    id: 2,
    hrefPath: "https://www.facebook.com/profile.php?id=100013114033412",
    iconClass: "fa-brands fa-facebook",
  },
  {
    id: 3,
    hrefPath: "https://www.instagram.com/bilal_8939/",
    iconClass: "fa-brands fa-instagram",
  },
  {
    id: 4,
    hrefPath: "mailto:bilalmuhammadyousuf543@gmail.com",
    iconClass: "fa-regular fa-envelope",
  },
  {
    id: 5,
    hrefPath: "tel:+923427634247",
    iconClass: "fa-brands fa-whatsapp",
  },
  {
    id: 6,
    hrefPath: "https://github.com/Bilal-19",
    iconClass: "fa-brands fa-github",
  }
];


const achievmentsData = [
  {
    id: 1,
    imagePath: "./media/images/SEO.webp",
    altDesc: "Search Engine Optimization - Innovista"
  },
  {
    id: 2,
    imagePath: "./media/images/freelancing.webp",
    altDesc: "Freelancing"
  },
  {
    id: 3,
    imagePath: "./media/images/AgileSoftwareDevelopment.webp",
    altDesc: "Agile Software Development"
  },
  {
    id: 4,
    imagePath: "./media/images/LearningMindset.webp",
    altDesc: "Learning Mindset"
  },
  {
    id: 5,
    imagePath: "./media/images/PeakPerformance.webp",
    altDesc: "Nano Tips for Peak Performance with Shade Zahrai"
  },
  {
    id: 6,
    imagePath: "./media/images/PersonalBranding.webp",
    altDesc: "Accelerating Your Career with Personal Branding"
  },
  {
    id: 7,
    imagePath: "./media/images/FullStackWebDeveloper.webp",
    altDesc: "Become a Full-Stack Web Developer"
  },
  {
    id: 8,
    imagePath: "./media/images/MLSA.webp",
    altDesc: "GitHub Universe 2022 Warch Party"
  },
  {
    id: 9,
    imagePath: "./media/images/GDSC_Web3.webp",
    altDesc: "User Experience Web 3.0 Design Workshop"
  },
  {
    id: 10,
    imagePath: "./media/images/MLSA_Azure_Session.webp",
    altDesc: "Microsoft Azure Fundamental Workshop"
  }
];

const pricingPackages = [
  {
    id: 1,
    packageName: "Starter Website",
    description: "A simple yet professional website for small businesses, personal brands, or startups needing an online presence.",
    newPrice: 100,
    keyFeatures: [
      "1 to 5 pages (Home, About, Services)",
      "Responsive & Mobile-Friendly Design",
      "Basic SEO Optimization",
      "Contact Form Integration",
      "Social Media Links",
      "Fast Loading Speed",
      "Hosting Setup"
    ],
    revisions: 7,
    timeFrame: 10,
    imgPath: "./media/Icons/basic.png"
  },
  {
    id: 2,
    packageName: "Business Website",
    description: "A more advanced website with additional functionalities suitable for businesses looking to expand their online reach.",
    newPrice: "199",
    keyFeatures: [
      "5 to 10 Pages", 
      "Google Maps Integration",
      "Contact Forms Integration",
      "Performance Optimization",
      "Basic E-commerce (Up to 10 Products)",
      "Social Media Icons", 
      "Hosting Setup"
    ],
    revisions: 15,
    timeFrame: 21,
    imgPath: "./media/Icons/elite.png"
  },
  {
    id: 3,
    packageName: "Advanced Web Solution",
    description: "A full-featured, high-performance website with custom development tailored to business needs. Ideal for startups, e-commerce stores, or large enterprises.",
    newPrice: "499",
    keyFeatures: [
      "More than 10 Pages",
      "Fully Dynamic CMS (Admin Panel)",
      "API Integration (Third-Party Services)",
      "Ongoing Maintenance & Support",
      "Performance Optimization",
      "Advanced E-commerce Features",
      "Hosting Setup"
    ],
    revisions: 20,
    timeFrame: 45,
    imgPath: "./media/Icons/premium.png"
  }
]

const blogs = [
  {
    id: 1,
    blogTitle: "Embracing Growth ~ The Art of Developing a Learning Mindset",
    thumbnailImg: "growth-mindset.png",
    mediumURL: "embracing-growth-the-art-of-developing-a-learning-mindset-12084f950a0d"
  },

  {
    id: 2,
    blogTitle: "Amal Career Prep Fellowship Experience ~ Batch 291",
    thumbnailImg: "amal-fellowship-experience.png",
    mediumURL: "amal-career-prep-fellowship-experience-batch-291-87c681c2c966"
  },

  {
    id: 3,
    blogTitle: "Transformative Journey at Amal Academy",
    thumbnailImg: "amal-transformative-journey.png",
    mediumURL: "my-transformative-journey-at-amal-academy-a-three-month-reflection-12b05bc5f771"
  }
]

export {
  projectData,
  professionalConnectionIcons,
  achievmentsData,
  pricingPackages,
  blogs
};
