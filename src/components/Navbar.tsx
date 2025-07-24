"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Update active link based on scroll position
      const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement | null);
      const scrollPos = window.scrollY + 80;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && typeof section.offsetTop === "number" && section.offsetTop <= scrollPos) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 shadow-lg backdrop-blur" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="#home" className="flex items-center gap-2" onClick={() => handleNavClick("#home")}> 
          {/* Modern SVG Logo */}
          <span className="inline-block">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19" cy="19" r="19" fill="url(#paint0_linear)" />
              <path d="M12 25L19 13L26 25" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="19" cy="25" r="1.7" fill="#fff" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#818cf8" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="text-xl font-bold tracking-wide text-white">Sufiyan</span>
        </Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative px-2 py-1 font-semibold transition text-white hover:text-cyan-400 focus:outline-none ${active === link.href ? "text-cyan-400" : ""}`}
            >
              {link.name}
              {active === link.href && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400 rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </div>
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-7 h-1 bg-white rounded transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-7 h-1 bg-white rounded transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-7 h-1 bg-white rounded transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-900/95 px-4 pb-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-lg font-semibold text-white py-2 px-2 rounded hover:bg-cyan-700/20 transition ${active === link.href ? "text-cyan-400" : ""}`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
} 