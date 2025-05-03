// src/pages/AdDetails.tsx

import React from "react";
  import { useTranslation } from "react-i18next";
import useNews from "../../api/useNews";
import { formatDate } from "../../utils";
import { UPLOAD_URL } from "../../api/myAxios";

const AdDetails: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { getByIdQuery } = useNews();
  const { data, isLoading, isError } = getByIdQuery;

  if (isLoading) return <h1>Loading...</h1>;
  if (isError || !data) return <h1>Ad not found</h1>;

  const title =
    lang === "ar"
      ? data.titleArabic || data.title
      : lang === "en"
        ? data.titleEnglish || data.title
        : lang === "ru"
          ? data.titleRussian || data.title
          : data.title;

  const description =
    lang === "ar"
      ? data.descriptionArabic || data.description
      : lang === "en"
        ? data.descriptionEnglish || data.description
        : lang === "ru"
          ? data.descriptionRussian || data.description
          : data.description;

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      {data.thumbnail && (
        <img
          src={`${UPLOAD_URL}/${data.thumbnail}`}
          alt={title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-4">{formatDate(data.date)}</p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  );
};

export default AdDetails;
