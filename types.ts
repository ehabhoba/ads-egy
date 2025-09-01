import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface Service {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  desc: string;
  slug: string;
  features: string[];
  benefits: string[];
  path: string;
}

export interface NavItem {
    label: string;
    href: string;
}

export interface PricingPlan {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
}