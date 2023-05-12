import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import Image from "next/image";

export default async function Home() {

  const pageInfo = await fetchPageInfo();
  const projects = await fetchProjects();
  const skills = await fetchSkills();
  const experiences = await fetchExperiences();
  const socials = await fetchSocials();

  return (
    <div className="bg-[#2f3640] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#e84118]/80">

      <Header socials={socials}/>

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo}/>
      </section>

      <a href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="/home.png"
              alt="Home"
              width="100"
              height="100"
            />
          </div>
        </footer>
      </a>

    </div>
  )
}
