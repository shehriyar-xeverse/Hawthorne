import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, Car } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  setSelectedServiceId: (id: any) => void;
}

export default function Navbar({ currentPage, setCurrentPage, setSelectedServiceId }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' as Page },
    { label: 'About', value: 'about' as Page },
    { label: 'Services', value: 'services' as Page },
    { label: 'Remote Payments', value: 'payments' as Page },
    { label: 'Contact', value: 'contact' as Page },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setSelectedServiceId(null);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FCFAF7]/95 backdrop-blur-md shadow-[0_4px_22px_rgba(28,36,33,0.08)] border-b border-brand-sage-light/50' 
        : 'bg-[#FCFAF7]/85 backdrop-blur-sm border-b border-brand-sage-light/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand with slight scale-in on load & hover spin/glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group shrink-0 select-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-brand-peach/20 border border-brand-peach/40 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(246,200,178,0.5)] transition-all duration-300 shrink-0">
              <Car className="w-5 h-5 sm:w-6 sm:h-6 text-brand-sage-dark group-hover:rotate-6 transition-transform" />
              <div className="absolute inset-0 rounded-xl bg-brand-sage/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
            </div>
            <div className="min-w-0">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-brand-charcoal block sm:inline-block leading-none">
                HAWTHORNE
              </span>
          
              <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider font-bold text-brand-peach-dark block mt-0.5 truncate">
                AUTO CLINIC
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation with staggered enter and spring bubbles */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item, index) => {
              const isActive = currentPage === item.value;
              return (
                <motion.button
                  key={item.value}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                  whileHover={{ y: -2 }}
                  onClick={() => handleNavClick(item.value)}
                  className={`relative px-4 py-2 rounded-full font-sans text-sm font-medium transition-colors duration-200 group ${
                    isActive ? 'text-brand-sage-dark font-semibold' : 'text-brand-charcoal/70 hover:text-brand-charcoal'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="navBubble"
                      className="absolute inset-0 bg-brand-peach/20 rounded-full border border-brand-peach/30 -z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  ) : (
                    <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-brand-sage-dark/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Quick Contact & Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:5032345678" 
              className="flex items-center text-sm font-mono text-brand-charcoal/80 hover:text-brand-sage-dark transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2 text-brand-sage" />
              (503) 234-5678
            </a>
            <button
              onClick={() => handleNavClick('appointment')}
              className="relative overflow-hidden group flex items-center px-5 py-2.5 bg-brand-sage text-white font-sans text-sm font-medium rounded-full shadow-sm hover:bg-brand-sage-dark transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <a 
              href="tel:5032345678" 
              className="p-2 rounded-full bg-brand-sage-light text-brand-charcoal hover:bg-brand-peach/20 transition-all"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full border border-brand-sage-light/80 text-brand-charcoal hover:bg-brand-peach-light/40 focus:outline-none transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-brand-sage-light bg-[#FCFAF7] shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, idx) => {
                const isActive = currentPage === item.value;
                return (
                  <motion.button
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className={`flex w-full items-center px-4 py-3 rounded-xl text-left text-base font-medium transition-all ${
                      isActive 
                        ? 'bg-brand-peach/20 text-brand-sage-dark border-l-4 border-brand-peach-dark' 
                        : 'text-brand-charcoal/85 hover:bg-brand-sage-light/40 h-11'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
              
              <div className="pt-4 border-t border-brand-sage-light mt-4">
                <button
                  onClick={() => handleNavClick('appointment')}
                  className="flex w-full items-center justify-center px-4 py-3 bg-brand-sage text-white rounded-xl text-sm font-medium hover:bg-brand-sage-dark transition-all duration-200 shadow-sm"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
