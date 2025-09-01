import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface FooterProps {
  lang: 'ar' | 'en';
  translations: any;
}

const Footer: React.FC<FooterProps> = ({ lang, translations: t }) => {
  return (
    <footer className="border-t border-slate-800 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-5 gap-8 text-slate-400 relative z-10">
        
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-lg mb-2 text-white">
            <img src="https://i.postimg.cc/x1r1wX6M/2.png" alt="Cairoeg Logo" className="h-8 w-auto" />
          </div>
          <p className="text-sm">{t.footerDesc}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">{t.footerCompany}</h4>
          <ul className="space-y-2 text-sm">
              <li><a href="#/services" className="hover:text-pink-400 transition-all">{lang === 'ar' ? 'الخدمات' : 'Services'}</a></li>
              <li><a href="#/pricing" className="hover:text-pink-400 transition-all">{lang === 'ar' ? 'الأسعار' : 'Pricing'}</a></li>
              <li><a href="#/contact" className="hover:text-pink-400 transition-all">{t.contactTitle}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">{t.footerResources}</h4>
           <ul className="space-y-2 text-sm">
              <li><a href="#/blog" className="hover:text-pink-400 transition-all">{t.blog}</a></li>
              <li><a href="#/faq" className="hover:text-pink-400 transition-all">{t.faq}</a></li>
              <li><a href="#/app" className="hover:text-pink-400 transition-all">{t.dashboardTitle.split(' ')[0]}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3 text-white">{t.footerLegal}</h4>
           <ul className="space-y-2 text-sm">
              <li><a href="#/legal/privacy" className="hover:text-pink-400 transition-all">{t.privacyPolicy}</a></li>
              <li><a href="#/legal/terms" className="hover:text-pink-400 transition-all">{t.termsOfService}</a></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-3 text-white">{t.newsletter}</h4>
            <p className="text-sm mb-3">{t.newsletterDesc}</p>
            <div className="flex gap-2">
                <Input type="email" placeholder={lang === 'ar' ? 'بريدك الإلكتروني' : 'Your email'} className="bg-slate-800 border-slate-700 text-white" />
                <Button className="bg-pink-600 hover:bg-pink-700 text-white flex-shrink-0">{t.subscribe}</Button>
            </div>
        </div>

      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Cairoeg. All rights reserved.</p>
            <div className="flex gap-4 mt-2 sm:mt-0">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">Instagram</a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">X</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">LinkedIn</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;