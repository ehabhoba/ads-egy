import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Globe, LayoutGrid, Menu, X } from 'lucide-react';
import type { NavItem } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  navItems: NavItem[];
  lang: 'ar' | 'en';
  toggleLang: () => void;
  translations: any;
}

const Header: React.FC<HeaderProps> = ({ navItems, lang, toggleLang, translations: t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-slate-800 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-2 font-bold text-xl text-white">
          <img src="https://i.postimg.cc/x1r1wX6M/2.png" alt="Cairoeg Logo" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="text-slate-300 hover:text-pink-400 text-sm font-medium transition-all duration-300 hover:scale-105 px-3 py-2">{n.label}</a>
          ))}
           <Button variant="ghost" className="rounded-2xl text-slate-300 hover:text-pink-400" asChild>
             <a href="#/app" className="flex items-center gap-1">
               <LayoutGrid className="w-4 h-4" />
               {t.dashboardTitle.split(' ')[0]}
              </a>
           </Button>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button onClick={toggleLang} variant="ghost" className="rounded-2xl flex gap-1 text-slate-300 hover:text-pink-400">
            <Globe className="w-4 h-4 animate-spin" />{lang === "ar" ? "EN" : "AR"}
          </Button>
          <Button variant="ghost" className="rounded-2xl text-slate-300 hover:text-pink-400" asChild>
            <a href="#/login">{t.login}</a>
          </Button>
          <Button asChild className="rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-600 hover:opacity-90 shadow-lg hover:shadow-pink-500/30 text-white">
            <a href="#/signup">{t.signUp}</a>
          </Button>
        </div>
        <div className="md:hidden flex items-center">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden bg-black/90 backdrop-blur-sm absolute top-full left-0 w-full"
            >
                <div className="flex flex-col items-center gap-4 p-5">
                    {navItems.map((n) => (
                      <a key={n.label} href={n.href} onClick={closeMenu} className="hover:text-pink-400 text-lg font-medium w-full text-center py-2">{n.label}</a>
                    ))}
                    <a href="#/app" onClick={closeMenu} className="hover:text-pink-400 text-lg font-medium w-full text-center py-2 flex items-center justify-center gap-2">
                        <LayoutGrid className="w-5 h-5" />
                        {t.dashboardTitle.split(' ')[0]}
                    </a>
                    <div className="border-t border-slate-700 w-full my-2"></div>
                    <div className="flex items-center gap-4 w-full justify-center">
                        <Button variant="ghost" className="rounded-2xl text-slate-300 hover:text-pink-400 text-lg" asChild>
                           <a href="#/login" onClick={closeMenu}>{t.login}</a>
                        </Button>
                         <Button asChild className="rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-600 hover:opacity-90 text-white text-lg px-6">
                           <a href="#/signup" onClick={closeMenu}>{t.signUp}</a>
                        </Button>
                    </div>
                     <Button onClick={toggleLang} variant="ghost" className="rounded-2xl flex gap-2 text-slate-300 hover:text-pink-400 mt-2 text-lg">
                        <Globe className="w-5 h-5 animate-spin" />{lang === "ar" ? "English" : "العربية"}
                    </Button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;