import AnimatedReveal from './AnimatedReveal';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: "Awesome SaaS Dashboard",
    description: "A powerful analytics dashboard with real-time charts and custom visualizations for growing startups.",
    image: "/project-placeholder.png"
  },
  {
    title: "Personal Blog Platform",
    description: "A minimal, blazing fast Next.js blog with markdown support, tagging, and SEO built in.",
    image: "/project-placeholder.png"
  },
  {
    title: "E-Commerce Storefront",
    description: "A modern, performant e-commerce frontend featuring snappy checkout, product search, and reviews.",
    image: "/project-placeholder.png"
  },
  {
    title: "Portfolio Website",
    description: "The very portfolio you’re browsing—built as a shining example of modern web techniques.",
    image: "/project-placeholder.png"
  }
];

export default function ProjectsSection() {
  return (
    <AnimatedReveal>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </AnimatedReveal>
  );
}
