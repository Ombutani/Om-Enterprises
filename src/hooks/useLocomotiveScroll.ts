import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,
      lerp: 0.1,
      smartphone: {
        smooth: true,
        multiplier: 0.5,
      },
      tablet: {
        smooth: true,
        multiplier: 0.7,
      },
      class: 'is-revealed',
      initPosition: { x: 0, y: 0 },
      scrollFromAnywhere: true,
      reloadOnContextChange: true,
    });

    // Update scroll on window resize
    const handleResize = () => {
      locomotiveScrollRef.current?.update();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  return scrollRef;
}; 