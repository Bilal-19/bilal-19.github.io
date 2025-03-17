import {
  projectData,
  professionalConnectionIcons,
  achievmentsData,
  pricingPackages,
  blogs,
  FAQs,
} from "./project_data.mjs";

const addPortfolio = document.getElementById("add-projects");
const addAchievments = document.getElementById("add-achievments");
const portfolioSectionEl = document.getElementById("portfolio-section")

projectData.map((data) => {
  addPortfolio.innerHTML += `
         <div class="carousel-item ${data.id == 1 ? "active" : " "} ">
            <img src="${data.projectmageSrc}" class="d-block w-100" alt="${data.projectName}">
        </div>
        
`;
});

addPortfolio.innerHTML += `
<div class="carousel-indicators">
    ${projectData
    .map(
      (item) => `
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${item.id - 1
        }" class="${item.id == 1 ? "active" : ""}" aria-current="${item.id == 1 ? "true" : ""
        }" aria-label="Slide ${item.id}"></button>
    `
    )
    .join("")}
</div>
`;

const professionalConnectionEl = document.getElementById(
  "professional-connection"
);

professionalConnectionIcons.map((item) => {
  professionalConnectionEl.innerHTML += `
     <li>
        <a href="${item.hrefPath}" class="mt-5 mx-2 social" target="_blank">
            <i class="${item.iconClass} fa-xl" style="color: #ffffff;"></i>
        </a>
    </li>
    `;
});

achievmentsData.map((data) => {
  addAchievments.innerHTML += `
         <div class="carousel-item ${data.id == 1 ? "active" : " "} ">
            <img src="${data.imagePath}" class="d-block w-100" alt="${data.altDesc
    }"> 
        </div>
        
`;
});

addAchievments.innerHTML += `
<div class="carousel-indicators">
    ${achievmentsData
    .map(
      (item) => `
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${item.id - 1
        }" class="${item.id == 1 ? "active" : ""}" aria-current="${item.id == 1 ? "true" : ""
        }" aria-label="Slide ${item.id}"></button>
    `
    )
    .join("")}
</div>
`;

const priceEl = document.getElementById("pricingPackages")

pricingPackages.map((val, key) => {
  priceEl.innerHTML +=
    `
  <div class="col-10 col-md-3 pricing-card ${val.id == 1 ? '':'mt-sm-20'}">
    <img src="${val.imgPath}" class="img-fluid"/>
    <h4 class="text-center">${val.packageName}</h4>
    <p class="d-flex justify-content-between">USD <span class="fw-bolder">$${val.newPrice}</span></p>
    <p>${val.description}</p>
    <div class="d-flex justify-content-between">
      <p><i class="fa-solid fa-calendar-days"></i> ${val.timeFrame}-days delivery</p>
      <p><i class="fa-solid fa-repeat"></i> ${val.revisions} free revisions</p>
    </div>
    <h6>Key Features:</h6>
    <ul class="list-group pb-3">
    ${val.keyFeatures.map(value =>
      `
      <li class="list-group-item"><i class="fa-solid fa-circle-check" style="color: #051527;"></i> ${value}</li>
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