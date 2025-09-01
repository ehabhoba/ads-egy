import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Check, Stars, Search, Link2, Megaphone, BarChart3, PenTool, Video, Share2, Mail, Phone, MessageSquare, Globe, Store, Users,
  PlayCircle, Mic, FileText, Bot, MonitorPlay, Braces, BrainCircuit, ShieldCheck, Database, GitBranch, Cloud, Zap, Package,
  Target, TrendingUp, Link, Repeat, LayoutGrid, Reply, Flag, MailPlus, UserCheck, Settings2, Replace, Lock, Send, BarChart, FileJson,
  Wand2, LoaderCircle, ClipboardCopy
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import type { Service, PricingPlan } from '../types';
import { GoogleGenAI } from "@google/genai";

// --- AI Client Initialization ---
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// --- REUSABLE COMPONENTS ---

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-black shadow-2xl border border-slate-700 relative overflow-hidden group h-full flex flex-col"
  >
    <motion.div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-indigo-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
    <div className="flex items-center gap-3 mb-3 relative z-10">
      <span className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/30 to-pink-500/30 text-indigo-300 flex-shrink-0">
        <Icon className="w-6 h-6" />
      </span>
      <h3 className="font-bold text-lg text-white drop-shadow-lg">{title}</h3>
    </div>
    <p className="text-slate-300 text-sm leading-relaxed relative z-10 flex-grow">{desc}</p>
  </motion.div>
);

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-2 text-slate-300"><Check className="w-4 h-4 mt-1 text-pink-500 flex-shrink-0" />{children}</li>
);


interface HomePageProps {
  lang: 'ar' | 'en';
  translations: any;
}

const HomePage: React.FC<HomePageProps> = ({ lang, translations }) => {
  const [activeTab, setActiveTab] = useState('core');
  
  // State for AI Demo
  const [postTopic, setPostTopic] = useState('');
  const [generatedPost, setGeneratedPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const t = translations;
  
  const servicesByTab: { [key: string]: Service[] } = {
    core: t.coreServices,
    advanced: t.advancedServices,
    seo: t.seoTools,
    integrated: t.integratedSystems,
  };

  const handleGeneratePost = async () => {
    if (!postTopic || isLoading) return;
    setIsLoading(true);
    setGeneratedPost('');
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `اكتب منشورًا جذابًا على وسائل التواصل الاجتماعي باللغة العربية حول الموضوع التالي: "${postTopic}". يجب أن يكون المنشور قصيرًا ومناسبًا لمنصات مثل فيسبوك أو انستجرام، ويتضمن بعض الهاشتاجات ذات الصلة.`,
        config: {
            systemInstruction: "أنت خبير تسويق رقمي متخصص في كتابة محتوى جذاب للعلامات التجارية العربية.",
        }
      });
      setGeneratedPost(response.text);
    } catch (error) {
      console.error("Error generating post:", error);
      setGeneratedPost(lang === 'ar' ? "عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى." : "Sorry, an error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedPost) {
      navigator.clipboard.writeText(generatedPost);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section id="home" className="pt-20 pb-28 bg-gradient-to-r from-indigo-900/50 via-black to-pink-900/50 relative overflow-hidden">
        <motion.div animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-r from-pink-500/20 via-indigo-500/20 to-sky-500/20 opacity-40" />
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-pink-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-slate-300 max-w-xl">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl bg-gradient-to-r from-pink-600 to-indigo-600 hover:opacity-80 hover:scale-105 transition-transform text-white">
                <a href="#/app">{t.heroBtnStart}</a>
              </Button>
              <Button variant="outline" className="rounded-2xl border-pink-500 text-pink-400 hover:bg-pink-500/20 hover:scale-105 transition-transform" asChild>
                <a href="#/services">{t.heroBtnDiscover}</a>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden md:grid sm:grid-cols-2 gap-4">
            {t.coreServices.slice(0, 4).map((s: Service) => (
              <a href={s.path} key={s.slug}>
                <FeatureCard icon={s.icon} title={s.title} desc={s.desc} />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-8 flex-wrap gap-2">
            {t.serviceTabs.map((tab: {id: string, title: string}) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? 'default' : 'outline'}
                className={`rounded-full transition-all duration-300 ${activeTab === tab.id ? 'bg-gradient-to-r from-pink-600 to-indigo-600 text-white border-transparent' : 'border-slate-700 text-slate-300 hover:bg-slate-800'}`}
              >
                {tab.title}
              </Button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {servicesByTab[activeTab].map((s: Service) => (
               <a href={s.path} key={s.slug} className="block h-full">
                <FeatureCard icon={s.icon} title={s.title} desc={s.desc} />
               </a>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Features / Infrastructure */}
      <section id="features" className="py-20 bg-gradient-to-r from-black via-slate-900 to-black">
           <div className="max-w-5xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-pink-400">{t.featuresTitle}</h2>
              <p className="text-slate-400 mt-2 mb-10 max-w-2xl mx-auto">{t.featuresSubtitle}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {t.features.map((feature: {icon: React.ElementType, title: string, desc: string}) => (
                      <motion.div key={feature.title} className="flex flex-col items-center gap-2"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                      >
                          <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500/30 to-pink-500/30 text-indigo-300">
                              <feature.icon className="w-8 h-8"/>
                          </div>
                          <h3 className="font-semibold text-white">{feature.title}</h3>
                          <p className="text-xs text-slate-400">{feature.desc}</p>
                      </motion.div>
                  ))}
              </div>
           </div>
      </section>

      {/* AI Demo Section */}
      <section id="demo" className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-pink-400 mb-2">{t.demoTitle}</h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">{t.demoSubtitle}</p>
              <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl hover:shadow-pink-500/20 transition-shadow p-8">
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <Input 
                          value={postTopic}
                          onChange={(e) => setPostTopic(e.target.value)}
                          placeholder={t.demoInputPlaceholder}
                          className="bg-black/50 border-slate-700 text-white flex-grow"
                      />
                      <Button 
                          onClick={handleGeneratePost}
                          disabled={isLoading}
                          className="rounded-lg bg-gradient-to-r from-pink-600 to-indigo-600 hover:opacity-90 text-white w-full sm:w-auto"
                      >
                          {isLoading ? (
                              <>
                                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                  {t.demoGeneratingButton}
                              </>
                          ) : (
                              <>
                                  <Wand2 className="mr-2 h-4 w-4" />
                                  {t.demoGenerateButton}
                              </>
                          )}
                      </Button>
                  </div>

                  {(isLoading || generatedPost) && (
                      <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6 text-right"
                      >
                          <h4 className="font-semibold text-indigo-400 mb-2">{t.demoResultTitle}</h4>
                          <div className="relative p-4 bg-black/40 rounded-lg border border-slate-800 whitespace-pre-wrap text-sm text-slate-200">
                              {isLoading && !generatedPost ? <div className="animate-pulse">جاري كتابة المنشور...</div> : generatedPost}
                              {!isLoading && generatedPost && (
                                  <Button onClick={handleCopy} variant="ghost" size="sm" className="absolute top-2 left-2 text-slate-400 hover:text-white">
                                      {copySuccess ? <Check className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4" />}
                                      <span className="sr-only">{copySuccess ? t.demoCopied : t.demoCopy}</span>
                                  </Button>
                              )}
                          </div>
                      </motion.div>
                  )}
              </Card>
          </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-r from-black via-slate-900 to-black">
          <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-pink-400 text-center mb-10">{t.pricingTitle}</h2>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                  {t.pricingPlans.map((plan: PricingPlan) => (
                      <motion.div key={plan.name}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          className={`rounded-2xl border ${plan.popular ? 'border-pink-500' : 'border-slate-700'} bg-slate-900 p-8 shadow-2xl relative ${plan.popular ? 'shadow-pink-500/20' : ''}`}
                      >
                          {plan.popular && <div className="absolute top-0 right-0 -mt-3 mr-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">{lang === 'ar' ? 'الأكثر شيوعًا' : 'Popular'}</div>}
                          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                          <div className="mb-6">
                              <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                              <span className="text-slate-400">{lang === 'ar' ? ' / شهريًا' : ' / mo'}</span>
                          </div>
                          <ul className="space-y-3 mb-8">
                              {plan.features.map((f:string) => <Bullet key={f}>{f}</Bullet>)}
                          </ul>
                          <Button asChild className={`w-full rounded-lg ${plan.popular ? 'bg-pink-600 hover:bg-pink-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}>
                              <a href="#/contact">{lang === 'ar' ? 'ابدأ الآن' : 'Get Started'}</a>
                          </Button>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-r from-indigo-950 via-black to-pink-950 relative">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 relative z-10">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-pink-400">{t.contactTitle}</h3>
            <p className="text-slate-400 mb-6">{t.contactText}</p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-pink-400" /> support@cairoeg.online</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-pink-400" /> +20 120 726 5912</div>
              <div className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-pink-400" /> {t.contactWhatsapp}</div>
            </div>
          </div>
          <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl hover:shadow-pink-500/20 transition">
            <CardHeader><CardTitle className="text-white">{t.contactFormTitle}</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder={t.contactFormName} className="bg-black/50 border-slate-700 text-white" />
              <Input placeholder={t.contactFormEmail} className="bg-black/50 border-slate-700 text-white" />
              <Textarea placeholder={t.contactFormMessage} className="bg-black/50 border-slate-700 text-white" />
              <Button className="rounded-2xl w-full bg-gradient-to-r from-pink-600 to-indigo-600 hover:opacity-80 hover:scale-105 transition-transform text-white">{t.contactFormSend}</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default HomePage;