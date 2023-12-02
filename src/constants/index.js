import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  working,
  threejs,
  zairbnb,
  socialorbit,
  soundbeats,
  man,
  woman,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer Intern",
    company_name: "Sunrise Enterprises",
    icon: working,
    iconBg: "#383E56",
    date: "January 2023 - March 2023",
    points: [
      "Worked as a Frontend Developer during internship with Sunrise Enterprises.",
      "Contributed to the development of a multi-page website aimed at enhancing the company's online presence and user engagement. ",
      "Utilized HTML, Tailwind CSS, and React.js to create responsive and visually appealing web pages.",
      "Implemented performance optimizations to enhance the website's loading speed, resulting in a 30% reduction in page load times.",
    ],
  },
  {
    title: "Web Development Intern ",
    company_name: "Sain Informatix Pvt Ltd",
    icon: working,
    iconBg: "#E6DEDD",
    date: "August 2022- September 2022",
    points: [
      "Developed a dynamic full-stack Django web app showcasing diverse cryptocurrencies.",
      "Designed a responsive layout to capture user information including name, email, age, and phone number.",
      "Enhanced user experience by implementing form validation and real-time feedback using JavaScript. ",
      "Applied Bootstrap framework for consistent styling and optimal display across devices.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Smart Knower",
    icon: working,
    iconBg: "#383E56",
    date: "January 2022 - July 2022",
    points: [
      "Developed a user-friendly site using HTML, CSS, Bootstrap, and JavaScript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aniket proved me wrong.",
    name: "Harsit Kumar",
    designation: "Founder",
    company: "Stealth Startup",
    icon: man,
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aniket does.",
    name: "Aryan Singh",
    designation: "COO",
    company: "Stealth Startup",
    icon: man,
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Aniket optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Stealth Startup",
    icon: woman,
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sound~Beats",
    description:
      "E-Commerce platform that allows users to search and purchase from various categories of Headphones, providing a convenient and efficient solution for Headphone needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: soundbeats,
    source_code_link: "https://github.com/ani0ket/sound-beats",
    // live_link: "https://zairbnb-clone.vercel.app/",
  },
  {
    name: "Social Orbit",
    description:
      "Social Network application that enables users to create post with images, voice, or text, and ability to add other uers as friends fostering engagement within the platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: socialorbit,
    source_code_link: "https://github.com/ani0ket/Social-Orbit",
    // live_link: "https://zairbnb-clone.vercel.app/",
  },
  {
    name: "Zair-bnb",
    description:
      "A comprehensive travel booking platform that allows users to book hotels, and rental property, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
    ],
    image: zairbnb,
    source_code_link: "https://github.com/ani0ket/airbnb-clone",
    live_link: "https://zairbnb-clone.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
