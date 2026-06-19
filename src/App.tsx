import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Page, ServiceId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import RequestAppointment from './pages/RequestAppointment';
import RemotePayments from './pages/RemotePayments';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId | null>(null);

  // Dynamic Browser Tab SEO and Titles controller
  useEffect(() => {
    let titleStr = '';
    switch (currentPage) {
      case 'home':
        titleStr = 'Hawthorne Auto Clinic | Premium, Trusted Auto Repair Portland';
        break;
      case 'about':
        titleStr = 'About Our Shop | Hawthorne Auto Clinic Portland';
        break;
      case 'services':
        if (selectedServiceId) {
          const serviceNames: Record<string, string> = {
            auto: 'Auto Services – Import & Domestic',
            bike: 'Bicycle & Utility Bike Adjustments',
            engine: 'Engine Repair & Diagnostics',
            hybrid: 'Hybrid & EV Battery Testing',
            import: 'Import Specialty Repairs',
            oil: 'Eco-Conscious Oil & Fluid Services',
            suspension: 'Suspension, Steering & Alignment',
            transmission: 'Clutch & Transmission Repair',
            tuneups: 'Premium Tune-Ups & Ignition'
          };
          const matchedName = serviceNames[selectedServiceId] || 'Specialist Repair';
          titleStr = `${matchedName} | Hawthorne Auto Clinic Portland`;
        } else {
          titleStr = 'Specialist Auto Repair Services | Hawthorne Auto Clinic Portland';
        }
        break;
      case 'contact':
        titleStr = 'Contact Our Team | Hawthorne Auto Clinic Portland';
        break;
      case 'appointment':
        titleStr = 'Request Service Appointment | Hawthorne Auto Clinic Portland';
        break;
      case 'payments':
        titleStr = 'Secure Remote Service Payments | Hawthorne Auto Clinic Portland';
        break;
      default:
        titleStr = 'Hawthorne Auto Clinic | Trusted Auto Repair Portland';
    }
    document.title = titleStr;
  }, [currentPage, selectedServiceId]);

  // Page switcher mapper
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            setCurrentPage={setCurrentPage} 
            setSelectedServiceId={setSelectedServiceId} 
          />
        );
      case 'about':
        return (
          <About 
            setCurrentPage={setCurrentPage} 
            setSelectedServiceId={setSelectedServiceId} 
          />
        );
      case 'services':
        return (
          <Services 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} 
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
          />
        );
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'appointment':
        return <RequestAppointment setCurrentPage={setCurrentPage} />;
      case 'payments':
        return <RemotePayments setCurrentPage={setCurrentPage} />;
      default:
        return (
          <Home 
            setCurrentPage={setCurrentPage} 
            setSelectedServiceId={setSelectedServiceId} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-brand-cream selection:bg-brand-peach selection:text-brand-charcoal overflow-x-hidden antialiased">
      
      {/* 2026 sticky glass navbar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        setSelectedServiceId={setSelectedServiceId}
      />

      {/* Main page canvas with staggered AnimatePresence transition swells */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPage}-${selectedServiceId}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ 
              duration: 0.6, 
              ease: 'easeOut',
              exit: { duration: 0.4 }
            }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footers */}
      <Footer 
        setCurrentPage={setCurrentPage} 
        setSelectedServiceId={setSelectedServiceId}
      />

    </div>
  );
}
