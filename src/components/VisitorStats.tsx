import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import myAxios from "../api/myAxios";

// Define the interface for the visit counts
interface VisitCounts {
  day: number;
  month: number;
  total: number;
}

const VisitorStats: React.FC = () => {
  const [visitCounts, setVisitCounts] = useState<VisitCounts | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchVisitCounts = async () => {
      try {
        const res = await myAxios.get("/visitors/visit-counts");
        setVisitCounts(res.data);
      } catch (err) {
        console.error("Error fetching visit counts:", err);
      }
    };

    fetchVisitCounts();
  }, []);

  if (!visitCounts) {
    return (
      <div className="text-center text-gray-600 py-10">
        {i18n.language === "ar"
          ? "جاري التحميل..."
          : i18n.language === "ru"
          ? "Загрузка..."
          : "Loading..."}
      </div>
    );
  }

  return (
    <section className="p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-lg font-semibold text-center text-gray-800 mb-3">
          {i18n.language === "ar"
            ? "إحصائيات الزوار"
            : i18n.language === "ru"
            ? "Статистика посетителей"
            : "Visitor Statistics"}
        </h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-gray-600">
              {i18n.language === "ar"
                ? "اليوم"
                : i18n.language === "ru"
                ? "Сегодня"
                : "Today"}
            </p>
            <p className="text-lg font-bold">{visitCounts.day}</p>
          </div>
          <div>
            <p className="text-gray-600">
              {i18n.language === "ar"
                ? "الشهر"
                : i18n.language === "ru"
                ? "Месяц"
                : "Month"}
            </p>
            <p className="text-lg font-bold">{visitCounts.month}</p>
          </div>
          <div>
            <p className="text-gray-600">
              {i18n.language === "ar"
                ? "إجمالي الزيارات"
                : i18n.language === "ru"
                ? "Общее количество посещений"
                : "Total Visits"}
            </p>
            <p className="text-lg font-bold">{visitCounts.total}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorStats;
