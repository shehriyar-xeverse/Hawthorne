import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Bike, 
  Wrench, 
  Zap, 
  Globe, 
  Droplet, 
  Activity, 
  Shield, 
  Sliders, 
  HelpCircle, 
  ChevronDown, 
  Calendar, 
  CornerDownRight, 
  ArrowLeft,
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { Page, ServiceId, ServiceDetail } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import AnimatedImage from '../components/AnimatedImage';

interface ServicesProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  selectedServiceId: ServiceId | null;
  setSelectedServiceId: (id: ServiceId | null) => void;
}

export default function Services({ 
  currentPage, 
  setCurrentPage, 
  selectedServiceId, 
  setSelectedServiceId 
}: ServicesProps) {
  
  const [filterCategory, setFilterCategory] = useState<'all' | 'eco' | 'import' | 'diagnostics' | 'drivetrain'>('all');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car': return Car;
      case 'Bike': return Bike;
      case 'Wrench': return Wrench;
      case 'Zap': return Zap;
      case 'Globe': return Globe;
      case 'Droplet': return Droplet;
      case 'Activity': return Activity;
      case 'Shield': return Shield;
      case 'Sliders': return Sliders;
      default: return Wrench;
    }
  };

  // Safe category filtering for the master overview
  const filteredServices = SERVICES_DATA.filter(service => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'eco') return ['oil', 'hybrid', 'bike'].includes(service.id);
    if (filterCategory === 'import') return ['import', 'auto', 'tuneups'].includes(service.id);
    if (filterCategory === 'diagnostics') return ['engine', 'hybrid', 'tuneups', 'auto'].includes(service.id);
    if (filterCategory === 'drivetrain') return ['suspension', 'transmission', 'engine'].includes(service.id);
    return true;
  });

  // Load the currently selected service
  const currentService = SERVICES_DATA.find(s => s.id === selectedServiceId);

  const handleBookingClick = () => {
    setCurrentPage('appointment' as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectService = (id: ServiceId) => {
    setSelectedServiceId(id);
    setOpenFaqIdx(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-0 text-brand-charcoal overflow-hidden @container">
      
      <AnimatePresence mode="wait">
        
        {/* VIEW A: master index grid */}
        {!selectedServiceId ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-0"
          >
            {/* Header layout */}
            <section className="py-24 bg-gradient-to-tr from-[#FCFAF7] via-[#FDFBF9] to-brand-sage-light/35 border-b border-brand-sage-light/50 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
              <div className="max-w-7xl mx-auto space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#DF9D7C] font-semibold block">Craftsmanship Catalog</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-none">
                  Our Specialised Services
                </h1>
                <p className="text-sm sm:text-base text-brand-charcoal/70 max-w-xl leading-relaxed">
                  From clean hybrid optimizations to professional clutch replacements and custom commuter bicycle tunings. Fully protected by our signature 36-month / 36,000-mile warranty.
                </p>
              </div>
            </section>

            {/* Filter Buttons & Cards Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
              
              {/* Category Toggles */}
              <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 pb-2 border-b border-brand-sage-light/50">
                {(['all', 'eco', 'import', 'diagnostics', 'drivetrain'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-4.5 py-2 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      filterCategory === cat 
                        ? 'bg-brand-sage text-white border border-brand-sage shadow-sm' 
                        : 'bg-white border border-brand-sage-light/60 text-brand-charcoal/80 hover:bg-brand-peach/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Master Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => {
                  const IconComponent = getIcon(service.iconName);
                  return (
                    <motion.div 
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
                      className="group rounded-2xl overflow-hidden bg-white border border-brand-sage-light/40 shadow-sm hover:shadow-xl hover:border-brand-sage-light/80 hover:shadow-[0_12px_30px_rgba(91,109,88,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      {/* Thumbnail photo */}
                      <div className="relative h-44 overflow-hidden bg-brand-cream-dark/30">
                        <AnimatedImage 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full"
                          imgClassName="group-hover:scale-103 transition-all duration-500"
                        />
                        <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-sm border border-brand-sage-light/40 text-brand-sage-dark group-hover:scale-105 transition-transform shadow-sm">
                          <IconComponent className="w-5 h-5 text-brand-sage-dark" />
                        </div>
                      </div>

                      {/* Info Text block */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="font-display font-extrabold text-lg text-brand-charcoal group-hover:text-brand-sage-dark transition-colors mb-2 leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed line-clamp-3">
                            {service.shortDescription}
                          </p>
                        </div>

                        <div className="pt-6 border-t border-brand-sage-light/40 mt-6 flex items-center justify-between">
                          <button
                            onClick={() => selectService(service.id)}
                            className="text-xs font-mono font-bold text-brand-sage-dark hover:text-brand-peach-dark transition-colors flex items-center shrink-0 cursor-pointer"
                          >
                            Read Full Details 
                            <CornerDownRight className="w-3.5 h-3.5 ml-1" />
                          </button>
                          
                          <button
                            onClick={handleBookingClick}
                            className="px-3.5 py-1.5 bg-brand-peach/15 rounded-full text-xs font-mono font-bold text-brand-sage-dark hover:bg-brand-peach/30 transition-colors shrink-0 cursor-pointer"
                          >
                            Schedule
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </section>
          </motion.div>
        ) : (
          
          /* VIEW B: Dedicated detailed subpage for a specific chosen service */
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-0"
          >
            {/* 1. BACK BUTTON ROW */}
            <div className="bg-[#FCFAF7] border-b border-brand-sage-light/50 py-4 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <button
                  onClick={() => setSelectedServiceId(null)}
                  className="inline-flex items-center text-xs font-mono font-bold text-brand-sage-dark hover:text-brand-peach-dark transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Main Services List
                </button>
              </div>
            </div>

            {/* 2. DYNAMIC HERO WORKSHOP PANEL */}
            <section className="relative py-20 bg-gradient-to-tr from-brand-peach-light/40 via-[#FCFAF7] to-brand-sage-light/20 border-b border-brand-sage-light/50 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Top Badge matching our detail icon */}
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-peach/25 border border-brand-peach/40 text-brand-sage-dark text-xs font-mono font-bold uppercase tracking-wider">
                    <span>Precision Subdivision</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-none">
                    {currentService?.title}
                  </h1>

                  <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans max-w-2xl">
                    {currentService?.description}
                  </p>

                  <div className="pt-3 flex flex-wrap gap-4">
                    <button
                      onClick={handleBookingClick}
                      className="px-6 py-3 bg-brand-sage text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-sage-dark shadow-sm transition-all cursor-pointer"
                    >
                      Book service now
                    </button>
                    <a
                      href="tel:5032345678"
                      className="px-6 py-3 border border-brand-sage-light text-brand-charcoal hover:bg-brand-peach/10 text-xs font-semibold uppercase tracking-wider rounded-full transition-all flex items-center justify-center font-mono"
                    >
                      Call: (503) 234-5678
                    </a>
                  </div>

                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl max-w-[420px] mx-auto lg:max-w-none bg-brand-cream-dark/30">
                    <AnimatedImage 
                      src={currentService?.image || ''} 
                      alt={currentService?.title || ''}
                      className="w-full aspect-[4/3]"
                    />
                  </div>
                </div>

              </div>
            </section>

            {/* 3. DETAILED BENEFITS GRID */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-cream-dark/10 max-w-7xl mx-auto rounded-3xl my-10 border border-brand-sage-light/35">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                <div className="lg:col-span-4 space-y-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#5B6D58] font-bold block">Key Merits</span>
                  <h3 className="font-display font-extrabold text-2xl text-brand-charcoal">
                    Primary Benefits of This Specialist Care
                  </h3>
                  <div className="h-1 w-12 bg-brand-peach rounded" />
                  <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                    Designed to ensure mileage protection, emissions support, and absolute drivetrain integrity on Portland roads.
                  </p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {currentService?.benefits.map((benefit, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-brand-sage-light/40 shadow-sm flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-snug">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* 4. PROCESS STEPS PIPELINE */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FCFAF7] border-b border-brand-sage-light/20">
              <div className="max-w-4xl mx-auto space-y-12">
                
                <div className="text-center space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-brand-peach-dark font-semibold block">Step-By-Step Workflow</span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-charcoal">
                    Our Specialized Diagnostic & Service Process
                  </h3>
                  <div className="h-1 w-16 bg-brand-sage mx-auto rounded" />
                </div>

                <div className="relative border-l-2 border-brand-sage mr-2 ml-4 sm:ml-40 space-y-8 pt-4">
                  {currentService?.processSteps.map((step, idx) => (
                    <div key={idx} className="relative pl-8 sm:pl-12 group">
                      
                      {/* Label block of index to Left */}
                      <div className="absolute right-[calc(100%+16px)] top-0 font-display font-extrabold text-brand-sage-dark text-base tracking-widest uppercase hidden sm:block">
                        Step 0{idx + 1}
                      </div>

                      {/* Check nodes */}
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-peach border-2 border-brand-sage shadow" />

                      <div className="space-y-1">
                        <span className="font-mono text-[9px] font-bold text-brand-peach-dark uppercase tracking-wide block sm:hidden">
                          Step 0{idx + 1}
                        </span>
                        <h4 className="font-display font-bold text-base text-brand-charcoal">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed max-w-xl">
                          {step.desc}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* 5. RELATED SERVICES SHORTCUTS */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FCFAF7] border-b border-brand-sage-light/20">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <h4 className="font-mono text-xs uppercase tracking-widest text-brand-sage-dark font-bold">
                  Combine For Synergy
                </h4>
                <p className="text-xs text-brand-charcoal/60">
                  Select related maintenance subsystems to secure dual checkpoint bundles during your shop stop:
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center pt-2">
                  {currentService?.relatedServiceIds.map((relId) => {
                    const matchedRel = SERVICES_DATA.find(s => s.id === relId);
                    if (!matchedRel) return null;
                    return (
                      <button
                        key={relId}
                        onClick={() => selectService(relId as ServiceId)}
                        className="px-4 py-2 bg-white hover:bg-brand-peach/10 border border-brand-sage-light/60 text-xs text-brand-charcoal font-medium rounded-full transition-all cursor-pointer"
                      >
                        {matchedRel.title} &rarr;
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 6. FAQ SECTION (COLLAPSIBLE ACCORDIONS) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FCFAF7] border-b border-brand-sage-light/20">
              <div className="max-w-3xl mx-auto space-y-10">
                
                <div className="text-center space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#DF9D7C] font-semibold block">Informed Ownership</span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-charcoal">
                    Frequently Asked Questions
                  </h3>
                  <div className="h-1 w-16 bg-brand-peach mx-auto rounded" />
                </div>

                <div className="space-y-4">
                  {currentService?.faqs.map((faq, idx) => {
                    const isOpen = openFaqIdx === idx;
                    return (
                      <div 
                        key={idx}
                        className="rounded-2xl border border-brand-sage-light/50 bg-white overflow-hidden shadow-sm transition-all"
                      >
                        <button
                          onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                          className="w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                        >
                          <span className="font-display font-bold text-sm sm:text-base text-brand-charcoal pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown className={`w-5 h-5 text-brand-sage transition-transform duration-300 shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`} />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden bg-[#FCFAF7] border-t border-brand-sage-light/30"
                            >
                              <p className="px-6 py-4.5 text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-sans">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>

            {/* 7. APPOINTMENT REDIRECT CTA CARD */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-charcoal to-brand-sage-dark text-white text-center relative rounded-3xl max-w-5xl mx-auto my-14 shadow-lg border border-brand-sage">
              <div className="space-y-6 max-w-xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-peach">Ready to book?</span>
                <h3 className="font-display font-extrabold text-2xl sm:text-4xl leading-none">
                  Secure Your {currentService?.title} Inspection Slot
                </h3>
                <p className="text-xs sm:text-sm text-white/70">
                  Select your appointment date, enter vehicle details, and our automated notification system will trigger confirmation alerts instantly.
                </p>
                
                <div className="pt-2">
                  <button
                    onClick={handleBookingClick}
                    className="inline-flex items-center px-8 py-3.5 bg-[#F6C8B2] text-brand-charcoal hover:bg-[#FBECE5] font-display font-extrabold text-xs tracking-wider uppercase rounded-full shadow transition-all cursor-pointer"
                  >
                    Open Dynamic Scheduling Board 
                    <Calendar className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </section>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
