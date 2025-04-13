import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I’m a third-year Computer Science student at Ho Chi Minh City University of Technology (HCMUT). I have a strong passion for front-end development, especially in building intuitive and responsive user interfaces. I enjoy working with UI/UX design and constantly exploring the latest trends in web technologies. With a solid foundation from my studies and hands-on experience from various projects, I aim to grow as a front-end developer and create impactful, user-focused web applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 – Dec 2024",
    role: "IVS Company",
    description: `Participated in the [ABD] Portal Customer Service project, where I learned how to develop applications
using ASP.NET MVC (C#), wrote unit test cases, and creating basic design documents from Figma.`,
    technologies: ["ASP.NET (C#)", "HTML", "CSS", "SQL"],
  },
];

export const PROJECTS = [
  {
    title: "HCMUT Printing Services SSPS",
    image: project1,
    description:
      "An intelligent printing system designed for students, enabling them to pre-book printing services conveniently. The system also supports print history tracking, allowing students to store and review their printing details.",
    technologies: ["ASP.NET (C#)", "HTML", "CSS", "Bootstrap", "SQL"],
    link: "https://github.com/AnhMinhTrinh/HCMUT_PrintingService_SSPS",
  },
  {
    title: "Food Order System",
    image: project2,
    description:
      "Designed and developed a food ordering system database to manage customer orders, with real-time admin tracking. Included features for categorizing orders, applying discounts, managing food quantities, and adjusting restaurant-specific prices.",
    technologies: ["EJS", "JavaScript", "HTML", "CSS", "Bootstrap", "MySQL"],
    link: "https://github.com/lamcao1206/food-order-system",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "HTML", "CSS", "TailwindCSS"],
    link: "https://github.com/AnhMinhTrinh/Portfolio_AnhMinh",
  },
  {
    title: "Website Selling Shoes",
    image: project4,
    description:
      "A shoe store website that shows valuable information about the shoes, where you can buy them and view store information.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://anhminhtrinh.github.io/Web_bangiay-demo/",
  },
];

export const CONTACT = {
  address:
    "TK 49/15 Vo Van Kiet Street, Cau Kho Ward, District 1, Ho Chi Minh City",
  phoneNo: "0776299559",
  email: "minh.trinhanh108@hcmut.edu.vn",
};
