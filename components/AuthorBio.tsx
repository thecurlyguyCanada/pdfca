import React from 'react';
import { User, MapPin, Briefcase } from 'lucide-react';

interface AuthorBioProps {
  name?: string;
  title?: string;
  bio?: string;
  location?: string;
  image?: string;
  lang?: 'en' | 'fr';
}

/**
 * AuthorBio Component
 *
 * Displays author information for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 *
 * 2026 SEO Best Practice: Google rewards content with visible author credentials
 * and real human experience. Sites with strong E-E-A-T signals are 3-5x more
 * likely to be cited in AI Overviews.
 *
 * Key E-E-A-T Signals:
 * - Visible author name and credentials
 * - Location (establishes local authority)
 * - Expertise/experience markers
 * - Human photo (not stock images)
 * - Consistent authorship across pages
 */
export const AuthorBio: React.FC<AuthorBioProps> = ({
  name = 'pdfcanada.ca Team',
  title = 'Privacy-Focused PDF Engineers',
  bio,
  location = 'Toronto, Ontario, Canada',
  image,
  lang = 'en',
}) => {
  const defaultBio =
    lang === 'fr'
      ? "Ingénieurs logiciels passionnés par la confidentialité et les outils locaux. Basés à Toronto, nous créons des outils PDF gratuits qui traitent vos fichiers directement dans votre navigateur."
      : 'Software engineers passionate about privacy and local-first tools. Based in Toronto, we build free PDF tools that process your files directly in your browser—never on our servers.';

  const writtenBy = lang === 'fr' ? 'Rédigé par' : 'Written by';

  return (
    <div
      className="author-bio border-t border-gray-200 mt-12 pt-8 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6"
      itemScope
      itemType="https://schema.org/Person"
    >
      <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-4">
        {writtenBy}
      </p>
      <div className="flex gap-4 items-start">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            itemProp="image"
            width="64"
            height="64"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-canada-red to-red-700 flex items-center justify-center flex-shrink-0">
            <User size={32} className="text-white" />
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 text-lg mb-1" itemProp="name">
            {name}
          </h4>
          <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
            {title && (
              <div className="flex items-center gap-1" itemProp="jobTitle">
                <Briefcase size={14} className="text-gray-400" />
                <span>{title}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-1" itemProp="address">
                <MapPin size={14} className="text-gray-400" />
                <span>{location}</span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed" itemProp="description">
            {bio || defaultBio}
          </p>
        </div>
      </div>

      {/* Hidden schema.org markup for SEO */}
      <meta itemProp="knowsAbout" content="PDF Processing" />
      <meta itemProp="knowsAbout" content="Privacy Engineering" />
      <meta itemProp="knowsAbout" content="Browser-based Tools" />
      <meta itemProp="knowsAbout" content="Document Security" />
    </div>
  );
};
