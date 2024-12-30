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
      src: "/codeantai.jpeg",
    },
    title: "codeantai",
    header: "AI to fix code",
    description:
      "CodeAntAI is an AI-powered tool that reviews and fixes code, enabling developers to work more efficiently by streamlining the debugging and coding process.",
    tags: ["Typescript", "Nextjs", "Tailwind Css", "Shadecn UI"],
    link: {
      github: "https://github.com/pradhumngautam/codeant-ai",
      youtube: "",
      live: "https://codeant-ai.vercel.app/login",
    },
  },

  {
    image: {
      src: "/medium.jpeg",
    },
    title: "Medium",
    header: "Blogging website",
    description:
      "Medium is a blogging website which allows user to do CRUD operations on their blogs. Hono.js library of wrangler is used here for writing backend server which is hosted on cloudflare workers, connection-pooling is used for maintaining postgress requests.",
    tags: [
      "Typescript",
      "React.js",
      "Hono.js",
      "Prisma",
      "PostgreSQL",
      "Connection - pooling",
      "Custom hooks",
      "TailwindCSS",
      "ShadcnUI",
    ],
    link: {
      github: "https://github.com/pradhumngautam/medium",
      youtube: "",
      live: "https://medium-self-beta.vercel.app/",
    },
  },
  {
    image: {
      src: "/portfolio.jpeg",
    },
    title: "Portfolio",
    header: "Pradhumn gautam | portfolio",
    description:
      "The goal of this project is to design and develop a personal portfolio website that effectively highlights my skills, projects, and professional experience.",
    tags: [
      "Javascript",
      "React.js",
      "Next.js",
      "Tailwind Css",
      "Framar Motion",
      "Typescript",
      "Shadcn UI",
    ],
    link: {
      github: "https://github.com/pradhumngautam/pradhumn-portfolio",
      youtube: "",
      live: "https://pradhumngautam.vercel.app/",
    },
  },
  {
    image: {
      src: "/workflow.jpeg",
    },
    title: "Workflow",
    header: "Task Management",
    description:
      "Workflow is a work management application designed to help users organize and track their tasks efficiently. With features to mark tasks as In Progress or Completed, it enhances productivity and simplifies workplace task management.",
    tags: ["Typescript", "Nextjs", "Tailwind Css", "Shadecn UI"],
    link: {
      github: "https://github.com/pradhumngautam/workflo",
      youtube: "",
      live: "https://workflo-ivory.vercel.app/dashboard",
    },
  },
];
