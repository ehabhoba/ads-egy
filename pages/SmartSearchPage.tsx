import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Service } from '../types';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { ArrowLeft, Search, LoaderCircle, ExternalLink, FileText } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { translations } from '../data/translations';

// --- AI Client Initialization ---
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface SmartSearchPageProps {
  service: Service | undefined;
  lang: 'ar' | 'en';
}

interface GroundingChunk {
    web: {
        uri: string;
        title: string;
    }
}

const SmartSearchPage: React.FC<SmartSearchPageProps> = ({ service, lang }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<GenerateContentResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const t = lang === 'ar' ? translations.ar.smartSearch : translations.en.smartSearch;
  
  if (!service) {
    return <div>Service not found.</div>;
  }

  const handleSearch = async () => {
    if (!query || isLoading) return;
    setIsLoading(true);
    setError('');
    setResult(null);

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: query,
            config: {
                tools: [{googleSearch: {}}],
            },
        });
        setResult(response);
    } catch (err) {
        console.error("Error during search:", err);
        setError(t.error);
    } finally {
        setIsLoading(false);
    }
  };

  const groundingChunks = result?.candidates?.[0]?.groundingMetadata?.groundingChunks as GroundingChunk[] || [];

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

      <Card className="max-w-4xl mx-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-xl p-6">
        <div className="flex flex-col sm:flex-row gap-4">
            <Input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder={t.queryPlaceholder}
                className="bg-black/50 border-slate-700 text-white text-base flex-grow"
            />
            <Button 
                onClick={handleSearch}
                disabled={isLoading || !query}
                size="lg"
                className="rounded-lg bg-gradient-to-r from-pink-600 to-indigo-600 hover:opacity-90 text-white"
            >
                {isLoading ? (
                    <><LoaderCircle className="mr-2 h-5 w-5 animate-spin" /> {t.generatingButton}</>
                ) : (
                    <><Search className="mr-2 h-5 w-5" /> {t.generateButton}</>
                )}
            </Button>
        </div>
      </Card>
      
      {(isLoading || error || result) && (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
        >
            <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                    <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl min-h-[300px]">
                        <CardHeader><CardTitle className="text-white flex items-center gap-2"><FileText />{t.resultTitle}</CardTitle></CardHeader>
                        <CardContent>
                            <div className="prose prose-invert prose-p:text-slate-300 whitespace-pre-wrap p-4 bg-black/40 rounded-lg border border-slate-800 min-h-[200px]">
                                {isLoading && <div className="flex items-center justify-center h-full text-slate-400">{lang === 'ar' ? 'جاري البحث عن إجابات...' : 'Searching for answers...'}</div>}
                                {error && <div className="flex items-center justify-center h-full text-red-400">{error}</div>}
                                {result?.text && <p>{result.text}</p>}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-1">
                     <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
                        <CardHeader><CardTitle className="text-white">{t.sourcesTitle}</CardTitle></CardHeader>
                        <CardContent>
                            {isLoading && !result && <div className="text-center text-sm text-slate-400 py-4">...</div>}
                            {groundingChunks.length > 0 ? (
                                <ul className="space-y-3">
                                    {groundingChunks.map((chunk, index) => (
                                        <li key={index}>
                                            <a 
                                                href={chunk.web.uri} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-sm text-indigo-400 hover:text-pink-400 group flex items-start gap-2 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                <span className="truncate group-hover:underline">{chunk.web.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                !isLoading && result && <p className="text-sm text-slate-500">{lang === 'ar' ? 'لم يتم العثور على مصادر.' : 'No sources found.'}</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </motion.div>
      )}

    </motion.div>
  );
};

export default SmartSearchPage;