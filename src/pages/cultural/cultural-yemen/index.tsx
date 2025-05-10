import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const YemenCulturePage = () => {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng") || "en";
    if (i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang).then(() => {
        setIsReady(true);
      });
    } else {
      setIsReady(true);
    }
  }, [i18n]);

  if (!isReady) return null; // or show a spinner

  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";

  const sections = [
    { id: "history", image: "https://cdn.britannica.com/49/10549-004-84634252/Palace-sultan-Saywun-Yemen.jpg", link: "/yemen-history" },
    { id: "geography", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Yemen_topography.png/800px-Yemen_topography.png", link: "/yemen-geography" },
    { id: "food", image: "https://cdn.al-ain.com/images/2021/12/05/90-140302-yemeni-cuisine_700x400.jpeg", link: "/yemeni-food" },
    { id: "clothing", image: "https://images.alwatanvoice.com/news/large/9998447170.jpg", link: "/yemeni-clothing" },
    { id: "dance", image: "https://arabic.cnn.com/sites/default/files/styles/full_card_image/public/2022/06/23/images/307098.jpg", link: "/yemeni-dance" },
    { id: "music", image: "https://www.aljazeera.net/wp-content/uploads/2023/05/GettyImages-579245902.jpg", link: "/yemeni-music" },
  ];

  return (
    <main className="text-black px-2 sm:px-4">
      {sections.map((section, index) => {
        const isEven = index % 2 === 1;
        return (
          <section
            key={section.id}
            className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full max-w-7xl bg-white mx-auto my-6 rounded-2xl border border-gray-200 dark:border-gray-700 before:absolute before:inset-0 before:rounded-2xl before:-z-10 before:blur-md before:opacity-70 before:bg-gradient-to-r before:from-red-500 before:via-white before:to-black"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10`}>
              <div className={`w-full lg:w-1/2 text-${isRTL ? "right" : "left"} lg:text-${isRTL ? "right" : "left"}`}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  {t(`culture.sections.${section.id}.title`)}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-xl mx-auto lg:mx-0">
                  {t(`culture.sections.${section.id}.description`)}
                </p>
                <Link
                  to={section.link}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full shadow transition duration-300"
                >
                  {t("culture.sections.readMore")}
                </Link>
              </div>
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <img
                  src={section.image}
                  alt={t(`culture.sections.${section.id}.title`)}
                  className="w-full max-h-[450px] object-cover rounded-2xl border border-gray-600 shadow-lg"
                />
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default YemenCulturePage;
