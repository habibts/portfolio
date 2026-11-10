"use client"

import { Reveal } from "@/components/ui/reveal"
import { SectionTitle } from "@/components/ui/section-title"
import { ProjectCard } from "@/components/ui/project-card"
import { PROJECTS } from "@/data/projects"

export function Projects() {
  return (
    <section
      id="projects"
      className="section-wash relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="soft-glow-violet pulse-glow -top-44 -left-44 size-[48rem]" />
        <div className="soft-glow-cyan right-[3%] -bottom-60 size-[40rem]" />
      </div>

      <SectionTitle
        title="Selected projects"
        description="A selection of projects I have built and contributed to."
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <Reveal
              key={project.id}
              delay={idx * 0.07}
              className="flex h-full flex-col"
            >
              <ProjectCard
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                live={project.live}
                index={idx}
                image={project.image}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
