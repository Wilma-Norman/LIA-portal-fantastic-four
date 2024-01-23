let studentIdCounter = 1;
let contactIdCounter = 1;

function Contact(email, phone, linkedIn) {
    this.id = contactIdCounter++;
    this.email = email;
    this.phone = phone;
    this.linkedIn = linkedIn;
}

function Student(
    name,
    age,
    contact,
    education,
    skills,
    location,
    remote,
    mentor,
    isActive 
) {
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
    "Louise Appelsson",
    "22",
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
    "Bob Builder",
    "27",
    contactTwo,
    "FullStack Developer",
    ["Angular", "Next.js", "Python"],
    "Göteborg",
    "Yes",
    "No",
    false
);

  // Student three

  const studentThree = new Student(
    "Anna Pannasson",
    "34",
    contactThree,
    "FullStack Developer",
    ["Json","Vite","Angular", "JavaScript", "Python"],
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
    ["CSS","HTML","GIT","problem solving"],
    "Stockholm",
    "No",
    "Yes",
    false
);

// Student five

const studentFive = new Student(
    "Rob Robsson",
    "33",
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
    "Otto Risotto",
    "25",
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
    "Britta Karlsson",
    "19",
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
    "Patrik Star",
    "41",
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
    "Carlos Carlosson",
    "23",
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
    "Emma Femmasson",
    "27",
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

students.push(studentOne, studentTwo, studentThree, studentFour, studentFive, studentSix, studentSeven, studentEight, studentNine, studentTen);


console.log(students);
