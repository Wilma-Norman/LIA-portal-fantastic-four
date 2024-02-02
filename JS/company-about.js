const personData = [
{

    name: "Wilma Norman",
    role: "Coding",
    telephone: "111-111-1",
    city: "Berlin",
    mail: "wilma@mail.com",
    background: " Volutpat consequat mauris nunc congue nisi. Duis convallisinterdum velit laoreet id.Odio morbi quis commodo odio aenean sed adipiscing. Est lorem ipsum dolor sit amet. ",
    image: "../JS/Le-Voyage-de-Chihiro-de-Hayao-Miyazaki.jpg"
},
{
    name: "Tim Deckel",
    role: "Coding",
    telephone: "222-222-2",
    city: "Rome",
    mail: "tim@mail.com",
    background: " Volutpat consequat mauris nunc congue nisi. Duis convallisinterdum velit laoreet id.Odio morbi quis commodo odio aenean sed adipiscing. Est lorem ipsum dolor sit amet. ",
    image: "../JS/HERON_img_1.webp"
},

{
    name:"Bedir Göcmez",
    role: "Coding",
    telephone: "333-333-3",
    city: "Venedig", 
    mail: "bedir@mail.com",
    background: " Volutpat consequat mauris nunc congue nisi. Duis convallisinterdum velit laoreet id.Odio morbi quis commodo odio aenean sed adipiscing. Est lorem ipsum dolor sit amet. ",
    image: "../JS/1073011.jpg"
}, 

   { 
    
    name: "Lisette Svan",
    role: "Coding",
    telephone: "444-444-4",
    city: "Reykjavik",
    mail: "lisette@mail.com",
    background: " Volutpat consequat mauris nunc congue nisi. Duis convallisinterdum velit laoreet id.Odio morbi quis commodo odio aenean sed adipiscing. Est lorem ipsum dolor sit amet. ",
    image: "../JS/ca59a6071fb2dcf2e3a5f47432c21452.jpg"

}

]


const createFounderProfile = () => {
    for (let index = 0; index < personData.length; index++) {
        const person = personData[index];        
    
    $('.about-wraper').append(
        `
        <div class="card-profiles">
        <div class="profile-wraper-hero">
        <div class="profile-image-container">
        <img src="${person.image}" alt="Profile-icon" width="100" height="100">
        </div>
        <div class="profile-contact-container">
        <div class="info">
            <p class="tele-tag">${person.telephone}</p>
        </div>
        <div class="info">
            <p class="city-tag">${person.city}</p>
        </div>
        </div>
    </div>
    <div class="profile-wraper-text">
    <div class="profile-tagline">
        <p class="name-tag">${person.name}</p>
    </div>
    <div class="profile-tagline">
        <p class="role-tag">${person.role}</p>
    </div>
    <div class="profile-tagline">
            <p class="mail-tag">${person.mail}</p>
    </div>
    <div class="profile-background">
        <p class="background-tag">${person.background}</p>
    </div>
    </div>
    </div>
    </div>
    `
 );} 


}

createFounderProfile();


