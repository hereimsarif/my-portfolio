import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full mx-auto pt-[68px]">
        <section id="hero" className="w-full max-w-3xl">
          <HeroSection />
        </section>
        <section id="about" className="w-full max-w-3xl mt-24 px-4">
          <AboutSection />
        </section>
        <section id="projects" className="w-full max-w-5xl mt-24 px-4">
          <ProjectsSection />
        </section>
        <section id="contact" className="w-full max-w-2xl mt-24 px-4 mb-24">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
