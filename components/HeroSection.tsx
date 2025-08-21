import AnimatedReveal from './AnimatedReveal';

export default function HeroSection() {
  return (
    <AnimatedReveal>
      <div className="flex flex-col items-center pt-20 md:pt-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-accent to-indigo-600 bg-clip-text text-transparent mb-4">
          John Doe
        </h1>
        <p className="text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-8">
          Full Stack Developer
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 rounded-xl bg-accent text-white text-lg font-semibold shadow-premium transition-transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-accent ring-offset-2"
        >
          View Projects
        </a>
      </div>
    </AnimatedReveal>
  );
}
