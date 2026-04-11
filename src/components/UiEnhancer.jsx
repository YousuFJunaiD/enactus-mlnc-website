import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const revealSelectors = [
  'main section',
  '.project-card',
  '.mentor-card',
  '.team-member-card',
  '.value-card',
  '.achievement-card',
  '.metric-box',
  '.press-logo-card',
  '.contact-card',
  '.stat-box',
  '.partner-logo-placeholder',
];

export default function UiEnhancer() {
  const location = useLocation();

  useEffect(() => {
    const handleScrollState = () => {
      document.documentElement.classList.toggle('has-scrolled', window.scrollY > 12);
    };

    handleScrollState();
    window.addEventListener('scroll', handleScrollState, { passive: true });

    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(revealSelectors.join(','))
    );

    if (!elements.length) {
      return undefined;
    }

    elements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      element.classList.remove('is-visible');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
    });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}
