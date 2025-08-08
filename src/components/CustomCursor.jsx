import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const trails = trailRefs.current;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Move main cursor
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
        ease: "power2.out"
      });

      // Move trail cursors with delay
      trails.forEach((trail, index) => {
        if (trail) {
          gsap.to(trail, {
            x: e.clientX - 4,
            y: e.clientY - 4,
            duration: 0.3 + (index * 0.1),
            ease: "power2.out"
          });
        }
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .magnetic-btn');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed w-5 h-5 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Trail Cursors */}
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          ref={el => trailRefs.current[i] = el}
          className="custom-cursor-trail fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9998]"
          style={{ 
            transform: 'translate(-50%, -50%)',
            opacity: 0.6 - (i * 0.1)
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;

