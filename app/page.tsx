import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Resume } from "@/components/sections/resume"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-svh overflow-x-hidden pt-[var(--navbar-height)]">
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="soft-glow-blue -top-[20rem] -left-[28rem] size-[62rem]" />
        <div className="soft-glow-violet -right-[28rem] -bottom-[30rem] size-[68rem]" />
        <div className="soft-glow-cyan top-[42%] left-[18%] size-[48rem] opacity-30" />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}
