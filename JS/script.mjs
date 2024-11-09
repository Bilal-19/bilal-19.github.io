import { projectData, frontendSkillsIcons, backendSkillsIcons, professionalConnectionIcons } from "./project_data.mjs"

const addPortfolio = document.getElementById("add-projects")
// const contactUsForm = document.getElementById("contact-form")
const frontEndSkillEl = document.getElementById("frontend-skills")

// contactUsForm.addEventListener("submit", (event) => { event.preventDefault() })


projectData.map((data) => {
    addPortfolio.innerHTML +=
        `
         <div class="carousel-item ${data.id == 1 ? "active": " "}">
            <img src="${data.projectmageSrc}" class="d-block w-100" alt="...">
        </div>  
`
})

addPortfolio.innerHTML += 
`
<div class="carousel-indicators">
    ${projectData.map(item => `
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${item.id - 1}" class="${item.id == 1 ? "active" : ""}" aria-current="${item.id == 1 ? "true" : ''}" aria-label="Slide ${item.id}"></button>
    `).join('')}
</div>
`;


frontendSkillsIcons.map((val) => {
    frontEndSkillEl.innerHTML += `<img src="./media/Icons/${val.ImageSrc}" alt="${val.altDesc}" class="skill-icon mx-2">`
})


const backEndSkillEl = document.getElementById("backend-skills")
backendSkillsIcons.map(
    (val) => backEndSkillEl.innerHTML += `<img src="./media/Icons/${val.ImageSrc}" alt="${val.altDesc}" class="skill-icon mx-2">`
)
const professionalConnectionEl = document.getElementById("professional-connection")

professionalConnectionIcons.map(item => {
    professionalConnectionEl.innerHTML +=
        `
     <li>
        <a href="${item.hrefPath}" class="mt-5 mx-2 social" target="_blank">
            <img src="${item.imagePath}" alt="" style="height: ${item.iconHeight}; width: ${item.iconWidth};">
        </a>
    </li>
    `
})


