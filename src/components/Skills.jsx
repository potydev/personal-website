import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Zap, Brain, Rocket, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef([]);
  const progressRef = useRef([]);

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

      // Skills cards animation
      gsap.fromTo(skillsRef.current,
        {
          opacity: 0,
          y: 100,
          rotationX: -15
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current[0],
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Progress bars animation
      progressRef.current.forEach((progress, index) => {
        if (progress) {
          gsap.fromTo(progress,
            { width: "0%" },
            {
              width: `${skillsData[index].level}%`,
              duration: 1.5,
              ease: "power2.out",
              delay: index * 0.1,
              scrollTrigger: {
                trigger: progress,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillsData = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Vue, Angular, TypeScript",
      level: 95,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Sketch",
      level: 88,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Animation & Motion",
      description: "GSAP, Framer Motion, CSS Animations",
      level: 92,
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "Creative Problem Solving",
      description: "Innovative solutions, Critical thinking",
      level: 90,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Web Vitals, Bundle optimization",
      level: 85,
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "User research, Accessibility",
      level: 87,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/3 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl floating" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="section-title text-center mb-16 neon-glow"
        >
          Skills & Expertise
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                ref={el => skillsRef.current[index] = el}
                className="holographic-card p-6 rounded-2xl group relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2 font-mono">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Proficiency</span>
                    <span className="text-xs text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                    <div 
                      ref={el => progressRef.current[index] = el}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      style={{ width: '0%' }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="holographic-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-mono">
              Continuous Learning & Innovation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sebagai seorang digital craftsman, saya selalu mengikuti perkembangan teknologi terbaru 
              dan terus mengasah kemampuan untuk memberikan solusi yang inovatif dan efektif. 
              Setiap project adalah kesempatan untuk belajar dan berkembang.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'GSAP', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Three.js', 'Figma', 'Git'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

