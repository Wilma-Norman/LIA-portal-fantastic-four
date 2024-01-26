let companyIdCounter = 1;

function findContacts(company, allCompanies) {
  return allCompanies
    .filter(
      (otherCompany) =>
        otherCompany.workplace === company.workplace && otherCompany.id !== company.id
    )
    .map((otherCompany) => otherCompany.contact);
}

function Contact(email, phone, linkedIn) {
  this.email = email;
  this.phone = phone;
  this.linkedIn = linkedIn;
}

function Company(
  name,
  surname,
  contact,
  workplace,
  skills,
  experienceYears,
  experienceCompany,
  location,
  remote,
  mentor
) {
  this.id = companyIdCounter++;
  this.name = name;
  this.surname = surname;
  this.contact = contact;
  this.workplace = workplace;
  this.skills = skills;
  this.experienceYears = experienceYears;
  this.experienceCompany = experienceCompany;
  this.location = location;
  this.remote = remote;
  this.mentor = mentor;
}

const contactOne = new Contact("appPower@mail.com", "123-456-789", "appPower.linkedIn.com");
const contactTwo = new Contact("codingFun@mail.com", "987-654-321", "CodingFun.linkedIn.com");
const contactThree = new Contact("FullStackAB@mail.com", "456-789-012", "FullStackAB.linkedIn.com");
const contactFour = new Contact(
  "BackEndRules@mail.com",
  "656-929-122",
  "BackEndRules.linkedIn.com"
);
const contactFive = new Contact("NodeCodeAB@mail.com", "888-712-166", "NodeCodeAB.linkedIn.com");
const contactSix = new Contact("BackEndToWin@mail.com", "010-736-001", "BackEndToWin.linkedIn.com");
const contactSeven = new Contact(
  "FrontForwardCoding@mail.com",
  "066-121-882",
  "FrontForwardCoding.linkedIn.com"
);
const contactEight = new Contact("GoCoding@mail.com", "332-669-212", "GoCoding.linkedIn.com");
const contactNine = new Contact("GitGood@mail.com", "071-229-165", "GitGood.linkedIn.com");
const contactTen = new Contact("HappyCoding@mail.com", "096-869-132", "HappyCoding.linkedIn.com");

// Company one
const companyOne = new Company(
  "Carin",
  "Carinsson",
  contactOne,
  "App Power",
  ["HTML", "CSS", "JavaScript"],
  "6 years",
  ["ICA", "Spotify"],
  "Stockholm",
  "Yes",
  "Yes"
);
// Company two

const companyTwo = new Company(
  "Isabel",
  "Isabelsson",
  contactTwo,
  "Coding Fun AB",
  ["Angular", "Next.js", "Python"],
  "2 years",
  ["Fifa", "Changemaker"],
  "Malmö",
  "Yes",
  "No"
);

// Company three

const companyThree = new Company(
  "Elisabeth",
  "Elisabethsson",
  contactThree,
  "FullStack AB",
  ["Json", "Vite", "Angular", "JavaScript", "Python"],
  "10 years",
  ["Coop", "Spotify"],
  "Skåne",
  "No",
  "Yes"
);

// Company four

const companyFour = new Company(
  "Darin",
  "Darinsson",
  contactFour,
  "BackEnd Rules",
  ["CSS", "HTML", "GIT", "problem solving"],
  "14 years",
  ["ClearChannel", "Future Games"],
  "Stockholm",
  "No",
  "Yes"
);

// Company five

const companyFive = new Company(
  "Saga",
  "Sagasson",
  contactFive,
  "NodeCode AB",
  ["MongoDB", "ExpressJS", "NodeJS", "ReactJS"],
  "8 years",
  ["Pong", "Nordea"],
  "Stockholm",
  "No",
  "No"
);

// Company six

const companySix = new Company(
  "Otto",
  "Ottosson",
  contactSix,
  "BackEndToWin AB",
  ["Java", "Python", "JavaScript", "C#"],
  "11 years",
  ["Cleas Ohlsson", "Disney"],
  "Umeå",
  "No",
  "Yes"
);

// Company seven

const companySeven = new Company(
  "Berit",
  "Beritsson",
  contactSeven,
  "FrontForward Coding",
  ["JavaScript", "TypeScript", "jQuery", "React"],
  "7 years",
  ["Game Stop", "Apple Music"],
  "Kalmar",
  "Yes",
  "No"
);

// Company eight

const companyEight = new Company(
  "Philip",
  "Philipsson",
  contactEight,
  "GoCoding",
  ["MongoDB", "NodeJS", "ReactJS"],
  "1 years",
  ["Lagerhaus"],
  "Stockholm",
  "Yes",
  "Yes"
);

// Company nine

const companyNine = new Company(
  "Kikki",
  "Kikkisson",
  contactNine,
  "GitGood",
  ["Python", "C++", "Swift", "Kotlin", "Mojo"],
  "10 years",
  ["Sats"],
  "Södertälje",
  "Yes",
  "Yes"
);

// Company ten

const companyTen = new Company(
  "Arnold",
  "Arnoldsson",
  contactTen,
  "HappyCoding AB",
  ["Python", "C++", "Swift", "Kotlin", "Mojo"],
  "4 years",
  ["Stockholm cityhall"],
  "Stockholm",
  "No",
  "Yes"
);

const companies = [];

function findContacts(company, allCompanies) {
  return allCompanies
    .filter(
      (otherCompany) =>
        otherCompany.workplace === company.workplace && otherCompany.id !== company.id
    )
    .map((otherCompany) => otherCompany.contact);
}

companies.push(
  companyOne,
  companyTwo,
  companyThree,
  companyFour,
  companyFive,
  companySix,
  companySeven,
  companyEight,
  companyNine,
  companyTen
);
companies.push(
  contactOne,
  contactTwo,
  contactThree,
  contactFour,
  contactFive,
  contactSix,
  contactSeven,
  contactEight,
  contactNine,
  contactTen
);

console.log(
  companies.map((company) => ({
    name: company.name,
    surname: company.surname,
    workplace: company.workplace,
    contacts: company.contacts.map((contact) => contact.email),
  }))
);
