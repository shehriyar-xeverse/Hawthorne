import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  Leaf, 
  History, 
  MapPin, 
  Phone, 
  Compass, 
  CheckCircle, 
  Award, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Page, ServiceId } from '../types';
import AnimatedImage from '../components/AnimatedImage';
import clinicShopExteriorImg from '../assets/images/clinic_shop_exterior_1781719716961.jpg';
import ownerTericaImg from '../assets/images/owner_terica_1781719779694.jpg';

interface AboutProps {
  setCurrentPage: (page: Page) => void;
  setSelectedServiceId: (id: ServiceId | null) => void;
}

export default function About({ setCurrentPage, setSelectedServiceId }: AboutProps) {
  
  const timelineEvents = [
    {
      year: '1983',
      title: 'Our Foundation',
      desc: 'Hawthorne Auto Clinic opened doors off Hawthorne Boulevard, focusing purely on honest, reliable, and family-owned vehicle services.'
    },
    {
      year: '1998',
      title: 'Inaugural Eco-Certification',
      desc: 'Became one of Portlands first auto garages to eliminate eco-hazardous chlorinated solvents, pioneering waste-oil thermal reclamation systems.'
    },
    {
      year: '2012',
      title: 'Technical Expansion & EVs',
      desc: 'Broadened service capacity to master initial generations of hybrid batteries, starting from early Prius drives up to modern full EV cooling setups.'
    },
    {
      year: '2022',
      title: 'Second-Generation Vision',
      desc: 'Terica Buckner assumed leadership, modernizing diagnostics, incorporating digital inspections, and creating an inclusive waiting lounge.'
    }
  ];

  const coreValues = [
    {
      title: 'Environmental Responsibility',
      desc: 'We capture and recycle 100% of used lubricants, and scrub tools with closed-loop biodissolvents to keep local regional watersheds pristine.',
      icon: Leaf,
      color: 'text-[#889D84] bg-brand-sage/10 border-brand-sage/20'
    },
    {
      title: 'A Culture of Inclusion',
      desc: 'A proud female-led garage prioritizing gender-aligned transparency, clear simple answers, and welcoming setups for families and pets.',
      icon: Heart,
      color: 'text-brand-peach-dark bg-brand-peach/10 border-brand-peach/20'
    },
    {
      title: 'Honest Digital Evidence',
      desc: 'Our inspects are fully transparent. Each report features high-resolution photos sent to your device so you hold complete repair proof.',
      icon: Compass,
      color: 'text-blue-500 bg-blue-50 border-blue-100'
    }
  ];

  const handleBookingClick = () => {
    setCurrentPage('appointment' as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePopularService = (id: ServiceId) => {
    setSelectedServiceId(id);
    setCurrentPage('services' as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-0 text-brand-charcoal overflow-hidden @container">
      
      {/* 1. HERO BANNER */}
      <section className="relative py-28 bg-gradient-to-tr from-[#FCFAF7] via-[#FDFBF9] to-brand-peach-light/30 border-b border-brand-sage-light/50 px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="absolute top-0 right-10 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-sage-light text-brand-sage-dark text-xs font-mono font-bold uppercase tracking-widest">
              <History className="w-4 h-4 text-brand-sage" />
              <span>Est. 1983 in Portland, OR</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-none">
              About Our Shop <br />
              in <span className="text-brand-sage-dark relative">
                Portland, Oregon
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-brand-peach opacity-30 -z-10 rounded" />
              </span>
            </h1>

            <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed max-w-xl mx-auto md:mx-0">
              For over forty years, we have kept Portlands commuters safe on the roads through premier workmanship, absolute transparency, and a profound respect for our local ecosystem. Take a journey with us.
            </p>
          </div>

          <div className="md:col-span-5 relative mt-6 md:mt-0">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-lg mx-auto max-w-[340px] md:max-w-none">
              <img 
                src={clinicShopExteriorImg} 
                alt="Hawthorne Auto Clinic peach storefront with forest green awning"
                className="w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY STORY STORYLINE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FCFAF7] border-b border-brand-sage-light/20">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#DF9D7C] font-semibold">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal">
              A Commitment to Your Success
            </h2>
            <div className="h-1 bg-brand-peach w-16 mx-auto rounded" />
          </div>

          {/* Timeline Nodes */}
          <div className="relative border-l-2 border-brand-sage-light ml-4 sm:ml-32 space-y-12">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-12 group">
                
                {/* Year Label left of bar for wide monitors */}
                <div className="absolute right-[calc(100%+16px)] top-0 font-display font-extrabold text-brand-sage-dark text-xl sm:text-2xl tracking-tight hidden sm:block">
                  {evt.year}
                </div>

                {/* Bullet point nodes */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-peach border-2 border-brand-sage-dark shadow group-hover:scale-125 transition-transform duration-200" />

                <div className="space-y-2">
                  <span className="font-mono text-[10px] font-bold text-brand-peach-dark uppercase tracking-widest inline-block sm:hidden">
                    {evt.year}
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-brand-charcoal group-hover:text-brand-sage-dark transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed max-w-xl">
                    {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. OWNER SPOTLIGHT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream-dark/20 border-b border-brand-sage-light/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="absolute inset-0 bg-brand-peach/15 rounded-3xl blur-2xl -z-10" />
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl max-w-[420px] mx-auto lg:max-w-none">
              <img 
                src={ownerTericaImg} 
                alt="Terica Buckner smiling"
                className="w-full object-cover aspect-[4/5] object-center scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-brand-peach-dark font-mono text-xs uppercase tracking-widest font-semibold">
              <Award className="w-4 h-4" />
              <span>Owner Spotlight</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight leading-none">
              Terica Buckner
            </h2>
            <p className="text-sm text-brand-sage-dark uppercase font-mono tracking-wider font-bold">
              Visionary Owner, Hawthorne Auto Clinic inc.
            </p>
            <div className="h-1.5 w-16 bg-brand-sage rounded" />

            <div className="space-y-4 font-sans text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
              <p>
                "At Hawthorne, we operate under a simple but powerful truth: automotive care should hold total clarity, premium execution, and respect for our local ecosystem. As a second-generation leader who assumed operations in 2022, my mission is to provide an inclusive workshop environment where drivers receive zero pressure, clear digital photo evidence, and technical confidence."
              </p>
              <p>
                Tericas leadership is deeply rooted in local community partnerships, creating an ASE Blue Seal level of craftsmanship while supporting eco-responsible regional guidelines and cargo-bicycle commuter access models.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-sage-light/65">
              <div>
                <strong className="block text-xl text-brand-sage-dark font-display font-extrabold">Decades</strong>
                <span className="text-xs text-brand-charcoal/60 uppercase tracking-wider font-mono">Portland Resident</span>
              </div>
              <div>
                <strong className="block text-xl text-brand-sage-dark font-display font-extrabold">ASE</strong>
                <span className="text-xs text-brand-charcoal/60 uppercase tracking-wider font-mono">Certified Operations</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. COMPANY CORE VALUES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FCFAF7] border-b border-brand-sage-light/20">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B6D58] font-semibold">Our DNA</span>
            <h2 className="text-3xl font-extrabold text-brand-charcoal">
              Quality & Workmanship is Our Bond
            </h2>
            <div className="h-1 w-16 bg-[#F6C8B2] mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-brand-sage-light/40 shadow-sm flex flex-col items-start space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className={`p-3 rounded-xl border ${val.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-brand-charcoal leading-tight">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-sans">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. CUSTOMER-FOCUSED (SPLIT LAYOUT) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream border-b border-brand-sage-light/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-peach-dark font-semibold block">Human-Centered Model</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight leading-none animate-fade-in">
              Creating Trusting, Lifelong Drivetrain Safety
            </h2>
            <div className="h-1.5 w-16 bg-brand-sage rounded animate-pulse" />

            <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans">
              We look at your vehicle through a preventative, long-term safety lens rather than a quick transactional sale. Our goal is to walk side-by-side with you, keeping your mileage optimized, emissions checked, and tires secure across the changing seasons.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-1 rounded bg-[#E9ECE8] text-[#5B6D58] shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-brand-charcoal/80 leading-snug">
                  <strong>Personal Consultation:</strong> Tap on the phone button anytime to speak directly with an expert mechanic about weird vehicle noises or error codes.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-1 rounded bg-[#E9ECE8] text-[#5B6D58] shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-brand-charcoal/80 leading-snug">
                  <strong>Long-Term History Logs:</strong> We catalog every digital file of your oil viscosity, brake thickness, and diagnostic scans for seamless compliance records.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={handleBookingClick}
                className="inline-flex items-center px-6 py-3 rounded-full bg-brand-sage text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-sage-dark transition-all duration-200 cursor-pointer"
              >
                Schedule Appointment 
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div 
              onClick={() => handlePopularService('hybrid')}
              className="rounded-2xl bg-white border border-[#DEE2DC] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col overflow-hidden aspect-video sm:aspect-square cursor-pointer group"
            >
              <div className="h-1/2 overflow-hidden relative shrink-0 bg-brand-cream-dark/30">
                <AnimatedImage 
                  src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=500&q=80" 
                  alt="Hybrid & EV Tech Inspection"
                  className="w-full h-full"
                  imgClassName="group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 z-20 bg-[#FCFAF7]/95 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-[10px] font-mono text-brand-sage-dark font-bold shadow-sm">
                  Popular #1
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow justify-center bg-[#FCFAF7]">
                <h4 className="font-display font-extrabold text-[15px] sm:text-base text-brand-charcoal leading-tight mb-1 group-hover:text-brand-sage-dark transition-colors">
                  Hybrid & EV Battery Testing
                </h4>
                <p className="text-[11px] sm:text-xs text-brand-charcoal/70 leading-relaxed">Module cells balancing & cooling pumps reset.</p>
              </div>
            </div>
            
            <div 
              onClick={() => handlePopularService('auto')}
              className="rounded-2xl bg-white border border-[#DEE2DC] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col overflow-hidden aspect-video sm:aspect-square cursor-pointer group"
            >
              <div className="h-1/2 overflow-hidden relative shrink-0 bg-brand-cream-dark/30">
                <AnimatedImage 
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=500&q=80" 
                  alt="Import Diagnostic Software"
                  className="w-full h-full"
                  imgClassName="group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 z-20 bg-[#FCFAF7]/95 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-[10px] font-mono text-brand-sage-dark font-bold shadow-sm">
                  Popular #2
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow justify-center bg-[#FCFAF7]">
                <h4 className="font-display font-extrabold text-[15px] sm:text-base text-brand-charcoal leading-tight mb-1 group-hover:text-brand-sage-dark transition-colors">
                  Import Diagnostic Software
                </h4>
                <p className="text-[11px] sm:text-xs text-brand-charcoal/70 leading-relaxed">Factory level coding checks for Toyota, VW, Audi, Subaru.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. VISIT US TODAY & BEAUTIFUL SIMULATED MAP */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FCFAF7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#DF9D7C] font-semibold block">Locate Us</span>
            <h2 className="text-3xl font-extrabold text-brand-charcoal leading-none">
              Visit Us Off Hawthorne
            </h2>
            <p className="text-sm text-brand-charcoal/70 leading-relaxed">
              We are located off SE Hawthorne Boulevard in Portland. Look for our distinct peach building adjacent to Common Grounds Coffee—a perfect spot to grab a tea while we test your ride!
            </p>

            <div className="space-y-4 pt-2 font-sans">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-peach-dark shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-brand-charcoal">Address</h4>
                  <p className="text-xs text-brand-charcoal/70">4307 SE Hawthorne Blvd, Portland, OR 97215</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#889D84] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-brand-charcoal">Phone Line</h4>
                  <a href="tel:5032345678" className="text-xs text-brand-sage-dark hover:underline font-mono">(503) 234-5678</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-charcoal/40 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-brand-charcoal">Hours</h4>
                  <p className="text-xs text-brand-charcoal/70">Mon - Fri: 8:00 AM - 5:30 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={handleBookingClick}
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-brand-sage text-white text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-brand-sage-dark shadow transition-all cursor-pointer"
              >
                Schedule Check-Up
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            
            {/* Simulated interactive premium map rendering with HTML5 & clean vector elements */}
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-md border-2 border-brand-sage-light/60 bg-[#FCFAF7] flex flex-col justify-between">
              
              {/* Map background grid simulation */}
              <div className="absolute inset-0 z-0 bg-brand-cream-dark/40 overflow-hidden pointer-events-none opacity-90">
                
                {/* Horizontal road blocks */}
                <div className="absolute top-[20%] left-0 right-0 h-10 bg-white border-y border-brand-sage-light/40 flex items-center justify-center font-mono text-[9px] text-brand-charcoal/35 font-bold tracking-widest">
                  SE HAWTHORNE BLVD
                </div>
                <div className="absolute bottom-[20%] left-0 right-0 h-8 bg-white border-y border-brand-sage-light/40" />

                {/* Vertical road block representing intersection */}
                <div className="absolute top-0 bottom-0 left-[40%] w-12 bg-white border-x border-brand-sage-light/40 flex items-center justify-center font-mono text-[9px] text-brand-charcoal/35 font-bold tracking-widest rotate-180 select-none">
                  SE 43RD AVE
                </div>
                <div className="absolute top-0 bottom-0 right-[15%] w-10 bg-white border-x border-brand-sage-light/40" />

                {/* Landscaping / Park Block represent local neighborhood */}
                <div className="absolute top-[32%] right-[5%] w-16 h-12 rounded bg-brand-sage/15 border border-brand-sage/25 flex items-center justify-center text-[8px] font-mono font-bold text-brand-sage-dark tracking-wide">
                  Lawn Block
                </div>

                {/* Common grounds coffee plot */}
                <div className="absolute top-[30%] left-[10%] w-24 h-11 rounded bg-orange-100/50 border border-brand-peach/25 flex items-center justify-center text-[8px] font-mono text-brand-charcoal/60 leading-none text-center px-1 font-semibold">
                  Common Grounds<br />Coffee
                </div>

                {/* Peach building highlight (Hawthorne Auto!) */}
                <div className="absolute top-[30%] left-[45%] w-32 h-14 rounded bg-[#FBECE5] border-2 border-brand-peach flex items-center justify-center text-center font-display font-extrabold text-[10px] text-brand-charcoal tracking-tighter shadow-md select-none animate-pulse">
                  📍 HAWTHORNE<br />AUTO CLINIC
                </div>

              </div>

              {/* Top Banner overlay */}
              <div className="relative z-10 p-3.5 bg-brand-charcoal/90 backdrop-blur-sm text-white flex items-center justify-between text-xs font-mono">
                <span>📍 Simulated Area Navigator (SE Portland)</span>
                <span className="text-brand-peach font-bold animate-pulse">● Shop Is Open</span>
              </div>

              {/* Bottom Instructions overlay */}
              <div className="relative z-10 p-3 bg-[#FCFAF7]/95 border-t border-brand-sage-light/60 flex items-center justify-between text-xs">
                <span className="text-brand-charcoal/70">Tap landmark nodes to explore route adjustments.</span>
                <a 
                  href="https://maps.google.com/?q=4307+SE+Hawthorne+Blvd+Portland+OR+97215"
                  target="_blank"
                  rel="noreferrer referrer"
                  className="font-mono text-[10px] uppercase font-bold text-brand-sage-dark hover:underline flex items-center shrink-0 cursor-pointer"
                >
                  Get Real Maps Directions 
                  <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
