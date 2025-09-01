import React from 'react';
import { motion } from 'framer-motion';
import type { Service } from '../types';
import { getAllServices } from '../data/translations';

interface DashboardPageProps {
  lang: 'ar' | 'en';
  translations: any;
}

const ToolCard: React.FC<{ service: Service }> = ({ service }) => {
    const { icon: Icon, title, desc, path } = service;
    return (
        <a href={path} className="block h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-black shadow-2xl border border-slate-700 relative overflow-hidden group h-full flex flex-col hover:border-pink-500 hover:shadow-pink-500/20 transition-all duration-300"
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
        </a>
    );
};


const DashboardPage: React.FC<DashboardPageProps> = ({ lang, translations }) => {
    const allServices = getAllServices(lang);
    const t = translations;

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent mb-4">
                    {t.dashboardTitle}
                </h1>
                <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                    {t.dashboardSubtitle}
                </p>
            </header>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allServices.map((service) => (
                    <ToolCard key={service.slug} service={service} />
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;