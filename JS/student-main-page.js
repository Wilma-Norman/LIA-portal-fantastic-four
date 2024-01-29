/* DOM elements */
const filterWithSector = document.querySelector(".filter-with-sector");
const filterWithCity = document.querySelector(".filter-with-city");
const getFiltredList1Button = document.querySelector(".get-filtred-list-1");
const getFiltredList2Button = document.querySelector(".get-filtred-list-2");
const studentMainContent = document.querySelector(".student-main-content");
const studentSearchCompanyButton = document.querySelector(".student-search-company-button");
const studentSearchCompanyInput = document.querySelector(".student-search-company-input");
const internshipModal = document.querySelector(".internship-modal");
const getFiltredList2 = document.querySelector(".get-filtred-list-2");
const getFiltredList1 = document.querySelector(".get-filtred-list-1");
const clearFiltersButton = document.querySelector(".clearFilters");

let updateInternshipsdata = internships;
let filters = {
  sector: [],
  city: [],
  situation: [],
};

const renderFilteredList = () => {
  let filteredList = updateInternshipsdata;

  if (filters.sector.length > 0) {
    filteredList = filteredList.filter((item) => {
      return filters.sector.some((secItem) => {
        return item.companyInfo.sector == secItem;
      });
    });
  }
  if (filters.city.length > 0) {
    filteredList = filteredList.filter((item) => {
      return filters.city.some((secItem) => {
        return item.city == secItem;
      });
    });
  }
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

  renderInternshipList(filteredList);
};

/* filter events */
getFiltredList2.addEventListener("click", renderFilteredList);
getFiltredList1.addEventListener("click", renderFilteredList);

// Ortak dinleyici fonksiyon
const checkboxListener = (event) => {
  const targetValue = event.target.value;
  const targetName = event.target.name;

  if (event.target.checked) {
    // Checkbox is checked, add to filters
    if (targetName == "sector" && !filters.sector.includes(targetValue)) {
      filters.sector.push(targetValue);
    } else if (targetName == "city" && !filters.city.includes(targetValue)) {
      filters.city.push(targetValue);
    } else if (targetName == "situation" && !filters.situation.includes(targetValue)) {
      filters.situation.push(targetValue);
    }
  } else {
    // Checkbox is unchecked, remove from filters
    if (targetName == "sector") {
      filters.sector = filters.sector.filter((secItem) => secItem !== targetValue);
    } else if (targetName == "city") {
      filters.city = filters.city.filter((cityItem) => cityItem !== targetValue);
    } else if (targetName == "situation") {
      filters.situation = filters.situation.filter((sitItem) => sitItem !== targetValue);
    }
  }
};

// Filtreleri temizleme fonksiyonu
const clearFilters = () => {
  // Checkbox'ları temizle
  document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Filtreleri sıfırla
  filters.sector = [];
  filters.city = [];
  filters.situation = [];

  renderInternshipList(updateInternshipsdata);
};

// Filtreleri temizle düğmesine tıklandığında clearFilters fonksiyonunu çağır
clearFiltersButton.addEventListener("click", clearFilters);

// Ortak sınıfa sahip checkbox'lar için dinleyici atama
const addEventListenerToCheckbox = () => {
  const filterCheckbox = document.querySelectorAll(".filter-checkbox");

  filterCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", checkboxListener);
  });
};

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
            <input type="checkbox" class="filter-checkbox ${sector}" name="sector" value="${sector}" />
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
          <input type="checkbox" class="filter-checkbox city-filter ${city}" name="city" value="${city}" />
          <label for="${city}">${city}</label>
      </div>
      `;
    })
    .join("");

  addEventListenerToCheckbox();
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

renderInternshipList(updateInternshipsdata);

// This function added internship to student's favorite list (for now just fake)
const internshipAddedFavorite = (pInternshipId) => {
  const addFavorite = document.querySelector(`.add-favorite-${pInternshipId}`);
  const addFavoriteOnLargeCard = document.querySelector(`#add-favorite-${pInternshipId}`);
  addFavorite.classList.toggle("added-favorite");
  addFavoriteOnLargeCard.classList.toggle("added-favorite");
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
  internshipModal.classList.add("open-modal");
  //   studentMainContent.innerHTML
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

const goBack = () => {
  //   renderInternshipList(updateInternshipsdata);
  internshipModal.classList.remove("open-modal");
};
internshipModal.addEventListener("click", goBack);
