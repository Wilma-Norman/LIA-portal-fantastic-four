/* DOM elements */
const filterWithSector = document.querySelector(".filter-with-sector");
const filterWithCity = document.querySelector(".filter-with-city");
const getFiltredList1Button = document.querySelector(".get-filtred-list-1");
const getFiltredList2Button = document.querySelector(".get-filtred-list-2");
const studentMainContent = document.querySelector(".student-main-content");
const studentSearchCompanyButton = document.querySelector(".student-search-company-button");
const studentSearchCompanyInput = document.querySelector(".student-search-company-input");

let updateInternshipsdata = internships;
const renderFilterList = (pInternshipList) => {
  // Create an array to hold all sector names
  const allSectors = [];
  const allCities = [];

  // Iterate over each internship object
  pInternshipList.forEach((internship) => {
    // Get the sector name of the internship
    const sector = internship.companyInfo.sector;
    const city = internship.city;

    // If the sector name is not already in the allSectors array, add it
    if (!allSectors.includes(sector)) {
      allSectors.push(sector);
    }
    // If the city name is not already in the allSectors array, add it
    if (!allCities.includes(city)) {
      allCities.push(city);
    }
  });

  // Render the results to the console
  filterWithSector.innerHTML += allSectors
    .map((sector) => {
      return `
        <div>
            <input type="checkbox" id="fullstack" name="${sector}" value="${sector}" />
            <label for="${sector}">${sector}</label>
        </div>
        `;
    })
    .join("");

  // Render the results to the console
  filterWithCity.innerHTML += allCities
    .map((city) => {
      return `
      <div>
          <input type="checkbox" id="fullstack" name="${city}" value="${city}" />
          <label for="${city}">${city}</label>
      </div>
      `;
    })
    .join("");
};
renderFilterList(updateInternshipsdata);

const renderInternshipList = (pInternshipList) => {
  const cardElements = pInternshipList
    .map((internship) => {
      return `
            <div class="internship-small-card">
                <img class="card-img" src="${
                  internship.smallImage ? internship.smallImage : "../Image/smallImg"
                }" alt="" />
                <div class="card-body">
                    <h4 class="internship-title">${internship.title}</h4>
                    <p class="internship-short-info">
                        ${
                          internship.expectations.length <= 150
                            ? internship.expectations
                            : internship.expectations.slice(0, 150)
                        }
                    </p>
                    <div class="date-and-button">
                        <p class="internship-date">${internship.startDate} - ${
        internship.endDate
      }</p>
                        <button onclick="
                        getInternshipLargeInfo(
                            ${internship.id}
                          )" class="get-long-info">View Internship</button>
                    </div>
                </div>
            <span onclick="internshipAddedFavorite(${internship.id})" class="heart add-favorite-${
        internship.id
      }"><i class="fa-solid fa-heart"></i></span>
            </div>
    `;
    })
    .join("");
  studentMainContent.innerHTML = cardElements;
};

const getLargeProfile = (pInternshipId) => {
  console.log(pInternshipId);
  console.log(addFavorite);
};

renderInternshipList(updateInternshipsdata);

// This function added internship to student's favorite list (for now just fake)
const internshipAddedFavorite = (pInternshipId) => {
  const addFavorite = document.querySelector(`.add-favorite-${pInternshipId}`);
  addFavorite.classList.toggle("added-favorite");
};

// When user write anything in the search input, This function work and get
// a new internship list for rendering. If there isn't internship, it give a message.
const getSearchedList = (pInternshipList) => {
  const targetWord = studentSearchCompanyInput.value;
  console.log("calisti");
  const searchTerm = targetWord.toLowerCase();

  // Filter process
  const filteredInternships = pInternshipList.filter((internship) =>
    internship.title.toLowerCase().includes(searchTerm)
  );
  if (filteredInternships.length > 0) {
    renderInternshipList(filteredInternships);
  } else {
    studentMainContent.innerHTML = `<p class="dont-find-internship"> Sorry, there is no internship program in this field yet.</p>`;
  }
};

studentSearchCompanyInput.addEventListener("input", () => {
  if (studentSearchCompanyInput.value == "") {
    renderInternshipList(updateInternshipsdata);
  } else {
    getSearchedList(updateInternshipsdata);
  }
});

const getInternshipLargeInfo = (pInternshipId) => {
  const targetInternship = updateInternshipsdata.find(
    (internship) => internship.id == pInternshipId
  );
  console.log(targetInternship);
  console.log("seeelamtargetInternship");
  studentMainContent.innerHTML = `
      <div class="internship-large-card">
            <img class="card-img" src="${
              targetInternship.largeImage ? targetInternship.largeImage : "../Image/largeImg"
            }" alt="" />
            <h4 class="internship-title">${targetInternship.title}</h4>
            <div class="card-body">
              <div class="left-content">
                <div class="left-first-content">
                  <p class="internship-long-info">
                    <b>Expectations:</b> ${targetInternship.expectations}
                  </p>
                  <p class="start-date"><b>Start Date:</b> ${targetInternship.startDate}</p>
                  <p class="end-date"><b>End Date:</b> ${targetInternship.endDate}</p>
                  <p class="remote-onsite"><b>Situation:</b> ${
                    targetInternship.remoteWork ? "Remote" : "Onsite"
                  }</p>
                  <p class="city"><b>City</b> ${targetInternship.city}</p>
                </div>
                <div class="requirements">
                  <b>requirements:</b>
                  <ul id="requirements-list" class="requirements-list">
                  ${targetInternship.requirements.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </div>
              </div>
              <div class="right-content">
                <div class="company-info">
                  <h4>Company Informations</h4>
                  <p class="company-name"><b>Company Name:</b> ${targetInternship.companyName}</p>
                  <p class="establishment-year"><b>Establishment Year:</b> ${
                    targetInternship.companyInfo.establishmentYear
                  }</p>
                  <p class="number-of-employees"><b>Number Of Employees:</b> ${
                    targetInternship.companyInfo.numberOfEmployees
                  }</p>
                  <p class="sector"><b>Sector:</b> ${targetInternship.companyInfo.sector}</p>
                  <p class="website"><b>Web Site:</b><a href="#"> ${
                    targetInternship.companyInfo.website
                  }</a></p>
                </div>
              </div>
            </div>
            <button onclick="goBack()" class="go-back"><i class="fa-solid fa-angles-left"></i> Back</button>
            <span onclick="internshipAddedFavorite(${targetInternship.id})"  class="add-favorite-${
    targetInternship.id
  } large heart "><i class="fa-solid fa-heart"></i></span>
          </div>
      `;
};

const goBack = () => {
  renderInternshipList(updateInternshipsdata);
};
