import DarkModeToggle from './DarkModeToggle';
import { smoothScroll } from '../lib/utils';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-base/80 dark:bg-base-dark/80 shadow backdrop-blur-lg transition-colors duration-300">
      <nav className="flex justify-between items-center max-w-5xl mx-auto px-4 py-3">
        <span className="font-semibold text-xl tracking-tight">
          MyPortfolio
        </span>
        <div className="hidden md:flex gap-8 items-center text-base font-medium">
          {NAV_LINKS.map(link => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className="hover:text-accent focus:text-accent cursor-pointer transition-colors duration-200"
              onClick={e => smoothScroll(e, link.target)}
            >
              {link.label}
            </a>
          ))}
          <DarkModeToggle />
        </div>
        <button
          className="md:hidden p-2 flex items-center focus:outline-none"
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect y="4" width="24" height="2.5" rx="1.2" fill="currentColor" />
            <rect y="11" width="24" height="2.5" rx="1.2" fill="currentColor" />
            <rect y="18" width="24" height="2.5" rx="1.2" fill="currentColor" />
          </svg>
        </button>
        <div
          className={`md:hidden fixed inset-0 bg-[rgba(0,0,0,0.4)] z-50 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setOpen(false)}
        >
          <nav
            className={`absolute right-4 top-4 w-48 bg-base dark:bg-base-dark rounded-xl shadow-lg flex flex-col gap-4 p-5 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-[120%]'}`}
            onClick={e => e.stopPropagation()}
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.target}
                href={`#${link.target}`}
                className="hover:text-accent font-semibold text-lg"
                onClick={e => {
                  setOpen(false);
                  smoothScroll(e, link.target);
                }}
              >
                {link.label}
              </a>
            ))}
            <DarkModeToggle />
          </nav>
        </div>
      </nav>
    </header>
  );
}
