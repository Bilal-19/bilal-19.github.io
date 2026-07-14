import { projectData, categoryBtns } from "./project_data.mjs";

const projectCardEl = document.getElementById("all-projects-card")

function renderProject(projects) {
    projectCardEl.innerHTML = ''
    return projects.forEach((val, index) => {
        projectCardEl.innerHTML += `
      <div class="rounded-xl shadow-xl mb-5 px-5 py-5 w-80 md:w-auto mx-auto bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img src="${val.projectmageSrc}" alt="${val.projectName}" class="rounded-md w-full object-cover transition-transform duration-300 hover:scale-105" />
            <div class="flex flex-row items-center justify-between pt-3 mb-3">
                <h5 class="text-md md:text-xl font-semibold text-[#020817]">${val.projectName}</h5>
            </div>
            <div>
              <p class="mb-4 text-[#65758B] leading-relaxed text-sm">${val.desc}</p>
              <p class="mb-5">${val.technology.map(item => `<button class="bg-[#3C83F6]/10 text-[#3C83F6] px-2 py-1 rounded-md text-xs font-medium">${item}</button>`).join(" ")}</p>
              <a href='/project_detail.html?id=${val.id}' target='_blank' class='bg-[#F9FAFB] border border-[#3C83F6] text-[#3C83F6] text-sm font-medium rounded-lg px-3 py-2 my-3 hover:bg-[#3C83F6] hover:text-[#F9FAFB]'>View Project <i class="fa-solid fa-arrow-up-right-from-square fa-xs ml-1"></i></a>
            </div>
          </div>
      </div>
  `;
    });
}
// renderProject(projectData.slice(0,3))
renderProject(projectData)


const projectCategoryForm = document.getElementById("project-category")

// Render project category buttons
categoryBtns.map((val, key) => {
    projectCategoryForm.innerHTML +=
        `
  <button name="category" value="${val.btnValue}" class="category-btn hover:cursor-pointer text-[#3C83F6] border-1 border-[#3C83F6] py-1 rounded-xl text-xs md:text-sm">${val.btnContent}</button>
  `
})

projectCategoryForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const getBtnVal = e.submitter.value
    document.querySelectorAll(".category-btn").forEach(val => val.classList.remove('active-project'))
    e.submitter.classList.add("active-project")
    var filterProjects = getBtnVal === 'All' ? projectData : projectData.filter((val) => val.category === getBtnVal);
    projectCardEl.innerHTML = ``
    console.log(`Filter Projects: ${filterProjects}`)
    renderProject(filterProjects)
})
