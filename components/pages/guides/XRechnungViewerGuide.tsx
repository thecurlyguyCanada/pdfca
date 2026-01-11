import React from 'react';
import { FileText } from 'lucide-react';
import { Language } from '../../../utils/i18n';
import { GuideTemplate, GuideContent } from './GuideTemplate';

const contentMap: Record<string, GuideContent> = {
    en: {
        seoTitle: 'XRechnung Viewer Guide',
        seoDesc: 'How to view and validate German XRechnung e-invoices.',
        title: 'XRechnung Viewer',
        subtitle: 'Validate and view standard German e-invoices.',
        breadcrumbHome: 'Home',
        breadcrumbGuides: 'Guides',
        breadcrumbTool: 'XRechnung',
        intro: `
**XRechnung** is the German standard for specific electronic invoices (e-invoicing). It is an XML-based format often embedded within or accompanying a PDF.

This guide explains how to visualize and validate these specialized invoice files.
        `,
        sections: [
            {
                id: 'what-is-xrechnung',
                title: 'What is XRechnung?',
                content: `
XRechnung is a structured data model based on the European Norm EN 16931. Unlike a standard PDF invoice which is designed for humans to read, XRechnung is designed for computers to process automatically.
Using a "Viewer" allows a human to render this XML data in a readable PDF-like layout.
                `
            },
            {
                id: 'zugferd',
                title: 'ZUGFeRD vs. XRechnung',
                content: `
*   **ZUGFeRD:** A hybrid format. It's a regular PDF file with an XML file attached inside it. You can open it in any PDF reader.
*   **XRechnung:** Pure XML. You cannot open it in a PDF reader; you need a specialized viewer to render it.
                `
            }
        ]
    },
    fr: {
        seoTitle: 'Guide Visualiseur XRechnung',
        seoDesc: 'Comment visualiser et valider les e-factures allemandes XRechnung.',
        title: 'Visualiseur XRechnung',
        subtitle: 'Validez et visualisez les e-factures allemandes standards.',
        breadcrumbHome: 'Accueil',
        breadcrumbGuides: 'Guides',
        breadcrumbTool: 'XRechnung',
        intro: `
**XRechnung** est la norme allemande pour les factures électroniques spécifiques (e-invoicing). C'est un format basé sur XML souvent intégré ou accompagnant un PDF.

Ce guide explique comment visualiser et valider ces fichiers de factures spécialisés.
        `,
        sections: [
            {
                id: 'what-is-xrechnung',
                title: 'Qu\'est-ce que XRechnung ?',
                content: `
XRechnung est un modèle de données structuré basé sur la Norme Européenne EN 16931. Contrairement à une facture PDF standard conçue pour être lue par des humains, XRechnung est conçu pour être traité automatiquement par des ordinateurs.
Utiliser un "Visualiseur" permet à un humain de rendre ces données XML dans une mise en page lisible de type PDF.
                `
            },
            {
                id: 'zugferd',
                title: 'ZUGFeRD vs XRechnung',
                content: `
*   **ZUGFeRD :** Un format hybride. C'est un fichier PDF régulier avec un fichier XML attaché à l'intérieur. Vous pouvez l'ouvrir dans n'importe quel lecteur PDF.
*   **XRechnung :** XML pur. Vous ne pouvez pas l'ouvrir dans un lecteur PDF ; vous avez besoin d'un visualiseur spécialisé pour le rendre.
                `
            }
        ]
    },
    pt: {
        seoTitle: 'Guia Visualizador XRechnung',
        seoDesc: 'Como visualizar e validar faturas eletrônicas alemãs XRechnung.',
        title: 'Visualizador XRechnung',
        subtitle: 'Valide e visualize faturas eletrônicas alemãs padrão.',
        breadcrumbHome: 'Início',
        breadcrumbGuides: 'Guias',
        breadcrumbTool: 'XRechnung',
        intro: `
**XRechnung** é o padrão alemão para faturas eletrônicas específicas (e-invoicing). É um formato baseado em XML frequentemente incorporado ou acompanhando um PDF.

Este guia explica como visualizar e validar esses arquivos de fatura especializados.
        `,
        sections: [
            {
                id: 'what-is-xrechnung',
                title: 'O que é XRechnung?',
                content: `
XRechnung é um modelo de dados estruturado baseado na Norma Europeia EN 16931. Ao contrário de uma fatura PDF padrão projetada para humanos lerem, XRechnung é projetado para computadores processarem automaticamente.
Utiliser um "Visualizador" permite que um humano renderize esses dados XML em um layout legível semelhante a um PDF.
                `
            },
            {
                id: 'zugferd',
                title: 'ZUGFeRD vs. XRechnung',
                content: `
*   **ZUGFeRD:** Um formato híbrido. É um arquivo PDF regular com um arquivo XML anexado dentro dele. Você pode abri-lo em qualquer leitor de PDF.
*   **XRechnung:** XML puro. Você não pode abri-lo em um leitor de PDF; você precisa de um visualizador especializado para renderizá-lo.
                `
            }
        ]
    }
};

export const XRechnungViewerGuide: React.FC<{ lang: Language }> = ({ lang }) => {
    const content = contentMap[lang] || contentMap.en;

    return (
        <GuideTemplate
            lang={lang}
            slug="xrechnung-viewer"
            icon={<FileText size={32} />}
            content={content}
        />
    );
};
