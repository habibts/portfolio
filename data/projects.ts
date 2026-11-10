export type Project = {
  id: number
  name: string
  description: string
  technologies: string[]
  github?: string
  live?: string
  image?: string
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "StudioSpace",
    description:
      "A creative studio booking platform that helps users discover and book inspiring spaces for their projects through a simple and convenient booking experience.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    live: "https://studio-space-client-steel.vercel.app/",
    github: "https://github.com/habibts/studio-space-client",
    image: "/images/projects/studiospace.png",
  },
  {
  id: 2,
  name: "Bazar Dor",
  description:
    "A Bangla market price tracking platform that helps users explore daily essential product prices, compare market rates, and monitor price changes to make smarter shopping decisions.",
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "MongoDB",
    "Better Auth"
  ],
  live: "https://bazar-dor-gkq2.vercel.app/",
  github: "https://github.com/habibts/Bazar-Dor",
  image: "/images/projects/bazar-dor.png",
},
  {
  id: 3,
  name: "Dev Stack",
  description:
    "A developer-focused platform featuring various web development technologies through informative and interactive technology cards.",
  technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  live: "https://a05-dev-stack-opal.vercel.app/",
  github: "https://github.com/habibts/A05-DevStack",
  image: "/images/projects/dev-stack.png",
},
]
