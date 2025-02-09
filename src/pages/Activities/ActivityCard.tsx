import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const Card: React.FC<CardProps> = ({ id, title, imageSrc, imageAlt }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={imageSrc} alt={imageAlt} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-right">{title}</div>
        <Link to={`/activity/${id}`} className="text-blue-600 hover:underline">
          اقرأ المزيد
        </Link>
      </div>
    </div>
  );
};

export default Card;
