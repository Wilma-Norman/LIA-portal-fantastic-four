let studentIdCounter = 1;

function findFriends(student, allStudents) {
  return allStudents.filter(
    otherStudent =>
      otherStudent.school === student.school && otherStudent.id !== student.id
  );
}

class Contact {
  constructor(email, phone, linkedIn) {
    this.email = email;
    this.phone = phone;
    this.linkedIn = linkedIn;
  }
}

<<<<<<< HEAD
class Student {
  constructor(
    name,
    surname,
    age,
    school,
    contact,
    education,
    skills,
    location,
    remote,
    mentor,
    isActive
  ) {
=======
function Student(
  name,
  surname, 
  age,
  school, 
  contact,
  education,
  skills,
  location,
  remote,
  mentor,
  isActive
)
 {
>>>>>>> 73fc2a3 (made changes and more id´s to both profiles)
    this.id = studentIdCounter++;
    this.name = name;
    this.surname = surname;
    this.school = school;
    this.age = age;
    this.contact = contact;
    this.education = education;
    this.skills = skills;
    this.location = location;
    this.remote = remote;
    this.mentor = mentor;
    this.friends = [];
    this.chatHistory = {};
    this.isActive = isActive === true;
  }
}

   const contactOne = new Contact("louise.app@mail.com", "123-456-789", "louise.app.linkedIn.com");
   const contactTwo = new Contact("Bob.builder@mail.com", "987-654-321", "Bob.builder.linkedIn.com");
   const contactThree = new Contact("anna.panna@mail.com", "456-789-012", "anna.panna.linkedIn.com");
   const contactFour = new Contact("eric.jerka@mail.com", "656-929-122", "eric.jerka.linkedIn.com");
   const contactFive = new Contact("rob.robsson@mail.com", "888-712-166", "rob.robsson.linkedIn.com");
   const contactSix = new Contact("otto.risotto@mail.com", "010-736-001", "otto.risotto.linkedIn.com");
   const contactSeven = new Contact("britta.karlsson@mail.com", "066-121-882", "britta.karlsson.linkedIn.com");
   const contactEight = new Contact("patrik.star@mail.com", "332-669-212", "patrik.star.linkedIn.com");
   const contactNine = new Contact("carlos.carlotoni@mail.com", "071-229-165", "carlos.carlotoni.linkedIn.com");
   const contactTen = new Contact("emma.femma@mail.com", "096-869-132", "emma.femma.linkedIn.com");


   // Student one
   const studentOne = new Student(
    "Louise",
    "Appelsson",
    "22",
    "Changemaker Educations",
    contactOne,
    "FrontEnd App Developer",
    ["HTML", "CSS", "JavaScript"],
    "Gävle",
    "Yes",
    "Yes",
    false
);

  // Student two

  const studentTwo = new Student(
    "Bob",
    "Builder",
    "27",
    "Changemaker Educations",
    contactTwo,
    "FullStack Developer",
    ["Angular", "Next.js", "Python"],
    "Göteborg",
    "Yes",
    "No",
    false
  );


// Student two

  const studentThree = new Student(
    "Anna",
    "Pannasson",
    "34",
    "Changemaker Educations",
    contactThree,
    "FullStack Developer",
    ["Json","Vite","Angular", "JavaScript", "Python"],
    "Luleå",
    "Yes",
    "No",
    false
);

// Student two

  const studentFour = new Student(
    "Eric",
    "Jerkan",
    "20",
    "Changemaker Educations",
    contactFour,
    "Frontend Web Developer",
    ["CSS","HTML","GIT","problem solving"],
    "Stockholm",
    "No",
    "Yes",
    false
);

// Student five

const studentFive = new Student(
    "Rob",
    "Robsson",
    "33",
    "Changemaker Educations",
    contactFive,
    "Mern Developer",
    ["MongoDB","ExpressJS","NodeJS","ReactJS"],
    "Stockholm",
    "No",
    "No",
    false
);

// Student six

const studentSix = new Student(
    "Otto",
    "Risotto",
    "25",
    "Changemaker Educations",
    contactSix,
    "BackEnd Developer",
    ["Java","Python","JavaScript","C#"],
    "Uppsala",
    "Yes",
    "Yes",
    false
);

// Student seven

const studentSeven = new Student(
    "Britta",
    "Karlsson",
    "19",
    "Changemaker Educations",
    contactSeven,
    "FrontEnd Developer",
    ["JavaScript","TypeScript","jQuery","React"],
    "Oslo",
    "Yes",
    "Yes",
    false
);

// Student eight

const studentEight = new Student(
    "Patrik",
    "Star",
    "41",
    "Changemaker Educations",
    contactEight,
    "Mern Developer",
    ["MongoDB","NodeJS","ReactJS"],
    "Kopenhagen",
    "Yes",
    "No",
    false
);

// Student nine

const studentNine = new Student(
    "Carlos",
    "Carlosson",
    "23",
    "Changemaker Educations",
    contactNine,
    "Senior AI Developer",
    ["Python", "C++","Swift","Kotlin","Mojo"],
    "Mora",
    "No",
    "Yes",
    false
);

// Student ten

const studentTen = new Student(
    "Emma",
    "Femmasson",
    "27",
    "Changemaker Educations",
    contactTen,
    "Junior AI Developer",
    ["Python", "C++","Swift","Kotlin","Mojo"],
    "Stockholm",
    "No",
    "Yes",
    false
);

const students = [];
const contacts = [contactOne, contactTwo, contactThree, contactFour, contactFive, contactSix, contactSeven, contactEight, contactNine, contactTen];

students.forEach(student => {
  student.friends = findFriends(student, students);
});

console.log(students.map(student => ({ name: student.name, surname: student.surname, school: student.school, friends: student.friends.map(friend => friend.name) })));
