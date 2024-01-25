const mainProfileContent = document.querySelector(".profile-main-content");

//read up on event delegation

// ${selectedStudent[0].}

const createProfileElement = (profileId) => {
    const selectedStudent = students.filter((students) => students.id == profileId); 
    mainProfileContent.innerHTML = `
        <a class="utility-button utility-button-left" id="return-button"> << Back </a>
        <div class="profile-wrapper">
            <a class="utility-button utility-button-right" id="settings-button">settings cog</a>
            <div class="profile-card-wrapper">
                <div class="profile-card">
                    <div class="profile-summary flex-column-center">
                    <img src="../Image/temp-avatar-icon.png" alt="profile icon">
                    <p>${selectedStudent[0].name}</p>
                    <div class="temp-link">
                        <div class="temp-icon"></div> ${selectedStudent[0].contact.email}
                    </div>
                    <div class="temp-link">
                        <div class="temp-icon"></div> ${selectedStudent[0].contact.linkedIn}
                    </div>
                </div>
                <div class="profile-bio">
                    <p class="title">Background</p>
                    <p>Right now the fake link is absolutely positioned in the bottom right but i think a grid might work aswell, just put the link in the bottom right grid area and the rest can be text.</p>
                    <div class="fake-link">fake link</div>
                </div>
                </div>
                <div class="link-container">
                    <p class="title">Projects</p>
                    <div class="temp-link">
                        <div class="temp-icon"></div> > Project with ${selectedStudent[0].skills[0]} 
                    </div>
                    <div class="temp-link">
                        <div class="temp-icon"></div> > Project with ${selectedStudent[0].skills[1]}
                    </div>
                    <div class="temp-link">
                        <div class="temp-icon"></div> >
                    </div>
                </div>
                <div class="link-container">
                    <p class="title">Resume</p>
                    <div class="temp-link">
                        <div class="temp-icon"></div> this is another link
                    </div>
                </div>
            </div>
            <div class="bob">
                <div class="rob"></div>
            </div>  
            <div class="container-text"> 
                <p class="title">What am i looking for?</p>
                <div class="temp-link">
                    <div class="temp-icon"></div> sample text
                </div>
                <div class="temp-link">
                    <div class="temp-icon"></div> sample text
                </div>
                <div class="temp-link">
                    <div class="temp-icon"></div> sample text
                </div>
                <p class="title">What am i offering!</p>
                <div class="temp-link">
                    <div class="temp-icon"></div> ${selectedStudent[0].skills[0]}
                </div>
                <div class="temp-link">
                    <div class="temp-icon"></div> ${selectedStudent[0].skills[1]}
                </div>
                <div class="temp-link">
                    <div class="temp-icon"></div> something else
                </div>
            </div>
        </div>
    `;
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

createProfileElement(getQueryParam('id'));

$("#settings-button").click(() => {
    console.log('settings has been pressed');
});

$("#return-button").click(async () => {
    console.log('return button has been pressed');
});