import React from 'react';
import { Button } from '@/components/ui/Button';
import { Globe, LayoutGrid } from 'lucide-react';
import type { NavItem } from '@/types';

interface HeaderProps {
  navItems: NavItem[];
  lang: 'ar' | 'en';
  toggleLang: () => void;
  contactLabel: string;
}

const Header: React.FC<HeaderProps> = ({ navItems, lang, toggleLang, contactLabel }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-2 font-bold text-xl text-white">
          <img src="https://i.postimg.cc/x1r1wX6M/2.png" alt="Cairoeg Logo" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-pink-400 text-sm font-medium transition-all duration-300 hover:scale-105">{n.label}</a>
          ))}
           <a href="#/app" className="hover:text-pink-400 text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1">
             <LayoutGrid className="w-4 h-4" />
             {lang === 'ar' ? 'لوحة التحكم' : 'Dashboard'}
            </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button onClick={toggleLang} variant="ghost" className="rounded-2xl flex gap-1 text-slate-300 hover:text-pink-400">
            <Globe className="w-4 h-4 animate-spin" />{lang === "ar" ? "EN" : "AR"}
          </Button>
          <Button asChild className="rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-600 hover:opacity-90 shadow-lg hover:shadow-pink-500/30 text-white">
            <a href="#/contact">{contactLabel}</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;