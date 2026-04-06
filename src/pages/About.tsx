import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { Ship, Users, Target, ShieldCheck, Linkedin, Twitter, Mail } from "lucide-react";
import MagneticButton from "@/src/components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Chandresh Shah",
    role: "Founder",
    bio: "Entrepreneur | Promoter & Facilitator of Sea Freight Exchange Platform | Transforming Freight Communication & Building Smarter Logistics Networks",
    image: "https://lh3.googleusercontent.com/d/1e04jlTu3Zy00ZTT8BwDNjsZTif9DX1Cy",
  },
  {
    name: "Manan Maisheri",
    role: "Head of Engineering",
    bio: "AI/ML Explorer | Full-Stack Developer | Building Smart Products with Real-World Impact | Turning Ideas into Scalable Tech",
    image: "https://lh3.googleusercontent.com/d/1CuDufUqrpAhTWVFGbAwundBChHanHTZR",
  },
];

const randomTexts = [
  "Global Logistics",
  "Ocean Freight",
  "Digital Gateway",
  "Secure Network",
  "Real-time Exchange",
  "Innovative Tech",
  "Freight Forwarding",
  "Shipping Lines",
  "Exporters Hub",
  "Seamless Ecosystem",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reveal animations for text
    revealRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 20, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Random floating texts
    const floatingElements = containerRef.current.querySelectorAll(".floating-text");
    floatingElements.forEach((el) => {
      // Set random initial positions and rotations
      gsap.set(el, {
        x: gsap.utils.random(-200, 200),
        y: gsap.utils.random(-200, 200),
        rotation: gsap.utils.random(-30, 30),
      });

      // Continuous floating animation
      gsap.to(el, {
        x: "+=50",
        y: "+=50",
        rotation: "+=10",
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Glow and reveal on scroll
      gsap.fromTo(
        el,
        { 
          opacity: 0.02, 
          filter: "blur(10px)",
          color: "rgba(255, 255, 255, 0.02)"
        },
        {
          opacity: 0.4,
          filter: "blur(0px)",
          color: "#3b82f6",
          textShadow: "0 0 30px rgba(59, 130, 246, 1)",
          scale: 1.5,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToReveal = (el: HTMLSpanElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Random Floating Background Text */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none hidden md:block">
        {randomTexts.map((text, i) => (
          <div
            key={i}
            className="floating-text absolute text-4xl md:text-6xl font-display font-black text-zinc-900/20 whitespace-nowrap"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          >
            {text}
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.span
            ref={addToReveal}
            className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-6 rounded-full"
          >
            Our Story
          </motion.span>
          <h1 className="text-4xl md:text-8xl font-display font-bold text-white mb-12 leading-tight">
            Revolutionizing <span className="text-blue-500">Freight</span> Communication.
          </h1>
          <p className="text-zinc-400 text-lg md:text-2xl leading-relaxed max-w-3xl font-light">
            Seafrex is a dynamic team of industry experts and talented engineering students united by a shared vision: to modernize the global logistics landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-white">The Vision</h2>
            <p className="text-zinc-400 leading-relaxed">
              We address critical pain points in the freight industry by providing an innovative Freight Exchange Portal that digitizes and streamlines communication between exporters, shipping lines, and forwarders.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Our platform leverages cutting-edge technology and adheres to the highest security standards, ensuring every transaction on Seafrex is safe, secure, and efficient.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl flex flex-col justify-between aspect-square">
              <Users className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-3xl font-bold text-white">Expert</p>
                <p className="text-zinc-500 text-sm">Team</p>
              </div>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl flex flex-col justify-between aspect-square md:mt-8">
              <Target className="w-8 h-8 text-emerald-500" />
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">Global</p>
                <p className="text-zinc-500 text-sm">Impact</p>
              </div>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl flex flex-col justify-between aspect-square">
              <ShieldCheck className="w-8 h-8 text-amber-500" />
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">99.9%</p>
                <p className="text-zinc-500 text-sm">Secure</p>
              </div>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl flex flex-col justify-between aspect-square md:mt-8">
              <Ship className="w-8 h-8 text-purple-500" />
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">Modern</p>
                <p className="text-zinc-500 text-sm">Fleet</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-20 mb-32">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 text-center">
            Meet the <span className="text-blue-500">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative aspect-square overflow-hidden rounded-3xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <MagneticButton className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </MagneticButton>
                    <MagneticButton className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:text-blue-400">
                      <Twitter className="w-4 h-4" />
                    </MagneticButton>
                    <MagneticButton className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:text-blue-400">
                      <Mail className="w-4 h-4" />
                    </MagneticButton>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-blue-500 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-zinc-500 text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 text-center">
            Our Core <span className="text-blue-500">Commitment</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">99.9%</div>
              <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Secure Platform</p>
              <p className="text-zinc-500 text-sm">Highest security standards for every transaction.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">24/7</div>
              <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Connected Network</p>
              <p className="text-zinc-500 text-sm">Always online, always moving your freight.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">Real-Time</div>
              <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Freight Exchange</p>
              <p className="text-zinc-500 text-sm">Instant communication and digitized workflows.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
