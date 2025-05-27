import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    let locoScroll: LocomotiveScroll | null = null;

    const initScroll = () => {
      if (scrollRef.current) {
        locoScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed',
          lerp: 0.05,
          smartphone: {
            smooth: true,
            multiplier: 1,
          },
          tablet: {
            smooth: true,
            multiplier: 1,
          },
          scrollFromAnywhere: true,
          reloadOnContextChange: true,
          touchMultiplier: 2,
          smoothMobile: true,
        });

        locomotiveScrollRef.current = locoScroll;

        // Update ScrollTrigger when locomotive scroll updates
        locoScroll.on('scroll', ScrollTrigger.update);

        // Tell ScrollTrigger to use these proxy methods for the scrollRef element
        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll?.scrollTo(value, 0, 0)
              : locoScroll?.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
              right: window.innerWidth,
              bottom: window.innerHeight,
            };
          },
          pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
        });

        // Each time the window updates, refresh ScrollTrigger and locomotive scroll
        ScrollTrigger.addEventListener('refresh', () => locoScroll?.update());

        // After everything is set up, refresh ScrollTrigger
        ScrollTrigger.refresh();
      }
    };

    // Initialize scroll
    initScroll();

    // Handle window resize
    const handleResize = () => {
      if (locoScroll) {
        locoScroll.update();
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Handle scroll events for better performance
    const handleScroll = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (locoScroll) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        locoScroll.destroy();
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <main className="relative">
      <div 
        ref={scrollRef} 
        data-scroll-container 
        className="relative"
        data-scroll
        data-scroll-direction="vertical"
      >
        {children}
      </div>
    </main>
  );
};

export default SmoothScroll; 