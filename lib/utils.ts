export function smoothScroll(e: React.MouseEvent, target: string) {
  e.preventDefault();
  if (typeof window === 'undefined') return;
  const el = document.getElementById(target);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function getSystemTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getStoredTheme(): 'dark' | 'light' | null {
  if (typeof window === 'undefined') return null;
  const val = localStorage.getItem('theme');
  if (val === 'dark' || val === 'light') return val;
  return null;
}

export function setTheme(theme: 'dark' | 'light') {
  if (typeof window === 'undefined') return;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
}
