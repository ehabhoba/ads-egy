import React from 'react';
import { motion } from 'framer-motion';
import type { Service } from '../types';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { ArrowLeft, Check, Zap, Target } from 'lucide-react';

interface ServiceDetailPageProps {
  service: Service | undefined;
  lang: 'ar' | 'en';
}

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start gap-2 text-slate-300"><Check className="w-4 h-4 mt-1 text-pink-500 flex-shrink-0" />{children}</li>
);

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, lang }) => {
  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
        <h1 className="text-4xl font-bold text-pink-500 mb-4">404</h1>
        <p className="text-lg text-slate-400">{lang === 'ar' ? 'لم يتم العثور على الخدمة' : 'Service Not Found'}</p>
        <Button asChild variant="outline" className="mt-8 rounded-lg border-pink-500 text-pink-400 hover:bg-pink-500/20">
          <a href="#/">{lang === 'ar' ? 'العودة إلى الرئيسية' : 'Back to Home'}</a>
        </Button>
      </div>
    );
  }

  const { icon: Icon, title, desc, features, benefits } = service;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 py-16 sm:py-24"
    >
      <div className="mb-8">
        <a href="#/services" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-pink-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {lang === 'ar' ? 'العودة إلى كل الخدمات' : 'Back to All Services'}
        </a>
      </div>
      
      <header className="mb-12 text-center">
        <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-pink-500/30 text-indigo-300 mb-4">
          <Icon className="w-12 h-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent mb-4">{title}</h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">{desc}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="text-indigo-400" />
              {lang === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}
            </h3>
            <ul className="space-y-3">
              {features.map(f => <Bullet key={f}>{f}</Bullet>)}
            </ul>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="text-pink-400" />
              {lang === 'ar' ? 'كيف يفيدك؟' : 'How It Benefits You'}
            </h3>
            <ul className="space-y-3">
              {benefits.map(b => <Bullet key={b}>{b}</Bullet>)}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-16">
        <Button asChild size="lg" className="rounded-xl bg-gradient-to-r from-pink-600 to-indigo-600 hover:opacity-90 shadow-lg hover:shadow-pink-500/30 text-white text-base">
            <a href="#/contact">{lang === 'ar' ? 'اطلب الخدمة الآن' : 'Request This Service'}</a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceDetailPage;