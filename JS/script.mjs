import {
  projectData,
  pricingPackages,
  blogs,
  professionalExperience,
  FAQs,
  technicalSkills,
  customerFeedback,
  categoryBtns
} from "./project_data.mjs";

const projectCardEl = document.getElementById("project-card")

function renderProject(projects) {
  projectCardEl.innerHTML = ''
  return projects.forEach((val, index) => {
    const modalId = `modal-${index}`;
    projectCardEl.innerHTML += `
      <div class="rounded-xl border-b-4 border-r-2 border-t-1 border-l-1 border-emerald-500 shadow-md mb-5 px-5 py-5 w-80 md:w-auto mx-auto bg-gray-800 hover:translate-y-[-4px] hover:shadow-lg">
          <img src="${val.projectmageSrc}" alt="${val.projectName}" class="rounded-md" />
            <div class="flex flex-row items-center justify-between pt-3 mb-3">
                <h5 class="text-md md:text-xl font-semibold">${val.projectName}</h5>
            </div>
            <div>
            <p class="mb-4 font-light">${val.desc}</p>
          <p class="mb-3">${val.technology.map(item => `<button class="bg-emerald-900 text-white px-2 py-1 rounded-xl text-xs">${item}</button>`).join(" ")}</p>
          ${val.websiteURL ?
        `<a href="${val.websiteURL}" target="_blank" class="bg-emerald-500 text-white px-3 py-2 text-sm rounded-md hover:text-emerald-900 hover:bg-white"><i class="fa-solid fa-globe"></i> Website</a>`
        :
        ``
      }
          <a href="${val.githubURL}" target="_blank" class="bg-emerald-500 text-white px-3 py-2 text-sm rounded-md hover:text-emerald-900 hover:bg-white"><i class="fa-brands fa-github"></i> GitHub</a>
        
            </div>
          </div>
      </div>
  `;
  });
}
renderProject(projectData)

window.openModal = function (id) {
  document.getElementById(id).classList.remove("hidden")
}

window.closeModal = function (id) {
  document.getElementById(id).classList.add("hidden")
}

const projectCategoryForm = document.getElementById("project-category")

// Render project category buttons
categoryBtns.map((val, key) => {
  projectCategoryForm.innerHTML +=
    `
  <button name="category" value="${val.btnValue}" class="category-btn hover:cursor-pointer text-white border-1 border-emerald-500 px-3 py-1 rounded-xl text-xs">${val.btnContent}</button>
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

const skillsEl = document.getElementById("technicalSkills");
technicalSkills.map((val, key) => {
  skillsEl.innerHTML +=
    `
   <div class="w-80 md:w-1/4 mx-auto flex items-center justify-start my-5 bg-gray-800 px-3 py-2 rounded-md border-b-3 border-t-[0.5px] border-x-[0.5px] border-emerald-500">
      <div class="mx-2">
        <h5 class="font-medium text-lg text-emerald-500">${val.category}</h5>
        <p class="text-xs">${val.coreSkills}</p>
      </div>
    </div>
  `
})

const priceEl = document.getElementById("pricingPackages")

pricingPackages.map((val, key) => {
  priceEl.innerHTML +=
    `
  <div class="m-3 border shadow-md rounded-lg hover:scale-102 duration-100 p-5 ${val.id == 2 ? 'border-emerald-700' : 'border-emerald-500'} border-b-4 border-b-emerald-500 bg-gray-800">
    <img src="${val.imgPath}" class="h-10 mx-auto mb-3 brightness-0 invert-100" alt=${val.packageName}/>
    <h5 class="text-center text-lg md:text-2xl font-medium mb-3 text-emerald-500">${val.packageName}</h5>
    <div class="flex items-center justify-center mb-5">
      <button class="bg-emerald-500 text-white text-sm px-3 py-2 rounded-full mx-auto block">Starting at $${val.newPrice} / project</button>
    </div>
    <p class="mb-3">${val.description}</p>
    <div class="mb-3 flex flex-col md:flex-row justify-between">
      <p><i class="fa-solid fa-calendar-days"></i> ${val.timeFrame} business days</p>
      <p><i class="fa-solid fa-repeat"></i> ${val.revisions} free revisions</p>
    </div>
    <h6 class="font-medium">Key Features:</h6>
    <ul>
    ${val.keyFeatures.map(value =>
      `
      <li class="mb-1"><i class="fa-solid fa-check"></i> ${value}</li>
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
   <div class="border-b-3 border-r-3 border-l-1 border-t-1 border-emerald-300 p-5 rounded-md shadow-md bg-gray-800" key=${key}>
    <img src="./media/images/${val.thumbnailImg}" alt="${val.blogTitle}" class="rounded-lg mb-3" />
    <h6 class="mb-1 font-semibold md:text-xl">${val.blogTitle}</h6>
    <p class="text-base font-light mb-3">${val.blogDesc}</p>
    <a href="https://medium.com/@bilalmuhammadyousuf543/${val.mediumURL}" target="_blank" class="text-white bg-emerald-500 px-3 py-2 rounded-md hover:bg-emerald-800">
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
  <div class="mb-5 mb-5 p-5 rounded-md bg-gray-800 shadow-md text-white bg-gray-800 border-b-4 border-r-2 border-emerald-500" key=${key}>
    <h5 class="text-xl text-emerald-500 font-medium">${item.designation}</h5>
    <p class="font-bold">${item.companyName}</p>
    <p class="font-light">${item.duration}</p>
    <h6 class="font-medium">Roles & Responsibilites:</h6>
    <ul>
    ${item.jobDescription.map(val => `<li class="font-light text-sm mt-1">* ${val}</li>`).join("")}
    </ul>
  </div>
  `
))


const FaqEl = document.getElementById("ques-ans")
FAQs.map((val, key) => (
  FaqEl.innerHTML +=
  `
  <div class="w-80 mx-auto md:w-auto p-5 my-5 rounded-md border-b-3 border-t-[0.5px] border-x-[0.5px] border-emerald-500">
      <div class="flex justify-between toggle-faq hover:cursor-pointer">
          <h4 class="font-medium">${val.id}. ${val.ques}</h4>
          <i class="fa-solid fa-caret-down hover:cursor-pointer"></i>
      </div>
      <p class="mt-3 toggle-answer text-sm hidden">${val.answer}</p>
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


function printStars(num) {
  let fillStars = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`.repeat(num) + `<i class="fa-regular fa-star" style="color: gray;"></i>`.repeat(5 - num)
  return fillStars
}


const feedbackEl = document.getElementById("customerFeedback")
customerFeedback.map((val, key) => {
  feedbackEl.innerHTML +=
    `
  <div class="bg-gray-800 p-5 rounded-md mx-5 md:mx-0 hover:shadow-lg transition duration-300 bg-gray-800 border-b-4 border-r-2 border-emerald-500">
    <div class="flex flex-row mb-5 items-center">
      <div>
        <img src="./media/images/user.png" class="h-15 brightness-0 invert-100" alt=${val.clientName}/>
      </div>
      <div>
        <p class="mb-0">${val.clientName}</p>
        <p>${printStars(val.rating)}</p>
      </div>
    </div>
    <p>${val.feedbackMessage}</p>
  </div>
  `
})


// Send form data through email
$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    e.preventDefault()

    $.ajax({
      method: "POST",
      url: "https://formsubmit.co/ajax/bilalmuhammadyousuf543@gmail.com",
      dataType: "json",
      accepts: "application/json",
      data: $(this).serialize(),
      success: function (data) {
        $("#result").
          html("<i class='fa-solid fa-circle-check'></i> Your enquiry has been submitted.").
          css({ "background-color": "white", "color": "green" }).
          fadeIn(500).
          delay(1500).
          fadeOut(3000)
      },
      error: function (data) {
        $("#result").
          html("<i class='fa-solid fa-circle-check'></i> Something went wrong. Please try again later.").
          css({ "background-color": "white", "color": "red" }).
          fadeIn(500).
          delay(1500).
          fadeOut(3000)
      }
    })
  })
})