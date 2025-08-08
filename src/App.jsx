import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';

// Styles
import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Magnetic button effect
    const magneticButtons = document.querySelectorAll('.magnetic-btn');
    
    magneticButtons.forEach(btn => {
      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      };

      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);
    });

    // Page load animation
    const tl = gsap.timeline();
    
    tl.set('body', { overflow: 'hidden' })
      .to('.loader', {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: "power2.out"
      })
      .set('body', { overflow: 'auto' })
      .set('.loader', { display: 'none' });

    return () => {
      lenis.destroy();
      gsap.ticker.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Loading Screen */}
      <div className="loader fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-muted border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-primary font-mono">Loading Experience...</p>
        </div>
      </div>

      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

export default App;

