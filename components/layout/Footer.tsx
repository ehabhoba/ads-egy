import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  lang: 'ar' | 'en';
  translations: any;
}

const Footer: React.FC<FooterProps> = ({ lang, translations: t }) => {

  const companyLinks = [
    { href: '#/services', label: t.nav.find((item: any) => item.href.includes('services'))?.label },
    { href: '#/pricing', label: t.nav.find((item: any) => item.href.includes('pricing'))?.label },
    { href: '#/contact', label: t.nav.find((item: any) => item.href.includes('contact'))?.label },
  ].filter(link => link.label);

  const resourcesLinks = [
      { href: "#/blog", label: t.blog },
      { href: "#/faq", label: t.faq },
      { href: "#/app", label: t.dashboardTitle.split(' ')[0] },
  ];

  const legalLinks = [
      { href: "#/legal/privacy", label: t.privacyPolicy },
      { href: "#/legal/terms", label: t.termsOfService },
  ];

  return (
    <footer className="border-t border-slate-800 bg-black relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-indigo-900/20 to-black opacity-30 blur-3xl" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-5 gap-8 text-slate-400 relative z-10">
        
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-lg mb-2 text-white">
            <img src="https://i.postimg.cc/x1r1wX6M/2.png" alt="Cairoeg Logo" className="h-8 w-auto" />
          </div>
          <p className="text-sm">{t.footerDesc}</p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">{t.footerCompany}</h4>
          <ul className="space-y-2 text-sm">
              {companyLinks.map(link => (
                  <li key={link.href}><a href={link.href} className="hover:text-pink-400 transition-all">{link.label}</a></li>
              ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">{t.footerResources}</h4>
           <ul className="space-y-2 text-sm">
              {resourcesLinks.map(link => (
                  <li key={link.href}><a href={link.href} className="hover:text-pink-400 transition-all">{link.label}</a></li>
              ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 text-white">{t.footerLegal}</h4>
           <ul className="space-y-2 text-sm">
              {legalLinks.map(link => (
                <li key={link.href}><a href={link.href} className="hover:text-pink-400 transition-all">{link.label}</a></li>
              ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-4 text-white">{t.newsletter}</h4>
            <p className="text-sm mb-3">{t.newsletterDesc}</p>
            <div className="flex gap-2">
                <Input type="email" placeholder={lang === 'ar' ? 'بريدك الإلكتروني' : 'Your email'} className="bg-slate-800 border-slate-700 text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500" />
                <Button className="bg-pink-600 hover:bg-pink-700 text-white flex-shrink-0">{t.subscribe}</Button>
            </div>
        </div>

      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Cairoeg. All rights reserved.</p>
            <div className="flex gap-5 mt-2 sm:mt-0">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all" aria-label="X"><Twitter className="w-5 h-5" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;