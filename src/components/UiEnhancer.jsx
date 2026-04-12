import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const revealSelectors = [
  'main section',
  '.section-header',
  '.project-card',
  '.mentor-card',
  '.team-member-card',
  '.value-card',
  '.achievement-card',
  '.metric-box',
  '.press-logo-card',
  '.contact-card',
  '.stat-box',
  '.partner-logo-item',
  '.sdg-badge',
  '.timeline-item',
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

      if (element.classList.contains('sdg-badge')) {
        const parent = element.parentElement;
        const siblings = parent ? Array.from(parent.children).filter(
          child => child.classList.contains('sdg-badge')
        ) : [];
        const sdgIndex = siblings.indexOf(element);
        element.style.setProperty('--sdg-delay', `${sdgIndex * 60}ms`);
        element.style.setProperty('--reveal-delay', '0ms');
      } else {
        element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 100}ms`);
      }
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

    const animateCountUp = (element, delay) => {
      const original = element.textContent.trim();
      const target = parseNumber(original);
      if (target === 0) return;

      const prefix = getPrefix(original);
      const suffix = getSuffix(original);
      const duration = 2000;
      const start = performance.now() + delay;

      function step(now) {
        if (now < start) { requestAnimationFrame(step); return; }
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        element.textContent = prefix + formatNumber(current, original) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else element.textContent = original;
      }
      requestAnimationFrame(step);
    };

    function parseNumber(text) {
      const cleaned = text.replace(/[₹,\s]/g, '');
      const match = cleaned.match(/[\d.]+/);
      return match ? parseFloat(match[0]) : 0;
    }

    function getPrefix(text) {
      if (text.includes('₹')) return '₹';
      if (text.toLowerCase().startsWith('rs')) return 'Rs. ';
      return '';
    }

    function getSuffix(text) {
      const cleaned = text.replace(/[₹,\s]/g, '').replace(/Rs\.?/i, '');
      return cleaned.replace(/[\d.]+/, '');
    }

    function formatNumber(val, originalText) {
      if (originalText.includes(',') && val >= 1000) {
        return Math.round(val).toLocaleString('en-IN');
      }
      if (originalText.includes('.')) {
        const decimals = (originalText.match(/\.(\d+)/) || ['', ''])[1].length;
        return val.toFixed(decimals);
      }
      return Math.round(val).toString();
    }

    const countUpObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.style.getPropertyValue('--count-delay') || '0', 10);
            setTimeout(() => {
              animateCountUp(entry.target, 0);
            }, delay);
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
    countUpElements.forEach((el, i) => {
      el.style.setProperty('--count-delay', `${i * 150}ms`);
      countUpObserver.observe(el);
    });

    return () => countUpObserver.disconnect();
  }, [location.pathname]);

  return null;
}
