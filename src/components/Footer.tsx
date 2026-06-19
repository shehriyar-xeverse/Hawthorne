import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ShieldCheck, Award, Smile, ChevronRight, Check } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  setSelectedServiceId: (id: any) => void;
}

export default function Footer({ setCurrentPage, setSelectedServiceId }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    
    // Simulate API request and email dispatch trigger
    setTimeout(() => {
      setSubscribing(false);
      setSubscribed(true);
      setEmail('');
    }, 1200);
  };

  const handleFooterLink = (page: Page, serviceId: any = null) => {
    setCurrentPage(page);
    setSelectedServiceId(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-12 overflow-hidden border-t-4 border-brand-sage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Presentation */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-lg bg-brand-peach flex items-center justify-center text-brand-charcoal font-display font-extrabold text-base">
                H
              </div>
              <div>
                <h3 className="font-display font-extrabold text-[#FBECE5] tracking-tight leading-none">
                  HAWTHORNE
                </h3>
                <span className="font-display font-light text-xs text-brand-sage tracking-widest leading-none block">
                  AUTO CLINIC
                </span>
              </div>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed font-sans">
              Since 1983, providing Portland commuters with top-tier, honest, female-led, and highly sustainable automotive care. Look for our distinct peach building with green awnings off Hawthorne Boulevard!
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-peach">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ASE Blue Seal</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#889D84]">
                <Award className="w-3.5 h-3.5" />
                <span>Eco-Certified</span>
              </div>
            </div>
          </div>

          {/* Core Links */}
          <div>
            <h4 className="font-display font-bold text-[#FBECE5] text-base tracking-wide mb-6 uppercase">
              Explore Services
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <button 
                  onClick={() => handleFooterLink('services', 'hybrid')}
                  className="hover:text-brand-peach transition-colors flex items-center group cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 mr-1.5 text-brand-sage group-hover:translate-x-1 transition-transform" />
                  Hybrid & EV Diagnostics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLink('services', 'auto')}
                  className="hover:text-brand-peach transition-colors flex items-center group cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 mr-1.5 text-brand-sage group-hover:translate-x-1 transition-transform" />
                  Import & Domestic Tuning
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLink('services', 'suspension')}
                  className="hover:text-brand-peach transition-colors flex items-center group cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 mr-1.5 text-brand-sage group-hover:translate-x-1 transition-transform" />
                  Suspensions & Alignment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLink('services', 'oil')}
                  className="hover:text-brand-peach transition-colors flex items-center group cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 mr-1.5 text-brand-sage group-hover:translate-x-1 transition-transform" />
                  Eco Oil Changes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterLink('services', 'bike')}
                  className="hover:text-brand-peach transition-colors flex items-center group cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 mr-1.5 text-brand-sage group-hover:translate-x-1 transition-transform" />
                  Utility Bicycle Station
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-display font-bold text-[#FBECE5] text-base tracking-wide mb-6 uppercase">
              Open Hours
            </h4>
            <ul className="space-y-3.5 text-sm font-sans text-white/80">
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">Monday - Friday</span>
                <span className="font-mono text-brand-peach">8:00 AM - 5:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">Saturday</span>
                <span className="font-mono text-white/50 text-xs">Drop-offs Only</span>
              </li>
              <li className="flex justify-between pb-1.5">
                <span className="text-white/60">Sunday</span>
                <span className="font-mono text-[#E29E7E] text-xs font-semibold uppercase">Closed</span>
              </li>
            </ul>
            
            <div className="mt-5 p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start space-x-3">
              <Smile className="w-5 h-5 text-brand-peach shrink-0 mt-0.5" />
              <p className="text-xs text-white/70 leading-relaxed">
                <strong className="text-[#FBECE5]">Kid & Pet Friendly:</strong> Meet our furry receptionist, King David, when you stop by!
              </p>
            </div>
          </div>

          {/* Contact Details & Newsletter */}
          <div>
            <h4 className="font-display font-bold text-[#FBECE5] text-base tracking-wide mb-6 uppercase">
              Join Our Care List
            </h4>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <p className="text-xs text-white/70 leading-relaxed">
                Receive local seasonal check-up advice and priority appointments trigger.
              </p>
              
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-sans text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                  required
                  disabled={subscribed || subscribing}
                />
                <button
                  type="submit"
                  disabled={subscribed || subscribing}
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-brand-sage text-white hover:bg-brand-sage-dark disabled:bg-transparent disabled:text-brand-peach transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Submit subscriber email"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
              </div>

              {subscribing && (
                <div className="text-[10px] font-mono text-brand-peach animate-pulse">
                  System Dispatch: Initiating automated trigger sequence...
                </div>
              )}

              {subscribed && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-2.5 rounded-lg bg-brand-sage-dark/40 border border-brand-sage/40 text-[11px] font-mono text-[#FBECE5]"
                >
                  ✉️ <strong className="text-brand-peach">Verification Dispatched:</strong> Automated welcome packet triggered & sent successfully! Check your inbox.
                </motion.div>
              )}
            </form>

            <div className="mt-6 pt-1 space-y-2.5 text-sm font-mono text-white/80 border-t border-white/5 pt-4">
              <a 
                href="https://maps.google.com/?q=4307+SE+Hawthorne+Blvd+Portland+OR+97215"
                target="_blank"
                rel="noreferrer referrer"
                className="flex items-center hover:text-brand-peach transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2 text-brand-peach shrink-0" />
                <span className="text-xs">4307 SE Hawthorne, Portland</span>
              </a>
              <a 
                href="tel:5032345678"
                className="flex items-center hover:text-brand-peach transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-[#889D84] shrink-0" />
                <span className="text-xs">(503) 234-5678</span>
              </a>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 space-y-4 md:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Hawthorne Auto Clinic, Inc. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <button onClick={() => handleFooterLink('about')} className="hover:text-[#FBECE5] transition-colors">About Us</button>
            <button onClick={() => handleFooterLink('services')} className="hover:text-[#FBECE5] transition-colors">Services</button>
            <button onClick={() => handleFooterLink('payments')} className="hover:text-[#FBECE5] transition-colors">Remote Payments</button>
            <span className="text-white/20 select-none">|</span>
            <span className="font-mono text-[10px] text-brand-sage">Sustainability Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
