import { ServiceDetail, Review } from '../types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'auto',
    title: 'Auto Services – Import & Domestic',
    shortDescription: 'Comprehensive bumper-to-bumper diagnostics, preventive maintenance, and repairs for all makes and models.',
    description: 'At Hawthorne Auto Clinic, we combine over 40 years of local expertise with cutting-edge diagnostic technology to service both imported and domestic passenger vehicles. Whether it is an complex electronic fault or standard mileage maintenance, we perform every service with complete transparency, a stellar 36-month / 36,000-mile warranty, and premium customer service.',
     image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=800&q=80',
    iconName: 'Car',
    benefits: [
      '3-Year / 36,000-Mile Nationwide Warranty on parts and labor.',
      'ASE Certified Master Technicians with decades of combined domestic/imported experience.',
      'Digital Vehicle Inspections sent straight to your phone with detailed photos.',
      'Local transportation assistance and clean, cozy lobby with complimentary snacks.'
    ],
    processSteps: [
      { title: 'Digital Diagnostic Scan', desc: 'We sync our diagnostic computers into your vehicle to analyze real-time error logs and sensor data.' },
      { title: 'Comprehensive Hand Inspection', desc: 'Our technician inspects mechanical soundness, taking detailed photos of key wear items.' },
      { title: 'Transparent Consultation', desc: 'We deliver a text/email link with photos explaining exactly what is essential versus what can wait.' },
      { title: 'Precision Service & Testing', desc: 'We execute approved repairs with premium grade OEM parts and road-test the car for absolute safety.' }
    ],
    relatedServiceIds: ['oil', 'engine', 'tuneups'],
    faqs: [
      { question: 'How often should I have my general vehicle safety inspected?', answer: 'We recommend a general safety inspection during every oil change, or at least twice a year to catch small issues before they become unsafe or costly.' },
      { question: 'What is covered in your 36-Month / 36,000-Mile warranty?', answer: 'It covers all parts and labor purchased and performed through us. If there is any defect in materials or workmanship within 3 years or 36,000 miles, we replace it completely free.' }
    ]
  },
  {
    id: 'bike',
    title: 'Bicycle & Utility Bike Adjustments',
    shortDescription: 'Local minor repairs, tire changes, and safety tune-ups aligned with Portland’s unique community commuting needs.',
    description: 'Centrally located on Hawthorne Boulevard, we are deep fans of Portlands commuting ecosystem. Alongside our full-service auto bays, we provide a dedicated station for local commuters to address flat tires, minor chain adjustments, brake tunings, and safety checks for cargo, utility, and commuter bicycles.',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Bike',
    benefits: [
      'Convenient local drop-off and pickup off Hawthorne Boulevard.',
      'Expert technicians specializing in standard commuters and cargo-carrying utility builds.',
      'Fast turnaround times, often same-day for flat tires and minor mechanical fine-tunes.',
      'Eco-conscious lubricants and solvent-free cleaning processes.'
    ],
    processSteps: [
      { title: 'Frame & Component Safety Check', desc: 'We secure the bicycle on a repair rack and check cables, chain tension, and frame alignment.' },
      { title: 'Drive-Train Tune & Clean', desc: 'Debris is fully cleared and we lubricate cables, align front/rear derailleurs, and tune the shifting index.' },
      { title: 'Brake Tensioning', desc: 'Ensuring brake pads are centered, lines are tensioned, and stopping power is reliable in Pacific Northwest rain.' },
      { title: 'Tire Inspection & PSI Check', desc: 'Tire tread is inspected for thorns/glass, followed by inflation to optimal commuter PSI.' }
    ],
    relatedServiceIds: ['hybrid', 'oil', 'suspension'],
    faqs: [
      { question: 'Do I need an appointment for bike flat tires or minor chain issues?', answer: 'Walk-ins or roll-ins are highly welcome for flats! We make every effort to get your bicycle roadworthy within an hour.' },
      { question: 'Do you work on electric cargo bicycles (e-bikes)?', answer: 'Yes, we perform full mechanical adjustments (brakes, chain, sprockets, and framing) on cargo e-bikes.' }
    ]
  },
  {
    id: 'engine',
    title: 'Engine Repair & Diagnostics',
    shortDescription: 'Advanced engine rebuilds, cylinder head services, head gasket repairs, and comprehensive check-engine light troubleshooting.',
    description: 'The engine is the heart of your vehicle. At Hawthorne Auto Clinic, our state-of-the-art bays are fully equipped to diagnose and repair issues ranging from a simple vacuum hose leak to complex internal engine overhauls. We use manufacturer-specific scan systems to ensure absolute accuracy before any wrench touches your car.',
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=800&q=80',
    iconName: 'Wrench',
    benefits: [
      'Certified technicians trained in precision machining, gas/diesel setups, and modern thermal systems.',
      'Accurate check-engine diagnostics using world-class code readers and electronic scopes.',
      'Up-front pricing estimates featuring broken-down parts lists and comprehensive explanations.',
      'We use premium seals, gaskets, and filters that meet or exceed original factory standards.'
    ],
    processSteps: [
      { title: 'Advanced Engine Code Analysis', desc: 'We scan your onboard computer to read diagnostic trouble codes, monitoring fuel-trim ratios and temperatures.' },
      { title: 'Pressure & Compression Analysis', desc: 'Leak-down and cylinder pressure tests are run to verify mechanical gasket health and seal compression.' },
      { title: 'Gasket & Component Swapping', desc: 'Precision disassembly is performed inside our clean workshop environment with parts Torqued strictly to factory specs.' },
      { title: 'Exhaust & Coolant Line Purges', desc: 'Fluids are fully flushed, electronic cooling cycles verified, and emissions emission cycles monitored.' }
    ],
    relatedServiceIds: ['auto', 'oil', 'tuneups'],
    faqs: [
      { question: 'My check engine light is blinking. Can I continue to drive?', answer: 'A blinking check-engine light represents a severe misfire or catalytic converter risk. You should pull over safely and have the vehicle towed to our facility immediately to avoid catastrophic internal damage.' },
      { question: 'How long does a typical engine diagnostic take?', answer: 'Most diagnostic sweeps and code analyses are completed within 1 to 2 hours, after which we will call you with a detailed breakdown and photographs.' }
    ]
  },
  {
    id: 'hybrid',
    title: 'Hybrid & EV Service Specialists',
    shortDescription: 'Expert maintenance for high-voltage battery sweeps, cell balancing, brake regenerative servicing, and cooling loops.',
    description: 'Portland is a proud pioneer of clean commuter tech, and so are we. We have invested deeply in training and protective high-voltage equipment to become Portlands leading non-dealership Hybrid and EV specialist center. From Prius hybrid battery testing to full Tesla or Rivian thermal-cooling system adjustments, we help keep your eco-friendly commute completely seamless.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    iconName: 'Zap',
    benefits: [
      'Fully trained High-Voltage (HV) safety certified technicians.',
      'Regenerative braking optimization for lower wear and maximum energy recuperation.',
      'Dual cooling system maintenance (HV inverter loop + traditional engine loop).',
      'Advanced hybrid battery state-of-health diagnostics and cell replacement packages.'
    ],
    processSteps: [
      { title: 'Battery State-of-Health Sweep', desc: 'We test individual hybrid modules for internal resistance and voltage variance under dynamic loads.' },
      { title: 'Inverter Cooling Review', desc: 'Since electric drivetrains generate deep heat, we verify fluid levels and pump pressure on high-voltage heat exchangers.' },
      { title: 'Regenerative Brake Assessment', desc: 'Ensuring your generator-assisted braking pads retract elegantly and recapture maximum kinetic charge.' },
      { title: 'On-Board Computer Alignment', desc: 'We calibrate the vehicle energy control module to guarantee optimal switching between internal combustion and clean electric power.' }
    ],
    relatedServiceIds: ['auto', 'oil', 'suspension'],
    faqs: [
      { question: 'Can Hawthorne Auto Clinic replace a full Prius or hybrid battery pack?', answer: 'Absolutely! We replace dead battery packs with premium, guaranteed heavy-duty replacements at a significantly lower cost than local franchised dealerships.' },
      { question: 'Does a hybrid vehicle still need traditional engine oil changes?', answer: 'Yes, hybrid vehicles (PHEVs and standard HEVs) still utilize gasoline engines. They require regular oil and filter changes every 5,000 to 7,500 miles depending on usage.' }
    ]
  },
  {
    id: 'import',
    title: 'Import Specialty Repairs',
    shortDescription: 'Dedicated European and Asian factory-level specialized maintenance for Audi, BMW, Toyota, Honda, Volvo, and Subaru.',
    description: 'Import vehicles are engineered with unique suspension, engine, and electrical tight tolerances. At Hawthorne Auto Clinic, we feature factory-specific diagnostic systems and dedicated fluid formulations matching German (DIN), Japanese (JIS), and classic European specifications. Rest easy knowing your precision-engineered vehicle receives care built specifically for its DNA.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Globe',
    benefits: [
      'Original Equipment Manufacturer (OEM) factory filters, spark plugs, and synthetic oils.',
      'Specific diagnostic systems matching German and Asian vehicle models.',
      'In-depth knowledge of unique boxer engines, timing configurations, and multi-link axle systems.',
      'Direct partnerships with global premium parts warehouses for rapid procurement.'
    ],
    processSteps: [
      { title: 'Precision Fault Mapping', desc: 'We utilize specialist imported scan systems to check complex chassis control and engine registers.' },
      { title: 'Fluid Specification Verification', desc: 'We match oil specs perfectly (e.g. BMW Longlife, VW 502.00, or Toyota WS) to shield your seals.' },
      { title: 'Torque-to-Yield Assembly', desc: 'Import suspensions and heads utilize specialized single-use bolts; we install and torque these to milliradian precision.' },
      { title: 'Adaptation Re-Learning', desc: 'We recalibrate computer adapts for fuel trim or electronic steering sensors following any part changes.' }
    ],
    relatedServiceIds: ['auto', 'tuneups', 'transmission'],
    faqs: [
      { question: 'Will servicing my imported vehicle with you void my dealer warranty?', answer: 'No, under the Magnuson-Moss Warranty Act, you have the legal right to have your vehicle serviced at any independent repair facility without voiding dealership manufacturer warranties.' },
      { question: 'Do you have the special tools required for German brands like BMW, Audi, and Porsche?', answer: 'Yes, we carry the full range of special Torx, spline sockets, oil filter wrenches, and diagnostic links needed to perform precise maintenance on European vehicles.' }
    ]
  },
  {
    id: 'oil',
    title: 'Eco-Conscious Oil & Fluid Services',
    shortDescription: 'High-performance synthetic oil changes featuring premium filters, full vehicle safety inspections, and eco-safe waste recycling.',
    description: 'An oil change is more than a simple fluid swap—it is the life support mechanism for your vehicle. We deliver high-grade full synthetic lubricants paired with professional spin filters, along with a thorough digital checking of all visual under-chassis accessories. Every drop of waste oil and metal filters is responsibly reclaimed and eco-recycled.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Droplet',
    benefits: [
      'Premium full synthetic or synthetic-blend oils to extend block lifetime and maximize fuel economy.',
      'Free 30-point digital inspection included with photos sent to your device.',
      '100% of fluids, batteries, and paper filters recycled through certified sustainable recycling processors.',
      'Fast turnaround times to get you rolling back onto Hawthorne Blvd in comfort.'
    ],
    processSteps: [
      { title: 'Hot Oil Gravity Drain', desc: 'We lift the vehicle and perform a complete gravity drain of old, carbon-heavy crankcase lubrication.' },
      { title: 'O-Ring & Filter Replacement', desc: 'We replace the oil filter and oil pan washer, checking threads and safety shields.' },
      { title: 'Precision OEM Refilling', desc: 'We fill with advanced, high-viscosity synthetic oils tailored to your engine specifications.' },
      { title: 'Inspection & Maintenance Reset', desc: 'We inspect under-hood fluid levels and reset the console oil counters.' }
    ],
    relatedServiceIds: ['auto', 'hybrid', 'tuneups'],
    faqs: [
      { question: 'Why should I choose synthetic oil over conventional oil?', answer: 'Synthetic oil provides vastly superior resistance to heat, maintains consistent viscosity longer, reduces internal friction friction, and easily lasts 5,000 to 7,500 miles compared to 3,000 miles for old conventional oils.' },
      { question: 'How is Hawthorne Auto Clinic eco-conscious with waste oils?', answer: 'We collect every drop of used passenger car engine oils and recycle them into refined eco-fuel or base lubricants. We are a certified eco-partner, minimizing local watershed impact completely.' }
    ]
  },
  {
    id: 'suspension',
    title: 'Suspension, Steering & Alignment',
    shortDescription: 'Struts, control arms, sway bars, tie rods, and computer-guided wheel alignment of steering configurations.',
    description: 'With Pacific Northwest roads facing heavy winter shifts, suspension and alignment are crucial to a smooth ride and responsive handling. Our suspension technicians diagnose worn shocks, bouncy struts, clunking ball joints, and tire wear anomalies using precision alignment targets. Let us bring that flat, crisp, and comfortable feeling back to your commute.',
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80',
    iconName: 'Activity',
    benefits: [
      'Elimination of uneven tire wear, extending tire lifetimes by tens of thousands of miles.',
      'Restoration of crisp, responsive steering safety in Portland rain and snow.',
      'Top-tier, heavy-duty shocks and struts with lifetime part warranties.',
      'Comprehensive under-car chassis inspection of CV boots, hubs, and ball joints.'
    ],
    processSteps: [
      { title: 'Chassis Tightness Inspection', desc: 'We perform a dynamic physical push-pull test on wheels to locate play in wheel bearings or tie rods.' },
      { title: 'Dynamic Alignment Target Scan', desc: 'Using precision optical targets, we read current Toe, Caster, and Camber angles down to 1/100th of a degree.' },
      { title: 'Premium Shock & Strut Mounting', desc: 'We extract tired dampers and mount high-durability coil springs to restore proper ride height.' },
      { title: 'Steering Center-Point Calibrations', desc: 'After shifting parts, we center your steering wheel and calibrate steering angle monitors for safety.' }
    ],
    relatedServiceIds: ['auto', 'transmission', 'bike'],
    faqs: [
      { question: 'What are common symptoms of a failing suspension system?', answer: 'Look for excessive bounce over bumps, uneven tire wear, pulling to one side while driving straight, a loose steering wheel feeling, or metallic clicking/clunking noises during turns.' },
      { question: 'When should I have my alignment checked?', answer: 'We suggest checking your alignment once a year, or immediately after hitting a major pothole or purchasing new tires.' }
    ]
  },
  {
    id: 'transmission',
    title: 'Clutch & Transmission Repair',
    shortDescription: 'Manual clutch system overhauls, flywheel resurfacing, transmission fluid services, and full gear link adjustments.',
    description: 'Whether you drive a classic manual stick shift or a sophisticated electronic dual-clutch transmission, keeping your drivetrain responsive is crucial. We service gearboxes with maximum care, offering fluid flushes, clutch cylinder adjustments, and full manual clutch replacements featuring precision flywheel surfacing and premium brand pressure plates.',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Shield',
    benefits: [
      'Expert clutch replacement packages featuring matched pressure plates, discs, and bearings.',
      'Highly precise flywheel resurfacing to prevent clutch vibration and ensure smooth engagements.',
      'Premium synthetic gear lubricants and transmission fluids matching factory grades.',
      'Responsive gear shift linkage repairs for a tight, smooth shift gate.'
    ],
    processSteps: [
      { title: 'Clutch/Drivetrain Diagnostics', desc: 'We check master and slave cylinders for mechanical hydraulic leaks and test engagement zones.' },
      { title: 'Gearbox Extraction', desc: 'We safely detach exhaust lines, driveshafts, and structural subframes to access the transmission bell housing.' },
      { title: 'Component Dressing & Flywheel Resurfacing', desc: 'Old friction dust is cleared, flywheels are machined clean, and we fit the fresh throwout bearing.' },
      { title: 'Hydraulic Bleeding & Calibrations', desc: 'We flush and bleed clutch lines and perform final electronic shift calibrations on dual-clutch boxes.' }
    ],
    relatedServiceIds: ['auto', 'suspension', 'engine'],
    faqs: [
      { question: 'Why is my clutch slipping or grabbing high?', answer: 'A clutch slips when the friction material has worn thin, preventing pressure plates from holding full engine torque. It requires replacement to avoid leaving you stranded.' },
      { question: 'How often does a transmission fluid need to be changed?', answer: 'Most manual and automatic transmissions require fresh fluid and filter screens every 50,000 to 100,000 miles to keep friction linings and planetary gears fully shielded.' }
    ]
  },
  {
    id: 'tuneups',
    title: 'Premium Tune-Ups & Ignition',
    shortDescription: 'Spark plug upgrades, ignition wire replacements, fuel injector services, and detailed emissions system adjustments.',
    description: 'Help restore the responsive horsepower and fuel efficiency your vehicle had when it first drove off the lot. Our premium tune-up services refresh critical ignition items—including high-end iridium spark plugs, performance ignition coil packs, and engine air filters—while cleansing fuel channels of performance-reducing carbon buildup.',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sliders',
    benefits: [
      'Immediate improvement in engine throttle response and idle smoothness.',
      'Maximum fuel economy gains, saving money at the gas pump.',
      'Preventive spark plug replacement to avoid cold-start cranking issues.',
      'Cleansing of intake valves and fuel injectors from carbon blockages.'
    ],
    processSteps: [
      { title: 'Dynamic Ignition Profiling', desc: 'We capture coil voltage waveforms to review cylinder fire cycles and locate microscopic misfires.' },
      { title: 'Iridium Spark Plug Swaps', desc: 'We safely install premium brand plugs, gapped precisely to 1/1000th of an inch.' },
      { title: 'Air & Cabin Filter Upgrades', desc: 'Worn, dusty air intake blocks are replaced with high-airflow pleated elements.' },
      { title: 'Intake Carbon Scrubbing', desc: 'An advanced eco-solvent is infused into the air induction path to cleanse carbon from valves.' }
    ],
    relatedServiceIds: ['auto', 'oil', 'engine'],
    faqs: [
      { question: 'How often should a modern vehicle receive a tune-up?', answer: 'Modern vehicles equipped with iridium spark plugs typically require ignition tune-ups every 60,000 to 100,000 miles. However, engine air filters should be replaced annually.' },
      { question: 'Will a tune-up help resolve a vehicle that is idling roughly or stuttering?', answer: 'Yes! A rough idle is frequently caused by worn spark plugs, carbon-clogged fuel ports, or cracked vacuum lines—all of which are resolved during our comprehensive tune-ups.' }
    ]
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    rating: 5,
    date: '2026-05-12',
    text: 'Hawthorne Auto Clinic has been my trusted shop for over 8 years! As a female driver, it is incredibly refreshing to work with a female-owned business that explains repairs holding total technical honesty and absolute transparency. Special thanks to Terica for getting my Prius battery cell replaced and tracking a warranty on it!',
    verified: true
  },
  {
    id: '2',
    author: 'Michael Thompson',
    rating: 5,
    date: '2026-06-02',
    text: 'Unbelievably clean, fast, and professional. Their digital inspection report is amazing—they texted me pictures showing my brake pads down to 2mm with exact pricing before calling. Met King David, the massive sweet Pyrenees mascot in the lobby! This shop sets a model for how a premium business should operate.',
    verified: true
  },
  {
    id: '3',
    author: 'Emily Rodriguez',
    rating: 5,
    date: '2026-06-11',
    text: 'Perfect same-day oil change and alignment on my loaded Subaru. They even adjusted the brakes on my gravel commuter bike while I enjoyed a coffee next door! Truly beautiful community business, friendly, tidy, and highly professional.',
    verified: true
  }
];
