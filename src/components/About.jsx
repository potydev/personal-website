import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Card animation with 3D effect
      gsap.fromTo(cardRef.current,
        {
          opacity: 0,
          rotationY: -15,
          z: -100
        },
        {
          opacity: 1,
          rotationY: 0,
          z: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Text reveal animation
      gsap.fromTo(textRef.current.children,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    "Frontend Development",
    "UI/UX Design", 
    "Creative Coding",
    "Digital Art",
    "Problem Solving",
    "Innovation"
  ];

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="section-title text-center mb-16 neon-glow"
        >
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div 
            ref={cardRef}
            className="holographic-card p-8 rounded-2xl relative group"
            style={{ perspective: '1000px' }}
          >
            {/* Avatar Placeholder */}
            <div className="w-48 h-48 mx-auto mb-6 relative">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                <div className="text-6xl font-bold text-primary">P</div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl" />
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2 font-mono">POTYHI</h3>
              <p className="text-muted-foreground">Digital Craftsman</p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-muted/20 px-3 py-2 rounded-lg text-sm text-center border border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* About Text */}
          <div ref={textRef} className="space-y-6">
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-foreground/90">
                Selamat datang di dunia digital saya! Saya adalah seorang digital craftsman yang 
                berdedikasi untuk menciptakan pengalaman web yang unik dan memukau.
              </p>
              
              <p className="text-foreground/80">
                Dengan passion yang mendalam dalam teknologi dan desain, saya menggabungkan 
                kreativitas dengan keterampilan teknis untuk menghadirkan solusi digital 
                yang tidak hanya fungsional, tetapi juga menginspirasi.
              </p>
              
              <p className="text-foreground/70">
                Setiap project adalah kanvas baru untuk mengeksplorasi batas-batas kemungkinan 
                dalam web development, dari animasi yang halus hingga interaksi yang intuitif.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Ideas Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

