export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DiagnosticOption {
  id: string;
  label: string;
  severity: 'low' | 'medium' | 'critical';
  advice: string;
}
