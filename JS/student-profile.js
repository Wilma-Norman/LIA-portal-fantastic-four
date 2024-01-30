const studentProfileContainer = document.querySelector(".student-profile-container");
const studentSkillsList = document.querySelector("#student-skills-list");
const studentSkillsContaiiner = document.querySelector(".student-skills-contaiiner");

const randomId = Math.floor(Math.random() * 10) + 1;
const loggedStudent = students.find((student) => student.id == randomId);

const renderSkills = () => {
  studentSkillsContaiiner.innerHTML = `
      <h3>My Professional Skills</h3>
      <ul id="student-skills-list">
          ${loggedStudent.skills
            .map((item) => {
              return `<li class="skill">${item}</li>`;
            })
            .join("")}
      </ul>
      `;
  console.log(studentSkillsContaiiner);
  console.log(loggedStudent.skills);
};
renderSkills();
const renderStudentProfile = () => {
  console.log(loggedStudent);
  studentProfileContainer.innerHTML += `
  <section class="student-profile">
  <div class="student-profile-left-content">
    <div class="img-and-short-info-container">
      <img src="../Image/temp-avatar-icon.png" alt="">
      <div class="student-short-info">
        <h3>${loggedStudent.name} ${loggedStudent.surname}</h3>
        <p class="student-linkedin"><i class="fa-solid fa-user-plus"></i>${loggedStudent.contact.linkedIn}</p>
        <p class="student-email"><i class="fa-solid fa-envelope"></i>${loggedStudent.contact.email}</p>
        <p class="student-phone"><i class="fa-solid fa-phone-volume"></i>${loggedStudent.contact.phone}</p>
      </div>
    </div>
    <div class="student-background">
      <h4>Background</h4>
      <p class="background-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore, explicabo quae commodi modi sit quasi magnam vel laudantium dignissimos iste tempore aut eos quam nihil odit praesentium cum nulla.</p>
    </div>
    <div class="student-project-container">
      <ul class="student-projects">
        <h4>My Projects</h4>
        <li class="student-project"><i class="fa-solid fa-folder"></i> <a href="#">First Project</a></li>
        <li class="student-project"><i class="fa-solid fa-folder"></i> <a href="#">Second Project</a></li>
        <li class="student-project"><i class="fa-solid fa-folder"></i> <a href="#">Third Project</a></li>
      </ul>
    </div>
    <div class="student-cv">
      <h4>My CV</h4>
      <a href="#"><i class="fa-regular fa-file-pdf"></i> Download CV</a>
    </div>
  </div>
  <div class="midle-line"></div>
  <div class="student-profile-right-content">
    <div class="what-search">
      <h4>What am I looking for?</h4>
      <div class="student-search-item"><i class="fa-solid fa-user-gear"></i>A mentor who will teach me a lot</div>
      <div class="student-search-item"><i class="fa-solid fa-building-shield"></i>A safe working environment</div>
      <div class="student-search-item"><i class="fa-solid fa-dumbbell"></i>Tasks to improve myself</div>
      <div class="student-search-item"><i class="fa-solid fa-people-group"></i>Friendly colleagues</div>
    </div>
    <div class="what-suggest">
      <h4>What do I promise?</h4>
      <div class="student-search-item"><i class="fa-solid fa-dumbbell"></i>Strong skills</div>
      <div class="student-search-item"><i class="fa-solid fa-graduation-cap"></i>Fast learning</div>
      <div class="student-search-item"><i class="fa-solid fa-check-double"></i>Responsibility</div>
      <div class="student-search-item"><i class="fa-solid fa-hands-praying"></i>To respect one's job</div>
    </div>
  </div>
</section>
    
    `;
};

renderStudentProfile();
