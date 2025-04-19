const projectData = [
  {
    id: 1,
    projectmageSrc: "./media/images/visa_application.png",
    projectName: "Visa Web Application",
    desc: "A CRM web app where applicants can apply for visas, read FAQs, track their application status, and submit inquiries. Admins manage and approve/reject applications, track user data, and respond to inquiries via a centralized dashboard.",
    technology: ["JavaScript", "Bootstrap 5", "PHP", "Laravel", "MySQL"],
    websiteURL: "",
    githubURL: "https://github.com/Bilal-19/visa-web-application"
  },
  {
    id: 2,
    projectmageSrc: "./media/images/food_catering_website.png",
    projectName: "Food Catering Platform",
    desc: "A platform for customers to place event-based food orders, track history, and get support. Admins handle orders, manage inventory, and view dashboard analytics to ensure smooth operations and efficient inquiry handling through a single interface.",
    technology: ["JavaScript", "Bootstrap 5", "PHP", "Laravel", "MySQL"],
    websiteURL: "",
    githubURL: "https://github.com/Bilal-19/FoodCateringPlatform"
  },
  {
    id: 3,
    projectmageSrc: "./media/images/royal_jewellers.png",
    projectName: "Royal Jewellers Portfolio",
    desc: "A portfolio website to showcase jewelry materials, provide customers with real-time cost estimates, and offer features such as request-for-quote and contact inquiry forms to boost user interaction and lead generation efficiently.",
    technology: ["React JS", "Bootstrap 5"],
    websiteURL: "https://royaljewellers.netlify.app/",
    githubURL: "https://github.com/Bilal-19/RoyalJewellersPortfolio"
  },
  {
    id: 4,
    projectmageSrc: "./media/images/E-commerce.png",
    projectName: "E-Commerce Store",
    desc: "An online store with user authentication, shopping cart, and payment integration (Stripe/COD). Admins can manage categories, products, and orders from a dashboard, while users browse, purchase, and track products through their personal account.",
    technology: ["JavaScript", "Bootstrap 5", "PHP", "Laravel", "MySQL"],
    websiteURL: "",
    githubURL: "https://github.com/Bilal-19/LaravelEcommerceWebApplication"
  },
  {
    id: 5,
    projectmageSrc: "./media/images/Ridehub.png",
    projectName: "Ride-Hub Portfolio",
    desc: "A static React-based portfolio website designed to highlight premium car services and professional drivers. The site presents the brand’s service features with elegance, focusing on visual storytelling and smooth user experience.",
    technology: ["React JS", "Bootstrap 5"],
    websiteURL: "https://ridewithcomfort.netlify.app/",
    githubURL: "https://github.com/Bilal-19/RideHub"
  },
  {
    id: 6,
    projectmageSrc: "./media/images/SER.png",
    projectName: "Sterling Executive Residential",
    desc: "A real estate booking platform where users can explore property listings, check availability, and book their desired property online. Admins manage properties listing, view inquiries (booking, general etc), using a centralized dashboard.",
    technology: ["JavaScript", "Bootstrap 5", "PHP", "Laravel", "MySQL"],
    websiteURL: "https://sterling-executive.com/",
    githubURL: "https://github.com/Bilal-19/SER_RealEstate"
  },
  {
    id: 7,
    projectmageSrc: "./media/images/Green-Key.png",
    projectName: "Green Key Lettings",
    desc: "A multi-user platform with dashboards for admins and landlords. Landlords manage properties, tenants browse listings based on filters, and admins handle FAQs, company profiles, and overall content from a single panel.",
    technology: ["JavaScript", "Bootstrap 5", "PHP", "Laravel", "MySQL"],
    websiteURL: "https://greenkeylettings.com/",
    githubURL: "https://github.com/Bilal-19/NewLeafLettingHousing"
  },
  {
    id: 8,
    projectmageSrc: "./media/images/aquaVenture.png",
    projectName: "Swimming Academy",
    desc: "An interactive website for Aqua Venture Academy showcasing programs, galleries, testimonials, and contact forms. The site aims to engage parents and promote swimming courses with a clean layout and strong brand presence.",
    technology: ["React JS", "Tailwind CSS"],
    websiteURL: "https://aquaswimventure.netlify.app/",
    githubURL: "https://github.com/Bilal-19/swimming-academy-website"
  },
  {
    id: 9,
    projectmageSrc: "./media/images/iron-pulse-portfolio.png",
    projectName: "Gym Website",
    desc: "A dynamic gym website that presents membership options, trainer profiles, workout schedules, and contact forms. Designed to attract new members and provide essential information in an organized and visually appealing layout.",
    technology: ["React JS", "Tailwind CSS"],
    websiteURL: "https://ironpulse.netlify.app/",
    githubURL: "https://github.com/Bilal-19/iron-pulse-gym"
  },
  {
    id: 10,
    projectmageSrc: "./media/images/curemed-pharmas.png",
    projectName: "CureMed Pharmas",
    desc: "A portfolio website created for CureMed Pharmas to highlight medical products, services, company vision, and career opportunities. It features a clean layout with sections for mission, product display, job listings, and a contact form for clients and job seekers.",
    technology: ["React JS", "Tailwind CSS"],
    websiteURL: "https://curemed-pharmas.netlify.app/",
    githubURL: "https://github.com/Bilal-19/curemed-pharmacy"
  },
  {
    id: 11,
    projectmageSrc: "./media/images/furnicraft.png",
    projectName: "FurniCraft Studio",
    desc: "An interior design and furniture studio website that displays trending designs, featured collections, and company philosophy. Includes team profiles and testimonials to build trust and attract potential clients or collaborators.",
    technology: ["React JS", "Tailwind CSS"],
    websiteURL: "https://furnicraft-studio.netlify.app/",
    githubURL: "https://github.com/Bilal-19/FurniCraft-Studio"
  }
];



const pricingPackages = [
  {
    id: 1,
    packageName: "Starter Website",
    description: "Perfect for small businesses and personal websites.",
    newPrice: 49,
    keyFeatures: [
      "5 pages",
      "Mobile Responsive",
      "Social Media Icons",
      "Speed Optimization"
    ],
    revisions: 2,
    timeFrame: 7,
    imgPath: "./media/Icons/basic.png"
  },
  {
    id: 2,
    packageName: "Business Website",
    description: "Advanced features for growing businesses.",
    newPrice: 99,
    keyFeatures: [
      "5 to 10 Pages",
      "Mobile Responsive",
      "Social Media Icons",
      "Speed Optimization",
      "On-Page SEO",
      "Basic E-commerce (Up to 10 Products)",
      "Domain & Hosting Setup",
    ],
    revisions: 3,
    timeFrame: 15,
    imgPath: "./media/Icons/elite.png"
  },
  {
    id: 3,
    packageName: "Advanced Web Solution",
    description: "Custom development for complex needs.",
    newPrice: 149,
    keyFeatures: [
      "More than 10 Pages",
      "Mobile Responsive",
      "Social Media Icons",
      "Speed Optimization",
      "On-Page & Technical SEO",
      "Admin Dashboard",
      "Ongoing Maintenance & Support",
      "Advanced E-commerce Features",
      "Domain & Hosting Setup",
    ],
    revisions: 4,
    timeFrame: 25,
    imgPath: "./media/Icons/premium.png"
  }
]

const blogs = [
  {
    id: 1,
    blogTitle: "Host React JS Website On Github Pages",
    thumbnailImg: "host-react-github.jpg",
    mediumURL: "how-to-host-a-react-js-website-on-github-pages-678a714cdc2a",
    blogDesc: "Learn about the deployment of React JS website on github pages.",
    publishDate: "Mar 14, 2025"
  }
]

const FAQs = [
  {
    id: 1,
    ques: "What services do I offer?",
    answer: "I build custom websites and web applications using React JS, Laravel, PHP, JavaScript, and MySQL. My services include website development, SEO optimization, and performance enhancements."
  },
  {
    id: 2,
    ques: "What technologies do I specialize in?",
    answer: "I work with HTML, CSS, JavaScript, Bootstrap 5, Tailwind CSS, and React JS for frontend development. For backend development, I use PHP and Laravel, with MySQL as the database."
  },
  {
    id: 3,
    ques: "How can you contact me for a project?",
    answer: "You can email me at <b>bilalmuhammadyousuf543@gmail.com</b> or use the contact form on my website. I usually respond within 24 hours."
  },
  {
    id: 4,
    ques: "Am I available for freelance work?",
    answer: "Yes! I am available for freelance projects, contract-based work, and long-term collaborations based on your requirements."
  },
  {
    id: 5,
    ques: "How long does it take to complete a project?",
    answer: "Project timelines depend on complexity. A basic website takes 8-10 days, while business websites require 15-18 days. Custom web applications may take 25+ days. I always focus on delivering high-quality work within the agreed timeframe."
  }
];

const professionalExperience = [
  {
    id: 1,
    companyName: "ZH Tech",
    designation: "Software Developer",
    duration: "Sept 2024 - Present",
    jobDescription: [
      "Developed: Real Estate platform enabling seamless property browsing, check availability, and online bookings, while empowering admins to manage property listings and user inquiries.",
      "Developed: Pharmaceutical website showcasing company products, services, mission, and careers, with an integrated “Contact Us” page to enhance visitor engagement.",
      "Developed: Furniture & Interior business website featuring product collections, trending designs, service offerings, customer feedback, and real-time form submissions using EmailJS."
    ]
  },

  {
    id: 2,
    companyName: "The Algorithm PK",
    designation: "Web Developer & Instructor",
    duration: "Jan 2024 - Aug 2024",
    jobDescription: [
      "Assessment: Evaluated software developer bootcamp students on HTML, CSS, Bootstrap 5, JavaScript and MySQL.",
      "Instructed: Educated 20 NAVTTC Students on web development, including the modern technology such as HTML, CSS, Bootstrap 5, JavaScript, PHP and MySQL.",
      "Prepared: Conducted research, and documented check sheet, developed slides, and compiled over 150 glossaries entries relevant to web development on Google Sheets."
    ]
  }
]

export {
  projectData,
  pricingPackages,
  blogs,
  FAQs,
  professionalExperience
};
