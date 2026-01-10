'use client';

import Link from 'next/link';
import React from 'react';
import { Scissors, CheckCircle, Shield, Zap, Maximize, Crop, ArrowRight } from 'lucide-react';
import { Language, CURRENT_YEAR } from '../../../utils/i18n';
import { SEO } from '../../SEO';
import { PageLayout } from '../../PageLayout';
import { AuthorBio } from '../../AuthorBio';
import { RelatedTools } from '../../RelatedTools';
import { AISnapshot } from '../../AISnapshot';

interface GuideProps {
    lang: Language;
}

const getGuideContent = (lang: Language) => ({
    en: {
        seo: {
            title: `Trim PDF Margins | Remove White Space Online for Free ${CURRENT_YEAR}`,
            desc: `How to trim white margins from PDF documents. Crop PDFs to standard sizes or custom dimensions. Free, secure, and local trimming tool.`
        },
        h1: "How to Trim PDF Margins",
        subtitle: "Remove excess white space and clean up your documents instantly.",
        intro: (
            <>
                Do you have a PDF with <strong>excessive white margins</strong> that make it hard to read on mobile devices or tablets? Or perhaps you need to "trim" scan artifacts from the edges of a digitized document.
                <br /><br />
                Trimming a PDF (also known as cropping) allows you to re-frame your document's content. With our free <strong>Trim PDF Tool</strong>, you can strictly define the visible area of your pages, effectively removing headers, footers, or blank space—all without uploading your sensitive files to a server.
            </>
        ),
        sections: [
            {
                id: "what-is-trimming",
                title: "What does it mean to Trim a PDF?",
                content: (
                    <div className="space-y-4">
                        <p>Trimming a PDF is the process of adjusting the visible "CropBox" of the document pages. Unlike deleting content, trimming acts like a window frame—you decide what part of the page shows through, and hide the rest.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Common Use Cases:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Printing Optimization:</strong> Preparing a document for a specific paper size (e.g., A4 to Letter) by trimming off non-printable edges.</li>
                            <li><strong>E-Reader Experience:</strong> Removing massive white borders so text appears larger and more readable on Kindle, Kobo, or tablet screens.</li>
                            <li><strong>Clean-up Digitized Files:</strong> Removing punch-hole marks, stapler shadows, or black scanning edges from digitized documents.</li>
                            <li><strong>Focus:</strong> Isolating a specific graph, table, or image for a presentation.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "how-to-trim",
                title: "Step-by-Step: How to Trim a PDF Online",
                content: (
                    <div className="space-y-4">
                        <p>Our tool runs entirely in your browser, ensuring your private documents stay private. Here is how to use it:</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Open the Trimming Tool:</strong> Go to our <Link href={`/${lang}/crop-pdf`} className="text-canada-red hover:underline font-bold">Crop & Trim PDF Tool</Link>.
                            </li>
                            <li>
                                <strong>Select File:</strong> Click "Select PDF" or drag and drop your file.
                            </li>
                            <li>
                                <strong>Define the Crop Area:</strong>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                                    <li>Use the visual handlers on the preview to drag the borders inward.</li>
                                    <li>The area <em>inside</em> the box is what will be kept.</li>
                                    <li>Everything <em>outside</em> the darkened area will be trimmed away.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Apply to All Pages (Optional):</strong> If your document has consistent margins (like a book), check the "Apply to All Pages" option to trim every page identically in one click.
                            </li>
                            <li>
                                <strong>Download:</strong> Click "Crop PDF" to process the file and download your new, trimmed document.
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "pro-tips",
                title: "Pro Tips for Perfect Trimming",
                content: (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-100 dark:border-yellow-800">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Zap className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <strong>Measure Twice, Cut Once:</strong> Check a few different pages (e.g., page 1, 10, and 50) to ensure your crop box doesn't accidentally cut off page numbers or headers that might shift positions.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Maximize className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <strong>Leave Breathing Room:</strong> Don't trim <em>too</em> tight to the text. Leaving a small 5mm margin ensures the text doesn't look cramped and prevents accidental cut-offs during printing.
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            },
            {
                id: "trim-vs-delete",
                title: "Trimming vs. Deleting Pages",
                content: (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                        <p className="mb-4">It's easy to confuse terminology. Which tool do you need?</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Crop className="text-blue-600 mt-1" size={20} />
                                <div>
                                    <strong>Trim/Crop:</strong> Changes the <em>dimensions</em> of the page (e.g., removing margins).
                                    <br />
                                    <Link href={`/${lang}/crop-pdf`} className="text-blue-600 hover:underline">Use Crop Tool &rarr;</Link>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Scissors className="text-red-600 mt-1" size={20} />
                                <div>
                                    <strong>Delete/Cut:</strong> Removes <em>entire pages</em> from the file (e.g., removing page 2).
                                    <br />
                                    <Link href={`/${lang}/delete-pdf-pages`} className="text-red-600 hover:underline">Use Delete Pages Tool &rarr;</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Does trimming a PDF reduce file size?",
                a: "Not necessarily. Trimming usually just hides the content outside the trim box (CropBox) rather than physically deleting the data. The file size often remains similar. To significantly reduce file size, use our Compress PDF tool after trimming."
            },
            {
                q: "Can I trim pages individually?",
                a: "Yes! By default, you can adjust the crop box for the current page. If you want to apply the same crop to the whole document (e.g., for a book scan), use the 'Apply to All' feature."
            },
            {
                q: "Is trimming permanent?",
                a: "For most viewers and printers, yes—the content is hidden. However, sophisticated PDF editing software can sometimes recover the hidden content since it's just masked, not erased. If you need to permanently redact sensitive info, use a redaction tool."
            },
            {
                q: "Why is my trimmed PDF blurry?",
                a: "Trimming itself doesn't change resolution. If your PDF looks blurry, it might be a low-resolution scan to begin with. Trimming just zooms in on the content, which might make existing blurriness more obvious."
            }
        ],
        cta: "Start Trimming Now",
        ctaBtn: "Trim PDF Margins"
    },
    fr: {
        seo: {
            title: `Rogner les Marges PDF | Outil de Rognage Gratuit ${CURRENT_YEAR}`,
            desc: `Comment rogner les marges blanches des documents PDF. Ajustez la taille de vos PDF gratuitement et en toute sécurité en local.`
        },
        h1: "Comment Rogner (Trim) un PDF",
        subtitle: "Supprimez les espaces blancs excessifs et nettoyez vos documents instantanément.",
        intro: (
            <>
                Avez-vous un PDF avec des <strong>marges blanches excessives</strong> qui rendent la lecture difficile sur mobile ou tablette ? Ou peut-être avez-vous besoin de "rogner" (trim) les artefacts de numérisation sur les bords.
                <br /><br />
                Rogner un PDF vous permet de recadrer le contenu de votre document. Avec notre <strong>Outil de Rognage Gratuit</strong>, vous pouvez définir strictement la zone visible de vos pages, supprimant efficacement les en-têtes, pieds de page ou espaces vides—le tout sans téléverser vos fichiers sensibles.
            </>
        ),
        sections: [
            {
                id: "what-is-trimming",
                title: "Que signifie Rogner (Trim) un PDF ?",
                content: (
                    <div className="space-y-4">
                        <p>Le rognage d'un PDF consiste à ajuster la "CropBox" visible du document. Contrairement à la suppression, le rognage agit comme un cadre de fenêtre : vous décidez ce qui est visible et cachez le reste.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Cas d'utilisation courants :</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Optimisation pour l'impression :</strong> Préparer un document pour une taille de papier spécifique (ex: A4 vers Lettre US).</li>
                            <li><strong>Lecture sur Liseuse :</strong> Supprimer les bordures blanches massives pour agrandir le texte sur Kindle ou Kobo.</li>
                            <li><strong>Nettoyage de scans :</strong> Retirer les marques de perforation, les agrafes ou les bords noirs de numérisation.</li>
                            <li><strong>Mise au point :</strong> Isoler un graphique ou un tableau spécifique pour une présentation.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "how-to-trim",
                title: "Guide : Comment Rogner un PDF en Ligne",
                content: (
                    <div className="space-y-4">
                        <p>Notre outil fonctionne entièrement dans votre navigateur, garantissant la confidentialité de vos documents. Voici comment l'utiliser :</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Ouvrez l'outil :</strong> Allez sur notre <Link href={`/${lang}/crop-pdf`} className="text-canada-red hover:underline font-bold">Outil de Recadrage PDF</Link>.
                            </li>
                            <li>
                                <strong>Sélectionnez le fichier :</strong> Cliquez sur "Sélectionner un fichier" ou glissez-déposez votre PDF.
                            </li>
                            <li>
                                <strong>Définissez la zone de coupe :</strong>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                                    <li>Utilisez les poignées sur l'aperçu pour réduire les bordures.</li>
                                    <li>La zone <em>intérieure</em> claire sera conservée.</li>
                                    <li>Tout ce qui est dans la zone sombre sera rogné.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Appliquer à tout (Optionnel) :</strong> Si vos marges sont constantes, cochez "Appliquer à toutes les pages" pour un rognage uniforme.
                            </li>
                            <li>
                                <strong>Téléchargez :</strong> Cliquez sur "Recadrer PDF" pour traiter et sauvegarder votre document.
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "pro-tips",
                title: "Conseils de Pro pour un Rognage Parfait",
                content: (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-100 dark:border-yellow-800">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Zap className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <strong>Mesurez deux fois :</strong> Vérifiez quelques pages différentes (ex: page 1, 10 et 50) pour vous assurer de ne pas couper les numéros de page ou les titres qui pourraient changer de position.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Maximize className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <strong>Gardez une marge :</strong> Ne rognez pas <em>trop</em> près du texte. Laissez une petite marge de 5mm pour éviter que le texte ne paraisse étriqué et prévenir les coupures accidentelles à l'impression.
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            },
            {
                id: "trim-vs-delete",
                title: "Rogner vs Supprimer des Pages",
                content: (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                        <p className="mb-4">Il est facile de confondre les termes. De quel outil avez-vous besoin ?</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Crop className="text-blue-600 mt-1" size={20} />
                                <div>
                                    <strong>Rogner/Trim :</strong> Change les <em>dimensions</em> de la page (ex: enlever les marges).
                                    <br />
                                    <Link href={`/${lang}/crop-pdf`} className="text-blue-600 hover:underline">Utiliser l'Outil Recadrer &rarr;</Link>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Scissors className="text-red-600 mt-1" size={20} />
                                <div>
                                    <strong>Supprimer/Couper :</strong> Enlève des <em>pages entières</em> du fichier.
                                    <br />
                                    <Link href={`/${lang}/delete-pdf-pages`} className="text-red-600 hover:underline">Utiliser l'Outil Supprimer Pages &rarr;</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Le rognage réduit-il la taille du fichier ?",
                a: "Pas nécessairement. Le rognage masque souvent simplement le contenu hors zone sans supprimer physiquement les données. Utilisez notre outil Compresser PDF après le rognage pour réduire la taille."
            },
            {
                q: "Puis-je rogner des pages différemment ?",
                a: "Oui ! Par défaut, vous ajustez la page en cours. Utilisez 'Appliquer à tous' si vous voulez uniformiser le document."
            },
            {
                q: "Le rognage est-il permanent ?",
                a: "Pour la plupart des lecteurs, oui. Le contenu est masqué. Cependant, il n'est pas effacé de manière sécurisée (redaction). Pour cacher des infos sensibles, utilisez un outil de rédaction."
            },
            {
                q: "Pourquoi mon PDF est-il flou ?",
                a: "Le rognage ne change pas la résolution. Si vous zoomez sur un scan de basse qualité en le rognant, le flou existant sera simplement plus visible."
            }
        ],
        cta: "Commencer à Rogner",
        ctaBtn: "Rogner les Marges PDF"
    },
    pt: {
        seo: {
            title: `Cortar Margens PDF | Remover Espaço em Branco Grátis ${CURRENT_YEAR}`,
            desc: `Como cortar margens brancas de documentos PDF. Ajuste o tamanho dos seus PDFs gratuitamente e com segurança localmente.`
        },
        h1: "Como Cortar (Trim) Margens de PDF",
        subtitle: "Remova excesso de espaço em branco e limpe seus documentos instantaneamente.",
        intro: (
            <>
                Você tem um PDF com <strong>margens brancas excessivas</strong> que dificultam a leitura em dispositivos móveis ou tablets? Ou talvez você precise "aparar" (trim) artefatos de digitalização das bordas.
                <br /><br />
                Aparar um PDF (também conhecido como crop) permite reenquadrar o conteúdo do seu documento. Com nossa <strong>Ferramenta de Corte Grátis</strong>, você pode definir estritamente a área visível de suas páginas, removendo efetivamente cabeçalhos, rodapés ou espaços vazios—tudo sem enviar seus arquivos sensíveis para um servidor.
            </>
        ),
        sections: [
            {
                id: "what-is-trimming",
                title: "O que significa Cortar (Trim) um PDF?",
                content: (
                    <div className="space-y-4">
                        <p>Cortar um PDF é o processo de ajustar a "CropBox" visível das páginas do documento. Ao contrário de deletar conteúdo, cortar age como uma moldura de janela—você decide qual parte da página aparece e esconde o resto.</p>
                        <h4 className="font-bold text-lg mt-4 mb-2">Casos de Uso Comuns:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Otimização de Impressão:</strong> Preparar um documento para um tamanho de papel específico (ex: A4 para Carta) cortando bordas não imprimíveis.</li>
                            <li><strong>Leitura em E-Reader:</strong> Remover bordas brancas massivas para que o texto pareça maior e mais legível em telas de Kindle, Kobo ou tablet.</li>
                            <li><strong>Limpeza de Digitalizações:</strong> Remover marcas de furos, sombras de grampeador ou bordas pretas de digitalização de documentos digitalizados.</li>
                            <li><strong>Foco:</strong> Isolar um gráfico, tabela ou imagem específica para uma apresentação.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "how-to-trim",
                title: "Passo a Passo: Como Cortar um PDF Online",
                content: (
                    <div className="space-y-4">
                        <p>Nossa ferramenta roda inteiramente no seu navegador, garantindo que seus documentos privados permaneçam privados. Veja como usar:</p>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Abra a Ferramenta de Corte:</strong> Vá para nossa <Link href={`/${lang}/crop-pdf`} className="text-canada-red hover:underline font-bold">Ferramenta de Corte PDF</Link>.
                            </li>
                            <li>
                                <strong>Selecione o Arquivo:</strong> Clique em "Selecionar PDF" ou arraste e solte seu arquivo.
                            </li>
                            <li>
                                <strong>Defina a Área de Corte:</strong>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                                    <li>Use as alças visuais na pré-visualização para arrastar as bordas para dentro.</li>
                                    <li>A área <em>dentro</em> da caixa clara é o que será mantido.</li>
                                    <li>Tudo <em>fora</em> da área escurecida será cortado.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Aplicar a Todas as Páginas (Opcional):</strong> Se seu documento tem margens consistentes (como um livro), marque a opção "Aplicar a Todas as Páginas" para cortar cada página de forma idêntica em um clique.
                            </li>
                            <li>
                                <strong>Baixar:</strong> Clique em "Cortar PDF" para processar o arquivo e baixar seu novo documento cortado.
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: "pro-tips",
                title: "Dicas Profissionais para um Corte Perfeito",
                content: (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-100 dark:border-yellow-800">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Zap className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <strong>Meça Duas Vezes:</strong> Verifique algumas páginas diferentes (ex: página 1, 10 e 50) para garantir que sua caixa de corte não corte acidentalmente números de página ou cabeçalhos que possam mudar de posição.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Maximize className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <strong>Deixe Espaço:</strong> Não corte <em>muito</em> perto do texto. Deixar uma pequena margem de 5mm garante que o texto não pareça apertado e evita cortes acidentais durante a impressão.
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            },
            {
                id: "trim-vs-delete",
                title: "Cortar vs Deletar Páginas",
                content: (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                        <p className="mb-4">É fácil confundir a terminologia. De qual ferramenta você precisa?</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Crop className="text-blue-600 mt-1" size={20} />
                                <div>
                                    <strong>Cortar/Trim:</strong> Altera as <em>dimensões</em> da página (ex: remover margens).
                                    <br />
                                    <Link href={`/${lang}/crop-pdf`} className="text-blue-600 hover:underline">Usar Ferramenta Cortar &rarr;</Link>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Scissors className="text-red-600 mt-1" size={20} />
                                <div>
                                    <strong>Deletar/Cut:</strong> Remove <em>páginas inteiras</em> do arquivo.
                                    <br />
                                    <Link href={`/${lang}/delete-pdf-pages`} className="text-red-600 hover:underline">Usar Ferramenta Deletar Páginas &rarr;</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            }
        ],
        faq: [
            {
                q: "Cortar um PDF reduz o tamanho do arquivo?",
                a: "Nem sempre. Cortar geralmente apenas esconde o conteúdo fora da caixa de corte (CropBox) em vez de deletar fisicamente os dados. O tamanho do arquivo muitas vezes permanece similar. Para reduzir significativamente o tamanho, use nossa ferramenta Comprimir PDF após cortar."
            },
            {
                q: "Posso cortar páginas individualmente?",
                a: "Sim! Por padrão, você ajusta a caixa de corte para a página atual. Se quiser aplicar o mesmo corte a todo o documento (ex: para um livro), use o recurso 'Aplicar a Todos'."
            },
            {
                q: "O corte é permanente?",
                a: "Para a maioria dos visualizadores e impressoras, sim—o conteúdo é escondido. No entanto, software de edição de PDF sofisticado às vezes pode recuperar o conteúdo escondido, já que é apenas mascarado, não apagado. Se precisar ocultar permanentemente informações sensíveis, use uma ferramenta de redação."
            },
            {
                q: "Por que meu PDF cortado está borrado?",
                a: "O corte em si não muda a resolução. Se seu PDF parece borrado, pode ter sido uma digitalização de baixa resolução para começar. Cortar apenas dá zoom no conteúdo, o que pode tornar o borrão existente mais óbvio."
            }
        ],
        cta: "Começar a Cortar",
        ctaBtn: "Cortar Margens PDF"
    }
});

export const TrimPdfGuide: React.FC<GuideProps> = ({ lang }) => {
    const guideContent = getGuideContent(lang);
    const t = guideContent[lang as keyof typeof guideContent] || guideContent.en;

    const schema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": t.h1,
        "description": t.seo.desc,
        "image": "https://www.pdfcanada.ca/og-image.png",
        "datePublished": "2024-01-05",
        "dateModified": new Date().toISOString().split('T')[0],
        "author": {
            "@type": "Organization",
            "name": "pdfcanada.ca"
        }
    };

    return (
        <PageLayout
            title={t.h1}
            subtitle={t.subtitle}
            icon={<Crop size={32} />}
            breadcrumbs={[
                { name: lang === 'fr' ? 'Accueil' : 'Home', href: lang === 'fr' ? '/fr' : '/' },
                { name: lang === 'fr' ? 'Guides' : 'Guides', href: lang === 'fr' ? '/fr/guides/ultimate-pdf-guide' : '/guides/ultimate-pdf-guide' },
                { name: lang === 'fr' ? 'Rogner PDF' : 'Trim PDF', href: '#' }
            ]}
        >
            <SEO title={t.seo.title} description={t.seo.desc} canonicalPath="/guides/trim-pdf" lang={lang} schema={schema} />

            <div className="w-full py-12">
                <div className="prose prose-xl dark:prose-invert max-w-none mb-16 text-gray-600 dark:text-gray-300">
                    <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl mb-12 border border-slate-200 dark:border-slate-800">
                        {t.intro}
                    </div>

                    {t.sections.map((section: any) => (
                        <div key={section.id} className="mb-16">
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                                {section.title}
                            </h2>
                            <div className="text-lg leading-relaxed">{section.content}</div>
                        </div>
                    ))}

                    <AISnapshot
                        question={lang === 'fr' ? "Comment rogner les marges d'un PDF ?" : "How to trim PDF margins?"}
                        answer={lang === 'fr'
                            ? "Utilisez l'outil 'Recadrer PDF' de pdfcanada.ca. Sélectionnez la zone à conserver et appliquez le changement. Le contenu hors zone sera masqué."
                            : "Use the 'Crop PDF' tool on pdfcanada.ca. Select the area you want to keep and apply the change. Content outside the box will be hidden."}
                        toolName="Crop PDF"
                        steps={lang === 'fr' ? ["Ouvrir l'outil Recadrer", "Sélectionner la zone", "Télécharger"] : ["Open Crop Tool", "Select Area", "Download"]}
                        lang={lang}
                    />

                    <div className="mt-16">
                        <h3 className="text-2xl font-bold mb-6">FAQ</h3>
                        <div className="space-y-6">
                            {t.faq.map((item: any, i: number) => (
                                <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <h4 className="font-bold mb-2">{item.q}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 text-white rounded-[2rem] p-12 text-center shadow-xl">
                    <h3 className="text-3xl font-bold mb-6">{t.cta}</h3>
                    <Link href={`/${lang}/crop-pdf`} className="inline-block bg-white text-slate-900 hover:scale-105 transition-all px-8 py-4 rounded-full font-bold text-lg border-2 border-transparent hover:border-white hover:bg-slate-900 hover:text-white">
                        {t.ctaBtn}
                    </Link>
                </div>

                <div className="mt-20">
                    <RelatedTools lang={lang} currentPath="/guides/trim-pdf" category="organize" />
                </div>

                <AuthorBio lang={lang} />
            </div>
        </PageLayout>
    );
};
