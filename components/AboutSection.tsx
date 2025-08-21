import AnimatedReveal from './AnimatedReveal';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <AnimatedReveal>
      <div className="flex flex-col md:flex-row items-center gap-8 bg-card-gradient p-8 rounded-xl shadow-premium">
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-lg mb-4 md:mb-0">
          <Image
            src="/profile-placeholder.png"
            alt="Profile picture"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-0">
            Hi! I’m John Doe, a passionate Full Stack Developer based in Anytown. I love building modern, delightful web experiences with React, Next.js, and Node.js. I focus on clean design, accessibility, and creating products that users love.
          </p>
        </div>
      </div>
    </AnimatedReveal>
  );
}
