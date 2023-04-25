import { certifications } from "../assets/certifications/certifications";

export const CV = {
  header: {
    name: "Saidafzal Kholkhujaev",
    job: "Web Developer",
    about:
      "A self-taught programmer who is always excited about new experiences and knowledge. Mentor with experience in an individual approach to his business.",
    info: {
      address: "Uzbekistan, Fergana",
      phone: "+998 91 658 58 48",
      email: "saidafzal1209@gmail.com",
    },
  },
  education: {
    item: {
      title: "Osh Technological University",
      faculty: "Natural-technical",
      year: "2021 - 2026",
    },
  },
  experience: {
    item: {
      company: "Fantastic Academy",
      job: "Mentor",
      year: "Oct, 2021 - Mar, 2023",
      html: `"Fantastic Academy" is a training center in Fergana, which started its activity as a design studio in 2017. I worked here as a web programming mentor for more than a year and a half. During this period more than 30 students finished the course.
            <br />
            <b>Key Responsibilities:</b>
            <ul>
            <li>I taught skills such as HTML/CSS, JavaScript, and React.</li>
            <li>Conducted open classes at schools.</li>
            <li>Participated in administrative work.</li>
            </ul>
            <br />
            Graduated with the goal of working on real-world projects and building a career as a 
            Front-End/Full-Stack developer.`,
    },
  },
  skills: [
    "HTML",
    "CSS",
    "Sass",
    "Bootstrap",
    "TailwindCSS",
    "Javascript",
    "Typescript",
    "jQuery",
    "React",
    "Git",
    "GitHub",
    "Figma",
    "Photoshop",
  ],
  languages: ["Uzbek (Native)", "Russian (C1)", "English (B1)"],
  certifications: [
    {
      title: "HackerRank",
      name: "CSS certification",
      link: "https://www.hackerrank.com/certificates/13d3ff24eaaa",
      qr: certifications.hackerRank,
    },
    {
      title: "FreeCodeCamp",
      name: "Front End Development Libraries",
      link: "https://freecodecamp.org/certification/Saddy02/front-end-development-libraries",
      qr: certifications.freeCodeCamp,
    },
  ],
};
