import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Phone, Lock, User, UserPlus, LoaderCircle } from 'lucide-react';
import { getSupabase } from '../lib/supabase';

const supabase = getSupabase();

interface SignupPageProps {
    lang: 'ar' | 'en';
    translations: any;
}

const SignupPage: React.FC<SignupPageProps> = ({ lang, translations }) => {
    const t = translations.signupPage;
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError(lang === 'ar' ? 'كلمتا المرور غير متطابقتين.' : 'Passwords do not match.');
            return;
        }
        if (password.length < 6) {
             setError(lang === 'ar' ? 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.' : 'Password must be at least 6 characters.');
            return;
        }

        setLoading(true);
        setError('');

        let formattedPhone = phone.trim();
        if (!formattedPhone.startsWith('+20')) {
            if (formattedPhone.startsWith('0')) {
                formattedPhone = '+20' + formattedPhone.substring(1);
            } else {
                formattedPhone = '+20' + formattedPhone;
            }
        }
        
        const { data, error } = await supabase.auth.signUp({
            phone: formattedPhone,
            password,
            options: {
                data: {
                    name: name
                }
            }
        });

        if (error) {
            setError(error.message);
            console.error('Signup error:', error.message);
        } else if (data.user) {
             // The AuthProvider will detect the session change and App.tsx will redirect.
            window.location.hash = '#/app';
        } else {
            setError(lang === 'ar' ? 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.' : 'An unexpected error occurred. Please try again.');
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
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">{t.nameLabel}</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <Input 
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="bg-black/50 border-slate-700 text-white pl-10"
                                />
                            </div>
                        </div>
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
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">{t.confirmPasswordLabel}</label>
                             <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <Input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="bg-black/50 border-slate-700 text-white pl-10"
                                />
                            </div>
                        </div>
                         {error && <p className="text-sm text-red-400">{error}</p>}
                         <Button type="submit" size="lg" disabled={loading} className="w-full rounded-lg bg-gradient-to-r from-pink-600 to-indigo-600 hover:opacity-90 text-white font-bold text-base">
                            {loading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <><UserPlus className="mr-2 h-5 w-5" /> {t.signupButton}</>}
                        </Button>
                    </form>
                    
                    <p className="text-center text-sm text-slate-400">
                        {t.haveAccount} <a href="#/login" className="font-medium text-pink-400 hover:underline">{t.loginLink}</a>
                    </p>

                </CardContent>
            </Card>
        </motion.div>
    );
};

export default SignupPage;