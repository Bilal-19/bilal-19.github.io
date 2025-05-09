import {
  projectData,
  pricingPackages,
  blogs,
  professionalExperience,
  FAQs,
  technicalSkills
} from "./project_data.mjs";

const portfolioSectionEl = document.querySelector(".swiper-wrapper")

projectData.forEach((val) => {
  portfolioSectionEl.innerHTML += `
      <div class="swiper-slide rounded-xl md:border border-gray-300 shadow-md mb-5 h-fit px-2 py-5">
          <img src="${val.projectmageSrc}" class="rounded-md" alt="${val.projectName}">
            <div class="flex flex-row items-center justify-between">
                <h5 class="text-xl font-semibold mt-2">${val.projectName}</h5>
                <div class="space-x-2">
                  ${val.websiteURL ?
                  `<a href="${val.websiteURL}" target="_blank" class="text-[#051527]"><i class="fa-solid fa-globe"></i></a>`
                  :
                  ``
                  }
                  <a href="${val.githubURL}" target="_blank" class="text-[#051527]"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
          <p class="text-[#6B7280] mt-3 mb-3">${val.desc}</p>
          <p class="mb-3">${val.technology.map(item => `<button class="bg-[#051527] text-white px-2 py-1 rounded-xl text-xs">${item}</button>`).join(" ")}</p> 
      </div>
  `;
});

new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    768: { slidesPerView: 1},
    1024: { slidesPerView: 3 }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const skillsEl = document.getElementById("technicalSkills");
technicalSkills.map((val, key) => {
  skillsEl.innerHTML +=
    `
   <div class="w-80 md:w-1/4 mx-auto flex items-center justify-start my-5 bg-[#F3F4F6] px-3 py-2 rounded-md border-b-3 border-t-[0.5px] border-x-[0.5px] border-[#051527]">
      <div>
        <img src="./media/images/${val.imageAdd}" alt="${val.category}" class="object-contain">
      </div>
      <div class="mx-2">
        <h5 class="font-medium text-lg">${val.category}</h5>
        <p class="text-xs">${val.coreSkills}</p>
      </div>
    </div>
  `
})

const priceEl = document.getElementById("pricingPackages")

pricingPackages.map((val, key) => {
  priceEl.innerHTML +=
    `
  <div class="m-3 border shadow-md rounded-lg hover:scale-102 duration-100 p-5 ${val.id == 2 ? 'border-gray-500' : 'border-gray-300'}">
    <img src="${val.imgPath}" class="h-10 mx-auto mb-3" alt=${val.packageName}/>
    <h5 class="text-center text-md md:text-lg font-medium mb-3">${val.packageName}</h5>
    <div class="flex items-center justify-center">
      <h3 class="text-center text-2xl md:text-4xl font-medium">$${val.newPrice}</h3><span class="text-[#4B5563]">/project</span>
    </div>
    <p class="mb-3">${val.description}</p>
    <div class="mb-3 flex flex-col md:flex-row justify-between text-[#6B7280]">
      <p><i class="fa-solid fa-calendar-days"></i> ${val.timeFrame} business days</p>
      <p><i class="fa-solid fa-repeat"></i> ${val.revisions} free revisions</p>
    </div>
    <h6>Key Features:</h6>
    <ul class="text-[#6B7280]">
    ${val.keyFeatures.map(value =>
      `
      <li class="ml-5"><i class="fa-solid fa-check text-green-700"></i> ${value}</li>
      `
    ).join("")}
    </ul>
  </div>
  `
})


const blogEl = document.getElementById("blog-section")
blogs.map((val, key) => {
  blogEl.innerHTML +=
    `
   <div class="border border-gray-300 p-5 rounded-md" key=${key}>
    <img src="./media/images/${val.thumbnailImg}" alt="${val.blogTitle}" class="rounded-lg mb-3" />
    <h6 class="mb-3 font-semibold md:text-xl">${val.blogTitle}</h6>
    <p class="mb-5 text-[#6B7280]">${val.blogDesc}</p>
    <a href="https://medium.com/@bilalmuhammadyousuf543/${val.mediumURL}" target="_blank" class="text-white bg-[#051527] px-3 py-2 rounded-lg">
    <i class="fa-brands fa-medium"></i> View on Medium
    </a>
  </div>
  `
})

// Adding navbar toggle functionality

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("navbar-default").classList.toggle("hidden")
})


const experienceEl = document.getElementById("experience-section")

professionalExperience.map((item, key) => (
  experienceEl.innerHTML +=
  `
  <div class="mb-5 mb-5 p-5 rounded-md bg-white shadow-md" key=${key}>
    <h5 class="text-xl font-medium">${item.designation}</h5>
    <p class="text-[#4B5563]">${item.companyName}</p>
    <p class="text-[#4B5563] text-sm">${item.duration}</p>
    <h6 class="font-medium">Roles & Responsibilites:</h6>
    <ul>
    ${item.jobDescription.map(val => `<li class="text-sm mt-1 text-[#4B5563]">* ${val}</li>`).join("")}
    </ul>
  </div>
  `
))


const FaqEl = document.getElementById("ques-ans")
FAQs.map((val, key) => (
  FaqEl.innerHTML +=
  `
  <div class="w-80 mx-auto md:w-auto p-5 my-5 rounded-md border-b-3 border-t-[0.5px] border-x-[0.5px] border-[#051527]">
      <div class="flex justify-between toggle-faq hover:cursor-pointer">
          <h4 class="font-medium">${val.id}. ${val.ques}</h4>
          <i class="fa-solid fa-caret-down hover:cursor-pointer"></i>
      </div>
      <p class="text-[#4B5563] mt-3 toggle-answer text-sm hidden">${val.answer}</p>
  </div>
  `
))

document.querySelectorAll(".toggle-faq").forEach((faq, index) => {
  // 'faq' is the question

  // Attach event listener to each question
  faq.addEventListener("click", () => {
    faq.nextElementSibling.classList.toggle("hidden")
  })
})
