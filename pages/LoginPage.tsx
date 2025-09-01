import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Mail, Lock, LogIn } from 'lucide-react';

interface LoginPageProps {
    lang: 'ar' | 'en';
    translations: any;
}

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C39.99,36.566,44,31.016,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);

const WhatsAppIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.5 15.3,16.56C14.84,16.62 14.34,16.68 12.38,15.9C10,14.96 8.26,13.12 7.9,12.76C7.55,12.4 6.64,11.45 6.64,10.3C6.64,9.15 7.11,8.69 7.3,8.5C7.5,8.31 7.69,8.29 7.89,8.29C8.08,8.29 8.27,8.29 8.42,8.3C8.57,8.32 8.72,8.34 8.88,8.7C9.05,9.06 9.53,10.24 9.53,10.32C9.53,10.4 9.53,10.5 9.45,10.61C9.37,10.72 9.35,10.74 9.24,10.85C9.13,10.96 9.02,11.08 8.91,11.19C8.8,11.31 8.69,11.42 8.85,11.7C9,11.97 9.5,12.81 10.29,13.52C11.32,14.45 12.23,14.68 12.51,14.74C12.8,14.8 12.92,14.78 13.08,14.61C13.24,14.44 13.68,13.85 13.85,13.57C14.03,13.3 14.19,13.26 14.4,13.32C14.61,13.38 15.97,14.04 16.2,14.14C16.43,14.24 16.5,14.28 16.55,14.34C16.6,14.4 16.56,13.81 16.75,13.96M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22C13.66,22 15.28,21.54 16.7,20.78L20.94,22L20.2,17.9C21.27,16.35 22,14.25 22,12A10,10 0 0,0 12,2Z" />
    </svg>
);


const LoginPage: React.FC<LoginPageProps> = ({ lang, translations }) => {
    const t = translations.loginPage;

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
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">{t.emailLabel}</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <Input type="email" className="bg-black/50 border-slate-700 text-white pl-10" />
                            </div>
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">{t.passwordLabel}</label>
                             <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <Input type="password" className="bg-black/50 border-slate-700 text-white pl-10" />
                            </div>
                            <div className="text-right mt-2">
                                <a href="#/forgot-password" className="text-xs text-indigo-400 hover:underline">{t.forgotPassword}</a>
                            </div>
                        </div>
                    </div>

                    <Button size="lg" className="w-full rounded-lg bg-gradient-to-r from-pink-600 to-indigo-600 hover:opacity-90 text-white font-bold text-base">
                        <LogIn className="mr-2 h-5 w-5" /> {t.loginButton}
                    </Button>
                    
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-700" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-slate-900/50 px-2 text-slate-500">{t.orContinueWith}</span>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                         <Button variant="outline" className="w-full rounded-lg border-slate-700 text-slate-300 hover:bg-slate-800 flex items-center gap-2">
                             <GoogleIcon /> {lang === 'ar' ? 'جوجل' : 'Google'}
                         </Button>
                         <Button variant="outline" className="w-full rounded-lg border-slate-700 text-slate-300 hover:bg-slate-800 flex items-center gap-2">
                            <WhatsAppIcon /> {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
                         </Button>
                    </div>

                    <p className="text-center text-sm text-slate-400">
                        {t.noAccount} <a href="#/signup" className="font-medium text-pink-400 hover:underline">{t.signUpLink}</a>
                    </p>

                </CardContent>
            </Card>
        </motion.div>
    );
};

export default LoginPage;