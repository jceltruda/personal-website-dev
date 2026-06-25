'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export default function NavBar() {
  const pathname = usePathname();
  const onHome = pathname === '/';
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    if (!onHome) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -85% 0px' }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onHome]);

  // On the home page, intercept and smooth-scroll. On other routes the link
  // falls through to navigate to /#id, where the browser scrolls to the anchor.
  const handleClick = (e, id) => {
    if (!onHome) return;
    e.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {navItems.map(({ id, label }) => (
          <Link
            key={id}
            href={onHome ? `#${id}` : `/#${id}`}
            onClick={(e) => handleClick(e, id)}
            className={`navbar-link${onHome && activeSection === id ? ' navbar-link-active' : ''}`}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/chat"
          className={`navbar-link navbar-chat-link${pathname === '/chat' ? ' navbar-link-active' : ''}`}
        >
          Ask AI
        </Link>
      </div>
    </nav>
  );
}
