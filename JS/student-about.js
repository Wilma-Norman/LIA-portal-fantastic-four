const createFounderProfile = () => {
    for (let index = 0; index < 4; index++) {        
    
    $('.about-wraper').append(
        `
        <div class="card-profiles">
        <div class="profile-wraper-hero">
        <div class="profile-image-container">
        <img src="../Image/temp-avatar-icon.png" alt="Profile-icon" width="100" height="100"> 
        </div>
        <div class="profile-contact-container">
        <div class="info">
            <p>Telephone</p>
        </div>
        <div class="info">
            <p>City</p>
        </div>
        <div class="info">
            <p>Mail</p>
        </div>
        </div>
    </div>
    <div class="profile-wraper-text">
    <div class="profile-tagline">
        <p>Name</p>
    </div>
    <div class="profile-tagline">
        <p>Roll</p>
    </div>
    <div class="profile-background">
        <p>Background</p>
        <p>Info Text</p>
    </div>
    </div>
    </div>
    </div>
    `
 );} 
}

createFounderProfile();


 $(".burger").click(() => {
      $(".main-navigations").toggleClass("active");
 }) 

// $(".burger").click(() => {
//     $(".main-navigations").toggle("active");
//     $(".burger > span").toggleClass('testClass');
// }) 




