import React from 'react';
import { useTranslation } from 'react-i18next';

const CulturalMagazine: React.FC = () => {
  const { t } = useTranslation();

  const documents = [

    { name: 'العدد الخاص للمجلة الثقافية " رِواق مبتعث " لعام 2024 - حصاد 2024', url: '/رواق_مبتعث.pdf' },
    { name: 'العدد الخاص للمجلة الثقافية " رِواق مبتعث " لعام 2024 - حصاد 2024', url: '/رواق_مبتعث.pdf' },
  ];

  return (
    <div className="mb-4 w-full max-w-7xl px-4 py-6 md:px-5 lg:px-5 mx-auto">
      <h3 className="text-lg font-semibold">{t('culturalMagazine.title')}</h3>
      <p className="p-2">{t('culturalMagazine.description')}</p>

      {/* Display downloadable links for the first three documents */}
      {documents.slice(0, -1).map((doc, index) => (
        <a
          key={index}
          href={doc.url}
          download
          className="block p-2 text-blue-500 underline"
        >
          {doc.name}
        </a>
      ))}

      {/* Display the last document as an embedded PDF with its title */}
      {documents.length > 0 && (
        <div>
          <h4 className="text-md font-semibold p-2">{documents[documents.length - 1].name}</h4>
          <iframe
            src={documents[documents.length - 1].url}
            width="100%"
            height="600px"
            title={t('culturalMagazine.iframeTitle')}
          />
        </div>
      )}
    </div>
  );
};

export default CulturalMagazine;
