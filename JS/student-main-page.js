/* DOM elements */
// Selecting various DOM elements using querySelector
const filterWithSector = document.querySelector(".filter-with-sector"); // Container for sector filters
const filterWithCity = document.querySelector(".filter-with-city"); // Container for city filters
const getFiltredList1Button = document.querySelector(".get-filtred-list-1"); // Button to apply filters 1
const getFiltredList2Button = document.querySelector(".get-filtred-list-2"); // Button to apply filters 2
const studentMainContent = document.querySelector(".student-main-content"); // Container for displaying internship cards
const studentSearchCompanyButton = document.querySelector(".student-search-company-button"); // Search button
const studentSearchCompanyInput = document.querySelector(".student-search-company-input"); // Search input
const internshipModal = document.querySelector(".internship-modal"); // Modal for displaying detailed internship information
const getFiltredList2 = document.querySelector(".get-filtred-list-2"); // Additional button to apply filters
const getFiltredList1 = document.querySelector(".get-filtred-list-1"); // Additional button to apply filters
const clearFiltersButton = document.querySelector(".clearFilters"); // Button to clear applied filters
const mobliFilterIconContainer = document.querySelector(".hamburder-filter-icon");
const mobilderFilterIcon = document.querySelectorAll(".hamburder-filter-icon i");

const openCloseMobilFilterList = () => {
  const studentSidebar = document.querySelector(".student-sidebar");

  studentSidebar.classList.toggle("added-d-none");

  mobilderFilterIcon.forEach((item) => {
    if (item.classList.contains("fa-caret-down")) {
      item.classList.remove("fa-caret-down");
      item.classList.add("fa-caret-up");
    } else {
      item.classList.remove("fa-caret-up");
      item.classList.add("fa-caret-down");
    }
  });
};
mobliFilterIconContainer.addEventListener("click", openCloseMobilFilterList);

// Data and filter variables
let updateInternshipsdata = internships; // Initial internship data
let filters = {
  sector: [], // Array to store selected sectors for filtering
  city: [], // Array to store selected cities for filtering
  situation: [], // Array to store selected situations for filtering (onsite or remote)
};

// Function to render the filtered internship list based on applied filters
const renderFilteredList = () => {
  let filteredList = updateInternshipsdata;

  // Apply sector filter
  if (filters.sector.length > 0) {
    filteredList = filteredList.filter((item) => {
      return filters.sector.some((secItem) => {
        return item.companyInfo.sector == secItem;
      });
    });
  }

  // Apply city filter
  if (filters.city.length > 0) {
    filteredList = filteredList.filter((item) => {
      return filters.city.some((secItem) => {
        return item.city == secItem;
      });
    });
  }

  // Apply situation filter (onsite or remote)
  if (filters.situation.length > 0) {
    filteredList = filteredList.filter((item) => {
      return filters.situation.some((secItem) => {
        if (secItem == "onsite") {
          return item.remoteWork == false;
        } else {
          return item.remoteWork == true;
        }
      });
    });
  }

  // Render the filtered list
  renderInternshipList(filteredList);
  // When clicked Get filter List button, these codes close filter area..
  const studentSidebar = document.querySelector(".student-sidebar");
  console.log(studentSidebar.classList.contains("added-d-none"));
  if (!studentSidebar.classList.contains("added-d-none")) {
    studentSidebar.classList.add("added-d-none");
  }
  mobilderFilterIcon.forEach((item) => {
    if (item.classList.contains("fa-caret-down")) {
      item.classList.remove("fa-caret-down");
      item.classList.add("fa-caret-up");
    } else {
      item.classList.remove("fa-caret-up");
      item.classList.add("fa-caret-down");
    }
  });
};

/* Filter events */
getFiltredList2.addEventListener("click", renderFilteredList);
getFiltredList1.addEventListener("click", renderFilteredList);

// Common listener function for checkboxes
const checkboxListener = (event) => {
  const targetValue = event.target.value;
  const targetName = event.target.name;

  // Check if checkbox is checked, then add to filters
  if (event.target.checked) {
    if (targetName == "sector" && !filters.sector.includes(targetValue)) {
      filters.sector.push(targetValue);
    } else if (targetName == "city" && !filters.city.includes(targetValue)) {
      filters.city.push(targetValue);
    } else if (targetName == "situation" && !filters.situation.includes(targetValue)) {
      filters.situation.push(targetValue);
    }
  } else {
    // If unchecked, remove from filters
    if (targetName == "sector") {
      filters.sector = filters.sector.filter((secItem) => secItem !== targetValue);
    } else if (targetName == "city") {
      filters.city = filters.city.filter((cityItem) => cityItem !== targetValue);
    } else if (targetName == "situation") {
      filters.situation = filters.situation.filter((sitItem) => sitItem !== targetValue);
    }
  }
};

// Function to clear all applied filters
const clearFilters = () => {
  // Uncheck all checkboxes
  document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Reset filters
  filters.sector = [];
  filters.city = [];
  filters.situation = [];

  // Render the full internship list
  renderInternshipList(updateInternshipsdata);
};

// Attach clearFilters function to clearFiltersButton click event
clearFiltersButton.addEventListener("click", clearFilters);

// Add checkbox change event listener to checkboxes with class "filter-checkbox"
const addEventListenerToCheckbox = () => {
  const filterCheckbox = document.querySelectorAll(".filter-checkbox");
  filterCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", checkboxListener);
  });
};

// Function to render filter options based on the internship list
const renderFilterList = (pInternshipList) => {
  // Arrays to hold unique sector and city names
  const allSectors = [];
  const allCities = [];

  // Iterate over each internship object
  pInternshipList.forEach((internship) => {
    // Get sector and city names
    const sector = internship.companyInfo.sector;
    const city = internship.city;

    // Add unique sector names to allSectors array
    if (!allSectors.includes(sector)) {
      allSectors.push(sector);
    }
    // Add unique city names to allCities array
    if (!allCities.includes(city)) {
      allCities.push(city);
    }
  });

  // Render sector filter options
  filterWithSector.innerHTML += allSectors
    .map((sector) => {
      return `
        <div>
            <input type="checkbox" class="filter-checkbox ${sector}" name="sector" value="${sector}" />
            <label for="${sector}">${sector}</label>
        </div>
        `;
    })
    .join("");

  // Render city filter options
  filterWithCity.innerHTML += allCities
    .map((city) => {
      return `
      <div>
          <input type="checkbox" class="filter-checkbox city-filter ${city}" name="city" value="${city}" />
          <label for="${city}">${city}</label>
      </div>
      `;
    })
    .join("");

  // Add event listener to checkboxes
  addEventListenerToCheckbox();
};

// Render filter options based on initial internship data
renderFilterList(updateInternshipsdata);

// Function to render the list of internships based on the provided list
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
                    <p class="intern

ship-short-info">
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

// Render initial internship list
renderInternshipList(updateInternshipsdata);

// Function to add internship to the student's favorite list
const internshipAddedFavorite = (pInternshipId) => {
  const addFavorite = document.querySelector(`.add-favorite-${pInternshipId}`);
  const addFavoriteOnLargeCard = document.querySelector(`#add-favorite-${pInternshipId}`);
  addFavorite.classList.toggle("added-favorite");
  addFavoriteOnLargeCard.classList.toggle("added-favorite");
};

// Function to get a new internship list based on user's search input
const getSearchedList = (pInternshipList) => {
  const targetWord = studentSearchCompanyInput.value;
  const searchTerm = targetWord.toLowerCase();

  // Filter internships based on search term
  const filteredInternships = pInternshipList.filter((internship) =>
    internship.title.toLowerCase().includes(searchTerm)
  );

  // Render the filtered list or display a message if no internships found
  if (filteredInternships.length > 0) {
    renderInternshipList(filteredInternships);
  } else {
    studentMainContent.innerHTML = `<p class="dont-find-internship"> Sorry, there is no internship program in this field yet.</p>`;
  }
};

// Attach input event listener to search input
studentSearchCompanyInput.addEventListener("input", () => {
  // If search input is empty, render the full internship list; otherwise, get searched list
  if (studentSearchCompanyInput.value == "") {
    renderInternshipList(updateInternshipsdata);
  } else {
    getSearchedList(updateInternshipsdata);
  }
});

// Function to get and display detailed information about a specific internship
const getInternshipLargeInfo = (pInternshipId) => {
  // Find the internship with the given id
  const targetInternship = updateInternshipsdata.find(
    (internship) => internship.id == pInternshipId
  );

  // Open the internship modal and populate it with detailed information
  internshipModal.classList.add("open-modal");
  internshipModal.innerHTML = `
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
              <div class="requirements">
                  <b>requirements:</b>
                  <ul id="requirements-list" class="requirements-list">
                  ${targetInternship.requirements.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </div>
            <button onclick="goBack()" class="go-back"><i class="fa-solid fa-angles-left"></i> Close</button>
            <span onclick="internshipAddedFavorite(${
              targetInternship.id
            })" class="large heart"  id="add-favorite-${
    targetInternship.id
  }"><i class="fa-solid fa-heart"></i></span>
          </div>
      `;
};

// Function to close the internship modal
const goBack = () => {
  internshipModal.classList.remove("open-modal");
};

// Attach click event listener to the internship modal to close it
window.onclick = function (event) {
  if (event.target == internshipModal) {
    goBack();
  }
};

console.log("hersey yolunda");
