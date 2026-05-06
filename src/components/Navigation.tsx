"use client";
import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `text-sm font-medium transition-colors relative ${
      isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
    } ${isActive ? 'after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full' : ''}`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 text-base font-medium rounded-md ${
      isActive ? 'text-primary bg-slate-50' : 'text-text-secondary hover:text-primary hover:bg-slate-50'
    }`;

  const NavLink = ({ href, className, children, end }: any) => {
    const isActive = pathname ? (end ? pathname === href : pathname.startsWith(href)) : false;
    return (
      <Link href={href} className={className({ isActive })}>
        {children}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-white/90 backdrop-blur-md border-b border-border md:bg-transparent md:border-transparent md:backdrop-blur-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-text-primary">
              Convert<span className="text-primary">Snap</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/" className={navLinkClass} end>Home</NavLink>
            <NavLink href="/web-to-pdf" className={navLinkClass}>Web to PDF</NavLink>
            <NavLink href="/web-to-image" className={navLinkClass}>Web to Image</NavLink>
            <NavLink href="/html-to-pdf" className={navLinkClass}>HTML to PDF</NavLink>
            <NavLink href="/html-to-image" className={navLinkClass}>HTML to Image</NavLink>
          </div>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-text-secondary hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-white overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              <NavLink href="/" className={mobileNavLinkClass} end>Home</NavLink>
              <NavLink href="/web-to-pdf" className={mobileNavLinkClass}>Web to PDF</NavLink>
              <NavLink href="/web-to-image" className={mobileNavLinkClass}>Web to Image</NavLink>
              <NavLink href="/html-to-pdf" className={mobileNavLinkClass}>HTML to PDF</NavLink>
              <NavLink href="/html-to-image" className={mobileNavLinkClass}>HTML to Image</NavLink>
              

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
