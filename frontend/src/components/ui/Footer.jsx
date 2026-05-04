import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Music2,
  ArrowRight,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Rooms & Suites", href: "#" },
  { label: "Dining Experience", href: "#" },
  { label: "Spa & Wellness", href: "#" },
  { label: "Events & Meetings", href: "#" },
  { label: "Virtual 360° Tour", href: "#" },
  { label: "Special Offers", href: "#" },
];

const EXPLORE_LINKS = [
  { label: "Gallery", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Book Now", href: "#" },
  { label: "About Noora Resort", href: "#" },
  { label: "AI Concierge", href: "#" },
];

const SOCIAL = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/noora_resort",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://web.facebook.com/p/Noora-Resort-61560754042726/",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@Noora-Resort",
  },
  {
    icon: Music2,
    label: "TikTok",
    href: "https://www.tiktok.com/@nooraresort",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#0d261e] overflow-hidden font-jost">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      {/* Glow Effect */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
          {/* Col 1: Brand & Social */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white tracking-widest uppercase">NOORA HORA</span>
            </Link>

            <p className="text-white/50 text-sm mb-8 max-w-xs leading-relaxed font-light">
              An exclusive sanctuary where timeless luxury meets the raw beauty
              of nature in the heart of Bishoftu.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mb-8">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-gold transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Rating Section */}
            <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 max-w-[200px]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 fill-gold"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 1l2.928 5.955 6.572.955-4.75 4.629 1.12 6.516L10 16l-5.87 3.055 1.12-6.516L.5 7.91l6.572-.955z" />
                  </svg>
                ))}
              </div>
              <div>
                <div className="text-[10px] text-white tracking-[0.2em] uppercase font-medium">
                  5-Star Rated
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Explore */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Explore</h4>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Contact</h4>

            <div className="space-y-4 text-white/50 text-sm font-light">
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-gold" />
                +251 979 484 848
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-gold" />
                reservation@nooraresort.com
              </div>

              <div className="flex gap-3 items-center">
                <MapPin size={16} className="text-gold" />
                Bishoftu, Ethiopia
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="#"
              className="mt-8 inline-flex items-center gap-3 px-8 py-3 bg-gold/10 border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-bold"
            >
              Reserve Now
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white/30 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Noora Hora Branch. All Rights Reserved.
        </div>

        <div>
          <a
            href="https://yanoltech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-6 py-3 rounded-sm bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white hover:border-white hover:shadow-[0_8px_20px_-6px_rgba(255,255,255,0.4)]"
          >
            <span className="font-poppins text-[9px] uppercase tracking-[0.2em] text-white/40 group-hover:text-zinc-500 transition-colors">
              Powered by
            </span>
            <span className="font-poppins font-bold text-white text-[12px] tracking-wide group-hover:text-zinc-950 transition-colors">
              Yanol Tech Solution
            </span>
            <ArrowRight size={12} className="text-white/30 group-hover:text-zinc-900 transition-all group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
