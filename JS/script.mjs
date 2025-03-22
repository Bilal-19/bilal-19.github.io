import {
  projectData,
  achievmentsData,
  pricingPackages,
  blogs,
  FAQs,
} from "./project_data.mjs";

const portfolioSectionEl = document.querySelector(".swiper-wrapper")
const certificateSectionEl = document.querySelector(".certificate-wrapper")

projectData.forEach((val) => {
  portfolioSectionEl.innerHTML += `
      <div class="swiper-slide rounded-xl border border-gray-200 drop-shadow mb-5">
          <img src="${val.projectmageSrc}" class="img-fluid mb-2 rounded drop-shadow">
            <h5 class="text-xl font-semibold">${val.projectName}</h5>
            <p class="text-[#6B7280] mt-3 mb-3">${val.desc}</p>
            <p>${val.technology.map(item => `<button class="bg-[#051527] text-white px-2 py-1 rounded-xl text-xs">${item}</button>`).join(" ")}</p>
      </div>
  `;
});

new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    768: { slidesPerView: 1 },
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


const priceEl = document.getElementById("pricingPackages")

pricingPackages.map((val, key) => {
  priceEl.innerHTML +=
    `
  <div class="m-3 border shadow-md rounded-lg hover:scale-102 duration-100 p-5 ${val.id == 2 ? 'border-gray-500' : 'border-gray-300'}">
    <img src="${val.imgPath}" class="h-10 mx-auto mb-3"/>
    <h5 class="text-center md:text-lg font-medium mb-3">${val.packageName}</h5>
    <h3 class="text-center md:text-4xl font-medium mb-3">$${val.newPrice}</h3>
    <p class="mb-3">${val.description}</p>
    <div class="mb-3 flex justify-between text-[#6B7280]">
      <p><i class="fa-solid fa-calendar-days"></i> ${val.timeFrame}-days delivery</p>
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
   <div class="col-10 col-md-4 blog-card drop-shadow pb-3 pt-3">
    <img src="./media/images/${val.thumbnailImg}" alt="${val.blogTitle}" class="img-fluid mb-3 d-block" />
    <h6 class="mb-3">${val.blogTitle}</h6>
    <a href="https://medium.com/@bilalmuhammadyousuf543/${val.mediumURL}" target="_blank">
    <i class="fa-brands fa-medium"></i> View on Medium
    </a>
  </div>
  `
})

const faqEl = document.getElementById("faq-section")
FAQs.map((val, key) => {
  faqEl.innerHTML +=
    `
   <div class="col-11 col-md-10 mx-auto">
    <div class="accordion-item mb-4 shadow">
      <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${key}" aria-expanded="true" aria-controls="collapse${key}">
        ${val.id}. ${val.ques}
      </button>
      </h2>
    <div id="collapse${key}" class="accordion-collapse collapse" data-bs-parent="#faq-section">
      <div class="accordion-body">${val.answer}</div>
    </div>
    </div>
  </div>
  `
})


// Adding navbar toggle functionality

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("navbar-default").classList.toggle("hidden")
})


// Adding swiper to certificates



new Swiper('.swiper-certificates', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    768: { slidesPerView: 1 },
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

achievmentsData.forEach((val) => {
  certificateSectionEl.innerHTML += `
      <div class="swiper-slide rounded-xl border border-gray-200 drop-shadow mb-5">
          <img src="${val.imagePath}" class="img-fluid mb-2 rounded drop-shadow">
      </div>
  `;
});