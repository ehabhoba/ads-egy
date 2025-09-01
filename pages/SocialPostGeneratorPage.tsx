import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Service } from '../types';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { ArrowLeft, Wand2, LoaderCircle, ClipboardCopy, Check, Facebook, Twitter, Instagram } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { translations } from '../data/translations';

// --- AI Client Initialization ---
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface SocialPostGeneratorPageProps {
  service: Service | undefined;
  lang: 'ar' | 'en';
}

type Platform = 'Facebook' | 'X' | 'Instagram';
type Tone = 'professional' | 'friendly' | 'humorous';

const SocialPostGeneratorPage: React.FC<SocialPostGeneratorPageProps> = ({ service, lang }) => {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState<Platform>('Facebook');
  const [tone, setTone] = useState<Tone>('friendly');
  const [generatedPost, setGeneratedPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const t = lang === 'ar' ? translations.ar.socialPostGenerator : translations.en.socialPostGenerator;
  
  if (!service) {
    // A simple fallback, though routing should prevent this.
    return <div>Service not found.</div>;
  }

  const handleGenerate = async () => {
    if (!topic || isLoading) return;
    setIsLoading(true);
    setError('');
    setGeneratedPost('');

    const toneMap = {
        professional: lang === 'ar' ? 'احترافية' : 'professional',
        friendly: lang === 'ar' ? 'ودية' : 'friendly',
        humorous: lang === 'ar' ? 'فكاهية' : 'humorous'
    };
    const langPrompt = lang === 'ar' ? `in Arabic with an Egyptian dialect` : `in English`;

    const prompt = `Write a social media post ${langPrompt} for the ${platform} platform about the following topic: "${topic}". The post should be engaging and have a ${toneMap[tone]} tone. Include some relevant hashtags.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                systemInstruction: "You are an expert digital marketer and copywriter specializing in creating engaging and platform-appropriate social media content.",
            }
        });
        setGeneratedPost(response.text);
    } catch (err) {
        console.error("Error generating post:", err);
        setError(t.error);
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

  const { icon: Icon } = service;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <div className="mb-8">
        <a href="#/app" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-pink-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {lang === 'ar' ? 'العودة إلى لوحة التحكم' : 'Back to Dashboard'}
        </a>
      </div>
      
      <header className="mb-12 text-center">
        <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-pink-500/30 text-indigo-300 mb-4">
          <Icon className="w-12 h-12" />
        </div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent mb-2">{t.title}</h1>
        <p className="text-lg text-slate-300">{t.subtitle}</p>
      </header>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* --- CONTROLS --- */}
        <Card className="lg:col-span-2 rounded-2xl border border-slate-700 bg-slate-900 shadow-xl p-6 h-fit">
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.topicLabel}</label>
                    <Input 
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder={t.topicPlaceholder}
                        className="bg-black/50 border-slate-700 text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.platformLabel}</label>
                    <div className="grid grid-cols-3 gap-2">
                        {(['Facebook', 'X', 'Instagram'] as Platform[]).map(p => (
                            <Button key={p} onClick={() => setPlatform(p)} variant={platform === p ? 'default' : 'outline'} className={`rounded-lg transition-all ${platform === p ? 'bg-indigo-600 text-white' : 'border-slate-700 text-slate-300'}`}>
                                {p === 'Facebook' && <Facebook className="w-4 h-4 mr-2"/>}
                                {p === 'X' && <Twitter className="w-4 h-4 mr-2"/>}
                                {p === 'Instagram' && <Instagram className="w-4 h-4 mr-2"/>}
                                {p}
                            </Button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.toneLabel}</label>
                     <div className="grid grid-cols-3 gap-2">
                         {(['professional', 'friendly', 'humorous'] as Tone[]).map(to => (
                            <Button key={to} onClick={() => setTone(to)} variant={tone === to ? 'default' : 'outline'} className={`rounded-lg transition-all ${tone === to ? 'bg-pink-600 text-white' : 'border-slate-700 text-slate-300'}`}>
                                {t.toneOptions[to]}
                            </Button>
                        ))}
                    </div>
                </div>

                 <Button 
                    onClick={handleGenerate}
                    disabled={isLoading || !topic}
                    size="lg"
                    className="w-full rounded-lg bg-gradient-to-r from-pink-600 to-indigo-600 hover:opacity-90 text-white"
                >
                    {isLoading ? (
                        <><LoaderCircle className="mr-2 h-5 w-5 animate-spin" /> {t.generatingButton}</>
                    ) : (
                        <><Wand2 className="mr-2 h-5 w-5" /> {t.generateButton}</>
                    )}
                </Button>
            </div>
        </Card>

        {/* --- RESULTS --- */}
        <div className="lg:col-span-3">
             <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl min-h-[400px]">
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle className="text-white">{t.resultTitle}</CardTitle>
                    {generatedPost && !isLoading && (
                        <Button onClick={handleCopy} variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                           {copySuccess ? <Check className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4" />}
                           <span className="ml-2">{copySuccess ? t.copiedButton : t.copyButton}</span>
                        </Button>
                    )}
                </CardHeader>
                <CardContent>
                    <div className="prose prose-invert prose-p:text-slate-300 whitespace-pre-wrap p-4 bg-black/40 rounded-lg border border-slate-800 min-h-[300px] flex items-center justify-center text-center">
                        {isLoading && <div className="text-slate-400">{lang === 'ar' ? 'جاري كتابة المنشور...' : 'Writing post...'}</div>}
                        {error && <div className="text-red-400">{error}</div>}
                        {!isLoading && !generatedPost && !error && <div className="text-slate-500">{lang === 'ar' ? 'ستظهر نتائجك هنا.' : 'Your results will appear here.'}</div>}
                        {generatedPost}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialPostGeneratorPage;