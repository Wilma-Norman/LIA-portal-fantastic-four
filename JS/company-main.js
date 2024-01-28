let filteredData = [];

const createMainPageContent = () => {
    for (const student of students) {
        console.log(student)
        $('.main-content').append(`
            <div class="small-profile">
                <a href="company-profile.html?id=${student.id}"></a>
                <img id="profile-image" src="../Image/temp-avatar-icon.png" alt="profile icon"> 
                <div class="text-wrapper">
                    <p class="profile-name">${student.name}</p>
                    <p class="bio">${student.location}</p>
                </div>
            </div>
        `);
    }
}

const createFilterContent = () => {
    getLocationFilter()
    getEducationFilter()
}

const convertString = (String) => {
    let newString;
    return newString = String.replace(/ /g, '_');
}

const handleRadioChange = (filterParam) => {
    if(filterParam.checked) {
        filteredData.push(filterParam)
        console.log(`radion: ${filterParam.value} is checked`);
    } else {
        console.log(`radion: ${filterParam.value} is unchecked`);
    }
    console.log(filterParam)
}

const getLocationFilter = () => {
    let cityList = [];
    for (const student of students) {
        if(!cityList.includes(student.location)){
            cityList.push(student.location);
        }
    }
    cityList.sort((a, b) => a[0].localeCompare(b[0]));
    if(cityList.length !== 0){
        $('.filter-container').append('<p class="filter-title">Locations</p><ul class="filter-list" id="locations"></ul>');
        cityList.forEach(element => {
            $('#locations').append(` <li class="filter-item">
            <label for="${element}">
                <input type="checkbox" value="${element}" id="${element}" onchange="handleRadioChange(this)"> 
            </label>
            ${element}
            </li>`);
        });
    }
}

const getEducationFilter = () => {
    let educationList = [];
    for (const student of students) {
        if(!educationList.includes(student.education)){
            educationList.push(student.education);
        }
    }
    educationList.sort((a, b) => a[0].localeCompare(b[0]));
    if(educationList.length !== 0){
        $('.filter-container').append('<p class="filter-title">Education</p><ul class="filter-list" id="educations"></ul>');
        educationList.forEach(element => {
            $('#educations').append(` <li class="filter-item">
            <label>
                <input type="checkbox" value="${element}" id="${element}"> 
            </label>
            ${element}
            </li>`);
        });
    }
}

createFilterContent();
createMainPageContent();

