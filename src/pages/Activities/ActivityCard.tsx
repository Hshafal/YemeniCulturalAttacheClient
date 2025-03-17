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
  const textDirection = currentLanguage === "ar" ? "rtl" : "ltr";

  return (
    <div
      className="w-full max-w-sm flex flex-col rounded-lg overflow-hidden shadow-lg bg-white"
      dir={textDirection}
    >
      <img src={imageSrc} alt={imageAlt} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="font-bold text-lg mb-2 flex-grow">{title}</div>
        <Link to={`/activity/${id}`} className="text-blue-600 hover:underline self-start">
          {currentLanguage === "ar"
            ? "اقرأ المزيد"
            : currentLanguage === "ru"
              ? "Читать далее"
              : "Read more"}
  
        </Link>
      </div>
    </div>
  );
};

export default Card;
