'use client';

import Link from 'next/link';
import React from 'react';
import { Shield, Lock, FileKey, EyeOff, CheckCircle, AlertTriangle, Server, Globe } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { ALL_GUIDES } from '../../../lib/guideMetadata';
import { MarkdownContent } from '../../MarkdownContent';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';

interface HubProps {
    lang: Language;
}

const getHubContent = (lang: string) => ({
    en: {
        seo: {
            title: `PDF Security & Privacy Hub | Protect & Secure PDF ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `The definitive guide to PDF security. Learn about password protection, local processing, encryption, legal compliance, and how to secure your sensitive documents.`
        },
        h1: "PDF Security Hub",
        subtitle: "Protect your sensitive data with industry-leading security guides and privacy-first tools.",
        intro: `In an era of data breaches, cloud surveillance, and regulatory scrutiny, **document security is paramount**. Whether you're a lawyer protecting client privilege, a healthcare provider handling patient records, a financial advisor managing sensitive data, or simply someone who values privacy, these guides are essential reading.

We specialize in **local-first security**—an approach where your documents never leave your device. Unlike cloud-based PDF tools that upload your files to remote servers (where they can be accessed, stored, or breached), our tools process everything in your browser using advanced WebAssembly technology.

### Why PDF Security Matters

*   **Data Breach Prevention**: Confidential documents uploaded to cloud services become potential breach targets.
*   **Regulatory Compliance**: PIPEDA, HIPAA, GDPR, and financial regulations require careful handling of sensitive documents.
*   **Client Trust**: Professionals handling privileged information must demonstrate security diligence.
*   **Metadata Exposure**: PDFs contain hidden metadata that can reveal sensitive information about authors, edits, and file origins.`,
        localFirstSection: {
            title: "Local-First Security Explained",
            content: `**What is Local-First Processing?**
Local-first means your PDF files are processed entirely within your web browser. The files never leave your device and are never uploaded to any server.

**How It Works:**
1.  You load a PDF into the browser
2.  WebAssembly (WASM) technology processes the file locally
3.  All operations happen on your CPU, not a remote server
4.  When you close the browser tab, all data is cleared from memory

**Why This Matters:**
| Cloud Processing | Local-First Processing |
|-----------------|----------------------|
| Files uploaded to servers | Files stay on your device |
| Potential for data retention | Zero data retention |
| Risk of server breaches | No server = no breach risk |
| Requires internet connection | Works offline after page load |
| Trust required in third party | You maintain full control |

**Our Commitment:**
Every tool on pdfcanada.ca is designed with local-first security. We don't receive, store, or have access to your documents.`
        },
        encryptionSection: {
            title: "Understanding PDF Encryption",
            content: `PDFs support two levels of password protection:

**User Password (Open Password):**
*   Required to open and view the document
*   Without this password, the PDF appears completely encrypted
*   Recommended for truly confidential documents

**Owner Password (Permissions Password):**
*   Controls what actions are allowed (print, copy, edit)
*   The PDF can be viewed but restricted actions are blocked
*   Can be bypassed by some PDF tools (provides guidance, not security)

**Encryption Algorithms:**
| Algorithm | Security Level | Recommendation |
|-----------|----------------|----------------|
| RC4 40-bit | ❌ Weak | Avoid |
| RC4 128-bit | ⚠️ Outdated | Not recommended |
| AES-128 | ✅ Good | Acceptable |
| AES-256 | ✅✅ Strong | Recommended |

**Best Practices:**
*   Use AES-256 encryption for sensitive documents
*   Choose strong passwords (12+ characters, mixed case, numbers, symbols)
*   Store passwords securely (password manager recommended)
*   Consider who needs access and share passwords securely`
        },
        complianceSection: {
            title: "Regulatory Compliance",
            content: `Different industries have specific requirements for document security:

**PIPEDA (Canada)**
*   Personal Information Protection and Electronic Documents Act
*   Requires "appropriate security safeguards" for personal data
*   Local processing eliminates server-side data exposure risks
*   Organizations must protect information throughout its lifecycle

**HIPAA (US Healthcare)**
*   Protected Health Information (PHI) requires encryption
*   Access controls and audit trails are mandatory
*   Local processing avoids creating additional PHI copies on third-party servers

**GDPR (European Union)**
*   Requires data minimization and purpose limitation
*   Data subjects have right to erasure
*   Local processing means no data transferred to or stored by third parties

**Financial Regulations (SOX, GLBA)**
*   Require protection of non-public personal information
*   Audit requirements for document handling
*   Encryption and access controls mandatory

**Legal Privilege**
*   Attorney-client privilege requires confidentiality
*   Work product doctrine protections
*   Uploading privileged documents to cloud services may waive privilege`
        },
        threatsSection: {
            title: "Common PDF Security Threats",
            content: `**Metadata Exposure**
PDFs contain hidden metadata including author name, software used, edit history, and sometimes the original file path on the author's computer. Always analyze and remove metadata before sharing sensitive documents.

**Embedded Scripts**
PDFs can contain JavaScript and other executable content. While rare, malicious PDFs can exploit vulnerabilities in PDF readers.

**Invisible Layers**
PDFs may contain hidden layers or redactions that aren't truly removed—just visually hidden. Proper redaction requires flattening the document.

**Version History**
Some PDFs retain previous versions of content that was "deleted" or edited. Incremental saves can expose earlier document states.

**Form Data**
Interactive forms may contain submitted data that remains in the file. XFA forms can also contain complex scripts.

**How to Protect Yourself:**
1.  Analyze PDFs before sharing to understand their contents
2.  Flatten documents to remove interactive elements
3.  Remove metadata using dedicated tools
4.  Use local-first tools to avoid creating additional copies`
        },
        categories: [
            {
                id: 'core-security',
                title: "Core Security Guides",
                desc: "Essential protection knowledge for every user.",
                filter: (slug: string) => ['ultimate-pdf-guide', 'private-pdf-tools'].includes(slug)
            },
            {
                id: 'industry',
                title: "Industry-Specific Security",
                desc: "Compliance guides for regulated sectors.",
                filter: (slug: string) => ['legal-pdf-tools', 'healthcare-pdf-security', 'finance-pdf-security'].includes(slug)
            },
            {
                id: 'actions',
                title: "Security Actions",
                desc: "Active measures to secure your files.",
                filter: (slug: string) => ['flatten-pdf', 'analyze-pdf', 'edit-xfa-pdf'].includes(slug)
            }
        ],
        faq: {
            title: "Frequently Asked Questions",
            content: `**Are your tools really 100% local?**
Yes. We use WebAssembly technology to process PDFs entirely in your browser. Your files never leave your device, and we have no mechanism to receive or store your documents.

**How can I verify you don't upload my files?**
Open your browser's Developer Tools (F12), go to the Network tab, then use any of our tools. You'll see that no file data is transmitted to any server.

**Is password-protected PDF encryption secure?**
AES-256 encryption with a strong password is very secure. However, the "owner password" (permissions) can be bypassed by some tools. For true security, use the "user password" (open password).

**Should I avoid all cloud PDF tools?**
Not necessarily, but you should understand the risks. Cloud tools require uploading your files, which creates additional copies of your data. For sensitive documents, local-first tools are safer.

**What if I need to share a secure PDF?**
Encrypt the PDF with a strong password, then share the file through a secure channel. Communicate the password separately (e.g., via phone call, not the same email).

**How do I securely delete a PDF?**
Simply deleting a file doesn't remove it from your hard drive immediately. Use secure deletion tools, or encrypt the drive where sensitive files are stored.

**Can PDFs contain viruses?**
Yes, malicious PDFs can exploit vulnerabilities in PDF readers. Keep your PDF software updated and be cautious with PDFs from unknown sources.

**What's the most secure way to redact information?**
Use proper redaction tools that permanently remove content, then flatten the PDF. Simply drawing black boxes over text doesn't remove the underlying data.`
        }
    },
    fr: {
        seo: {
            title: `Hub de Sécurité PDF | Protéger et Sécuriser PDF ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `Le guide définitif de la sécurité PDF. Apprenez la protection par mot de passe, le traitement local, le chiffrement et la conformité légale.`
        },
        h1: "Hub de Sécurité PDF",
        subtitle: "Protégez vos données sensibles avec des guides de sécurité et des outils axés sur la confidentialité.",
        intro: `À une époque de violations de données et de surveillance cloud, **la sécurité des documents est primordiale**. Que vous soyez avocat protégeant le secret professionnel, professionnel de santé gérant des dossiers patients, ou simplement quelqu'un qui valorise la vie privée, ces guides sont essentiels.

Nous nous spécialisons dans la **sécurité locale d'abord**—une approche où vos documents ne quittent jamais votre appareil. Contrairement aux outils PDF cloud qui téléchargent vos fichiers vers des serveurs distants, nos outils traitent tout dans votre navigateur.

### Pourquoi la sécurité PDF est importante

*   **Prévention des violations** : Les documents téléchargés vers le cloud deviennent des cibles potentielles.
*   **Conformité réglementaire** : LPRPDE, RGPD et réglementations exigent une manipulation sécurisée.
*   **Confiance des clients** : Les professionnels doivent démontrer leur diligence en matière de sécurité.`,
        localFirstSection: {
            title: "Sécurité Local-First Expliquée",
            content: `**Qu'est-ce que le traitement Local-First ?**
Local-first signifie que vos fichiers PDF sont traités entièrement dans votre navigateur. Ils ne quittent jamais votre appareil.

**Comment ça fonctionne :**
1.  Vous chargez un PDF dans le navigateur
2.  La technologie WebAssembly traite le fichier localement
3.  Toutes les opérations se font sur votre CPU
4.  Quand vous fermez l'onglet, toutes les données sont effacées`
        },
        encryptionSection: {
            title: "Comprendre le Chiffrement PDF",
            content: `Les PDF supportent deux niveaux de protection par mot de passe :

**Mot de passe utilisateur :**
*   Requis pour ouvrir et voir le document
*   Recommandé pour les documents vraiment confidentiels

**Mot de passe propriétaire :**
*   Contrôle les actions autorisées (imprimer, copier, modifier)
*   Peut être contourné par certains outils

**Algorithmes de chiffrement :**
| Algorithme | Niveau de sécurité |
|-----------|-------------------|
| RC4 40-bit | ❌ Faible |
| AES-256 | ✅✅ Fort |`
        },
        complianceSection: {
            title: "Conformité Réglementaire",
            content: `**LPRPDE (Canada)**
*   Exige des « mesures de sécurité appropriées » pour les données personnelles
*   Le traitement local élimine les risques d'exposition côté serveur

**RGPD (Union Européenne)**
*   Exige la minimisation des données
*   Le traitement local signifie qu'aucune donnée n'est transférée à des tiers`
        },
        threatsSection: {
            title: "Menaces de Sécurité PDF Courantes",
            content: `**Exposition des métadonnées**
Les PDF contiennent des métadonnées cachées incluant le nom de l'auteur et l'historique des modifications.

**Scripts intégrés**
Les PDF peuvent contenir du JavaScript et d'autres contenus exécutables.

**Couches invisibles**
Certains PDF contiennent des couches cachées ou des suppressions qui ne sont pas vraiment supprimées.`
        },
        categories: [
            {
                id: 'core-security',
                title: "Guides de Sécurité Essentiels",
                desc: "Connaissances essentielles de protection.",
                filter: (slug: string) => ['ultimate-pdf-guide', 'private-pdf-tools'].includes(slug)
            },
            {
                id: 'industry',
                title: "Sécurité Spécifique à l'Industrie",
                desc: "Guides de conformité pour les secteurs réglementés.",
                filter: (slug: string) => ['legal-pdf-tools', 'healthcare-pdf-security', 'finance-pdf-security'].includes(slug)
            },
            {
                id: 'actions',
                title: "Actions de Sécurité",
                desc: "Mesures actives pour sécuriser vos fichiers.",
                filter: (slug: string) => ['flatten-pdf', 'analyze-pdf', 'edit-xfa-pdf'].includes(slug)
            }
        ],
        faq: {
            title: "Questions Fréquentes",
            content: `**Vos outils sont-ils vraiment 100% locaux ?**
Oui. Nous utilisons WebAssembly pour traiter les PDF entièrement dans votre navigateur.

**Le chiffrement PDF par mot de passe est-il sécurisé ?**
Le chiffrement AES-256 avec un mot de passe fort est très sécurisé.

**Les PDF peuvent-ils contenir des virus ?**
Oui, les PDF malveillants peuvent exploiter des vulnérabilités. Gardez votre logiciel PDF à jour.`
        }
    },
    pt: {
        seo: {
            title: `Hub de Segurança PDF | Proteger e Segurar PDF ${CURRENT_YEAR} | pdfcanada.ca`,
            desc: `O guia definitivo para segurança de PDF. Aprenda sobre proteção por senha, processamento local, criptografia e conformidade legal.`
        },
        h1: "Hub de Segurança PDF",
        subtitle: "Proteja seus dados sensíveis com guias de segurança e ferramentas focadas em privacidade.",
        intro: `Em uma era de violações de dados e vigilância na nuvem, **a segurança de documentos é fundamental**. Seja você um advogado protegendo sigilo profissional, profissional de saúde gerenciando registros de pacientes, ou simplesmente alguém que valoriza privacidade, esses guias são essenciais.

Nos especializamos em **segurança local em primeiro lugar**—uma abordagem onde seus documentos nunca saem do seu dispositivo. Diferente de ferramentas PDF em nuvem que enviam seus arquivos para servidores remotos, nossas ferramentas processam tudo no seu navegador.

### Por que a Segurança PDF é Importante

*   **Prevenção de violações**: Documentos enviados para a nuvem tornam-se alvos potenciais.
*   **Conformidade regulatória**: LGPD, HIPAA, GDPR exigem manuseio seguro.
*   **Confiança do cliente**: Profissionais devem demonstrar diligência em segurança.`,
        localFirstSection: {
            title: "Segurança Local-First Explicada",
            content: `**O que é processamento Local-First?**
Local-first significa que seus arquivos PDF são processados inteiramente no navegador. Eles nunca saem do seu dispositivo.

**Como funciona:**
1.  Você carrega um PDF no navegador
2.  Tecnologia WebAssembly processa o arquivo localmente
3.  Todas as operações acontecem no seu CPU
4.  Quando você fecha a aba, todos os dados são limpos`
        },
        encryptionSection: {
            title: "Entendendo a Criptografia PDF",
            content: `PDFs suportam dois níveis de proteção por senha:

**Senha de usuário:**
*   Necessária para abrir e ver o documento
*   Recomendada para documentos verdadeiramente confidenciais

**Senha de proprietário:**
*   Controla ações permitidas (imprimir, copiar, editar)
*   Pode ser contornada por algumas ferramentas

**Algoritmos de criptografia:**
| Algoritmo | Nível de segurança |
|-----------|-------------------|
| RC4 40-bit | ❌ Fraco |
| AES-256 | ✅✅ Forte |`
        },
        complianceSection: {
            title: "Conformidade Regulatória",
            content: `**LGPD (Brasil)**
*   Exige medidas de segurança apropriadas para dados pessoais
*   Processamento local elimina riscos de exposição em servidores

**GDPR (União Europeia)**
*   Exige minimização de dados
*   Processamento local significa que nenhum dado é transferido para terceiros`
        },
        threatsSection: {
            title: "Ameaças Comuns de Segurança PDF",
            content: `**Exposição de metadados**
PDFs contêm metadados ocultos incluindo nome do autor e histórico de edições.

**Scripts incorporados**
PDFs podem conter JavaScript e outros conteúdos executáveis.

**Camadas invisíveis**
Alguns PDFs contêm camadas ocultas ou supressões que não são realmente removidas.`
        },
        categories: [
            {
                id: 'core-security',
                title: "Guias de Segurança Essenciais",
                desc: "Conhecimento essencial de proteção.",
                filter: (slug: string) => ['ultimate-pdf-guide', 'private-pdf-tools'].includes(slug)
            },
            {
                id: 'industry',
                title: "Segurança Específica da Indústria",
                desc: "Guias de conformidade para setores regulamentados.",
                filter: (slug: string) => ['legal-pdf-tools', 'healthcare-pdf-security', 'finance-pdf-security'].includes(slug)
            },
            {
                id: 'actions',
                title: "Ações de Segurança",
                desc: "Medidas ativas para proteger seus arquivos.",
                filter: (slug: string) => ['flatten-pdf', 'analyze-pdf', 'edit-xfa-pdf'].includes(slug)
            }
        ],
        faq: {
            title: "Perguntas Frequentes",
            content: `**Suas ferramentas são realmente 100% locais?**
Sim. Usamos WebAssembly para processar PDFs inteiramente no navegador.

**A criptografia PDF por senha é segura?**
Criptografia AES-256 com senha forte é muito segura.

**PDFs podem conter vírus?**
Sim, PDFs maliciosos podem explorar vulnerabilidades. Mantenha seu software PDF atualizado.`
        }
    }
});

export const PdfSecurityHub: React.FC<HubProps> = ({ lang }) => {
    const content = getHubContent(lang);
    const t = (content as any)[lang] || (content as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath={`/${lang}/guides/pdf-security`}
                lang={lang}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides' : (lang === 'pt' ? '/pt/guides' : '/guides') },
                    { name: lang === 'fr' ? 'Sécurité' : (lang === 'pt' ? 'Segurança' : 'Security'), path: lang === 'fr' ? '/fr/guides/pdf-security' : (lang === 'pt' ? '/pt/guides/pdf-security' : '/guides/pdf-security') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Shield size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : lang === 'pt' ? 'Início' : 'Home', href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : lang === 'pt' ? 'Guias' : 'Guides', href: lang === 'en' ? '/guides' : `/${lang}/guides` },
                    { name: t.h1, href: '#' }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    {/* Introduction */}
                    <div className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-12">
                        <MarkdownContent content={t.intro} />
                    </div>

                    {/* Local-First Security Section */}
                    <section className="mb-16 p-6 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl border border-green-100 dark:border-green-900">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-500/20 rounded-xl text-green-600 dark:text-green-400">
                                <Lock size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.localFirstSection.title}</h2>
                        </div>
                        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                            <MarkdownContent content={t.localFirstSection.content} />
                        </div>
                    </section>

                    {/* Encryption Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-canada-red/10 rounded-xl text-canada-red">
                                <FileKey size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.encryptionSection.title}</h2>
                        </div>
                        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                            <MarkdownContent content={t.encryptionSection.content} />
                        </div>
                    </section>

                    {/* Compliance Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
                                <CheckCircle size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.complianceSection.title}</h2>
                        </div>
                        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                            <MarkdownContent content={t.complianceSection.content} />
                        </div>
                    </section>

                    {/* Threats Section */}
                    <section className="mb-16 p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-2xl border border-amber-100 dark:border-amber-900">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-amber-500/20 rounded-xl text-amber-600 dark:text-amber-400">
                                <AlertTriangle size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.threatsSection.title}</h2>
                        </div>
                        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                            <MarkdownContent content={t.threatsSection.content} />
                        </div>
                    </section>

                    {/* Guide Categories */}
                    <div className="space-y-16 mb-16">
                        {t.categories.map((category: any) => {
                            const categoryGuides = ALL_GUIDES.filter(g => category.filter(g.slug));
                            if (categoryGuides.length === 0) return null;

                            return (
                                <section key={category.id}>
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="p-2 bg-canada-red/10 rounded-lg text-canada-red">
                                            <Shield size={24} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                                            <p className="text-gray-500 dark:text-gray-400">{category.desc}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {categoryGuides.map((guide) => (
                                            <Link
                                                key={guide.slug}
                                                href={`/${lang}/guides/${guide.slug}`}
                                                className="group block p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-canada-red hover:shadow-lg transition-all"
                                            >
                                                <div className="text-4xl mb-4">{guide.icon}</div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-canada-red transition-colors">
                                                    {lang === 'en' ? guide.titleEn : guide.titleFr}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {lang === 'en' ? guide.descEn : guide.descFr}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>

                    {/* FAQ Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400">
                                <EyeOff size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.faq.title}</h2>
                        </div>
                        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                            <MarkdownContent content={t.faq.content} />
                        </div>
                    </section>

                    <div className="mt-16">
                        <RelatedTools lang={lang} currentPath="/guides/pdf-security" category="security" />
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <AuthorBio lang={lang} />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};
