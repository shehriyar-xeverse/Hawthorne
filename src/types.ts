export type Page = 'home' | 'about' | 'services' | 'contact' | 'appointment' | 'payments';

export type ServiceId = 
  | 'auto' 
  | 'bike' 
  | 'engine' 
  | 'hybrid' 
  | 'import' 
  | 'oil' 
  | 'suspension' 
  | 'transmission' 
  | 'tuneups';

export interface ServiceDetail {
  id: ServiceId;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  iconName: string; // lucide icon identifier
  benefits: string[];
  processSteps: { title: string; desc: string }[];
  relatedServiceIds: ServiceId[];
  faqs: { question: string; answer: string }[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  serviceRequired: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'evening';
  notes: string;
}

export interface PaymentForm {
  customerName: string;
  email: string;
  invoiceNumber: string;
  amount: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  zipCode: string;
}
