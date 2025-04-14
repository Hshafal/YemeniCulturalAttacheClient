import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import myAxios, { UPLOAD_URL } from "../../api/myAxios";
import { Helmet } from "react-helmet";
import useNews from "../../api/useNews";
import { formatDate, sortByDate } from "../../utils";
import Loading from "../../components/Loading";

interface News {
  _id: string;
  title: string;
  titleArabic?: string;
  titleEnglish?: string;
  titleRussian?: string;
  description: string;
  descriptionArabic?: string;
  descriptionEnglish?: string;
  descriptionRussian?: string;
  thumbnail?: string;
  date: string;
}

const NewsDetails: React.FC = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { data, isLoading, isError } = useQuery<News>({
    queryKey: ["news", id],
    queryFn: async () => {
      const res = await myAxios.get(`/news/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError || !data) return <h1 className="text-xl text-red-500 text-center">Server error</h1>;
 
  const title =
    currentLanguage === "ar"
      ? data.titleArabic || data.title
      : currentLanguage === "en"
      ? data.titleEnglish || data.title
      : currentLanguage === "ru"
      ? data.titleRussian || data.title
      : data.title;

  const description =
    currentLanguage === "ar"
      ? data.descriptionArabic || data.description
      : currentLanguage === "en"
      ? data.descriptionEnglish || data.description
      : currentLanguage === "ru"
      ? data.descriptionRussian || data.description
      : data.description;

  const textDirection = currentLanguage === "ar" ? "rtl" : "ltr";

  return (
    <div dir={textDirection} className="container mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-8">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <main className="flex-1 bg-white p-6 rounded-lg shadow-lg">
        <img
          src={data.thumbnail ? `${UPLOAD_URL}/${data.thumbnail}` : "/news/news3.jpg"}
          alt={title}
          className="rounded-lg mb-4 w-full h-64 sm:h-80 md:h-96 object-cover shadow-md"
        />
        <p className="text-sm text-gray-500 mb-2">{formatDate(data.date)}</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="border p-4 rounded-lg shadow-md text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
      </main>

      <RelatedNews currentLanguage={currentLanguage} />
    </div>
  );
};

function RelatedNews({ currentLanguage }: { currentLanguage: string }) {
  const { getNews } = useNews();
  const { data: allNews, isLoading, isError } = getNews;

  if (isLoading) return <h1 className="text-lg text-gray-600 text-center">Loading...</h1>;
  if (isError) return <h1 className="text-lg text-red-500 text-center">Server error</h1>;

  return (
    <aside className="lg:w-1/3">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">أخبار ذات صلة</h2>
      <ul className="space-y-4">
        {allNews &&
          sortByDate(allNews).map((item: News) => {
            const title =
              currentLanguage === "ar"
                ? item.titleArabic || item.title
                : currentLanguage === "en"
                ? item.titleEnglish || item.title
                : currentLanguage === "ru"
                ? item.titleRussian || item.title
                : item.title;

            return (
              <li key={item._id} className="border p-3 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                <Link to={`/news/${item._id}`} className="flex items-center gap-4">
                  <img
                    src={item.thumbnail ? `${UPLOAD_URL}/${item.thumbnail}` : "/news/news3.jpg"}
                    alt={title}
                    className="w-14 h-14 object-cover rounded-lg shadow-md"
                  />
                  <div>
                    <p className="text-xs text-gray-500">{formatDate(item.date)}</p>
                    <h3 className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm sm:text-base">
                      {title}
                    </h3>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </aside>
  );
}

export default NewsDetails;
