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

  console.log(allSectors);
  console.log(allCities);

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
                <img class="card-img" src="${internship.smallImage}" alt="" />
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
                          getLargeProfile(
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
