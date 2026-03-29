import {
  projectData,
  pricingPackages,
  blogs,
  professionalExperience,
  FAQs,
  technicalSkills,
  customerFeedback,
  categoryBtns,
  allCertificates,
  educationalBackground
} from "./project_data.mjs";

const projectCardEl = document.getElementById("project-card")

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
renderProject(projectData.slice(0,3))

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



const priceEl = document.getElementById("pricingPackages")

pricingPackages.map((val, key) => {
  priceEl.innerHTML +=
    `
  <div class="m-3 border shadow-md rounded-2xl hover:scale-105 relative overflow-hidden duration-100 p-5 ${val.id == 2 ? 'pt-15 border-[#3C83F6]' : 'border-[#E1E7EF]'} bg-[#FFFFFF]">
    ${val.id == 2 ? '<p class="bg-[#3C83F6] text-white top-0 right-0 rounded-t-lg text-center py-2 mb-3 absolute w-full uppercase text-sm font-bold">Most Popular</p>' : ''}
    <h5 class="text-[#020817] font-bold text-lg md:text-xl">${val.packageName}</h5>
    <p class="mb-3 text-[#65758B] text-xs md:text-sm">${val.description}</p>
    <p class='my-5'><span class="font-extrabold text-2xl">$${val.newPrice} </span> <span class='text-[#65758B] text-xs md:text-sm'>/ project</span></p>
    <div class='flex flex-col space-y-2'>
      <p class='text-[#65758B] text-xs md:text-sm inline-flex items-center'><i class='fa-regular fa-clock mr-1 md:mr-3 text-[#3C83F6]'></i> ${val.timeFrame} business days</p>
      <p class='text-[#65758B] text-xs md:text-sm inline-flex items-center'><i class='fa-solid fa-rotate-left mr-1 md:mr-3 text-[#3C83F6]'></i> ${val.revisions} free revisions</p>
    </div>
    <hr class='text-[#E1E7EF] my-5'>
    <h6 class="font-semibold text-[#020817] mb-2">Key Features:</h6>
    <ul class='flex flex-col'>
    ${val.keyFeatures.map(value =>
      `
      <li class="mb-2 text-[#65758B] text-xs md:text-sm inline-flex items-center"><i class='fa-solid fa-check mr-1 md:mr-3 text-[#3C83F6]'></i> ${value}</li>
      `
    ).join("")}
    </ul>
    <a href='#contact' class='w-full block text-center text-sm border py-2 rounded-lg hover:cursor-pointer mt-5 ${val.id == 2 ? 'text-[#F9FAFB] bg-[#3C83F6] border-[#3C83F6]' : 'bg-[#F9FAFB] text-[#3C83F6] border-[#3C83F6]'}'>Get Started</a>
  </div>
  `
})

/*
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
*/

// Adding navbar toggle functionality

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("navbar-default").classList.toggle("hidden")
})


const experienceEl = document.getElementById("experience-section")

professionalExperience.map((item, key) => (
  experienceEl.innerHTML +=
  `
  <li class="mb-10 ms-8 bg-[#F9FAFB] p-5 rounded-xl shadow-sm hover:shadow-md ff-inter transition-all duration-300">
    <div class="absolute w-3 h-3 bg-[#3C83F6] rounded-full mt-1.5 -start-1.5 border border-[#3C83F6]"></div>
    <time class="text-xs font-semibold text-[#3C83F6]">${item.duration}</time>
    <h3 class="text-md md:text-lg font-bold text-[#020817]">${item.companyName}</h3>
    <p class="text-sm md:text-md font-medium text-[#3C83F6]/80">${item.designation}</p>
  </li>
  `
))

const educationEl = document.getElementById("education-section")

educationalBackground.map((item, key) => (
  educationEl.innerHTML +=
  `
  <li class="mb-10 ms-8 bg-[#F9FAFB] p-5 rounded-xl shadow-sm hover:shadow-md ff-inter transition-all duration-300">
    <div class="absolute w-3 h-3 bg-[#3C83F6] rounded-full mt-1.5 -start-1.5 border border-[#3C83F6]"></div>
    <time class="text-xs font-semibold text-[#3C83F6]">${item.duration}</time>
    <h3 class="text-md md:text-lg font-bold text-[#020817]">${item.instituteName}</h3>
    <p class="text-sm md:text-md font-medium text-[#3C83F6]/80">${item.level}</p>
  </li>
  `
))


const FaqEl = document.getElementById("ques-ans")
FAQs.map((val, key) => (
  FaqEl.innerHTML +=
  `
  <div class="w-80 mx-auto md:w-auto py-5 px-3 md:px-5 my-5 rounded-2xl bg-[#F9FAFB] border border-[#E1E7EF]">
      <div class="flex justify-between toggle-faq hover:cursor-pointer">
          <h4 class="font-medium text-xs md:text-base text-[#020817]">${val.id}. ${val.ques}</h4>
          <i class="fa-solid fa-caret-down hover:cursor-pointer"></i>
      </div>
      <p class="mt-3 toggle-answer text-[#65758B] text-xs md:text-sm hidden">${val.answer}</p>
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

/*
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
*/

// Certificate Section
const certificateEl = document.getElementById("certificate-section")
allCertificates.slice(0,3).map((val, key) => {
  certificateEl.innerHTML +=
    `
  <div class="mb-5 rounded-2xl bg-[#F9FAFB] border border-[#E1E7EF]">
    <img src="${val.imagePath}" class="md:h-75 fit-content md:w-100 object-fit-content"/>
    <p class="text-[#020817] text-sm font-bold pt-2 px-3 items-center"><i class='fa-solid fa-award mr-1 text-[#3C83F6]'></i> ${val.title}</p>
    <div class='flex justify-between items-center pt-1 pb-2 px-3'>
      <p class="text-xs text-[#65758B]">${val.issuingOrganization}</p>
      <p class="text-xs text-[#3C83F6] bg-[#3C83F6]/10 font-medium px-2 py-1 rounded-xl">${val.year}</p>
    </div>
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

const skillsEl = document.getElementById("technicalSkills");
technicalSkills.map((val, key) => {
  skillsEl.innerHTML +=
    `
   <div class="w-80 mx-auto md:w-2/5 my-5 bg-[#F9FAFB] p-10 rounded-md border-1 border-[#E1E7EF] ff-inter">
      <div>
        <div class="flex flex-row items-center">
          <div>
            ${val.imageAdd}
          </div>
          <div class='ml-2'>
            <h5 class="font-bold text-md text-[#020817]">${val.category}</h5>
            <p class="text-xs">${val.desc}</p>
          </div>
        </div>
        <hr class='text-gray-200 my-5'>
        <div class='grid grid-cols-3 gap-3 md:gap-8'>
          ${val.skilsList.map
          (prop => `
                      <div class='text-center bg-[#F9FAFB] rounded-sm shadow-md hover:cursor-pointer border-1 border-[#E1E7EF] p-2'>
                        <img src=${prop.imageRef} class='h-10 md:h-15 mx-auto' />
                        <span class='text-[10px] none md:text-xs'>${prop.label}</span>
                      </div>
            `).join("")}
          </div>
        </div>
    </div>
  `
})