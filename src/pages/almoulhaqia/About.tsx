import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();

  const getImageSrc = () => {
    if (i18n.language.startsWith("ar")) return "/avitorsar.jpeg";
    if (i18n.language.startsWith("ru")) return "/avitorsru.jpeg";
    return "/avitors.jpeg";
  };

  // Ensure correct types to prevent TypeScript errors
  const objectives = t('about.objectives.points', { returnObjects: true }) as string[];
  const tasks = t('about.tasks.points', { returnObjects: true }) as string[];
  const statistics = t('about.statistics.fields', { returnObjects: true }) as string[];
  // const advisors = t('about.advisors.list', { returnObjects: true }) as { name: string; years: string }[];

  return (
    <section className="p-4 sm:p-6 md:mt-2">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 space-y-10 sm:space-y-16">

        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className='flex gap-1 items-center justify-start '>
              <div className='w-1 h-8 bg-red-500'></div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900">{t('about.title')}</h2>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">{t('about.intro')}</p>

            {/* Objectives Section */}
            <div className="mt-6">
              <div className='flex gap-1 items-center justify-start '>
                <div className=' w-3 h-3 rounded-full  bg-red-500'></div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 py-4">
                  {t('about.objectives.title')}
                </h3>
              </div>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-gray-700">
                {objectives.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="./mulhaqia.jpg"
              alt={t('about.alt')}
              className="rounded-2xl sm:rounded-3xl object-cover shadow-lg w-full max-w-xs sm:max-w-md"
            />
          </div>
        </div>

        {/* Tasks Section */}
        <div>
          <div className='flex gap-1 items-center justify-start '>
            <div className=' w-3 h-3 rounded-full  bg-red-500'></div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 py-4">
              {t('about.tasks.title')}
            </h3>
          </div>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-gray-700">
            {tasks.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Yemen-Russia Relations Section */}
        <div className='flex gap-1 items-center justify-start '>
          <div className=' w-3 h-3 rounded-full  bg-red-500'></div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 py-4">
            {t('about.relations.title')}
          </h3>
        </div>

        {/* Statistics Section */}
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-thin text-gray-900 mb-4 sm:mb-6">
            {t('about.statistics.description')}
          </h3>
          <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base lg:text-lg text-gray-700">
            {statistics.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
        </div>

        {/* Cultural Advisors Section */}
        <div>
          <div className='flex gap-1 items-center justify-start '>
            <div className=' w-3 h-3 rounded-full  bg-red-500'></div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 py-4">
              {t('about.advisors.title')}
            </h3>
          </div>
          {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
            {advisors.map((advisor, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-2">
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-full shadow-lg border-2 
          ${index === advisors.length - 1 ? 'bg-white border-red-600 text-black' : 'bg-red-600 border-gray-700 text-gray-100'}`}
                >
                  <p className="text-xs sm:text-sm md:text-base font-medium text-center">
                    {advisor.name}
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{advisor.years}</p>
              </div>
            ))}
          </div> */}
          <div>
            <div>
              <img src={getImageSrc()} alt="Advisors image" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
