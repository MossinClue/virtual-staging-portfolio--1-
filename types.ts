export interface Project {
  id: number;
  category: 'Residential' | 'Commercial';
  roomType: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  location: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}