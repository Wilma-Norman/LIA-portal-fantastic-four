const createMainPageContent = () => {
    for (const student of students) {
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
    let cityList = [];
    for (const student of students) {
        if(!cityList.includes(student.location)){
            cityList.push(student.location);
        }
    }
    cityList.sort((a, b) => a[0].localeCompare(b[0]));
    if(cityList.length !== 0){
        $('.filter-container').append('<p class="title">Locations</p><ul id="locations"></ul>');
        cityList.forEach(element => {
            $('#locations').append(` <li>${element}</li>`);
        });
    }
}

createFilterContent();
createMainPageContent();