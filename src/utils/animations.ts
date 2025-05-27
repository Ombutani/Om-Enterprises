import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

export const fadeIn = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

export const staggerFadeInUp = (elements: string | Element, stagger: number = 0.2) => {
  return gsap.from(elements, {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: elements,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

export const scaleIn = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
}; 