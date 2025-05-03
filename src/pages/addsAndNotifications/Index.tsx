import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import myAxios, { UPLOAD_URL } from "../../api/myAxios";
import usePDFs from "../../api/usePDFS";
import { formatDate } from "../../utils";

interface AdItem {
  _id: string;
  title: string;
  titleArabic?: string;
  titleEnglish?: string;
  titleRussian?: string;
  description: string;
  descriptionArabic?: string;
  descriptionEnglish?: string;
  descriptionRussian?: string;
  date: string;
  thumbnail?: string;
}

const LawsAndRegulations: React.FC = () => {
  const [isCulOpen, setIsCulOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const { announceCulQuery } = usePDFs();
  const {
    data: culData,
    isLoading: isCulLoading,
    isError: isCulError,
  } = announceCulQuery;

  const {
    data: adsData,
    isLoading: isAdsLoading,
    isError: isAdsError,
  } = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      const res = await myAxios.get("/news/ads");
      return res.data as AdItem[];
    },
  });

  useEffect(() => {
    if (adsData) {
      console.log("ADS Data:", adsData);
    }
  }, [adsData]);

  const toggleCul = () => setIsCulOpen((prev) => !prev);

  const adsSectionTitle =
    currentLang === "ar"
      ? "الإعلانات"
      : currentLang === "en"
        ? "Announcements"
        : currentLang === "ru"
          ? "Объявления"
          : "الإعلانات";

  return (
    <main>
      {/* تعميمات الملحقية - Only show in Arabic */}
      {currentLang === "ar" && (
        <section className="mb-6 p-6 bg-white shadow-md rounded-lg max-w-7xl mx-auto">
          <div className="flex gap-1">
            <div className="h-6 w-1 bg-red-500" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              تعميمات الملحقية
            </h3>
          </div>

          {isCulLoading ? (
            <h1>Loading...</h1>
          ) : isCulError ? (
            <h1>Server error</h1>
          ) : (
            <div className="mt-4 space-y-2">
              {culData?.slice(0, 3).map((pdf) => (
                <a
                  key={pdf._id}
                  href={pdf.file}
                  download
                  className="text-blue-400 hover:underline hover:text-blue-300 block"
                >
                  {pdf.title} - {formatDate(pdf.date)}
                </a>
              ))}

              {isCulOpen &&
                culData?.slice(3).map((pdf) => (
                  <a
                    key={pdf._id}
                    href={pdf.file}
                    download
                    className="text-blue-400 hover:underline hover:text-blue-300 block"
                  >
                    {pdf.title} - {formatDate(pdf.date)}
                  </a>
                ))}

              {culData?.length === 0 ? (
                <h1>قريبا</h1>
              ) : (
                <button
                  onClick={toggleCul}
                  className="text-blue-500 mt-2 focus:outline-none"
                >
                  {isCulOpen ? "إخفاء" : "إظهار المزيد"}
                </button>
              )}
            </div>
          )}
        </section>
      )}

      {/* الإعلانات (ADS Section) */}
      <section className="mb-6 p-6 bg-white shadow-md rounded-lg max-w-7xl mx-auto">
        <div className="flex gap-1">
          <div className="h-6 w-1 bg-red-500" />
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            {adsSectionTitle}
          </h3>
        </div>

        {isAdsLoading ? (
          <h1>Loading...</h1>
        ) : isAdsError ? (
          <h1>Server error</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {adsData?.map((ad) => (
              <Link
                to={`/ads/${ad._id}`}
                key={ad._id}
                className="block border rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <img
                  src={
                    ad.thumbnail
                      ? `${UPLOAD_URL}/${ad.thumbnail}`
                      : "/placeholder.jpg"
                  }
                  alt={ad.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {currentLang === "ar"
                      ? ad.titleArabic || ad.title
                      : currentLang === "en"
                        ? ad.titleEnglish || ad.title
                        : currentLang === "ru"
                          ? ad.titleRussian || ad.title
                          : ad.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {formatDate(ad.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default LawsAndRegulations;
