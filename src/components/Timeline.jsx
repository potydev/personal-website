import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);

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

      // Timeline line animation
      gsap.fromTo(timelineRef.current,
        { height: "0%" },
        {
          height: "100%",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Timeline items animation
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            {
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              scale: 0.8
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timelineData = [
    {
      year: "2024",
      title: "Senior Frontend Developer",
      company: "Tech Innovation Co.",
      location: "Remote",
      type: "work",
      description: "Leading frontend development team, implementing cutting-edge web technologies and mentoring junior developers.",
      achievements: ["Led 5+ major projects", "Improved performance by 40%", "Mentored 3 developers"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2023",
      title: "Freelance Digital Craftsman",
      company: "Self-Employed",
      location: "Indonesia",
      type: "work",
      description: "Providing web development and design services to various clients, specializing in modern web applications.",
      achievements: ["20+ successful projects", "100% client satisfaction", "Built personal brand"],
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Jakarta, Indonesia",
      type: "work",
      description: "Developed responsive web applications using React and modern CSS frameworks for various clients.",
      achievements: ["Delivered 15+ projects", "Reduced load time by 50%", "Implemented PWA features"],
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2021",
      title: "Web Development Certification",
      company: "Online Academy",
      location: "Online",
      type: "education",
      description: "Completed comprehensive web development program covering modern frameworks and best practices.",
      achievements: ["Full-stack certification", "Top 5% of class", "Capstone project award"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "2020",
      title: "Junior Web Developer",
      company: "Startup Inc.",
      location: "Bandung, Indonesia",
      type: "work",
      description: "Started professional journey in web development, learning industry standards and collaborative development.",
      achievements: ["First professional role", "Learned team collaboration", "Built 10+ features"],
      color: "from-red-500 to-rose-500"
    },
    {
      year: "2019",
      title: "Computer Science Degree",
      company: "University",
      location: "Indonesia",
      type: "education",
      description: "Graduated with Bachelor's degree in Computer Science, focusing on software engineering and web technologies.",
      achievements: ["Cum Laude graduate", "Final project: Web App", "Programming competition winner"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'work': return Briefcase;
      case 'education': return Award;
      default: return Calendar;
    }
  };

  return (
    <section 
      id="timeline"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary/3 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="section-title text-center mb-16 neon-glow"
        >
          Journey & Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-muted/20 h-full">
            <div 
              ref={timelineRef}
              className="w-full bg-gradient-to-b from-primary to-secondary"
              style={{ height: '0%' }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const IconComponent = getIcon(item.type);
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  ref={el => itemsRef.current[index] = el}
                  className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                    <div className="holographic-card p-6 rounded-2xl group relative overflow-hidden">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Year Badge */}
                      <div className="relative z-10 mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20">
                          {item.year}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-foreground mb-2 font-mono group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <span className="font-medium">{item.company}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Hover Effect Border */}
                      <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-300" />
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="w-2/12 flex justify-center">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl" />
                    </div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <div className="holographic-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-mono">
              The Journey Continues...
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Setiap langkah dalam perjalanan ini telah membentuk saya menjadi digital craftsman yang saya adalah hari ini. 
              Dari mahasiswa yang penasaran hingga developer profesional, setiap pengalaman memberikan pelajaran berharga 
              dan membuka peluang baru untuk terus berkembang dan berinovasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

