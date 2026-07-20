import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Statement />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Contact />
      <ContactModal />
    </>
  );
}
