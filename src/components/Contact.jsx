import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Github, Mail, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

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

      // Cards stagger animation
      gsap.fromTo(cardsRef.current,
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
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactMethods = [
    {
      icon: Instagram,
      label: "Instagram",
      value: "@potyhi",
      link: "https://instagram.com/potyhi",
      color: "from-pink-500 to-purple-500",
      description: "Follow my creative journey"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@potydev",
      link: "https://github.com/potydev",
      color: "from-gray-600 to-gray-800",
      description: "Check out my code"
    },
    {
      icon: Mail,
      label: "Email",
      value: "dapotmatthew02@gmail.com",
      link: "mailto:dapotmatthew02@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "Let's discuss your project"
    }
  ];

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl floating" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="section-title text-center mb-16 neon-glow"
        >
          Let's Connect
        </h2>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="holographic-card p-6 rounded-2xl text-center group cursor-pointer relative overflow-hidden"
                onClick={() => window.open(method.link, '_blank')}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2 font-mono">
                  {method.label}
                </h3>
                <p className="text-primary font-medium mb-2 break-all">
                  {method.value}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {method.description}
                </p>

                {/* External Link Icon */}
                <div className="flex justify-center">
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="holographic-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-mono">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Saya selalu terbuka untuk proyek-proyek menarik dan kolaborasi kreatif. 
              Mari kita wujudkan ide digital Anda menjadi kenyataan yang memukau!
            </p>
            <button 
              className="magnetic-btn px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 neon-border"
              onClick={() => window.open('mailto:dapotmatthew02@gmail.com', '_blank')}
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-muted-foreground font-mono">
          © 2024 POTYHI • Crafted with ❤️ and lots of ☕
        </p>
      </div>
    </section>
  );
};

export default Contact;

