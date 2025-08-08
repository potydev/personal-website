import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X, Home, User, Code, Briefcase, Clock, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    // Initial setup
    gsap.set(menuRef.current, { x: '100%', opacity: 0 });
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: '0%',
        opacity: 1,
        duration: 0.5,
        ease: "power3.out"
      });
    } else {
      gsap.to(menuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.3,
        ease: "power3.in"
      });
    }
  }, [isOpen]);

  const navigationItems = [
    { icon: Home, label: 'Home', target: '#hero' },
    { icon: User, label: 'About', target: '#about' },
    { icon: Code, label: 'Skills', target: '#skills' },
    { icon: Briefcase, label: 'Projects', target: '#projects' },
    { icon: Clock, label: 'Timeline', target: '#timeline' },
    { icon: Mail, label: 'Contact', target: '#contact' }
  ];

  const scrollToSection = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Navigation Toggle */}
      <nav 
        ref={navRef}
        className="fixed top-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-card/80 backdrop-blur-md border border-primary/20 rounded-full flex items-center justify-center hover:border-primary/50 transition-all duration-300 group"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary group-hover:rotate-90 transition-transform duration-300" />
          ) : (
            <Menu className="w-6 h-6 text-primary group-hover:rotate-180 transition-transform duration-300" />
          )}
        </button>
      </nav>

      {/* Navigation Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-80 h-full bg-card/95 backdrop-blur-xl border-l border-primary/20 z-40 p-6"
      >
        {/* Header */}
        <div className="mb-8 pt-16">
          <h3 className="text-xl font-bold text-foreground font-mono mb-2">Navigation</h3>
          <p className="text-sm text-muted-foreground">Explore different sections</p>
        </div>

        {/* Navigation Items */}
        <div className="space-y-4">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                onClick={() => scrollToSection(item.target)}
                className="w-full flex items-center gap-4 p-4 rounded-lg bg-muted/10 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-center">
            <p className="text-xs text-muted-foreground font-mono">
              © 2024 POTYHI
            </p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;

