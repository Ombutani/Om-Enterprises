import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const useSmoothScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Create smooth scroller
    smootherRef.current = ScrollSmoother.create({
      wrapper: scrollRef.current,
      content: scrollRef.current.querySelector('[data-scroll-content]'),
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
      preventDefault: true,
    });

    // Update on resize
    const handleResize = () => {
      smootherRef.current?.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

  return scrollRef;
}; 