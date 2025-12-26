'use client';

import React, { useState } from 'react';
import { Shield, CloudOff, Laptop, Award, CheckCircle, Sparkles, Zap, Heart, Users, DollarSign } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapleLeaf } from '@/components/MapleLeaf';
import Link from 'next/link';
import { translations, Language } from '@/utils/i18n';
import { getAllToolSlugs } from '@/lib/toolConfig';

export function HomePage() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  const toolSlugs = getAllToolSlugs();

  const handleNavigate = () => {
    // Navigation handled by Next.js Link components
  };

  return (
    <>
      <div className="mesh-bg" />
      <div className="min-h-screen flex flex-col">
        <Header lang={lang} setLang={setLang} onNavigate={handleNavigate} />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/60 backdrop-blur-sm border border-canada-red/10 rounded-full text-canada-red-dark text-xs sm:text-sm font-black tracking-widest uppercase shadow-md mb-6 sm:mb-8">
              <MapleLeaf className="w-4 h-4" />
              <span>{t.builtIn}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-gray-900 mb-4 sm:mb-6">
              {t.title}<br />
              <span className="bg-gradient-to-r from-canada-red via-[#e31837] to-[#ff4d4d] bg-clip-text text-transparent block mt-3 sm:mt-4">
                {t.subtitle}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed mb-8 sm:mb-12">
              {t.description}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
              {[
                { icon: Shield, text: t.localProcessing },
                { icon: CloudOff, text: t.noSignup },
                { icon: Laptop, text: t.secure },
                { icon: Award, text: t.guarantee },
              ].map(({ icon: Icon, text }, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl text-gray-700 text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <Icon size={16} className="text-canada-red" />
                  {text}
                </div>
              ))}
            </div>
          </section>

          {/* Tools Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              {t.selectToolTitle}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {toolSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="group bg-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-canada-red hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-canada-red/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-canada-red group-hover:scale-110 transition-all duration-200">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-canada-red group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-canada-red transition-colors">
                      {slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Value Props */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Zap,
                  title: t.fastTitle || 'Lightning Fast',
                  desc: t.fastDesc || 'Process files instantly in your browser',
                },
                {
                  icon: Heart,
                  title: t.freeTitle || '100% Free',
                  desc: t.freeDesc || 'No hidden costs, no subscriptions',
                },
                {
                  icon: Users,
                  title: t.privateTitle || 'Privacy First',
                  desc: t.privateDesc || 'Your files never leave your device',
                },
              ].map(({ icon: Icon, title, desc }, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-canada-red/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-canada-red" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer lang={lang} />
      </div>
    </>
  );
}
