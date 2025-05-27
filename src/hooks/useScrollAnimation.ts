import { useEffect, useRef } from 'react';
import { fadeIn, fadeInUp, staggerFadeInUp, scaleIn } from '@/utils/animations';

export const useScrollAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Animate the section title
      fadeInUp(sectionRef.current.querySelector('.section-title'), 0.2);
      
      // Animate the section content
      fadeIn(sectionRef.current.querySelector('.section-content'), 0.4);
      
      // Animate any cards or items with stagger effect
      staggerFadeInUp(sectionRef.current.querySelectorAll('.card, .item'), 0.1);
      
      // Animate any images
      scaleIn(sectionRef.current.querySelectorAll('img'), 0.3);
    }
  }, []);

  return sectionRef;
}; 