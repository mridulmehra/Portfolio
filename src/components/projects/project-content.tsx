export type projectData = {
  image: {
    src: string;
  };
  title: string;
  description: string;
  header: string;
  tags: string[];
  link: {
    github: string;
    youtube?: string;
    live?: string;
  };
};

export const projectsContent: projectData[] = [
  {
    image: {
      src: "/codeantai.jpg",
    },
    title: "CyberGaurd",
    header: "Detect, Prevent, Protect",
    description:
      "Our AI-powered chat enhancement tool analyzes messages in real time, detecting negative sentiment and refining text while preserving the original context. It ensures conversations remain positive and constructive, fostering a healthier and more engaging chat experience.",
    tags: ["Node.js", "Express.js", "WebSockets", "PostgreSQL", "Shadecn UI",  "Sentiment Analysis"],
    link: {
      github: "https://github.com/mridulmehra/CyberGaurd",
      youtube: "",
      live: "https://cybergaurd.onrender.com",
    },
  },

  {
    image: {
      src: "/medium.jpg",
    },
    title: "Planetary",
    header: "Space Exploratory App",
    description:
      "Our Space Exploration App offers an immersive and educational journey through the cosmos, bringing space closer to you. With Cosmic Incarnation, users can explore breathtaking NASA imagery from their birthdate. The Asteroid Proximity Monitor keeps you updated on near-Earth objects, ensuring you stay informed about potential space hazards. Additionally, our Wildfire Prediction System, powered by AI and deep learning, analyzes satellite images to detect and prevent forest fires. Whether you're an astronomy enthusiast or passionate about environmental protection, our app provides real-time insights into space and Earth’s changing landscape.",
    tags: [
      "React.js",
      "Next.js",
      "Node.js", 
      "Express.js",
      "REST API",
      "VGG-19",
      "TailwindCSS",
    ],
    link: {
      github: "https://github.com/mridulmehra/Planetary",
      youtube: "",
      live: "http://planetary-updated.vercel.app",
    },
  },
  // {
  //   image: {
  //     src: "/portfolio.jpeg",
  //   },
  //   title: "Portfolio",
  //   header: "Mridul Mehra | portfolio",
  //   description:
  //     "The goal of this project is to design and develop a personal portfolio website that effectively highlights my skills, projects, and professional experience.",
  //   tags: [
  //     "Javascript",
  //     "React.js",
  //     "Next.js",
  //     "Tailwind Css",
  //     "Framar Motion",
  //     "Typescript",
  //     "Shadcn UI",
  //   ],
  //   link: {
  //     github: "https://github.com/pradhumngautam/pradhumn-portfolio",
  //     youtube: "",
  //     live: "https://pradhumngautam.vercel.app/",
  //   },
  // },
  // {
  //   image: {
  //     src: "/workflow.jpeg",
  //   },
  //   title: "Workflow",
  //   header: "Task Management",
  //   description:
  //     "Workflow is a work management application designed to help users organize and track their tasks efficiently. With features to mark tasks as In Progress or Completed, it enhances productivity and simplifies workplace task management.",
  //   tags: ["Typescript", "Nextjs", "Tailwind Css", "Shadecn UI"],
  //   link: {
  //     github: "https://github.com/pradhumngautam/workflo",
  //     youtube: "",
  //     live: "https://workflo-ivory.vercel.app/dashboard",
  //   },
  // },
];
