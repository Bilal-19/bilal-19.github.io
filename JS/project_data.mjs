const projectData = [
  {
    id: 1,
    projectmageSrc: "./media/images/visa_application.png",
    projectName: "Visa Web Application",
    desc: "A visa application platform with user accounts, application management, FAQs, inquiries, admin dashboard, and approval system.",
    technology: ["JavaScript", "Bootstrap 5", "PHP", "Laravel", "MySQL"],
    websiteURL: ""
  },
  {
    id: 2,
    projectmageSrc: "./media/images/food_catering_website.png",
    projectName: "Food Catering Platform",
    desc: "An event-based food catering platform with order management, customer support, FAQs, inventory tracking, and admin dashboard.",
    technology: ["JavaScript", "Bootstrap 5", "PHP", "Laravel", "MySQL"],
    websiteURL: ""
  },
  {
    id: 3,
    projectmageSrc: "./media/images/rehnuma_portfolio.png",
    projectName: "Rehnuma Portfolio",
    desc: "An NGO portfolio website showcasing mission, team, progress gallery, and social media integration.",
    technology: ["React JS", "Bootstrap 5"],
    websiteURL: "https://rehnuma.netlify.app/"
  },
  {
    id: 4,
    projectmageSrc: "./media/images/royal_jewellers.png",
    projectName: "Royal Jewellers Portfolio",
    desc: "A jewelry portfolio website featuring materials, cost estimation, quotation requests, and customer inquiries.",
    technology: ["React JS", "Bootstrap 5"],
    websiteURL: "https://royaljewellers.netlify.app/"
  },
  {
    id: 5,
    projectmageSrc: "./media/images/E-commerce.png",
    projectName: "E-Commerce Store",
    desc: "An eCommerce platform with product management, shopping cart, Stripe payments, and admin dashboard.",
    technology: ["JavaScript", "Bootstrap 5", "PHP", "Laravel", "MySQL"],
    websiteURL: ""
  },
  {
    id: 6,
    projectmageSrc: "./media/images/Ridehub.png",
    projectName: "Ride-Hub Portfolio",
    desc: "A static website showcasing premium cars, driver profiles, and contact inquiries.",
    technology: ["React JS", "Bootstrap 5"],
    websiteURL: "https://ridewithcomfort.netlify.app/"
  },
  {
    id: 7,
    projectmageSrc: "./media/images/SER.png",
    projectName: "Sterling Executive Residential",
    desc: "A property booking platform with listings, availability checking, booking, and admin management.",
    technology: ["JavaScript", "Bootstrap 5", "PHP", "Laravel", "MySQL"],
    websiteURL: "https://sterling-executive.com/"
  },
  {
    id: 8,
    projectmageSrc: "./media/images/Green-Key.png",
    projectName: "Green Key Lettings",
    desc: "A real estate platform for property management, tenancy handling, and inquiries in the UAE housing sector.",
    technology: ["JavaScript", "Bootstrap 5", "PHP", "Laravel", "MySQL"],
    websiteURL: "https://greenkeylettings.com/"
  },
  {
    id: 9,
    projectmageSrc: "./media/images/aquaVenture.png",
    projectName: "Swimming Academy",
    desc: "A website for a swimming academy with class schedules, trainer profiles, membership options, and contact inquiries.",
    technology: ["React JS", "Tailwind CSS"],
    websiteURL: "https://aquaswimventure.netlify.app/"
  },
  {
    id: 10,
    projectmageSrc: "./media/images/iron-pulse-portfolio.png",
    projectName: "Gym Website",
    desc: "A gym website with membership options, trainer profiles, workout schedules, and contact inquiries.",
    technology: ["React JS", "Tailwind CSS"],
    websiteURL: "https://ironpulse.netlify.app/"
  },
  {
    id: 11,
    projectmageSrc: "./media/images/curemed-pharmas.png",
    projectName: "Pharmaceutical Website",
    desc: "A pharmaceutical website featuring product details, services, and contact inquiries.",
    technology: ["React JS", "Tailwind CSS"],
    websiteURL: "https://curemed-pharmas.netlify.app/"
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
      "Speed Optimization",
      "Hosting Setup"
    ],
    revisions: 2,
    timeFrame: 10,
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
      "Hosting Setup & Domain",
    ],
    revisions: 3,
    timeFrame: 18,
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
      "Hosting Setup & Domain"
    ],
    revisions: 4,
    timeFrame: 30,
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
      "Developed Real Estate platform for seamless property booking, allowing users to browse, check availability, and book, while admins manage listings and inquiries.",
      "Developed pharmaceutical website, showcasing products, services, and a career page for job applicants."
    ]
  },

  {
    id: 2,
    companyName: "The Algorithm PK",
    designation: "Web Developer & Instructor",
    duration: "Jan 2024 - Aug 2024",
    jobDescription: [
      "Assessment: Evaluated software boot camp students related to HTML, CSS, and JavaScript.",
      "Instructed: Educated 20 NAVTTC students related to web development, including the technology HTML, CSS, Bootstrap 5, and JavaScript."
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
