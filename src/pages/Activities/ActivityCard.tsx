import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface CardProps {
  id?: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const Card: React.FC<CardProps> = ({ id, title, imageSrc, imageAlt }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Determine text direction based on the current language
  const textDirection = currentLanguage === "ar" ? "rtl" : "ltr";

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" dir={textDirection}>
      <img src={imageSrc} alt={imageAlt} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <Link to={`/activity/${id}`} className="text-blue-600 hover:underline">
          {currentLanguage === "ar" ? "اقرأ المزيد" : "Read more"}
        </Link>
      </div>
    </div>
  );
};

export default Card;
