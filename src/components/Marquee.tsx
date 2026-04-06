import { motion } from "motion/react";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function Marquee({ items, direction = "left", speed = 20 }: MarqueeProps) {
  return (
    <div className="relative flex overflow-hidden py-10 border-y border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center px-10 text-4xl md:text-6xl font-display font-black text-zinc-800 uppercase tracking-tighter hover:text-blue-500 transition-colors duration-500"
          >
            <span className="mr-10">{item}</span>
            <span className="w-4 h-4 bg-blue-600 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
