import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Ship, Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "motion/react";

import MagneticButton from "@/src/components/MagneticButton";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Ship Animation - Moving across the entire navbar on waves */}
        <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none overflow-hidden">
          {/* Wave Layer 1 */}
          <motion.div
            className="absolute bottom-0 left-0 flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg width="2000" height="40" viewBox="0 0 2000 40" className="text-blue-500/10 fill-current">
              <path d="M0 20 Q 250 0, 500 20 T 1000 20 T 1500 20 T 2000 20 V 40 H 0 Z" />
            </svg>
            <svg width="2000" height="40" viewBox="0 0 2000 40" className="text-blue-500/10 fill-current">
              <path d="M0 20 Q 250 0, 500 20 T 1000 20 T 1500 20 T 2000 20 V 40 H 0 Z" />
            </svg>
          </motion.div>

          {/* Wave Layer 2 */}
          <motion.div
            className="absolute bottom-0 left-0 flex"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <svg width="2000" height="30" viewBox="0 0 2000 30" className="text-blue-400/10 fill-current">
              <path d="M0 15 Q 250 30, 500 15 T 1000 15 T 1500 15 T 2000 15 V 30 H 0 Z" />
            </svg>
            <svg width="2000" height="30" viewBox="0 0 2000 30" className="text-blue-400/10 fill-current">
              <path d="M0 15 Q 250 30, 500 15 T 1000 15 T 1500 15 T 2000 15 V 30 H 0 Z" />
            </svg>
          </motion.div>

          {/* Moving Ship */}
          <motion.div
            className="absolute bottom-4 flex"
            animate={{ x: ["-10%", "110%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="relative">
              {/* Ship Body */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                  rotate: [-4, 4, -4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Ship className="w-6 h-6 text-blue-500/50" />
              </motion.div>
              
              {/* Wake/Bubbles */}
              <div className="absolute -left-6 bottom-0 flex gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 bg-blue-300/30 rounded-full"
                    animate={{
                      scale: [1, 2.5, 1],
                      opacity: [0.3, 0.6, 0],
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <Link to="/" className="flex items-center gap-2 group relative z-10">
          <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors relative overflow-hidden">
            <Ship className="w-6 h-6 text-white relative z-10" />
            {/* Subtle wave animation beneath the ship */}
            <div className="absolute bottom-0 left-0 right-0 h-3 pointer-events-none opacity-30">
              <motion.svg
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                className="w-[200%] h-full fill-white"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10 V 20 H 0 Z" />
                <path d="M100 10 Q 112.5 0, 125 10 T 150 10 T 175 10 T 200 10 V 20 H 100 Z" />
              </motion.svg>
            </div>
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white">
            SEAFREX
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 relative z-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-400",
                location.pathname === link.path ? "text-blue-400" : "text-zinc-400"
              )}
            >
              {link.name}
            </Link>
          ))}
          <MagneticButton>
            <Link
              to="/contact"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium",
                    location.pathname === link.path ? "text-blue-400" : "text-zinc-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-blue-600 text-white text-center font-semibold rounded-xl"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
