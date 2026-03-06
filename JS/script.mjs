import {
  projectData,
  pricingPackages,
  blogs,
  professionalExperience,
  FAQs,
  technicalSkills,
  customerFeedback,
  categoryBtns,
  allCertificates
} from "./project_data.mjs";

const projectCardEl = document.getElementById("project-card")

function renderProject(projects) {
  projectCardEl.innerHTML = ''
  return projects.forEach((val, index) => {
    const modalId = `modal-${index}`;
    projectCardEl.innerHTML += `
      <div class="rounded-xl border-b-4 border-r-2 border-t-1 border-l-1 border-emerald-500 shadow-md mb-5 px-5 py-5 w-80 md:w-auto mx-auto bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img src="${val.projectmageSrc}" alt="${val.projectName}" class="rounded-md w-full object-cover transition-transform duration-300 hover:scale-105" />
            <div class="flex flex-row items-center justify-between pt-3 mb-3">
                <h5 class="text-md md:text-xl font-semibold">${val.projectName}</h5>
            </div>
            <div>
              <p class="mb-4 text-gray-300 leading-relaxed text-sm">${val.desc}</p>
              <p class="mb-3">${val.technology.map(item => `<button class="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md text-xs font-medium">${item}</button>`).join(" ")}</p>
              ${val.websiteURL ? `<a href="${val.websiteURL}" target="_blank" class="bg-blue-600 text-white px-3 py-2 text-sm rounded-md hover:bg-blue-700 transition"><i class="fa-solid fa-globe"></i> Website</a>` : `` }
              <a href="${val.githubURL}" target="_blank" class="bg-gray-700 text-white px-3 py-2 text-sm rounded-md hover:bg-gray-800 transition"><i class="fa-brands fa-github"></i> GitHub</a> 
              ${val.videoURL ? `<a href="${val.videoURL}" target="_blank" class="bg-red-600 text-white px-3 py-2 text-sm rounded-md hover:bg-red-700 transition"><i class="fa-brands fa-youtube"></i> Demo</a>` : `` }
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
        <h5 class="font-medium text-lg text-emerald-500 mb-2">${val.category}</h5>
        <div class="flex flex-wrap gap-2">
          ${val.coreSkills.split(",").map(skill => 
            `<span class="bg-emerald-500/20 text-light px-2 py-1 rounded text-xs">${skill.trim()}</span>`
          ).join("")}
      </div>
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
  <li class="mb-10 ms-8">
    <span class="absolute flex items-center justify-center size-6  rounded-full -start-3 ring-8 ring-buffer bg-emerald-900">
      <svg class="w-3 h-3 text-fg-brand-strong" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
      </svg>
    </span>
    <time class="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">${item.duration}</time>
    <h3 class="text-lg font-semibold text-heading text-emerald-500">${item.companyName}</h3>
    <p class="text-body">${item.designation}</p>
  </li>
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
  <div key=${key} class="bg-gray-800 p-5 rounded-md mx-5 md:mx-0 hover:shadow-lg transition duration-300 bg-gray-800 border-b-4 border-r-2 border-emerald-500">
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


// Certificate Section
const certificateEl = document.getElementById("certificate-section")
allCertificates.map((val, key) => {
  certificateEl.innerHTML +=
    `
  <div class="mb-5">
    <img src="${val.imagePath}" class="rounded-md border-2 border-white-500 md:h-75 fit-content md:w-100 object-fit-content"/>
    <p class="font-semibold mt-1"><i class="fa-solid fa-certificate"></i> ${val.title}</p>
    <p class="text-sm text-gray-400">${val.issuingOrganization} • ${val.year}</p>
  </div>
  `
})

// Send form data through email
$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    e.preventDefault()

    // Disable button on click
    const submitBtn = $("#enquiry-btn");

    // Disable button & Change text
    submitBtn.prop("disabled", true).text("Sending....")
    $.ajax({
      method: "POST",
      url: "https://formsubmit.co/ajax/bilalmuhammadyousuf543@gmail.com",
      dataType: "json",
      accepts: "application/json",
      data: $(this).serialize(),
      success: function (data) {
        submitBtn.html("<svg class='mr-3 size-5 animate-spin' viewBox='0 0 24 24'></svg>")
        $("#result").
          html("<i class='fa-solid fa-circle-check'></i> Your enquiry has been submitted.").
          css({ "background-color": "white", "color": "green" }).
          fadeIn(500).
          delay(1500).
          fadeOut(3000)

          // Reset form
          $("#contact-form")[0].reset()

      },
      error: function (data) {
        $("#result").
          html("<i class='fa-solid fa-circle-check'></i> Something went wrong. Please try again later.").
          css({ "background-color": "white", "color": "red" }).
          fadeIn(500).
          delay(1500).
          fadeOut(3000)
      },
      complete: function () {
        submitBtn.prop("disabled", false).html("<i class='fas fa-paper-plane'></i> Submit Enquiry")
      }
    })
  })
})