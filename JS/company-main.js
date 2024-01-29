let filteredData = [];

/*
Att Göra, 
--lägg till inklusiv och exklusiv filter.
så man kan slänga upp olika sök kriterier och man ser alla som matchar på någon (inklusiv)
eller bara de som stämmer in på exakt det man söker på (exklusiv)

--länka profilerna till profilsidan

--mobil versionen
*/

/*
This function loops through the list of all the students and creates small profiles on the 
company main page. its a for-of loop, it works the same as a regular for loop.
The reason i use it because it gives me easy access to the data that is inside the objects 
of the array. Then i use a JQuery selector to access class main-content in the HTML file and
everytime the loop goes to a new object(each student) it creates the html inside the append
method and appends it to the main comapny page. 
-------------------------------------------------------------------------------------------------
Basically it is used as an initial setup function to get the webpage to its "base" state.
And it is called att the bottom of this file 
*/
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

/*
This function is a bit more complex, the first thing it does is to empty the main content area of the
webpage to prepare it to display a filtered set of profiles. 
-----------------------------------------------------------------------------------------------------
then it uses a For-of loop and loops through each student in the array it receives from the function
called getFilteredContentList() and creates the profiles and sticks them to the main page 
*/
const renderFilteredItems = () => {
    $('.main-content').empty();
    for (const student of getFilteredContentList()) {
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
    if(filteredData.length === 0) {
        console.log("inget filter, visa alla igen.")
        createMainPageContent();
    }
}

/*
A small function that keeps all the functions that creates filters in one place.
its mostly redundant but it here to gather functions with similar purpose.
*/
const createFilterContent = () => {
    getLocationFilter()
    getEducationFilter()
}

/*
    This function is added to the filter items when they are generated and it handles the information
    delivery from the webpage to the javascript. it's most likely not super needed and or probably not necceserry
    but:

    Essentially if a checkbox is clicked and was not before (filter critera added) it checks that and 
    then it adds the parameter to the Array filteredData which keeps track of the critera that if being
    used to filter the students. the parameter looks like this vvv

    <input type="checkbox" value="${element.value}" id="${element.dataType}" onchange="handleRadioChange(this)"> 
    
    Or if when it checks if the checkbox was checked and it was (filter critera removed) it uses the method .splice()
    to remove the item from the Array filteredData by extracting the value from the parameter which is the text content 
    of the generated filter content and matching it to the object in the array and removing it.

    note; .splice() dont just "remove" the object, please read up on it seperatly.

    Then it calls the function renderFilteredItems(). 
*/
const handleRadioChange = (filterParam) => {
    if(filterParam.checked) {
        filteredData.push(filterParam);
    } else {
        filteredData.splice(filterParam.value, 1);
    }
    renderFilteredItems();
}

/*
    This function is the function that gathers the list from the Student list which has all of the student objects
    based on the list filteredData which is the list of values the user has selected from the generated filter content
    The function goes through the filteredData first based on each entry in that array it loops through the student 
    list, on each object in the students list it uses the datatype value in the objects in the filteredData array to easily
    find the correct information in the student object and then it compares the other value in the filteredData objects to 
    see which student objects should be in the new filtered list. if yes it adds it to the updatedList and lastly it returns 
    that list. 

    It is worth noting that this function gathers an inklusive list, so if any filter criteria matches a profile it gets
    added to the list, i am working on a function to have the option to only display the profile that matches all critera.
*/
const getFilteredContentList = () => {
    let updatedList = [];
    filteredData.forEach(element => {
        for (const student of students) {
            if(student[element.id] == element.value) {
                if(!updatedList.includes(student)){
                  updatedList.push(student);  
                }
                else {
                    console.log(`${student.name} finns redan dispalyed`)//here to log already displayed profiles
                }
            }
        }
    });
    return updatedList;
}

/*
    This function is a filter content generator, it loops through the student list and gathers all unique values of the
    location value the student objects have, and when it has all of them it generates the list all options in the 
    filter-container in the webpage, it is here the handleRadioChange() method is assigned to the checkboxes and it
    is here where they get all their information. the first part of the function is to gather the information and 
    the second part is responisble for generating the actual html content on the page. 

    the function takes the location of every student object in the array students and creates an object that stores
    two pieces of information, (value: student.location) AND (dataType: 'location') why it does this is to help other
    functions later. The function .some() works by taking a function or some code that works as a condition for 
    the comparison in the array. basically that method checks each item in the list with the condition. 
    for example is the number in the array higher than 10? if yes return true if no return false. --> 
    array with [7, 13, 25, 2, 3, 6] would return with the condition array[index] <  10 (less than 10)
    true, false, false, true, true, true, and that is how i look for unique values for the filters.
*/
const getLocationFilter = () => {
    let cityList = [];
    for (const student of students) {
        let cityListObj = {
            value: student.location,
            dataType: 'location'
        }
        if(!cityList.some(obj => obj.value === cityListObj.value)){
            cityList.push(cityListObj)
        }
    }
    cityList.sort((a, b) => a.value.localeCompare(b.value));
    if(cityList.length !== 0){
        $('.filter-container').append('<p class="filter-title">Locations</p><ul class="filter-list" id="locations"></ul>');
        cityList.forEach(element => {
            $('#locations').append(` 
            <li class="filter-item">
                <label for="${element.dataType}">
                    <input type="checkbox" value="${element.value}" id="${element.dataType}" onchange="handleRadioChange(this)"> 
                </label>
                ${element.value}
            </li>`);
        });
    }
}

/*
    his function is a filter content generator, and its function is the same as the getLocationFilter but for 
    education.
*/
const getEducationFilter = () => {
    let educationList = [];
    for (const student of students) {
        let educationListObj = {
            value: student.education,
            dataType: 'education'
        }
        if(!educationList.some(obj => obj.value === educationListObj.value)){
            educationList.push(educationListObj);
        }
    }
    educationList.sort((a, b) => a.value.localeCompare(b.value));
    if(educationList.length !== 0){
        $('.filter-container').append('<p class="filter-title">Education</p><ul class="filter-list" id="educations"></ul>');
        educationList.forEach(element => {
            $('#educations').append(` 
            <li class="filter-item">
                <label for="${element.dataType}"">
                    <input type="checkbox" value="${element.value}" id="${element.dataType}" onchange="handleRadioChange(this)"> 
                </label>
                ${element.value}
            </li>`);
        });
    }
}

$(".search-button").click(() => {// add check if screen width is changed and remove the classses if it gets over 900
    if($(window).width() < 900){
        $('.main-content-container, .search-bar-container').toggleClass('mobile-filter-anchor');
        $('.filter-container').toggleClass('visible-filter');
        $('.search-input').toggleClass('visible-mobile-search');
        $('#return-button').toggleClass('hidden');
        $('#search-icon').attr('src', ($('#search-icon').attr('src').endsWith('search.svg') ? '../Image/close.svg' : '../Image/search.svg'));
    }
})

/*
    these functions are responsible for the initial setup for the main page content.
*/
createFilterContent();
createMainPageContent();
