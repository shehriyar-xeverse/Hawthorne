import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  CreditCard, 
  Check, 
  HelpCircle, 
  Phone, 
  ArrowRight, 
  Info, 
  DollarSign, 
  Lock,
  MailCheck,
  Award
} from 'lucide-react';
import { Page, PaymentForm } from '../types';

interface RemotePaymentsProps {
  setCurrentPage: (page: Page) => void;
}

export default function RemotePayments({ setCurrentPage }: RemotePaymentsProps) {
  const [form, setForm] = useState<PaymentForm>({
    customerName: '',
    email: '',
    invoiceNumber: '',
    amount: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    zipCode: ''
  });

  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [paymentStep, setPaymentStep] = useState<1 | 2>(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleStepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentStep === 1) {
      if (!form.customerName || !form.email || !form.invoiceNumber || !form.amount) {
        alert('Please fill out all invoice matching fields first.');
        return;
      }
      setPaymentStep(2);
    } else {
      if (!form.cardNumber || !form.expiryDate || !form.cvv) {
        alert('Please fill in valid secure credit card details.');
        return;
      }
      triggerPaymentApproval();
    }
  };

  const triggerPaymentApproval = () => {
    setProcessing(true);
    
    // Simulate real-time secure clearance gates of payments and immediate automated receipt triggers
    setTimeout(() => {
      setProcessing(false);
      setCompleted(true);
    }, 1900);
  };

  const resetForm = () => {
    setForm({
      customerName: '',
      email: '',
      invoiceNumber: '',
      amount: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      zipCode: ''
    });
    setPaymentStep(1);
    setCompleted(false);
  };

  return (
    <div className="space-y-0 text-brand-charcoal overflow-hidden @container">
      
      {/* 1. HERO BANNER */}
      <section className="relative py-20 bg-gradient-to-tr from-[#FCFAF7] via-[#FDFBF9] to-brand-peach-light/25 border-b border-brand-sage-light/50 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5B6D58] font-semibold block font-bold">Secure Billing Gate</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-none">
            Remote Billing Portal
          </h1>
          <p className="text-sm sm:text-base text-brand-charcoal/70 max-w-xl leading-relaxed">
            Convenient, fully encrypted, and prompt invoice settlements. Clear your vehicle balance securely from any location, and receive automated transactional digital receipts instantly.
          </p>
        </div>
      </section>

      {/* 2. MAIN CORE BILLING GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Security certifications & directions */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#DF9D7C] font-semibold">Payment Directions</span>
              <h2 className="text-2xl font-extrabold text-[#1C2421]">
                Instructions & Safeguards
              </h2>
              <div className="h-1 w-12 bg-brand-peach rounded" />
            </div>

            {/* Instruction Nodes */}
            <div className="space-y-4 font-sans text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed">
              <p>
                To settle a completed repair invoice balance remotely:
              </p>
              
              <ul className="space-y-3 pl-4 list-decimal marker:font-bold marker:text-brand-sage-dark">
                <li>
                  Enter your exact invoice number (which was sent via email or text upon diagnostic completion).
                </li>
                <li>
                  Enter your approved invoice amount and contact card details.
                </li>
                <li>
                  Provide secure credit card fields in step 2. Our gateway utilizes premium single-use token authorization vaults to shield your details.
                </li>
              </ul>
            </div>

            {/* Compliance badges */}
            <div className="p-6 rounded-2xl bg-[#E9ECE8] border border-brand-sage/20 space-y-4 shadow-sm">
              <div className="flex items-center space-x-2 text-brand-sage-dark">
                <Lock className="w-5 h-5 text-brand-sage-dark" />
                <h4 className="font-display font-extrabold text-xs tracking-widest uppercase text-[#5B6D58]">
                  PCI Compliant Safeguards
                </h4>
              </div>
              <p className="text-xs text-brand-charcoal/70 leading-relaxed font-sans">
                Our gateway guarantees 256-bit Advanced Encryption Standard (AES) TLS configurations. Credit card strings never hit our local clinic servers, complying with the highest digital finance safety thresholds.
              </p>
              
              <div className="flex flex-wrap gap-2.5 pt-1.5 font-mono text-[9px] font-bold text-brand-sage-dark">
                <span className="px-2.5 py-1 rounded bg-white/70 border border-brand-sage/25">✔ SSL 256-Bit</span>
                <span className="px-2.5 py-1 rounded bg-white/70 border border-brand-sage/25">✔ PCI-DSS Verified</span>
                <span className="px-2.5 py-1 rounded bg-white/70 border border-brand-sage/25">✔ Encryption Tokenized</span>
              </div>
            </div>

            {/* Billing Helpline card */}
            <div className="p-5 rounded-2xl bg-white border border-brand-sage-light/40 flex items-start space-x-3.5 shadow-sm">
              <HelpCircle className="w-5 h-5 text-[#DF9D7C] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-brand-charcoal font-sans">Billing Assistance Helpline</h4>
                <p className="text-xs text-brand-charcoal/65 mt-0.5 mb-2 leading-relaxed">Our bookkeeper is available Mon-Fri to answer direct billing adjustments or payment checks.</p>
                <a href="tel:5032345678" className="inline-flex items-center text-xs font-mono font-bold text-brand-sage-dark hover:underline">
                  <Phone className="w-4 h-4 mr-1.5" />
                  (503) 234-5678 (Ext. 4)
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Secure Form inputs */}
          <div className="lg:col-span-7">
            
            <div className="p-8 rounded-3xl bg-white border border-brand-sage-light/45 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sage/10 rounded-full blur-xl pointer-events-none" />

              <div className="mb-6 space-y-1">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-brand-sage" />
                  <h3 className="font-display font-extrabold text-xl text-brand-charcoal">
                    Encrypted Payment Card
                  </h3>
                </div>
                <p className="text-xs text-brand-charcoal/55 font-mono">
                  Fully Encrypted Billing Transfer Link 
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!completed ? (
                  <motion.form
                    key="billing-form"
                    onSubmit={handleStepSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    
                    {/* STEP 1: INVOICE DETAILS CHECK */}
                    {paymentStep === 1 && (
                      <motion.div 
                        key="bill-step1" 
                        className="space-y-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                              Customer Billing Name *
                            </label>
                            <input
                              type="text"
                              name="customerName"
                              value={form.customerName}
                              onChange={handleInputChange}
                              required
                              placeholder="Name on Card"
                              className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all animate-none"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleInputChange}
                              required
                              placeholder="name@email.com"
                              className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                              Invoice Code Number *
                            </label>
                            <input
                              type="text"
                              name="invoiceNumber"
                              value={form.invoiceNumber}
                              onChange={handleInputChange}
                              required
                              placeholder="E.g., H-2489"
                              className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                              Amount Outstand (USD) *
                            </label>
                            <div className="relative">
                              <span className="absolute left-3 top-3.5 text-brand-charcoal/40 font-bold"><DollarSign className="w-4 h-4" /></span>
                              <input
                                type="number"
                                name="amount"
                                value={form.amount}
                                onChange={handleInputChange}
                                required
                                placeholder="0.00"
                                className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-brand-sage-light/40 flex justify-end">
                          <button
                            type="submit"
                            className="px-6 py-3 bg-brand-sage hover:bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow cursor-pointer"
                          >
                            Continue to payment details &rarr;
                          </button>
                        </div>

                      </motion.div>
                    )}

                    {/* STEP 2: SECURE CREDIT CARD DETAILS */}
                    {paymentStep === 2 && (
                      <motion.div 
                        key="bill-step2" 
                        className="space-y-4"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <div className="space-y-1.5 block">
                          <button
                            type="button"
                            onClick={() => setPaymentStep(1)}
                            className="text-xs text-brand-sage-dark hover:underline font-bold"
                          >
                            &larr; Return to invoice verification
                          </button>
                          
                          {/* Invoice verification bar overlay */}
                          <div className="p-3 bg-brand-sage-light/40 border border-brand-sage rounded-xl font-mono text-[11px] text-brand-sage-dark font-bold mt-2 flex items-center justify-between">
                            <span>🧾 Invoice: {form.invoiceNumber}</span>
                            <span>💰 Total: ${form.amount}</span>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                            Secure Card Number *
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-3 text-brand-charcoal/40"><CreditCard className="w-4.5 h-4.5" /></span>
                            <input
                              type="text"
                              name="cardNumber"
                              value={form.cardNumber}
                              onChange={handleInputChange}
                              required
                              placeholder="4000 1234 5678 9010"
                              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all font-mono"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                              Expiry Date *
                            </label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={form.expiryDate}
                              onChange={handleInputChange}
                              required
                              placeholder="MM/YY"
                              className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all font-mono"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                              CVV Lock *
                            </label>
                            <input
                              type="password"
                              name="cvv"
                              value={form.cvv}
                              onChange={handleInputChange}
                              required
                              maxLength={4}
                              placeholder="•••"
                              className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all font-mono"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-mono font-bold block">
                              Billing ZIP Code *
                            </label>
                            <input
                              type="text"
                              name="zipCode"
                              value={form.zipCode}
                              onChange={handleInputChange}
                              required
                              placeholder="97215"
                              className="w-full px-4 py-2.5 rounded-xl border border-brand-sage-light/80 bg-[#FCFAF7] text-sm focus:outline-none focus:ring-1 focus:ring-brand-peach focus:border-brand-peach transition-all font-mono"
                            />
                          </div>
                        </div>

                        <div className="p-3 bg-orange-50 border border-brand-peach-dark/30 rounded-xl flex items-start space-x-2.5 font-sans text-xs text-brand-peach-dark">
                          <Lock className="w-4 h-4 shrink-0 mt-0.5" />
                          <p className="leading-relaxed">
                            Card data is dynamically encrypted client-side using bank grade TLS security gates before transmission. 
                          </p>
                        </div>

                        <div className="pt-4 border-t border-brand-sage-light/40 flex justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => setPaymentStep(1)}
                            className="px-5 py-3 border border-brand-sage-light hover:bg-[#FBECE5]/20 text-brand-charcoal text-xs font-semibold uppercase tracking-wider rounded-xl transition-all h-10 cursor-pointer"
                          >
                            Modify Invoice
                          </button>

                          <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 bg-brand-sage hover:bg-brand-sage-dark text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center cursor-pointer disabled:bg-brand-sage/60 h-10"
                          >
                            {processing ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Authorizing Secure Link...
                              </>
                            ) : (
                              <>
                                Authorize ${form.amount} Clearance
                              </>
                            )}
                          </button>
                        </div>

                      </motion.div>
                    )}

                  </motion.form>
                ) : (
                  
                  /* PAYMENT COMPLETED DISPATCH TRACE LOG */
                  <motion.div 
                    key="bill-success"
                    className="p-8 text-center space-y-6 animate-fade-in"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-sage-light border-2 border-brand-sage text-brand-sage-dark flex items-center justify-center mx-auto animate-bounce">
                      <Check className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-display font-extrabold text-[#1C2421] text-xl">
                        Remote Payment Cleared Successfully!
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-charcoal/70 max-w-sm mx-auto leading-relaxed">
                        Thank you! Your transaction for <strong className="text-brand-sage-dark">${form.amount}</strong> under invoice <strong>#{form.invoiceNumber}</strong> was approved. Your repair record file was updated instantly.
                      </p>
                    </div>

                    {/* Simulated automatic billing dispatch receipt */}
                    <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-brand-sage-light/65 text-left max-w-sm mx-auto space-y-3 shadow-inner">
                      <div className="flex items-center space-x-2 text-brand-sage-dark font-mono text-[10px] font-bold pb-2 border-b border-brand-sage-light/40">
                        <MailCheck className="w-4 h-4 text-brand-peach shrink-0 animate-pulse" />
                        <span>AUTOMATED RECEIPT LOGGER</span>
                      </div>

                      <div className="space-y-2 text-[10px] font-mono text-brand-charcoal/70">
                        <p className="flex justify-between"><span>Sender:</span> <span className="font-bold text-brand-sage-dark">billing@hawthorneauto.com</span></p>
                        <p className="flex justify-between"><span>Customer:</span> <span className="font-bold">{form.customerName}</span></p>
                        <p className="flex justify-between"><span>Destination:</span> <span className="font-semibold text-brand-charcoal select-all">{form.email}</span></p>
                        <p className="flex justify-between"><span>Authorizer:</span> <span className="font-semibold text-brand-charcoal">PCI-CLEARED CARD REF-{(Math.floor(Math.random() * 89999) + 10000)}</span></p>
                        <p className="flex justify-between text-[9px] text-[#5B6D58] bg-brand-sage-light/40 p-1.5 rounded uppercase mt-2">
                          <span>Status:</span> 
                          <span className="font-medium">Trigger Success • Invoice settled & Receipt dispatched</span>
                        </p>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 bg-brand-peach/25 border border-brand-peach text-xs font-mono font-bold text-brand-sage-dark hover:bg-brand-peach/40 rounded-xl transition-all cursor-pointer"
                      >
                        Clear another balance
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* 3. SECURITY BANNER */}
      <section className="py-12 bg-brand-cream border-t border-brand-sage-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-charcoal/30">Supported Secure Clearing Methods</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-mono font-bold text-brand-charcoal/50">
            <span>💳 VISA</span>
            <span>💳 MASTERCARD</span>
            <span>💳 AMERICAN EXPRESS</span>
            <span>💳 DISCOVER</span>
            <span>📲 APPLE PAY PRE-TOKENED</span>
          </div>
        </div>
      </section>

    </div>
  );
}
