import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-base-dark rounded-xl shadow-premium overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col">
      <div className="relative w-full h-48 bg-gradient-to-br from-indigo-50 to-accent/20">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform group-hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2 text-accent dark:text-indigo-300">{title}</h3>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 flex-1">{description}</p>
      </div>
    </div>
  );
}
