'use client';

import React from 'react';
import { PenTool, ShieldCheck, Feather, Check, AlertTriangle, ArrowRight } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { getGuideContent } from '../../../utils/guideContent';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import Link from 'next/link';
import { ToolPromo } from '../../ToolPromo';
import { RelatedTools } from '../../RelatedTools';

interface GuideProps {
    lang: Language;
}

const getLocalContent = (lang: string) => ({
    en: {
        intro: `Stop printing, signing, scanning, and emailing documents! **Electronic signatures (e-Signatures)** are faster, more convenient, and legally binding in most jurisdictions including Canada, the United States, and the European Union.

Our free **Sign PDF** tool lets you add secure electronic signatures to any PDF document directly in your browser—no account required, no data uploaded to servers, complete privacy guaranteed.

### Who Needs This Tool?

*   **Business Professionals**: Sign contracts, proposals, and agreements without printing.
*   **Real Estate Agents**: Get offers and leases signed quickly.
*   **HR Departments**: Collect signatures on employment documents.
*   **Freelancers**: Sign NDAs, contracts, and invoices professionally.
*   **Students**: Sign scholarship applications and consent forms.
*   **Legal Professionals**: Execute documents with verified signatures.`,
        sections: [
            {
                id: 'types',
                title: 'Electronic vs. Digital Signatures',
                content: `Understanding the difference is crucial for choosing the right signature type:

**Electronic Signature (Standard E-Signature):**
*   An image or representation of your signature placed on the document
*   Legal for most business contracts, leases, agreements, and consent forms
*   Simple to create and apply
*   Recognized under Canadian PIPEDA, US ESIGN Act, EU eIDAS Regulation

**Digital Signature (Advanced/Qualified):**
*   Uses cryptographic certificates (PKI) to prove identity
*   Creates a tamper-evident seal—any changes invalidate the signature
*   Required for government forms, court filings, and high-security contracts
*   Provides stronger legal protection and non-repudiation

| Feature | Electronic Signature | Digital Signature |
|---------|---------------------|-------------------|
| Legal Validity | ✅ Most contracts | ✅ All documents |
| Identity Verification | Basic | Certificate-based |
| Tamper Detection | ❌ No | ✅ Yes |
| Setup Complexity | Simple | Requires certificate |
| Best For | Business contracts | Government/legal |`
            },
            {
                id: 'how-to',
                title: 'How to Sign a PDF Online',
                content: `Follow these simple steps to add your signature to any PDF:

**Step 1: Upload Your PDF**
Click "Select PDF" or drag and drop your document. Your file stays in your browser—nothing is uploaded.

**Step 2: Create Your Signature**
Choose one of three methods:
*   **Draw**: Use your mouse, trackpad, or finger (on touch devices) to draw your signature
*   **Type**: Enter your name and select from stylish handwriting fonts
*   **Upload**: Upload a photo of your wet-ink signature

**Step 3: Place Your Signature**
Click where you want to sign, then drag and resize your signature to fit the signature line perfectly.

**Step 4: Add Date & Initials (Optional)**
Add today's date and your initials to additional fields as needed.

**Step 5: Download**
Click "Download" to save your signed PDF. The signature is permanently embedded.

**Pro Tips:**
*   Use a stylus or your finger on a tablet for the most natural-looking drawn signature
*   Save your signature for reuse on future documents
*   Add multiple signatures if signing on behalf of multiple parties`
            },
            {
                id: 'legal',
                title: 'Legal Validity of E-Signatures',
                content: `Electronic signatures are legally binding in most countries:

**Canada:**
*   **PIPEDA** (Personal Information Protection and Electronic Documents Act) recognizes e-signatures
*   Provincial laws (like Ontario's ESA) also validate electronic signatures
*   Exceptions: Wills, certain real estate documents, and powers of attorney may require wet signatures

**United States:**
*   **ESIGN Act** (2000) and **UETA** (1999) establish e-signature legality
*   Valid for most commercial and consumer transactions
*   Some states have additional requirements for specific document types

**European Union:**
*   **eIDAS Regulation** provides a unified framework
*   Three levels: Simple, Advanced, and Qualified electronic signatures
*   Qualified signatures have the same legal effect as handwritten signatures

**Key Legal Requirements:**
1.  Intent to sign (the signer meant to sign)
2.  Consent to do business electronically
3.  Association with the document (signature is attached to specific document)
4.  Record retention (ability to store and reproduce the signed document)`
            },
            {
                id: 'privacy',
                title: 'Privacy & Security',
                content: `Your documents deserve maximum protection:

**100% Local Processing**
Unlike DocuSign, Adobe Sign, or HelloSign, our tool processes everything in your browser. Your PDF never leaves your device—ever.

**Zero Data Collection**
We don't store signatures, documents, or any personal information. When you close the tab, everything is gone.

**No Account Required**
Sign documents immediately without creating an account or providing an email address.

**PIPEDA Compliant**
Our privacy-first approach exceeds Canadian privacy requirements.

**Comparison with Cloud Services:**
| Feature | pdfcanada.ca | Cloud Services |
|---------|-------------|----------------|
| Document Upload | ❌ Never | ✅ Uploaded to servers |
| Account Required | ❌ No | ✅ Yes |
| Email Required | ❌ No | ✅ Yes |
| Data Retention | ❌ None | ⚠️ Often stored |
| Monthly Fee | ❌ Free | ⚠️ $10-50/month |`
            },
            {
                id: 'use-cases',
                title: 'Common Use Cases',
                content: `**Business Contracts**
Sign vendor agreements, partnership contracts, and service agreements without delays.

**Employment Documents**
Onboard new employees with signed offer letters, NDAs, and policy acknowledgments.

**Real Estate**
Sign purchase offers, lease agreements, and disclosure documents quickly.

**Banking & Finance**
Execute loan applications, account openings, and investment agreements.

**Healthcare**
Sign consent forms, patient agreements, and insurance documents.

**Education**
Complete scholarship applications, consent forms, and enrollment documents.`
            },
            {
                id: 'troubleshooting',
                title: 'Troubleshooting',
                content: `**Problem: Signature looks pixelated**
*Solution*: Draw larger and scale down, or use a higher resolution uploaded image.

**Problem: Can't position signature precisely**
*Solution*: Use zoom controls to enlarge the document, then fine-tune placement.

**Problem: Need to sign multiple pages**
*Solution*: Navigate to each page and add signatures individually, or use "Apply to all pages" if available.

**Problem: Signature won't save**
*Solution*: Ensure you click "Download" after signing. The signed PDF is a new file.

**Problem: Recipient says signature is invalid**
*Solution*: For legal documents requiring verified signatures, consider using a digital signature with a certificate.`
            },
            {
                id: 'faq',
                title: 'Frequently Asked Questions',
                content: `**Are electronic signatures legally binding?**
Yes, in most cases. E-signatures are recognized by law in Canada (PIPEDA), the US (ESIGN Act), and the EU (eIDAS).

**What documents can't be e-signed?**
Typically: wills, trusts, court documents, powers of attorney, and certain real estate transfers (varies by jurisdiction).

**Is my signature stored anywhere?**
No. All processing happens locally. Nothing is sent to our servers.

**Can I sign on my phone or tablet?**
Yes! Our tool works on all devices with a browser.

**How do I add my initials?**
Create a separate signature with just your initials, then place it where needed.

**Can I sign a scanned PDF?**
Yes, as long as it's a valid PDF file.

**Is there a page or file limit?**
No, sign documents of any length for free.

**Can I remove a signature after adding it?**
Before downloading, yes. After downloading, the signature is permanent.

**Do I need to create an account?**
No, our tool works without any signup.

**Is this service really free?**
Yes, 100% free with no hidden costs or watermarks.

**Can I request signatures from others?**
Our tool is for self-signing. For collecting signatures from others, you may need a workflow solution.

**What's the difference between signing and certifying a PDF?**
Signing adds your signature. Certifying (with a digital certificate) adds cryptographic proof of identity and document integrity.`
            }
        ],
        seo: {
            title: 'Sign PDF Online Free | Add Electronic Signatures | pdfcanada.ca',
            desc: 'Add legally binding electronic signatures to PDF documents for free. No account required. 100% private—files never leave your browser.'
        },
        h1: 'Sign PDF Online',
        subtitle: 'Add legally binding electronic signatures instantly—free and private.',
        breadcrumbs: {
            home: 'Home',
            guides: 'Guides',
            sign: 'Sign PDF'
        }
    },
    fr: {
        seo: {
            title: 'Signer PDF en Ligne Gratuit | Signatures Électroniques | pdfcanada.ca',
            desc: 'Ajoutez des signatures électroniques juridiquement contraignantes aux documents PDF gratuitement. Aucun compte requis. 100% privé.'
        },
        h1: 'Signer PDF en Ligne',
        subtitle: 'Ajoutez des signatures électroniques juridiquement contraignantes instantanément—gratuit et privé.',
        intro: `Arrêtez d'imprimer, signer, scanner et envoyer des documents par email ! Les **signatures électroniques (e-Signatures)** sont plus rapides, plus pratiques et juridiquement contraignantes dans la plupart des juridictions.

Notre outil gratuit **Signer PDF** vous permet d'ajouter des signatures électroniques sécurisées à n'importe quel document PDF directement dans votre navigateur—aucun compte requis, aucune donnée téléchargée.

### Qui a besoin de cet outil ?

*   **Professionnels** : Signez des contrats et accords sans imprimer.
*   **Agents immobiliers** : Faites signer des offres et baux rapidement.
*   **Départements RH** : Collectez des signatures sur les documents d'emploi.
*   **Freelances** : Signez des NDA, contrats et factures professionnellement.
*   **Étudiants** : Signez des demandes de bourses et formulaires de consentement.`,
        sections: [
            {
                id: 'types',
                title: 'Signatures Électroniques vs Numériques',
                content: `**Signature Électronique (Standard) :**
*   Une image de votre signature placée sur le document
*   Valide pour la plupart des contrats commerciaux et accords
*   Simple à créer et appliquer

**Signature Numérique (Avancée) :**
*   Utilise des certificats cryptographiques pour prouver l'identité
*   Crée un sceau inviolable—toute modification invalide la signature
*   Requise pour les formulaires gouvernementaux et contrats haute sécurité`
            },
            {
                id: 'how-to',
                title: 'Comment Signer un PDF en Ligne',
                content: `**Étape 1 : Téléchargez votre PDF**
Cliquez sur « Sélectionner PDF » ou glissez-déposez votre document.

**Étape 2 : Créez votre signature**
*   **Dessiner** : Utilisez votre souris pour dessiner votre signature
*   **Taper** : Entrez votre nom avec une police manuscrite
*   **Téléverser** : Importez une photo de votre signature

**Étape 3 : Placez votre signature**
Cliquez où vous voulez signer, puis ajustez la taille et position.

**Étape 4 : Téléchargez**
Cliquez sur « Télécharger » pour sauvegarder votre PDF signé.`
            },
            {
                id: 'legal',
                title: 'Validité Juridique des E-Signatures',
                content: `Les signatures électroniques sont juridiquement contraignantes dans la plupart des pays :

**Canada :**
*   **LPRPDE** reconnaît les signatures électroniques
*   Exceptions : Testaments, certains documents immobiliers

**Union Européenne :**
*   Le règlement **eIDAS** fournit un cadre unifié
*   Trois niveaux : Simple, Avancée et Qualifiée`
            },
            {
                id: 'privacy',
                title: 'Confidentialité et Sécurité',
                content: `**Traitement 100% Local**
Contrairement à DocuSign ou Adobe Sign, notre outil traite tout dans votre navigateur. Votre PDF ne quitte jamais votre appareil.

**Zéro collecte de données**
Nous ne stockons pas les signatures, documents ou informations personnelles.

**Aucun compte requis**
Signez des documents immédiatement sans créer de compte.`
            },
            {
                id: 'faq',
                title: 'Questions Fréquentes',
                content: `**Les signatures électroniques sont-elles juridiquement contraignantes ?**
Oui, dans la plupart des cas. Reconnues au Canada, aux États-Unis et dans l'UE.

**Ma signature est-elle stockée ?**
Non. Tout le traitement se fait localement.

**Puis-je signer sur mon téléphone ?**
Oui ! Notre outil fonctionne sur tous les appareils.

**Ce service est-il vraiment gratuit ?**
Oui, 100% gratuit sans coûts cachés.`
            }
        ],
        breadcrumbs: {
            home: 'Accueil',
            guides: 'Guides',
            sign: 'Signer PDF'
        }
    },
    pt: {
        seo: {
            title: 'Assinar PDF Online Grátis | Assinaturas Eletrônicas | pdfcanada.ca',
            desc: 'Adicione assinaturas eletrônicas juridicamente vinculativas a documentos PDF gratuitamente. Sem conta necessária. 100% privado.'
        },
        h1: 'Assinar PDF Online',
        subtitle: 'Adicione assinaturas eletrônicas juridicamente vinculativas instantaneamente—grátis e privado.',
        intro: `Pare de imprimir, assinar, digitalizar e enviar documentos por e-mail! **Assinaturas eletrônicas (e-Signatures)** são mais rápidas, mais convenientes e juridicamente vinculativas na maioria das jurisdições.

Nossa ferramenta gratuita **Assinar PDF** permite adicionar assinaturas eletrônicas seguras a qualquer documento PDF diretamente no seu navegador—sem conta necessária, sem dados enviados para servidores.

### Quem precisa desta ferramenta?

*   **Profissionais de negócios**: Assine contratos e acordos sem imprimir.
*   **Corretores de imóveis**: Obtenha ofertas e contratos assinados rapidamente.
*   **Departamentos de RH**: Colete assinaturas em documentos de emprego.
*   **Freelancers**: Assine NDAs, contratos e faturas profissionalmente.
*   **Estudantes**: Assine formulários de bolsa e consentimento.`,
        sections: [
            {
                id: 'types',
                title: 'Assinaturas Eletrônicas vs. Digitais',
                content: `**Assinatura Eletrônica (Padrão):**
*   Uma imagem da sua assinatura colocada no documento
*   Válida para a maioria dos contratos comerciais e acordos
*   Simples de criar e aplicar

**Assinatura Digital (Avançada):**
*   Usa certificados criptográficos para provar identidade
*   Cria um selo à prova de violação
*   Necessária para formulários governamentais e contratos de alta segurança`
            },
            {
                id: 'how-to',
                title: 'Como Assinar um PDF Online',
                content: `**Passo 1: Envie seu PDF**
Clique em "Selecionar PDF" ou arraste e solte seu documento.

**Passo 2: Crie sua assinatura**
*   **Desenhar**: Use seu mouse para desenhar sua assinatura
*   **Digitar**: Digite seu nome com uma fonte manuscrita
*   **Enviar**: Importe uma foto da sua assinatura

**Passo 3: Posicione sua assinatura**
Clique onde deseja assinar, depois ajuste o tamanho e posição.

**Passo 4: Baixe**
Clique em "Download" para salvar seu PDF assinado.`
            },
            {
                id: 'legal',
                title: 'Validade Jurídica das E-Assinaturas',
                content: `Assinaturas eletrônicas são juridicamente vinculativas na maioria dos países:

**Brasil:**
*   A **MP 2.200-2/2001** reconhece assinaturas eletrônicas
*   ICP-Brasil fornece certificação digital

**Portugal e União Europeia:**
*   O regulamento **eIDAS** fornece uma estrutura unificada
*   Três níveis: Simples, Avançada e Qualificada`
            },
            {
                id: 'privacy',
                title: 'Privacidade e Segurança',
                content: `**Processamento 100% Local**
Diferente do DocuSign ou Adobe Sign, nossa ferramenta processa tudo no navegador. Seu PDF nunca sai do seu dispositivo.

**Zero coleta de dados**
Não armazenamos assinaturas, documentos ou informações pessoais.

**Nenhuma conta necessária**
Assine documentos imediatamente sem criar conta.`
            },
            {
                id: 'faq',
                title: 'Perguntas Frequentes',
                content: `**Assinaturas eletrônicas são juridicamente vinculativas?**
Sim, na maioria dos casos. Reconhecidas no Brasil, EUA e UE.

**Minha assinatura é armazenada?**
Não. Todo processamento acontece localmente.

**Posso assinar no meu celular?**
Sim! Nossa ferramenta funciona em todos os dispositivos.

**Este serviço é realmente gratuito?**
Sim, 100% gratuito sem custos ocultos.`
            }
        ],
        breadcrumbs: {
            home: 'Início',
            guides: 'Guias',
            sign: 'Assinar PDF'
        }
    }
});

export const SignPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const localContent = getLocalContent(lang);
    const t = (localContent as any)[lang] || (localContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath={`/${lang}/guides/sign-pdf`}
                lang={lang}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, path: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, path: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.sign, path: lang === 'en' ? '/guides/sign-pdf' : `/${lang}/guides/sign-pdf` }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<PenTool size={32} />}
                breadcrumbs={[
                    { name: t.breadcrumbs.home, href: lang === 'en' ? '/' : `/${lang}` },
                    { name: t.breadcrumbs.guides, href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.breadcrumbs.sign, href: lang === 'en' ? '/guides/sign-pdf' : `/${lang}/guides/sign-pdf` }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <ToolPromo tool="sign-pdf" lang={lang} />
                    <MarkdownContent content={t.intro} />

                    {t.sections.map((section: any) => (
                        <section key={section.id} className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <div className="w-2 h-8 bg-canada-red rounded-full" />
                                {section.title}
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                <MarkdownContent content={section.content} />
                            </div>
                        </section>
                    ))}

                    <div className="mt-12">
                        <RelatedTools lang={lang} currentPath={`/${lang}/guides/sign-pdf`} category="edit" />
                    </div>

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/make-pdf-fillable`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Créer PDF Remplissable' : (lang === 'pt' ? 'Guia Criar PDF Preenchível' : 'Make PDF Fillable Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/private-pdf-tools`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Outils PDF Privés' : (lang === 'pt' ? 'Guia Ferramentas PDF Privadas' : 'Private PDF Tools Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/flatten-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Aplatir PDF' : (lang === 'pt' ? 'Guia Achatar PDF' : 'Flatten PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/merge-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <ArrowRight size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Fusionner PDF' : (lang === 'pt' ? 'Guia Juntar PDF' : 'Merge PDF Guide')}
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
