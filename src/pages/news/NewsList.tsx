import React from "react";
import { Link } from "react-router-dom";
import useNews from "../../api/useNews";
import { formatDate } from "../../utils";
import { UPLOAD_URL } from "../../api/myAxios";
import { sortByDate } from "../../utils";
import Loading from "../../components/Loading";
import { useTranslation } from "react-i18next";

// Define the NewsItem interface (if not already defined)
interface NewsItem {
  _id: string;
  title: string;
  titleArabic?: string;
  titleEnglish?: string;
  titleRussian?: string;
  description: string;
  date: string;
  thumbnail?: string;
}

const NewsList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { getNews } = useNews();
  const { data, isLoading } = getNews;

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <h1>{t("no_news")}</h1>;
  }

  const limitedNews = sortByDate(data).slice(0, 3);

  // Function to get the title based on the current language
  const getTitle = (news: NewsItem) => {
    const currentLanguage = i18n.language;
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
    <section className="flex items-center justify-center min-h-auto py-12 px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl">
        {limitedNews.map((news) => (
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
              <div className="p-4">
                {/* News Title */}
                <h3 className="text-md   font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {getTitle(news)}
                </h3>
                {/* News Date */}
                <p>{formatDate(news.date)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsList;
