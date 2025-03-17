import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import myAxios, { UPLOAD_URL } from "../api/myAxios";
import { Helmet } from "react-helmet";


const CategoryPage: React.FC = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Fix: Set text direction based on language
  const textDirection = currentLanguage === "ar" ? "rtl" : "ltr";
  const textAlign = currentLanguage === "ar" ? "text-right" : "text-left";

  const { data: news, isLoading, isError } = useQuery({
    queryKey: ["news", id],
    queryFn: async () => {
      const res = await myAxios.get(`/news/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Server Error :(</h1>;

  // Extract language-specific content
  const title =
    currentLanguage === "ar"
      ? news.titleArabic || news.title
      : currentLanguage === "en"
      ? news.titleEnglish || news.title
      : news.titleRussian || news.title;

  const description =
    currentLanguage === "ar"
      ? news.descriptionArabic || news.description
      : currentLanguage === "en"
      ? news.descriptionEnglish || news.description
      : news.descriptionRussian || news.description;

  const category =
    currentLanguage === "ar"
      ? news.categoryArabic || news.category
      : currentLanguage === "en"
      ? news.categoryEnglish || news.category
      : news.categoryRussian || news.category;

  return (
    <div className="w-full flex justify-center items-center">
      <div
        className={`flex max-w-4xl flex-col items-center p-4 bg-gray-100 ${textAlign}`}
        dir={textDirection} // Fix: Set correct direction dynamically
      >
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>

        {/* News Image */}
        <img
          src={news.thumbnail ? `${UPLOAD_URL}/${news.thumbnail}` : "/news/news3.jpg"}
          alt={title}
          className="rounded-lg mb-6 w-full h-80 object-cover shadow-md"
        />

        {/* News Title */}
        <h1 className="text-2xl font-bold mb-2">{title}</h1>

        {/* News Date */}
        <span className="text-gray-500 text-sm mt-2">
          {new Date(news.date).toLocaleDateString(
            currentLanguage === "ar" ? "ar-EG" : currentLanguage === "ru" ? "ru-RU" : "en-US"
          )}
        </span>

        {/* News Description */}
        <div className="border p-4 rounded-lg shadow-md" dangerouslySetInnerHTML={{ __html: description }} />

        {/* News Additional Images */}
        {news.images && news.images.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {news.images.map((image: string, index: number) => (
              <img
                key={image}
                src={`${UPLOAD_URL}/${image}`}
                alt={`${title}-${index}`}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        )}

        {/* News Category */}
        <div className="flex flex-col items-end">
          <span
            className={`px-2 py-1 rounded ${
              news.isImportant ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {news.isImportant ? (currentLanguage === "ar" ? "مهم" : currentLanguage === "ru" ? "Важный" : "Important") : category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
