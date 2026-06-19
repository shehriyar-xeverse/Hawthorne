import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Instagram, 
  Facebook, 
  Award, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Zap 
} from 'lucide-react';
import { Page } from '../types';

interface ContactProps {
  setCurrentPage: (page: Page) => void;
}

export default function Contact({ setCurrentPage }: ContactProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitting(true);
    
    // Simulate API and automated trigger
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Question',
        message: ''
      });
    }, 1550);
  };

  return (
    <div className="space-y-0 text-brand-charcoal overflow-hidden @container">
      
      {/* 1. HERO BANNER */}
      <section className="relative py-20 bg-gradient-to-tr from-[#FCFAF7] via-brand-sage-light/20 to-[#FDFBF9] border-b border-brand-sage-light/50 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-sage-dark font-semibold block">Continuous Connection</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-none">
            Get In Touch With Us
          </h1>
          <p className="text-sm sm:text-base text-brand-charcoal/70 max-w-xl leading-relaxed">
            Have visual inspection questions? Need immediate towing recommendations or mileage guidance? Reach out now. Our service desk is always happy to support.
          </p>
        </div>
      </section>

      {/* 2. CONTACT MASTER CORE GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Essential Contacts and Map */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#DF9D7C] font-semibold">Direct Channels</span>
              <h2 className="text-2xl font-extrabold text-brand-charcoal">
                Contact & Core Coordinates
              </h2>
              <div className="h-1 w-12 bg-brand-peach rounded" />
            </div>

            {/* Icon Info lists */}
            <div className="space-y-5 font-sans">
              
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-brand-sage-light/40 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-xl bg-brand-peach/20 text-[#DF9D7C] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-charcoal leading-none mb-1.5">Shop Address</h4>
                  <p className="text-xs text-brand-charcoal/75 leading-relaxed">
                    4307 SE Hawthorne Blvd, Portland, OR 97215<br />
                    <span className="text-brand-sage-dark font-semibold">Next to Common Grounds Coffee</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-brand-sage-light/40 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-xl bg-brand-sage/15 text-brand-sage-dark shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-charcoal leading-none mb-1.5">Phone Line</h4>
                  <a href="tel:5032345678" className="text-xs text-brand-sage-dark hover:underline font-mono font-semibold block mb-0.5">
                    (503) 234-5678
                  </a>
                  <span className="text-[10px] text-brand-charcoal/50 uppercase tracking-wider block">Fax: (503) 234-1234</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-brand-sage-light/40 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-charcoal leading-none mb-1.5">Email Dispatch</h4>
                  <a href="mailto:info@hawthorneauto.com" className="text-xs text-brand-sage-dark hover:underline font-mono">
                    info@hawthorneauto.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-brand-sage-light/40 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 rounded-xl bg-brand-cream-dark border border-brand-sage-light/60 text-brand-charcoal/55 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-charcoal leading-none mb-1.5">Operating Hours</h4>
                  <div className="text-xs text-brand-charcoal/75 space-y-1">
                    <p className="flex justify-between space-x-6"><span>Mon - Fri:</span> <span className="font-mono font-semibold">8:00 AM - 5:30 PM</span></p>
                    <p className="flex justify-between space-x-6 text-brand-charcoal/50"><span>Sat:</span> <span className="font-mono text-[10px]">Drop-offs Only</span></p>
                    <p className="flex justify-between space-x-6 text-[#E29E7E] font-semibold"><span>Sun:</span> <span className="font-mono text-[10px] uppercase">Closed</span></p>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Circle Links */}
            <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-brand-sage-light/40 flex items-center justify-between">
              <span className="font-mono text-xs text-brand-charcoal/60 uppercase tracking-widest font-bold">Social Network</span>
              <div className="flex space-x-3">
                <a 
                  href="https://instagram.com/hawthorneauto" 
                  target="_blank" 
                  rel="noreferrer referrer"
                  className="p-2 border border-brand-sage-light hover:bg-[#FBECE5] rounded-full text-brand-sage-dark hover:-translate-y-0.5 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-[#DF9D7C]" />
                </a>
                <a 
                  href="https://facebook.com/hawthorneauto" 
                  target="_blank" 
                  rel="noreferrer referrer"
                  className="p-2 border border-brand-sage-light hover:bg-[#E9ECE8] rounded-full text-brand-sage-dark hover:-translate-y-0.5 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-[#889D84]" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Contact Card Form */}
          <div className="lg:col-span-7">
            
            <div className="p-8 rounded-3xl bg-white border border-brand-sage-light/40 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-peach/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="mb-6 space-y-1">
                <h3 className="font-display font-extrabold text-xl text-brand-charcoal">
                  Direct Messaging Card
                </h3>
                <p className="text-xs text-brand-charcoal/60 font-sans">
                  Submit a query card straight to our front service manager. 
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          required
                          placeholder="name@email.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          placeholder="(503) 000-0000"
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                          Subject Card *
                        </label>
                        <select
                          name="subject"
                          value={formState.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                        >
                          <option>General Question</option>
                          <option>Towing Referral</option>
                          <option>Warranty Coverage</option>
                          <option>Career Opportunities</option>
                        </select>
                      </div>

                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                        Detailed Message *
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Type your message here..."
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 bg-brand-sage hover:bg-brand-sage-dark text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center cursor-pointer disabled:bg-brand-sage/60"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing message system...
                        </>
                      ) : (
                        <>
                          Dispatch Messaging Ticket
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="p-8 text-center space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-sage-light border-2 border-brand-sage text-brand-sage-dark flex items-center justify-center mx-auto animate-bounce">
                      <Check className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-display font-extrabold text-xl text-brand-charcoal">
                        Contact Card Dispatched!
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-charcoal/70 max-w-sm mx-auto leading-relaxed">
                        Your direct message was encoded and pushed to our shop desk successfully. An automated ticket log has registered this interaction.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-brand-sage-light/30 border border-brand-sage-light border-l-4 border-l-brand-sage text-[11px] font-mono text-brand-sage-dark max-w-sm mx-auto text-left">
                       <span>📱 [Automated Alert]: Customer ticket <strong>#HC-CONTACT-{Math.floor(Math.random() * 8999) + 1000}</strong> successfully dispatched. Service desk callback timer initiated.</span>
                    </div>

                    <div>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 bg-brand-peach/25 border border-brand-peach text-xs font-mono font-bold text-brand-sage-dark hover:bg-brand-peach/40 rounded-xl transition-all cursor-pointer"
                      >
                        Submit another card
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* 3. SIMULATED LOCATION MAP GRID */}
      <section className="py-12 bg-brand-cream border-t border-brand-sage-light/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-charcoal/40">Portland regional landmarks</p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-brand-charcoal/60">
            <span className="flex items-center"><Award className="w-4 h-4 text-brand-peach mr-1.5 shrink-0" /> Portland Eco Alliance Partner</span>
            <span className="flex items-center"><ShieldCheck className="w-4 h-4 text-brand-sage mr-1.5 shrink-0" /> ASE Certified Master Technicians</span>
            <span className="text-brand-sage">★ Over 4.9 Stars Average Local Feedback</span>
          </div>
        </div>
      </section>

    </div>
  );
}
