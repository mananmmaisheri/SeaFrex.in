import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Ship, Search, Share2, Mail, CheckCircle, ArrowRight, X, Globe, Zap, Shield, BarChart3, Clock, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "@/src/components/MagneticButton";

const services = [
  {
    title: "Create Inquiry & Offers",
    description: "Create and manage shipping inquiries and freight offers with detailed specifications. Post your requirements and receive competitive quotes from verified carriers instantly.",
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    detailedContent: {
      hero: "Seafrex transforms the traditional, fragmented freight communication process into a structured, real-time digital workflow. The “Create Inquiry & Offers” feature is designed to help you manage your shipping requirements efficiently while gaining access to a competitive global network of logistics partners.",
      sections: [
        {
          title: "Create Detailed Shipping Inquiries",
          icon: Ship,
          content: [
            "Cargo type, weight, and volume",
            "Origin and destination ports",
            "Container type (FCL / LCL / Special equipment)",
            "Preferred shipping schedules and transit time",
            "Additional requirements (documentation, handling, special instructions)"
          ],
          footer: "This ensures clarity and eliminates back-and-forth communication."
        },
        {
          title: "Reach Verified Logistics Partners",
          icon: Globe,
          content: [
            "Once your inquiry is posted, it is instantly visible to a network of verified carriers, freight forwarders, and shipping lines.",
            "This increases your reach and ensures you receive offers from reliable and relevant partners."
          ]
        },
        {
          title: "Receive Competitive Freight Offers",
          icon: Zap,
          content: [
            "Pricing and cost breakdown",
            "Transit time and routing",
            "Service inclusions and conditions",
            "Validity and availability"
          ],
          footer: "All offers are organized in one place, making comparison simple and transparent."
        },
        {
          title: "Compare & Decide Faster",
          icon: BarChart3,
          content: [
            "Compare multiple offers side-by-side",
            "Evaluate pricing, timelines, and service quality",
            "Communicate directly within the platform",
            "Select the best-fit partner with confidence"
          ]
        }
      ],
      whyItMatters: [
        { label: "Saves Time", desc: "eliminates manual follow-ups", icon: Clock },
        { label: "Improves Transparency", desc: "clear and structured communication", icon: Shield },
        { label: "Better Decisions", desc: "compare multiple offers easily", icon: BarChart3 },
        { label: "Expands Network", desc: "connect with global logistics partners", icon: Globe },
        { label: "Increases Efficiency", desc: "everything in one platform", icon: Zap }
      ]
    }
  },
  {
    title: "Share Inquiry & Offer",
    description: "Seamlessly share inquiries and offers across your network. Distribute freight opportunities to multiple partners and collaborate efficiently on shipment details.",
    icon: Share2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    detailedContent: {
      hero: "Seafrex enables seamless collaboration by allowing you to share inquiries and freight offers across your trusted network with just a few clicks. Instead of relying on scattered communication channels, this feature ensures that every opportunity reaches the right partners—instantly and efficiently.",
      sections: [
        {
          title: "Distribute Opportunities Effortlessly",
          icon: Globe,
          content: [
            "Forward inquiries to preferred freight forwarders or carriers",
            "Broadcast opportunities to a wider network for better reach",
            "Ensure the right partners see the right shipments at the right time"
          ],
          footer: "This eliminates delays and maximizes response potential."
        },
        {
          title: "Collaborate with Your Network",
          icon: Share2,
          content: [
            "Share shipment details, requirements, and updates in real-time",
            "Keep all stakeholders aligned within a single platform",
            "Reduce miscommunication and information gaps"
          ],
          footer: "Everything stays organized and accessible—no more lost emails or messages."
        },
        {
          title: "Controlled & Secure Sharing",
          icon: Lock,
          content: [
            "Choose who can view or respond to inquiries/offers",
            "Share selectively within your trusted network",
            "Ensure secure and permission-based collaboration"
          ]
        }
      ],
      whyItMatters: [
        { label: "Network Collaboration", desc: "Stronger ties with partners", icon: Share2 },
        { label: "Higher Visibility", desc: "More offers and better reach", icon: Globe },
        { label: "Faster Decisions", desc: "Quick communication and outcomes", icon: Zap },
        { label: "Centralized Workflow", desc: "Organized and efficient", icon: BarChart3 },
        { label: "Secure Sharing", desc: "Controlled and permission-based", icon: Lock }
      ]
    }
  },
  {
    title: "Explore Best Offers",
    description: "Browse and compare the best shipping offers and freight inquiries available. Filter by price, route, and carrier rating to find the perfect match for your logistics needs.",
    icon: Ship,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    detailedContent: {
      hero: "Seafrex gives you complete visibility into the freight marketplace by allowing you to explore, compare, and evaluate the best available shipping offers and inquiries in real time. This feature empowers you to make smarter logistics decisions based on data, transparency, and flexibility.",
      sections: [
        {
          title: "Discover Opportunities Across the Network",
          icon: Search,
          content: [
            "Browse available shipping opportunities globally",
            "View detailed shipment requirements and offer specifics",
            "Stay updated with the latest market activity"
          ],
          footer: "Everything is centralized, eliminating the need to search across multiple platforms."
        },
        {
          title: "Smart Filters for Precise Results",
          icon: Zap,
          content: [
            "Filter by price range to match your budget",
            "Select preferred routes and ports",
            "Evaluate based on carrier ratings and reliability",
            "Sort by transit time, availability, or service type"
          ]
        },
        {
          title: "Compare Offers with Full Transparency",
          icon: BarChart3,
          content: [
            "Analyze pricing structures and hidden costs",
            "Compare transit times and shipping routes",
            "Evaluate service quality and partner credibility"
          ]
        }
      ],
      whyItMatters: [
        { label: "Market Visibility", desc: "Complete view of opportunities", icon: Globe },
        { label: "Cost Efficiency", desc: "Better pricing and transparency", icon: Zap },
        { label: "Faster Decisions", desc: "Data-driven and quick", icon: Clock },
        { label: "More Opportunities", desc: "Access to global network", icon: Ship },
        { label: "Partner Selection", desc: "Stronger and reliable matches", icon: Shield }
      ]
    }
  },
  {
    title: "Create your Freight Network",
    description: "Build and expand your professional shipping network. Connect with exporters, shipping lines, forwarders, and logistics partners to create a thriving freight ecosystem.",
    icon: Ship,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    detailedContent: {
      hero: "Seafrex empowers you to build, manage, and grow your own professional freight network—bringing together exporters, shipping lines, freight forwarders, and logistics partners into one connected ecosystem.",
      sections: [
        {
          title: "Connect with Trusted Industry Partners",
          icon: Globe,
          content: [
            "Exporters and importers with active shipping needs",
            "Freight forwarders and NVOCCs",
            "Shipping lines and carriers",
            "Logistics service providers"
          ],
          footer: "Build meaningful connections that go beyond one-time transactions."
        },
        {
          title: "Expand Your Global Reach",
          icon: Ship,
          content: [
            "Access partners across multiple regions and trade routes",
            "Enter new markets with reliable connections",
            "Increase visibility within the global freight community"
          ]
        },
        {
          title: "Strengthen Long-Term Relationships",
          icon: Shield,
          content: [
            "Maintain a consistent network of trusted partners",
            "Collaborate on recurring shipments and contracts",
            "Build credibility and reliability over time"
          ]
        }
      ],
      whyItMatters: [
        { label: "Industry Connections", desc: "Stronger and more reliable", icon: Globe },
        { label: "Business Opportunities", desc: "Increased deal flow", icon: Zap },
        { label: "Strategic Partnerships", desc: "Long-term growth", icon: Shield },
        { label: "Seamless Collaboration", desc: "Unified digital environment", icon: Share2 },
        { label: "Global Expansion", desc: "Made easy and accessible", icon: Ship }
      ]
    }
  },
  {
    title: "Auto Emailing / Notifying",
    description: "Receive automatic email notifications and alerts for new inquiries, offers, and shipment updates. Stay informed in real-time without manual monitoring.",
    icon: Mail,
    color: "text-red-500",
    bg: "bg-red-500/10",
    detailedContent: {
      hero: "Seafrex keeps you instantly informed with a smart notification system that ensures you never miss a critical update. From new inquiries to freight offers and shipment changes, all important activities are automatically delivered to you in real time.",
      sections: [
        {
          title: "Instant Email Notifications",
          icon: Mail,
          content: [
            "New inquiries matching your preferences",
            "Incoming freight offers and responses",
            "Updates or changes in shipment details",
            "Status updates on ongoing negotiations"
          ],
          footer: "Stay updated without logging in every time."
        },
        {
          title: "Real-Time Alerts",
          icon: Zap,
          content: [
            "Get notified the moment an offer is received",
            "Respond quickly to secure the best deals",
            "Never miss time-sensitive opportunities"
          ]
        },
        {
          title: "Personalized Settings",
          icon: Shield,
          content: [
            "Customize alerts based on routes, cargo types, or partners",
            "Choose priority notifications for critical updates",
            "Avoid unnecessary noise with smart filtering"
          ]
        }
      ],
      whyItMatters: [
        { label: "Never Miss Updates", desc: "Stay informed 24/7", icon: Mail },
        { label: "Faster Response", desc: "Secure the best deals", icon: Zap },
        { label: "Hassle-Free Tracking", desc: "Automated and reliable", icon: Clock },
        { label: "Personalized Alerts", desc: "Tailored to your needs", icon: Shield },
        { label: "Higher Productivity", desc: "Focus on what matters", icon: BarChart3 }
      ]
    }
  },
  {
    title: "Easy to Response",
    description: "Respond to inquiries and offers with a single click. Manage all communications in one centralized dashboard for fast and efficient freight negotiations.",
    icon: CheckCircle,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    detailedContent: {
      hero: "Seafrex simplifies freight communication by enabling you to respond to inquiries and offers instantly with minimal effort. Designed for speed and clarity, this feature ensures that you can engage, negotiate, and close deals without delays or complexity.",
      sections: [
        {
          title: "One-Click Responses",
          icon: Zap,
          content: [
            "Accept, reject, or counter offers with a single click",
            "Send customized responses without repetitive typing",
            "Take immediate action on time-sensitive opportunities"
          ],
          footer: "Speed gives you a competitive advantage."
        },
        {
          title: "Centralized Communication Hub",
          icon: Share2,
          content: [
            "View all inquiries, offers, and responses in one place",
            "Keep track of ongoing negotiations smoothly",
            "Access complete conversation history anytime"
          ],
          footer: "No lost messages. No confusion."
        },
        {
          title: "Faster Negotiations",
          icon: Clock,
          content: [
            "Reduce back-and-forth communication delays",
            "Instantly engage with multiple partners",
            "Close deals faster with streamlined workflows"
          ]
        }
      ],
      whyItMatters: [
        { label: "Instant Responses", desc: "Faster deals and outcomes", icon: Zap },
        { label: "Unified Communication", desc: "All in one place", icon: Mail },
        { label: "Improved Efficiency", desc: "Work smarter, not harder", icon: BarChart3 },
        { label: "Real-Time Interaction", desc: "Seamless and continuous", icon: Clock },
        { label: "Organized Workflow", desc: "Manage multiple negotiations", icon: Shield }
      ]
    }
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Digital <span className="text-blue-500">Logistics</span> Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Comprehensive tools designed to digitize and streamline every aspect of your ocean freight operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/50 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${s.bg}`}>
                <s.icon className={`w-7 h-7 ${s.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {s.description}
              </p>
              <button 
                onClick={() => setSelectedService(s)}
                className="text-blue-500 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Service Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-zinc-950/80 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-zinc-900 border border-zinc-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${selectedService.bg}`}>
                      <selectedService.icon className={`w-8 h-8 ${selectedService.color}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white">{selectedService.title}</h2>
                  </div>

                  <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                    {selectedService.detailedContent.hero}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {selectedService.detailedContent.sections.map((section, idx) => (
                      <div key={idx} className="p-6 bg-zinc-950/50 border border-zinc-800/50 rounded-3xl">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center">
                            <section.icon className="w-5 h-5 text-blue-500" />
                          </div>
                          <h4 className="text-white font-bold">{section.title}</h4>
                        </div>
                        <ul className="space-y-3 mb-4">
                          {section.content.map((item, i) => (
                            <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        {section.footer && (
                          <p className="text-zinc-500 text-xs italic border-t border-zinc-800/50 pt-4">
                            {section.footer}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-zinc-800/50 pt-12">
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                      <BarChart3 className="w-6 h-6 text-blue-500" />
                      Why It Matters
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedService.detailedContent.whyItMatters.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0">
                            <item.icon className="w-5 h-5 text-zinc-400" />
                          </div>
                          <div>
                            <p className="text-white font-bold text-sm">{item.label}</p>
                            <p className="text-zinc-500 text-xs">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-8 md:p-16 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px] -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
                Featured Product
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">GATEPASS</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Our flagship GATEPASS product simplifies terminal access and container movement tracking. Experience seamless gate operations with real-time digital verification.
              </p>
              <ul className="space-y-4 mb-10">
                {["Digital Gate Entry", "Real-time Verification", "Automated Logging", "Secure Access Control"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <MagneticButton>
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all">
                  Get GATEPASS Demo
                </button>
              </MagneticButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl flex items-center justify-center p-8">
                <div className="text-center">
                  <Ship className="w-24 h-24 text-blue-600 mx-auto mb-6 opacity-20" />
                  <p className="text-zinc-500 font-mono text-xs">GATEPASS_INTERFACE_PREVIEW</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
