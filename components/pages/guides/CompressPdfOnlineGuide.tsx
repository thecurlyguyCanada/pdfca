'use client';

import Link from 'next/link';
import React from 'react';
import { FileText, Wifi, Shield, Zap } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';
import { MarkdownContent } from '../../MarkdownContent';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: string) => ({
    en: {
        seo: {
            title: `Compress PDF Online | Reduce File Size Free ${CURRENT_YEAR}`,
            desc: `Compress PDF online for free. Reduce PDF file size significantly without losing quality. Secure, browser-based compression that keeps your documents private.`
        },
        h1: "Compress PDF Online: Reduce File Size Free",
        subtitle: "The safest way to shrink PDF files directly in your browser without uploading them to a server.",
        intro: "Need to **compress PDF online** to email it or upload it to a portal? Many online tools force you to upload your sensitive documents to their servers. Our [Online PDF Compressor](/${lang}/compress-pdf) is different. It runs entirely in your web browser, using your computer's power to crunch the numbers. This means you get **smaller files** with **zero privacy risk**.",

        sections: [
            {
                id: "online-compression-benefits",
                title: "Why Compress PDF Online with Us?",
                content: `Most "free" online compressors have a hidden cost: your privacy. They require you to upload your file, process it on their cloud, and then download it.
- **Our Approach**: We use advanced WebAssembly to run the compression logic **on your device**.
- **No Uploads**: Your file never leaves your computer.
- **No Limits**: Compress as many files as you want, as often as you want.
- **Instant Results**: Since there's no upload/download time, it's often faster than cloud tools.`
            },
            {
                id: "how-to-compress",
                title: "How to Reduce PDF Size Online",
                content: `1. **Open the Tool**: Navigate to our [Compress PDF Tool](/${lang}/compress-pdf).
2. **Select File**: Drag and drop your large PDF file.
3. **Choose Level**: Select your desired compression level (Low, Medium, High).
4. **Compress**: Watch as the tool shrinks your file locally.
5. **Save**: Download your optimized PDF immediately.

*Note: For maximum compression, choose "High", but "Medium" usually offers the best balance between size and quality.*`
            },
            {
                id: "security-privacy",
                title: "Private & Secure Compression",
                content: `Security is our top priority. When you use our **online PDF compressor**:
- **Zero Data Transfer**: Your document contents are never sent over the internet.
- **No Copies**: We don't keep a copy of your file because we never receive it.
- **gdpr Compliant**: Perfect for legal contracts, medical records, and financial statements that require strict privacy.`
            },
            {
                id: "quality",
                title: "Does Compression Ruin Quality?",
                content: "Not if done correctly. Our tool intelligently removes redundant metadata and optimizes images. You likely won't notice a difference in visual quality on screen, but the file size will be significantly smaller. This makes it perfect for email attachments and web uploads."
            }
        ],

        faq: [
            {
                q: "Is this online PDF compressor free?",
                a: "Yes, 100% free. No hidden fees, no credit card required."
            },
            {
                q: "How much will my file size decrease?",
                a: "It depends on the file content. Text-heavy PDFs shrinkage is modest, but image-heavy PDFs can often be reduced by 50-80%."
            },
            {
                q: "Is it safe for sensitive documents?",
                a: "Absolutely. Since the file never leaves your browser, it's as safe as editing it offline on your desktop."
            },
            {
                q: "Do I need to install software?",
                a: "No. Everything happens inside your web browser (Chrome, Safari, Edge, Firefox)."
            }
        ],

        ctaTitle: "Shrink Your PDF Now",
        ctaButton: "Compress PDF",
        ctaSubtext: "Fast • Secure • Free",
    },
    fr: {
        seo: {
            title: `Compresser PDF en Ligne | Réduire Taille Fichier Gratuit ${CURRENT_YEAR}`,
            desc: `Compresser PDF en ligne gratuitement. Réduisez la taille du fichier PDF sans perte de qualité. Compression sécurisée par navigateur qui garde vos documents privés.`
        },
        h1: "Compresser PDF en Ligne : Réduire la Taille Gratuitement",
        subtitle: "Le moyen le plus sûr de réduire la taille des fichiers PDF directement dans votre navigateur sans les télécharger sur un serveur.",
        intro: "Besoin de **compresser un PDF en ligne** pour l'envoyer par email ou le télécharger sur un portail ? De nombreux outils en ligne vous obligent à télécharger vos documents sensibles sur leurs serveurs. Notre [Compresseur PDF en Ligne](/${lang}/compress-pdf) est différent. Il fonctionne entièrement dans votre navigateur web, utilisant la puissance de votre ordinateur. Cela signifie que vous obtenez des **fichiers plus petits** avec **zéro risque pour la vie privée**.",

        sections: [
            {
                id: "online-compression-benefits",
                title: "Pourquoi Compresser PDF en Ligne avec Nous ?",
                content: `La plupart des compresseurs en ligne "gratuits" ont un coût caché : votre vie privée. Ils nécessitent de télécharger votre fichier, de le traiter sur leur cloud, puis de le télécharger.
- **Notre Approche** : Nous utilisons WebAssembly pour exécuter la logique de compression **sur votre appareil**.
- **Aucun Téléchargement** : Votre fichier ne quitte jamais votre ordinateur.
- **Aucune Limite** : Compressez autant de fichiers que vous le souhaitez.
- **Résultats Instantanés** : Pas de temps de transfert, c'est souvent plus rapide que le cloud.`
            },
            {
                id: "how-to-compress",
                title: "Comment Réduire la Taille d'un PDF en Ligne",
                content: `1. **Ouvrez l'Outil** : Allez sur notre [Outil Compresser PDF](/${lang}/compress-pdf).
2. **Sélectionnez le Fichier** : Glissez et déposez votre gros fichier PDF.
3. **Choisissez le Niveau** : Sélectionnez le niveau de compression (Faible, Moyen, Élevé).
4. **Compressez** : Regardez l'outil réduire votre fichier localement.
5. **Sauvegardez** : Téléchargez immédiatement votre PDF optimisé.

*Note : Pour une compression maximale, choisissez "Élevé", mais "Moyen" offre généralement le meilleur équilibre.*`
            },
            {
                id: "security-privacy",
                title: "Compression Privée & Sécurisée",
                content: `La sécurité est notre priorité. Lorsque vous utilisez notre **compresseur PDF en ligne** :
- **Zéro Transfert de Données** : Le contenu de votre document n'est jamais envoyé sur internet.
- **Pas de Copies** : Nous ne gardons pas de copie car nous ne le recevons jamais.
- **Conforme** : Parfait pour les contrats juridiques, dossiers médicaux et relevés financiers nécessitant une confidentialité stricte.`
            },
            {
                id: "quality",
                title: "La Compression Ruine-t-elle la Qualité ?",
                content: "Pas si c'est bien fait. Notre outil optimise intelligemment les images et supprime les métadonnées redondantes. Vous ne verrez probablement pas de différence de qualité visuelle à l'écran, mais la taille du fichier sera considérablement réduite."
            }
        ],

        faq: [
            {
                q: "Ce compresseur PDF en ligne est-il gratuit ?",
                a: "Oui, 100% gratuit. Pas de frais cachés, pas de carte de crédit requise."
            },
            {
                q: "De combien la taille de mon fichier va-t-elle diminuer ?",
                a: "Cela dépend du contenu. Les PDF riches en texte réduisent peu, mais les PDF riches en images peuvent souvent être réduits de 50-80%."
            },
            {
                q: "Est-ce sûr pour les documents sensibles ?",
                a: "Absolument. Puisque le fichier ne quitte jamais votre navigateur, c'est aussi sûr que de le modifier hors ligne."
            },
            {
                q: "Dois-je installer un logiciel ?",
                a: "Non. Tout se passe à l'intérieur de votre navigateur web (Chrome, Safari, Edge, Firefox)."
            }
        ],

        ctaTitle: "Réduisez Votre PDF Maintenant",
        ctaButton: "Compresser PDF",
        ctaSubtext: "Rapide • Sécurisé • Gratuit",
    },
    pt: {
        seo: {
            title: `Comprimir PDF Online | Reduzir Tamanho do Arquivo Grátis ${CURRENT_YEAR}`,
            desc: `Comprimir PDF online gratuitamente. Reduza o tamanho do arquivo PDF significativamente sem perder qualidade. Compressão segura baseada em navegador que mantém seus documentos privados.`
        },
        h1: "Comprimir PDF Online: Reduzir Tamanho Gratuitamente",
        subtitle: "A maneira mais segura de reduzir arquivos PDF diretamente no seu navegador sem enviá-los para um servidor.",
        intro: "Precisa **comprimir PDF online** para enviar por e-mail ou fazer upload em um portal? Muitas ferramentas online forçam você a fazer upload de seus documentos sensíveis em seus servidores. Nosso [Compressor de PDF Online](/${lang}/compress-pdf) é diferente. Ele roda inteiramente no seu navegador web, usando o poder do seu computador para processar os dados. Isso significa que você obtém **arquivos menores** com **risco zero de privacidade**.",

        sections: [
            {
                id: "online-compression-benefits",
                title: "Por que Comprimir PDF Online Conosco?",
                content: `A maioria dos compressores online "gratuitos" tem um custo oculto: sua privacidade. Eles exigem que você faça upload do seu arquivo, processe-o na nuvem deles e depois faça o download.
- **Nossa Abordagem**: Usamos WebAssembly avançado para executar a lógica de compressão **no seu dispositivo**.
- **Sem Uploads**: Seu arquivo nunca sai do seu computador.
- **Sem Limites**: Comprima quantos arquivos quiser, quantas vezes quiser.
- **Resultados Instantâneos**: Como não há tempo de upload/download, geralmente é mais rápido que ferramentas na nuvem.`
            },
            {
                id: "how-to-compress",
                title: "Como Reduzir o Tamanho do PDF Online",
                content: `1. **Abra a Ferramenta**: Navegue até nossa [Ferramenta de Comprimir PDF](/${lang}/compress-pdf).
2. **Selecione o Arquivo**: Arraste e solte seu arquivo PDF grande.
3. **Escolha o Nível**: Selecione o nível de compressão desejado (Baixo, Médio, Alto).
4. **Comprima**: Veja a ferramenta reduzir seu arquivo localmente.
5. **Salvar**: Baixe seu PDF otimizado imediatamente.

*Nota: Para compressão máxima, escolha "Alto", mas "Médio" geralmente oferece o melhor equilíbrio entre tamanho e qualidade.*`
            },
            {
                id: "security-privacy",
                title: "Compressão Privada e Segura",
                content: `Segurança é nossa prioridade máxima. Quando você usa nosso **compressor de PDF online**:
- **Zero Transferência de Dados**: O conteúdo do seu documento nunca é enviado pela internet.
- **Sem Cópias**: Não mantemos cópia do seu arquivo porque nunca o recebemos.
- **Conformidade**: Perfeito para contratos legais, registros médicos e demonstrações financeiras que exigem privacidade estrita.`
            },
            {
                id: "quality",
                title: "A Compressão Arruína a Qualidade?",
                content: "Não se for feita corretamente. Nossa ferramenta otimiza inteligentemente imagens e remove metadados redundantes. Você provavelmente não notará diferença na qualidade visual na tela, mas o tamanho do arquivo será significativamente menor. Isso o torna perfeito para anexos de e-mail e uploads na web."
            }
        ],

        faq: [
            {
                q: "Este compressor de PDF online é gratuito?",
                a: "Sim, 100% gratuito. Sem taxas ocultas, sem necessidade de cartão de crédito."
            },
            {
                q: "Quanto o tamanho do meu arquivo vai diminuir?",
                a: "Depende do conteúdo. PDFs com muito texto reduzem pouco, mas PDFs com muitas imagens podem reduzir 50-80%."
            },
            {
                q: "É seguro para documentos sensíveis?",
                a: "Absolutamente. Como o arquivo nunca sai do seu navegador, é tão seguro quanto editá-lo offline."
            },
            {
                q: "Preciso instalar software?",
                a: "Não. Tudo acontece dentro do seu navegador web (Chrome, Safari, Edge, Firefox)."
            }
        ],

        ctaTitle: "Reduza Seu PDF Agora",
        ctaButton: "Comprimir PDF",
        ctaSubtext: "Rápido • Seguro • Grátis",
    }
});

export const CompressPdfOnlineGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = (guideContent as any)[lang] || (guideContent as any).en;

    return (
        <div className="bg-white dark:bg-gray-950">
            <SEO
                title={t.seo.title}
                description={t.seo.desc}
                canonicalPath="/guides/compress-pdf-online"
                faqs={t.faq}
                lang={lang}
                datePublished="2026-01-05"
                dateModified="2026-01-05"
                quickAnswer={{
                    question: lang === 'fr' ? "Comment compresser un PDF en ligne gratuitement sans perte de qualité ?" : "How to compress PDF online for free without losing quality?",
                    answer: lang === 'fr'
                        ? "Utilisez l'outil sécurisé de pdfcanada.ca. Il réduit la taille du fichier directement dans votre navigateur, préservant la qualité et la confidentialité."
                        : "Use pdfcanada.ca's secure tool. It reduces file size directly in your browser, preserving quality and privacy.",
                    tool: "Online PDF Compressor",
                    steps: lang === 'fr'
                        ? ["Ouvrez l'outil", "Choisissez le niveau", "Téléchargez"]
                        : ["Open tool", "Choose level", "Download"]
                }}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), path: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), path: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'Compresser PDF' : (lang === 'pt' ? 'Comprimir PDF' : 'Compress PDF'), path: lang === 'fr' ? '/fr/guides/compress-pdf' : (lang === 'pt' ? '/pt/guides/compress-pdf' : '/guides/compress-pdf') },
                    { name: lang === 'fr' ? 'En Ligne' : (lang === 'pt' ? 'Online' : 'Online'), path: lang === 'fr' ? '/fr/guides/compress-pdf-online' : (lang === 'pt' ? '/pt/guides/compress-pdf-online' : '/guides/compress-pdf-online') }
                ]}
            />
            <PageLayout
                title={t.h1}
                subtitle={t.subtitle}
                icon={<Wifi size={32} />}
                breadcrumbs={[
                    { name: lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home'), href: lang === 'en' ? '/' : `/${lang}` },
                    { name: lang === 'fr' ? 'Guides' : (lang === 'pt' ? 'Guias' : 'Guides'), href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : (lang === 'pt' ? '/pt/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide') },
                    { name: lang === 'fr' ? 'Compresser PDF' : (lang === 'pt' ? 'Comprimir PDF' : 'Compress PDF'), href: lang === 'fr' ? '/fr/guides/compress-pdf' : (lang === 'pt' ? '/pt/guides/compress-pdf' : '/guides/compress-pdf') },
                    { name: lang === 'fr' ? 'En Ligne' : (lang === 'pt' ? 'Online' : 'Online'), href: lang === 'fr' ? '/fr/guides/compress-pdf-online' : (lang === 'pt' ? '/pt/guides/compress-pdf-online' : '/guides/compress-pdf-online') }
                ]}
            >
                <div className="w-full py-4 sm:py-6 md:py-8">
                    <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 md:mb-16">
                        <MarkdownContent content={t.intro} />
                    </div>

                    <div className="space-y-8 sm:space-y-12 md:space-y-16">
                        {t.sections.map((section: any) => (
                            <section key={section.id} className="scroll-mt-20 sm:scroll-mt-24">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">{section.title}</h3>
                                <div className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                                    <MarkdownContent content={section.content} />
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="my-10 sm:my-16 md:my-20">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 md:mb-10 text-gray-900 dark:text-white">
                            {lang === 'fr' ? "Questions Fréquentes" : "Common Questions"}
                        </h3>
                        <div className="grid gap-3 sm:gap-4 md:gap-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <Shield size={18} className="text-canada-red sm:w-5 sm:h-5" /> {item.q}
                                    </h4>
                                    <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 sm:mt-16 md:mt-20 bg-canada-red rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white shadow-2xl shadow-red-500/20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">{t.ctaTitle}</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 opacity-90">{t.ctaSubtext}</p>
                        <Link href={`/${lang}/compress-pdf`}
                            className="inline-block bg-white text-canada-red px-6 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full font-black text-sm sm:text-lg md:text-xl hover:scale-105 transition-all shadow-lg active:scale-95 whitespace-normal max-w-full"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>

                    <AISnapshot
                        question={lang === 'fr' ? "Comment réduire la taille d'un PDF sans l'uploader ?" : "How to reduce PDF size without uploading?"}
                        answer={lang === 'fr'
                            ? "Utilisez le compresseur local de pdfcanada.ca. Il optimise le fichier dans le navigateur, garantissant qu'aucune donnée ne quitte votre appareil."
                            : "Use pdfcanada.ca's local compressor. It optimizes the file in-browser, ensuring no data leaves your device."}
                        toolName="Online PDF Compressor"
                        steps={lang === 'fr'
                            ? ["Allez sur pdfcanada.ca/compress", "Glissez le PDF", "Téléchargez optimisé"]
                            : ["Go to pdfcanada.ca/compress", "Drag PDF", "Download optimized"]}
                        lang={lang}
                    />

                    <RelatedTools lang={lang} currentPath="/guides/compress-pdf-online" category="edit" />

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            {lang === 'fr' ? 'Voir Aussi' : (lang === 'pt' ? 'Veja Também' : 'Also See')}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href={`/${lang}/guides/reduce-pdf-size`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Réduire PDF' : (lang === 'pt' ? 'Guia Reduzir PDF' : 'Reduce PDF Size Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/merge-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Fusionner PDF' : (lang === 'pt' ? 'Guia Mesclar PDF' : 'Merge PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/split-pdf`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide Diviser PDF' : (lang === 'pt' ? 'Guia Dividir PDF' : 'Split PDF Guide')}
                            </Link>
                            <Link href={`/${lang}/guides/pdf-to-image`} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 dark:text-gray-300">
                                <Zap size={16} className="text-canada-red" />
                                {lang === 'fr' ? 'Guide PDF vers Image' : (lang === 'pt' ? 'Guia PDF para Imagem' : 'PDF to Image Guide')}
                            </Link>
                        </div>
                    </div>

                    <AuthorBio lang={lang} />
                </div>
            </PageLayout>
        </div>
    );
};
