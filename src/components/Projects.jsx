import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Eye, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef([]);

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

      // Projects cards animation
      gsap.fromTo(projectsRef.current,
        {
          opacity: 0,
          y: 100,
          rotationY: -15
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current[0],
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution dengan React, Node.js, dan MongoDB. Fitur lengkap termasuk payment gateway, real-time notifications, dan admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Completed",
      color: "from-blue-500 to-cyan-500",
      stats: { views: "2.5K", stars: "45", forks: "12" }
    },
    {
      title: "Portfolio Website",
      description: "Website portfolio interaktif dengan animasi GSAP yang smooth dan desain yang responsive. Menggunakan teknologi modern untuk performa optimal.",
      tech: ["React", "GSAP", "Tailwind CSS", "Vite"],
      status: "Live",
      color: "from-purple-500 to-pink-500",
      stats: { views: "1.8K", stars: "32", forks: "8" }
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur drag & drop, real-time collaboration, dan notifikasi push. UI/UX yang intuitif dan modern.",
      tech: ["Vue.js", "Firebase", "PWA", "TypeScript"],
      status: "In Progress",
      color: "from-green-500 to-emerald-500",
      stats: { views: "1.2K", stars: "28", forks: "6" }
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard cuaca interaktif dengan visualisasi data yang menarik, forecast 7 hari, dan integrasi dengan multiple weather APIs.",
      tech: ["React", "D3.js", "Weather API", "Chart.js"],
      status: "Completed",
      color: "from-yellow-500 to-orange-500",
      stats: { views: "3.1K", stars: "67", forks: "15" }
    },
    {
      title: "Social Media Analytics",
      description: "Platform analytics untuk social media dengan real-time data visualization, sentiment analysis, dan automated reporting.",
      tech: ["Angular", "Python", "TensorFlow", "PostgreSQL"],
      status: "Beta",
      color: "from-red-500 to-rose-500",
      stats: { views: "950", stars: "23", forks: "4" }
    },
    {
      title: "3D Portfolio Showcase",
      description: "Portfolio 3D interaktif menggunakan Three.js dengan physics simulation, particle systems, dan immersive user experience.",
      tech: ["Three.js", "React", "WebGL", "Blender"],
      status: "Concept",
      color: "from-indigo-500 to-purple-500",
      stats: { views: "1.5K", stars: "41", forks: "9" }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Live': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'In Progress': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Beta': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      case 'Concept': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/3 rounded-full blur-3xl floating" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="section-title text-center mb-16 neon-glow"
        >
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              ref={el => projectsRef.current[index] = el}
              className="holographic-card p-6 rounded-2xl group relative overflow-hidden h-full flex flex-col"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Status Badge */}
              <div className="relative z-10 mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Project Header */}
              <div className="relative z-10 mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2 font-mono group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="relative z-10 mb-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted/20 text-primary text-xs rounded border border-primary/20 hover:border-primary/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="relative z-10 mb-4">
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{project.stats.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Github className="w-3 h-3" />
                    <span>{project.stats.forks}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:border-primary/50">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </button>
                <button className="flex items-center justify-center px-3 py-2 bg-muted/20 text-foreground rounded-lg text-sm hover:bg-muted/30 transition-all duration-300 border border-muted/30 hover:border-muted/50">
                  <Github className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="holographic-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-mono">
              Want to See More?
            </h3>
            <p className="text-muted-foreground mb-6">
              Ini hanya sebagian kecil dari project yang telah saya kerjakan. 
              Kunjungi GitHub saya untuk melihat portfolio lengkap dan source code.
            </p>
            <button 
              className="magnetic-btn px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 neon-border"
              onClick={() => window.open('https://github.com/potydev', '_blank')}
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

