let studentIdCounter = 1;

function findFriends(student, allStudents) {
  return allStudents.filter(otherStudent => otherStudent.school === student.school && otherStudent.id !== student.id);
}

function Contact(email, phone, linkedIn) {
<<<<<<< HEAD
    this.email = email;
    this.phone = phone;
    this.linkedIn = linkedIn;
}

function Student(
  name,
  surname, // Add this line
  age,
  school, // Add this line
  contact,
  education,
  skills,
  location,
  remote,
  mentor,
  isActive
)
 {
    this.id = studentIdCounter++;
    this.name = name;
    this.surname = surname;
    this.school = school;
    this.age = age;
    this.education = education;
    this.skills = skills;
    this.location = location;
    this.remote = remote;
    this.mentor = mentor;
    this.friends = [];
    this.chatHistory = {};
    this.isActive = isActive === true; 
=======
  this.id = contactIdCounter++;
  this.email = email;
  this.phone = phone;
  this.linkedIn = linkedIn;
}

function Student(name, age, contact, education, skills, location, remote, mentor, isActive) {
  this.id = studentIdCounter++;
  this.name = name;
  this.age = age;
  this.contact = contact;
  this.education = education;
  this.skills = skills;
  this.location = location;
  this.remote = remote;
  this.mentor = mentor;
  this.friends = [];
  this.chatHistory = {};
  this.isActive = isActive;
>>>>>>> 9676d0a56e224487c3ac16e0df7cdc28e1abeb1e
}

const contactOne = new Contact("louise.app@mail.com", "123-456-789", "louise.app.linkedIn.com");
const contactTwo = new Contact("Bob.builder@mail.com", "987-654-321", "Bob.builder.linkedIn.com");
const contactThree = new Contact("anna.panna@mail.com", "456-789-012", "anna.panna.linkedIn.com");
const contactFour = new Contact("eric.jerka@mail.com", "656-929-122", "eric.jerka.linkedIn.com");
const contactFive = new Contact("rob.robsson@mail.com", "888-712-166", "rob.robsson.linkedIn.com");
const contactSix = new Contact("otto.risotto@mail.com", "010-736-001", "otto.risotto.linkedIn.com");
const contactSeven = new Contact(
  "britta.karlsson@mail.com",
  "066-121-882",
  "britta.karlsson.linkedIn.com"
);
const contactEight = new Contact("patrik.star@mail.com", "332-669-212", "patrik.star.linkedIn.com");
const contactNine = new Contact(
  "carlos.carlotoni@mail.com",
  "071-229-165",
  "carlos.carlotoni.linkedIn.com"
);
const contactTen = new Contact("emma.femma@mail.com", "096-869-132", "emma.femma.linkedIn.com");

<<<<<<< HEAD
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
    "Code School",
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
    "Code Academy School",
    contactTwo,
    "FullStack Developer",
    ["Angular", "Next.js", "Python"],
    "Göteborg",
    "Yes",
    "No",
    false
=======
// Student one
const studentOne = new Student(
  "Louise Appelsson",
  "22",
  contactOne,
  "FrontEnd App Developer",
  ["HTML", "CSS", "JavaScript"],
  "Gävle",
  "Yes",
  "Yes",
  false
>>>>>>> 9676d0a56e224487c3ac16e0df7cdc28e1abeb1e
);

// Student two

<<<<<<< HEAD
  const studentThree = new Student(
    "Anna",
    "Pannasson",
    "34",
    "Happy Coding School",
    contactThree,
    "FullStack Developer",
    ["Json","Vite","Angular", "JavaScript", "Python"],
    "Luleå",
    "Yes",
    "No",
    false
=======
const studentTwo = new Student(
  "Bob Builder",
  "27",
  contactTwo,
  "FullStack Developer",
  ["Angular", "Next.js", "Python"],
  "Göteborg",
  "Yes",
  "No",
  false
>>>>>>> 9676d0a56e224487c3ac16e0df7cdc28e1abeb1e
);

// Student three

<<<<<<< HEAD
  const studentFour = new Student(
    "Eric",
    "Jerkan",
    "20",
    "Get Coding School",
    contactFour,
    "Frontend Web Developer",
    ["CSS","HTML","GIT","problem solving"],
    "Stockholm",
    "No",
    "Yes",
    false
=======
const studentThree = new Student(
  "Anna Pannasson",
  "34",
  contactThree,
  "FullStack Developer",
  ["Json", "Vite", "Angular", "JavaScript", "Python"],
  "Luleå",
  "Yes",
  "No",
  false
);

// Student four

const studentFour = new Student(
  "Eric Jerkan",
  "20",
  contactFour,
  "Frontend Web Developer",
  ["CSS", "HTML", "GIT", "problem solving"],
  "Stockholm",
  "No",
  "Yes",
  false
>>>>>>> 9676d0a56e224487c3ac16e0df7cdc28e1abeb1e
);

// Student five

const studentFive = new Student(
<<<<<<< HEAD
    "Rob",
    "Robsson",
    "33",
    "Coding4All School",
    contactFive,
    "Mern Developer",
    ["MongoDB","ExpressJS","NodeJS","ReactJS"],
    "Stockholm",
    "No",
    "No",
    false
=======
  "Rob Robsson",
  "33",
  contactFive,
  "Mern Developer",
  ["MongoDB", "ExpressJS", "NodeJS", "ReactJS"],
  "Stockholm",
  "No",
  "No",
  false
>>>>>>> 9676d0a56e224487c3ac16e0df7cdc28e1abeb1e
);

// Student six

const studentSix = new Student(
<<<<<<< HEAD
    "Otto",
    "Risotto",
    "25",
    "ChangeMaker School",
    contactSix,
    "BackEnd Developer",
    ["Java","Python","JavaScript","C#"],
    "Uppsala",
    "Yes",
    "Yes",
    false
=======
  "Otto Risotto",
  "25",
  contactSix,
  "BackEnd Developer",
  ["Java", "Python", "JavaScript", "C#"],
  "Uppsala",
  "Yes",
  "Yes",
  false
>>>>>>> 9676d0a56e224487c3ac16e0df7cdc28e1abeb1e
);

// Student seven

const studentSeven = new Student(
<<<<<<< HEAD
    "Britta",
    "Karlsson",
    "19",
    "Coding For Gamers School",
    contactSeven,
    "FrontEnd Developer",
    ["JavaScript","TypeScript","jQuery","React"],
    "Oslo",
    "Yes",
    "Yes",
    false
=======
  "Britta Karlsson",
  "19",
  contactSeven,
  "FrontEnd Developer",
  ["JavaScript", "TypeScript", "jQuery", "React"],
  "Oslo",
  "Yes",
  "Yes",
  false
>>>>>>> 9676d0a56e224487c3ac16e0df7cdc28e1abeb1e
);

// Student eight

const studentEight = new Student(
<<<<<<< HEAD
    "Patrik",
    "Star",
    "41",
    "ChangeMaker School",
    contactEight,
    "Mern Developer",
    ["MongoDB","NodeJS","ReactJS"],
    "Kopenhagen",
    "Yes",
    "No",
    false
=======
  "Patrik Star",
  "41",
  contactEight,
  "Mern Developer",
  ["MongoDB", "NodeJS", "ReactJS"],
  "Kopenhagen",
  "Yes",
  "No",
  false
>>>>>>> 9676d0a56e224487c3ac16e0df7cdc28e1abeb1e
);

// Student nine

const studentNine = new Student(
<<<<<<< HEAD
    "Carlos",
    "Carlosson",
    "23",
    "Happy Coding School",
    contactNine,
    "Senior AI Developer",
    ["Python", "C++","Swift","Kotlin","Mojo"],
    "Mora",
    "No",
    "Yes",
    false
=======
  "Carlos Carlosson",
  "23",
  contactNine,
  "Senior AI Developer",
  ["Python", "C++", "Swift", "Kotlin", "Mojo"],
  "Mora",
  "No",
  "Yes",
  false
>>>>>>> 9676d0a56e224487c3ac16e0df7cdc28e1abeb1e
);

// Student ten

const studentTen = new Student(
<<<<<<< HEAD
    "Emma",
    "Femmasson",
    "27",
    "Code cademy School",
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

students.push(studentOne, studentTwo, studentThree, studentFour, studentFive, studentSix, studentSeven, studentEight, studentNine, studentTen);
=======
  "Emma Femmasson",
  "27",
  contactTen,
  "Junior AI Developer",
  ["Python", "C++", "Swift", "Kotlin", "Mojo"],
  "Stockholm",
  "No",
  "Yes",
  false
);

const students = [];
const contacts = [
  contactOne,
  contactTwo,
  contactThree,
  contactFour,
  contactFive,
  contactSix,
  contactSeven,
  contactEight,
  contactNine,
  contactTen,
];
>>>>>>> 9676d0a56e224487c3ac16e0df7cdc28e1abeb1e

students.push(
  studentOne,
  studentTwo,
  studentThree,
  studentFour,
  studentFive,
  studentSix,
  studentSeven,
  studentEight,
  studentNine,
  studentTen
);

console.log(students.map(student => ({ name: student.name, surname: student.surname, school: student.school, friends: student.friends.map(friend => friend.name) })));
