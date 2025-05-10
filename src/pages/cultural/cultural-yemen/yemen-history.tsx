import { useTranslation } from "react-i18next";
import { useState } from "react";

const HistoryPage = () => {
  const { t } = useTranslation();

  const [showFullAncient, setShowFullAncient] = useState(false);
  const [showFullModern, setShowFullModern] = useState(false);

  const toggleText = (isExpanded: boolean) => (isExpanded ? t("readLess") : t("readMore"));

  // الحصول على الفقرات كمصفوفة من الترجمة
  const ancientParagraphs = t("historyPage.sections.ancient.descriptionParagraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <main className="dark:text-gray-800 md:px-16 py-12 min-h-auto px-4 sm:px-6 lg:px-8 text-black w-full max-w-7xl mx-auto">
      {/* Hero Image */}
      <div className="mb-12">
        <img
          src="https://www.friendsofsouthyemen.org/images/historic_aden_700x373.jpg"
          alt="Yemen History"
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mt-6 text-center">
          {t("historyPage.heroTitle")}
        </h1>
      </div>

      {/* Section 1: Ancient Civilizations */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">{t("historyPage.sections.ancient.title")}</h2>
        {ancientParagraphs &&
          (showFullAncient
            ? ancientParagraphs.map((para, index) => (
              <p key={index} className="leading-relaxed mb-4">
                {para}
              </p>
            ))
            : ancientParagraphs.slice(0, 2).map((para, index) => (
              <p key={index} className="leading-relaxed mb-4">
                {para}
              </p>
            )))}
        <button
          onClick={() => setShowFullAncient(!showFullAncient)}
          className="text-red-600 hover:underline font-medium mb-6"
        >
          {toggleText(showFullAncient)}
        </button>

        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/yGJisfL45GE"
            title={t("historyPage.sections.ancient.videoTitle")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Section 3: Modern Yemen */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">{t("historyPage.sections.modern.title")}</h2>
        <p className="leading-relaxed mb-4">
          {showFullModern
            ? t("historyPage.sections.modern.description")
            : t("historyPage.sections.modern.description").slice(0, 250) + "..."}
        </p>
        <button
          onClick={() => setShowFullModern(!showFullModern)}
          className="text-red-600 hover:underline font-medium mb-6"
        >
          {toggleText(showFullModern)}
        </button>

        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/1JSQ7qjD4cs"
            title={t("historyPage.sections.modern.videoTitle")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Footer Message */}
      <div className="text-center mt-16">
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
          {t("historyPage.footer")}
        </p>
      </div>
    </main>
  );
};

export default HistoryPage;
