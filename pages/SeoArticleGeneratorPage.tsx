import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Service } from '../types';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { ArrowLeft, Wand2, LoaderCircle, ClipboardCopy, Check } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { translations } from '../data/translations';

// --- AI Client Initialization ---
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface SeoArticleGeneratorPageProps {
  service: Service | undefined;
  lang: 'ar' | 'en';
}

type Tone = 'informational' | 'persuasive' | 'casual';

const SeoArticleGeneratorPage: React.FC<SeoArticleGeneratorPageProps> = ({ service, lang }) => {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState<Tone>('informational');
  const [generatedArticle, setGeneratedArticle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const t = lang === 'ar' ? translations.ar.seoArticleGenerator : translations.en.seoArticleGenerator;
  
  if (!service) {
    return <div>Service not found.</div>;
  }

  const handleGenerate = async () => {
    if (!topic || !keywords || isLoading) return;
    setIsLoading(true);
    setError('');
    setGeneratedArticle('');

    const toneMap = {
        informational: lang === 'ar' ? 'معلوماتي وموضوعي' : 'informational and objective',
        persuasive: lang === 'ar' ? 'إقناعي وتسويقي' : 'persuasive and marketing-oriented',
        casual: lang === 'ar' ? 'غير رسمي وبسيط' : 'casual and simple'
    };
    const langPrompt = lang === 'ar' ? `in Arabic` : `in English`;

    const prompt = `Write a comprehensive, SEO-optimized article ${langPrompt}.
Topic: "${topic}"
Keywords: "${keywords}"
Tone: "${toneMap[tone]}"

The article must include the following structure:
1.  An engaging H1 title.
2.  A meta description (around 155 characters).
3.  An introduction that hooks the reader.
4.  A well-structured body with multiple sections using H2 and H3 headings.
5.  Incorporate the keywords naturally throughout the article.
6.  A concluding summary.

Format the output clearly with markdown for headings.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                systemInstruction: "You are an expert SEO content strategist and copywriter, skilled in creating high-ranking, engaging, and well-structured articles.",
            }
        });
        setGeneratedArticle(response.text);
    } catch (err) {
        console.error("Error generating article:", err);
        setError(t.error);
    } finally {
        setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedArticle) {
        navigator.clipboard.writeText(generatedArticle);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const { icon: Icon } = service;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-16"
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
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.keywordsLabel}</label>
                    <Input 
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder={t.keywordsPlaceholder}
                        className="bg-black/50 border-slate-700 text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.toneLabel}</label>
                     <div className="grid grid-cols-3 gap-2">
                         {(['informational', 'persuasive', 'casual'] as Tone[]).map(to => (
                            <Button key={to} onClick={() => setTone(to)} variant={tone === to ? 'default' : 'outline'} className={`rounded-lg transition-all ${tone === to ? 'bg-pink-600 text-white' : 'border-slate-700 text-slate-300'}`}>
                                {t.toneOptions[to]}
                            </Button>
                        ))}
                    </div>
                </div>

                 <Button 
                    onClick={handleGenerate}
                    disabled={isLoading || !topic || !keywords}
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
             <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl min-h-[500px]">
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle className="text-white">{t.resultTitle}</CardTitle>
                    {generatedArticle && !isLoading && (
                        <Button onClick={handleCopy} variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                           {copySuccess ? <Check className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4" />}
                           <span className="ml-2">{copySuccess ? t.copiedButton : t.copyButton}</span>
                        </Button>
                    )}
                </CardHeader>
                <CardContent>
                    <div className="prose prose-invert prose-p:text-slate-300 prose-headings:text-indigo-400 whitespace-pre-wrap p-4 bg-black/40 rounded-lg border border-slate-800 min-h-[420px] max-h-[60vh] overflow-y-auto text-right">
                        {isLoading && <div className="flex items-center justify-center h-full text-slate-400">{lang === 'ar' ? 'جاري كتابة المقال...' : 'Writing article...'}</div>}
                        {error && <div className="flex items-center justify-center h-full text-red-400">{error}</div>}
                        {!isLoading && !generatedArticle && !error && <div className="flex items-center justify-center h-full text-slate-500">{lang === 'ar' ? 'ستظهر نتائجك هنا.' : 'Your results will appear here.'}</div>}
                        {generatedArticle}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default SeoArticleGeneratorPage;