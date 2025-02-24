import {
  projectData,
  professionalConnectionIcons,
  achievmentsData,
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

const portfolioProjectEl = document.getElementById("portfolio-projects")

projectData.map(item => {
  if (item.id % 2 == 0) {
    portfolioProjectEl.innerHTML +=
      `
    <div class="row d-flex justify-content-between align-items-center mt-100 mt-sm-50 flex-sm-col-rev">
      <div class="col-md-5">
        <h4 class="mt-2">${item.projectName}</h4>
        <p>
          ${item.desc}
        </p>
      </div>
    <div class="col-md-6">
      <img src="${item.projectmageSrc}" alt="" class="img-fluid">
      </div>
    </div>
    `
  }
  else {
    portfolioProjectEl.innerHTML +=
      `
  <div class="row d-flex justify-content-between align-items-center mt-100 mt-sm-50">
      <div class="col-md-6">
      <img src="${item.projectmageSrc}" alt="" class="img-fluid">
      </div>
      <div class="col-md-5">
        <h4 class="mt-2">${item.projectName}</h4>
        <p>${item.desc}</p>
      </div>
    </div>
  `
  }
})