import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Service, GenerationHistoryItem } from '../types';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { ArrowLeft, Wand2, LoaderCircle, ClipboardCopy, Check, History, RefreshCw } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { translations } from '../data/translations';
import { useAuth } from '../hooks/useAuth';
import { getSupabase } from '../lib/supabase';

// --- AI Client Initialization ---
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const supabase = getSupabase();

interface VideoScriptGeneratorPageProps {
  service: Service | undefined;
  lang: 'ar' | 'en';
}

type Duration = '30s' | '1m' | '3m';
type Style = 'promotional' | 'informational' | 'storytelling';

const VideoScriptGeneratorPage: React.FC<VideoScriptGeneratorPageProps> = ({ service, lang }) => {
  const { user } = useAuth();
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState<Duration>('1m');
  const [style, setStyle] = useState<Style>('promotional');
  const [generatedScript, setGeneratedScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const [history, setHistory] = useState<GenerationHistoryItem[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);

  const t = lang === 'ar' ? translations.ar.videoScriptGenerator : translations.en.videoScriptGenerator;

  useEffect(() => {
    const fetchHistory = async () => {
      if (!user) return;
      setIsLoadingHistory(true);
      const { data, error } = await supabase
        .from('generation_history')
        .select('*')
        .eq('user_id', user.id)
        .eq('generation_type', 'video_script')
        .order('created_at', { ascending: false })
        .limit(10);

      if (data) {
        setHistory(data as GenerationHistoryItem[]);
      }
      setIsLoadingHistory(false);
    };

    fetchHistory();
  }, [user]);
  
  if (!service) {
    return <div>Service not found.</div>;
  }

  const handleGenerate = async () => {
    if (!topic || isLoading || !user) return;
    setIsLoading(true);
    setError('');
    setGeneratedScript('');

    const styleMap = { promotional: lang === 'ar' ? 'إعلاني جذاب' : 'engaging and promotional', informational: lang === 'ar' ? 'معلوماتي وتعليمي' : 'informational and educational', storytelling: lang === 'ar' ? 'قصصي ومؤثر' : 'emotional and storytelling' };
    const durationMap = { '30s': lang === 'ar' ? '30 ثانية' : '30 seconds', '1m': lang === 'ar' ? 'دقيقة واحدة' : '1 minute', '3m': lang === 'ar' ? '3 دقائق' : '3 minutes' };
    const langPrompt = lang === 'ar' ? `in Arabic` : `in English`;

    const prompt = `Write a professional video script ${langPrompt}.\nTopic: "${topic}"\nTarget Duration: "${durationMap[duration]}"\nStyle: "${styleMap[style]}"\n\nThe script must include:\n1. Scene Number: (e.g., SCENE 1)\n2. Visuals: A clear description of what is happening on screen.\n3. Voiceover/Dialogue: The spoken words for the scene.\n\nStructure the output clearly with markdown.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: { systemInstruction: "You are a professional scriptwriter and video producer, skilled in creating compelling scripts that are timed appropriately and visually descriptive." }
      });

      const newScript = response.text;
      setGeneratedScript(newScript);
      
      const inputs = { topic, duration, style, tone: style }; // tone is mandatory in type, style is more appropriate here
      const { data, error: dbError } = await supabase
        .from('generation_history')
        .insert([{ user_id: user.id, generation_type: 'video_script', inputs, output: newScript }]);

      if (dbError) {
        console.error('Error saving history:', dbError);
      } else if (data) {
        setHistory(prev => [data[0] as GenerationHistoryItem, ...prev].slice(0, 10));
      }

    } catch (err) {
      console.error("Error generating script:", err);
      setError(t.error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = () => {
    if (generatedScript) {
        navigator.clipboard.writeText(generatedScript);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleReloadHistory = (item: GenerationHistoryItem) => {
    setGeneratedScript(item.output);
    setTopic(item.inputs.topic);
    setDuration((item.inputs.duration as Duration) || '1m');
    // Use style first, but fall back to tone (since tone is required and mirrors style) and then a default value.
    setStyle(((item.inputs.style || item.inputs.tone) as Style) || 'promotional');
  };

  const { icon: Icon } = service;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-8">
        <a href="#/app" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-pink-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {lang === 'ar' ? 'العودة إلى لوحة التحكم' : 'Back to Dashboard'}
        </a>
      </div>
      
      <header className="mb-12 text-center">
        <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-pink-500/30 text-indigo-300 mb-4"><Icon className="w-12 h-12" /></div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent mb-2">{t.title}</h1>
        <p className="text-lg text-slate-300">{t.subtitle}</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* --- CONTROLS & HISTORY --- */}
        <div className="lg:col-span-1 flex flex-col gap-8">
            <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl p-6 h-fit">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">{t.topicLabel}</label>
                        <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder={t.topicPlaceholder} className="bg-black/50 border-slate-700 text-white"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">{t.durationLabel}</label>
                         <div className="grid grid-cols-3 gap-2">
                             {(['30s', '1m', '3m'] as Duration[]).map(d => (
                                <Button key={d} onClick={() => setDuration(d)} variant={duration === d ? 'default' : 'outline'} className={`rounded-lg transition-all ${duration === d ? 'bg-indigo-600 text-white' : 'border-slate-700 text-slate-300'}`}>{t.durationOptions[d]}</Button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">{t.styleLabel}</label>
                         <div className="grid grid-cols-3 gap-2">
                             {(['promotional', 'informational', 'storytelling'] as Style[]).map(s => (
                                <Button key={s} onClick={() => setStyle(s)} variant={style === s ? 'default' : 'outline'} className={`rounded-lg transition-all ${style === s ? 'bg-pink-600 text-white' : 'border-slate-700 text-slate-300'}`}>{t.styleOptions[s]}</Button>
                            ))}
                        </div>
                    </div>
                     <Button onClick={handleGenerate} disabled={isLoading || !topic} size="lg" className="w-full rounded-lg bg-gradient-to-r from-pink-600 to-indigo-600 hover:opacity-90 text-white">
                        {isLoading ? (<><LoaderCircle className="mr-2 h-5 w-5 animate-spin" /> {t.generatingButton}</>) : (<><Wand2 className="mr-2 h-5 w-5" /> {t.generateButton}</>)}
                    </Button>
                </div>
            </Card>

            <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl h-fit">
                <CardHeader><CardTitle className="text-white text-lg flex items-center gap-2"><History className="w-5 h-5"/> {t.historyTitle}</CardTitle></CardHeader>
                <CardContent>
                    {isLoadingHistory ? <div className="text-center text-sm text-slate-400">{t.historyLoading}</div>
                    : history.length === 0 ? <p className="text-center text-sm text-slate-500">{t.historyEmpty}</p>
                    : (
                        <ul className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                            {history.map(item => (
                                <li key={item.id} className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
                                    <p className="text-sm text-slate-300 truncate font-medium">{item.inputs.topic}</p>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-xs text-slate-500">{new Date(item.created_at).toLocaleDateString()}</p>
                                        <Button onClick={() => handleReloadHistory(item)} size="sm" variant="ghost" className="text-indigo-400 hover:text-indigo-300 h-auto p-1 text-xs">
                                            <RefreshCw className="w-3 h-3 mr-1"/> {t.historyReloadButton}
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </CardContent>
            </Card>
        </div>

        {/* --- RESULTS --- */}
        <div className="lg:col-span-2">
             <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl min-h-[500px] h-full">
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle className="text-white">{t.resultTitle}</CardTitle>
                    {generatedScript && !isLoading && (
                        <Button onClick={handleCopy} variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                           {copySuccess ? <Check className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4" />}
                           <span className="ml-2">{copySuccess ? t.copiedButton : t.copyButton}</span>
                        </Button>
                    )}
                </CardHeader>
                <CardContent>
                    <div className="prose prose-invert prose-p:text-slate-300 prose-headings:text-indigo-400 whitespace-pre-wrap p-4 bg-black/40 rounded-lg border border-slate-800 min-h-[calc(100vh-20rem)] max-h-[75vh] overflow-y-auto text-right">
                        {isLoading && <div className="flex items-center justify-center h-full text-slate-400">{lang === 'ar' ? 'جاري كتابة السكربت...' : 'Writing script...'}</div>}
                        {error && <div className="flex items-center justify-center h-full text-red-400">{error}</div>}
                        {!isLoading && !generatedScript && !error && <div className="flex items-center justify-center h-full text-slate-500">{lang === 'ar' ? 'ستظهر نتائجك هنا.' : 'Your results will appear here.'}</div>}
                        {generatedScript}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoScriptGeneratorPage;