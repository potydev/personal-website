import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, subtitleRef.current], { 
        opacity: 0, 
        y: 100 
      });

      // Create timeline
      const tl = gsap.timeline();

      // Animate title with typewriter effect
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(titleRef.current, {
        text: "POTYHI",
        duration: 2,
        ease: "none"
      }, "-=0.5")
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=1");

      // Floating particles animation
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.3
          });

          gsap.to(particle, {
            y: "-=100",
            x: "+=50",
            rotation: 360,
            duration: Math.random() * 10 + 10,
            repeat: -1,
            ease: "none"
          });
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const createParticles = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        ref={el => particlesRef.current[i] = el}
        className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
        style={{
          filter: 'blur(1px)',
        }}
      />
    ));
  };

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card"
    >
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Floating Particles */}
      <div className="particles-container">
        {createParticles()}
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/10 rounded-full blur-2xl floating" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="hero-title glitch neon-glow mb-6"
          data-text="POTYHI"
        >
          
        </h1>

        {/* Subtitle */}
        <div 
          ref={subtitleRef}
          className="hero-subtitle text-muted-foreground mb-8 max-w-2xl mx-auto text-center"
        >
          <span className="typewriter">Digital Craftsman • Creative Developer • Tech Enthusiast</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="magnetic-btn px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 neon-border"
            onClick={() => {
              const skillsSection = document.querySelector('#skills');
              if (skillsSection) {
                skillsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore My Skills
          </button>
          <button 
            className="magnetic-btn px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
            onClick={() => {
              const projectsSection = document.querySelector('#projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

