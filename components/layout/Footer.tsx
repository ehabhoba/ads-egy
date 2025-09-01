import React from 'react';

interface FooterProps {
  lang: 'ar' | 'en';
  translations: any;
}

const Footer: React.FC<FooterProps> = ({ lang, translations: t }) => {
  return (
    <footer className="border-t border-slate-800 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-slate-400 relative z-10">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-2 text-white">
            <img src="https://i.postimg.cc/x1r1wX6M/2.png" alt="Cairoeg Logo" className="h-8 w-auto" />
          </div>
          <p className="text-sm">{t.footerDesc}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-white">{t.footerCompany}</h4>
          <ul className="space-y-2 text-sm">
              <li><a href="#/services" className="hover:text-pink-400 transition-all">{lang === 'ar' ? 'الخدمات' : 'Services'}</a></li>
              <li><a href="#/pricing" className="hover:text-pink-400 transition-all">{lang === 'ar' ? 'الأسعار' : 'Pricing'}</a></li>
              <li><a href="#/contact" className="hover:text-pink-400 transition-all">{t.contactTitle}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-white">{t.footerTools}</h4>
          <ul className="space-y-2 text-sm">
              <li><a href="#/services/seo-reports-optimization" className="hover:text-pink-400 transition-all">{lang === 'ar' ? 'أدوات السيو' : 'SEO Tools'}</a></li>
              <li><a href="#/services/cairoeg-marketplace" className="hover:text-pink-400 transition-all">{lang === 'ar' ? 'المتجر' : 'Marketplace'}</a></li>
              <li><a href="#/services/client-community" className="hover:text-pink-400 transition-all">{lang === 'ar' ? 'المجتمع' : 'Community'}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-white">{t.footerFollow}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">Instagram</a></li>
            <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">X (Twitter)</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-600 py-4 border-t border-slate-800">
          © {new Date().getFullYear()} Cairoeg. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
