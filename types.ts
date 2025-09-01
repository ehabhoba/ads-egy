import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { Session, User } from '@supabase/supabase-js';

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

export interface GenerationHistoryItem {
  id: string;
  created_at: string;
  generation_type: 'social_post' | 'seo_article' | 'video_script';
  inputs: {
    topic: string;
    platform?: string; // for social posts
    keywords?: string; // for articles
    duration?: string; // for video scripts
    style?: string; // for video scripts
    tone: string;
  };
  output: string;
}

export type { Session, User };