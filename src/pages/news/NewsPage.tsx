import React from "react";
import useNews from "../../api/useNews";
import { Link } from "react-router-dom";
import { formatDate, sortByDate } from "../../utils";
import { UPLOAD_URL } from "../../api/myAxios";
import { useTranslation } from "react-i18next";
import Loading from "../../components/Loading";

interface News {
  _id: string;
  title: string;
  titleArabic?: string;
  titleEnglish?: string;
  titleRussian?: string;
  thumbnail?: string;
  date: string;
}

const NewsPage: React.FC = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const textDirection = currentLanguage === "ar" ? "rtl" : "ltr";

  return (
    <div className="min-h-screen bg-gray-50" dir={textDirection}>
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="p-4 max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
          {t("news.main_news")}
          </h1>
        </div>
      </header>
      <main>
        <News currentLanguage={currentLanguage} />
      </main>
    </div>
  );
};

interface NewsProps {
  currentLanguage: string;
}

function News({ currentLanguage }: NewsProps) {
  const { getNews } = useNews();
  const { data, isLoading } = getNews;

  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return <h1>There are no news to view</h1>;
  }

  // Function to get localized title
  const getTitle = (news: News) => {
    switch (currentLanguage) {
      case "ar":
        return news.titleArabic || news.title;
      case "en":
        return news.titleEnglish || news.title;
      case "ru":
        return news.titleRussian || news.title;
      default:
        return news.title;
    }
  };

  return (
    <section className="flex items-center justify-center min-h-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        {sortByDate(data).map((news) => (
          <div
            key={news._id}
            className="flex flex-col bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Link to={`/news/${news._id}`} className="group">
              {/* News Image */}
              <img
                src={news.thumbnail ? `${UPLOAD_URL}/${news.thumbnail}` : "/news/news3.jpg"}
                alt={getTitle(news)}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <p className="px-2">{formatDate(news.date)}</p>
              <div className="p-4">
                {/* News Title */}
                <h3 className="text-md font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {getTitle(news)}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsPage;