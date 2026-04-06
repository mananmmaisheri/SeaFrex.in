import { Ship, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "@/src/components/MagneticButton";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Ship className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">
              SEAFREX
            </span>
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Revolutionizing ocean freight with cutting-edge digital solutions. Connecting shippers, carriers, and forwarders in a seamless ecosystem.
          </p>
          <div className="flex gap-4">
            <MagneticButton>
              <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-blue-400 transition-all block">
                <Twitter className="w-4 h-4" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-blue-400 transition-all block">
                <Linkedin className="w-4 h-4" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-blue-400 transition-all block">
                <Facebook className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Product</h4>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-zinc-400 hover:text-white text-sm transition-colors">Freight Exchange</Link></li>
            <li><Link to="/services" className="text-zinc-400 hover:text-white text-sm transition-colors">Network Builder</Link></li>
            <li><Link to="/services" className="text-zinc-400 hover:text-white text-sm transition-colors">Real-time Tracking</Link></li>
            <li><Link to="/services" className="text-zinc-400 hover:text-white text-sm transition-colors">GATEPASS</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-zinc-400 hover:text-white text-sm transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-zinc-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-zinc-400">
              <Mail className="w-4 h-4 text-blue-500 mt-0.5" />
              <span>support@seafrex.in</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-zinc-400">
              <Phone className="w-4 h-4 text-blue-500 mt-0.5" />
              <span>+91 1234567890</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-zinc-400">
              <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
              <span>101 Virtual Address, Mumbai, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-xs text-center md:text-left">
          © 2025 Seafrex. All rights reserved. Built with precision for the logistics industry.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs transition-colors">Terms</a>
          <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs transition-colors">Privacy</a>
          <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
