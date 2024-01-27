/* DOM elements */
const filterWithSector = document.querySelector(".filter-with-sector");
const filterWithCity = document.querySelector(".filter-with-city");
const getFiltredList1Button = document.querySelector(".get-filtred-list-1");
const getFiltredList2Button = document.querySelector(".get-filtred-list-2");

let updateInternshipsdata = internships;
const renderFilterList = () => {
  // Create an array to hold all sector names
  const allSectors = [];
  const allCities = [];

  // Iterate over each internship object
  updateInternshipsdata.forEach((internship) => {
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
renderFilterList();
