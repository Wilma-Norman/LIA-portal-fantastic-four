const mainProfileContent = document.querySelector(".profile-main-content");

const createProfileElement = (profileId) => {
    if (profileId == '' || profileId === null) {
        $('#project-container').append(` 
            <div class="project-link">
                <div class="link-icon"></div>
                 > Example Project 
            </div>
        `);
        $('#resume-container').append(`
            <div class="project-link">
                <div class="link-icon"></div>
                 > John Does's Resume
            </div>
        `)
    }else if (/\d/.test(profileId)) {
        const filteredStudent = students.filter((students) => students.id == profileId); 
        const selectedStudent = filteredStudent[0];
        $('.student-name').text(selectedStudent.name);
        $('.student-email').text(selectedStudent.contact.email);
        $('.student-linkedIn').text(selectedStudent.contact.linkedIn)
        generateLinks(filteredStudent)
        //need a background func
        //need a func for keypoints
    }
    
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const generateLinks = (student) => {
    let skillList = student[0].skills;
    for (let index = 0; index < skillList.length; index++) {
        $('#project-container').append(` 
            <div class="project-link">
                <div class="link-icon"></div> > ${skillList[index]} Project
            </div>
        `);
            
    }
    $('#resume-container').append(` 
        <div class="project-link">
            <div class="link-icon"></div> ${student[0].name}'s Resume
        </div>
    `);
}



createProfileElement(getQueryParam('id')); 

$("#settings-button").click(() => {
    console.log('settings has been pressed');
});

$("#return-button").click(async () => {
    window.location.href = "company-main-page.html"
});