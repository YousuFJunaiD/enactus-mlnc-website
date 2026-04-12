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

  useEffect(() => {
    const countUpSelectors = [
      '.impact-number',
      '.stat-number',
      '.metric-box h3',
      '.achievement-metric',
    ];

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const animateCountUp = (element) => {
      const originalText = element.textContent;
      const numericMatch = originalText.match(/[\d,]+/);
      if (!numericMatch) return;

      const numericString = numericMatch[0];
      const targetNumber = parseInt(numericString.replace(/,/g, ''), 10);
      const prefix = originalText.split(numericString)[0];
      const suffix = originalText.slice(originalText.indexOf(numericString) + numericString.length);

      element.style.opacity = '0';
      element.style.transform = 'translateY(12px)';
      element.style.transition = 'none';

      requestAnimationFrame(() => {
        element.style.transition = 'opacity 400ms ease, transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });

      const duration = 2000;
      const startTime = performance.now();

      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

      const tick = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = Math.round(easedProgress * targetNumber);
        element.textContent = prefix + currentValue.toLocaleString('en-IN') + suffix;

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const countUpObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              animateCountUp(entry.target);
            }, index * 150);
            countUpObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    const countUpElements = Array.from(document.querySelectorAll(countUpSelectors.join(',')));
    countUpElements.forEach((el) => countUpObserver.observe(el));

    return () => countUpObserver.disconnect();
  }, [location.pathname]);

  return null;
}
