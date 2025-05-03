import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import myAxios from "../../api/myAxios";
import { formatDate } from "../../utils";

interface AdItem {
  _id: string;
  title: string;
  titleArabic?: string;
  titleEnglish?: string;
  titleRussian?: string;
  date: string;
  thumbnail?: string;
}

const AdsList: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { data, isLoading, isError } = useQuery<AdItem[]>({
    queryKey: ["ads"],
    queryFn: async () => {
      const res = await myAxios.get("/news/ads");
      return res.data;
    },
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Server error</h1>;

  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map((ad) => (
          <Link
            key={ad._id}
            to={`/ads/${ad._id}`}
            className="bg-white shadow hover:shadow-lg rounded-lg overflow-hidden transition"
          >
            {ad.thumbnail && (
              <img
                src={`/uploads/${ad.thumbnail}`}
                alt={ad.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {lang === "ar"
                  ? ad.titleArabic || ad.title
                  : lang === "en"
                    ? ad.titleEnglish || ad.title
                    : lang === "ru"
                      ? ad.titleRussian || ad.title
                      : ad.title}
              </h2>
              <p className="text-sm text-gray-500">{formatDate(ad.date)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AdsList;
