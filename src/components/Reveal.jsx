'use client';

import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Reveal once, the first time the section scrolls into view, then stop
      // observing so it never fades back out or re-animates on later scrolls.
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
