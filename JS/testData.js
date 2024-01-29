let studentIdCounter = 1;

class Contact {
  constructor(email, phone, linkedIn) {
    this.email = email;
    this.phone = phone;
    this.linkedIn = linkedIn;
  }
}

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
    isActive,
    receiver
  ) {
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
    this.chatHistory = [];
    this.isActive = isActive;
    this.receiver = receiver;
  }
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
  false,
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
  false,
  false
);

// Student three

const studentThree = new Student(
  "Anna",
  "Pannasson",
  "34",
  "Changemaker Educations",
  contactThree,
  "FullStack Developer",
  ["Json", "Vite", "Angular", "JavaScript", "Python"],
  "Luleå",
  "Yes",
  "No",
  false,
  false
);

// Student four

const studentFour = new Student(
  "Eric",
  "Jerkan",
  "20",
  "Changemaker Educations",
  contactFour,
  "Frontend Web Developer",
  ["CSS", "HTML", "GIT", "problem solving"],
  "Stockholm",
  "No",
  "Yes",
  false,
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
  ["MongoDB", "ExpressJS", "NodeJS", "ReactJS"],
  "Stockholm",
  "No",
  "No",
  false,
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
  ["Java", "Python", "JavaScript", "C#"],
  "Uppsala",
  "Yes",
  "Yes",
  false,
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
  ["JavaScript", "TypeScript", "jQuery", "React"],
  "Oslo",
  "Yes",
  "Yes",
  false,
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
  ["MongoDB", "NodeJS", "ReactJS"],
  "Kopenhagen",
  "Yes",
  "No",
  false,
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
  ["Python", "C++", "Swift", "Kotlin", "Mojo"],
  "Mora",
  "No",
  "Yes",
  false,
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
  ["Python", "C++", "Swift", "Kotlin", "Mojo"],
  "Stockholm",
  "No",
  "Yes",
  false,
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

///*Internships test data

// Internship Constructor
function Internship(
  title,
  companyName,
  companyEmail,
  city,
  startDate,
  endDate,
  remoteWork,
  requirements,
  expectations,
  companyInfo,
  smallImage,
  largeImage
) {
  this.id = nextId++;
  this.title = title;
  this.companyName = companyName;
  this.companyEmail = companyEmail;
  this.city = city;
  this.startDate = startDate;
  this.endDate = endDate;
  this.remoteWork = remoteWork;
  this.requirements = requirements;
  this.expectations = expectations;
  this.companyInfo = companyInfo;
  this.smallImage = smallImage;
  this.largeImage = largeImage;
  this.chatHistory = [];
  this.isActive = false;
  this.receiver = false;
}

// Static variables for Internship constructor
nextId = 100;
nextImg = 300;
cityIndex = 0;
cities = ["Stockholm", "Malmo", "Sundsvall", "Goteborg"];

// Creating 15 Internship Objects
const internships = [];

// Internship Objects
const internship1 = new Internship(
  "Software Developer Intern",
  "Tech Solutions Inc.",
  "info@techsolutions.com",
  "Stockholm",
  "2024-06-01",
  "2024-08-31",
  true,
  ["Programming skills", "Team collaboration"],
  "We expect the intern to actively participate in software development projects and collaborate with the team. We expect the intern to actively participate in software development projects and collaborate with the team.",
  {
    establishmentYear: 2005,
    numberOfEmployees: 150,
    sector: "Software",
    website: "https://www.techsolutions.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship2 = new Internship(
  "Marketing Intern",
  "Marketing Trends Ltd.",
  "info@marketingtrends.com",
  "Stockholm",
  "2024-07-01",
  "2024-09-30",
  false,
  ["Social media knowledge", "Content creation"],
  "We are looking for a creative marketing intern to help us with various marketing tasks. We are looking for a creative marketing intern to help us with various marketing tasks. We are looking for a creative marketing intern to help us with various marketing tasks.",
  {
    establishmentYear: 2010,
    numberOfEmployees: 80,
    sector: "Marketing",
    website: "https://www.marketingtrends.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship3 = new Internship(
  "Data Science Intern",
  "Data Insights AB",
  "info@datainsights.com",
  "Stockholm",
  "2024-06-15",
  "2024-09-15",
  true,
  ["Data analysis skills", "Statistical knowledge"],
  "We seek a data science intern to work on various data analysis projects. We seek a data science intern to work on various data analysis projects. We seek a data science intern to work on various data analysis projects. We seek a data science intern to work on various data analysis projects.",
  {
    establishmentYear: 2012,
    numberOfEmployees: 120,
    sector: "Data Science",
    website: "https://www.datainsights.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship4 = new Internship(
  "Graphic Design Intern",
  "Creative Designs Ltd.",
  "info@creativedesigns.com",
  "Stockholm",
  "2024-07-01",
  "2024-09-30",
  false,
  ["Adobe Creative Suite proficiency", "Creativity"],
  "We are looking for a graphic design intern to assist in creating visually appealing content. We are looking for a graphic design intern to assist in creating visually appealing content. We are looking for a graphic design intern to assist in creating visually appealing content.",
  {
    establishmentYear: 2008,
    numberOfEmployees: 90,
    sector: "Design",
    website: "https://www.creativedesigns.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship5 = new Internship(
  "Marketing Intern",
  "Innovative Marketing Solutions",
  "info@innovativemarketing.com",
  "Malmo",
  "2024-06-01",
  "2024-08-31",
  false,
  ["Social media marketing", "Content creation"],
  "We are searching for a marketing intern to assist in our innovative marketing campaigns. We are searching for a marketing intern to assist in our innovative marketing campaigns. We are searching for a marketing intern to assist in our innovative marketing campaigns. We are searching for a marketing intern to assist in our innovative marketing campaigns.",
  {
    establishmentYear: 2010,
    numberOfEmployees: 80,
    sector: "Marketing",
    website: "https://www.innovativemarketing.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship6 = new Internship(
  "Software Development Intern",
  "CodeCrafters Inc.",
  "info@codecrafters.com",
  "Malmo",
  "2024-07-01",
  "2024-09-30",
  true,
  ["Programming skills", "Problem-solving abilities"],
  "We are looking for a software development intern to join our coding team. We are looking for a software development intern to join our coding team. We are looking for a software development intern to join our coding team.",
  {
    establishmentYear: 2013,
    numberOfEmployees: 150,
    sector: "Software",
    website: "https://www.codecrafters.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship7 = new Internship(
  "Finance Intern",
  "MoneyMasters Ltd.",
  "info@moneymasters.com",
  "Malmo",
  "2024-06-15",
  "2024-08-15",
  false,
  ["Financial analysis skills", "Attention to detail"],
  "We seek a finance intern to work on various financial projects and analyses. We seek a finance intern to work on various financial projects and analyses. We seek a finance intern to work on various financial projects and analyses. We seek a finance intern to work on various financial projects and analyses.",
  {
    establishmentYear: 2011,
    numberOfEmployees: 110,
    sector: "Finance",
    website: "https://www.moneymasters.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship8 = new Internship(
  "Event Management Intern",
  "EventPros Organization",
  "info@eventpros.com",
  "Sundsvall",
  "2024-07-15",
  "2024-09-15",
  true,
  ["Organizational skills", "Creativity"],
  "We are searching for an event management intern to assist in planning and coordinating events. We are searching for an event management intern to assist in planning and coordinating events. We are searching for an event management intern to assist in planning and coordinating events. We are searching for an event management intern to assist in planning and coordinating events.",
  {
    establishmentYear: 2009,
    numberOfEmployees: 95,
    sector: "Event Management",
    website: "https://www.eventpros.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship9 = new Internship(
  "Environmental Science Intern",
  "EcoSolutions Corp.",
  "info@ecosolutions.com",
  "Sundsvall",
  "2024-06-01",
  "2024-08-31",
  false,
  ["Environmental research skills", "Sustainability knowledge"],
  "We are seeking an environmental science intern to contribute to our eco-friendly projects. We are seeking an environmental science intern to contribute to our eco-friendly projects. We are seeking an environmental science intern to contribute to our eco-friendly projects.",
  {
    establishmentYear: 2014,
    numberOfEmployees: 85,
    sector: "Environmental Science",
    website: "https://www.ecosolutions.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship10 = new Internship(
  "Customer Support Intern",
  "SupportHub Ltd.",
  "info@supporthub.com",
  "Sundsvall",
  "2024-07-01",
  "2024-09-30",
  true,
  ["Communication skills", "Problem-solving abilities"],
  "We are looking for a customer support intern to assist our clients and provide excellent service. We are looking for a customer support intern to assist our clients and provide excellent service. We are looking for a customer support intern to assist our clients and provide excellent service. We are looking for a customer support intern to assist our clients and provide excellent service.",
  {
    establishmentYear: 2016,
    numberOfEmployees: 120,
    sector: "Customer Support",
    website: "https://www.supporthub.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship11 = new Internship(
  "Fashion Design Intern",
  "StyleCraft Fashion",
  "info@stylecraft.com",
  "Sundsvall",
  "2024-06-15",
  "2024-08-15",
  false,
  ["Fashion design skills", "Creativity"],
  "We seek a fashion design intern to contribute to our latest fashion projects. We seek a fashion design intern to contribute to our latest fashion projects. We seek a fashion design intern to contribute to our latest fashion projects. We seek a fashion design intern to contribute to our latest fashion projects.",
  {
    establishmentYear: 2017,
    numberOfEmployees: 100,
    sector: "Fashion",
    website: "https://www.stylecraft.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship12 = new Internship(
  "Healthcare Intern",
  "WellnessCare Solutions",
  "info@wellnesscare.com",
  "Goteborg",
  "2024-07-15",
  "2024-09-15",
  true,
  ["Healthcare knowledge", "Empathy"],
  "We are searching for a healthcare intern to support our wellness programs. We are searching for a healthcare intern to support our wellness programs. We are searching for a healthcare intern to support our wellness programs. We are searching for a healthcare intern to support our wellness programs.",
  {
    establishmentYear: 2015,
    numberOfEmployees: 90,
    sector: "Healthcare",
    website: "https://www.wellnesscare.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship13 = new Internship(
  "Education Intern",
  "EduConnect Inc.",
  "info@educonnect.com",
  "Goteborg",
  "2024-06-01",
  "2024-08-31",
  false,
  ["Education background", "Teaching skills"],
  "We are seeking an education intern to assist in educational projects and programs. We are seeking an education intern to assist in educational projects and programs. We are seeking an education intern to assist in educational projects and programs. ",
  {
    establishmentYear: 2018,
    numberOfEmployees: 110,
    sector: "Education",
    website: "https://www.educonnect.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship14 = new Internship(
  "Agriculture Intern",
  "AgroTech Farms",
  "info@agrotech.com",
  "Goteborg",
  "2024-07-01",
  "2024-09-30",
  true,
  ["Agricultural knowledge", "Problem-solving abilities"],
  "We are looking for an agriculture intern to contribute to our innovative farming practices. We are looking for an agriculture intern to contribute to our innovative farming practices. We are looking for an agriculture intern to contribute to our innovative farming practices.",
  {
    establishmentYear: 2019,
    numberOfEmployees: 80,
    sector: "Agriculture",
    website: "https://www.agrotech.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

const internship15 = new Internship(
  "Human Resources Intern",
  "People Management Ltd.",
  "info@peoplemanagement.com",
  "Goteborg",
  "2024-06-15",
  "2024-08-15",
  false,
  ["Communication skills", "Recruitment knowledge"],
  "We are seeking an HR intern to support our human resources department in various tasks. We are seeking an HR intern to support our human resources department in various tasks. We are seeking an HR intern to support our human resources department in various tasks.",
  {
    establishmentYear: 2015,
    numberOfEmployees: 100,
    sector: "Human Resources",
    website: "https://www.peoplemanagement.com",
  },
  `https://picsum.photos/id/${nextImg++}/200/200`,
  `https://picsum.photos/id/${nextImg++}/400/250`
);

internships.push(
  internship1,
  internship2,
  internship3,
  internship4,
  internship5,
  internship6,
  internship7,
  internship8,
  internship9,
  internship10,
  internship11,
  internship12,
  internship13,
  internship14,
  internship15
);
console.log(internships);
