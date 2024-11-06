import { projectData, frontendSkillsIcons, backendSkillsIcons, professionalConnectionIcons } from "./project_data.mjs"

const addPortfolio = document.getElementById("add-projects")
// const contactUsForm = document.getElementById("contact-form")
const frontEndSkillEl = document.getElementById("frontend-skills")

// contactUsForm.addEventListener("submit", (event) => { event.preventDefault() })


projectData.map((data) => {
    addPortfolio.innerHTML +=
        `
        <div class="col-md-5 mt-5">
            <div class="project-card shadow" id="${data.id}">
                <img src="${data.projectmageSrc}" alt="" class="card-img" />
            </div>
        </div>
        <div class="col-md-5">
            <h4 class="text-center mb-0">${data.projectName}</h4>
            <p class="mb-0">FEATURES: </p>
            <ul>
                ${data.features.map(val => `<li>${val}</li>`).join("")}
            </ul>
        </div>    
`
})



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


