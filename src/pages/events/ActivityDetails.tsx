import React from "react";
import { useTranslation } from "react-i18next";
import useNews from "../../api/useNews";
import { formatDate } from "../../utils";
import { UPLOAD_URL } from "../../api/myAxios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActivityDetails: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { getByIdQuery } = useNews();
  const { data, isLoading, isError } = getByIdQuery;

  if (isLoading) return <h1 className="text-center">Loading...</h1>;
  if (isError || !data) return <h1 className="text-center text-red-500">Activity not found</h1>;

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

  const images = [data.thumbnail, ...(data.images || [])].filter(Boolean);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Image Slider */}
        {images.length > 0 && (
          <Slider {...sliderSettings}>
            {images.map((img: string, idx: number) => (
              <div key={idx}>
                <img
                  src={`${UPLOAD_URL}/${img}`}
                  alt={`activity-image-${idx}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        )}

        {/* Title, Date, Description */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">{title}</h1>
          <p className="text-sm text-gray-500 mb-4 text-center flex items-center justify-center gap-2">
            <span>📅</span> {formatDate(data.date)}
          </p>

          <div
            className="prose max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
