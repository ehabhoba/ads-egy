import React, { useState, useEffect } from "react";
import { translations, getAllServices } from './data/translations';
import { useAuth } from './hooks/useAuth';

// Page & Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SocialPostGeneratorPage from './pages/SocialPostGeneratorPage';
import SeoArticleGeneratorPage from './pages/SeoArticleGeneratorPage';
import SmartSearchPage from './pages/SmartSearchPage';
import VideoScriptGeneratorPage from './pages/VideoScriptGeneratorPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// --- MAIN APP COMPONENT (ROUTER) ---
export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>("ar");
  const [route, setRoute] = useState(window.location.hash || '#/');
  const { session, loading } = useAuth();

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = window.location.hash || '#/';
      // Protected Route Logic
      if (newRoute.startsWith('#/app') && !loading && !session) {
        window.location.hash = '#/login';
      } else {
        setRoute(newRoute);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [session, loading]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);
  
  // Update route if auth state changes (e.g., after login/logout)
  useEffect(() => {
    if (route.startsWith('#/app') && !loading && !session) {
        window.location.hash = '#/login';
    }
     if ((route === '#/login' || route === '#/signup') && !loading && session) {
        window.location.hash = '#/app';
    }
  }, [session, loading, route]);


  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");

  const t = lang === 'ar' ? translations.ar : translations.en;
  
  const renderPage = () => {
    if (loading) {
      return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }
    const allServices = getAllServices(lang);

    // Auth Pages
    if (route === '#/login') {
      return <LoginPage lang={lang} translations={t} />;
    }
    if (route === '#/signup') {
      return <SignupPage lang={lang} translations={t} />;
    }

    // Route for a specific AI tool
    if (route.startsWith('#/app/tool/')) {
        const slug = route.split('/')[3];
        const service = allServices.find(s => s.slug === slug);

        if (service?.slug === 'social-post-generator') {
             return <SocialPostGeneratorPage service={service} lang={lang} />;
        }
        if (service?.slug === 'seo-article-generator') {
            return <SeoArticleGeneratorPage service={service} lang={lang} />;
        }
        if (service?.slug === 'smart-ai-search') {
            return <SmartSearchPage service={service} lang={lang} />;
        }
        if (service?.slug === 'video-script-generator') {
            return <VideoScriptGeneratorPage service={service} lang={lang} />;
        }
        // Fallback for other tool routes to the dashboard
        return <DashboardPage lang={lang} translations={t} />;
    }
      
    // Route for the main app dashboard
    if (route.startsWith('#/app')) {
      return <DashboardPage lang={lang} translations={t} />;
    }
    
    // Default to HomePage for root and other top-level hashes
    return <HomePage lang={lang} translations={t} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white font-[sans-serif] relative overflow-x-hidden">
      <Header navItems={t.nav} lang={lang} toggleLang={toggleLang} translations={t} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer lang={lang} translations={t} />
    </div>
  );
}