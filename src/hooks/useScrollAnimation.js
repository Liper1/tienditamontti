import { useEffect, useRef, useState } from 'react';

/**
 * Hook para animaciones de scroll reveal
 * Detecta cuando un elemento entra en el viewport y aplica clase 'revealed'
 */
export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          // Una vez revelado, dejar de observar (one-time animation)
          if (options.once !== false) {
            observer.unobserve(element);
          }
        } else if (options.once === false) {
          setIsRevealed(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [elementRef, isRevealed];
};

/**
 * Hook para detectar si navbar debe cambiar de estilo al hacer scroll
 */
export const useScrollPosition = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, threshold]);

  return scrolled;
};

/**
 * Hook para efecto parallax suave
 */
export const useParallax = (speed = 0.5) => {
  const elementRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = rect.top + scrolled;
        const distance = scrolled - elementTop;
        setOffset(distance * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return [elementRef, offset];
};

/**
 * Hook para animaciones stagger (retraso progresivo)
 */
export const useStagger = (itemCount, baseDelay = 100) => {
  return (index) => ({
    style: {
      animationDelay: `${index * baseDelay}ms`,
      transitionDelay: `${index * baseDelay}ms`
    }
  });
};

export default useScrollReveal;
