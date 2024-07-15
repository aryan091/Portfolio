import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 6 months of hands-on experience, I have honed my skills in front-end technologies like React , as well as back-end technologies like Node.js, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 6 months of professional experience, I have worked with a variety of technologies, including React, Express.js, Node.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Intern",
    company: "Cuvette",
    description: `I have mastered core concepts of React.js, such as components, JSX, state management, and event handling, enabling the creation of dynamic user interfaces. I have acquired Node.js expertise for server-side development, focusing on asynchronous programming, module handling, file I/O, and integrating external libraries and APIs using npm. Additionally, I am skilled in developing server-side applications with Express.js, managing routing, authentication, and session management. My experience extends to working with MongoDB, where I perform CRUD operations, and efficiently manage collections and documents in a NoSQL database environment.`,
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB","Express.js", "Node.js","API","HTML","CSS","Github"]
  },
  {
    year: "2021 - 2022",
    role: "System Engineer",
    company: "Infosys",
    description: `In my role within the Finacle Unit, I focused on server maintenance and customization of Finacle products to meet specific needs. My responsibilities included ensuring high availability of services for users through effective server management and system performance monitoring. Additionally, I handled system upgrades, patches.`,
    technologies: ["Linux", "Java", "HTML", "CSS"],
  }
];

export const PROJECTS = [
  {
    title: "Pro Manage",
    image: project1,
    description:
      "I implemented user authentication with restricted task creation, task properties (priority, due dates), task sharing (read-only access), and state transitions (overdue, completion indicators). Developed settings for updating user details, a task filter system with predefined date ranges, and an analytics dashboard. Designed UI elements including clipped task titles with tooltips, mandatory field markers, toast notifications, and board member assignment.",
      technologies: ["Javascript", "React.js", "Next.js", "MongoDB","Express.js", "Node.js","API","HTML","Github","Tailwind CSS"],
      link:`https://pro-manage-iota-eight.vercel.app/`
    },
  {
    title: "Quizzie",
    image: project2,
    description:
      "Created Quizzie, an innovative online quiz platform that facilitates easy quiz creation for quiz creators.Developed seamless participation features for quiz takers, ensuring a user-friendly experience across devices.Implemented detailed analytics capabilities to provide comprehensive insights into quiz performance and participant engagement.",
      technologies: ["Javascript", "React.js", "Next.js", "MongoDB","Express.js", "Node.js","API","HTML","CSS","Github"],
      link:`'https://aryandaftari7-gmail-com-cuvette-final-evaluation-may.vercel.app/`
  },
  
  
  
  {
    title: "SwipTory - Stroy Sharing Platform",
    image: project3,
    description:
      "Developed a Story Sharing Platform enabling users to post and share stories with others.Implemented features for users to explore and enjoy immersive narratives, express appreciation through likes, and bookmark favorite stories for easy access.Designed a personalized feed tailored to user preferences, enhancing the discovery of stories across various categories matching individual interests.",
      technologies: ["Javascript", "React.js", "Next.js", "MongoDB","Express.js", "Node.js","API","HTML","CSS","Github"],
      link:`https://aryandaftari7-gmail-com-cuvette-final-evaluation-october.vercel.app/`
  },
  {
    title: "Portfolio ",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Javascript"],
    link:`https://portfolio-three-gules-82.vercel.app/`
    
  }
];

export const CONTACT = {
  address: "Jammu, Jammu & Kashmir, J & K 181221 ",
  phoneNo: "+91 788 96 48774 ",
  email: "aryandaftari7@gmail.com",
};
