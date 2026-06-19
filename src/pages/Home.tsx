import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Shield, 
  Settings, 
  UserCheck, 
  MessageSquareCode, 
  Compass, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  MapPin, 
  Activity, 
  Award, 
  Sparkles,
  Heart,
  Quote,
  Instagram,
  Users,
  CheckCircle2
} from 'lucide-react';
import { Page, ServiceId } from '../types';
import { SERVICES_DATA, REVIEWS_DATA } from '../data/servicesData';
import AnimatedImage from '../components/AnimatedImage';
import mascotImg from '../assets/images/mascot_king_david_1781719756653.jpg';
import shopExteriorImg from '../assets/images/clinic_shop_exterior_1781719716961.jpg';
import ownerTericaImg from '../assets/images/owner_terica_1781719779694.jpg';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
  setSelectedServiceId: (id: ServiceId | null) => void;
}

export default function Home({ setCurrentPage, setSelectedServiceId }: HomeProps) {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  
  // Stats counters state mimicking animated counters on scroll
  const [years, setYears] = useState(0);
  const [vehicles, setVehicles] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    // Elegant incremental counter loading
    const timer = setTimeout(() => {
      let yr = 0, veh = 0, sat = 0;
      const interval = setInterval(() => {
        let updated = false;
        if (yr < 40) { yr += 1; setYears(yr); updated = true; }
        if (veh < 25) { veh += 1; setVehicles(veh); updated = true; }
        if (sat < 99) { sat += 1; setSatisfaction(sat); updated = true; }
        if (!updated) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleServiceClick = (id: ServiceId) => {
    setSelectedServiceId(id);
    setCurrentPage('services' as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingClick = () => {
    setCurrentPage('appointment' as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredChooseUs = [
    {
      title: '36 Mo / 36,000 Mi Warranty',
      desc: 'Our warranty shields you nationwide, ensuring complete peace of mind to match every repair.',
      icon: Shield,
      badge: 'Gold Standard'
    },
    {
      title: 'Full Service Facility',
      desc: 'From hybrid battery calibrations to classic diagnostics, we service any import or domestic engine.',
      icon: Settings,
      badge: 'All-In-One'
    },
    {
      title: 'Certified Technicians',
      desc: 'ASE-certified masters who analyze your vehicles mechanical state with professional integrity.',
      icon: UserCheck,
      badge: 'ASE Master'
    },
    {
      title: 'Digital Diagnostics',
      desc: 'Get continuous status updates directly on your phone, complete with detailed photographs.',
      icon: MessageSquareCode,
      badge: 'Transparency'
    },
    {
      title: 'Commuter Assistance',
      desc: 'Enjoy transportation assistance, shuttle drop-offs, and bicycle support while we work.',
      icon: Compass,
      badge: 'Care First'
    }
  ];

  const instagramPosts = [
    {
      img: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=500&q=80',
      caption: 'Spark plug upgrades in action! Keeping commutes responsive and emissions tidy. ⚡🔧 #PortlandMechanic',
      likes: 124,
      tag: 'ShopLife'
    },
    {
      img: mascotImg,
      caption: 'Mascot spotlight! King David expects you in the lobby for your daily dose of chin scratches. 🐕❤️ #DogFriendly',
      likes: 312,
      tag: 'OfficeMascot'
    },
    {
      img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=80',
      caption: 'Sleek Audi electrical steering diagnostics in the bay today. Precision first for all import builds. 🗺️🚗 #EuroCars',
      likes: 98,
      tag: 'TechPrecision'
    },
    {
      img: shopExteriorImg,
      caption: 'Sunshine on Hawthorne! Look for the peach awning adjacent to Common Grounds Coffee. ☕🍑 #ShopLocal',
      likes: 184,
      tag: 'PortlandCommunity'
    }
  ];

  return (
    <div className="space-y-0 text-brand-charcoal overflow-hidden @container">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-tr from-brand-peach-light/40 via-[#FCFAF7] to-brand-sage-light/30 border-b border-brand-sage-light/50 py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Floating background blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-peach/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-sage/15 rounded-full blur-3xl -z-10 animate-pulse" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-peach/25 border border-brand-peach/40 text-brand-sage-dark text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-brand-peach-dark animate-spin-slow" />
              <span>Redefined Automotive Standard</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.1]">
              Auto Clinic. <br className="hidden sm:inline" />
              <span className="text-brand-sage-dark">Community Forward.</span> <br />
              <span className="relative">
                <span className="relative z-10">Environmentally Conscious.</span>
                <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-3 bg-brand-peach/30 -z-10 rounded" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-brand-charcoal/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We provide Portland drivers with transparent, factory-level car repairs from a neat, friendly workshop. Look for our peach building with green awnings off of Hawthorne, next to Common Grounds Coffee!
            </p>

            {/* CTA list */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={handleBookingClick}
                className="w-full sm:w-auto px-8 py-4 bg-brand-sage text-white font-medium rounded-full shadow-md hover:bg-brand-sage-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                Request Appointment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleServiceClick('hybrid')}
                className="w-full sm:w-auto px-8 py-4 bg-[#FCFAF7] border-2 border-brand-sage-light text-brand-charcoal hover:bg-brand-peach/10 font-medium rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                Explore Services
              </button>
            </div>

            {/* Quick trust bullet points */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-brand-sage-light/60 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-sage-dark">3Yr/36k</div>
                <div className="text-xs text-brand-charcoal/60 uppercase tracking-wider font-mono">Warranty</div>
              </div>
              <div className="text-center lg:text-left border-x border-brand-sage-light/60 px-4">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-sage-dark">ASE Blue</div>
                <div className="text-xs text-brand-charcoal/60 uppercase tracking-wider font-mono">Certified</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-sage-dark">100% Eco</div>
                <div className="text-xs text-brand-charcoal/60 uppercase tracking-wider font-mono">Recycled</div>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-[2.5rem] border border-brand-sage/20 scale-95 pointer-events-none -z-10" />
              
              {/* Main image card */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-[#FCFAF7]">
                <AnimatedImage 
                  src="https://res.cloudinary.com/dju25z9v3/image/upload/v1781725605/clinic_hero_banner_1781719734786_pi2nce.jpg" 
                  alt="Modern clean Hawthorne shop interior showing mechanics raising hybrid vehicle"
                  className="w-full aspect-[4/5]"
                />
                
                {/* Embedded dynamic location widget */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-brand-peach/30 text-brand-peach-dark shrink-0">
                     <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-brand-sage-dark font-bold">Landmark Address</h4>
                    <p className="text-xs font-sans text-brand-charcoal/90 leading-tight mt-0.5">
                      4307 SE Hawthorne Blvd, Portland<br />
                      <span className="text-brand-sage-dark/85 font-semibold">Adjacent to Common Grounds Coffee</span>
                    </p>
                  </div>
                </div>

              </div>
              
              {/* Floating review card */}
              <div className="absolute -top-6 -left-6 p-4 rounded-2xl bg-[#F6C8B2] border border-brand-peach shadow-xl flex items-center space-x-3 max-w-[210px] hidden sm:flex rotate-1 animate-float">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <div className="w-7 h-7 rounded-full bg-brand-sage border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">JD</div>
                  <div className="w-7 h-7 rounded-full bg-brand-peach-dark border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">AW</div>
                </div>
                <div>
                  <div className="flex text-yellow-500 fill-yellow-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div className="text-[10px] font-medium text-brand-charcoal/80 leading-none mt-1">
                    Loved by Portland Drivers
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. VIDEO NARRATIVE SHOWCASE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FCFAF7] border-b border-brand-sage-light/20 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-sage-dark font-semibold">Our Philosophy in Action</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal">
              Watch Our Shop Narrative
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/70 max-w-xl mx-auto">
              Get an insider look at our sustainable facilities, master mechanics, and our dedication to your safety.
            </p>
          </div>

          {/* YouTube Video with custom glass frame and hover glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-brand-sage-light/20 p-2 max-w-3xl mx-auto group hover:shadow-[0_20px_45px_rgba(91,109,88,0.14)] hover:border-brand-sage-light/30 transition-all duration-500 cursor-pointer"
          >
            <div className="relative pb-[56.25%] rounded-2xl overflow-hidden shadow-inner bg-black">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/3MERzr27l-A" 
                title="Hawthorne Auto Clinic Showcase Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Ambient decorative lighting */}
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-brand-peach/15 blur-2xl rounded-full pointer-events-none group-hover:bg-brand-peach/25 transition-colors duration-500" />
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-brand-sage/15 blur-2xl rounded-full pointer-events-none group-hover:bg-brand-sage/25 transition-colors duration-500" />
          </motion.div>

        </motion.div>
      </section>

      {/* 4. STATISTICS WRAPPER */}
      <section className="bg-brand-sage text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-5xl font-extrabold font-display text-[#FBECE5]">
              {years}+
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#FBECE5]/70 uppercase tracking-widest">
              Years of Service
            </p>
          </div>
          
          <div className="space-y-1 border-l border-white/10">
            <div className="text-3xl sm:text-5xl font-extrabold font-display text-[#FBECE5]">
              {vehicles}k+
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#FBECE5]/70 uppercase tracking-widest">
              Vehicles Guarded
            </p>
          </div>
          
          <div className="space-y-1 border-l border-white/10">
            <div className="text-3xl sm:text-5xl font-extrabold font-display text-[#FBECE5]">
              {satisfaction}%
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#FBECE5]/70 uppercase tracking-widest">
              5-Star Satisfaction
            </p>
          </div>
          
          <div className="space-y-1 border-l border-white/10">
            <div className="text-3xl sm:text-5xl font-extrabold font-display text-[#FBECE5]">
              100%
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#FBECE5]/70 uppercase tracking-widest">
              Community Loved
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream-dark/20 border-b border-brand-sage-light/30">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#DF9D7C] font-semibold">Integrity as a Standard</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal">
                Setting the Modern Standard for Automotive Care
              </h2>
            </div>
            <p className="text-sm sm:text-base text-brand-charcoal/70 max-w-sm leading-relaxed">
              We operate completely differently. Transparent communications, technical excellence, and a clean workspace represent our day-to-day commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredChooseUs.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: (idx % 5) * 0.08, ease: 'easeOut' }}
                  className="interactive-card flex flex-col p-6 rounded-2xl bg-white border border-brand-sage-light/40 shadow-sm hover:shadow-xl hover:border-brand-sage-light/80 hover:shadow-[0_12px_30px_rgba(91,109,88,0.06)] hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FBECE5] border border-brand-peach flex items-center justify-center text-brand-peach-dark mb-5 group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-sage-dark uppercase tracking-wider font-semibold mb-1 block">
                    {feat.badge}
                  </span>
                  <h3 className="font-display font-bold text-[#1C2421] text-base group-hover:text-brand-sage-dark transition-colors mb-2 leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-sans text-brand-charcoal/75 leading-relaxed mt-auto">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. SERVICES DYNAMIC OVERVIEW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FCFAF7] border-b border-brand-sage-light/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-sage-dark font-semibold">What We Do Best</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal">
              Modern Specialized Services
            </h2>
            <div className="h-1.5 w-16 bg-brand-peach mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
                className="group relative rounded-2xl overflow-hidden bg-white border border-brand-sage-light/40 shadow-sm hover:shadow-xl hover:border-brand-sage-light/80 hover:shadow-[0_12px_30px_rgba(91,109,88,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image panel */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-charcoal/10 z-10 group-hover:bg-transparent transition-colors duration-300" />
                  <AnimatedImage 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full"
                    imgClassName="group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-mono text-[#5B6D58] uppercase font-bold tracking-wider">
                    Hawthorne Certified
                  </span>
                </div>

                {/* Info Text */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-lg text-brand-charcoal group-hover:text-brand-sage-dark transition-colors leading-tight mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed mb-6 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-brand-sage-light/40 mt-auto flex items-center justify-between">
                    <button
                      onClick={() => handleServiceClick(service.id)}
                      className="text-xs font-mono font-bold text-brand-sage-dark hover:text-brand-peach-dark flex items-center group transition-colors cursor-pointer"
                    >
                      Learn More 
                      <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={handleBookingClick}
                      className="text-xs px-3.5 py-1.5 bg-brand-sage-light text-brand-charcoal/90 rounded-full hover:bg-brand-peach/30 transition-colors font-medium cursor-pointer"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FEMALE-OWNED & OPERATED (SPLIT LAYOUT) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream border-b border-brand-sage-light/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl max-w-[420px] mx-auto lg:max-w-none bg-brand-cream-dark/35">
              <AnimatedImage 
                src={ownerTericaImg} 
                alt="Terica Buckner smiling inside Hawthorne shop"
                className="w-full aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-mono uppercase tracking-widest text-[#FBECE5]">Shop Owner & Leader</p>
                <h4 className="font-display font-extrabold text-xl">Terica Buckner</h4>
                <p className="text-xs text-[#FBECE5]/80">Decades of Automotive Care Leadership</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-peach-dark font-semibold block">A Legacy of Trust</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal leading-tight">
              Women in Automotive Leadership — Empowering Transparent Mechanics
            </h2>
            <div className="h-1.5 w-16 bg-brand-sage rounded" />
            
            <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
              We are incredibly proud to be one of Portlands few fully women-owned and -operated automotive core garages. Our foundational mission from day one has been to break down old industry boundaries through extreme communication clarity, inclusion, and elite technician competence.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-charcoal/80 leading-snug">
                  <strong>Total Diversity:</strong> An inclusive garage welcoming drivers from all paths of life.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-charcoal/80 leading-snug">
                  <strong>Zero Upsells:</strong> Diagnostic reports clearly outline necessary safety tweaks versus long-term advice.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-charcoal/80 leading-snug">
                  <strong>Technical Rigor:</strong> Complete electrical software capabilities on advanced European & Hybrid frames.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-charcoal/80 leading-snug">
                  <strong>Local Charity Partners:</strong> A portion of seasonal revenue supports local schools & bike initiatives.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 7. FAMILY, DOG FRIENDLY & KING DAVID MASCOT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FCFAF7] border-b border-brand-sage-light/20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B6D58] font-semibold block">A Friendly Environment</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal leading-tight">
              A Human-First, Dog-Friendly Waiting Experience
            </h2>
            <div className="h-1.5 w-16 bg-[#F6C8B2] rounded" />

            <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
              We understand that vehicle diagnostics can interrupt your schedule. That is why we provide clean options: wait inside our cozy lobby with high-speed WiFi, complimentary tea, and dog treats, or utilize our shuttle support. Feel free to bring your pets, and meet our fluffy receptionist, King David!
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-brand-peach/15 border border-brand-peach/30">
                <h4 className="font-display font-bold text-sm text-brand-charcoal mb-1">Commuter Shuttles</h4>
                <p className="text-xs text-brand-charcoal/70">Need a lift to your home or office off Hawthorne Blvd? Our shuttle driver will get you there.</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-sage/10 border border-brand-sage/30">
                <h4 className="font-display font-bold text-sm text-brand-charcoal mb-1">Meet King David</h4>
                <p className="text-xs text-brand-charcoal/70">Our gentle Great Pyrenees mascot is in charge of lobby smiles and pet-friendly welcomes.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2">
            {/* Ambient background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-peach/20 rounded-full blur-2xl -z-10" />

            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl max-w-[420px] mx-auto lg:max-w-none bg-brand-cream-dark/35">
              <AnimatedImage 
                src={mascotImg} 
                alt="Fluffy Great Pyrenees dog King David in clean auto shop reception"
                className="w-full aspect-square"
              />
              <div className="absolute bottom-4 right-4 px-4 py-2 bg-brand-charcoal/90 backdrop-blur-sm rounded-xl text-white text-xs border border-white/10 font-mono">
                King David • Lobby Host
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. TESTIMONIALS SLIDER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream-dark/20 border-b border-brand-sage-light/30">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#DF9D7C] font-semibold">True Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal">
              Loved by Hawthorne Commuters
            </h2>
          </div>

          {/* Slider Core */}
          <div className="relative bg-white border border-brand-sage-light/40 rounded-3xl p-8 sm:p-12 shadow-md">
            
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-brand-peach-dark/20 absolute top-6 left-6" />

            <div className="space-y-6 relative z-10 min-h-[160px] flex flex-col justify-center">
              
              <div className="flex justify-center space-x-1 text-yellow-500 fill-yellow-500">
                {[...Array(REVIEWS_DATA[activeReviewIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-brand-charcoal/85 italic leading-relaxed font-sans">
                "{REVIEWS_DATA[activeReviewIdx].text}"
              </p>

              <div>
                <h4 className="font-display font-extrabold text-brand-charcoal text-base">
                  {REVIEWS_DATA[activeReviewIdx].author}
                </h4>
                <p className="text-xs font-mono text-brand-sage-dark mt-0.5">
                  Verified Local Portland Customer • {REVIEWS_DATA[activeReviewIdx].date}
                </p>
              </div>

            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {REVIEWS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIdx(idx)}
                  className={`w-3.5 h-3.5 rounded-full border border-brand-sage transition-all cursor-pointer ${
                    activeReviewIdx === idx ? 'bg-brand-sage w-8' : 'bg-transparent'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 9. INSTAGRAM COMMUNITY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FCFAF7] border-b border-brand-sage-light/20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#5B6D58] font-semibold">Join the Circle</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal">
                Instagram Community Updates
              </h2>
            </div>
            
            <a 
              href="https://instagram.com/hawthorneauto" 
              target="_blank" 
              rel="noreferrer referrer"
              className="inline-flex items-center px-5 py-2.5 bg-brand-charcoal hover:bg-brand-sage text-white text-sm font-sans rounded-xl font-medium transition-all duration-300 shadow-sm"
            >
              <Instagram className="w-4 h-4 mr-2 text-brand-peach" />
              Follow @hawthorneauto
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map((post, idx) => (
              <div 
                key={idx}
                className="group rounded-2xl border border-brand-sage-light/40 overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-brand-cream">
                  <AnimatedImage 
                    src={post.img} 
                    alt={post.caption}
                    className="w-full h-full"
                    imgClassName="group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white z-10">
                    <div className="flex items-center space-x-1.5 text-sm font-mono font-bold">
                      <Heart className="w-4.5 h-4.5 text-brand-peach fill-brand-peach" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-[#FCFAF7]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-wider text-brand-cage-dark z-20">
                    #{post.tag}
                  </span>
                </div>
                
                <div className="p-4 space-y-2">
                  <p className="text-xs text-brand-charcoal/80 leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. ACTIVE CALL TO ACTION BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-charcoal via-[#222E2A] to-brand-charcoal text-white relative">
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-peach/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-44 h-44 bg-brand-sage/15 rounded-full blur-2xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Schedule Your Premium Care Checklist Today
          </h2>
          
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed font-sans">
            Have diagnostic concerns on your hybrid? Need a routine oil change alignment checklist before a road trip? Tap below to access our scheduling page.
          </p>

          <div className="pt-4">
            <button
              onClick={handleBookingClick}
              className="inline-flex items-center px-8 py-4 bg-[#F6C8B2] text-brand-charcoal hover:bg-[#FBECE5] font-display font-black text-sm tracking-wide uppercase rounded-full shadow-lg transition-transform duration-200 hover:scale-102 cursor-pointer"
            >
              Request Appointment Online
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          
          <div className="text-[10px] font-mono text-brand-sage/80 mt-4 uppercase tracking-widest leading-none">
            3-Year / 36,000-Mile Warranty Protects Every Approved Job
          </div>
        </div>
      </section>

    </div>
  );
}
