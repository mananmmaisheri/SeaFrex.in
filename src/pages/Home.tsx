import { motion } from "motion/react";
import { Ship, Globe, Shield, Zap, ArrowRight, Download, Smartphone, Laptop, Apple } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import MagneticButton from "@/src/components/MagneticButton";
import Marquee from "@/src/components/Marquee";

const marqueeItems = [
  "Seafrex Limited",
  "Ocean Freight",
  "Digital Gateway",
  "Global Logistics",
  "Secure Network",
  "Real-time Exchange",
  "Next-Gen Tech",
  "Freight Exchange",
];

const features = [
  {
    title: "Shipper / Exporters",
    description: "Manage export bookings, documentation and shipment visibility to reach global buyers efficiently.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Shipping Lines",
    description: "Access vessel schedules, slot management and operational tools tailored for carriers.",
    icon: Ship,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Freight Forwarders",
    description: "Consolidate bookings, coordinate pickup/delivery and manage documentation and carrier communication.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const products = [
  {
    title: "Create Inquiry & Offers",
    description: "Post your requirements and receive competitive quotes from verified carriers instantly.",
  },
  {
    title: "Share Inquiry & Offer",
    description: "Seamlessly share inquiries and offers across your network and collaborate efficiently.",
  },
  {
    title: "Explore Best Offers",
    description: "Filter by price, route, and carrier rating to find the perfect match for your logistics needs.",
  },
  {
    title: "Freight Network",
    description: "Connect with exporters, shipping lines, forwarders, and logistics partners globally.",
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" />
              <span>Next-Gen Freight Exchange</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Your Digital Gateway to <span className="text-blue-500">Ocean Freight</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Seafrex is revolutionizing the logistics industry by digitizing communication between exporters, shipping lines, and forwarders.
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <a
                  href="https://terminal.seafrex.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 group"
                >
                  Start Shipping Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl border border-zinc-800 transition-all"
                >
                  Learn More
                </Link>
              </MagneticButton>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-zinc-800/50 pt-8">
              <div>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-zinc-500 text-sm">Secure Platform</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-zinc-500 text-sm">Connected Network</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Real-Time</p>
                <p className="text-zinc-500 text-sm">Freight Exchange</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full" />
            <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="text-xs text-zinc-500 font-mono">seafrex_dashboard_v2.0</div>
              </div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                        <Ship className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="w-24 h-2 bg-zinc-800 rounded-full mb-2" />
                        <div className="w-16 h-1.5 bg-zinc-900 rounded-full" />
                      </div>
                    </div>
                    <div className="w-20 h-8 bg-blue-600/10 border border-blue-500/20 rounded-lg" />
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-600 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-white font-bold mb-1">New Inquiry Received</p>
                  <p className="text-blue-100 text-xs">Route: Mumbai to Dubai</p>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee items={marqueeItems} direction="left" speed={30} />

      {/* Who Is This For */}
      <section className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Who Is This For?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Seafrex is built for startups, small businesses, product teams, and agencies who need reliable digital solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/50 transition-all group"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", f.bg)}>
                  <f.icon className={cn("w-7 h-7", f.color)} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                Streamline Your <span className="text-blue-500">Logistics Workflow</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl"
                  >
                    <h4 className="text-white font-bold mb-2">{p.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{p.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/services" className="text-blue-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Explore All Features <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-[100px] absolute inset-0" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-xl"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white font-bold text-sm">99.9% Secure</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-xl"
                  >
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white font-bold text-sm">Global Reach</p>
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-xl"
                  >
                    <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white font-bold text-sm">Instant Quotes</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-xl"
                  >
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white font-bold text-sm">Mobile Ready</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 px-6 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.1" fill="none" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Take Seafrex Everywhere</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
                Manage your freight operations on the go. Download our mobile app or use our powerful web platform.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-zinc-900 transition-all">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-zinc-400 leading-none">Download on the</p>
                    <p className="text-lg font-bold leading-none">App Store</p>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-zinc-900 transition-all">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-zinc-400 leading-none">Get it on</p>
                    <p className="text-lg font-bold leading-none">Google Play</p>
                  </div>
                </button>
                <MagneticButton>
                  <a 
                    href="https://terminal.seafrex.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all"
                  >
                    <Ship className="w-6 h-6" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold text-blue-400 leading-none">Access the</p>
                      <p className="text-lg font-bold leading-none">Web App</p>
                    </div>
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 bg-white p-4 rounded-3xl shadow-2xl rotate-3">
                <div className="w-full h-full bg-zinc-100 rounded-2xl flex items-center justify-center border-4 border-zinc-200">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-zinc-900 mx-auto mb-4 rounded-lg flex items-center justify-center">
                      <Download className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-zinc-900 font-bold text-sm">Scan to Download</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
