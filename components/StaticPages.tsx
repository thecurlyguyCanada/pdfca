import React from 'react';
import { Shield, Heart, HelpCircle, FileText, CheckCircle2, AlertTriangle, Coffee, PenTool, Sparkles } from 'lucide-react';
import { translations, Language } from '../utils/i18n';
import { SEO } from './SEO';

interface PageProps {
  lang: Language;
}

const PageLayout: React.FC<{ title: string; subtitle?: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, subtitle, icon, children }) => (
  <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 text-canada-red rounded-2xl mb-6 shadow-sm">
        {icon}
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-gray-500">{subtitle}</p>}
    </div>
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
      {children}
    </div>
  </div>
);

export const PricingPage: React.FC<PageProps> = ({ lang }) => {
  const t = translations[lang];
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "pdfcanada.ca PDF Tools",
    "description": t.seo.pricingDesc,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.pricingPage.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
  return (
    <>
      <SEO title={t.seo.pricingTitle} description={t.seo.pricingDesc} canonicalPath="/pricing" ogType="product" schema={[pricingSchema, faqSchema]} />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.pricingTitle}</h1>
          <p className="text-xl text-gray-500 mb-8">{t.pricingSubtitle}</p>
          <div className="max-w-3xl mx-auto text-gray-600 prose">
            <p>{t.pricingPage.content}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-canada-red/30 transition-all">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{t.freePlan}</h3>
            <div className="text-4xl font-bold text-canada-red mb-6">{t.freeCost}</div>
            <ul className="space-y-4">
              {[t.freeFeature1, t.freeFeature2, t.freeFeature3, t.freeFeature4].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition-colors">
              Start Now
            </button>
          </div>

          {/* Timbits Tip Tier - Featured */}
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-8 shadow-xl border-2 border-amber-400 relative overflow-hidden transform md:-translate-y-4 md:scale-105">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400"></div>
            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Sparkles size={12} /> TIP JAR
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🍁</span>
              <h3 className="text-2xl font-bold text-gray-800">{t.timbitsPlan}</h3>
            </div>
            <div className="text-4xl font-bold text-amber-600 mb-1">{t.timbitsCost}</div>
            <p className="text-sm text-amber-700 mb-6 font-medium">{t.timbitsDesc}</p>
            <ul className="space-y-3">
              {[t.timbitsFeature1, t.timbitsFeature2, t.timbitsFeature3, t.timbitsFeature4].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                    <Heart className="text-amber-500 shrink-0" size={12} fill="currentColor" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://buy.stripe.com/8x228t4yIdCx2mE2ic6Zy04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3.5 rounded-xl font-bold hover:from-amber-600 hover:to-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
            >
              <span className="text-lg">🪙</span> {t.timbitsButton}
            </a>
            <p className="text-xs text-amber-600/70 text-center mt-3">One-time payment • No subscription</p>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 shadow-lg border-2 border-canada-red/20 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-canada-red text-white text-xs font-bold px-3 py-1 rounded-full">MOST POLITE</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{t.enterprisePlan}</h3>
            <div className="text-4xl font-bold text-canada-red mb-6">{t.enterpriseCost}</div>
            <ul className="space-y-4">
              {[t.enterpriseFeature1, t.enterpriseFeature2, t.enterpriseFeature3].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 className="text-canada-red shrink-0" size={20} />
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 bg-canada-red text-white py-3 rounded-xl font-bold hover:bg-canada-darkRed transition-colors">
              Contact Sales (Jk it's free)
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Common Questions</h2>
          <div className="space-y-6">
            {t.pricingPage.faq.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const PrivacyPage: React.FC<PageProps> = ({ lang }) => {
  const t = translations[lang];
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t.seo.privacyTitle,
    "description": t.seo.privacyDesc,
    "url": "https://pdfcanada.ca/privacy",
    "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA'
  };
  return (
    <>
      <SEO title={t.seo.privacyTitle} description={t.seo.privacyDesc} canonicalPath="/privacy" schema={privacySchema} />
      <PageLayout title={t.privacyTitle} icon={<Shield size={32} />}>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">{t.privacyText1}</p>
          <p className="mb-6">{t.privacyText2}</p>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex gap-4 items-start">
            <Shield className="text-blue-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-blue-900 mb-1">Local Processing Guarantee</h4>
              <p className="text-sm text-blue-800">We do not operate backend servers for file processing. Everything happens right here in your browser using WebAssembly.</p>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export const TermsPage: React.FC<PageProps> = ({ lang }) => {
  const t = translations[lang];
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t.seo.termsTitle,
    "description": t.seo.termsDesc,
    "url": "https://pdfcanada.ca/terms",
    "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA'
  };
  return (
    <>
      <SEO title={t.seo.termsTitle} description={t.seo.termsDesc} canonicalPath="/terms" schema={termsSchema} />
      <PageLayout title={t.termsTitle} icon={<FileText size={32} />}>
        <div className="space-y-6 text-gray-600">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0">1</div>
            <p className="pt-1">{t.termsText1}</p>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0">2</div>
            <p className="pt-1">{t.termsText2}</p>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0">3</div>
            <p className="pt-1">{t.termsText3}</p>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export const SorryPolicyPage: React.FC<PageProps> = ({ lang }) => {
  const t = translations[lang];
  return (
    <>
      <SEO title={t.seo.sorryTitle} description={t.seo.sorryDesc} canonicalPath="/sorry" />
      <PageLayout title={t.sorryTitle} icon={<AlertTriangle size={32} />}>
        <div className="text-center space-y-8">
          <p className="text-xl text-gray-700 font-medium">{t.sorryText1}</p>
          <div className="bg-red-50 p-8 rounded-2xl inline-block text-left mx-auto">
            <ul className="space-y-4 text-canada-red font-medium">
              <li className="flex items-center gap-3"><Heart className="fill-current" /> {t.sorryList1}</li>
              <li className="flex items-center gap-3"><Heart className="fill-current" /> {t.sorryList2}</li>
              <li className="flex items-center gap-3"><Heart className="fill-current" /> {t.sorryList3}</li>
            </ul>
          </div>
          <div className="pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400">Signed, The Management</p>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export const HowToPage: React.FC<PageProps> = ({ lang }) => {
  const t = translations[lang];
  const steps = [t.howtoStep1, t.howtoStep2, t.howtoStep3, t.howtoStep4];
  const howtoSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": t.howtoTitle,
    "description": t.seo.howtoDesc,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "text": step
    }))
  };
  return (
    <>
      <SEO title={t.seo.howtoTitle} description={t.seo.howtoDesc} canonicalPath="/howto" schema={howtoSchema} />
      <PageLayout title={t.howtoTitle} icon={<HelpCircle size={32} />}>
        <div className="grid gap-6">
          {[t.howtoStep1, t.howtoStep2, t.howtoStep3, t.howtoStep4].map((step, i) => (
            <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm font-bold text-canada-red mr-4">
                {i + 1}
              </span>
              <span className="text-gray-700 font-medium">{step}</span>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export const MakePdfFillablePage: React.FC<PageProps> = ({ lang }) => {
  const t = translations[lang];
  const fillableSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": t.fillablePageTitle,
    "description": t.seo.fillableDesc,
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Upload", "text": t.fillableStep1 },
      { "@type": "HowToStep", "position": 2, "name": "Select", "text": t.fillableStep2 },
      { "@type": "HowToStep", "position": 3, "name": "Fillify", "text": t.fillableStep3 },
      { "@type": "HowToStep", "position": 4, "name": "Download", "text": t.fillableStep4 }
    ]
  };
  return (
    <>
      <SEO title={t.seo.fillableTitle} description={t.seo.fillableDesc} canonicalPath="/how-to-make-a-pdf-fillable" schema={fillableSchema} />
      <PageLayout title={t.fillablePageTitle} subtitle={t.fillablePageSubtitle} icon={<PenTool size={32} />}>
        <div className="space-y-8 text-gray-700">
          <p className="text-lg font-medium">{t.fillableIntro}</p>

          <div className="grid gap-4">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-4">
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-canada-red font-bold shrink-0">1</div>
              <div><h3 className="font-bold text-gray-900">Upload</h3><p>{t.fillableStep1}</p></div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-4">
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-canada-red font-bold shrink-0">2</div>
              <div><h3 className="font-bold text-gray-900">Select</h3><p>{t.fillableStep2}</p></div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-4">
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-canada-red font-bold shrink-0">3</div>
              <div><h3 className="font-bold text-gray-900">Fillify (Magic)</h3><p>{t.fillableStep3}</p></div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-4">
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-canada-red font-bold shrink-0">4</div>
              <div><h3 className="font-bold text-gray-900">Download</h3><p>{t.fillableStep4}</p></div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
            <h4 className="font-bold text-blue-900 mb-2">{t.fillableWhy}</h4>
            <p className="text-blue-800">{t.fillableWhyText}</p>
            <p className="text-blue-800 mt-2 font-semibold">{t.fillableProTip}</p>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export const SupportLocalPage: React.FC<PageProps> = ({ lang }) => {
  const t = translations[lang];
  const supportSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "pdfcanada.ca",
    "url": "https://pdfcanada.ca",
    "description": translations[lang].seo.supportDesc,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressCountry": "CA"
    },
    "mainEntity": t.supportPage.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
  return (
    <>
      <SEO title={translations[lang].seo.supportTitle} description={translations[lang].seo.supportDesc} canonicalPath="/support" schema={supportSchema} />
      <PageLayout title={translations[lang].navSupport} icon={<Coffee size={32} />}>
        <div className="text-center text-gray-600 space-y-8">
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            {t.supportPage.content}
          </p>
          <p>
            If you like what we do, tell a friend. That's the Canadian way.
          </p>
          <div className="pt-8">
            <a href="https://buy.stripe.com/8x228t4yIdCx2mE2ic6Zy04" target="_blank" rel="noopener noreferrer" className="inline-block bg-canada-red text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-canada-darkRed transition-colors">
              {t.timbitsButton} ☕
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {t.supportPage.faq.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
};