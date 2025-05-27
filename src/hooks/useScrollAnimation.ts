import { useEffect, useRef } from 'react';
import { fadeIn, fadeInUp, staggerFadeInUp, scaleIn } from '@/utils/animations';

export const useScrollAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Animate the section title
      fadeInUp(sectionRef.current.querySelector('.section-title') as Element, 0.2);
      
      // Animate the section content
      fadeIn(sectionRef.current.querySelector('.section-content') as Element, 0.4);
      
      // Animate any cards or items with stagger effect
      const cards = Array.from(sectionRef.current.querySelectorAll('.card, .item'));
      cards.forEach((card, index) => staggerFadeInUp(card as Element, 0.1 * index));
      
      // Animate any images
      Array.from(sectionRef.current.querySelectorAll('img')).forEach(img => scaleIn(img as Element, 0.3));
    }
  }, []);

  return sectionRef;
}; 