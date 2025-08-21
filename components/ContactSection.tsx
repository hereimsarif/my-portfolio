import AnimatedReveal from './AnimatedReveal';
import { useForm } from 'react-hook-form';
import { validateContact } from '../lib/validation';
import { useState } from 'react';

const SOCIALS = [
  {
    href: 'https://github.com/johndoe',
    icon: '/social/github.svg',
    label: 'GitHub'
  },
  {
    href: 'https://linkedin.com/in/johndoe',
    icon: '/social/linkedin.svg',
    label: 'LinkedIn'
  }
];

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<FormValues>();
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(data: FormValues) {
    setSubmitted(false);
    if (!validateContact(data)) {
      return;
    }
    // Here, you could send to your own API endpoint or service
    // Simulate submission
    await new Promise(res => setTimeout(res, 1000));
    setSubmitted(true);
    reset();
  }

  return (
    <AnimatedReveal>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Contact</h2>
      <div className="bg-white dark:bg-base-dark rounded-xl shadow-premium p-8 flex flex-col gap-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-accent outline-none text-base"
              {...register('name', { required: true, minLength: 2 })}
              autoComplete="name"
            />
            {errors.name && <span className="text-red-500 text-xs">Please enter your name.</span>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-accent outline-none text-base"
              {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
              autoComplete="email"
            />
            {errors.email && <span className="text-red-500 text-xs">Please enter a valid email.</span>}
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-accent outline-none text-base resize-none"
              {...register('message', { required: true, minLength: 5 })}
            />
            {errors.message && <span className="text-red-500 text-xs">Please enter a message.</span>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold shadow-premium transition-transform hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
          >
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </button>
          {submitted && <span className="text-green-600 font-medium text-sm pt-2">Message sent! Thank you 😊</span>}
        </form>
        <div className="flex gap-6 justify-center pt-4">
          {SOCIALS.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform mx-1"
              aria-label={label}
            >
              <img src={icon} alt={`${label} icon`} width={32} height={32} />
            </a>
          ))}
        </div>
      </div>
    </AnimatedReveal>
  );
}
