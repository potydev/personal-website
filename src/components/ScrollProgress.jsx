import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const progress = progressRef.current;

    // Create scroll progress animation
    gsap.to(progress, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={progressRef}
      className="scroll-progress fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-[9999]"
      style={{ width: '0%' }}
    />
  );
};

export default ScrollProgress;

