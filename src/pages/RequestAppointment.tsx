import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Car, 
  Phone, 
  Mail, 
  User, 
  FileText, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Sparkles, 
  AlertCircle,
  Inbox
} from 'lucide-react';
import { Page, BookingForm } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface RequestAppointmentProps {
  setCurrentPage: (page: Page) => void;
}

export default function RequestAppointment({ setCurrentPage }: RequestAppointmentProps) {
  const [form, setForm] = useState<BookingForm>({
    name: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    serviceRequired: SERVICES_DATA[3].title, // Default to Hybrid ev
    preferredDate: '',
    preferredTime: 'morning',
    notes: ''
  });

  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Calendar specific state
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const generateDaysOfCalendar = () => {
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null); // padding for layout offset
    }
    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }
    return days;
  };

  const handleDaySelect = (day: number) => {
    // Avoid Saturdays (Drop-off only) or Sundays (Closed) ideally, or let them pick
    const selectedDateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();
    
    if (dayOfWeek === 0) {
      alert('We are closed on Sundays! Please select a Monday through Saturday slot.');
      return;
    }

    setSelectedDay(day);
    setForm(prev => ({ ...prev, preferredDate: selectedDateStr }));
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
    setSelectedDay(null);
  };

  const handlePrevMonth = () => {
    const today = new Date();
    if (currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
      return; // prevent scrolling backward past current month
    }
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
    setSelectedDay(null);
  };

  const handleStepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      if (!form.preferredDate) {
        alert('Please pick a calendar date for your appointment slot first.');
        return;
      }
      setCurrentStep(2);
    } else {
      if (!form.name || !form.email || !form.vehicleMake || !form.vehicleModel) {
        alert('Please fill out all required contact and vehicle fields.');
        return;
      }
      triggerBookingSequence();
    }
  };

  const triggerBookingSequence = () => {
    setSubmitting(true);
    
    // Simulate intensive booking coordination and email confirmation triggers
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1800);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      serviceRequired: SERVICES_DATA[3].title,
      preferredDate: '',
      preferredTime: 'morning',
      notes: ''
    });
    setSelectedDay(null);
    setCurrentStep(1);
    setSubmitted(false);
  };

  const calendarDays = generateDaysOfCalendar();

  return (
    <div className="space-y-0 text-brand-charcoal overflow-hidden @container">
      
      {/* 1. HERO BANNER */}
      <section className="relative py-20 bg-gradient-to-tr from-[#FCFAF7] via-brand-sage-light/20 to-[#FDFBF9] border-b border-brand-sage-light/50 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5B6D58] font-semibold block">Booking Desk</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-none">
            Book Your Custom Care Slot
          </h1>
          <p className="text-sm sm:text-base text-brand-charcoal/70 max-w-xl leading-relaxed">
            Choose your preferred date on our interactive scheduler, provide your vehicle information, and let our service manager dispatch automated alerts directly.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC BOOKING CORE CONTAINER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-between mb-12 max-w-md mx-auto relative px-6">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-brand-sage-light -z-10" />
            <div className={`absolute top-1/2 left-0 h-0.5 bg-brand-sage transition-all duration-300 -z-10 ${
              currentStep === 2 || submitted ? 'w-full' : 'w-0'
            }`} />

            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-all ${
                currentStep === 1 && !submitted
                  ? 'bg-brand-sage border-brand-sage text-white shadow-md'
                  : 'bg-white border-brand-sage text-brand-sage-dark'
              }`}>
                {currentStep > 1 || submitted ? <Check className="w-4.5 h-4.5" /> : '1'}
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold mt-2 text-brand-charcoal/80">📅 Pick Slot</span>
            </div>

            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-all ${
                currentStep === 2 && !submitted
                  ? 'bg-brand-sage border-brand-sage text-white shadow-md'
                  : submitted 
                    ? 'bg-white border-brand-sage text-brand-sage'
                    : 'bg-white border-brand-sage-light text-brand-charcoal/40'
              }`}>
                {submitted ? <Check className="w-4.5 h-4.5" /> : '2'}
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold mt-2 text-brand-charcoal/80">🚗 Car Details</span>
            </div>
          </div>

          {/* Master Box wrapper */}
          <div className="p-8 rounded-3xl bg-white border border-brand-sage-light/40 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-peach/10 rounded-full blur-xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="booking-flow"
                  onSubmit={handleStepSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  
                  {/* STEP 1: INTERACTIVE CALENDAR & TIME SELECTION */}
                  {currentStep === 1 && (
                    <motion.div 
                      key="step1"
                      className="space-y-6"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="space-y-1 block mb-2">
                        <h3 className="font-display font-extrabold text-lg text-brand-charcoal">
                          Choose Your Preferred Service & Date
                        </h3>
                        <p className="text-xs text-brand-charcoal/60">
                          Select the care category and tap any active day on the visual monthly grid below.
                        </p>
                      </div>

                      {/* Service Category Pick */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                          Service Level Category *
                        </label>
                        <select
                          name="serviceRequired"
                          value={form.serviceRequired}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                        >
                          {SERVICES_DATA.map((srv) => (
                            <option key={srv.id} value={srv.title}>
                              {srv.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Interactive Calendar widget */}
                      <div className="border border-brand-sage-light/50 rounded-2xl bg-white overflow-hidden shadow-sm">
                        
                        {/* Month Header row */}
                        <div className="p-4 bg-brand-charcoal/95 text-white flex items-center justify-between">
                          <button
                            type="button"
                            onClick={handlePrevMonth}
                            className="p-1 px-2 hover:bg-white/10 rounded-lg text-brand-peach transition-all cursor-pointer"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          
                          <div className="font-display font-extrabold text-sm tracking-widest uppercase">
                            {monthNames[currentMonth]} {currentYear}
                          </div>

                          <button
                            type="button"
                            onClick={handleNextMonth}
                            className="p-1 px-2 hover:bg-white/10 rounded-lg text-brand-peach transition-all cursor-pointer"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Calendar week-days label */}
                        <div className="grid grid-cols-7 gap-1 p-2 border-b border-brand-sage-light text-center text-[10px] font-mono text-brand-charcoal/50 font-bold bg-[#FCFAF7]">
                          <span>SUN</span>
                          <span>MON</span>
                          <span>TUE</span>
                          <span>WED</span>
                          <span>THU</span>
                          <span>FRI</span>
                          <span>SAT</span>
                        </div>

                        {/* Calendar Days grids */}
                        <div className="grid grid-cols-7 gap-1.5 p-3.5 text-center text-xs font-mono">
                          {calendarDays.map((day, idx) => {
                            if (day === null) {
                              return <div key={`empty-${idx}`} />;
                            }
                            
                            const isSelected = selectedDay === day;
                            const dOfW = new Date(currentYear, currentMonth, day).getDay();
                            const isSunday = dOfW === 0;
                            const isSaturday = dOfW === 6;

                            return (
                              <button
                                key={`day-${day}`}
                                type="button"
                                disabled={isSunday}
                                onClick={() => handleDaySelect(day)}
                                className={`h-9 w-full rounded-lg font-bold flex items-center justify-center transition-all cursor-pointer ${
                                  isSunday
                                    ? 'text-brand-charcoal/20 bg-transparent line-through cursor-not-allowed'
                                    : isSelected
                                      ? 'bg-brand-sage text-white shadow border border-brand-sage scale-103'
                                      : isSaturday
                                        ? 'bg-brand-peach/15 hover:bg-brand-peach/30 text-brand-peach-dark'
                                        : 'bg-brand-cream hover:bg-brand-peach/25 text-brand-charcoal'
                                }`}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>

                      </div>

                      {/* Display Selected slot */}
                      {form.preferredDate && (
                        <div className="p-3.5 bg-brand-sage-light/40 border border-brand-sage border-l-4 border-l-brand-sage rounded-xl flex items-center justify-between text-xs font-mono text-brand-sage-dark font-bold animate-fade-in">
                          <span>📅 Selected Slot: {form.preferredDate}</span>
                          <span className="text-[10px] uppercase font-bold text-brand-peach-dark">Valid Link Verified</span>
                        </div>
                      )}

                      {/* Preferred Time block selection */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                          Daytime Block Preference *
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {([
                            { label: 'Morning (8:00 AM - 12:00 PM)', val: 'morning' },
                            { label: 'Afternoon (12:00 PM - 3:30 PM)', val: 'afternoon' },
                            { label: 'Evening (3:30 PM - 5:30 PM)', val: 'evening' }
                          ]).map((tBlock) => {
                            const isSelectedTime = form.preferredTime === tBlock.val;
                            return (
                              <button
                                key={tBlock.val}
                                type="button"
                                onClick={() => setForm(p => ({ ...p, preferredTime: tBlock.val as any }))}
                                className={`px-3 py-3 rounded-xl border text-center font-medium transition-all cursor-pointer text-xs ${
                                  isSelectedTime
                                    ? 'bg-brand-sage text-white border-brand-sage'
                                    : 'bg-white border-brand-sage-light text-brand-charcoal hover:bg-brand-peach/10'
                                }`}
                              >
                                <Clock className="w-4 h-4 mx-auto mb-1 opacity-80" />
                                {tBlock.label.split(' (')[0]}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-brand-sage-light/40 flex justify-end">
                        <button
                          type="submit"
                          className="px-6 py-3 bg-brand-sage hover:bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow cursor-pointer"
                        >
                          Continue to vehicle checks &rarr;
                        </button>
                      </div>

                    </motion.div>
                  )}

                  {/* STEP 2: VEHICLE AND CONTACT INPUTS */}
                  {currentStep === 2 && (
                    <motion.div 
                      key="step2"
                      className="space-y-6"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="space-y-1 block mb-2">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="text-xs text-brand-sage-dark hover:underline font-bold block"
                        >
                          &larr; Back to calendar date selection
                        </button>
                        <h3 className="font-display font-extrabold text-lg text-brand-charcoal pt-2">
                          Vehicle Details & Owner Contact Card
                        </h3>
                        <p className="text-xs text-brand-charcoal/60">
                          Please provide your name, phone, and vehicle specs so we can allocate the correct bays.
                        </p>
                      </div>

                      {/* Contact grid inputs */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                            Full Name *
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-3 text-brand-charcoal/30"><User className="w-4.5 h-4.5" /></span>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleInputChange}
                              required
                              placeholder="Your Name"
                              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                            Email Address *
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-3 text-brand-charcoal/30"><Mail className="w-4.5 h-4.5" /></span>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleInputChange}
                              required
                              placeholder="name@email.com"
                              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-3 text-brand-charcoal/30"><Phone className="w-4.5 h-4.5" /></span>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleInputChange}
                              required
                              placeholder="(503) 000-0000"
                              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                            Vehicle Year *
                          </label>
                          <input
                            type="number"
                            name="vehicleYear"
                            value={form.vehicleYear}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g. 2018"
                            className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                            Vehicle Make *
                          </label>
                          <input
                            type="text"
                            name="vehicleMake"
                            value={form.vehicleMake}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g. Toyota"
                            className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                            Vehicle Model *
                          </label>
                          <input
                            type="text"
                            name="vehicleModel"
                            value={form.vehicleModel}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g. Prius AWD-e"
                            className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                          />
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                            Service Date Check
                          </label>
                          <div className="px-4 py-2.5 font-mono text-xs bg-brand-sage-light text-brand-sage-dark font-bold rounded-xl border border-brand-sage-light/70 uppercase">
                            📅 {form.preferredDate} ({form.preferredTime})
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                          Additional Diagnostic Notes or Concerns
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-brand-charcoal/30"><FileText className="w-4.5 h-4.5" /></span>
                          <textarea
                            name="notes"
                            value={form.notes}
                            onChange={handleInputChange}
                            rows={3}
                            placeholder="E.g., front suspension rattling when hitting speed bumps, check engine light has been blinking occasionally..."
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                          />
                        </div>
                      </div>

                      {/* Direct scheduling action buttons */}
                      <div className="pt-4 border-t border-brand-sage-light/40 flex justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="px-5 py-3 h-10 border border-brand-sage-light hover:bg-[#FBECE5]/30 text-brand-charcoal text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                        >
                          Modify date
                        </button>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="px-6 py-3 h-10 bg-brand-sage hover:bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center cursor-pointer disabled:bg-brand-sage/60"
                        >
                          {submitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Scheduling slots...
                            </>
                          ) : (
                            <>
                              Lock slot & trigger confirm alerts
                              <Sparkles className="w-4.5 h-4.5 ml-2 text-brand-peach" />
                            </>
                          )}
                        </button>
                      </div>

                    </motion.div>
                  )}

                </motion.form>
              ) : (
                
                /* DYNAMIC SUCCESS STATE WITH AUTOMATED EMAIL LOG TRIGGER */
                <motion.div 
                  key="success-card"
                  className="p-8 text-center space-y-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-brand-sage-light border-2 border-brand-sage text-brand-sage-dark flex items-center justify-center mx-auto animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-display font-extrabold text-[#1C2421] text-xl">
                      Appointment Scheduled and Approved!
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal/70 max-w-sm mx-auto leading-relaxed">
                      Dear <strong className="text-brand-sage-dark">{form.name}</strong>, your spot on <strong className="text-brand-peach-dark">{form.preferredDate}</strong> ({form.preferredTime}) has been registered for your <strong>{form.vehicleYear} {form.vehicleMake} {form.vehicleModel}</strong>.
                    </p>
                  </div>

                  {/* Simulated interactive system log demonstrating automation success */}
                  <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-brand-sage-light/65 text-left max-w-sm mx-auto space-y-3.5 shadow-inner">
                    <div className="flex items-center space-x-2 text-brand-sage-dark font-mono text-[10px] font-bold pb-2 border-b border-brand-sage-light/40">
                      <Inbox className="w-4 h-4 text-brand-peach shrink-0 animate-pulse" />
                      <span>SMTP MAIL DISPATCH LOGGER</span>
                    </div>

                    <div className="space-y-2 text-[10px] font-mono text-brand-charcoal/70">
                      <p className="flex justify-between"><span>Sender:</span> <span className="font-bold text-brand-sage-dark">alerts@hawthorneauto.com</span></p>
                      <p className="flex justify-between"><span>Recipient:</span> <span className="font-semibold text-brand-charcoal select-all">{form.email}</span></p>
                      <p className="flex justify-between"><span>Subject:</span> <span className="font-medium text-brand-charcoal/90">Confirmation: Hawthorne Appointment Scheduled</span></p>
                      <p className="flex justify-between text-[9px] text-[#5B6D58] bg-brand-sage-light/40 p-1.5 rounded uppercase mt-2">
                        <span>Status:</span> 
                        <span className="font-medium">Trigger Success • E-Mail Dispatched</span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-brand-peach/25 border border-brand-peach text-xs font-mono font-bold text-brand-sage-dark hover:bg-brand-peach/40 rounded-xl transition-all cursor-pointer"
                    >
                      Book another inspection
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Quick FAQ info panel below form */}
          <div className="mt-8 p-4 rounded-2xl bg-brand-peach/10 border border-brand-peach/30 flex items-start space-x-3.5 max-w-xl mx-auto font-sans text-xs">
            <AlertCircle className="w-5 h-5 text-brand-peach-dark shrink-0 mt-0.5" />
            <p className="text-brand-charcoal/75 leading-relaxed">
              <strong className="text-brand-charcoal">Dropped Vehicles:</strong> Early birds are highly welcome. If dropping your car outside hours on Saturday or early morning, please grab a slot packet card next to the main office door and drop keys into our security vault deposit.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
