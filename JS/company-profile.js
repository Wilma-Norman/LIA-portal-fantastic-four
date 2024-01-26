const mainProfileContent = document.querySelector(".profile-main-content");

//read up on event delegation
 // mainProfileContent.innerHTML =  ` 
    // `;

// ${selectedStudent[0].}
//func för att göra project content
//func för cv
// funk för keypoints på höger
//  --- letar efter och vad man erbjuder
//fixa bakgrund till datan

const createProfileElement = (profileId) => {
    console.log(typeof profileId)
    if (profileId == '' || profileId === null) {
        console.log("inget id")
        //should be its own func
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
        console.log("number är lika med int")
        const filteredStudent = students.filter((students) => students.id == profileId); 
        const selectedStudent = filteredStudent[0];
        $('.student-name').text(selectedStudent.name);
        $('.student-email').text(selectedStudent.contact.email);
        $('.student-linkedIn').text(selectedStudent.contact.linkedIn)
        generateLinks(filteredStudent)
    }
    
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const generateLinks = (student) => {
    console.log(student)
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


// returnerar null om inget id är i url'n
createProfileElement(getQueryParam('id')); 

$("#settings-button").click(() => {
    console.log('settings has been pressed');
});

$("#return-button").click(async () => {
    console.log('return button has been pressed');
});

//sparar gamla functionen som generarade hela profilen
// const createProfileElement = (profileId) => {
//     const selectedStudent = students.filter((students) => students.id == profileId); 
//     mainProfileContent.innerHTML = `
//         <a class="utility-button utility-button-left" id="return-button"> << Back </a>
//         <div class="profile-wrapper">
//             <a class="utility-button utility-button-right" id="settings-button">settings cog</a>
//             <div class="profile-card-wrapper">
//                 <div class="profile-card">
//                     <div class="profile-summary flex-column-center">
//                         <img src="../Image/temp-avatar-icon.png" alt="profile icon">
//                     <div class="profile-summary-wrapper">
//                         <p>${selectedStudent[0].name}</p>
//                         <div class="project-link">
//                             <div class="link-icon">
//                                 </div> ${selectedStudent[0].contact.email}
//                             </div>
//                         <div class="project-link">
//                             <div class="link-icon">
//                                 </div> ${selectedStudent[0].contact.linkedIn}
//                             </div>  
//                         </div>
//                     </div>
//                     <div class="profile-bio">
//                         <p class="title">Background</p>
//                         <p>Right now the fake link is absolutely positioned in the bottom right but i think a grid might work aswell, just put the link in the bottom right grid area and the rest can be text.</p>
//                         <div class="fake-link">fake link
//                         </div>
//                     </div>
//                 </div>
//                 <div class="link-container">
//                     <p class="title">Projects</p>
//                     <div class="project-link">
//                         <div class="link-icon"></div> > Project with ${selectedStudent[0].skills[0]} 
//                     </div>
//                     <div class="project-link">
//                         <div class="link-icon"></div> > Project with ${selectedStudent[0].skills[1]}
//                     </div>
//                     <div class="project-link">
//                         <div class="link-icon"></div> >
//                     </div>
//                 </div>
//                 <div class="link-container">
//                     <p class="title">Resume</p>
//                     <div class="project-link">
//                         <div class="link-icon"></div> this is another link
//                     </div>
//                 </div>
//             </div>
//             <div class="divider-container">
//                 <div class="divider"></div>
//             </div>  
//             <div class="container-text"> 
//                 <p class="title">What am i looking for?</p>
//                 <div class="project-link">
//                     <div class="link-icon"></div> sample text
//                 </div>
//                 <div class="project-link">
//                     <div class="link-icon"></div> sample text
//                 </div>
//                 <div class="project-link">
//                     <div class="link-icon"></div> sample text
//                 </div>
//                 <p class="title">What am i offering!</p>
//                 <div class="project-link">
//                     <div class="link-icon"></div> ${selectedStudent[0].skills[0]}
//                 </div>
//                 <div class="project-link">
//                     <div class="link-icon"></div> ${selectedStudent[0].skills[1]}
//                 </div>
//                 <div class="project-link">
//                     <div class="link-icon"></div> something else
//                 </div>
//             </div>
//         </div>
//     `;
// }