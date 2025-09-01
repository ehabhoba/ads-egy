import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Phone, Lock, LogIn, LoaderCircle } from 'lucide-react';
import { getSupabase } from '../lib/supabase';

const supabase = getSupabase();

interface LoginPageProps {
    lang: 'ar' | 'en';
    translations: any;
}

const LoginPage: React.FC<LoginPageProps> = ({ lang, translations }) => {
    const t = translations.loginPage;
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Basic validation for Egyptian phone number
        let formattedPhone = phone.trim();
        if (!formattedPhone.startsWith('+20')) {
            if (formattedPhone.startsWith('0')) {
                formattedPhone = '+20' + formattedPhone.substring(1);
            } else {
                formattedPhone = '+20' + formattedPhone;
            }
        }

        const { error } = await supabase.auth.signInWithPassword({
            phone: formattedPhone,
            password,
        });

        if (error) {
            setError(lang === 'ar' ? 'رقم الهاتف أو كلمة المرور غير صحيحة.' : 'Invalid login credentials.');
            console.error('Login error:', error.message);
        } else {
            // The AuthProvider will detect the session change and App.tsx will redirect.
            window.location.hash = '#/app';
        }

        setLoading(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex items-center justify-center px-4 py-16"
        >
            <Card className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/50 shadow-2xl shadow-black/30 backdrop-blur-sm">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent">{t.title}</CardTitle>
                    <p className="text-slate-400">{t.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">{t.emailLabel}</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <Input 
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder={lang === 'ar' ? 'مثال: 01012345678' : 'e.g., 01012345678'}
                                    required
                                    className="bg-black/50 border-slate-700 text-white pl-10" 
                                />
                            </div>
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">{t.passwordLabel}</label>
                             <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <Input 
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="bg-black/50 border-slate-700 text-white pl-10" 
                                />
                            </div>
                        </div>
                        {error && <p className="text-sm text-red-400">{error}</p>}
                        <Button type="submit" size="lg" disabled={loading} className="w-full rounded-lg bg-gradient-to-r from-pink-600 to-indigo-600 hover:opacity-90 text-white font-bold text-base">
                            {loading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <><LogIn className="mr-2 h-5 w-5" /> {t.loginButton}</>}
                        </Button>
                    </form>
                    
                    <p className="text-center text-sm text-slate-400">
                        {t.noAccount} <a href="#/signup" className="font-medium text-pink-400 hover:underline">{t.signUpLink}</a>
                    </p>

                </CardContent>
            </Card>
        </motion.div>
    );
};

export default LoginPage;